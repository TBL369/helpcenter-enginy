import * as fs from 'fs';
import { parse as parseYaml } from 'yaml';
import { PullRequest, PreFilterResult, CommitType, UserFacingPathsConfig } from './types';

// ─── Etapa 1: Pre-filtro determinista ────────────────────────

/** Tipos que SIEMPRE pasan el filtro */
const ALWAYS_PASS: CommitType[] = ['feat'];

/** Tipos que SIEMPRE se descartan */
const ALWAYS_SKIP: CommitType[] = [
  'refactor', 'chore', 'ci', 'build', 'test', 'style', 'perf', 'docs',
];

/** Tipos que pasan condicionalmente (si tocan rutas user-facing) */
const CONDITIONAL: CommitType[] = ['fix', 'revert'];

/**
 * Aplica el pre-filtro determinista a un array de PRs.
 * Filtra por tipo de commit + heurística de rutas para `fix`.
 *
 * @param prs - PRs a filtrar
 * @param pathsConfigPath - Ruta al YAML de rutas user-facing
 * @returns Array con resultado de filtrado para cada PR
 */
export function preFilter(
  prs: PullRequest[],
  pathsConfigPath: string
): PreFilterResult[] {
  const pathsConfig = loadPathsConfig(pathsConfigPath);

  return prs.map(pr => {
    const { type, isBreaking } = parseCommitType(pr.title);

    // Breaking changes siempre pasan, independiente del tipo
    if (isBreaking) {
      return {
        pr,
        passed: true,
        reason: `Breaking change (${type}!)`,
        commitType: type,
        isBreaking,
      };
    }

    // Tipos que siempre pasan
    if (ALWAYS_PASS.includes(type)) {
      return {
        pr,
        passed: true,
        reason: `Tipo ${type} — pasa siempre`,
        commitType: type,
        isBreaking,
      };
    }

    // Tipos que siempre se descartan
    if (ALWAYS_SKIP.includes(type)) {
      return {
        pr,
        passed: false,
        reason: `Tipo ${type} — descartado`,
        commitType: type,
        isBreaking,
      };
    }

    // Tipos condicionales: verificar rutas
    if (CONDITIONAL.includes(type)) {
      const touchesUserFacing = hasUserFacingFiles(pr.files, pathsConfig);
      return {
        pr,
        passed: touchesUserFacing,
        reason: touchesUserFacing
          ? `Tipo ${type} — toca rutas user-facing`
          : `Tipo ${type} — solo rutas internas`,
        commitType: type,
        isBreaking,
      };
    }

    // Tipo desconocido: pasar por si acaso (el LLM decidirá en Etapa 2)
    return {
      pr,
      passed: true,
      reason: `Tipo desconocido "${type}" — pasa al LLM`,
      commitType: type,
      isBreaking,
    };
  });
}

// ─── Parseo de tipo de commit ────────────────────────────────

/**
 * Extrae el tipo de commit y si es breaking desde el título de la PR.
 * Soporta formatos:
 *   - "feat: PR #42 - Descripción"
 *   - "feat!: PR #42 - Descripción"  (breaking)
 *   - "feat(scope): descripción"
 *   - Títulos sin conventional commits → "unknown"
 */
function parseCommitType(title: string): { type: CommitType; isBreaking: boolean } {
  const match = title.match(/^(\w+)(\(.+?\))?(!)?:\s/);

  if (!match) {
    return { type: 'unknown', isBreaking: false };
  }

  const rawType = match[1].toLowerCase();
  const isBreaking = match[3] === '!';

  const validTypes: CommitType[] = [
    'feat', 'fix', 'refactor', 'perf', 'chore',
    'ci', 'build', 'test', 'style', 'docs', 'revert',
  ];

  const type: CommitType = validTypes.includes(rawType as CommitType)
    ? (rawType as CommitType)
    : 'unknown';

  return { type, isBreaking };
}

// ─── Heurística de rutas ─────────────────────────────────────

/**
 * Determina si algún archivo de la PR toca rutas user-facing.
 * Un archivo es user-facing si:
 *   1. Coincide con algún patrón de user_facing_paths, Y
 *   2. No coincide SOLO con internal_paths
 */
function hasUserFacingFiles(
  files: string[],
  config: UserFacingPathsConfig
): boolean {
  for (const file of files) {
    const isUserFacing = config.userFacingPaths.some(p => file.startsWith(p));
    const isInternal = config.internalPaths.some(p => file.startsWith(p));

    // Si es user-facing y no es interno → el fix es relevante
    if (isUserFacing && !isInternal) {
      return true;
    }
  }
  return false;
}

// ─── Carga de configuración ──────────────────────────────────

function loadPathsConfig(configPath: string): UserFacingPathsConfig {
  try {
    const raw = fs.readFileSync(configPath, 'utf-8');
    const parsed = parseYaml(raw) as Record<string, unknown>;

    return {
      userFacingPaths: Array.isArray(parsed.user_facing_paths)
        ? (parsed.user_facing_paths as string[])
        : [],
      internalPaths: Array.isArray(parsed.internal_paths)
        ? (parsed.internal_paths as string[])
        : [],
    };
  } catch (error) {
    console.warn(
      '[pre-filter] Error cargando config de rutas, usando defaults vacíos:',
      error instanceof Error ? error.message : error
    );
    return { userFacingPaths: [], internalPaths: [] };
  }
}
