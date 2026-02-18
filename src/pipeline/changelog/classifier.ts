import { LLMClient } from './llm';
import { PullRequest, PreFilterResult, ClassificationResult } from './types';

// ─── Etapa 2: Clasificación LLM ─────────────────────────────

const SYSTEM_PROMPT = `Eres un clasificador de cambios de software. Tu trabajo es determinar si un cambio en un SaaS de prospecting/ventas afecta a lo que el usuario final ve o hace.

Reglas:
- "user-facing" significa que el cambio modifica la UI, el comportamiento de una feature, los límites, los permisos, o cualquier cosa que el usuario perciba.
- Cambios internos (refactoring, optimización de performance sin cambio visible, corrección de logs, cambios en workers internos) NO son user-facing.
- Un bug fix ES user-facing si cambia el comportamiento que el usuario experimenta (ej: "un botón que antes no funcionaba ahora sí").
- Un bug fix NO es user-facing si es un fix técnico invisible (ej: "memory leak en worker", "fix race condition en cola interna").

Responde SIEMPRE en JSON con esta estructura exacta:
{
  "is_user_facing": true | false,
  "confidence": "high" | "medium" | "low",
  "summary": "Descripción de 1-2 frases del cambio visible al usuario (vacío si no es user-facing)",
  "affected_areas": ["area1", "area2"]
}

Las áreas válidas son: dashboard, activity, ai-finder, ai-playbook, analytics, blocklist, campaigns, credits, identities, inbox, integrations, lists, settings, tasks.

Si el cambio afecta un área que no está en la lista, usa el nombre más cercano o invéntalo en kebab-case.`;

/**
 * Clasifica un array de PRs pre-filtradas usando el LLM.
 * Solo procesa las PRs que pasaron el pre-filtro.
 *
 * @param preFiltered - Resultados del pre-filtro (solo los que passed=true)
 * @param llm - Cliente LLM configurado
 * @returns Array de clasificaciones
 */
export async function classifyPRs(
  preFiltered: PreFilterResult[],
  llm: LLMClient
): Promise<ClassificationResult[]> {
  const candidates = preFiltered.filter(r => r.passed);

  if (candidates.length === 0) {
    console.log('[classifier] No hay PRs candidatas para clasificar');
    return [];
  }

  console.log(`[classifier] Clasificando ${candidates.length} PRs con LLM...`);

  const results: ClassificationResult[] = [];

  for (const { pr } of candidates) {
    try {
      const classification = await classifySinglePR(pr, llm);
      results.push(classification);

      const status = classification.isUserFacing ? 'USER-FACING' : 'interno';
      console.log(
        `  PR #${pr.number}: ${status} (${classification.confidence}) — ${classification.summary || 'sin cambio visible'}`
      );
    } catch (error) {
      console.error(
        `  PR #${pr.number}: error en clasificación —`,
        error instanceof Error ? error.message : error
      );
      // En caso de error, asumir user-facing con baja confianza (no perder cambios)
      results.push({
        pr,
        isUserFacing: true,
        confidence: 'low',
        summary: `[Error en clasificación — asumido user-facing] ${pr.title}`,
        affectedAreas: [],
      });
    }

    // Rate limiting entre llamadas al LLM
    await sleep(500);
  }

  const userFacing = results.filter(r => r.isUserFacing);
  console.log(`[classifier] Resultado: ${userFacing.length}/${results.length} son user-facing`);

  return results;
}

// ─── Clasificación individual ────────────────────────────────

async function classifySinglePR(
  pr: PullRequest,
  llm: LLMClient
): Promise<ClassificationResult> {
  const userPrompt = buildUserPrompt(pr);

  const response = await llm.callJson<LLMClassificationResponse>({
    systemPrompt: SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.1, // Muy determinista para clasificación
    maxTokens: 300,
  });

  return {
    pr,
    isUserFacing: response.is_user_facing,
    confidence: response.confidence,
    summary: response.summary ?? '',
    affectedAreas: response.affected_areas ?? [],
  };
}

function buildUserPrompt(pr: PullRequest): string {
  const filesSection = pr.files.length > 0
    ? `\nArchivos modificados:\n${pr.files.map(f => `- ${f}`).join('\n')}`
    : '';

  return `Título de la PR: ${pr.title}
Descripción: ${pr.body || '(sin descripción)'}${filesSection}`;
}

// ─── Tipos internos ──────────────────────────────────────────

interface LLMClassificationResponse {
  is_user_facing: boolean;
  confidence: 'high' | 'medium' | 'low';
  summary: string;
  affected_areas: string[];
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
