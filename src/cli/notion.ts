import { Client } from '@notionhq/client';
import { BlockObjectRequest } from '@notionhq/client/build/src/api-endpoints';
import { parse, HTMLElement, TextNode, Node, NodeType } from 'node-html-parser';

export interface NotionConfig {
  token: string;
  parentPageId: string;
}

export interface CreatePageResult {
  id: string;
  url: string;
}

interface RichTextAnnotations {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  color?: string;
}

interface RichTextItem {
  type: 'text';
  text: {
    content: string;
    link?: { url: string } | null;
  };
  annotations?: RichTextAnnotations;
}

const BLOCK_TAGS = new Set([
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol',
  'blockquote', 'pre',
  'table',
  'hr',
  'div', 'section', 'article', 'main', 'header', 'footer', 'aside', 'nav',
  'figure', 'figcaption',
  'img',
]);

const LANGUAGE_MAP: Record<string, string> = {
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

export class NotionClient {
  private client: Client;
  private parentPageId: string;

  constructor(config: NotionConfig) {
    this.client = new Client({ auth: config.token });
    this.parentPageId = config.parentPageId;
  }

  async createPage(title: string, htmlContent: string, parentPageId?: string): Promise<CreatePageResult> {
    try {
      const blocks = this.convertContentToBlocks(htmlContent);

      const BATCH_SIZE = 100;
      const firstBatch = blocks.slice(0, BATCH_SIZE);
      const remainingBatches: BlockObjectRequest[][] = [];

      for (let i = BATCH_SIZE; i < blocks.length; i += BATCH_SIZE) {
        remainingBatches.push(blocks.slice(i, i + BATCH_SIZE));
      }

      const response = await this.client.pages.create({
        parent: { page_id: parentPageId || this.parentPageId },
        properties: {
          title: { title: [{ text: { content: title } }] },
        },
        children: firstBatch,
      });

      for (const batch of remainingBatches) {
        await this.client.blocks.children.append({
          block_id: response.id,
          children: batch,
        });
      }

      const pageUrl = 'url' in response
        ? (response as { url: string }).url
        : `https://notion.so/${response.id.replace(/-/g, '')}`;

      return { id: response.id, url: pageUrl };
    } catch (error) {
      console.error(`❌ Error al crear página "${title}" en Notion:`, error);
      throw error;
    }
  }

  async createFolderPage(folderName: string, parentPageId?: string): Promise<CreatePageResult> {
    try {
      const response = await this.client.pages.create({
        parent: { page_id: parentPageId || this.parentPageId },
        properties: {
          title: { title: [{ text: { content: folderName } }] },
        },
      });

      const pageUrl = 'url' in response
        ? (response as { url: string }).url
        : `https://notion.so/${response.id.replace(/-/g, '')}`;

      return { id: response.id, url: pageUrl };
    } catch (error) {
      console.error(`❌ Error al crear página de carpeta "${folderName}" en Notion:`, error);
      throw error;
    }
  }

  // ============================================
  // HTML → NOTION BLOCKS CONVERSION
  // ============================================

  private convertContentToBlocks(content: string): BlockObjectRequest[] {
    return this.htmlToNotionBlocks(content);
  }

  private htmlToNotionBlocks(html: string): BlockObjectRequest[] {
    const root = parse(html, { blockTextElements: {} });
    const blocks = this.processNodes(root.childNodes);

    if (blocks.length === 0) {
      blocks.push({
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '(Sin contenido)' } }] },
      } as any);
    }

    return blocks;
  }

  /**
   * Recorre nodos hijos, acumulando nodos inline como párrafos
   * y delegando nodos de bloque a processNode.
   */
  private processNodes(nodes: Node[]): BlockObjectRequest[] {
    const blocks: BlockObjectRequest[] = [];
    let pendingInline: Node[] = [];

    const flushInline = () => {
      if (pendingInline.length === 0) return;
      const richText = this.extractRichText(pendingInline);
      if (richText.length > 0 && richText.some(rt => rt.text.content.trim())) {
        blocks.push({
          object: 'block',
          type: 'paragraph',
          paragraph: { rich_text: richText as any[] },
        } as any);
      }
      pendingInline = [];
    };

    for (const node of nodes) {
      if (this.isBlockElement(node)) {
        flushInline();
        blocks.push(...this.processNode(node as HTMLElement));
      } else {
        pendingInline.push(node);
      }
    }

    flushInline();
    return blocks;
  }

  private isBlockElement(node: Node): boolean {
    if (node.nodeType !== NodeType.ELEMENT_NODE) return false;
    const tag = (node as HTMLElement).tagName?.toLowerCase();
    return BLOCK_TAGS.has(tag);
  }

  /**
   * Convierte un elemento HTML de bloque en uno o más bloques Notion.
   */
  private processNode(element: HTMLElement): BlockObjectRequest[] {
    const tag = element.tagName?.toLowerCase();

    switch (tag) {
      case 'h1': return this.makeHeadingBlock('heading_1', element);
      case 'h2': return this.makeHeadingBlock('heading_2', element);
      case 'h3': return this.makeHeadingBlock('heading_3', element);
      case 'h4': return this.makeHeadingBlock('heading_3', element, '#### ');
      case 'h5': return this.makeHeadingBlock('heading_3', element, '##### ');
      case 'h6': return this.makeHeadingBlock('heading_3', element, '###### ');

      case 'p':
        return this.processParagraph(element);

      case 'ul':
      case 'ol':
        if (this.isTocList(element)) {
          return [{
            object: 'block',
            type: 'table_of_contents',
            table_of_contents: { color: 'default' },
          } as any];
        }
        return this.processListItems(element, tag === 'ol');

      case 'blockquote':
        return this.processBlockquote(element);

      case 'pre':
        return [this.processCodeBlock(element)];

      case 'img':
        return this.processImage(element);

      case 'table':
        return [this.processTable(element)];

      case 'hr':
        return [{ object: 'block', type: 'divider', divider: {} } as any];

      case 'figure': {
        const img = element.querySelector('img');
        if (img) return this.processImage(img);
        return this.processNodes(element.childNodes);
      }

      case 'figcaption': {
        const richText = this.extractRichText(element.childNodes);
        if (richText.length === 0 || !richText.some(rt => rt.text.content.trim())) return [];
        return [{ object: 'block', type: 'paragraph', paragraph: { rich_text: richText as any[] } } as any];
      }

      default:
        return this.processNodes(element.childNodes);
    }
  }

  // ============================================
  // BLOCK-LEVEL PROCESSORS
  // ============================================

  private makeHeadingBlock(
    level: 'heading_1' | 'heading_2' | 'heading_3',
    element: HTMLElement,
    prefix?: string,
  ): BlockObjectRequest[] {
    const richText = this.extractRichText(element.childNodes);
    if (richText.length === 0) return [];

    if (prefix) {
      richText.unshift({ type: 'text', text: { content: prefix } });
    }

    return [{
      object: 'block',
      type: level,
      [level]: { rich_text: richText as any[] },
    } as any];
  }

  private processParagraph(element: HTMLElement): BlockObjectRequest[] {
    // Si el párrafo solo contiene una imagen, promoverla a bloque image
    const meaningful = element.childNodes.filter(n =>
      n.nodeType !== NodeType.TEXT_NODE || n.rawText.trim() !== '',
    );

    if (meaningful.length === 1 && meaningful[0].nodeType === NodeType.ELEMENT_NODE) {
      const child = meaningful[0] as HTMLElement;
      const childTag = child.tagName?.toLowerCase();

      if (childTag === 'img') {
        return this.processImage(child);
      }
      // <p><a><img/></a></p>
      if (childTag === 'a') {
        const img = child.querySelector('img');
        if (img && child.childNodes.filter(n =>
          n.nodeType !== NodeType.TEXT_NODE || n.rawText.trim() !== '',
        ).length === 1) {
          return this.processImage(img);
        }
      }
    }

    const richText = this.extractRichText(element.childNodes);

    if (richText.length === 0 || !richText.some(rt => rt.text.content.trim())) {
      return [{
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [] },
      } as any];
    }

    return [{
      object: 'block',
      type: 'paragraph',
      paragraph: { rich_text: richText as any[] },
    } as any];
  }

  private processImage(imgElement: HTMLElement): BlockObjectRequest[] {
    const src = imgElement.getAttribute('src');
    if (!src) return [];
    return [{
      object: 'block',
      type: 'image',
      image: { type: 'external', external: { url: src } },
    } as any];
  }

  private processListItems(listElement: HTMLElement, ordered: boolean, depth: number = 0): BlockObjectRequest[] {
    const blocks: BlockObjectRequest[] = [];

    for (const child of listElement.childNodes) {
      if (child.nodeType !== NodeType.ELEMENT_NODE) continue;
      const el = child as HTMLElement;
      if (el.tagName?.toLowerCase() !== 'li') continue;

      const inlineNodes: Node[] = [];
      const nestedLists: HTMLElement[] = [];

      for (const liChild of el.childNodes) {
        if (liChild.nodeType === NodeType.ELEMENT_NODE) {
          const childTag = (liChild as HTMLElement).tagName?.toLowerCase();
          if (childTag === 'ul' || childTag === 'ol') {
            nestedLists.push(liChild as HTMLElement);
          } else {
            inlineNodes.push(liChild);
          }
        } else {
          inlineNodes.push(liChild);
        }
      }

      const richText = this.extractRichText(inlineNodes);
      if (richText.length === 0) {
        richText.push({ type: 'text', text: { content: '' } });
      }

      // Notion soporta max 2 niveles de children (3 niveles visibles).
      // Nivel 4+ se aplana al nivel 3 con prefijo (h4) para identificarlos.
      if (depth >= 3) {
        richText.unshift({ type: 'text', text: { content: '(h4) ' } });
      }

      const blockType = ordered ? 'numbered_list_item' : 'bulleted_list_item';
      const block: any = {
        object: 'block',
        type: blockType,
        [blockType]: { rich_text: richText },
      };

      if (nestedLists.length > 0 && depth < 2) {
        const children: BlockObjectRequest[] = [];
        for (const nested of nestedLists) {
          children.push(...this.processListItems(nested, nested.tagName?.toLowerCase() === 'ol', depth + 1));
        }
        if (children.length > 0) {
          block[blockType].children = children;
        }
      } else if (nestedLists.length > 0) {
        blocks.push(block);
        for (const nested of nestedLists) {
          blocks.push(...this.processListItems(nested, nested.tagName?.toLowerCase() === 'ol', depth + 1));
        }
        continue;
      }

      blocks.push(block);
    }

    return blocks;
  }

  private processBlockquote(element: HTMLElement): BlockObjectRequest[] {
    const allRichText: RichTextItem[] = [];
    let hasContent = false;

    const appendFromNode = (node: Node) => {
      if (node.nodeType === NodeType.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const tag = el.tagName?.toLowerCase();
        if (tag === 'p' || tag === 'div') {
          if (hasContent) allRichText.push({ type: 'text', text: { content: '\n' } });
          allRichText.push(...this.extractRichText(el.childNodes));
          hasContent = true;
        } else {
          if (hasContent) allRichText.push({ type: 'text', text: { content: '\n' } });
          allRichText.push(...this.extractRichText([node]));
          hasContent = true;
        }
      } else if (node.nodeType === NodeType.TEXT_NODE) {
        const text = node.rawText;
        if (text.trim()) {
          if (hasContent) allRichText.push({ type: 'text', text: { content: '\n' } });
          allRichText.push({ type: 'text', text: { content: this.decodeEntities(text) } });
          hasContent = true;
        }
      }
    };

    for (const child of element.childNodes) {
      appendFromNode(child);
    }

    if (allRichText.length === 0) return [];

    return [{
      object: 'block',
      type: 'quote',
      quote: { rich_text: allRichText as any[] },
    } as any];
  }

  private processCodeBlock(preElement: HTMLElement): BlockObjectRequest {
    const codeElement = preElement.querySelector('code');
    let code: string;
    let language = 'plain text';

    if (codeElement) {
      code = this.decodeEntities(codeElement.textContent || '');
      const classAttr = codeElement.getAttribute('class') || '';
      const langMatch = classAttr.match(/language-(\w+)/);
      if (langMatch) language = langMatch[1];
    } else {
      code = this.decodeEntities(preElement.textContent || '');
    }

    const notionLang = LANGUAGE_MAP[language.toLowerCase()] || language.toLowerCase();

    return {
      object: 'block',
      type: 'code',
      code: {
        rich_text: [{ type: 'text', text: { content: this.truncateText(code, 2000) } }],
        language: notionLang as any,
      },
    } as any;
  }

  private processTable(tableElement: HTMLElement): BlockObjectRequest {
    const thead = tableElement.querySelector('thead');
    const allTrs = tableElement.querySelectorAll('tr');

    if (allTrs.length === 0) {
      return {
        object: 'block',
        type: 'table',
        table: {
          table_width: 1,
          has_column_header: false,
          has_row_header: false,
          children: [{
            object: 'block',
            type: 'table_row',
            table_row: { cells: [[{ type: 'text', text: { content: '' } }]] },
          }],
        },
      } as any;
    }

    const firstRowCells = allTrs[0].querySelectorAll('td, th');
    const tableWidth = Math.max(firstRowCells.length, 1);

    const tableRows = allTrs.map(tr => {
      const cells = tr.querySelectorAll('td, th');
      const cellsRichText: any[][] = [];

      for (const cell of cells) {
        const rt = this.extractRichText(cell.childNodes);
        cellsRichText.push(rt.length > 0 ? rt : [{ type: 'text', text: { content: '' } }]);
      }

      while (cellsRichText.length < tableWidth) {
        cellsRichText.push([{ type: 'text', text: { content: '' } }]);
      }

      return {
        object: 'block',
        type: 'table_row',
        table_row: { cells: cellsRichText },
      };
    });

    return {
      object: 'block',
      type: 'table',
      table: {
        table_width: tableWidth,
        has_column_header: !!thead,
        has_row_header: false,
        children: tableRows,
      },
    } as any;
  }

  // ============================================
  // INLINE RICH TEXT EXTRACTION
  // ============================================

  /**
   * Recorre nodos HTML inline recursivamente y genera un array de RichTextItem
   * con annotations acumuladas (bold, italic, etc.) propagadas desde nodos padre.
   */
  private extractRichText(nodes: Node[], parentAnnotations: RichTextAnnotations = {}): RichTextItem[] {
    const items: RichTextItem[] = [];

    for (const node of nodes) {
      if (node.nodeType === NodeType.TEXT_NODE) {
        const raw = (node as TextNode).rawText;
        const text = this.decodeEntities(raw);
        if (!text) continue;

        const item: RichTextItem = {
          type: 'text',
          text: { content: this.truncateText(text) },
        };
        if (Object.keys(parentAnnotations).length > 0) {
          item.annotations = { ...parentAnnotations };
        }
        items.push(item);
        continue;
      }

      if (node.nodeType !== NodeType.ELEMENT_NODE) continue;

      const el = node as HTMLElement;
      const tag = el.tagName?.toLowerCase();
      const annotations: RichTextAnnotations = { ...parentAnnotations };
      let link: string | undefined;

      switch (tag) {
        case 'strong': case 'b':
          annotations.bold = true; break;
        case 'em': case 'i':
          annotations.italic = true; break;
        case 'u':
          annotations.underline = true; break;
        case 'del': case 's': case 'strike':
          annotations.strikethrough = true; break;
        case 'code':
          annotations.code = true; break;
        case 'mark':
          annotations.color = 'yellow_background'; break;
        case 'a':
          link = this.sanitizeUrl(el.getAttribute('href')); break;
        case 'br':
          items.push({ type: 'text', text: { content: '\n' } });
          continue;
        case 'img': {
          const alt = el.getAttribute('alt');
          if (alt) items.push({ type: 'text', text: { content: alt } });
          continue;
        }
      }

      const childItems = this.extractRichText(el.childNodes, annotations);

      if (link) {
        for (const ci of childItems) {
          ci.text.link = { url: link };
        }
      }

      items.push(...childItems);
    }

    return items;
  }

  // ============================================
  // UTILIDADES
  // ============================================

  private truncateText(text: string, maxLength: number = 2000): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  }

  /**
   * Detecta si una lista es una Table of Contents (items son anchor links #...).
   */
  private isTocList(listElement: HTMLElement): boolean {
    const items = listElement.querySelectorAll('li');
    if (items.length < 2) return false;

    let anchorCount = 0;
    for (const li of items) {
      const links = li.querySelectorAll('a');
      const directLink = links.find(a => {
        const href = a.getAttribute('href') || '';
        return href.startsWith('#') && href.length > 1;
      });
      if (directLink) anchorCount++;
    }

    return anchorCount / items.length >= 0.8;
  }

  private sanitizeUrl(href: string | undefined | null): string | undefined {
    if (!href) return undefined;
    const trimmed = href.trim();
    if (!trimmed || trimmed === '#') return undefined;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    if (trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) return trimmed;
    if (trimmed.startsWith('//')) return 'https:' + trimmed;
    if (trimmed.startsWith('/')) return 'https://app.intercom.com' + trimmed;
    return undefined;
  }

  private decodeEntities(text: string): string {
    return text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      .replace(/&hellip;/g, '...')
      .replace(/&copy;/g, '©')
      .replace(/&reg;/g, '®')
      .replace(/&trade;/g, '™')
      .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)));
  }
}
