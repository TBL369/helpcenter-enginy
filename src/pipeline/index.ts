import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { NotionClient } from './notion';
import { VersionInfo, getNextVersion, commitVersion, toDisplayName } from './version';

// Cargar variables de entorno desde .env en la raíz del repo
dotenv.config();

// ─── Configuración ───────────────────────────────────────────────

/** Directorio donde viven los artículos .md, relativo a la raíz del repo */
const ARTICLES_DIR = process.env.ARTICLES_PATH || 'articles';

interface Config {
  notionToken: string;
  notionParentPageId: string;
  articlesPath: string; // Ruta absoluta al directorio con los .md
  repoRoot: string;     // Ruta absoluta a la raíz del repo
}

// ─── Funciones auxiliares ────────────────────────────────────────

function getConfig(): Config {
  const notionToken = process.env.NOTION_TOKEN;
  const notionParentPageId = process.env.NOTION_PARENT_PAGE_ID;

  const missing: string[] = [];
  if (!notionToken) missing.push('NOTION_TOKEN');
  if (!notionParentPageId) missing.push('NOTION_PARENT_PAGE_ID');

  if (missing.length > 0) {
    throw new Error(
      `Faltan variables de entorno: ${missing.join(', ')}. Copia .env.example a .env y completa los valores.`
    );
  }

  const repoRoot = process.cwd();

  return {
    // Validados arriba — seguro hacer non-null assertion
    notionToken: notionToken!,
    notionParentPageId: notionParentPageId!,
    articlesPath: path.resolve(repoRoot, ARTICLES_DIR),
    repoRoot,
  };
}

/**
 * Obtiene la lista de archivos .md elegibles para sync.
 * Solo toma los .md del directorio articles/.
 */
function getArticleFiles(articlesPath: string): string[] {
  const entries = fs.readdirSync(articlesPath, { withFileTypes: true });

  return entries
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => entry.name)
    .sort();
}

/**
 * Extrae el nombre kebab-case del artículo desde el nombre del archivo.
 * "ai-finder.md" → "ai-finder"
 */
function articleNameFromFile(fileName: string): string {
  return path.basename(fileName, '.md');
}

/**
 * Lee el contenido de un archivo .md
 */
function readArticle(articlesPath: string, fileName: string): string {
  return fs.readFileSync(path.join(articlesPath, fileName), 'utf-8');
}

/**
 * Espera un tiempo (rate limiting)
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Main ────────────────────────────────────────────────────────

interface SyncStats {
  total: number;
  synced: number;
  skipped: number;
  failed: number;
  errors: Array<{ file: string; error: string }>;
}

/** Info de un artículo pendiente de sync (resultado del preflight) */
interface SyncCandidate {
  fileName: string;
  kebabName: string;
  displayName: string;
  versionInfo: VersionInfo;
  gitRelativePath: string;
}

async function main(fileFilter?: string[]): Promise<void> {
  const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
  console.log(`\n[helpcenter] Iniciando sincronización — ${timestamp}`);
  console.log('─'.repeat(60));

  // 1. Configuración
  const config = getConfig();
  const notionClient = new NotionClient({
    token: config.notionToken,
    parentPageId: config.notionParentPageId,
  });

  // 2. Listar archivos .md (con filtro opcional)
  let files = getArticleFiles(config.articlesPath);

  if (fileFilter && fileFilter.length > 0) {
    const normalizedFilter = fileFilter.map(f => f.replace(/\.md$/, ''));
    files = files.filter(f => normalizedFilter.includes(articleNameFromFile(f)));
    console.log(`[helpcenter] Filtro activo: ${normalizedFilter.join(', ')}`);
  }

  console.log(`[helpcenter] Encontrados ${files.length} archivos .md en ${ARTICLES_DIR}/`);

  if (files.length === 0) {
    console.log('[helpcenter] No hay archivos para sincronizar. Saliendo.');
    return;
  }

  // 3. Preflight: detectar qué archivos necesitan sync
  const stats: SyncStats = { total: files.length, synced: 0, skipped: 0, failed: 0, errors: [] };
  const gitArticlesPrefix = ARTICLES_DIR;
  const toSync: SyncCandidate[] = [];

  for (const fileName of files) {
    const kebabName = articleNameFromFile(fileName);
    const displayName = toDisplayName(kebabName);
    const gitRelativePath = path.join(gitArticlesPrefix, fileName);

    try {
      const versionInfo = getNextVersion(kebabName, gitRelativePath, config.repoRoot);

      if (!versionInfo.needsSync) {
        console.log(`  [skip] ${displayName} — sin cambios (v${versionInfo.version})`);
        stats.skipped++;
        continue;
      }

      toSync.push({ fileName, kebabName, displayName, versionInfo, gitRelativePath });
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      stats.failed++;
      stats.errors.push({ file: fileName, error: msg });
    }
  }

  // 4. Sync header en la página padre (solo si hay algo que sincronizar)
  if (toSync.length > 0) {
    const syncDate = new Date().toLocaleDateString('es-ES', {
      day: '2-digit', month: '2-digit', year: 'numeric',
    });
    try {
      await notionClient.appendBlocksToPage(
        config.notionParentPageId,
        notionClient.buildSyncHeaderBlocks(`Sync - ${syncDate}`),
      );
    } catch (error) {
      console.warn('[helpcenter] No se pudo agregar header de sync:', error instanceof Error ? error.message : error);
    }
  }

  // 5. Sync loop: crear páginas en Notion
  for (const item of toSync) {
    const versionLabel = `${item.displayName} v${item.versionInfo.version}`;
    process.stdout.write(`  [sync] ${versionLabel}...`);

    try {
      const content = readArticle(config.articlesPath, item.fileName);

      if (!content.trim()) {
        console.log(' vacío, omitiendo.');
        stats.skipped++;
        continue;
      }

      const page = await notionClient.createPage(versionLabel, content);
      console.log(` ok → ${page.url}`);

      commitVersion(item.kebabName, item.versionInfo.version, item.gitRelativePath, config.repoRoot);

      stats.synced++;

      // Rate limiting entre páginas
      await delay(500);
    } catch (error) {
      console.log(' error');
      const msg = error instanceof Error ? error.message : String(error);
      stats.failed++;
      stats.errors.push({ file: item.fileName, error: msg });
    }
  }

  // 6. Sync footer en la página padre (solo si se sincronizó al menos 1)
  if (stats.synced > 0) {
    try {
      await notionClient.appendBlocksToPage(
        config.notionParentPageId,
        notionClient.buildSyncFooterBlocks(),
      );
    } catch (error) {
      console.warn('[helpcenter] No se pudo agregar footer de sync:', error instanceof Error ? error.message : error);
    }
  }

  // 7. Resumen
  console.log('\n' + '─'.repeat(60));
  console.log('[helpcenter] Resumen:');
  console.log(`  Total:       ${stats.total}`);
  console.log(`  Sincronizados: ${stats.synced}`);
  console.log(`  Sin cambios:   ${stats.skipped}`);
  console.log(`  Fallidos:      ${stats.failed}`);

  if (stats.errors.length > 0) {
    console.log('\n  Errores:');
    for (const { file, error } of stats.errors) {
      console.log(`    - ${file}: ${error}`);
    }
  }

  console.log('─'.repeat(60) + '\n');

  if (stats.failed > 0) {
    throw new Error(`${stats.failed} artículo(s) fallaron durante el sync`);
  }
}

// Exportar para uso programático (desde nightly.ts)
export { main as runNotionSync };

// Auto-ejecución solo cuando se ejecuta directamente (npm run sync)
if (require.main === module) {
  const fileFilter = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
  main(fileFilter.length > 0 ? fileFilter : undefined).catch(error => {
    console.error('[helpcenter] Error fatal:', error);
    process.exit(1);
  });
}
