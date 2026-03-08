import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { IntercomClient, ArticleListItem, IntercomArticle, TranslatedContentEntry } from './intercom';
import { NotionClient } from './notion';
import { MarkdownExporter } from './markdown';
import { marked } from 'marked';
import {
  getTranslationConfig,
  translateArticleFull,
  TranslationConfig,
  TranslationResult,
} from './translation';

// Cargar variables de entorno desde .env
dotenv.config();

interface Config {
  intercom: {
    accessToken: string;
    baseUrl?: string;
  };
  notion?: {
    token: string;
    parentPageId: string;
  };
}

type MenuOption = '1' | '2' | '3' | '4' | '5';

interface ExportStats {
  totalArticles: number;
  successfulExports: number;
  failedExports: number;
  errors: Array<{ id: string; error: string }>;
}

/**
 * Valida y obtiene la configuración desde variables de entorno
 */
function getConfig(): Config {
  const intercomToken = process.env.INTERCOM_ACCESS_TOKEN;
  const notionToken = process.env.NOTION_TOKEN;
  const notionParentPageId = process.env.NOTION_PARENT_PAGE_ID;

  if (!intercomToken) {
    console.error('❌ Error: Falta INTERCOM_ACCESS_TOKEN en .env');
    process.exit(1);
  }

  const config: Config = {
    intercom: {
      accessToken: intercomToken,
      baseUrl: process.env.INTERCOM_API_BASE,
    },
  };

  if (notionToken && notionParentPageId) {
    config.notion = { token: notionToken, parentPageId: notionParentPageId };
  }

  return config;
}

/**
 * Crea una interfaz readline para preguntas interactivas
 */
function createReadlineInterface(): readline.Interface {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

/**
 * Pregunta al usuario y retorna la respuesta
 */
function askQuestion(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

/**
 * Resultado del parseo de input: puede ser un ID o una búsqueda por título
 */
interface ParsedInput {
  type: 'id' | 'title';
  value: string;
}

/**
 * Extrae el ID de un artículo de una URL de Intercom o retorna el ID si ya es numérico
 */
function extractArticleId(input: string): string | null {
  const trimmed = input.trim();
  
  // Si es solo un número, retornarlo directamente
  if (/^\d+$/.test(trimmed)) {
    return trimmed;
  }
  
  // Intentar extraer de URL de Intercom
  // Formato: https://app.intercom.com/a/apps/xxx/knowledge-hub/...?activeContentId=123
  const activeContentMatch = trimmed.match(/activeContentId=(\d+)/);
  if (activeContentMatch) {
    return activeContentMatch[1];
  }
  
  // Formato: .../article/123 o .../articles/123
  const articleMatch = trimmed.match(/\/articles?\/(\d+)/);
  if (articleMatch) {
    return articleMatch[1];
  }
  
  // Formato: .../internal_articles/123
  const internalMatch = trimmed.match(/\/internal_articles\/(\d+)/);
  if (internalMatch) {
    return internalMatch[1];
  }

  // Intentar encontrar cualquier número en la URL como último recurso
  const anyNumberMatch = trimmed.match(/\/(\d{5,})/);
  if (anyNumberMatch) {
    return anyNumberMatch[1];
  }
  
  return null;
}

/**
 * Determina si el input es un ID/URL o un título de búsqueda
 */
function parseInput(input: string): ParsedInput {
  const trimmed = input.trim();
  
  // Si es un número puro, es un ID
  if (/^\d+$/.test(trimmed)) {
    return { type: 'id', value: trimmed };
  }
  
  // Si parece una URL (contiene http o dominio de intercom)
  if (trimmed.includes('http') || trimmed.includes('intercom.com')) {
    const id = extractArticleId(trimmed);
    if (id) {
      return { type: 'id', value: id };
    }
  }
  
  // Si contiene parámetros de URL típicos
  if (trimmed.includes('activeContentId=')) {
    const id = extractArticleId(trimmed);
    if (id) {
      return { type: 'id', value: id };
    }
  }
  
  // De lo contrario, es una búsqueda por título
  return { type: 'title', value: trimmed };
}

/**
 * Muestra resultados de búsqueda y permite al usuario seleccionar
 */
async function selectFromSearchResults(
  articles: ArticleListItem[],
  searchTerm: string,
  rl: readline.Interface
): Promise<string[]> {
  if (articles.length === 0) {
    console.log(`\n   ⚠️  No se encontraron artículos con "${searchTerm}"\n`);
    return [];
  }

  console.log(`\n   🔍 Resultados para "${searchTerm}":\n`);
  console.log('   ─────────────────────────────────────────────────────────────────────────');
  console.log('   #  │ ID          │ Fuente      │ Título');
  console.log('   ─────────────────────────────────────────────────────────────────────────');

  articles.forEach((article, index) => {
    const num = String(index + 1).padStart(2);
    const id = String(article.id).padEnd(10);
    const source = (article.source === 'help_center' ? 'Help Center' : 'Interno').padEnd(11);
    const title = article.title.length > 45 ? article.title.substring(0, 42) + '...' : article.title;
    console.log(`   ${num} │ ${id} │ ${source} │ ${title}`);
  });

  console.log('   ─────────────────────────────────────────────────────────────────────────\n');

  if (articles.length === 1) {
    const confirm = await askQuestion(rl, `   ¿Exportar "${articles[0].title}"? (s/n): `);
    if (confirm.toLowerCase() === 's' || confirm.toLowerCase() === 'si' || confirm.toLowerCase() === 'sí') {
      return [String(articles[0].id)];
    }
    return [];
  }

  console.log('   Opciones:');
  console.log('   - Ingresa números separados por coma (ej: 1,3,5)');
  console.log('   - Ingresa "todos" para seleccionar todos');
  console.log('   - Ingresa "cancelar" para volver\n');

  const selection = await askQuestion(rl, '   Tu selección: ');
  
  if (selection.toLowerCase() === 'cancelar' || selection === '') {
    return [];
  }
  
  if (selection.toLowerCase() === 'todos' || selection.toLowerCase() === 'all') {
    return articles.map(a => String(a.id));
  }

  // Parsear selección numérica
  const selectedIds: string[] = [];
  const parts = selection.split(/[,\s]+/);
  
  for (const part of parts) {
    const num = parseInt(part.trim());
    if (!isNaN(num) && num >= 1 && num <= articles.length) {
      selectedIds.push(String(articles[num - 1].id));
    }
  }

  return [...new Set(selectedIds)];
}

/**
 * Parsea la entrada del usuario y extrae los IDs de artículos
 * Ahora también soporta búsqueda por título
 */
async function parseArticleInputsWithSearch(
  input: string,
  intercomClient: IntercomClient,
  rl: readline.Interface
): Promise<string[]> {
  const allIds: string[] = [];
  
  // Separar por comas o saltos de línea (pero no espacios, para permitir títulos con espacios)
  const parts = input.split(/[,\n]+/).map(p => p.trim()).filter(p => p);
  
  for (const part of parts) {
    const parsed = parseInput(part);
    
    if (parsed.type === 'id') {
      allIds.push(parsed.value);
    } else {
      // Es una búsqueda por título
      console.log(`\n   🔎 Buscando artículos con "${parsed.value}"...`);
      
      try {
        const results = await intercomClient.searchArticlesByTitle(parsed.value, 10);
        const selectedIds = await selectFromSearchResults(results, parsed.value, rl);
        allIds.push(...selectedIds);
      } catch (error) {
        console.error(`   ❌ Error buscando "${parsed.value}":`, error instanceof Error ? error.message : error);
      }
    }
  }
  
  return [...new Set(allIds)]; // Eliminar duplicados
}

/**
 * Parsea la entrada del usuario y extrae los IDs de artículos (versión simple, solo IDs)
 */
function parseArticleInputs(input: string): string[] {
  // Separar por comas, saltos de línea o espacios
  const parts = input.split(/[,\n\s]+/).filter(p => p.trim());
  
  const ids: string[] = [];
  for (const part of parts) {
    const id = extractArticleId(part);
    if (id) {
      ids.push(id);
    }
  }
  
  return [...new Set(ids)]; // Eliminar duplicados
}

/** Pattern: slug.{lang}.md — translation override files to exclude from main listing */
const OVERRIDE_PATTERN = /\.\w{2}(-\w{2})?\.md$/;

/**
 * Busca archivos .md recursivamente dentro de un directorio,
 * excluyendo carpetas como images/ y archivos override de traducción (slug.es.md, slug.it.md, etc.)
 */
function findMdFiles(dir: string, baseDir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      results.push(...findMdFiles(path.join(dir, entry.name), baseDir));
    } else if (entry.name.endsWith('.md') && !OVERRIDE_PATTERN.test(entry.name)) {
      results.push(path.relative(baseDir, path.join(dir, entry.name)));
    }
  }
  return results;
}

/**
 * Agrupa archivos por directorio padre y muestra un listado visual tipo árbol con numeración global.
 * Todos los subdirectorios se muestran expandidos.
 */
function displayFileTree(files: string[]): void {
  const byDir = new Map<string, string[]>();

  for (const f of files) {
    const dir = path.dirname(f);
    const key = dir === '.' ? '' : dir;
    if (!byDir.has(key)) byDir.set(key, []);
    byDir.get(key)!.push(path.basename(f));
  }

  const sortedKeys = [...byDir.keys()].sort((a, b) => {
    if (a === '') return -1;
    if (b === '') return 1;
    return a.localeCompare(b);
  });

  const groups = sortedKeys.map(key => ({ dir: key, files: byDir.get(key)!.sort() }));
  const totalFiles = files.length;
  const pad = String(totalFiles).length;
  let globalIndex = 1;

  for (let g = 0; g < groups.length; g++) {
    const group = groups[g];
    const isLastGroup = g === groups.length - 1;

    if (group.dir) {
      console.log(`   │`);
      console.log(`   ${isLastGroup ? '└' : '├'}── ${group.dir}/`);
    }

    const prefix = group.dir ? (isLastGroup ? '    ' : '│   ') : '';

    for (let i = 0; i < group.files.length; i++) {
      const isLast = i === group.files.length - 1;
      const connector = group.dir
        ? (isLast && isLastGroup ? '└' : '├')
        : (isLast && isLastGroup ? '└' : '├');
      const num = String(globalIndex).padStart(pad);
      console.log(`   ${prefix}${connector}── ${num}. ${group.files[i]}`);
      globalIndex++;
    }
  }
}

/**
 * Espera un tiempo determinado (para rate limiting)
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Formatea una fecha Unix a formato legible
 */
function formatDate(timestamp?: number): string {
  if (!timestamp) return 'N/A';
  return new Date(timestamp * 1000).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Muestra la lista de artículos en formato tabla
 */
function displayArticlesList(articles: ArticleListItem[]): void {
  if (articles.length === 0) {
    console.log('\n   ⚠️  No se encontraron artículos disponibles.\n');
    return;
  }

  console.log('\n══════════════════════════════════════════════════════════════════════════════');
  console.log('   ARTÍCULOS DISPONIBLES');
  console.log('══════════════════════════════════════════════════════════════════════════════\n');

  // Agrupar por fuente
  const publicArticles = articles.filter(a => a.source === 'help_center');
  const internalArticles = articles.filter(a => a.source === 'internal');

  if (publicArticles.length > 0) {
    console.log(`   📚 HELP CENTER (${publicArticles.length} artículos)`);
    console.log('   ─────────────────────────────────────────────────────────────────────────');
    console.log('   ID          │ Estado     │ Actualizado  │ Título');
    console.log('   ─────────────────────────────────────────────────────────────────────────');
    
    for (const article of publicArticles) {
      const id = String(article.id).padEnd(10);
      const state = (article.state || 'N/A').padEnd(10);
      const date = formatDate(article.updated_at).padEnd(12);
      const title = article.title.length > 40 ? article.title.substring(0, 37) + '...' : article.title;
      console.log(`   ${id} │ ${state} │ ${date} │ ${title}`);
    }
    console.log('');
  }

  if (internalArticles.length > 0) {
    console.log(`   📝 ARTÍCULOS INTERNOS (${internalArticles.length} artículos)`);
    console.log('   ─────────────────────────────────────────────────────────────────────────');
    console.log('   ID          │ Estado     │ Actualizado  │ Título');
    console.log('   ─────────────────────────────────────────────────────────────────────────');
    
    for (const article of internalArticles) {
      const id = String(article.id).padEnd(10);
      const state = (article.state || 'N/A').padEnd(10);
      const date = formatDate(article.updated_at).padEnd(12);
      const title = article.title.length > 40 ? article.title.substring(0, 37) + '...' : article.title;
      console.log(`   ${id} │ ${state} │ ${date} │ ${title}`);
    }
    console.log('');
  }

  console.log('══════════════════════════════════════════════════════════════════════════════');
  console.log(`   Total: ${articles.length} artículo(s) encontrado(s)`);
  console.log('══════════════════════════════════════════════════════════════════════════════\n');
}

/**
 * Muestra el menú principal y retorna la opción seleccionada
 */
async function showMainMenu(rl: readline.Interface): Promise<MenuOption> {
  console.log('──────────────────────────────────────────────────────────');
  console.log('   ¿Qué deseas hacer?\n');
  console.log('   1. 📋 Listar artículos disponibles en Intercom');
  console.log('   2. 📥 Importar artículos al repositorio (formato .md)');
  console.log('   3. 📥 Importar artículos a Notion (desde Intercom)');
  console.log('   4. 📤 Subir artículos a Intercom (crear artículos)');
  console.log('   5. 🚪 Salir');
  console.log('──────────────────────────────────────────────────────────\n');

  const answer = await askQuestion(rl, 'Selecciona una opción (1-5): ');
  
  if (['1', '2', '3', '4', '5'].includes(answer)) {
    return answer as MenuOption;
  }
  
  console.log('\n   ⚠️  Opción inválida. Por favor selecciona 1, 2, 3, 4 o 5.\n');
  return showMainMenu(rl);
}

/**
 * Función para listar artículos
 */
async function listArticlesFlow(intercomClient: IntercomClient, rl: readline.Interface): Promise<void> {
  console.log('\n──────────────────────────────────────────────────────────');
  console.log('   Obteniendo lista de artículos de Intercom...\n');

  try {
    // Usar método con caché para que esté disponible en exportación posterior
    const articles = await intercomClient.getAllArticlesCached(200);
    displayArticlesList(articles);

    // Preguntar si quiere copiar IDs
    if (articles.length > 0) {
      console.log('   💡 Tip: Copia los IDs que necesites para exportarlos después.\n');
    }
  } catch (error) {
    console.error('   ❌ Error al obtener artículos:', error instanceof Error ? error.message : error);
  }

  await askQuestion(rl, 'Presiona Enter para volver al menú...');
}

/**
 * Función para exportar artículos (flujo original)
 */
async function exportArticlesFlow(
  intercomClient: IntercomClient, 
  notionClient: NotionClient, 
  rl: readline.Interface
): Promise<void> {
  // 1. Pedir nombre de la página contenedora
  const containerName = await askQuestion(
    rl,
    '\n📁 Nombre de la página contenedora en Notion:\n> '
  );

  if (!containerName) {
    console.error('❌ El nombre de la página no puede estar vacío.');
    return;
  }

  // 2. Pedir URLs, IDs o títulos de artículos
  console.log('\n📋 Ingresa los artículos a exportar de Intercom.');
  console.log('   Puedes usar:');
  console.log('   - IDs numéricos (ej: 12345678)');
  console.log('   - URLs de Intercom');
  console.log('   - Títulos de artículos (se buscará por coincidencia)');
  console.log('   (Separados por coma o salto de línea)');
  console.log('   Escribe "fin" o línea vacía para terminar.\n');

  let articleInput = '';
  let line = '';
  
  while (true) {
    line = await askQuestion(rl, '> ');
    if (line.toLowerCase() === 'fin' || line === '') {
      if (articleInput.trim()) break;
      console.log('   ⚠️  Debes ingresar al menos un artículo.');
      continue;
    }
    articleInput += '\n' + line;
  }

  // Parsear los IDs (ahora con soporte para búsqueda por título)
  const articleIds = await parseArticleInputsWithSearch(articleInput, intercomClient, rl);

  if (articleIds.length === 0) {
    console.error('❌ No se encontraron artículos para exportar.');
    return;
  }

  console.log(`\n✅ Se encontraron ${articleIds.length} artículo(s) para exportar.`);
  console.log(`   IDs: ${articleIds.join(', ')}\n`);

  // Estadísticas
  const stats: ExportStats = {
    totalArticles: articleIds.length,
    successfulExports: 0,
    failedExports: 0,
    errors: [],
  };

  // 3. Crear la página contenedora en Notion
  console.log('──────────────────────────────────────────────────────────');
  console.log(`📁 Creando página contenedora "${containerName}"...`);
  
  let containerPage;
  try {
    containerPage = await notionClient.createFolderPage(containerName);
    console.log(`   ✅ Página creada: ${containerPage.url}\n`);
  } catch (error) {
    console.error(`❌ Error al crear la página contenedora:`, error);
    showNotionErrorHelp(error instanceof Error ? error.message : '');
    return;
  }

  // 4. Exportar cada artículo
  console.log('──────────────────────────────────────────────────────────');
  console.log('📄 Exportando artículos...\n');

  for (let i = 0; i < articleIds.length; i++) {
    const articleId = articleIds[i];
    const progress = `[${i + 1}/${articleIds.length}]`;

    try {
      process.stdout.write(`   ${progress} Obteniendo artículo ${articleId}...`);
      
      // Obtener contenido del artículo
      const { title, body } = await intercomClient.getArticleContent(parseInt(articleId));

      if (!body || body.trim() === '') {
        console.log(' ⚠️  Sin contenido, omitiendo.');
        stats.failedExports++;
        stats.errors.push({ id: articleId, error: 'Sin contenido' });
        continue;
      }

      process.stdout.write(` "${title.substring(0, 30)}${title.length > 30 ? '...' : ''}"...`);

      // Crear página en Notion dentro de la contenedora
      await notionClient.createPage(title, body, containerPage.id);
      console.log(' ✅');
      stats.successfulExports++;

      // Rate limiting
      if (i < articleIds.length - 1) {
        await delay(500);
      }
    } catch (error) {
      console.log(' ❌');
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      stats.failedExports++;
      stats.errors.push({ id: articleId, error: errorMessage });
    }
  }

  // 5. Resumen final
  console.log('\n══════════════════════════════════════════════════════════');
  console.log('   RESUMEN DE EXPORTACIÓN');
  console.log('══════════════════════════════════════════════════════════\n');
  
  console.log(`   📁 Página contenedora: "${containerName}"`);
  console.log(`   🔗 ${containerPage.url}\n`);
  console.log(`   📄 Artículos procesados: ${stats.totalArticles}`);
  console.log(`   ✅ Exportados exitosamente: ${stats.successfulExports}`);
  console.log(`   ❌ Fallidos: ${stats.failedExports}`);

  if (stats.errors.length > 0) {
    console.log('\n   Errores detallados:');
    stats.errors.forEach(({ id, error }) => {
      console.log(`   - Artículo ${id}: ${error}`);
    });
  }

  console.log('\n══════════════════════════════════════════════════════════\n');
}

/**
 * Muestra los subdirectorios existentes dentro de articles/ y pide al usuario
 * el subdirectorio destino para un artículo dado.
 */
async function pickSubdir(
  articlesDir: string,
  articleTitle: string,
  defaultSlug: string,
  rl: readline.Interface,
): Promise<string> {
  const subdirs = fs.readdirSync(articlesDir, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)
    .sort();

  if (subdirs.length > 0) {
    console.log(`\n   Subdirectorios existentes en articles/:`);
    for (let i = 0; i < subdirs.length; i++) {
      const connector = i === subdirs.length - 1 ? '└' : '├';
      console.log(`   ${connector}── ${subdirs[i]}/`);
    }
  }

  const answer = await askQuestion(
    rl,
    `\n   Subdirectorio destino para "${articleTitle}" (Enter = ${defaultSlug}): `,
  );

  return answer.trim() || defaultSlug;
}

/**
 * Función para importar artículos de Intercom al repositorio como archivos Markdown
 */
async function importMarkdownFlow(
  intercomClient: IntercomClient,
  rl: readline.Interface,
): Promise<void> {
  const repoPath = process.cwd();
  const articlesDir = path.join(repoPath, 'articles');

  if (!fs.existsSync(articlesDir)) {
    console.error(`\n   ❌ No se encontró la carpeta articles/ en: ${repoPath}`);
    console.error('   Asegúrate de ejecutar el CLI desde la raíz del repo helpcenter-pipeline.\n');
    return;
  }

  const exporter = new MarkdownExporter({ repoPath });

  // Ofrecer listar artículos de Intercom
  const wantList = await askQuestion(
    rl,
    '\n   ¿Quieres ver la lista de artículos disponibles en Intercom? (s/n): ',
  );

  if (wantList.toLowerCase() === 's' || wantList.toLowerCase() === 'si' || wantList.toLowerCase() === 'sí') {
    await listArticlesFlow(intercomClient, rl);
  }

  console.log('\n📋 Ingresa los artículos a importar de Intercom.');
  console.log('   Puedes usar: IDs, URLs, o títulos.');
  console.log('   Escribe "fin" o línea vacía para terminar.\n');

  let articleInput = '';
  while (true) {
    const line = await askQuestion(rl, '> ');
    if (line.toLowerCase() === 'fin' || line === '') {
      if (articleInput.trim()) break;
      console.log('   ⚠️  Debes ingresar al menos un artículo.');
      continue;
    }
    articleInput += '\n' + line;
  }

  const articleIds = await parseArticleInputsWithSearch(articleInput, intercomClient, rl);
  if (articleIds.length === 0) {
    console.error('❌ No se encontraron artículos para importar.');
    return;
  }

  console.log(`\n✅ Se encontraron ${articleIds.length} artículo(s) para importar.`);
  console.log(`   IDs: ${articleIds.join(', ')}\n`);

  console.log('──────────────────────────────────────────────────────────');
  console.log('📥 Importando artículos al repositorio...\n');

  let successCount = 0;
  let failCount = 0;
  const errors: Array<{ id: string; error: string }> = [];

  for (let i = 0; i < articleIds.length; i++) {
    const articleId = articleIds[i];
    const progress = `[${i + 1}/${articleIds.length}]`;

    try {
      process.stdout.write(`   ${progress} Obteniendo artículo ${articleId}...`);

      const { title, body } = await intercomClient.getArticleContent(parseInt(articleId));

      if (!body || body.trim() === '') {
        console.log(' ⚠️  Sin contenido, omitiendo.');
        failCount++;
        errors.push({ id: articleId, error: 'Sin contenido' });
        continue;
      }

      console.log(` "${title}"`);

      const slug = exporter.getSlug(title);
      const subdir = await pickSubdir(articlesDir, title, slug, rl);

      const result = await exporter.exportArticle(title, body, { subdir });
      const imgInfo = result.imagesDownloaded > 0 ? ` (${result.imagesDownloaded} imgs)` : '';
      console.log(`   ✅${imgInfo} → ${path.relative(repoPath, result.filePath)}`);
      successCount++;

      if (i < articleIds.length - 1) {
        await delay(300);
      }
    } catch (error) {
      console.log(' ❌');
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      failCount++;
      errors.push({ id: articleId, error: errorMessage });
    }
  }

  console.log('\n══════════════════════════════════════════════════════════');
  console.log('   RESUMEN DE IMPORTACIÓN AL REPOSITORIO');
  console.log('══════════════════════════════════════════════════════════\n');
  console.log(`   📂 Destino: ${articlesDir}`);
  console.log(`   📄 Artículos procesados: ${articleIds.length}`);
  console.log(`   ✅ Importados: ${successCount}`);
  console.log(`   ❌ Fallidos: ${failCount}`);

  if (errors.length > 0) {
    console.log('\n   Errores:');
    errors.forEach(({ id, error }) => console.log(`   - Artículo ${id}: ${error}`));
  }

  console.log('\n══════════════════════════════════════════════════════════\n');
}

const INTERCOM_P_CLASS = 'intercom-align-justify no-margin';

const CALLOUT_STYLES: Record<string, string> = {
  note:      'background-color: #e8e8e880; border-color: #73737633;',
  notes:     'background-color: #e8e8e880; border-color: #73737633;',
  tip:       'background-color: #e3e7fa80; border-color: #334bfa33;',
  tips:      'background-color: #e3e7fa80; border-color: #334bfa33;',
  important: 'background-color: #feedaf80; border-color: #fbc91633;',
  warning:   'background-color: #fed9db80; border-color: #fd3a5733;',
};

/**
 * Post-procesa HTML de marked para hacerlo compatible con el formato nativo de Intercom.
 * Basado en ingeniería inversa del HTML que genera el editor de Intercom.
 */
function intercomPostProcess(html: string): string {
  let out = html;

  // 1. <blockquote> → <div class="intercom-interblocks-callout"> con color por tipo de label
  out = out.replace(
    /<blockquote>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/g,
    (_match, content: string) => {
      const labelMatch = content.match(/^<strong>(\w+):<\/strong>/);
      const label = labelMatch?.[1]?.toLowerCase() ?? 'note';
      const style = CALLOUT_STYLES[label] ?? CALLOUT_STYLES.note;
      return `<div class="intercom-interblocks-callout" style="${style}"><p class="${INTERCOM_P_CLASS}">${content}</p></div>`;
    },
  );

  // 2. <p> generados por marked → añadir clases Intercom (no afecta los <p class="no-margin"> de tablas raw)
  out = out.replace(/<p>/g, `<p class="${INTERCOM_P_CLASS}">`);

  // 3. <li><p> en loose lists → normalizar clase a formato Intercom
  out = out.replace(
    /<li><p class="[^"]*">/g,
    `<li><p class="${INTERCOM_P_CLASS}">`,
  );

  // 4. <li> con texto seguido de <ul>/<ol> (parent items con sub-lista)
  out = out.replace(
    /<li>(?!<p )(.+?)(<ul>|<ol>)/g,
    `<li><p class="${INTERCOM_P_CLASS}">$1</p>$2`,
  );

  // 5. <li> con texto simple sin sub-lista ni <p> existente (leaf items)
  out = out.replace(
    /<li>(?!<p )(.+?)<\/li>/g,
    `<li><p class="${INTERCOM_P_CLASS}">$1</p></li>`,
  );

  // 6. Headings → añadir clase de justificación
  out = out.replace(/<(h[1-6])>/g, '<$1 class="intercom-align-justify">');

  const SPACER = `<p class="${INTERCOM_P_CLASS}">&nbsp;</p>`;

  // 7. Envolver tablas en intercom-interblocks-table-container (necesario para background-color)
  out = out.replace(
    /<table role="presentation">/g,
    '<div class="intercom-interblocks-table-container"><table role="presentation">',
  );
  out = out.replace(/<\/table>/g, '</table></div>');

  // 7b. Bold labels: convertir strong+newline en strong+br (antes del minificado)
  out = out.replace(/(<strong>[^<]+<\/strong>)\n/g, '$1<br>');

  // 7c. Imágenes: <p><img></p> → <div class="intercom-container intercom-align-center"> (formato nativo)
  out = out.replace(
    /<p[^>]*>(<img [^>]*>)<\/p>/g,
    '<div class="intercom-container intercom-align-center">$1</div>',
  );

  // 8. Minificar TODO whitespace entre tags (Intercom renderiza \n como cursor visible)
  out = out.replace(/>\s+</g, '><');

  // 8b. Convertir #d7efdc80 a rgba() para compatibilidad con API de Intercom
  out = out.replace(/#d7efdc80/g, 'rgba(215, 239, 220, 0.5)');

  // 9. Insertar spacers SOLO DESPUÉS de cada elemento (nunca antes, evita duplicados)
  // Entre párrafos (</p><p) pero NO dentro de listas (</p></li><li><p> ya compacto)
  out = out.replace(/(<\/p>)(<p class)/g, `$1${SPACER}$2`);
  // Entre párrafo y heading (</p><h) para FAQ y transiciones párrafo→sección
  out = out.replace(/(<\/p>)(<h[1-6] )/g, `$1${SPACER}$2`);
  // Entre párrafo y imagen (</p><div class="intercom-container")
  out = out.replace(/(<\/p>)(<div class="intercom-container)/g, `$1${SPACER}$2`);
  // Entre párrafo y <hr>
  out = out.replace(/(<\/p>)(<hr>)/g, `$1${SPACER}$2`);
  // Después de <hr>
  out = out.replace(/(<hr>)/g, `$1${SPACER}`);
  // Después de table-container
  out = out.replace(/(<\/table><\/div>)/g, `$1${SPACER}`);
  // Después de listas outermost (</ul> o </ol> NO seguido de </li>, <ul> u <ol>)
  out = out.replace(/(<\/ul>)(<(?!\/li|ul|ol))/g, `$1${SPACER}$2`);
  out = out.replace(/(<\/ol>)(<(?!\/li|ul|ol))/g, `$1${SPACER}$2`);
  // Después de callouts
  out = out.replace(/(intercom-interblocks-callout[^>]*>.*?<\/div>)(<)/g, `$1${SPACER}$2`);
  // Después de imágenes (doble spacer)
  out = out.replace(/(<div class="intercom-container[^>]*><img [^>]*><\/div>)/g, `$1${SPACER}${SPACER}`);
  // Fix: entre imágenes consecutivas, el </p><p de la regla de párrafos añade 1 spacer extra
  // (imagen ya tiene 2 después + 1 entre párrafos = 3). Quitar el spacer extra.
  out = out.replace(
    new RegExp(`(${SPACER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}){3}`, 'g'),
    `${SPACER}${SPACER}`,
  );

  return out.trim();
}

// ─── Inter-article link resolution ───────────────────────────────────────────

interface UnresolvedLink {
  sourceFile: string;
  sourceIntercomId?: number;
  targetTitle: string;
  targetPath: string;
  reason: 'not_found' | 'draft';
  createdAt: string;
}

interface UnresolvedLinksFile {
  pendingLinks: UnresolvedLink[];
}

interface LinkResolutionResult {
  html: string;
  unresolvedLinks: UnresolvedLink[];
}

const UNRESOLVED_LINKS_PATH = path.join(process.cwd(), 'unresolved-links.json');

function readUnresolvedLinks(): UnresolvedLinksFile {
  if (!fs.existsSync(UNRESOLVED_LINKS_PATH)) return { pendingLinks: [] };
  return JSON.parse(fs.readFileSync(UNRESOLVED_LINKS_PATH, 'utf-8'));
}

function writeUnresolvedLinks(data: UnresolvedLinksFile): void {
  if (data.pendingLinks.length === 0) {
    if (fs.existsSync(UNRESOLVED_LINKS_PATH)) fs.unlinkSync(UNRESOLVED_LINKS_PATH);
    return;
  }
  fs.writeFileSync(UNRESOLVED_LINKS_PATH, JSON.stringify(data, null, 2) + '\n');
}

function removeResolvedLinks(existing: UnresolvedLinksFile, resolvedFile: string): UnresolvedLinksFile {
  return { pendingLinks: existing.pendingLinks.filter(l => l.sourceFile !== resolvedFile) };
}

async function resolveArticleLinks(
  html: string,
  intercomClient: IntercomClient,
  sourceFile: string,
): Promise<LinkResolutionResult> {
  const localLinkRegex = /href="([^"]*\.md)"/g;
  const matches = [...html.matchAll(localLinkRegex)];
  const unresolvedLinks: UnresolvedLink[] = [];

  if (matches.length === 0) return { html, unresolvedLinks };

  const resolved = new Map<string, string | null>();

  for (const match of matches) {
    const localPath = match[1];
    if (resolved.has(localPath)) continue;

    const slug = path.basename(localPath, '.md');
    const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const results = await intercomClient.searchArticlesByTitle(title, 5);
    const exact = results.find(a => a.title.toLowerCase() === title.toLowerCase());

    if (exact) {
      const full = await intercomClient.getArticle(exact.id);
      if (full.url) {
        resolved.set(localPath, full.url);
        console.log(`      🔗 ${title} → ${full.url}`);
      } else {
        resolved.set(localPath, null);
        unresolvedLinks.push({ sourceFile, targetTitle: title, targetPath: localPath, reason: 'draft', createdAt: new Date().toISOString() });
        console.log(`      ⚠️  "${title}" existe como draft — link convertido a texto`);
      }
    } else {
      resolved.set(localPath, null);
      unresolvedLinks.push({ sourceFile, targetTitle: title, targetPath: localPath, reason: 'not_found', createdAt: new Date().toISOString() });
      console.log(`      ⚠️  "${title}" no encontrado en Intercom — link convertido a texto`);
    }
  }

  let result = html;
  for (const [localPath, url] of resolved) {
    if (url) {
      result = result.split(`href="${localPath}"`).join(`href="${url}" target="_blank"`);
    } else {
      const escaped = localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      result = result.replace(new RegExp(`<a[^>]*href="${escaped}"[^>]*>([^<]*)</a>`, 'g'), '$1');
    }
  }

  return { html: result, unresolvedLinks };
}

// ─── Markdown to HTML ────────────────────────────────────────────────────────

/**
 * Lee un .md, extrae titulo (primer # heading) y convierte el body a HTML.
 * Preserva el TOC pero sanitiza los anchor links que Intercom no soporta.
 */
function mdFileToHtml(filePath: string): { title: string; html: string } {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const lines = raw.split('\n');

  let title = path.basename(filePath, '.md');
  let bodyStart = 0;

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^#\s+(.+)$/);
    if (match) {
      title = match[1].trim();
      bodyStart = i + 1;
      break;
    }
  }

  let body = lines.slice(bodyStart).join('\n');

  // Sanitizar anchor links internos a texto plano (Intercom no soporta #anchors)
  body = body.replace(/\\\[/g, '[').replace(/\\\]/g, ']');
  body = body.replace(/\[([^\]]+)\]\(#[^)]*\)/g, '$1');

  body = body.trim();

  let html = marked.parse(body) as string;
  html = intercomPostProcess(html);
  return { title, html };
}

/**
 * Convierte traducciones Markdown a HTML y construye el objeto translated_content
 * que espera la API de Intercom.
 */
function buildTranslatedContent(
  translations: TranslationResult[],
  authorId: string,
  state: 'draft' | 'published',
): Record<string, TranslatedContentEntry> {
  const result: Record<string, TranslatedContentEntry> = {};

  for (const t of translations) {
    const lines = t.markdown.split('\n');
    let title = '';
    let bodyStart = 0;

    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^#\s+(.+)$/);
      if (match) {
        title = match[1].trim();
        bodyStart = i + 1;
        break;
      }
    }

    const bodyMd = lines.slice(bodyStart).join('\n').trim();
    let html = marked.parse(bodyMd) as string;
    html = intercomPostProcess(html);

    result[t.language] = {
      title: title || 'Untitled',
      body: html,
      author_id: parseInt(authorId),
      state,
    };
  }

  return result;
}

/**
 * Funcion para subir archivos .md del repo a Intercom como articulos draft.
 */
async function uploadToIntercomFlow(
  intercomClient: IntercomClient,
  rl: readline.Interface,
): Promise<void> {
  const defaultPath = process.cwd();
  const repoPath = await askQuestion(
    rl,
    `\n📂 Ruta al repo helpcenter-pipeline:\n   (Se buscarán archivos .md en <ruta>/articles/)\n   (Enter para usar: ${defaultPath})\n> `,
  );

  const finalPath = repoPath || defaultPath;
  const articlesDir = path.join(finalPath, 'articles');

  if (!fs.existsSync(articlesDir)) {
    console.error(`\n   ❌ No se encontró la carpeta articles/ en: ${finalPath}\n`);
    return;
  }

  const mdFiles = findMdFiles(articlesDir, articlesDir);

  if (mdFiles.length === 0) {
    console.error('\n   ❌ No hay archivos .md en la carpeta articles/\n');
    return;
  }

  console.log(`\n   📄 Archivos .md disponibles (${mdFiles.length}):\n`);
  displayFileTree(mdFiles);

  console.log('\n   Opciones:');
  console.log('   - Números separados por coma (ej: 1,3,5)');
  console.log('   - "todos" para seleccionar todos');
  console.log('   - Nombres de archivo (ej: lists.md, credits.md)\n');

  const selection = await askQuestion(rl, '   Tu selección: ');

  let selectedFiles: string[] = [];

  if (selection.toLowerCase() === 'todos' || selection.toLowerCase() === 'all') {
    selectedFiles = mdFiles;
  } else if (/^\d/.test(selection)) {
    const nums = selection.split(/[,\s]+/).map(n => parseInt(n.trim()));
    for (const num of nums) {
      if (num >= 1 && num <= mdFiles.length) {
        selectedFiles.push(mdFiles[num - 1]);
      }
    }
  } else {
    const names = selection.split(/[,\s]+/).map(n => n.trim().toLowerCase());
    for (const name of names) {
      const match = mdFiles.find(f => {
        const basename = path.basename(f).toLowerCase();
        return f.toLowerCase() === name || f.toLowerCase() === name + '.md'
          || basename === name || basename === name + '.md';
      });
      if (match) selectedFiles.push(match);
    }
  }

  if (selectedFiles.length === 0) {
    console.error('\n   ❌ No se seleccionaron archivos.\n');
    return;
  }

  console.log(`\n   ✅ ${selectedFiles.length} archivo(s) seleccionado(s): ${selectedFiles.join(', ')}`);

  // Obtener author_id
  console.log('\n   🔍 Obteniendo lista de autores del workspace...');
  let admins: Array<{ id: string; name: string; email: string }>;
  try {
    admins = await intercomClient.getAdmins();
  } catch {
    console.error('\n   ❌ No se pudo obtener la lista de autores.\n');
    return;
  }

  if (admins.length === 0) {
    console.error('\n   ❌ No se encontraron autores en el workspace.\n');
    return;
  }

  console.log(`\n   👥 Autores disponibles:\n`);
  admins.forEach((a, i) => {
    console.log(`   ${i + 1}. ${a.name} (${a.email})`);
  });

  const authorChoice = await askQuestion(rl, `\n   Selecciona el autor (1-${admins.length}): `);
  const authorIdx = parseInt(authorChoice) - 1;

  if (isNaN(authorIdx) || authorIdx < 0 || authorIdx >= admins.length) {
    console.error('\n   ❌ Selección inválida.\n');
    return;
  }

  const authorId = admins[authorIdx].id;
  console.log(`\n   ✅ Autor: ${admins[authorIdx].name}`);

  const stateChoice = await askQuestion(rl, '\n   ¿Estado del artículo? (draft/published, Enter=draft): ');
  const state = (stateChoice.toLowerCase() === 'published' ? 'published' : 'draft') as 'draft' | 'published';

  // ── Opción de traducción ──
  const translationConfig = getTranslationConfig();
  let withTranslations = false;

  if (translationConfig) {
    const langs = translationConfig.languages.map(l => l.toUpperCase()).join(', ');
    console.log(`\n   🌐 Idiomas a subir:`);
    console.log(`   1. Solo EN`);
    console.log(`   2. EN + traducciones (${langs})`);
    const langChoice = await askQuestion(rl, '\n   Selección (1/2, Enter=1): ');
    withTranslations = langChoice === '2';
  }

  // Mostrar links pendientes de resolver de sesiones anteriores
  let unresolvedState = readUnresolvedLinks();
  if (unresolvedState.pendingLinks.length > 0) {
    console.log(`\n   📋 Links pendientes de resolver (${unresolvedState.pendingLinks.length}):`);
    for (const link of unresolvedState.pendingLinks) {
      const reason = link.reason === 'draft' ? 'draft' : 'no existe';
      console.log(`   - ${link.sourceFile} → "${link.targetTitle}" (${reason})`);
    }
  }

  console.log('\n──────────────────────────────────────────────────────────');
  console.log('📤 Subiendo artículos a Intercom...\n');

  let successCount = 0;
  let failCount = 0;
  const errors: Array<{ file: string; error: string }> = [];
  const uploadResults: Array<{ file: string; id: number; unresolvedLinks: UnresolvedLink[] }> = [];

  // ── Primera pasada: subir todos los artículos ──
  for (let i = 0; i < selectedFiles.length; i++) {
    const file = selectedFiles[i];
    const filePath = path.join(articlesDir, file);
    const progress = `[${i + 1}/${selectedFiles.length}]`;

    try {
      console.log(`   ${progress} ${file}...`);
      const { title, html } = mdFileToHtml(filePath);
      const { html: resolvedHtml, unresolvedLinks } = await resolveArticleLinks(html, intercomClient, file);

      let translatedContent: Record<string, TranslatedContentEntry> | undefined;

      if (withTranslations && translationConfig) {
        const enMarkdown = fs.readFileSync(filePath, 'utf-8');
        const { translations, overridesUpdated } = await translateArticleFull(
          filePath,
          enMarkdown,
          translationConfig,
        );

        if (overridesUpdated.length > 0) {
          console.log(`      ⚠️  Overrides actualizados: ${overridesUpdated.map(l => l.toUpperCase()).join(', ')}`);
        }

        translatedContent = buildTranslatedContent(translations, authorId, state);
      }

      const result = await intercomClient.createArticle({
        title,
        body: resolvedHtml,
        authorId,
        state,
        translatedContent,
      });

      for (const ul of unresolvedLinks) ul.sourceIntercomId = result.id;
      uploadResults.push({ file, id: result.id, unresolvedLinks });

      if (unresolvedLinks.length === 0) {
        unresolvedState = removeResolvedLinks(unresolvedState, file);
      }

      const langInfo = translatedContent ? ` + ${Object.keys(translatedContent).join(', ').toUpperCase()}` : '';
      console.log(`      ✅ ID: ${result.id} (${state}${langInfo})`);
      successCount++;

      if (i < selectedFiles.length - 1) {
        await delay(500);
      }
    } catch (error) {
      console.log(`      ❌ ${error instanceof Error ? error.message : 'Error desconocido'}`);
      failCount++;
      errors.push({ file, error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }

  // ── Segunda pasada: re-resolver links pendientes (solo batch + published) ──
  const needsSecondPass = uploadResults.filter(r => r.unresolvedLinks.length > 0);

  if (needsSecondPass.length > 0 && selectedFiles.length > 1 && state === 'published') {
    intercomClient.invalidateCache();
    console.log('\n   🔄 Segunda pasada: re-procesando links pendientes...\n');

    for (const entry of needsSecondPass) {
      const filePath = path.join(articlesDir, entry.file);
      try {
        console.log(`   ↻ ${entry.file}...`);
        const { html } = mdFileToHtml(filePath);
        const { html: resolvedHtml, unresolvedLinks } = await resolveArticleLinks(html, intercomClient, entry.file);
        await intercomClient.updateArticle(entry.id, { body: resolvedHtml });

        if (unresolvedLinks.length === 0) {
          unresolvedState = removeResolvedLinks(unresolvedState, entry.file);
          entry.unresolvedLinks = [];
          console.log(`      ✅ Links resueltos`);
        } else {
          unresolvedState.pendingLinks = unresolvedState.pendingLinks.filter(l => l.sourceFile !== entry.file);
          unresolvedState.pendingLinks.push(...unresolvedLinks);
          entry.unresolvedLinks = unresolvedLinks;
          console.log(`      ⚠️  Aún hay links sin resolver`);
        }

        await delay(300);
      } catch (error) {
        console.log(`      ❌ Error en segunda pasada: ${error instanceof Error ? error.message : 'Error desconocido'}`);
      }
    }
  }

  // ── Actualizar archivo de estado ──
  for (const entry of uploadResults) {
    if (entry.unresolvedLinks.length > 0) {
      const newPending = entry.unresolvedLinks.filter(ul =>
        !unresolvedState.pendingLinks.some(p => p.sourceFile === ul.sourceFile && p.targetPath === ul.targetPath),
      );
      unresolvedState.pendingLinks.push(...newPending);
    }
  }

  writeUnresolvedLinks(unresolvedState);

  // ── Resumen ──
  console.log('\n══════════════════════════════════════════════════════════');
  console.log('   RESUMEN DE SUBIDA A INTERCOM');
  console.log('══════════════════════════════════════════════════════════\n');
  console.log(`   📄 Archivos procesados: ${selectedFiles.length}`);
  console.log(`   ✅ Creados: ${successCount} (${state})`);
  console.log(`   ❌ Fallidos: ${failCount}`);

  if (errors.length > 0) {
    console.log('\n   Errores:');
    errors.forEach(({ file, error }) => console.log(`   - ${file}: ${error}`));
  }

  if (unresolvedState.pendingLinks.length > 0) {
    console.log(`\n   ⚠️  Links no resueltos (${unresolvedState.pendingLinks.length}):`);
    for (const link of unresolvedState.pendingLinks) {
      const reason = link.reason === 'draft' ? 'existe como draft, publicar primero' : 'no existe en Intercom';
      console.log(`   - ${link.sourceFile} → "${link.targetTitle}" (${reason})`);
    }
    console.log('   💡 Cuando los destinos estén publicados, vuelve a subir estos archivos.');
    console.log('   📁 Estado guardado en unresolved-links.json');
  }

  console.log('\n══════════════════════════════════════════════════════════\n');
}

/**
 * Función principal
 */
async function main(): Promise<void> {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('   Intercom Exporter');
  console.log('   Exporta artículos de Intercom a Notion o Markdown');
  console.log('═══════════════════════════════════════════════════════════\n');

  const config = getConfig();

  const intercomClient = new IntercomClient({
    accessToken: config.intercom.accessToken,
    baseUrl: config.intercom.baseUrl,
  });

  const notionClient = config.notion
    ? new NotionClient({ token: config.notion.token, parentPageId: config.notion.parentPageId })
    : null;

  if (!notionClient) {
    console.log('   ℹ️  Notion no configurado (faltan NOTION_TOKEN / NOTION_PARENT_PAGE_ID).');
    console.log('      La exportación a Notion no estará disponible.\n');
  }

  const rl = createReadlineInterface();

  try {
    let running = true;

    while (running) {
      const option = await showMainMenu(rl);

      switch (option) {
        case '1':
          await listArticlesFlow(intercomClient, rl);
          break;
        case '2':
          await importMarkdownFlow(intercomClient, rl);
          break;
        case '3':
          if (!notionClient) {
            console.log('\n   ❌ Notion no configurado. Agrega NOTION_TOKEN y NOTION_PARENT_PAGE_ID a .env\n');
          } else {
            await exportArticlesFlow(intercomClient, notionClient, rl);
          }
          break;
        case '4':
          await uploadToIntercomFlow(intercomClient, rl);
          break;
        case '5':
          running = false;
          console.log('\n   👋 ¡Hasta luego!\n');
          break;
      }
    }

  } finally {
    rl.close();
  }
}

/**
 * Muestra instrucciones de ayuda para errores de Notion
 */
function showNotionErrorHelp(errorMessage: string): void {
  if (errorMessage.includes('object_not_found') || errorMessage.includes('Could not find')) {
    console.error('\n╔══════════════════════════════════════════════════════════╗');
    console.error('║  ❌ ERROR: No se puede acceder a la página de Notion      ║');
    console.error('╠══════════════════════════════════════════════════════════╣');
    console.error('║  Posibles causas:                                        ║');
    console.error('║  1. La página no existe                                  ║');
    console.error('║  2. La página NO está compartida con tu integración      ║');
    console.error('║                                                          ║');
    console.error('║  ➜ SOLUCIÓN:                                             ║');
    console.error('║  1. Abre la página en Notion                             ║');
    console.error('║  2. Haz clic en "..." (menú superior derecho)            ║');
    console.error('║  3. Selecciona "Add connections"                         ║');
    console.error('║  4. Busca y selecciona tu integración                    ║');
    console.error('╚══════════════════════════════════════════════════════════╝\n');
  }
}

// Ejecutar el programa
main().catch(error => {
  console.error('Error no manejado:', error);
  process.exit(1);
});
