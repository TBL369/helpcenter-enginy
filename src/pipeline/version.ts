import { execSync } from 'child_process';

export interface VersionInfo {
  version: number;
  needsSync: boolean;
  commitHash?: string;
}

// ─── Display name helpers ─────────────────────────────────────

/** Palabras con capitalización especial al convertir kebab-case → display name */
const SPECIAL_WORDS: Record<string, string> = {
  ai: 'AI',
  crm: 'CRM',
  csv: 'CSV',
  icp: 'ICP',
} as const;

/**
 * Convierte un nombre kebab-case a display name legible.
 * "ai-finder" → "AI Finder", "activity" → "Activity"
 */
export function toDisplayName(kebabName: string): string {
  return kebabName
    .split('-')
    .map(word => SPECIAL_WORDS[word] ?? (word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
}

/**
 * Reconstruye el nombre legacy PascalCase con underscores a partir de kebab-case.
 * "ai-finder" → "AI_Finder", "activity" → "Activity"
 * Se usa para buscar commits del formato anterior al renaming.
 */
function toLegacyName(kebabName: string): string {
  return kebabName
    .split('-')
    .map(word => SPECIAL_WORDS[word] ?? (word.charAt(0).toUpperCase() + word.slice(1)))
    .join('_');
}

// ─── Version tracking ─────────────────────────────────────────

/**
 * Obtiene la última versión registrada en git para un artículo.
 * Busca commits con formato "docs: DisplayName vN" y también el formato
 * legacy "docs: Legacy_Name vN" para mantener continuidad tras el renaming.
 * @param kebabName - Nombre del artículo en kebab-case (ej: "ai-finder")
 * @param repoRoot - Ruta raíz del repositorio
 * @returns Número de versión más alto encontrado, o 0 si no hay commits previos
 */
export function getLastVersion(kebabName: string, repoRoot: string): { version: number; commitHash: string | undefined } {
  const displayName = toDisplayName(kebabName);
  const legacyName = toLegacyName(kebabName);

  // Nombres a buscar: display name actual + legacy si difiere
  const searchNames = [displayName];
  if (legacyName !== displayName) {
    searchNames.push(legacyName);
  }

  let maxVersion = 0;
  let latestHash: string | undefined;

  for (const name of searchNames) {
    try {
      const result = execSync(
        `git log --oneline --grep="^docs: ${name} v" --format="%H %s"`,
        { cwd: repoRoot, encoding: 'utf-8' }
      ).trim();

      if (!result) continue;

      const lines = result.split('\n');
      for (const line of lines) {
        const spaceIdx = line.indexOf(' ');
        const hash = line.substring(0, spaceIdx);
        const message = line.substring(spaceIdx + 1);

        const versionMatch = message.match(new RegExp(`^docs: ${escapeRegex(name)} v(\\d+)$`));
        if (versionMatch) {
          const version = parseInt(versionMatch[1], 10);
          if (version > maxVersion) {
            maxVersion = version;
            latestHash = hash;
          }
        }
      }
    } catch (error) {
      console.warn(`[version] git log falló para "${name}":`, error instanceof Error ? error.message : error);
    }
  }

  return { version: maxVersion, commitHash: latestHash };
}

/**
 * Verifica si un archivo .md ha cambiado desde un commit específico.
 * @param filePath - Ruta relativa del archivo desde la raíz del repo (ej: "articles/ai-finder.md")
 * @param commitHash - Hash del commit de referencia
 * @param repoRoot - Ruta raíz del repositorio
 * @returns true si el archivo tiene diferencias respecto al commit
 */
export function hasChangedSince(filePath: string, commitHash: string, repoRoot: string): boolean {
  try {
    const result = execSync(
      `git diff ${commitHash} -- "${filePath}"`,
      { cwd: repoRoot, encoding: 'utf-8' }
    ).trim();

    return result.length > 0;
  } catch (error) {
    console.warn(`[version] git diff falló para "${filePath}":`, error instanceof Error ? error.message : error);
    // Si falla, asumir que sí cambió (para no perder syncs)
    return true;
  }
}

/**
 * Determina la siguiente versión y si el archivo necesita sincronización.
 * Combina getLastVersion y hasChangedSince.
 * @param kebabName - Nombre del artículo en kebab-case (ej: "ai-finder")
 * @param filePath - Ruta relativa del archivo (ej: "articles/ai-finder.md")
 * @param repoRoot - Ruta raíz del repositorio
 * @returns Info de versión: { version, needsSync, commitHash }
 */
export function getNextVersion(kebabName: string, filePath: string, repoRoot: string): VersionInfo {
  const { version: lastVersion, commitHash } = getLastVersion(kebabName, repoRoot);

  // Si nunca se ha sincronizado, es v1
  if (lastVersion === 0 || !commitHash) {
    return { version: 1, needsSync: true };
  }

  // Verificar si cambió desde el último sync
  const changed = hasChangedSince(filePath, commitHash, repoRoot);

  if (changed) {
    return { version: lastVersion + 1, needsSync: true, commitHash };
  }

  return { version: lastVersion, needsSync: false, commitHash };
}

/**
 * Crea un commit con el formato de versionado: "docs: DisplayName vN"
 * Solo commitea si el archivo tiene cambios reales staged. Si no hay diffs
 * (ej: re-sync sin cambios en el .md), skipea el commit silenciosamente.
 * @param kebabName - Nombre del artículo en kebab-case
 * @param version - Número de versión
 * @param filePath - Ruta relativa del archivo
 * @param repoRoot - Ruta raíz del repositorio
 */
export function commitVersion(kebabName: string, version: number, filePath: string, repoRoot: string): void {
  const displayName = toDisplayName(kebabName);
  const message = `docs: ${displayName} v${version}`;

  try {
    execSync(`git add "${filePath}"`, { cwd: repoRoot, encoding: 'utf-8' });

    // Verificar si hay cambios staged; git diff --cached --quiet sale con code 1 si hay diffs
    try {
      execSync('git diff --cached --quiet', { cwd: repoRoot, encoding: 'utf-8' });
      // Si no lanza error, no hay cambios — skipear commit
      console.log(`[version] ${displayName} v${version} — sin cambios en archivo, commit omitido`);
      return;
    } catch {
      // exit code 1 = hay diffs staged — proceder con commit
    }

    execSync(`git commit -m "${message}"`, { cwd: repoRoot, encoding: 'utf-8' });
  } catch (error) {
    console.error(`[version] Error al commitear versión para "${displayName}":`, error instanceof Error ? error.message : error);
    throw error;
  }
}

/**
 * Escapa caracteres especiales de regex para usar en new RegExp()
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
