import { LLMClient } from './llm';
import { PullRequest, ChangeBrief, CommitType } from './types';
import { MappedChange } from './mapper';
import { fetchPRDiff } from './fetch-prs';

// ─── Etapa 3b: Generación de change briefs ──────────────────

const SYSTEM_PROMPT = `Eres un escritor técnico especializado en documentación de producto SaaS.
Tu tarea es generar un "change brief" estructurado que describe QUÉ cambió en el producto desde la perspectiva del usuario final.

Reglas:
- Escribe SOLO lo que el usuario ve o experimenta. No menciones detalles de implementación.
- Usa lenguaje claro y directo, como para un artículo de help center.
- Distingue entre cambios "Nuevo" (funcionalidad añadida), "Modificado" (comportamiento cambiado) y "Eliminado" (feature retirada).
- Para cada cambio, indica:
  - Qué es / qué hace
  - Dónde está en la UI (si aplica)
  - Cómo afecta al flujo del usuario
- Formato: Markdown con headers H3 para cada cambio.
- Sé conciso pero no omitas detalles relevantes para la documentación.
- Escribe en inglés (los artículos del help center están en inglés).`;

/**
 * Genera change briefs para un artículo a partir de los cambios mapeados.
 * Agrupa todos los cambios que afectan al mismo artículo en un solo brief.
 *
 * @param articleFile - Nombre del fichero .md del artículo
 * @param changes - Cambios mapeados a este artículo
 * @param saasRepo - Repo del SaaS para obtener diffs
 * @param llm - Cliente LLM
 * @returns Change brief con todos los cambios consolidados
 */
export async function generateBrief(
  articleFile: string,
  changes: MappedChange[],
  saasRepo: string,
  llm: LLMClient
): Promise<ChangeBrief> {
  console.log(`[brief] Generando brief para ${articleFile} (${changes.length} cambios)...`);

  // Recopilar diffs de todas las PRs involucradas
  const prContexts: PRContext[] = [];
  for (const change of changes) {
    const diff = fetchPRDiff(saasRepo, change.pr.number, 200);
    prContexts.push({
      pr: change.pr,
      summary: change.summary,
      commitType: change.commitType,
      diff,
    });
  }

  const userPrompt = buildBriefPrompt(articleFile, prContexts);

  const briefContent = await llm.call({
    systemPrompt: SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.3,
    maxTokens: 1500,
  });

  return {
    prNumber: changes[0].pr.number,
    prTitle: changes.map(c => `PR #${c.pr.number}: ${c.pr.title}`).join('\n'),
    commitType: dominantCommitType(changes),
    changes: briefContent,
    affectedArticles: [articleFile],
  };
}

// ─── Construcción del prompt ─────────────────────────────────

function buildBriefPrompt(articleFile: string, contexts: PRContext[]): string {
  const articleName = articleFile.replace('.md', '').replace(/-/g, ' ');

  let prompt = `Artículo afectado: "${articleName}" (${articleFile})\n\n`;
  prompt += `Cambios a documentar:\n\n`;

  for (const ctx of contexts) {
    const changeType = ctx.commitType === 'feat' ? 'Nueva funcionalidad'
      : ctx.commitType === 'fix' ? 'Cambio de comportamiento'
      : 'Modificación';

    prompt += `--- PR #${ctx.pr.number}: ${ctx.pr.title} ---\n`;
    prompt += `Tipo: ${changeType}\n`;
    prompt += `Resumen: ${ctx.summary}\n`;
    prompt += `Descripción de la PR: ${ctx.pr.body || '(sin descripción)'}\n`;

    if (ctx.diff) {
      prompt += `\nDiff relevante (puede estar truncado):\n\`\`\`\n${ctx.diff}\n\`\`\`\n`;
    }

    prompt += '\n';
  }

  prompt += `\nGenera un change brief en Markdown con los cambios que afectan a este artículo.`;
  prompt += `\nUsa headers H3 (###) para cada cambio individual.`;
  prompt += `\nEmpieza cada header con "New:", "Changed:" o "Removed:" según corresponda.`;

  return prompt;
}

// ─── Helpers ─────────────────────────────────────────────────

/** Determina el tipo de commit dominante (mayoría gana, feat > fix) */
function dominantCommitType(changes: MappedChange[]): CommitType {
  const counts = new Map<CommitType, number>();
  for (const c of changes) {
    counts.set(c.commitType, (counts.get(c.commitType) ?? 0) + 1);
  }

  // feat tiene prioridad si hay empate
  if (counts.has('feat')) return 'feat';

  let maxType: CommitType = 'unknown';
  let maxCount = 0;
  for (const [type, count] of counts) {
    if (count > maxCount) {
      maxCount = count;
      maxType = type;
    }
  }

  return maxType;
}

interface PRContext {
  pr: PullRequest;
  summary: string;
  commitType: CommitType;
  diff: string;
}
