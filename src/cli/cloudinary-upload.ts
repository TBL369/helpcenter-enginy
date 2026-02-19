import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const ARTICLES_DIR = path.resolve(__dirname, '../../articles');
const IMAGES_DIR = path.resolve(__dirname, '../../images');
const CONCURRENCY = 5;

interface UploadResult {
  file: string;
  url: string;
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

function replaceImagePaths(urlMap: Map<string, string>): number {
  const mdFiles = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));
  let totalReplacements = 0;

  for (const mdFile of mdFiles) {
    const filePath = path.join(ARTICLES_DIR, mdFile);
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
      console.log(`   📝 ${mdFile}: ${fileReplacements} imagen(es) reemplazada(s)`);
      totalReplacements += fileReplacements;
    }
  }

  return totalReplacements;
}

async function main(): Promise<void> {
  console.log('\n══════════════════════════════════════════════════════');
  console.log('   ☁️  Cloudinary — Subida de imágenes');
  console.log('══════════════════════════════════════════════════════\n');

  getCloudinaryConfig();

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ No se encontró la carpeta: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const imageFiles = fs.readdirSync(IMAGES_DIR).filter((f) =>
    /\.(png|jpe?g|gif|webp|svg)$/i.test(f)
  );

  console.log(`   📂 ${imageFiles.length} imágenes encontradas en images/\n`);
  console.log('   Subiendo a Cloudinary (concurrencia: ' + CONCURRENCY + ')...\n');

  const results = await uploadBatch(imageFiles);

  console.log(`\n   ✅ ${results.length}/${imageFiles.length} imágenes subidas\n`);

  if (results.length === 0) {
    console.log('   ⚠️  No se subió ninguna imagen. Abortando reemplazo.');
    process.exit(1);
  }

  // Construir mapa: "images/file.png" → URL
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
  console.log(`   📤 Imágenes subidas: ${results.length}/${imageFiles.length}`);
  console.log(`   📝 Referencias reemplazadas: ${replacements}`);
  console.log(`══════════════════════════════════════════════════════\n`);
}

main().catch((err) => {
  console.error('❌ Error fatal:', err);
  process.exit(1);
});
