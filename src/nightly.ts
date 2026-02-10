import * as dotenv from 'dotenv';
import { runChangelog } from './changelog';
import { runNotionSync } from './index';

// Cargar variables de entorno una sola vez para ambos procesos
dotenv.config();

// ─── Pipeline nocturno unificado ─────────────────────────────
//
// Ejecuta en secuencia:
//   1. Changelog pipeline (detecta cambios en el SaaS → actualiza articles/*.md)
//   2. Notion sync (publica articles/*.md actualizados a Notion)
//
// Si el changelog falla, el sync se ejecuta igualmente para
// publicar lo que ya haya (artículos modificados manualmente, etc.).

async function main(): Promise<void> {
  const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`[nightly] Pipeline nocturno — ${timestamp}`);
  console.log('═'.repeat(60));

  let changelogFailed = false;
  let syncFailed = false;

  // 1. Changelog pipeline
  console.log('\n[nightly] ▶ Paso 1/2: Changelog pipeline');
  try {
    await runChangelog();
    console.log('[nightly] ✓ Changelog completado');
  } catch (error) {
    changelogFailed = true;
    console.error(
      '[nightly] ✗ Changelog falló:',
      error instanceof Error ? error.message : error
    );
    console.log('[nightly]   Continuando con Notion sync...');
  }

  // 2. Notion sync
  console.log('\n[nightly] ▶ Paso 2/2: Notion sync');
  try {
    await runNotionSync();
    console.log('[nightly] ✓ Notion sync completado');
  } catch (error) {
    syncFailed = true;
    console.error(
      '[nightly] ✗ Notion sync falló:',
      error instanceof Error ? error.message : error
    );
  }

  // Resumen final
  console.log(`\n${'═'.repeat(60)}`);
  console.log('[nightly] Resumen:');
  console.log(`  Changelog: ${changelogFailed ? 'FALLÓ' : 'OK'}`);
  console.log(`  Notion sync: ${syncFailed ? 'FALLÓ' : 'OK'}`);
  console.log('═'.repeat(60) + '\n');

  if (changelogFailed || syncFailed) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('[nightly] Error fatal:', error);
  process.exit(1);
});
