import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { ChangelogConfig, LLMConfig, LLMProvider, PipelineStats } from './types';
import { loadState, saveState, getSinceDate } from './state';
import { fetchMergedPRs } from './fetch-prs';
import { preFilter } from './pre-filter';
import { classifyPRs } from './classifier';
import { mapToArticles } from './mapper';
import { generateBrief } from './brief-generator';
import { updateArticle } from './article-updater';
import { createLLMClient } from './llm';

// Cargar variables de entorno
dotenv.config();

// ─── Configuración ───────────────────────────────────────────

const ARTICLES_DIR = process.env.ARTICLES_PATH || 'articles';

/** Proveedores válidos para LLM_PROVIDER */
const VALID_PROVIDERS = ['openai', 'anthropic', 'ollama'] as const;

function getConfig(): ChangelogConfig {
  const saasRepo = process.env.SAAS_REPO;
  if (!saasRepo) {
    throw new Error('Falta variable de entorno: SAAS_REPO. Copia .env.example a .env y completa los valores.');
  }

  const llm = getLLMConfig();
  const repoRoot = process.cwd();
  const dryRun = process.argv.includes('--dry-run');

  return {
    // Validado arriba — seguro hacer non-null assertion
    saasRepo: saasRepo!,
    articlesPath: path.resolve(repoRoot, ARTICLES_DIR),
    llm,
    dryRun,
    statePath: path.resolve(repoRoot, '.last-sync-state'),
    articleMapPath: path.resolve(repoRoot, 'config', 'change-to-article-map.yaml'),
    userFacingPathsConfigPath: path.resolve(repoRoot, 'config', 'user-facing-paths.yaml'),
    changeBriefPromptPath: path.resolve(repoRoot, 'prompts', 'change-brief.md'),
  };
}

/**
 * Lee la configuración del proveedor LLM desde variables de entorno.
 * Cada proveedor usa su propio prefijo: OPENAI_, ANTHROPIC_, OLLAMA_.
 */
function getLLMConfig(): LLMConfig {
  const rawProvider = (process.env.LLM_PROVIDER ?? 'openai').toLowerCase();

  if (!VALID_PROVIDERS.includes(rawProvider as LLMProvider)) {
    throw new Error(`LLM_PROVIDER inválido: "${rawProvider}". Opciones: ${VALID_PROVIDERS.join(', ')}`);
  }

  const provider = rawProvider as LLMProvider;

  switch (provider) {
    case 'anthropic': {
      const apiKey = process.env.ANTHROPIC_API_KEY;
      if (!apiKey) {
        throw new Error('Falta ANTHROPIC_API_KEY (requerida para LLM_PROVIDER=anthropic)');
      }
      return {
        provider,
        // Validado arriba — seguro hacer non-null assertion
        apiKey: apiKey!,
        model: process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-20250514',
      };
    }

    case 'ollama': {
      return {
        provider,
        apiKey: 'ollama', // Ollama no requiere API key
        model: process.env.OLLAMA_MODEL ?? 'llama3',
        baseUrl: process.env.OLLAMA_BASE_URL ?? 'http://localhost:11434/v1',
      };
    }

    case 'openai':
    default: {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('Falta OPENAI_API_KEY (requerida para LLM_PROVIDER=openai)');
      }
      return {
        provider,
        // Validado arriba — seguro hacer non-null assertion
        apiKey: apiKey!,
        model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
        baseUrl: process.env.OPENAI_BASE_URL,
      };
    }
  }
}

// ─── Utilidades ──────────────────────────────────────────────

function getAvailableArticles(articlesPath: string): string[] {
  return fs
    .readdirSync(articlesPath, { withFileTypes: true })
    .filter(e => e.isFile() && e.name.endsWith('.md'))
    .map(e => e.name)
    .sort();
}

function printStats(stats: PipelineStats): void {
  console.log('\n' + '─'.repeat(60));
  console.log('[changelog] Resumen del pipeline:');
  console.log(`  PRs encontradas:        ${stats.prsFound}`);
  console.log(`  Tras pre-filtro:        ${stats.prsAfterPreFilter}`);
  console.log(`  Tras clasificación LLM: ${stats.prsAfterClassification}`);
  console.log(`  Artículos actualizados: ${stats.articlesUpdated}`);
  console.log(`  Artículos sin cambios:  ${stats.articlesSkipped}`);
  console.log(`  Artículos con error:    ${stats.articlesFailed}`);

  if (stats.errors.length > 0) {
    console.log('\n  Errores:');
    for (const { context, error } of stats.errors) {
      console.log(`    - ${context}: ${error}`);
    }
  }

  console.log('─'.repeat(60) + '\n');
}

// ─── Pipeline principal ──────────────────────────────────────

async function main(): Promise<void> {
  const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
  console.log(`\n[changelog] Iniciando pipeline — ${timestamp}`);
  if (process.argv.includes('--dry-run')) {
    console.log('[changelog] Modo DRY-RUN activo — no se escribirán cambios');
  }
  console.log('─'.repeat(60));

  const config = getConfig();
  const stats: PipelineStats = {
    prsFound: 0,
    prsAfterPreFilter: 0,
    prsAfterClassification: 0,
    articlesUpdated: 0,
    articlesSkipped: 0,
    articlesFailed: 0,
    errors: [],
  };

  // 1. Cargar estado previo
  const state = loadState(config.statePath);
  const sinceDate = getSinceDate(state);
  console.log(`[changelog] Buscando cambios desde: ${sinceDate}`);

  // 2. Fetch PRs mergeadas
  const prs = fetchMergedPRs(config.saasRepo, sinceDate);
  stats.prsFound = prs.length;

  if (prs.length === 0) {
    console.log('[changelog] No hay PRs nuevas. Pipeline finalizado.');
    saveState(config.statePath, {
      lastRunAt: new Date().toISOString(),
      lastPrProcessed: state.lastPrProcessed,
      processedPrs: [],
    });
    printStats(stats);
    return;
  }

  // Filtrar PRs ya procesadas en runs anteriores
  const newPRs = prs.filter(pr => !state.processedPrs.includes(pr.number));
  if (newPRs.length === 0) {
    console.log('[changelog] Todas las PRs encontradas ya fueron procesadas.');
    saveState(config.statePath, {
      lastRunAt: new Date().toISOString(),
      lastPrProcessed: state.lastPrProcessed,
      processedPrs: state.processedPrs,
    });
    printStats(stats);
    return;
  }

  console.log(`[changelog] ${newPRs.length} PRs nuevas por procesar`);

  // 3. Etapa 1: Pre-filtro determinista
  console.log('\n[changelog] ── Etapa 1: Pre-filtro ──');
  const preFiltered = preFilter(newPRs, config.userFacingPathsConfigPath);

  const passed = preFiltered.filter(r => r.passed);
  const skipped = preFiltered.filter(r => !r.passed);
  stats.prsAfterPreFilter = passed.length;

  for (const r of skipped) {
    console.log(`  [skip] PR #${r.pr.number}: ${r.reason}`);
  }
  for (const r of passed) {
    console.log(`  [pass] PR #${r.pr.number}: ${r.reason}`);
  }

  if (passed.length === 0) {
    console.log('[changelog] Ninguna PR pasó el pre-filtro. Pipeline finalizado.');
    saveStateAfterRun(config, state, newPRs);
    printStats(stats);
    return;
  }

  // 4. Etapa 2: Clasificación LLM
  console.log('\n[changelog] ── Etapa 2: Clasificación LLM ──');
  const llm = createLLMClient(config.llm);

  const classifications = await classifyPRs(passed, llm);
  const userFacing = classifications.filter(c => c.isUserFacing);
  stats.prsAfterClassification = userFacing.length;

  if (userFacing.length === 0) {
    console.log('[changelog] Ningún cambio es user-facing. Pipeline finalizado.');
    saveStateAfterRun(config, state, newPRs);
    printStats(stats);
    return;
  }

  // 5. Etapa 3a: Mapeo a artículos
  console.log('\n[changelog] ── Etapa 3a: Mapeo a artículos ──');
  const availableArticles = getAvailableArticles(config.articlesPath);
  const articleChanges = await mapToArticles(
    classifications,
    config.articleMapPath,
    availableArticles,
    llm
  );

  if (articleChanges.size === 0) {
    console.log('[changelog] No se mapearon cambios a ningún artículo. Pipeline finalizado.');
    saveStateAfterRun(config, state, newPRs);
    printStats(stats);
    return;
  }

  // 6. Etapa 3b + Reescritura: Para cada artículo afectado
  console.log('\n[changelog] ── Etapa 3b: Briefs + Reescritura ──');

  for (const [articleFile, changes] of articleChanges) {
    try {
      // Generar brief
      const brief = await generateBrief(articleFile, changes, config.saasRepo, llm);

      // Actualizar artículo
      const result = await updateArticle(
        articleFile,
        [brief],
        config.articlesPath,
        llm,
        config.dryRun,
        config.changeBriefPromptPath
      );

      if (result.updated) {
        stats.articlesUpdated++;
      } else if (result.error) {
        stats.articlesFailed++;
        stats.errors.push({ context: articleFile, error: result.error });
      } else {
        stats.articlesSkipped++;
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      stats.articlesFailed++;
      stats.errors.push({ context: articleFile, error: msg });
    }

    // Rate limiting entre artículos
    await sleep(1000);
  }

  // 7. Guardar estado
  saveStateAfterRun(config, state, newPRs);

  // 8. Resumen
  printStats(stats);

  if (stats.articlesFailed > 0) {
    throw new Error(`${stats.articlesFailed} artículo(s) fallaron durante el changelog`);
  }
}

// Exportar para uso programático (desde nightly.ts)
export { main as runChangelog };

// ─── Helpers ─────────────────────────────────────────────────

function saveStateAfterRun(
  config: ChangelogConfig,
  previousState: import('./types').SyncState,
  processedPRs: import('./types').PullRequest[]
): void {
  const prNumbers = processedPRs.map(pr => pr.number);
  const maxPR = Math.max(...prNumbers, previousState.lastPrProcessed);

  saveState(config.statePath, {
    lastRunAt: new Date().toISOString(),
    lastPrProcessed: maxPR,
    processedPrs: prNumbers,
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Ejecución ───────────────────────────────────────────────

// Auto-ejecución solo cuando se ejecuta directamente (npm run changelog)
if (require.main === module) {
  main().catch(error => {
    console.error('[changelog] Error fatal:', error);
    process.exit(1);
  });
}
