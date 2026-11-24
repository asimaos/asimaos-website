#!/usr/bin/bash
# Runs npm (or any command) for the website in a rootless Node container; nothing is installed on
# this PC. Usage: scripts/run.sh npm run build | scripts/run.sh npm run dev (port 4321).
set -euo pipefail
cd "$(dirname -- "$(readlink -f -- "${BASH_SOURCE[0]}")")/.."
IMAGE=docker.io/library/node:24-bookworm-slim
exec podman run --rm -it=false -e npm_config_cache=/site/.npm-cache -e ASTRO_TELEMETRY_DISABLED=1 \
    -p 127.0.0.1:4321:4321 -v "${PWD}:/site:Z" -w /site "${IMAGE}" "$@"
