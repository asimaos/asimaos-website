#!/usr/bin/bash
# Copies the app screenshots the website shows, light and dark, into src/assets/screens: the OS's
# apps from the asimaos repository's renders (apps/build.sh screenshots → apps/screenshots), Asima
# Hub's from the asimaos-hub repository's (./build.sh screenshots → screenshots). Astro turns them
# into small AVIF and WebP files at build time. Run it again after the apps are rendered again.
#   scripts/import-screenshots.sh [path/to/asimaos [path/to/asimaos-hub]]
set -euo pipefail
SITE="$(dirname -- "$(readlink -f -- "${BASH_SOURCE[0]}")")/.."
OS_REPO="${1:-${OS_REPO:-${SITE}/../asimaos}}"
HUB_REPO="${2:-${HUB_REPO:-${SITE}/../asimaos-hub}}"
TO="${SITE}/src/assets/screens"

SHOTS=(
    asimaos-updater-versions asimaos-updater-updates-ready
    asimaos-maintenance-overview asimaos-maintenance-security-pin asimaos-maintenance-backups
    asimaos-maintenance-reset asimaos-maintenance-health
    asimaos-manager-home asimaos-manager-biometrics asimaos-manager-power asimaos-manager-shield
    asimaos-gaming-gaming asimaos-gaming-controllers asimaos-gaming-handheld
    asimaos-dev-containers asimaos-dev-machines
    asimaos-appcenter-store asimaos-appcenter-installed
    asimaos-rescue-home asimaos-rescue-unlock
    asimaos-installer-welcome asimaos-installer-disk asimaos-installer-encryption-filled
    asimaos-hub-get asimaos-hub-updates asimaos-hub-news
    asimaos-polkit-agent-dialog-fingerprint
)

mkdir -p "${TO}"
rm -f "${TO}"/*.png
for shot in "${SHOTS[@]}"; do
    if [[ ${shot} == asimaos-hub-* ]]; then
        from="${HUB_REPO}/screenshots" how="asimaos-hub: ./build.sh screenshots"
    else
        from="${OS_REPO}/apps/screenshots" how="asimaos: apps/build.sh screenshots"
    fi
    for theme in light dark; do
        src="${from}/${shot}-${theme}.png"
        [[ -f ${src} ]] || { echo "missing: ${src} (render it: ${how})" >&2; exit 1; }
        cp "${src}" "${TO}/${shot#asimaos-}-${theme}.png"
    done
done
echo "${#SHOTS[@]} screenshots (light and dark) from ${OS_REPO} and ${HUB_REPO}"
