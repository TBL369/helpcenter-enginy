// ─── Tipos compartidos del pipeline de changelog ─────────────

/** PR mergeada obtenida de GitHub */
export interface PullRequest {
  number: number;
  title: string;
  body: string;
  mergedAt: string;
  files: string[];
  url: string;
}

/** Tipo de commit extraído del título de la PR (conventional commits) */
export type CommitType =
  | 'feat'
  | 'fix'
  | 'refactor'
  | 'perf'
  | 'chore'
  | 'ci'
  | 'build'
  | 'test'
  | 'style'
  | 'docs'
  | 'revert'
  | 'unknown';

/** Resultado del pre-filtro determinista (Etapa 1) */
export interface PreFilterResult {
  pr: PullRequest;
  passed: boolean;
  reason: string;
  commitType: CommitType;
  isBreaking: boolean;
}

/** Resultado de la clasificación LLM (Etapa 2) */
export interface ClassificationResult {
  pr: PullRequest;
  isUserFacing: boolean;
  confidence: 'high' | 'medium' | 'low';
  summary: string;
  affectedAreas: string[];
}

/** Entrada en la tabla de mapeo área → artículos (config YAML) */
export interface ArticleMapping {
  articles: string[];
  keywords: string[];
}

/** Change brief estructurado para un artículo (Etapa 3b) */
export interface ChangeBrief {
  prNumber: number;
  prTitle: string;
  commitType: CommitType;
  changes: string; // Markdown con los cambios
  affectedArticles: string[];
}

/** Resultado de la actualización de un artículo */
export interface ArticleUpdateResult {
  articleFile: string;
  updated: boolean;
  briefsApplied: number;
  error?: string;
}

/** Estado persistido entre ejecuciones del pipeline */
export interface SyncState {
  lastRunAt: string;       // ISO 8601
  lastPrProcessed: number; // Número de la última PR procesada
  processedPrs: number[];  // PRs procesadas en el último run
}

/** Proveedor LLM soportado */
export type LLMProvider = 'openai' | 'anthropic' | 'ollama';

/** Configuración específica del proveedor LLM */
export interface LLMConfig {
  provider: LLMProvider;
  apiKey: string;
  model: string;
  baseUrl?: string;
}

/** Configuración del pipeline de changelog */
export interface ChangelogConfig {
  /** Repo del SaaS en formato owner/name (ej: "acme/enginy") */
  saasRepo: string;
  /** Ruta absoluta al directorio de artículos */
  articlesPath: string;
  /** Configuración del proveedor LLM */
  llm: LLMConfig;
  /** Modo dry-run: solo reporta, no escribe cambios */
  dryRun: boolean;
  /** Ruta al fichero de estado */
  statePath: string;
  /** Ruta al fichero de mapeo de artículos */
  articleMapPath: string;
  /** Ruta al fichero de rutas user-facing */
  userFacingPathsConfigPath: string;
  /** Ruta al prompt de change-brief (system prompt para article-updater) */
  changeBriefPromptPath: string;
}

/** Configuración de rutas user-facing cargada del YAML */
export interface UserFacingPathsConfig {
  userFacingPaths: string[];
  internalPaths: string[];
}

/** Mapeo completo cargado del YAML */
export interface ArticleMapConfig {
  mappings: Record<string, ArticleMapping>;
}

/** Estadísticas del pipeline */
export interface PipelineStats {
  prsFound: number;
  prsAfterPreFilter: number;
  prsAfterClassification: number;
  articlesUpdated: number;
  articlesSkipped: number;
  articlesFailed: number;
  errors: Array<{ context: string; error: string }>;
}
