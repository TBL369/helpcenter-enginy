import axios, { AxiosInstance, AxiosError } from 'axios';

export interface IntercomArticle {
  id: number;
  title: string;
  body?: string;
  description?: string;
  state?: string; // 'published' | 'draft'
  owner_id?: number;
  author_id?: number;
  locale?: string;
  created_at?: number;
  updated_at?: number;
  parent_id?: number;
  parent_type?: string;
  url?: string;
}

export interface ArticleListItem {
  id: number;
  title: string;
  state?: string;
  locale?: string;
  updated_at?: number;
  source: 'help_center' | 'internal';
}

export interface ArticlesListResponse {
  type: string;
  data: IntercomArticle[];
  pages?: {
    type: string;
    next?: string;
    page: number;
    per_page: number;
    total_pages: number;
  };
  total_count?: number;
}

export interface TranslatedContentEntry {
  title: string;
  body: string;
  author_id: number;
  state: 'published' | 'draft';
}

export interface IntercomConfig {
  accessToken: string;
  baseUrl?: string;
}

export class IntercomClient {
  private client: AxiosInstance;
  private articlesCache: ArticleListItem[] | null = null;
  private cacheTimestamp: number = 0;
  private readonly CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutos de tiempo de vida de la caché

  constructor(config: IntercomConfig) {
    this.client = axios.create({
      baseURL: config.baseUrl || 'https://api.intercom.io',
      headers: {
        'Authorization': `Bearer ${config.accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Intercom-Version': '2.14',
      },
    });
  }

  /**
   * Obtiene un artículo específico por su ID
   * Intenta primero con /articles (público) y si falla con /internal_articles (interno)
   * @param articleId - ID del artículo
   * @returns Artículo con su contenido completo
   */
  async getArticle(articleId: number): Promise<IntercomArticle> {
    // Lista de endpoints a intentar (público primero, luego interno)
    const endpoints = [
      `/articles/${articleId}`,
      `/internal_articles/${articleId}`,
    ];

    let lastError: Error | null = null;

    for (const endpoint of endpoints) {
      try {
        const response = await this.client.get<IntercomArticle>(endpoint);
        console.log(`   ℹ️  Encontrado en ${endpoint.includes('internal') ? 'artículos internos' : 'Help Center'}`);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          // Si es 404, intentar con el siguiente endpoint
          lastError = error;
          continue;
        }
        // Para otros errores, fallar inmediatamente
        if (axios.isAxiosError(error)) {
          this.handleAxiosError(error, `getArticle(${articleId})`);
        }
        throw error;
      }
    }

    // Si ningún endpoint funcionó, mostrar error
    console.error(`❌ Artículo ${articleId} no encontrado en ningún endpoint (público ni interno)`);
    throw lastError || new Error(`Artículo ${articleId} no encontrado`);
  }

  /**
   * Obtiene el contenido de un artículo (título y body)
   * Intenta primero con /articles (público) y si falla con /internal_articles (interno)
   * @param articleId - ID del artículo
   * @returns Título y contenido del artículo
   */
  async getArticleContent(articleId: number): Promise<{ title: string; body: string }> {
    // Lista de endpoints a intentar (público primero, luego interno)
    const endpoints = [
      `/articles/${articleId}`,
      `/internal_articles/${articleId}`,
    ];

    let lastError: Error | null = null;

    for (const endpoint of endpoints) {
      try {
        const response = await this.client.get<IntercomArticle>(endpoint);
        const article = response.data;
        
        const source = endpoint.includes('internal') ? 'interno' : 'Help Center';
        console.log(` (${source})`);
        
        return {
          title: article.title || `Artículo ${articleId}`,
          body: article.body || '',
        };
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          // Si es 404, intentar con el siguiente endpoint
          lastError = error;
          continue;
        }
        // Para otros errores, fallar inmediatamente
        if (axios.isAxiosError(error)) {
          this.handleAxiosError(error, `getArticleContent(${articleId})`);
        }
        throw error;
      }
    }

    // Si ningún endpoint funcionó
    this.handleAxiosError(lastError as AxiosError, `getArticleContent(${articleId})`);
    throw lastError || new Error(`Artículo ${articleId} no encontrado`);
  }

  /**
   * Lista artículos públicos del Help Center
   * @param page - Número de página (opcional, por defecto 1)
   * @param perPage - Artículos por página (opcional, por defecto 50)
   * @returns Lista de artículos con metadata de paginación
   */
  async listPublicArticles(page: number = 1, perPage: number = 50): Promise<{ articles: ArticleListItem[]; hasMore: boolean; totalCount?: number }> {
    try {
      const response = await this.client.get<ArticlesListResponse>('/articles', {
        params: { page, per_page: perPage },
      });

      const articles: ArticleListItem[] = (response.data.data || []).map(article => ({
        id: article.id,
        title: article.title,
        state: article.state,
        locale: article.locale,
        updated_at: article.updated_at,
        source: 'help_center' as const,
      }));

      const hasMore = response.data.pages 
        ? response.data.pages.page < response.data.pages.total_pages 
        : false;

      return {
        articles,
        hasMore,
        totalCount: response.data.total_count,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error, 'listPublicArticles');
      }
      throw error;
    }
  }

  /**
   * Lista artículos internos (requiere permisos específicos)
   * @param page - Número de página (opcional, por defecto 1)
   * @param perPage - Artículos por página (opcional, por defecto 50)
   * @returns Lista de artículos con metadata de paginación
   */
  async listInternalArticles(page: number = 1, perPage: number = 50): Promise<{ articles: ArticleListItem[]; hasMore: boolean; totalCount?: number }> {
    try {
      const response = await this.client.get<ArticlesListResponse>('/internal_articles', {
        params: { page, per_page: perPage },
      });

      const articles: ArticleListItem[] = (response.data.data || []).map(article => ({
        id: article.id,
        title: article.title,
        state: article.state,
        locale: article.locale,
        updated_at: article.updated_at,
        source: 'internal' as const,
      }));

      const hasMore = response.data.pages 
        ? response.data.pages.page < response.data.pages.total_pages 
        : false;

      return {
        articles,
        hasMore,
        totalCount: response.data.total_count,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Si es 403 o 404, puede que no tenga acceso a artículos internos
        if (error.response?.status === 403 || error.response?.status === 404) {
          return { articles: [], hasMore: false };
        }
        this.handleAxiosError(error, 'listInternalArticles');
      }
      throw error;
    }
  }

  /**
   * Busca artículos por título (búsqueda parcial, case-insensitive)
   * Usa la caché de artículos para evitar múltiples llamadas a la API.
   * @param searchTerm - Término de búsqueda
   * @param maxResults - Número máximo de resultados (por defecto 20)
   * @returns Lista de artículos que coinciden con la búsqueda
   */
  async searchArticlesByTitle(searchTerm: string, maxResults: number = 20): Promise<ArticleListItem[]> {
    // Usar caché para evitar múltiples llamadas a la API
    const allArticles = await this.getAllArticlesCached(500);
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    const matches = allArticles.filter(article => 
      article.title.toLowerCase().includes(normalizedSearch)
    );

    // Ordenar por relevancia (coincidencia exacta primero, luego por posición del match)
    matches.sort((a, b) => {
      const aLower = a.title.toLowerCase();
      const bLower = b.title.toLowerCase();
      
      // Coincidencia exacta tiene prioridad
      if (aLower === normalizedSearch) return -1;
      if (bLower === normalizedSearch) return 1;
      
      // Luego por si empieza con el término
      const aStarts = aLower.startsWith(normalizedSearch);
      const bStarts = bLower.startsWith(normalizedSearch);
      if (aStarts && !bStarts) return -1;
      if (bStarts && !aStarts) return 1;
      
      // Finalmente por posición del match
      return aLower.indexOf(normalizedSearch) - bLower.indexOf(normalizedSearch);
    });

    return matches.slice(0, maxResults);
  }

  /**
   * Lista todos los artículos disponibles (públicos e internos)
   * @param maxArticles - Número máximo de artículos a obtener (por defecto 100)
   * @returns Lista combinada de artículos
   */
  async listAllArticles(maxArticles: number = 100): Promise<ArticleListItem[]> {
    const allArticles: ArticleListItem[] = [];
    const perPage = 50;

    // Obtener artículos públicos
    console.log('   📚 Buscando artículos del Help Center...');
    let page = 1;
    let hasMore = true;

    while (hasMore && allArticles.length < maxArticles) {
      try {
        const result = await this.listPublicArticles(page, perPage);
        allArticles.push(...result.articles);
        hasMore = result.hasMore;
        page++;

        if (result.articles.length > 0) {
          console.log(`      ✅ Encontrados ${result.articles.length} artículos públicos (página ${page - 1})`);
        }
      } catch {
        console.log('      ⚠️  No se pudieron obtener artículos públicos');
        break;
      }
    }

    // Obtener artículos internos
    console.log('   📝 Buscando artículos internos...');
    page = 1;
    hasMore = true;

    while (hasMore && allArticles.length < maxArticles) {
      try {
        const result = await this.listInternalArticles(page, perPage);
        if (result.articles.length === 0) {
          console.log('      ℹ️  No hay artículos internos disponibles');
          break;
        }
        allArticles.push(...result.articles);
        hasMore = result.hasMore;
        page++;

        console.log(`      ✅ Encontrados ${result.articles.length} artículos internos (página ${page - 1})`);
      } catch {
        console.log('      ⚠️  No se pudieron obtener artículos internos (puede requerir permisos adicionales)');
        break;
      }
    }

    return allArticles.slice(0, maxArticles);
  }

  /**
   * Obtiene todos los artículos usando caché si está disponible y no ha expirado.
   * Esto evita hacer múltiples llamadas a la API cuando se buscan varios títulos.
   * @param maxArticles - Número máximo de artículos a obtener (por defecto 500)
   * @param forceRefresh - Si es true, ignora la caché y obtiene datos frescos
   * @returns Lista combinada de artículos (desde caché o API)
   */
  async getAllArticlesCached(maxArticles: number = 500, forceRefresh: boolean = false): Promise<ArticleListItem[]> {
    const now = Date.now();
    
    // Usar caché si existe y no ha expirado
    if (!forceRefresh && this.articlesCache && (now - this.cacheTimestamp) < this.CACHE_TTL_MS) {
      console.log('   📦 Usando artículos en caché...');
      return this.articlesCache.slice(0, maxArticles);
    }
    
    // Obtener artículos frescos de la API
    this.articlesCache = await this.listAllArticles(maxArticles);
    this.cacheTimestamp = now;
    
    return this.articlesCache;
  }

  /**
   * Invalida la caché manualmente.
   * Útil si el usuario quiere forzar una actualización de la lista.
   */
  clearCache(): void {
    this.articlesCache = null;
    this.cacheTimestamp = 0;
  }

  /**
   * Verifica si hay artículos en caché
   */
  hasCachedArticles(): boolean {
    return this.articlesCache !== null && this.articlesCache.length > 0;
  }

  /**
   * Obtiene la lista de admins/teammates del workspace.
   * Necesario para obtener el author_id al crear articulos.
   */
  async getAdmins(): Promise<Array<{ id: string; name: string; email: string }>> {
    try {
      const response = await this.client.get('/admins');
      const admins = response.data.admins || response.data.data || [];
      return admins.map((a: any) => ({
        id: String(a.id),
        name: a.name || '',
        email: a.email || '',
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error, 'getAdmins');
      }
      throw error;
    }
  }

  /**
   * Actualiza un articulo existente en Intercom.
   */
  async updateArticle(articleId: number, params: {
    title?: string;
    body?: string;
    state?: 'published' | 'draft';
    translated_content?: Record<string, TranslatedContentEntry>;
  }): Promise<void> {
    try {
      await this.client.put(`/articles/${articleId}`, params);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error, `updateArticle(${articleId})`);
      }
      throw error;
    }
  }

  /**
   * Invalida el cache de articulos para forzar recarga desde la API.
   */
  invalidateCache(): void {
    this.articlesCache = null;
    this.cacheTimestamp = 0;
  }

  /**
   * Crea un nuevo articulo en Intercom (como draft por defecto).
   */
  async createArticle(params: {
    title: string;
    body: string;
    authorId: string;
    description?: string;
    state?: 'published' | 'draft';
    translatedContent?: Record<string, TranslatedContentEntry>;
  }): Promise<{ id: number; url?: string }> {
    try {
      const payload: Record<string, unknown> = {
        title: params.title,
        body: params.body,
        author_id: parseInt(params.authorId),
        description: params.description || '',
        state: params.state || 'draft',
      };

      if (params.translatedContent && Object.keys(params.translatedContent).length > 0) {
        payload.translated_content = params.translatedContent;
      }

      const response = await this.client.post('/articles', payload);
      return {
        id: response.data.id,
        url: response.data.url,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error, `createArticle("${params.title}")`);
      }
      throw error;
    }
  }

  /**
   * Maneja errores de Axios de forma consistente
   */
  private handleAxiosError(error: AxiosError, context: string): void {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
      
      if (status === 401) {
        console.error(`❌ Error de autenticación en ${context}: Token inválido o expirado`);
      } else if (status === 404) {
        console.error(`❌ Error en ${context}: Artículo no encontrado`);
      } else if (status === 429) {
        console.error(`⚠️ Rate limit excedido en ${context}: Esperando antes de reintentar...`);
      } else {
        console.error(`❌ Error en ${context}: ${status} - ${JSON.stringify(data)}`);
      }
    } else if (error.request) {
      console.error(`❌ Error de conexión en ${context}: No se pudo conectar con Intercom`);
    } else {
      console.error(`❌ Error en ${context}: ${error.message}`);
    }
  }
}
