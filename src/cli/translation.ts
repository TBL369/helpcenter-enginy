import * as fs from 'fs';
import * as path from 'path';
import { createLLMClient, LLMClient, LLMProvider } from '../pipeline/changelog/llm';

// ─── Interfaces públicas ─────────────────────────────────────

export interface TranslationConfig {
  provider: LLMProvider;
  model: string;
  apiKey: string;
  baseUrl?: string;
  languages: string[];
  translateUiLabels: boolean;
}

export interface TranslationResult {
  language: string;
  markdown: string;
  source: 'override' | 'llm';
}

// ─── Constantes ──────────────────────────────────────────────

const PROMPT_PATH = path.join(process.cwd(), 'prompts', 'translate-article.md');

const LANGUAGE_NAMES: Record<string, string> = {
  es: 'Spanish',
  it: 'Italian',
  fr: 'French',
  de: 'German',
  pt: 'Portuguese',
  'pt-BR': 'Brazilian Portuguese',
  nl: 'Dutch',
  ja: 'Japanese',
  ko: 'Korean',
  zh: 'Chinese',
  ru: 'Russian',
  ar: 'Arabic',
  pl: 'Polish',
  sv: 'Swedish',
  da: 'Danish',
  fi: 'Finnish',
  nb: 'Norwegian',
  tr: 'Turkish',
  cs: 'Czech',
  hu: 'Hungarian',
  ro: 'Romanian',
  bg: 'Bulgarian',
  hr: 'Croatian',
  sk: 'Slovak',
  sl: 'Slovenian',
  uk: 'Ukrainian',
  el: 'Greek',
  he: 'Hebrew',
  th: 'Thai',
  vi: 'Vietnamese',
  id: 'Indonesian',
  ms: 'Malay',
  ca: 'Catalan',
  'zh-TW': 'Traditional Chinese',
  'zh-CN': 'Simplified Chinese',
};

// ─── Configuración desde .env ────────────────────────────────

export function getTranslationConfig(): TranslationConfig | undefined {
  const languagesRaw = process.env.TRANSLATION_LANGUAGES;
  if (!languagesRaw) return undefined;

  const languages = languagesRaw.split(',').map(l => l.trim()).filter(Boolean);
  if (languages.length === 0) return undefined;

  const provider = (process.env.TRANSLATION_LLM_PROVIDER || process.env.LLM_PROVIDER || 'openai') as LLMProvider;
  const translateUiLabels = process.env.TRANSLATE_UI_LABELS === 'true';

  let model: string;
  let apiKey: string;
  let baseUrl: string | undefined;

  const translationModel = process.env.TRANSLATION_LLM_MODEL;

  switch (provider) {
    case 'anthropic':
      apiKey = process.env.ANTHROPIC_API_KEY ?? '';
      model = translationModel || process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514';
      break;
    case 'ollama':
      apiKey = 'ollama';
      model = translationModel || process.env.OLLAMA_MODEL || 'llama3';
      baseUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434/v1';
      break;
    case 'openai':
    default:
      apiKey = process.env.OPENAI_API_KEY ?? '';
      model = translationModel || process.env.OPENAI_MODEL || 'gpt-4o-mini';
      baseUrl = process.env.OPENAI_BASE_URL;
      break;
  }

  return { provider, model, apiKey, baseUrl, languages, translateUiLabels };
}

// ─── Traducción con LLM ──────────────────────────────────────

let cachedClient: LLMClient | undefined;
let cachedPrompt: string | undefined;

function getLLMClient(config: TranslationConfig): LLMClient {
  if (!cachedClient) {
    cachedClient = createLLMClient({
      provider: config.provider,
      model: config.model,
      apiKey: config.apiKey,
      baseUrl: config.baseUrl,
    });
  }
  return cachedClient;
}

function getTranslationPrompt(translateUiLabels: boolean): string {
  if (!cachedPrompt) {
    cachedPrompt = fs.readFileSync(PROMPT_PATH, 'utf-8');
  }
  let prompt = cachedPrompt;
  if (translateUiLabels) {
    prompt += '\n\nIMPORTANT: TRANSLATE_UI_LABELS=true — You MUST also translate bold text (**text**) to the target language.';
  }
  return prompt;
}

export async function translateArticle(
  markdownContent: string,
  targetLanguage: string,
  config: TranslationConfig,
): Promise<string> {
  const client = getLLMClient(config);
  const languageName = LANGUAGE_NAMES[targetLanguage] ?? targetLanguage;

  const systemPrompt = getTranslationPrompt(config.translateUiLabels)
    .replace('{{TARGET_LANGUAGE}}', languageName);

  const result = await client.call({
    systemPrompt,
    userPrompt: markdownContent,
    temperature: 0.2,
    maxTokens: 16384,
  });

  return result.trim();
}

// ─── Override handling ────────────────────────────────────────

/**
 * Construye la ruta del archivo override para un idioma dado.
 * articles/section/slug.md → articles/section/slug.{lang}.md
 */
export function getOverridePath(enFilePath: string, language: string): string {
  const dir = path.dirname(enFilePath);
  const ext = path.extname(enFilePath);
  const base = path.basename(enFilePath, ext);
  return path.join(dir, `${base}.${language}${ext}`);
}

/**
 * Comprueba si existe un archivo override para el idioma dado.
 */
export function hasOverride(enFilePath: string, language: string): boolean {
  return fs.existsSync(getOverridePath(enFilePath, language));
}

/**
 * Lee el contenido de un archivo override.
 */
export function readOverride(enFilePath: string, language: string): string {
  return fs.readFileSync(getOverridePath(enFilePath, language), 'utf-8');
}

/**
 * Escribe (o sobreescribe) un archivo override con contenido traducido por LLM.
 */
export function writeOverride(enFilePath: string, language: string, content: string): void {
  fs.writeFileSync(getOverridePath(enFilePath, language), content, 'utf-8');
}

// ─── Flujo completo de traducción para un artículo ───────────

export interface ArticleTranslations {
  translations: TranslationResult[];
  overridesUpdated: string[];
}

/**
 * Traduce un artículo a todos los idiomas configurados.
 * - Si existe override y el EN no cambió → usa override
 * - Si existe override y el EN cambió → re-traduce con LLM y sobreescribe override
 * - Si no existe override → traduce con LLM
 *
 * @param enFilePath Ruta absoluta al .md en inglés
 * @param enMarkdown Contenido markdown del artículo EN
 * @param config Configuración de traducción
 * @param enChanged true si el EN fue modificado desde el último sync
 */
export async function translateArticleFull(
  enFilePath: string,
  enMarkdown: string,
  config: TranslationConfig,
  enChanged: boolean = false,
): Promise<ArticleTranslations> {
  const translations: TranslationResult[] = [];
  const overridesUpdated: string[] = [];

  for (const lang of config.languages) {
    const overridePath = getOverridePath(enFilePath, lang);
    const overrideExists = fs.existsSync(overridePath);

    if (overrideExists && !enChanged) {
      const content = fs.readFileSync(overridePath, 'utf-8');
      translations.push({ language: lang, markdown: content, source: 'override' });
      console.log(`      📄 ${lang.toUpperCase()}: usando override existente`);
    } else {
      if (overrideExists && enChanged) {
        console.log(`      ⚠️  ${lang.toUpperCase()}: EN modificado — re-traduciendo override...`);
      } else {
        console.log(`      🌐 ${lang.toUpperCase()}: traduciendo con LLM...`);
      }

      const translated = await translateArticle(enMarkdown, lang, config);
      translations.push({ language: lang, markdown: translated, source: 'llm' });

      if (overrideExists) {
        writeOverride(enFilePath, lang, translated);
        overridesUpdated.push(lang);
        console.log(`      ✅ ${lang.toUpperCase()}: override actualizado desde EN`);
      }
    }
  }

  return { translations, overridesUpdated };
}
