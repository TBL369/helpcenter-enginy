import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import * as crypto from 'crypto';
import TurndownService from 'turndown';
import * as turndownPluginGfm from 'turndown-plugin-gfm';
import { parse, HTMLElement, NodeType } from 'node-html-parser';

export interface MarkdownExporterConfig {
  repoPath: string;
}

export interface ExportResult {
  filePath: string;
  imagesDownloaded: number;
}

export class MarkdownExporter {
  private repoPath: string;
  private articlesDir: string;
  private imagesDir: string;
  private turndown: TurndownService;

  constructor(config: MarkdownExporterConfig) {
    this.repoPath = config.repoPath;
    this.articlesDir = path.join(this.repoPath, 'articles');
    this.imagesDir = path.join(this.articlesDir, 'images');
    this.turndown = this.createTurndownService();
  }

  private createTurndownService(): TurndownService {
    const td = new TurndownService({
      headingStyle: 'atx',
      bulletListMarker: '-',
      codeBlockStyle: 'fenced',
      emDelimiter: '*',
      strongDelimiter: '**',
      hr: '---',
    });

    td.use(turndownPluginGfm.gfm);

    // <mark> → resaltado con ==texto==
    td.addRule('mark-highlight', {
      filter: ['mark'],
      replacement(content) {
        return `==${content}==`;
      },
    });

    return td;
  }

  async exportArticle(title: string, htmlBody: string, filename?: string): Promise<ExportResult> {
    fs.mkdirSync(this.articlesDir, { recursive: true });
    fs.mkdirSync(this.imagesDir, { recursive: true });

    const { html: processedHtml, downloadedCount } = await this.downloadImages(htmlBody, title);
    const markdown = this.htmlToMarkdown(title, processedHtml);
    const slug = filename || this.slugify(title);
    const articleDir = path.join(this.articlesDir, slug);
    fs.mkdirSync(articleDir, { recursive: true });
    const filePath = path.join(articleDir, `${slug}.md`);

    fs.writeFileSync(filePath, markdown, 'utf-8');

    return { filePath, imagesDownloaded: downloadedCount };
  }

  private htmlToMarkdown(title: string, html: string): string {
    const cleanHtml = this.stripIntercomToc(html);
    let md = this.turndown.turndown(cleanHtml);
    md = md.replace(/\n{4,}/g, '\n\n\n').trim();

    // Separar descripcion (texto antes del primer heading) del resto
    const firstHeadingMatch = md.match(/^#{1,6}\s+/m);
    let description = '';
    let body = md;

    if (firstHeadingMatch && firstHeadingMatch.index !== undefined && firstHeadingMatch.index > 0) {
      description = md.substring(0, firstHeadingMatch.index).trim();
      // Eliminar --- al final de la descripcion (el <hr> que sigue al parrafo intro en Intercom)
      description = description.replace(/(\s*\n-{3,})+\s*$/, '').trim();
      body = md.substring(firstHeadingMatch.index).trim();
      // Eliminar --- al inicio del body (el <hr> que precedia la TOC en Intercom)
      body = body.replace(/^(-{3,}\s*\n+)+/, '').trim();
    }

    const toc = this.generateToc(body);
    const parts = [`# ${title}`];

    if (description) {
      parts.push('', description);
    }

    if (toc) {
      parts.push('', '---', '', '# Table of Contents', '', toc);
    }

    parts.push('', '---', '', body, '');

    return parts.join('\n');
  }

  private generateToc(markdown: string): string {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const entries: string[] = [];
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*/g, '').replace(/\*/g, '').trim();
      const anchor = this.slugify(text);
      const indent = '  '.repeat(level - 1);
      entries.push(`${indent}- [${text}](#${anchor})`);
    }

    return entries.join('\n');
  }

  /**
   * Descarga imagenes del HTML y reemplaza las URLs por rutas locales relativas.
   */
  private async downloadImages(html: string, articleTitle: string): Promise<{ html: string; downloadedCount: number }> {
    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
    const matches: Array<{ full: string; url: string }> = [];
    let match;

    while ((match = imgRegex.exec(html)) !== null) {
      matches.push({ full: match[0], url: match[1] });
    }

    if (matches.length === 0) return { html, downloadedCount: 0 };

    let processedHtml = html;
    let downloadedCount = 0;
    const slug = this.slugify(articleTitle);

    for (let i = 0; i < matches.length; i++) {
      const { full, url } = matches[i];
      try {
        const ext = this.getImageExtension(url);
        const imgFilename = `${slug}-${i + 1}${ext}`;
        const localPath = path.join(this.imagesDir, imgFilename);

        await this.downloadFile(url, localPath);
        const relativePath = `images/${imgFilename}`;
        processedHtml = processedHtml.replace(full, full.replace(url, relativePath));
        downloadedCount++;
      } catch {
        // Si falla la descarga, mantener la URL original
      }
    }

    return { html: processedHtml, downloadedCount };
  }

  private downloadFile(url: string, destPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https') ? https : http;
      const request = protocol.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            this.downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
            return;
          }
        }

        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        const fileStream = fs.createWriteStream(destPath);
        response.pipe(fileStream);
        fileStream.on('finish', () => { fileStream.close(); resolve(); });
        fileStream.on('error', reject);
      });

      request.on('error', reject);
      request.setTimeout(15000, () => { request.destroy(); reject(new Error('Timeout')); });
    });
  }

  private getImageExtension(url: string): string {
    try {
      const pathname = new URL(url).pathname;
      const ext = path.extname(pathname).toLowerCase().split('?')[0];
      if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp', '.ico'].includes(ext)) {
        return ext;
      }
    } catch { /* ignore */ }
    return '.png';
  }

  /**
   * Detecta y elimina la Table of Contents original de Intercom del HTML.
   * Una TOC es un <ul>/<ol> donde >=80% de los <li> contienen un <a href="#...">.
   */
  /**
   * Detecta y elimina la Table of Contents original de Intercom del HTML.
   * Busca un heading con texto "Table of Contents" y elimina ese heading
   * junto con la lista (<ul>/<ol>) que le sigue.
   */
  private stripIntercomToc(html: string): string {
    const root = parse(html, { blockTextElements: {} });

    const headings = root.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (const heading of headings) {
      if (/table\s+of\s+contents/i.test(heading.textContent || '')) {
        let next = heading.nextElementSibling;
        while (next) {
          const tag = next.tagName?.toLowerCase();
          if (tag === 'ul' || tag === 'ol') {
            next.remove();
            break;
          }
          if (tag !== 'p' && tag !== 'br') break;
          next = next.nextElementSibling;
        }
        heading.remove();
        break;
      }
    }

    return root.toString();
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 80);
  }
}
