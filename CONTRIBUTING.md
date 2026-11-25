# Contributing to the website

Thank you for helping. [README.md](README.md) says where everything is and how to build it; in
short, `scripts/run.sh npm ci` and `scripts/run.sh npm run build` in a rootless Podman container.

- **Names and facts** live in `site.config.mjs` only; Markdown writes names as tokens (`%os%`).
- **The guides and the credits have their home elsewhere**: the guides in the
  [asimaos](https://github.com/asimaos/asimaos) repository's `docs/guides`, the credits in each
  repository's `CREDITS.md`. Change them there; `scripts/import-guides.py` and
  `scripts/import-credits.py` bring them here.
- **The rules** are Asima OS's: plain words, British spelling, honest about limits. See its
  [CONTRIBUTING.md](https://github.com/asimaos/asimaos/blob/main/CONTRIBUTING.md).
- This repository is published from the maintainer's private working repository, so a pull request
  isn't merged here directly: its change is applied there, keeping you as its author, and appears
  here with the next publish. Contributions are under the [GPL-3.0-or-later](LICENSE); no sign-off
  line or extra agreement is needed.
- Everyone here follows Asima OS's [code of conduct](https://github.com/asimaos/asimaos/blob/main/CODE_OF_CONDUCT.md).
