import * as fs from 'fs';
import { SyncState } from './types';

// ─── Estado persistido entre ejecuciones ─────────────────────

/** Estado por defecto cuando no existe fichero previo */
const DEFAULT_STATE: SyncState = {
  lastRunAt: '',
  lastPrProcessed: 0,
  processedPrs: [],
};

/**
 * Lee el estado del último run desde el fichero .last-sync-state.
 * Si no existe o es inválido, retorna estado por defecto (primer run).
 */
export function loadState(statePath: string): SyncState {
  try {
    if (!fs.existsSync(statePath)) {
      console.log('[state] No se encontró fichero de estado — primer run');
      return { ...DEFAULT_STATE };
    }

    const raw = fs.readFileSync(statePath, 'utf-8');
    const parsed: unknown = JSON.parse(raw);

    if (!isValidState(parsed)) {
      console.warn('[state] Fichero de estado con formato inválido — usando defaults');
      return { ...DEFAULT_STATE };
    }

    return parsed;
  } catch (error) {
    console.warn(
      '[state] Error leyendo estado:',
      error instanceof Error ? error.message : error
    );
    return { ...DEFAULT_STATE };
  }
}

/**
 * Persiste el estado actual al fichero .last-sync-state.
 */
export function saveState(statePath: string, state: SyncState): void {
  try {
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
    console.log(`[state] Estado guardado — última PR: #${state.lastPrProcessed}`);
  } catch (error) {
    console.error(
      '[state] Error guardando estado:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
}

/**
 * Calcula la fecha "desde" para buscar PRs.
 * Si hay estado previo, usa lastRunAt. Si no, usa ayer.
 */
export function getSinceDate(state: SyncState): string {
  if (state.lastRunAt) {
    return state.lastRunAt.split('T')[0]; // Solo la fecha YYYY-MM-DD
  }

  // Primer run: buscar PRs del último día
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
}

// ─── Validación ──────────────────────────────────────────────

function isValidState(value: unknown): value is SyncState {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as Record<string, unknown>;
  return (
    typeof obj.lastRunAt === 'string' &&
    typeof obj.lastPrProcessed === 'number' &&
    Array.isArray(obj.processedPrs)
  );
}
