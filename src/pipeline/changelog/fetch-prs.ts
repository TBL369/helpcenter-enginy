import { execSync } from 'child_process';
import { PullRequest } from './types';

// ─── Fetch de PRs mergeadas via gh CLI ───────────────────────

/**
 * Obtiene las PRs mergeadas en el repo SaaS desde una fecha dada.
 * Usa `gh` CLI que ya está autenticado en el sistema.
 *
 * @param repo - Repo en formato "owner/name" (ej: "acme/enginy")
 * @param since - Fecha ISO YYYY-MM-DD desde la cual buscar
 * @returns Array de PRs con título, body, ficheros modificados, etc.
 */
export function fetchMergedPRs(repo: string, since: string): PullRequest[] {
  console.log(`[fetch] Buscando PRs mergeadas en ${repo} desde ${since}...`);

  try {
    // Obtener PRs mergeadas con metadata
    const prsJson = execSync(
      `gh pr list --repo "${repo}" --state merged --search "merged:>=${since}" ` +
      `--json number,title,body,mergedAt,url --limit 100`,
      { encoding: 'utf-8', timeout: 30_000 }
    ).trim();

    if (!prsJson) {
      console.log('[fetch] No se encontraron PRs mergeadas');
      return [];
    }

    const rawPRs: RawPR[] = JSON.parse(prsJson);

    if (rawPRs.length === 0) {
      console.log('[fetch] No se encontraron PRs mergeadas');
      return [];
    }

    console.log(`[fetch] Encontradas ${rawPRs.length} PRs mergeadas`);

    // Para cada PR, obtener los ficheros modificados
    const prs: PullRequest[] = rawPRs.map(raw => {
      const files = fetchPRFiles(repo, raw.number);
      return {
        number: raw.number,
        title: raw.title,
        body: raw.body ?? '',
        mergedAt: raw.mergedAt,
        files,
        url: raw.url,
      };
    });

    return prs;
  } catch (error) {
    console.error(
      '[fetch] Error obteniendo PRs:',
      error instanceof Error ? error.message : error
    );
    throw error;
  }
}

/**
 * Obtiene la lista de ficheros modificados por una PR.
 */
function fetchPRFiles(repo: string, prNumber: number): string[] {
  try {
    const filesJson = execSync(
      `gh pr view ${prNumber} --repo "${repo}" --json files --jq '.files[].path'`,
      { encoding: 'utf-8', timeout: 15_000 }
    ).trim();

    if (!filesJson) return [];
    return filesJson.split('\n').filter(Boolean);
  } catch (error) {
    console.warn(
      `[fetch] No se pudieron obtener ficheros de PR #${prNumber}:`,
      error instanceof Error ? error.message : error
    );
    return [];
  }
}

/**
 * Obtiene el diff de una PR (limitado en tamaño para no sobrecargar el LLM).
 * @param repo - Repo en formato "owner/name"
 * @param prNumber - Número de la PR
 * @param maxLines - Máximo de líneas del diff (default: 300)
 */
export function fetchPRDiff(repo: string, prNumber: number, maxLines: number = 300): string {
  try {
    const diff = execSync(
      `gh pr diff ${prNumber} --repo "${repo}"`,
      { encoding: 'utf-8', timeout: 30_000, maxBuffer: 5 * 1024 * 1024 }
    );

    const lines = diff.split('\n');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n') + `\n\n... (diff truncado, ${lines.length - maxLines} líneas omitidas)`;
    }

    return diff;
  } catch (error) {
    console.warn(
      `[fetch] No se pudo obtener diff de PR #${prNumber}:`,
      error instanceof Error ? error.message : error
    );
    return '';
  }
}

// ─── Tipos internos ──────────────────────────────────────────

interface RawPR {
  number: number;
  title: string;
  body: string | null;
  mergedAt: string;
  url: string;
}
