import * as fs from 'fs';
import { parse as parseYaml } from 'yaml';
import { ClassificationResult, ArticleMapConfig, ChangeBrief, CommitType } from './types';
import { LLMClient } from './llm';

// ─── Etapa 3a: Mapeo cambio → artículo ──────────────────────

/**
 * Mapea clasificaciones user-facing a artículos concretos.
 * Usa la tabla de mapeo YAML como fuente primaria y el LLM como fallback.
 *
 * @param classifications - Resultados de clasificación (solo user-facing)
 * @param articleMapPath - Ruta al YAML de mapeo
 * @param availableArticles - Lista de ficheros .md disponibles
 * @param llm - Cliente LLM para fallback
 * @returns Mapa de artículo → array de cambios que le afectan
 */
export async function mapToArticles(
  classifications: ClassificationResult[],
  articleMapPath: string,
  availableArticles: string[],
  llm: LLMClient
): Promise<Map<string, MappedChange[]>> {
  const userFacing = classifications.filter(c => c.isUserFacing);

  if (userFacing.length === 0) {
    return new Map();
  }

  const articleMap = loadArticleMap(articleMapPath);
  const result = new Map<string, MappedChange[]>();

  console.log(`[mapper] Mapeando ${userFacing.length} cambios a artículos...`);

  for (const classification of userFacing) {
    const { pr, affectedAreas, summary } = classification;

    // Paso 1: buscar en la tabla de mapeo por affected_areas
    let matchedArticles = resolveFromMap(affectedAreas, articleMap, availableArticles);

    // Paso 2: si no hay match, intentar por keywords del summary
    if (matchedArticles.length === 0 && summary) {
      matchedArticles = resolveByKeywords(summary, articleMap, availableArticles);
    }

    // Paso 3: fallback al LLM si no hay match
    if (matchedArticles.length === 0) {
      matchedArticles = await resolveWithLLM(pr.title, summary, availableArticles, llm);
    }

    if (matchedArticles.length === 0) {
      console.warn(`  PR #${pr.number}: no se pudo mapear a ningún artículo`);
      continue;
    }

    console.log(`  PR #${pr.number} → ${matchedArticles.join(', ')}`);

    // Agregar a cada artículo afectado
    const commitType = extractCommitType(pr.title);
    for (const article of matchedArticles) {
      const existing = result.get(article) ?? [];
      existing.push({
        pr,
        summary,
        commitType,
      });
      result.set(article, existing);
    }
  }

  return result;
}

/** Cambio mapeado a un artículo */
export interface MappedChange {
  pr: import('./types').PullRequest;
  summary: string;
  commitType: CommitType;
}

// ─── Resolución por tabla de mapeo ───────────────────────────

function resolveFromMap(
  areas: string[],
  articleMap: ArticleMapConfig,
  available: string[]
): string[] {
  const matched = new Set<string>();

  for (const area of areas) {
    const mapping = articleMap.mappings[area];
    if (mapping) {
      for (const article of mapping.articles) {
        if (available.includes(article)) {
          matched.add(article);
        }
      }
    }
  }

  return Array.from(matched);
}

// ─── Resolución por keywords ─────────────────────────────────

function resolveByKeywords(
  text: string,
  articleMap: ArticleMapConfig,
  available: string[]
): string[] {
  const lowerText = text.toLowerCase();
  const matched = new Set<string>();

  for (const [, mapping] of Object.entries(articleMap.mappings)) {
    const hasKeyword = mapping.keywords.some(kw => lowerText.includes(kw.toLowerCase()));
    if (hasKeyword) {
      for (const article of mapping.articles) {
        if (available.includes(article)) {
          matched.add(article);
        }
      }
    }
  }

  return Array.from(matched);
}

// ─── Resolución por LLM (fallback) ──────────────────────────

async function resolveWithLLM(
  prTitle: string,
  summary: string,
  available: string[],
  llm: LLMClient
): Promise<string[]> {
  try {
    const response = await llm.callJson<{ articles: string[] }>({
      systemPrompt: `Eres un asistente que mapea cambios de software a artículos de documentación.
Dado un cambio y una lista de artículos disponibles, responde con los artículos que necesitan actualizarse.
Responde en JSON: { "articles": ["fichero1.md", "fichero2.md"] }
Si ningún artículo aplica, responde: { "articles": [] }`,
      userPrompt: `Cambio: ${prTitle}
Resumen: ${summary}

Artículos disponibles:
${available.map(a => `- ${a}`).join('\n')}`,
      temperature: 0.1,
      maxTokens: 200,
    });

    return (response.articles ?? []).filter(a => available.includes(a));
  } catch (error) {
    console.warn(
      '[mapper] Fallback LLM falló:',
      error instanceof Error ? error.message : error
    );
    return [];
  }
}

// ─── Helpers ─────────────────────────────────────────────────

function loadArticleMap(configPath: string): ArticleMapConfig {
  try {
    const raw = fs.readFileSync(configPath, 'utf-8');
    const parsed = parseYaml(raw) as Record<string, unknown>;

    const mappings = (parsed.mappings ?? {}) as Record<string, { articles: string[]; keywords: string[] }>;

    return { mappings };
  } catch (error) {
    console.warn(
      '[mapper] Error cargando mapeo de artículos:',
      error instanceof Error ? error.message : error
    );
    return { mappings: {} };
  }
}

function extractCommitType(title: string): CommitType {
  const match = title.match(/^(\w+)(\(.+?\))?(!)?:\s/);
  if (!match) return 'unknown';

  const raw = match[1].toLowerCase();
  const validTypes: CommitType[] = [
    'feat', 'fix', 'refactor', 'perf', 'chore',
    'ci', 'build', 'test', 'style', 'docs', 'revert',
  ];

  return validTypes.includes(raw as CommitType) ? (raw as CommitType) : 'unknown';
}
