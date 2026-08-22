#!/usr/bin/env python3
"""Export content/articles/*.html to docs/export/articles/*.md (one file per article)."""

from __future__ import annotations

import html as html_module
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "content" / "articles"
OUT_DIR = ROOT / "docs" / "export" / "articles"

METADATA = {
    "construction": {
        "title": "工事写真の整理が終わらない理由と、その直し方。",
        "industry": "建設",
        "jam_label": "写真が終わらない",
        "reading_minutes": 10,
    },
    "manufacturing": {
        "title": "ベテランの手順を、聞き取って書き残す方法。",
        "industry": "製造",
        "jam_label": "手順が残らない",
        "reading_minutes": 9,
    },
    "care": {
        "title": "記録がずれる理由と、その残し方。",
        "industry": "医療・介護",
        "jam_label": "記録がずれる",
        "reading_minutes": 9,
    },
    "childcare": {
        "title": "保育の記録がずれる理由と、残し方。",
        "industry": "保育",
        "jam_label": "何かあった日の記録",
        "reading_minutes": 8,
    },
    "retail": {
        "title": "問い合わせが減らない理由と、その直し方。",
        "industry": "小売",
        "jam_label": "問い合わせが減らない",
        "reading_minutes": 9,
    },
    "restaurant": {
        "title": "シフトでもめる理由と、先に決めること。",
        "industry": "飲食",
        "jam_label": "シフトでもめる",
        "reading_minutes": 8,
    },
    "building": {
        "title": "法定点検が漏れる理由と、台帳の作り方。",
        "industry": "ビルメンテナンス",
        "jam_label": "点検が漏れる",
        "reading_minutes": 9,
    },
    "logistics": {
        "title": "日報を残し、途中で見て、配車を変える。",
        "industry": "運送・物流",
        "jam_label": "守れているか分からない",
        "reading_minutes": 9,
    },
    "warehouse": {
        "title": "数が合わないとき、範囲を絞り、原因を書く。",
        "industry": "倉庫",
        "jam_label": "数が合わない",
        "reading_minutes": 9,
    },
}

SKIP_TAGS = frozenset({"style", "script", "svg", "head", "meta", "link", "noscript"})

# 子 div ごとに1行として拾う親コンテナ
CONTAINER_CLASSES = frozenset(
    {
        "docs",
        "effect",
        "layer",
        "map",
        "cause",
        "origin",
        "cond",
        "purpose",
        "split",
        "pairs",
    }
)

# 単体でブロックとして拾う div
BLOCK_DIV_CLASSES = frozenset(
    {
        "note",
        "honest",
        "say",
        "row",
        "lrow",
        "wrow",
        "case__v",
        "slip__b",
        "n__t",
        "n__d",
        "n__go",
        "demo-first-step",
        "fine",
        "band__fine",
        "hero__cap",
        "shotlist__cap",
        "sheet__cap",
        "inbox__cap",
        "phase__n",
        "sec__no",
        "label",
        "kicker",
        "demo__k",
        "eyebrow",
        "shotlist__hd",
        "inbox__hd",
        "sheet__hd",
        "ledger__hd",
        "when__hd",
        "slip__hd",
    }
)

HEADER_DIV_CLASSES = frozenset({"title", "tagcode", "stamp", "docline", "cover", "num"})


def normalize_text(text: str) -> str:
    text = html_module.unescape(text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def strip_html(raw: str) -> str:
    raw = re.sub(r"<!--.*?-->", "", raw, flags=re.DOTALL)
    raw = re.sub(r"<style[^>]*>.*?</style>", "", raw, flags=re.DOTALL | re.IGNORECASE)
    raw = re.sub(r"<script[^>]*>.*?</script>", "", raw, flags=re.DOTALL | re.IGNORECASE)
    raw = re.sub(r"<svg[^>]*>.*?</svg>", "", raw, flags=re.DOTALL | re.IGNORECASE)
    return raw


class MarkdownExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.lines: list[str] = []
        self.skip_depth = 0

        self.in_table = False
        self.table_rows: list[list[str]] = []
        self.current_row: list[str] = []
        self.in_cell = False
        self.cell_parts: list[str] = []

        self.in_block = False
        self.block_tag = ""
        self.block_buffer: list[str] = []

        self.in_link = False
        self.link_href = ""
        self.link_parts: list[str] = []

        self.in_figure_title = False

        self.list_stack: list[str] = []
        self.ol_counters: list[int] = []

        self.container_stack: list[str] = []
        self.div_stack: list[str] = []  # block kind: quote|list|line|header
        self.div_buffers: list[list[str]] = []

    def _append_text(self, text: str) -> None:
        if self.in_cell:
            self.cell_parts.append(text)
        elif self.in_link:
            self.link_parts.append(text)
        elif self.in_block:
            self.block_buffer.append(text)
        elif self.div_stack:
            self.div_buffers[-1].append(text)

    def _flush_block(self) -> None:
        if not self.block_buffer:
            return
        text = normalize_text("".join(self.block_buffer))
        self.block_buffer.clear()
        if not text:
            return

        if self.in_figure_title:
            self.lines.append(f"**{text}**")
            self.lines.append("")
            self.in_figure_title = False
            return

        tag = self.block_tag
        if tag == "h1":
            self.lines.append(f"# {text}")
        elif tag == "h2":
            self.lines.append(f"## {text}")
        elif tag == "h3":
            self.lines.append(f"### {text}")
        elif tag == "h4":
            self.lines.append(f"#### {text}")
        elif tag == "li":
            if self.list_stack and self.list_stack[-1] == "ol":
                idx = self.ol_counters[-1]
                self.ol_counters[-1] += 1
                self.lines.append(f"{idx}. {text}")
            else:
                self.lines.append(f"- {text}")
        elif tag == "figcaption":
            self.lines.append(f"*{text}*")
        elif tag == "time":
            self.lines.append(text)
        else:
            self.lines.append(text)
        self.lines.append("")

    def _flush_div(self, kind: str) -> None:
        if not self.div_buffers:
            return
        text = normalize_text("".join(self.div_buffers[-1]))
        self.div_buffers.pop()
        if not text:
            return

        if kind == "quote":
            for line in text.split("\n"):
                if line.strip():
                    self.lines.append(f"> {line.strip()}")
            self.lines.append("")
        elif kind == "list":
            self.lines.append(f"- {text}")
        elif kind == "header":
            self.lines.append(f"**{text}**")
            self.lines.append("")
        elif kind == "line":
            self.lines.append(text)
            self.lines.append("")
        elif kind == "title":
            self.lines.append(f"**{text}**")
        elif kind == "link-title":
            self.lines.append(f"**{text}**")
        elif kind == "link-part":
            if self.in_link:
                self.link_parts.append(text)
            else:
                self.lines.append(text)
                self.lines.append("")

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        attr = {k: (v or "") for k, v in attrs}
        classes = set((attr.get("class") or "").split())

        if tag in SKIP_TAGS:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return

        if tag == "div":
            if classes & CONTAINER_CLASSES:
                name = next(iter(classes & CONTAINER_CLASSES))
                self.container_stack.append(name)
            elif self.container_stack and not (
                classes & (CONTAINER_CLASSES | BLOCK_DIV_CLASSES | HEADER_DIV_CLASSES)
            ):
                self.div_stack.append("list")
                self.div_buffers.append([])
            elif classes & BLOCK_DIV_CLASSES:
                cls = next(iter(classes & BLOCK_DIV_CLASSES))
                if self.in_link and cls in {"n__t", "n__d", "n__go"}:
                    self.div_stack.append("link-part")
                    self.div_buffers.append([])
                    return
                if cls in {"note", "honest", "say", "case__v"}:
                    kind = "quote"
                elif cls in {"n__t"}:
                    kind = "link-title"
                elif cls in {"shotlist__hd", "inbox__hd", "sheet__hd", "ledger__hd", "when__hd", "slip__hd"}:
                    kind = "header"
                else:
                    kind = "line"
                self.div_stack.append(kind)
                self.div_buffers.append([])
            elif classes & HEADER_DIV_CLASSES:
                self.div_stack.append("header" if classes & {"phase"} else "line")
                self.div_buffers.append([])
            return

        if tag == "table":
            self.in_table = True
            self.table_rows = []
            return

        if self.in_table:
            if tag == "tr":
                self.current_row = []
            elif tag in {"td", "th"}:
                self.in_cell = True
                self.cell_parts = []
            return

        if tag == "a":
            self.in_link = True
            self.link_href = attr.get("href", "")
            self.link_parts = []
            return

        if tag == "small":
            self._append_text("（")
            return

        if tag == "time":
            self.block_tag = "time"
            self.block_buffer = []
            self.in_block = True
            return

        if tag in {"ul", "ol"}:
            self.list_stack.append(tag)
            self.ol_counters.append(1)
            return

        if tag == "figure":
            self.lines.append("")

        if tag == "p" and "figure__t" in classes:
            self.in_figure_title = True

        if tag in {"p", "h1", "h2", "h3", "h4", "li", "figcaption", "blockquote"}:
            self.block_tag = tag
            self.block_buffer = []
            self.in_block = True
            return

        if tag == "br":
            self._append_text("\n")

        if tag == "b" and self.div_stack and not self.in_block:
            self._append_text("**")

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()

        if tag in SKIP_TAGS and self.skip_depth:
            self.skip_depth -= 1
            return
        if self.skip_depth:
            return

        if tag == "div":
            if self.div_stack:
                kind = self.div_stack.pop()
                self._flush_div(kind)
            elif self.container_stack:
                self.container_stack.pop()
            return

        if self.in_table:
            if tag in {"td", "th"}:
                self.current_row.append(normalize_text("".join(self.cell_parts)))
                self.in_cell = False
            elif tag == "tr" and self.current_row:
                self.table_rows.append(self.current_row)
            elif tag == "table":
                self._flush_table()
                self.in_table = False
            return

        if tag == "a" and self.in_link:
            label = normalize_text("".join(self.link_parts))
            href = self.link_href
            chunk = f"[{label}]({href})" if href and label else label
            self.in_link = False
            self.link_href = ""
            self.link_parts = []
            if self.in_cell:
                self.cell_parts.append(chunk)
            elif self.in_block:
                self.block_buffer.append(chunk)
            elif self.div_stack:
                self.div_buffers[-1].append(chunk)
            else:
                self.lines.append(chunk)
                self.lines.append("")
            return

        if tag == "small":
            self._append_text("）")
            return

        if tag == "b" and self.div_stack and not self.in_block:
            if self.div_stack[-1] == "list":
                self._append_text("**：")
            else:
                self._append_text("**")

        if tag in {"ul", "ol"} and self.list_stack:
            self.list_stack.pop()
            if self.ol_counters:
                self.ol_counters.pop()
            self.lines.append("")
            return

        if tag in {"p", "h1", "h2", "h3", "h4", "li", "figcaption", "blockquote", "time"}:
            if self.in_block and tag == self.block_tag:
                self._flush_block()
                self.in_block = False
                self.block_tag = ""
            return

        if tag == "figure":
            self.lines.append("")

    def handle_data(self, data: str) -> None:
        if self.skip_depth:
            return
        if not data.strip() and not (self.in_block or self.div_stack or self.in_cell or self.in_link):
            return
        self._append_text(data)

    def _flush_table(self) -> None:
        if not self.table_rows:
            return
        widths = [0] * max(len(r) for r in self.table_rows)
        for row in self.table_rows:
            for i, cell in enumerate(row):
                if i < len(widths):
                    widths[i] = max(widths[i], len(cell))

        def fmt_row(row: list[str]) -> str:
            cells = [cell.ljust(widths[i] if i < len(widths) else 0) for i, cell in enumerate(row)]
            return "| " + " | ".join(cells) + " |"

        header = self.table_rows[0]
        self.lines.append(fmt_row(header))
        self.lines.append("| " + " | ".join("-" * max(1, widths[i]) for i in range(len(header))) + " |")
        for row in self.table_rows[1:]:
            padded = row + [""] * (len(header) - len(row))
            self.lines.append(fmt_row(padded[: len(header)]))
        self.lines.append("")


def extract_body(html: str) -> str:
    match = re.search(r"<body[^>]*>(.*)</body>", html, flags=re.DOTALL | re.IGNORECASE)
    return match.group(1) if match else html


def post_process(lines: list[str]) -> str:
    out: list[str] = []
    prev_blank = False
    for line in lines:
        line = line.rstrip()
        if not line.strip():
            if not prev_blank:
                out.append("")
            prev_blank = True
            continue
        out.append(line)
        prev_blank = False
    text = "\n".join(out).strip() + "\n"
    return re.sub(r"\n{3,}", "\n\n", text)


def build_frontmatter(slug: str, meta: dict) -> str:
    return (
        "---\n"
        f"slug: {slug}\n"
        f'title: "{meta["title"]}"\n'
        f"industry: {meta['industry']}\n"
        f"jam_label: {meta['jam_label']}\n"
        f"reading_minutes: {meta['reading_minutes']}\n"
        "published_at: 2026-08\n"
        f"source: content/articles/{slug}.html\n"
        f"url: /articles/{slug}\n"
        "---\n\n"
    )


def export_article(slug: str) -> None:
    src = SRC_DIR / f"{slug}.html"
    html = strip_html(src.read_text(encoding="utf-8"))
    body = extract_body(html)

    parser = MarkdownExtractor()
    parser.feed(body)
    content = post_process(parser.lines)

    meta = METADATA[slug]
    md = build_frontmatter(slug, meta) + content

    out = OUT_DIR / f"{slug}.md"
    out.write_text(md, encoding="utf-8")
    print(f"Wrote {out.relative_to(ROOT)} ({len(md):,} chars)")


def export_index() -> None:
    lines = [
        "---",
        "title: 記事目次",
        "source: data/articles/index.ts",
        "url: /#articles",
        "---",
        "",
        "# 記事目次",
        "",
        "## 業界から",
        "",
    ]
    for slug, meta in METADATA.items():
        lines.append(f"- [{meta['industry']}](/articles/{slug}) — {meta['title']}")
    lines.extend(["", "## 詰まりから", ""])
    for slug, meta in METADATA.items():
        lines.append(f"- [{meta['jam_label']}](/articles/{slug})")
    lines.append("")

    out = OUT_DIR / "index.md"
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out.relative_to(ROOT)}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for slug in METADATA:
        export_article(slug)
    export_index()
    print(f"\nDone: {len(METADATA)} articles + index.md")


if __name__ == "__main__":
    main()
