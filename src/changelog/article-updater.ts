import * as fs from 'fs';
import * as path from 'path';
import { LLMClient } from './llm';
import { ChangeBrief, ArticleUpdateResult } from './types';

// ─── Carga del system prompt desde prompts/change-brief.md ───

const FALLBACK_SYSTEM_PROMPT = `You are a senior SaaS Help Center Information Architect and Technical Writer.
Update an existing Help Center article by incorporating the changes described in a "change brief".
Preserve the article's structure, tone, and completeness. Changes from the brief override conflicting content.
Output ONLY the complete updated article in Markdown. No preamble, no explanations.`;

function loadSystemPrompt(promptPath: string): string {
  try {
    const content = fs.readFileSync(promptPath, 'utf-8').trim();
    if (!content) {
      console.warn('[updater] Prompt file is empty, using fallback');
      return FALLBACK_SYSTEM_PROMPT;
    }
    return content;
  } catch (error) {
    console.warn(
      '[updater] Could not load prompt file, using fallback:',
      error instanceof Error ? error.message : error
    );
    return FALLBACK_SYSTEM_PROMPT;
  }
}

// ─── Actualización de artículos ──────────────────────────────

/**
 * Actualiza un artículo aplicando uno o varios change briefs.
 * Lee el system prompt desde prompts/change-brief.md para usar
 * las reglas de formato completas.
 *
 * @param articleFile - Nombre del fichero .md (ej: "campaigns.md")
 * @param briefs - Change briefs a aplicar
 * @param articlesPath - Ruta absoluta al directorio articles/
 * @param llm - Cliente LLM
 * @param dryRun - Si true, no escribe el fichero
 * @param promptPath - Ruta al prompt de change-brief.md
 * @returns Resultado de la actualización
 */
export async function updateArticle(
  articleFile: string,
  briefs: ChangeBrief[],
  articlesPath: string,
  llm: LLMClient,
  dryRun: boolean,
  promptPath?: string
): Promise<ArticleUpdateResult> {
  const filePath = path.join(articlesPath, articleFile);

  try {
    if (!fs.existsSync(filePath)) {
      return {
        articleFile,
        updated: false,
        briefsApplied: 0,
        error: `Fichero no encontrado: ${filePath}`,
      };
    }

    const currentContent = fs.readFileSync(filePath, 'utf-8');

    if (!currentContent.trim()) {
      return {
        articleFile,
        updated: false,
        briefsApplied: 0,
        error: 'Artículo vacío',
      };
    }

    const consolidatedBrief = briefs
      .map(b => b.changes)
      .join('\n\n---\n\n');

    const prReferences = briefs
      .map(b => b.prTitle)
      .join('\n');

    console.log(`[updater] Reescribiendo ${articleFile} con ${briefs.length} brief(s)...`);

    const systemPrompt = promptPath
      ? loadSystemPrompt(promptPath)
      : FALLBACK_SYSTEM_PROMPT;

    const userPrompt = `<CURRENT_ARTICLE>
${currentContent}
</CURRENT_ARTICLE>

<CHANGE_BRIEFS>
${consolidatedBrief}
</CHANGE_BRIEFS>

<PR_REFERENCES>
${prReferences}
</PR_REFERENCES>

<NOTES>
- Screenshots/images are added later; do not mention missing images.
- If there are plan/role/regional differences, include them only if explicitly present in the change briefs.
</NOTES>`;

    const updatedContent = await llm.call({
      systemPrompt,
      userPrompt,
      temperature: 0.2,
      maxTokens: 8000,
    });

    if (!updatedContent.trim()) {
      return {
        articleFile,
        updated: false,
        briefsApplied: briefs.length,
        error: 'LLM retornó contenido vacío',
      };
    }

    if (!updatedContent.includes('# ')) {
      return {
        articleFile,
        updated: false,
        briefsApplied: briefs.length,
        error: 'Artículo actualizado no contiene headings — posible error del LLM',
      };
    }

    if (dryRun) {
      console.log(`  [dry-run] ${articleFile}: se actualizaría (${briefs.length} briefs)`);
      return {
        articleFile,
        updated: false,
        briefsApplied: briefs.length,
      };
    }

    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`  [ok] ${articleFile} actualizado`);

    return {
      articleFile,
      updated: true,
      briefsApplied: briefs.length,
    };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error(`  [error] ${articleFile}: ${msg}`);
    return {
      articleFile,
      updated: false,
      briefsApplied: 0,
      error: msg,
    };
  }
}
