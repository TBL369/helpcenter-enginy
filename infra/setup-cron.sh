#!/bin/bash
# ──────────────────────────────────────────────────────────
# Instala el cron job de helpcenter sync como launchd agent (macOS)
# Ejecutar una vez desde infra/: bash setup-cron.sh
# ──────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
PLIST_NAME="com.helpcenter.sync.plist"
PLIST_SRC="${SCRIPT_DIR}/${PLIST_NAME}"
PLIST_DEST="$HOME/Library/LaunchAgents/${PLIST_NAME}"

echo "[helpcenter] Instalando cron job..."

# 1. Verificar que el plist existe
if [ ! -f "$PLIST_SRC" ]; then
  echo "Error: No se encontró ${PLIST_SRC}"
  exit 1
fi

# 2. Verificar que .env existe en la raíz del repo
if [ ! -f "${REPO_ROOT}/.env" ]; then
  echo "Error: Crea el archivo .env primero (copia de .env.example)"
  exit 1
fi

# 3. Descargar el agent si ya estaba cargado
if launchctl list | grep -q "com.helpcenter.sync"; then
  echo "  Descargando agent previo..."
  launchctl unload "$PLIST_DEST" 2>/dev/null
fi

# 4. Copiar plist a LaunchAgents
cp "$PLIST_SRC" "$PLIST_DEST"
echo "  Copiado a ${PLIST_DEST}"

# 5. Crear directorio de logs
mkdir -p "${REPO_ROOT}/logs"

# 6. Cargar el agent
launchctl load "$PLIST_DEST"
echo "  Agent cargado."

echo ""
echo "[helpcenter] Listo. El sync se ejecutará todos los días a las 22:00h."
echo "  Para ejecutar manualmente: npm run sync"
echo "  Para ver logs: tail -f logs/sync.log"
echo "  Para desactivar: launchctl unload ${PLIST_DEST}"
