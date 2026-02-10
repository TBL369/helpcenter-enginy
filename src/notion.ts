import { Client } from '@notionhq/client';
import { BlockObjectRequest } from '@notionhq/client/build/src/api-endpoints';

/** Notion limita a 100 bloques por llamada a la API */
const BATCH_SIZE = 100;

export interface NotionConfig {
  token: string;
  parentPageId: string;
}

export interface CreatePageResult {
  id: string;
  url: string;
}

// Tipos para rich_text de Notion
interface RichTextAnnotations {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
}

interface RichTextItem {
  type: 'text';
  text: {
    content: string;
    link?: { url: string } | null;
  };
  annotations?: RichTextAnnotations;
}

export class NotionClient {
  private client: Client;
  private parentPageId: string;

  constructor(config: NotionConfig) {
    this.client = new Client({
      auth: config.token,
    });
    this.parentPageId = config.parentPageId;
  }

  /**
   * Crea una nueva página en Notion como hija de la página especificada
   * Maneja artículos grandes dividiendo los bloques en lotes de 100 (límite de Notion)
   * @param title - Título de la página
   * @param markdownContent - Contenido en formato Markdown
   * @param parentPageId - ID de la página padre (opcional, usa el configurado por defecto)
   * @returns ID y URL de la página creada
   */
  async createPage(title: string, markdownContent: string, parentPageId?: string): Promise<CreatePageResult> {
    try {
      // Convertir el contenido a bloques de Notion
      const blocks = this.convertContentToBlocks(markdownContent);

      const firstBatch = blocks.slice(0, BATCH_SIZE);
      const remainingBatches: BlockObjectRequest[][] = [];

      // Dividir los bloques restantes en lotes de 100
      for (let i = BATCH_SIZE; i < blocks.length; i += BATCH_SIZE) {
        remainingBatches.push(blocks.slice(i, i + BATCH_SIZE));
      }

      // Crear la página con el primer lote de bloques
      const response = await this.client.pages.create({
        parent: {
          page_id: parentPageId || this.parentPageId,
        },
        properties: {
          title: {
            title: [
              {
                text: {
                  content: title,
                },
              },
            ],
          },
        },
        children: firstBatch,
      });

      // Si hay más bloques, agregarlos en lotes adicionales
      if (remainingBatches.length > 0) {
        for (let i = 0; i < remainingBatches.length; i++) {
          await this.client.blocks.children.append({
            block_id: response.id,
            children: remainingBatches[i],
          });
        }
      }

      const pageUrl = 'url' in response ? (response as { url: string }).url : `https://notion.so/${response.id.replace(/-/g, '')}`;

      return {
        id: response.id,
        url: pageUrl,
      };
    } catch (error) {
      console.error(`❌ Error al crear página "${title}" en Notion:`, error);
      throw error;
    }
  }

  /**
   * Agrega bloques al final de una página existente en Notion.
   * Se usa para construir el log visual de sync en la página padre.
   */
  async appendBlocksToPage(pageId: string, blocks: BlockObjectRequest[]): Promise<void> {
    try {
      await this.client.blocks.children.append({
        block_id: pageId,
        children: blocks,
      });
    } catch (error) {
      console.error('❌ Error al agregar bloques a la página:', error);
      throw error;
    }
  }

  /**
   * Crea bloques utilitarios para el log de sync (accesibles desde index.ts)
   */
  buildSyncHeaderBlocks(dateLabel: string): BlockObjectRequest[] {
    return [this.createParagraphBlock(`*${dateLabel}*`)];
  }

  buildSyncFooterBlocks(): BlockObjectRequest[] {
    return [this.createDividerBlock(), this.createParagraphBlock(' ')];
  }

  /**
   * Parsea texto con formato markdown inline y lo convierte a rich_text de Notion
   * Soporta: **negrita**, *cursiva*, ~~tachado~~, `código`, __subrayado__, [enlaces](url)
   * También soporta combinaciones como ***negrita cursiva***
   */
  private parseInlineMarkdown(text: string): RichTextItem[] {
    const richTextItems: RichTextItem[] = [];
    
    // Regex para encontrar todos los patrones de formato
    // Orden importante: patrones más específicos primero
    const patterns = [
      // ***negrita y cursiva*** o ___negrita y cursiva___
      { regex: /\*\*\*(.+?)\*\*\*|___(.+?)___/g, annotations: { bold: true, italic: true } },
      // **negrita** o __subrayado__ (tratamos __ como subrayado para diferenciarlo)
      { regex: /\*\*(.+?)\*\*/g, annotations: { bold: true } },
      // __subrayado__
      { regex: /__(.+?)__/g, annotations: { underline: true } },
      // *cursiva* o _cursiva_
      { regex: /\*(.+?)\*|_([^_]+)_/g, annotations: { italic: true } },
      // ~~tachado~~
      { regex: /~~(.+?)~~/g, annotations: { strikethrough: true } },
      // `código`
      { regex: /`([^`]+)`/g, annotations: { code: true } },
      // [texto](url) - enlaces
      { regex: /\[([^\]]+)\]\(([^)]+)\)/g, isLink: true },
    ];

    // Tokenizar el texto
    interface Token {
      start: number;
      end: number;
      content: string;
      annotations?: RichTextAnnotations;
      link?: string;
    }

    const tokens: Token[] = [];

    // Encontrar todos los matches
    for (const pattern of patterns) {
      const regex = new RegExp(pattern.regex.source, 'g');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        // Verificar que no se solape con tokens existentes
        const start = match.index;
        const end = match.index + match[0].length;
        
        const overlaps = tokens.some(t => 
          (start >= t.start && start < t.end) || 
          (end > t.start && end <= t.end) ||
          (start <= t.start && end >= t.end)
        );
        
        if (!overlaps) {
          if ('isLink' in pattern && pattern.isLink) {
            tokens.push({
              start,
              end,
              content: match[1],
              link: match[2],
            });
          } else {
            // El contenido puede estar en grupo 1 o 2 dependiendo del patrón
            const content = match[1] || match[2];
            tokens.push({
              start,
              end,
              content,
              annotations: pattern.annotations as RichTextAnnotations,
            });
          }
        }
      }
    }

    // Ordenar tokens por posición
    tokens.sort((a, b) => a.start - b.start);

    // Construir el array de rich_text
    let currentPos = 0;

    for (const token of tokens) {
      // Agregar texto plano antes del token
      if (token.start > currentPos) {
        const plainText = text.substring(currentPos, token.start);
        if (plainText) {
          richTextItems.push({
            type: 'text',
            text: { content: this.truncateText(plainText) },
          });
        }
      }

      // Agregar el token formateado
      // Notion requiere URLs absolutas con protocolo; descartar anchors (#) y rutas relativas
      const validUrl = token.link && /^https?:\/\//.test(token.link) ? token.link : undefined;
      const item: RichTextItem = {
        type: 'text',
        text: { 
          content: this.truncateText(token.content),
          link: validUrl ? { url: validUrl } : null,
        },
      };

      if (token.annotations) {
        item.annotations = token.annotations;
      }

      richTextItems.push(item);
      currentPos = token.end;
    }

    // Agregar texto restante después del último token
    if (currentPos < text.length) {
      const remainingText = text.substring(currentPos);
      if (remainingText) {
        richTextItems.push({
          type: 'text',
          text: { content: this.truncateText(remainingText) },
        });
      }
    }

    // Si no hay tokens, devolver el texto completo como plain text
    if (richTextItems.length === 0) {
      richTextItems.push({
        type: 'text',
        text: { content: this.truncateText(text) },
      });
    }

    return richTextItems;
  }

  /**
   * Convierte contenido Markdown a bloques de Notion
   * Soporta: encabezados, listas, citas, código, divisores y formato inline
   */
  private convertContentToBlocks(content: string): BlockObjectRequest[] {
    const blocks: BlockObjectRequest[] = [];
    
    // Limpiar y normalizar el markdown
    const cleanContent = this.cleanMarkdown(content);
    
    // Dividir el contenido en líneas
    const lines = cleanContent.split('\n');
    let i = 0;
    let currentParagraph = '';

    const flushParagraph = () => {
      if (currentParagraph.trim()) {
        blocks.push(this.createParagraphBlock(currentParagraph.trim()));
        currentParagraph = '';
      }
    };

    while (i < lines.length) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Línea vacía: guardar párrafo actual
      if (trimmedLine === '') {
        flushParagraph();
        i++;
        continue;
      }

      // Divisor horizontal (---, ***, ___)
      if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmedLine)) {
        flushParagraph();
        blocks.push(this.createDividerBlock());
        i++;
        continue;
      }

      // Bloque de código (```)
      if (trimmedLine.startsWith('```')) {
        flushParagraph();
        const language = trimmedLine.substring(3).trim() || 'plain text';
        const codeLines: string[] = [];
        i++;
        
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        
        blocks.push(this.createCodeBlock(codeLines.join('\n'), language));
        i++; // Saltar el ``` de cierre
        continue;
      }

      // Encabezado H1
      if (trimmedLine.startsWith('# ')) {
        flushParagraph();
        blocks.push(this.createHeading1Block(trimmedLine.substring(2)));
        i++;
        continue;
      }

      // Encabezado H2
      if (trimmedLine.startsWith('## ')) {
        flushParagraph();
        blocks.push(this.createHeading2Block(trimmedLine.substring(3)));
        i++;
        continue;
      }

      // Encabezado H4 — Notion no soporta H4; renderizar como párrafo en negrita
      if (trimmedLine.startsWith('#### ')) {
        flushParagraph();
        const h4Text = trimmedLine.substring(5);
        blocks.push(this.createParagraphBlock(`**${h4Text}**`));
        i++;
        continue;
      }

      // Encabezado H3
      if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        blocks.push(this.createHeading3Block(trimmedLine.substring(4)));
        i++;
        continue;
      }

      // Listas (bulleted, numbered, checkbox) — con soporte para anidamiento
      if (/^[-*]\s/.test(trimmedLine) || /^\d+\.\s/.test(trimmedLine)) {
        flushParagraph();
        const { blocks: listBlocks, endIndex } = this.parseNestedListItems(lines, i);
        blocks.push(...listBlocks);
        i = endIndex;
        continue;
      }

      // Cita (>)
      if (trimmedLine.startsWith('> ')) {
        flushParagraph();
        blocks.push(this.createQuoteBlock(trimmedLine.substring(2)));
        i++;
        continue;
      }

      // Callout/Nota (> 📝 o > ⚠️ etc.) - convertir a callout si empieza con emoji
      if (/^>\s*[\u{1F300}-\u{1F9FF}]/u.test(trimmedLine)) {
        flushParagraph();
        const calloutContent = trimmedLine.substring(2);
        blocks.push(this.createCalloutBlock(calloutContent));
        i++;
        continue;
      }

      // Tabla markdown (líneas que empiezan con |)
      if (trimmedLine.startsWith('|')) {
        flushParagraph();
        const tableLines: string[] = [trimmedLine];
        i++;
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }
        // Parsear filas, descartando separador (|---|---|)
        const rows = tableLines
          .filter(line => !/^\|[\s\-:|]+\|$/.test(line))
          .map(line => line.split('|').slice(1, -1));
        if (rows.length > 0) {
          blocks.push(this.createTableBlock(rows));
        }
        continue;
      }

      // Texto normal: acumular en párrafo
      currentParagraph += (currentParagraph ? ' ' : '') + trimmedLine;
      i++;
    }

    // Guardar el último párrafo si existe
    flushParagraph();

    // Si no hay bloques, crear al menos uno vacío
    if (blocks.length === 0) {
      blocks.push(this.createParagraphBlock('(Sin contenido)'));
    }

    return blocks;
  }

  /**
   * Limpia contenido Markdown: decodifica entidades HTML residuales y normaliza whitespace.
   * Los archivos fuente son Markdown puro, no HTML, así que la conversión pesada no es necesaria.
   */
  private cleanMarkdown(content: string): string {
    return content
      // Decodificar entidades HTML que puedan aparecer en el markdown
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      .replace(/&hellip;/g, '...')
      .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
      
      // Limpiar espacios y saltos de línea excesivos
      .replace(/[ \t]+$/gm, '')  // Espacios al final de líneas
      .replace(/^\s+$/gm, '')    // Líneas con solo espacios
      .replace(/\n{3,}/g, '\n\n') // Máximo 2 saltos de línea seguidos
      .trim();
  }

  /**
   * Trunca el texto a un máximo de caracteres (Notion tiene límite de 2000 por bloque de texto)
   */
  private truncateText(text: string, maxLength: number = 2000): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  }

  // ============================================
  // MÉTODOS PARA CREAR BLOQUES DE NOTION
  // ============================================

  private createParagraphBlock(text: string): BlockObjectRequest {
    return {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: this.parseInlineMarkdown(text) as any[],
      },
    };
  }

  private createHeading1Block(text: string): BlockObjectRequest {
    return {
      object: 'block',
      type: 'heading_1',
      heading_1: {
        rich_text: this.parseInlineMarkdown(text) as any[],
      },
    };
  }

  private createHeading2Block(text: string): BlockObjectRequest {
    return {
      object: 'block',
      type: 'heading_2',
      heading_2: {
        rich_text: this.parseInlineMarkdown(text) as any[],
      },
    };
  }

  private createHeading3Block(text: string): BlockObjectRequest {
    return {
      object: 'block',
      type: 'heading_3',
      heading_3: {
        rich_text: this.parseInlineMarkdown(text) as any[],
      },
    };
  }

  private createBulletedListBlock(text: string): BlockObjectRequest {
    return {
      object: 'block',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: this.parseInlineMarkdown(text) as any[],
      },
    };
  }

  private createNumberedListBlock(text: string): BlockObjectRequest {
    return {
      object: 'block',
      type: 'numbered_list_item',
      numbered_list_item: {
        rich_text: this.parseInlineMarkdown(text) as any[],
      },
    };
  }

  private createTodoBlock(text: string, checked: boolean = false): BlockObjectRequest {
    return {
      object: 'block',
      type: 'to_do',
      to_do: {
        rich_text: this.parseInlineMarkdown(text) as any[],
        checked,
      },
    };
  }

  private createQuoteBlock(text: string): BlockObjectRequest {
    return {
      object: 'block',
      type: 'quote',
      quote: {
        rich_text: this.parseInlineMarkdown(text) as any[],
      },
    };
  }

  private createCalloutBlock(text: string, emoji: string = '💡'): BlockObjectRequest {
    // Extraer emoji del inicio si existe
    const emojiMatch = text.match(/^([\u{1F300}-\u{1F9FF}])\s*/u);
    if (emojiMatch) {
      emoji = emojiMatch[1];
      text = text.substring(emojiMatch[0].length);
    }

    return {
      object: 'block',
      type: 'callout',
      callout: {
        rich_text: this.parseInlineMarkdown(text) as any[],
        icon: {
          type: 'emoji',
          emoji: emoji as any,
        },
      },
    };
  }

  private createCodeBlock(code: string, language: string = 'plain text'): BlockObjectRequest {
    // Mapear lenguajes comunes a los nombres que Notion acepta
    const languageMap: Record<string, string> = {
      'js': 'javascript',
      'ts': 'typescript',
      'py': 'python',
      'rb': 'ruby',
      'sh': 'bash',
      'shell': 'bash',
      'yml': 'yaml',
      'md': 'markdown',
      '': 'plain text',
    };

    const notionLanguage = languageMap[language.toLowerCase()] || language.toLowerCase();

    return {
      object: 'block',
      type: 'code',
      code: {
        rich_text: [
          {
            type: 'text',
            text: {
              content: this.truncateText(code, 2000),
            },
          },
        ],
        language: notionLanguage as any,
      },
    };
  }

  private createDividerBlock(): BlockObjectRequest {
    return {
      object: 'block',
      type: 'divider',
      divider: {},
    };
  }

  // ============================================
  // HELPERS PARA LISTAS ANIDADAS
  // ============================================

  /** Cuenta los espacios iniciales de una línea para determinar nivel de indentación */
  private getIndentLevel(line: string): number {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
  }

  /**
   * Parsea un bloque de items de lista consecutivos con soporte para anidamiento.
   * Consume todas las líneas de lista a partir de startIndex y devuelve los bloques
   * de nivel superior junto con el índice donde se detuvo.
   */
  private parseNestedListItems(lines: string[], startIndex: number): { blocks: BlockObjectRequest[]; endIndex: number } {
    const baseIndent = this.getIndentLevel(lines[startIndex]);
    return this.parseListAtLevel(lines, startIndex, baseIndent);
  }

  /**
   * Parsea items de lista en un nivel de indentación específico.
   * Los items con mayor indentación se convierten en children del item anterior.
   */
  private parseListAtLevel(lines: string[], startIndex: number, levelIndent: number): { blocks: BlockObjectRequest[]; endIndex: number } {
    const blocks: BlockObjectRequest[] = [];
    let i = startIndex;

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();
      const indent = this.getIndentLevel(line);

      // Línea vacía o menor indentación: salir de este nivel
      if (trimmed === '' || indent < levelIndent) break;

      // Mayor indentación: debería haber sido consumido como children (safety break)
      if (indent > levelIndent) break;

      // Detectar tipo de item de lista
      const isCheckbox = /^[-*]\s\[([ xX])\]\s/.test(trimmed);
      const isBullet = /^[-*]\s/.test(trimmed);
      const isNumbered = /^\d+\.\s/.test(trimmed);

      if (!isCheckbox && !isBullet && !isNumbered) break;

      // Crear el bloque según el tipo
      let block: BlockObjectRequest;
      if (isCheckbox) {
        const checked = /^[-*]\s\[[xX]\]/.test(trimmed);
        const content = trimmed.replace(/^[-*]\s\[[ xX]\]\s/, '');
        block = this.createTodoBlock(content, checked);
      } else if (isBullet) {
        block = this.createBulletedListBlock(trimmed.substring(2));
      } else {
        const content = trimmed.replace(/^\d+\.\s/, '');
        block = this.createNumberedListBlock(content);
      }

      i++;

      // Lookahead: si la siguiente línea tiene mayor indentación y es un item de lista, parsear children
      if (i < lines.length) {
        const nextIndent = this.getIndentLevel(lines[i]);
        const nextTrimmed = lines[i].trim();
        const nextIsList = /^[-*]\s/.test(nextTrimmed) || /^\d+\.\s/.test(nextTrimmed);

        if (nextIndent > levelIndent && nextIsList) {
          const { blocks: children, endIndex } = this.parseListAtLevel(lines, i, nextIndent);
          if (children.length > 0) {
            // Inyectar children en el bloque — usar as any por incompatibilidad del SDK
            const blockType = isCheckbox ? 'to_do' : isBullet ? 'bulleted_list_item' : 'numbered_list_item';
            (block as any)[blockType].children = children;
          }
          i = endIndex;
        }
      }

      blocks.push(block);
    }

    return { blocks, endIndex: i };
  }

  private createTableBlock(rows: string[][]): BlockObjectRequest {
    const tableWidth = rows[0]?.length ?? 1;
    const tableRows = rows.map(row => ({
      type: 'table_row' as const,
      table_row: {
        cells: row.map(cell => this.parseInlineMarkdown(cell.trim()) as any[]),
      },
    }));

    return {
      object: 'block',
      type: 'table',
      table: {
        table_width: tableWidth,
        has_column_header: true,
        has_row_header: false,
        children: tableRows,
      },
    } as any;
  }
}
