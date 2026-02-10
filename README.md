# Helpcenter

Herramienta de gestión de artículos del help center de Enginy. Dos funciones principales:

1. **Notion Sync** — Sincroniza artículos `.md` a páginas versionadas en Notion.
2. **Changelog Pipeline** — Detecta cambios en el repo del SaaS, clasifica su impacto y actualiza los artículos automáticamente.

---

## Requisitos previos

- Node.js >= 18
- [GitHub CLI (`gh`)](https://cli.github.com/) autenticado (para el changelog pipeline)
- Una integración de Notion con acceso a la página padre (para el sync)

## Instalación

```bash
git clone <repo-url> && cd articles
npm install
cp .env.example .env
# Editar .env con los valores reales
```

## Variables de entorno

| Variable | Requerida por | Descripción |
|---|---|---|
| `NOTION_TOKEN` | Sync | Token de integración de Notion (`secret_xxx`) |
| `NOTION_PARENT_PAGE_ID` | Sync | ID de la página padre en Notion |
| `ARTICLES_PATH` | Ambos | Directorio de artículos (default: `articles`) |
| `SAAS_REPO` | Changelog | Repo del SaaS en formato `owner/name` |
| `OPENAI_API_KEY` | Changelog | API key de OpenAI o proveedor compatible |
| `OPENAI_MODEL` | Changelog | Modelo LLM (default: `gpt-4o-mini`) |
| `OPENAI_BASE_URL` | Changelog | Base URL alternativa para el API LLM (opcional) |

---

## Notion Sync

Sincroniza los artículos Markdown del directorio `articles/` a páginas en Notion, con versionado basado en git.

### Uso

```bash
# Ejecutar sync manualmente
npm run sync

# Compilar y ejecutar desde dist/
npm run build
npm start
```

### Cómo funciona

1. Escanea `articles/` buscando ficheros `.md`.
2. Para cada artículo, consulta el historial de git para detectar si ha cambiado desde el último sync.
3. Si hay cambios, convierte el Markdown a bloques de Notion y crea una nueva página versionada.
4. Registra la versión con un commit: `docs: NombreArtículo vN`.

### Versionado

El sistema usa commits de git como mecanismo de versionado. Cada sync exitoso genera un commit con formato `docs: Display Name vN`. En el siguiente run, compara el estado actual del fichero contra ese commit para decidir si necesita re-sincronizar.

### Cron job (macOS)

El sync se ejecuta automáticamente cada día a las 22:00h via launchd:

```bash
cd infra/
bash setup-cron.sh
```

Comandos útiles:

```bash
# Ver logs
tail -f logs/sync.log

# Desactivar
launchctl unload ~/Library/LaunchAgents/com.helpcenter.sync.plist
```

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

### Proveedores LLM alternativos

El cliente LLM es compatible con cualquier API que siga el formato OpenAI. Para usar otro proveedor:

```bash
# Anthropic (via proxy compatible)
OPENAI_BASE_URL=https://api.anthropic.com/v1
OPENAI_API_KEY=sk-ant-xxx
OPENAI_MODEL=claude-sonnet-4-20250514

# Ollama local
OPENAI_BASE_URL=http://localhost:11434/v1
OPENAI_API_KEY=ollama
OPENAI_MODEL=llama3
```

---

## Estructura del proyecto

```
articles/               Artículos .md del help center (fuente de verdad)
config/
  change-to-article-map.yaml   Mapeo área → artículos
  user-facing-paths.yaml       Heurística de rutas user-facing
infra/
  com.helpcenter.sync.plist    Cron job macOS (launchd)
  setup-cron.sh                Script de instalación del cron
prompts/
  article-merge.md             Prompt para merge de contenido OLD + NEW
  images-to-article.md         Prompt para crear artículos desde screenshots
  prompt-optimizer.md          Prompt optimizer (metodología 4-D)
src/
  index.ts                     Entry point del Notion sync
  notion.ts                    Cliente Notion + conversor Markdown → bloques
  version.ts                   Versionado basado en git
  changelog/
    index.ts                   Orquestador del pipeline
    types.ts                   Interfaces compartidas
    state.ts                   Persistencia del estado
    fetch-prs.ts               Fetch de PRs via gh CLI
    pre-filter.ts              Etapa 1: filtro determinista
    llm.ts                     Cliente LLM (OpenAI-compatible)
    classifier.ts              Etapa 2: clasificación LLM
    mapper.ts                  Etapa 3a: mapeo área → artículo
    brief-generator.ts         Etapa 3b: generación de change briefs
    article-updater.ts         Reescritura de artículos
```

---

## Scripts npm

| Script | Comando | Descripción |
|---|---|---|
| `sync` | `npm run sync` | Sincroniza artículos a Notion |
| `changelog` | `npm run changelog` | Ejecuta el pipeline de changelog |
| `changelog:dry` | `npm run changelog:dry` | Pipeline en modo preview (sin escritura) |
| `build` | `npm run build` | Compila TypeScript a `dist/` |
| `start` | `npm start` | Ejecuta la versión compilada |
