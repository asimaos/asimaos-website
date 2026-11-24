#!/usr/bin/env python3
"""Copies the guides from the OS repository (docs/guides, their one home) into src/content/guides.

The guides' order and one-line descriptions come from docs/guides/README.md. Product names become
%tokens% (filled in from site.config.mjs at build time), links between guides become website links,
and links to the other documents point at the code on GitHub. Run it after the guides change:

    scripts/import-guides.py [path/to/asimaos]
"""
import os
import re
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
OS_REPO = Path(sys.argv[1] if len(sys.argv) > 1 else os.environ.get("OS_REPO", SITE.parent / "asimaos"))
GUIDES = OS_REPO / "docs" / "guides"
OUT = SITE / "src" / "content" / "guides"
CODE = "https://github.com/asimaos/asimaos/blob/main/docs/"

# Longest first, so "Asima Updater" is replaced before anything shorter could match inside it.
NAMES = [
    ("Asima OS Linux", "%oslinux%"),
    ("Asima OS", "%os%"),
    ("Asima Maintenance", "%maintenance%"),
    ("Asima Updater", "%updater%"),
    ("Asima Manager", "%manager%"),
    ("Asima Gaming", "%gaming%"),
    ("Asima Rescue", "%rescue%"),
    ("Asima Hub", "%hub%"),
    ("Asima Dev", "%dev%"),
]


def names(text: str) -> str:
    for name, token in NAMES:
        text = text.replace(name, token)
    return text


def links(text: str) -> str:
    def fix(match: re.Match) -> str:
        target = match.group(1)
        if re.match(r"^[a-z]+://", target) or target.startswith("#"):
            return match.group(0)
        path, _, anchor = target.partition("#")
        anchor = f"#{anchor}" if anchor else ""
        if "/" not in path and path.endswith(".md"):
            return f"](/guides/{path[:-3]}/{anchor})"
        clean = os.path.normpath(os.path.join("guides", path))
        return f"]({CODE}{clean}{anchor})"
    return re.sub(r"\]\(([^)\s]+)\)", fix, text)


def yaml(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def main() -> None:
    index = (GUIDES / "README.md").read_text()
    rows = re.findall(r"^\| \[([^\]]+)\]\(([^)]+\.md)\) \| (.+?) \|$", index, re.M)
    if not rows:
        sys.exit(f"no guides listed in {GUIDES / 'README.md'}")
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob("*.md"):
        old.unlink()
    for order, (_, file, when) in enumerate(rows, start=1):
        body = (GUIDES / file).read_text()
        title, _, rest = body.partition("\n")
        title = title.lstrip("# ").strip()
        rest = links(names(rest.strip())) + "\n"
        front = "\n".join([
            "---",
            f"title: {yaml(names(title))}",
            f"description: {yaml(names(when.rstrip('.')) + '.')}",
            f"order: {order}",
            f"source: {yaml('docs/guides/' + file)}",
            "---",
            "",
            "",
        ])
        (OUT / file).write_text(front + rest)
        print(f"  {file}: {names(title)}")
    print(f"{len(rows)} guides from {GUIDES}")


if __name__ == "__main__":
    main()
