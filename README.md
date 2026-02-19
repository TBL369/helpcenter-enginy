# Helpcenter Pipeline

Herramienta de gestión de artículos del help center de Enginy. Tres funciones principales:

1. **CLI de Intercom** — Importa/exporta artículos entre Intercom, Notion y Markdown de forma interactiva.
2. **Notion Sync** — Sincroniza artículos `.md` a páginas versionadas en Notion.
3. **Changelog Pipeline** — Detecta cambios en el repo del SaaS, clasifica su impacto y actualiza los artículos automáticamente.

---

## Requisitos previos

- Node.js >= 18
- [GitHub CLI (`gh`)](https://cli.github.com/) autenticado (para el changelog pipeline)
- Una integración de Notion con acceso a la página padre (para el sync)
- Token de acceso de Intercom con permisos para artículos (para el CLI)

## Instalación

```bash
git clone <repo-url> && cd helpcenter-pipeline
npm install
cp .env.example .env
# Editar .env con los valores reales
```

## Variables de entorno

### Intercom (CLI)

| Variable | Requerida | Descripción |
|---|---|---|
| `INTERCOM_ACCESS_TOKEN` | Si | Token de acceso de Intercom (Bearer token) |
| `INTERCOM_FOLDER_ID` | No | ID de carpeta de Intercom (se pide interactivamente) |
| `INTERCOM_API_BASE` | No | URL base de la API (default: `https://api.intercom.io`) |

### Notion Sync

| Variable | Requerida | Descripción |
|---|---|---|
| `NOTION_TOKEN` | Si | Token de integración de Notion (`secret_xxx`) |
| `NOTION_PARENT_PAGE_ID` | Si | ID de la página padre en Notion |
| `ARTICLES_PATH` | No | Directorio de artículos (default: `articles`) |

### Changelog Pipeline

| Variable | Requerida | Descripción |
|---|---|---|
| `SAAS_REPO` | Si | Repo del SaaS en formato `owner/name` |
| `LLM_PROVIDER` | No | Proveedor LLM: `openai`, `anthropic`, `ollama` (default: `openai`) |

### Cloudinary (subida de imágenes)

| Variable | Requerida | Descripción |
|---|---|---|
| `CLOUDINARY_CLOUD_NAME` | Si | Nombre del cloud en Cloudinary |
| `CLOUDINARY_API_KEY` | Si | API key de Cloudinary |
| `CLOUDINARY_API_SECRET` | Si | API secret de Cloudinary |

### Variables por proveedor LLM

Solo se leen las variables del proveedor seleccionado en `LLM_PROVIDER`.

| Variable | Proveedor | Descripción |
|---|---|---|
| `OPENAI_API_KEY` | openai | API key de OpenAI |
| `OPENAI_MODEL` | openai | Modelo (default: `gpt-4o-mini`) |
| `OPENAI_BASE_URL` | openai | Base URL alternativa (opcional) |
| `ANTHROPIC_API_KEY` | anthropic | API key de Anthropic |
| `ANTHROPIC_MODEL` | anthropic | Modelo (default: `claude-sonnet-4-20250514`) |
| `OLLAMA_MODEL` | ollama | Modelo (default: `llama3`) |
| `OLLAMA_BASE_URL` | ollama | Base URL (default: `http://localhost:11434/v1`) |

---

## CLI de Intercom

Herramienta interactiva para trabajar con artículos de Intercom. Permite listar, importar al repositorio o a Notion, y subir artículos desde Markdown.

### Uso

```bash
# Modo desarrollo
npm run dev

# Modo producción
npm run build
npm start
```

### Funciones del menú

1. **Listar artículos** — Muestra todos los artículos disponibles en Intercom (públicos e internos).
2. **Importar al repositorio** — Descarga artículos de Intercom como ficheros `.md` en `articles/`, incluyendo imágenes en `images/`.
3. **Importar a Notion** — Exporta artículos seleccionados de Intercom como páginas en Notion dentro de una página contenedora.
4. **Subir a Intercom** — Crea artículos en Intercom a partir de ficheros `.md` existentes en `articles/`. Soporta estados draft/published y selección de autor.
5. **Salir** — Cierra el CLI.

Soporta búsqueda por título, IDs numéricos o URLs de Intercom.

---

## Cloudinary — Subida de imágenes

Utilidad standalone para subir las imágenes locales de `images/` a Cloudinary y reemplazar automáticamente las rutas relativas en los artículos `.md` por URLs de CDN.

### Uso

```bash
npm run cloudinary
```

### Cómo funciona

1. Lee todas las imágenes de `images/` (png, jpg, gif, webp, svg).
2. Las sube a Cloudinary en lotes (concurrencia de 5) bajo la carpeta `helpcenter/`.
3. Recorre los `.md` de `articles/` y reemplaza cada referencia `images/archivo.png` por la URL de Cloudinary correspondiente.
4. Muestra un resumen con imágenes subidas y referencias reemplazadas.

Requiere las variables `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET` en `.env`.

---

## Notion Sync

Sincroniza los artículos Markdown del directorio `articles/` a páginas en Notion, con versionado basado en git.

### Uso

```bash
# Sync de todos los artículos
npm run sync

# Sync selectivo por nombre de archivo (acepta con o sin .md)
npm run sync -- inbox settings
npm run sync -- ai-finder.md
```

### Cómo funciona

1. Escanea `articles/` buscando ficheros `.md` (o filtra por los nombres pasados como argumentos CLI).
2. Para cada artículo, consulta el historial de git para detectar si ha cambiado desde el último sync.
3. Si hay cambios, registra la fecha de sync en la página padre de Notion (`Sync - DD/MM/YYYY`).
4. Convierte el Markdown a bloques de Notion y crea una nueva página versionada.
5. Registra la versión con un commit: `docs: NombreArtículo vN` (solo si el `.md` tiene cambios reales).
6. Agrega un divisor visual en la página padre para separar bloques de sync cronológicamente.

### Formato Markdown soportado

El conversor de Markdown a Notion soporta:

| Elemento | Markdown | Notion |
|---|---|---|
| Headings H1–H3 | `# H1`, `## H2`, `### H3` | heading_1, heading_2, heading_3 |
| Heading H4 | `#### H4` | Párrafo en negrita (Notion no soporta H4) |
| Tablas | `\| col \| col \|` | Bloque table con header |
| Listas anidadas | Indentación con 2 espacios | bulleted_list_item con children |
| Listas numeradas | `1. Item` | numbered_list_item |
| Checkboxes | `- [ ] Item` / `- [x] Item` | to_do |
| Código | `` ``` lang `` | Bloque code |
| Citas | `> texto` | quote / callout |
| Formato inline | `**bold**`, `*italic*`, `` `code` ``, `[link](url)` | rich_text con annotations |
| Divisores | `---` | divider |

Los anchor links (`#section`) se convierten en texto plano (Notion no soporta navegación por anchors).

### Versionado

El sistema usa commits de git como mecanismo de versionado. Cada sync exitoso genera un commit con formato `docs: Display Name vN` (solo si el fichero `.md` tiene cambios reales respecto al último sync). En el siguiente run, compara el estado actual del fichero contra ese commit para decidir si necesita re-sincronizar. Si el artículo no cambió, se sincroniza a Notion pero no se incrementa la versión.

---

## Changelog Pipeline

Detecta cambios relevantes en el repositorio del SaaS, determina cuáles afectan a la documentación y actualiza los artículos automáticamente.

### Uso

```bash
# Preview sin escribir cambios
npm run changelog:dry

# Ejecutar pipeline completo
npm run changelog
```

### Arquitectura: Pipeline de 3 etapas

```
PRs mergeadas del SaaS
        |
        v
 ┌──────────────┐
 │  Etapa 1     │  Pre-filtro determinista
 │  pre-filter  │  Tipo de commit + heurística de rutas
 └──────┬───────┘
        │ Candidatos
        v
 ┌──────────────┐
 │  Etapa 2     │  Clasificación LLM
 │  classifier  │  "Es user-facing? Qué áreas afecta?"
 └──────┬───────┘
        │ User-facing
        v
 ┌──────────────┐
 │  Etapa 3     │  Mapeo + Brief + Reescritura
 │  mapper      │  Tabla YAML → Change brief → Artículo actualizado
 │  brief-gen   │
 │  updater     │
 └──────────────┘
```

### Etapa 1: Pre-filtro determinista

Filtra el ruido sin gastar tokens de LLM. Reglas:

| Tipo de commit | Resultado |
|---|---|
| `feat`, `feat!` | Pasa siempre |
| `fix!` (breaking) | Pasa siempre |
| `fix` | Pasa solo si toca rutas user-facing |
| `refactor`, `chore`, `ci`, `build`, `test`, `style`, `perf`, `docs` | Descartado |

La heurística de rutas se configura en `config/user-facing-paths.yaml`. Un `fix` pasa si alguno de sus ficheros está en `user_facing_paths` y ninguno está exclusivamente en `internal_paths`.

### Etapa 2: Clasificación LLM

Para cada PR candidata, el LLM recibe título, descripción y lista de ficheros. Responde con:

- `is_user_facing`: si el cambio afecta al usuario final.
- `confidence`: nivel de confianza (`high`, `medium`, `low`).
- `summary`: resumen del cambio visible.
- `affected_areas`: áreas del producto afectadas (ej: `campaigns`, `settings`).

### Etapa 3: Mapeo, briefs y reescritura

**3a. Mapeo** — Resuelve qué artículos necesitan actualización:

1. Busca `affected_areas` en la tabla de `config/change-to-article-map.yaml`.
2. Si no hay match, intenta por keywords del summary.
3. Fallback: pide al LLM que escoja de la lista de artículos disponibles.

**3b. Brief** — Genera un "change brief" estructurado a partir del diff de la PR. Describe qué cambió desde la perspectiva del usuario (no detalles de implementación).

**3c. Reescritura** — Envía el artículo actual + el change brief al LLM, que integra los cambios manteniendo la estructura, el tono y la completitud del artículo original.

### Configuración

#### `config/change-to-article-map.yaml`

Mapeo de áreas del producto a ficheros de artículos. Cada área tiene:

- `articles`: ficheros `.md` afectados.
- `keywords`: palabras clave que refuerzan la asociación.

```yaml
campaigns:
  articles: [campaigns.md]
  keywords: [campaign, sequence, step, email, schedule, template]
```

#### `config/user-facing-paths.yaml`

Rutas del repo SaaS que indican cambios visibles al usuario vs rutas internas. Personalizar según la estructura del proyecto.

### Estado e idempotencia

El pipeline persiste su estado en `.last-sync-state` (JSON, ignorado por git). Contiene:

- `lastRunAt`: timestamp del último run.
- `lastPrProcessed`: número de la última PR procesada.
- `processedPrs`: PRs del último run (para evitar reprocesar).

Si el pipeline corre dos veces seguidas, no duplica trabajo.

### Proveedores LLM

El pipeline soporta tres proveedores de forma nativa. Se selecciona con `LLM_PROVIDER`:

**OpenAI** (default):

```bash
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-xxx
OPENAI_MODEL=gpt-4o-mini          # o gpt-4o para máxima calidad
```

**Anthropic**:

```bash
LLM_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-xxx
ANTHROPIC_MODEL=claude-sonnet-4-20250514   # o claude-opus-4-20250514
```

**Ollama** (local, sin API key):

```bash
LLM_PROVIDER=ollama
OLLAMA_MODEL=llama3
OLLAMA_BASE_URL=http://localhost:11434/v1  # default
```

Cada proveedor tiene su propia implementación nativa (SDK de OpenAI, SDK de Anthropic, API compatible OpenAI para Ollama). El resto del pipeline es agnóstico al proveedor.

---

## Pipeline nocturno

Un cron job unificado ejecuta ambos procesos en secuencia cada día a las 22:00h:

```
Changelog pipeline  →  Notion sync
(actualiza .md)        (publica a Notion)
```

Si el changelog falla, el sync se ejecuta igualmente para publicar lo que ya haya (artículos modificados manualmente, etc.).

### Uso

```bash
# Ejecutar el pipeline completo manualmente
npm run nightly
```

### Cron job (macOS)

```bash
cd infra/
bash setup-cron.sh
```

Comandos útiles:

```bash
# Ver logs
tail -f logs/nightly.log

# Desactivar
launchctl unload ~/Library/LaunchAgents/com.helpcenter.sync.plist
```

---

## Estructura del proyecto

```
articles/                       Artículos .md del help center (fuente de verdad)
  {tema}/                       Un subdirectorio por artículo (ej: inbox/, credits/)
    {tema}.md                   Artículo principal
  start-here/                   Guías de onboarding (guide-1-*, guide-2-*, ...)
images/                         Imágenes descargadas de Intercom (referenciadas por los .md)
config/
  change-to-article-map.yaml   Mapeo área → artículos
  user-facing-paths.yaml       Heurística de rutas user-facing
infra/
  com.helpcenter.sync.plist    Cron job macOS (launchd) — ejecuta nightly.ts
  setup-cron.sh                Script de instalación del cron
prompts/
  article-augmented-safe.md    Prompt para integrar contenido suplementario en artículos
  article-merge.md             Prompt para merge de contenido OLD + NEW
  change-brief.md              Prompt para generar change briefs desde diffs de PRs
  images-to-article.md         Prompt para crear artículos desde screenshots
  prompt-optimizer.md          Prompt optimizer (metodología 4-D)
src/
  cli/
    index.ts                   CLI interactivo de Intercom (menú principal)
    intercom.ts                Cliente API de Intercom
    markdown.ts                Exportador HTML → Markdown con descarga de imágenes
    notion.ts                  Cliente Notion (HTML → bloques)
    cloudinary-upload.ts       Subida de imágenes a Cloudinary + reemplazo de rutas
  pipeline/
    nightly.ts                 Pipeline nocturno (changelog + sync en secuencia)
    index.ts                   Notion sync (ejecutable standalone o desde nightly)
    notion.ts                  Cliente Notion + conversor Markdown → bloques
    version.ts                 Versionado basado en git
    changelog/
      index.ts                 Orquestador del pipeline
      types.ts                 Interfaces compartidas
      state.ts                 Persistencia del estado
      fetch-prs.ts             Fetch de PRs via gh CLI
      pre-filter.ts            Etapa 1: filtro determinista
      llm.ts                   Cliente LLM multi-proveedor (OpenAI, Anthropic, Ollama)
      classifier.ts            Etapa 2: clasificación LLM
      mapper.ts                Etapa 3a: mapeo área → artículo
      brief-generator.ts       Etapa 3b: generación de change briefs
      article-updater.ts       Reescritura de artículos
```

---

## Scripts npm

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `npm run dev` | CLI interactivo de Intercom (modo desarrollo) |
| `start` | `npm start` | CLI interactivo de Intercom (compilado) |
| `build` | `npm run build` | Compila TypeScript a `dist/` |
| `nightly` | `npm run nightly` | Pipeline nocturno completo (changelog + sync) |
| `sync` | `npm run sync [-- archivo1 archivo2]` | Sincroniza artículos a Notion (todos o selectivo) |
| `changelog` | `npm run changelog` | Ejecuta el pipeline de changelog (standalone) |
| `changelog:dry` | `npm run changelog:dry` | Pipeline en modo preview (sin escritura) |
| `cloudinary` | `npm run cloudinary` | Sube imágenes a Cloudinary y reemplaza rutas en artículos |
