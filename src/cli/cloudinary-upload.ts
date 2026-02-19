import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const IMAGES_DIR = path.resolve(__dirname, '../../images');
const ARTICLES_DIR = path.resolve(__dirname, '../../articles');
const REGISTRY_PATH = path.join(IMAGES_DIR, '.registry.json');
const CONCURRENCY = 5;
const IMAGE_EXTENSIONS = /\.(png|jpe?g|gif|webp|svg)$/i;

// Regex que captura URL completa y el public_id desde .md con URLs Cloudinary
const CLOUDINARY_URL_RE =
  /!\[[^\]]*\]\((https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/[^)]+\/([\w-]+)\.\w+)\)/g;

// ─── Interfaces ──────────────────────────────────────────────

interface RegistryEntry {
  hash: string;
  cloudinaryUrl: string;
  uploadedAt: string;
}

interface ImageRegistry {
  [filename: string]: RegistryEntry;
}

interface UploadResult {
  file: string;
  url: string;
}

type ImageStatus = 'new' | 'modified' | 'synced';

interface ImageDiff {
  file: string;
  status: ImageStatus;
  localHash: string;
  registryHash?: string;
}

// ─── Utilidades ──────────────────────────────────────────────

function fileHash(filePath: string): string {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

function loadRegistry(): ImageRegistry {
  if (!fs.existsSync(REGISTRY_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8')) as ImageRegistry;
  } catch {
    console.warn('   ⚠️  registry.json corrupto, se tratará como vacío.');
    return {};
  }
}

function saveRegistry(registry: ImageRegistry): void {
  const sorted = Object.keys(registry)
    .sort()
    .reduce<ImageRegistry>((acc, key) => {
      acc[key] = registry[key];
      return acc;
    }, {});

  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(sorted, null, 2) + '\n', 'utf-8');
}

function listImageFiles(): string[] {
  if (!fs.existsSync(IMAGES_DIR)) return [];
  return fs.readdirSync(IMAGES_DIR).filter((f) => IMAGE_EXTENSIONS.test(f));
}

function getCloudinaryConfig(): void {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error('❌ Faltan variables CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY o CLOUDINARY_API_SECRET en .env');
    process.exit(1);
  }

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
}

// ─── Diff engine ─────────────────────────────────────────────

function computeDiff(registry: ImageRegistry): ImageDiff[] {
  const files = listImageFiles();
  const diffs: ImageDiff[] = [];

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    const localHash = fileHash(filePath);
    const entry = registry[file];

    if (!entry) {
      diffs.push({ file, status: 'new', localHash });
    } else if (entry.hash !== localHash) {
      diffs.push({ file, status: 'modified', localHash, registryHash: entry.hash });
    } else {
      diffs.push({ file, status: 'synced', localHash });
    }
  }

  return diffs;
}

// ─── Buscar .md recursivamente ───────────────────────────────

function findMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdFiles(full));
    } else if (entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

// ─── Upload ──────────────────────────────────────────────────

async function uploadImage(filePath: string, publicId: string): Promise<string> {
  const result = await cloudinary.uploader.upload(filePath, {
    public_id: publicId,
    folder: 'helpcenter',
    overwrite: true,
    resource_type: 'image',
  });
  return result.secure_url;
}

async function uploadBatch(files: string[]): Promise<UploadResult[]> {
  const results: UploadResult[] = [];
  const total = files.length;

  for (let i = 0; i < total; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY);
    const promises = batch.map(async (file) => {
      const filePath = path.join(IMAGES_DIR, file);
      const publicId = path.parse(file).name;

      try {
        const url = await uploadImage(filePath, publicId);
        return { file, url };
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`   ❌ ${file}: ${msg}`);
        return null;
      }
    });

    const batchResults = await Promise.all(promises);
    for (const r of batchResults) {
      if (r) {
        results.push(r);
        console.log(`   ✅ [${results.length}/${total}] ${r.file}`);
      }
    }
  }

  return results;
}

// ─── Reemplazar rutas locales → URLs Cloudinary en .md ───────

function replaceImagePaths(urlMap: Map<string, string>): number {
  const mdFiles = findMdFiles(ARTICLES_DIR);
  let totalReplacements = 0;

  for (const filePath of mdFiles) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let fileReplacements = 0;

    for (const [localRef, cloudinaryUrl] of urlMap) {
      const pattern = `](${localRef})`;
      const replacement = `](${cloudinaryUrl})`;
      while (content.includes(pattern)) {
        content = content.replace(pattern, replacement);
        fileReplacements++;
      }
    }

    if (fileReplacements > 0) {
      fs.writeFileSync(filePath, content, 'utf-8');
      const relPath = path.relative(ARTICLES_DIR, filePath);
      console.log(`   📝 ${relPath}: ${fileReplacements} imagen(es) reemplazada(s)`);
      totalReplacements += fileReplacements;
    }
  }

  return totalReplacements;
}

// ─── Comandos ────────────────────────────────────────────────

async function cmdUpload(): Promise<void> {
  console.log('\n══════════════════════════════════════════════════════');
  console.log('   ☁️  Cloudinary — Subida incremental de imágenes');
  console.log('══════════════════════════════════════════════════════\n');

  getCloudinaryConfig();

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ No se encontró la carpeta: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const registry = loadRegistry();
  const diffs = computeDiff(registry);

  const pending = diffs.filter((d) => d.status !== 'synced');
  const synced = diffs.filter((d) => d.status === 'synced');

  console.log(`   📂 ${diffs.length} imágenes en images/`);
  console.log(`   ✅ ${synced.length} ya sincronizadas`);
  console.log(`   📤 ${pending.length} pendientes de subir`);

  if (pending.length === 0) {
    console.log('\n   ✨ Todo está sincronizado. Nada que subir.\n');
    return;
  }

  const newCount = pending.filter((d) => d.status === 'new').length;
  const modCount = pending.filter((d) => d.status === 'modified').length;
  if (newCount > 0) console.log(`      → ${newCount} nueva(s)`);
  if (modCount > 0) console.log(`      → ${modCount} modificada(s)`);

  console.log(`\n   Subiendo a Cloudinary (concurrencia: ${CONCURRENCY})...\n`);

  const filesToUpload = pending.map((d) => d.file);
  const results = await uploadBatch(filesToUpload);

  console.log(`\n   ✅ ${results.length}/${pending.length} imágenes subidas\n`);

  if (results.length === 0) {
    console.log('   ⚠️  No se subió ninguna imagen. Abortando reemplazo.');
    process.exit(1);
  }

  // Actualizar registro
  for (const r of results) {
    const diff = pending.find((d) => d.file === r.file);
    registry[r.file] = {
      hash: diff?.localHash ?? fileHash(path.join(IMAGES_DIR, r.file)),
      cloudinaryUrl: r.url,
      uploadedAt: new Date().toISOString(),
    };
  }

  saveRegistry(registry);
  console.log('   💾 Registro actualizado (.registry.json)\n');

  // Reemplazar rutas locales en .md
  const urlMap = new Map<string, string>();
  for (const r of results) {
    urlMap.set(`images/${r.file}`, r.url);
  }

  console.log('──────────────────────────────────────────────────────');
  console.log('   Reemplazando rutas en artículos .md...\n');

  const replacements = replaceImagePaths(urlMap);

  console.log(`\n══════════════════════════════════════════════════════`);
  console.log(`   RESUMEN`);
  console.log(`══════════════════════════════════════════════════════`);
  console.log(`   📤 Imágenes subidas: ${results.length}/${pending.length}`);
  console.log(`   📝 Referencias reemplazadas: ${replacements}`);
  console.log(`   💾 Registro: ${Object.keys(registry).length} entradas`);
  console.log(`══════════════════════════════════════════════════════\n`);
}

function cmdBootstrap(): void {
  console.log('\n══════════════════════════════════════════════════════');
  console.log('   🔧 Cloudinary — Bootstrap del registro');
  console.log('══════════════════════════════════════════════════════\n');

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ No se encontró la carpeta: ${IMAGES_DIR}`);
    process.exit(1);
  }

  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`❌ No se encontró la carpeta: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  // 1. Extraer mapeo public_id → URL desde los .md existentes
  const mdFiles = findMdFiles(ARTICLES_DIR);
  const urlByPublicId = new Map<string, string>();

  for (const filePath of mdFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let match: RegExpExecArray | null;

    // Reset lastIndex on each file
    CLOUDINARY_URL_RE.lastIndex = 0;
    while ((match = CLOUDINARY_URL_RE.exec(content)) !== null) {
      const fullUrl = match[1];
      const publicId = match[2];
      urlByPublicId.set(publicId, fullUrl);
    }
  }

  console.log(`   📄 ${mdFiles.length} archivos .md escaneados`);
  console.log(`   🔗 ${urlByPublicId.size} URLs de Cloudinary encontradas\n`);

  // 2. Construir registro desde imágenes locales
  const imageFiles = listImageFiles();
  const registry: ImageRegistry = {};
  let matched = 0;
  let unmatched = 0;

  for (const file of imageFiles) {
    const publicId = path.parse(file).name;
    const filePath = path.join(IMAGES_DIR, file);
    const hash = fileHash(filePath);
    const cloudinaryUrl = urlByPublicId.get(publicId);

    if (cloudinaryUrl) {
      registry[file] = {
        hash,
        cloudinaryUrl,
        uploadedAt: new Date().toISOString(),
      };
      matched++;
    } else {
      unmatched++;
    }
  }

  saveRegistry(registry);

  console.log(`   ✅ ${matched} imágenes con URL encontrada → registradas`);
  if (unmatched > 0) {
    console.log(`   📤 ${unmatched} imágenes sin URL → se subirán en el próximo upload`);
  }

  console.log(`\n   💾 Registro guardado: ${REGISTRY_PATH}`);
  console.log(`   📊 ${Object.keys(registry).length} entradas en .registry.json\n`);
}

function cmdStatus(): void {
  console.log('\n══════════════════════════════════════════════════════');
  console.log('   📊 Cloudinary — Estado de imágenes');
  console.log('══════════════════════════════════════════════════════\n');

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ No se encontró la carpeta: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const registry = loadRegistry();
  const diffs = computeDiff(registry);

  const newFiles = diffs.filter((d) => d.status === 'new');
  const modified = diffs.filter((d) => d.status === 'modified');
  const synced = diffs.filter((d) => d.status === 'synced');

  // Detectar entradas huérfanas (en registro pero no en disco)
  const localFiles = new Set(listImageFiles());
  const orphaned = Object.keys(registry).filter((f) => !localFiles.has(f));

  console.log(`   Total imágenes locales: ${diffs.length}`);
  console.log(`   ✅ Sincronizadas:       ${synced.length}`);
  console.log(`   🆕 Nuevas:              ${newFiles.length}`);
  console.log(`   📝 Modificadas:         ${modified.length}`);
  if (orphaned.length > 0) {
    console.log(`   👻 Huérfanas:           ${orphaned.length}`);
  }

  if (newFiles.length > 0) {
    console.log('\n   ── Nuevas ──');
    for (const d of newFiles) {
      console.log(`   + ${d.file}`);
    }
  }

  if (modified.length > 0) {
    console.log('\n   ── Modificadas ──');
    for (const d of modified) {
      console.log(`   ~ ${d.file}`);
    }
  }

  if (orphaned.length > 0) {
    console.log('\n   ── Huérfanas (en registro, no en disco) ──');
    for (const f of orphaned) {
      console.log(`   ? ${f}`);
    }
  }

  if (newFiles.length === 0 && modified.length === 0) {
    console.log('\n   ✨ Todo sincronizado.');
  } else {
    console.log(`\n   Ejecuta "npm run images:upload" para sincronizar.`);
  }

  console.log('');
}

// ─── Main: ruteo por subcomando ──────────────────────────────

const subcommand = process.argv[2];

switch (subcommand) {
  case 'bootstrap':
    cmdBootstrap();
    break;
  case 'status':
    cmdStatus();
    break;
  case 'upload':
  default:
    cmdUpload().catch((err) => {
      console.error('❌ Error fatal:', err);
      process.exit(1);
    });
    break;
}
