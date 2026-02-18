import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';

// ─── Interfaz pública del cliente LLM ────────────────────────

/** Proveedores soportados */
export type LLMProvider = 'openai' | 'anthropic' | 'ollama';

/** Opciones para crear el cliente LLM */
export interface LLMClientOptions {
  provider: LLMProvider;
  apiKey: string;
  model: string;
  baseUrl?: string;
}

/** Opciones para una llamada al LLM */
export interface LLMCallOptions {
  systemPrompt: string;
  userPrompt: string;
  /** Si true, intenta parsear la respuesta como JSON */
  expectJson?: boolean;
  /** Temperatura (0 = determinista, 1 = creativo). Default: 0.3 */
  temperature?: number;
  /** Máximo de tokens en la respuesta */
  maxTokens?: number;
}

/** Contrato que todo proveedor LLM debe cumplir */
export interface LLMClient {
  call(options: LLMCallOptions): Promise<string>;
  callJson<T>(options: LLMCallOptions): Promise<T>;
}

/**
 * Factory que crea el cliente LLM adecuado según el proveedor.
 * Ollama reutiliza el cliente OpenAI con base URL personalizada.
 */
export function createLLMClient(options: LLMClientOptions): LLMClient {
  console.log(`[llm] Proveedor: ${options.provider}, modelo: ${options.model}`);

  switch (options.provider) {
    case 'anthropic':
      return new AnthropicLLMClient(options);
    case 'ollama':
      return new OpenAILLMClient({
        ...options,
        baseUrl: options.baseUrl ?? 'http://localhost:11434/v1',
      });
    case 'openai':
    default:
      return new OpenAILLMClient(options);
  }
}

// ─── Implementación OpenAI (también usada por Ollama) ────────

class OpenAILLMClient implements LLMClient {
  private client: OpenAI;
  private model: string;

  constructor(options: LLMClientOptions) {
    this.client = new OpenAI({
      apiKey: options.apiKey,
      ...(options.baseUrl ? { baseURL: options.baseUrl } : {}),
    });
    this.model = options.model;
  }

  async call(options: LLMCallOptions): Promise<string> {
    return withRetries(async () => {
      const response = await this.client.chat.completions.create({
        model: this.model,
        messages: [
          { role: 'system', content: options.systemPrompt },
          { role: 'user', content: options.userPrompt },
        ],
        temperature: options.temperature ?? 0.3,
        ...(options.maxTokens ? { max_tokens: options.maxTokens } : {}),
        ...(options.expectJson ? { response_format: { type: 'json_object' } } : {}),
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('Respuesta vacía del LLM (OpenAI)');
      }
      return content;
    }, error => {
      if (error instanceof OpenAI.APIError) {
        return error.status === 401 || error.status === 403;
      }
      return false;
    });
  }

  async callJson<T>(options: LLMCallOptions): Promise<T> {
    const raw = await this.call({ ...options, expectJson: true });
    return parseJsonResponse<T>(raw);
  }
}

// ─── Implementación Anthropic ────────────────────────────────

/** Max tokens por defecto para Anthropic (el parámetro es obligatorio) */
const ANTHROPIC_DEFAULT_MAX_TOKENS = 4096 as const;

class AnthropicLLMClient implements LLMClient {
  private client: Anthropic;
  private model: string;

  constructor(options: LLMClientOptions) {
    this.client = new Anthropic({
      apiKey: options.apiKey,
    });
    this.model = options.model;
  }

  async call(options: LLMCallOptions): Promise<string> {
    return withRetries(async () => {
      const response = await this.client.messages.create({
        model: this.model,
        max_tokens: options.maxTokens ?? ANTHROPIC_DEFAULT_MAX_TOKENS,
        system: options.systemPrompt,
        messages: [
          { role: 'user', content: this.buildUserContent(options) },
        ],
        temperature: options.temperature ?? 0.3,
      });

      const block = response.content[0];
      if (!block || block.type !== 'text') {
        throw new Error('Respuesta vacía del LLM (Anthropic)');
      }
      return block.text;
    }, error => {
      if (error instanceof Anthropic.APIError) {
        return error.status === 401 || error.status === 403;
      }
      return false;
    });
  }

  async callJson<T>(options: LLMCallOptions): Promise<T> {
    // Anthropic no tiene response_format nativo — reforzar en el prompt
    const reinforcedOptions: LLMCallOptions = {
      ...options,
      userPrompt: options.userPrompt + '\n\nIMPORTANT: Respond ONLY with valid JSON. No text before or after the JSON object.',
    };

    const raw = await this.call(reinforcedOptions);
    return parseJsonResponse<T>(raw);
  }

  /**
   * Construye el contenido del mensaje de usuario.
   * Si se espera JSON, añade un prefill para guiar la respuesta.
   */
  private buildUserContent(options: LLMCallOptions): string {
    return options.userPrompt;
  }
}

// ─── Utilidades compartidas ──────────────────────────────────

const MAX_RETRIES = 2;

/**
 * Ejecuta una operación con reintentos para errores transitorios.
 * @param fn - Operación a ejecutar
 * @param isNonRetryable - Función que determina si un error no debe reintentarse
 */
async function withRetries(
  fn: () => Promise<string>,
  isNonRetryable: (error: unknown) => boolean
): Promise<string> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (isNonRetryable(error)) {
        throw lastError;
      }

      if (attempt < MAX_RETRIES) {
        const waitMs = 1000 * (attempt + 1);
        console.warn(`[llm] Intento ${attempt + 1} falló, reintentando en ${waitMs}ms...`);
        await sleep(waitMs);
      }
    }
  }

  throw lastError ?? new Error('Error desconocido en LLM');
}

/**
 * Parsea una respuesta del LLM como JSON.
 * Maneja respuestas con texto alrededor del JSON.
 */
function parseJsonResponse<T>(raw: string): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    // Intentar extraer JSON de la respuesta (a veces viene con texto alrededor)
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as T;
    }
    throw new Error(`Respuesta del LLM no es JSON válido: ${raw.substring(0, 200)}`);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
