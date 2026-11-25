#!/usr/bin/env python3
"""Puts the credits of Asima OS, Asima Hub and this website together for the Credits page.

Each repository's CREDITS.md is the one home of its credits; this copies them into
src/credits/credits.md (don't edit that file): Asima OS's sections first, then Asima Hub's and this
website's as sections of their own, and Asima OS's "Licences and sources" last. Links to files in a
repository become links to it on GitHub. Run it again after a CREDITS.md changes.
    scripts/import-credits.py [path/to/asimaos [path/to/asimaos-hub]]
"""
import os
import re
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
OS_REPO = Path(sys.argv[1] if len(sys.argv) > 1 else os.environ.get("OS_REPO", SITE.parent / "asimaos"))
HUB_REPO = Path(sys.argv[2] if len(sys.argv) > 2 else os.environ.get("HUB_REPO", SITE.parent / "asimaos-hub"))
OUT = SITE / "src" / "credits" / "credits.md"
GITHUB = "https://github.com/asimaos"
LAST = "## Licences and sources"


def body(path: Path, repo: str) -> str:
    """The file without its "# Credits" title, with its relative links made absolute."""
    text = path.read_text()
    if not text.startswith("# "):
        sys.exit(f"{path}: expected a '# ' title on the first line")
    text = text.partition("\n")[2].strip()

    def fix(match: re.Match) -> str:
        target = match.group(1)
        if re.match(r"^[a-z]+:", target) or target.startswith(("#", "/")):
            return match.group(0)
        return f"]({GITHUB}/{repo}/blob/main/{target})"

    # On the website, Asima OS's credits are this same page.
    text = text.replace(f"]({GITHUB}/asimaos/blob/main/CREDITS.md)", "](/credits/)")
    return re.sub(r"\]\(([^)\s]+)\)", fix, text)


def section(title: str, text: str) -> str:
    """A repository's credits as one section: its own headings one level down."""
    return f"## {title}\n\n" + re.sub(r"^(#+) ", r"#\1 ", text, flags=re.M)


def main() -> None:
    os_text = body(OS_REPO / "CREDITS.md", "asimaos")
    if LAST not in os_text:
        sys.exit(f"{OS_REPO / 'CREDITS.md'}: no '{LAST}' section")
    main_part, _, last = os_text.partition(LAST)
    parts = [
        main_part.strip(),
        section("Asima Hub", body(HUB_REPO / "CREDITS.md", "asimaos-hub")),
        section("This website", body(SITE / "CREDITS.md", "asimaos-website")),
        LAST + last.rstrip(),
    ]
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        "<!-- Made by scripts/import-credits.py from the repositories' CREDITS.md; don't edit it here. -->\n\n"
        + "\n\n".join(parts) + "\n"
    )
    print(f"credits from {OS_REPO}, {HUB_REPO} and {SITE} → {OUT.relative_to(SITE)}")


if __name__ == "__main__":
    main()
