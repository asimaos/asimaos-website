#!/usr/bin/bash
# Copies the app screenshots the website shows, light and dark, from the OS repository's renders
# (apps/build.sh screenshots → apps/screenshots) into src/assets/screens. Astro turns them into small
# AVIF and WebP files at build time. Run it again after the apps are rendered again (the rename).
#   scripts/import-screenshots.sh [path/to/asimaos]
set -euo pipefail
SITE="$(dirname -- "$(readlink -f -- "${BASH_SOURCE[0]}")")/.."
OS_REPO="${1:-${OS_REPO:-${SITE}/../asimaos}}"
FROM="${OS_REPO}/apps/screenshots"
TO="${SITE}/src/assets/screens"

SHOTS=(
    asimaos-updater-versions asimaos-updater-updates-ready
    asimaos-maintenance-overview asimaos-maintenance-security-pin asimaos-maintenance-backups
    asimaos-maintenance-reset asimaos-maintenance-health
    asimaos-manager-home asimaos-manager-biometrics asimaos-manager-power asimaos-manager-shield
    asimaos-gaming-gaming asimaos-gaming-controllers asimaos-gaming-handheld
    asimaos-dev-containers asimaos-dev-machines asimaos-dev-android asimaos-dev-nix
    asimaos-rescue-home asimaos-rescue-unlock
    asimaos-installer-welcome asimaos-installer-disk asimaos-installer-encryption-filled
    asimaos-hub-get asimaos-hub-updates asimaos-hub-news
    asimaos-polkit-agent-dialog-fingerprint
)

mkdir -p "${TO}"
rm -f "${TO}"/*.png
for shot in "${SHOTS[@]}"; do
    for theme in light dark; do
        src="${FROM}/${shot}-${theme}.png"
        [[ -f ${src} ]] || { echo "missing: ${src} (render it: apps/build.sh screenshots)" >&2; exit 1; }
        cp "${src}" "${TO}/${shot#asimaos-}-${theme}.png"
    done
done
echo "${#SHOTS[@]} screenshots (light and dark) from ${FROM}"
