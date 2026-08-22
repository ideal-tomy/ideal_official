/**
 * docs/report/article-*.html → content/articles/{slug}.html
 * 公開用にブランド・デモURL・contact・最初の一手を加工する。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const srcDir = path.join(root, 'docs', 'report')
const outDir = path.join(root, 'content', 'articles')

const DEMO_URLS = {
  ocr: 'https://construction-demo-two.vercel.app/report',
  construction: 'https://construction-demo-two.vercel.app',
  genpo: 'https://kanri-kensetsu.vercel.app/login',
  knowledge: 'https://product-flowideal.vercel.app/manufacturing',
  care: 'https://kaigo-operation-demo.vercel.app/',
  'care-record': 'https://kaigo-operation-demo.vercel.app/',
  support: 'https://customer-support-demo-lime.vercel.app/',
  // shift / building: 未公開 → ボタン非表示
  shift: null,
  building: null,
}

const FIRST_STEPS = {
  ocr: 'まず、青いボタンで写真を3枚ほど選んでください。新しい画面が開きます。会社名や連絡先を入れる必要はありません。',
  construction: 'まず、写真・報告・管理のうち、見たい体験を選んでください。新しい画面が開きます。',
  genpo: 'まず、案内に従ってログイン画面から入ってください。新しい画面が開きます。',
  knowledge: 'まず、用意された手順書から一つ選んで質問してみてください。新しい画面が開きます。会社名や連絡先を入れる必要はありません。',
  care: 'パソコンのChromeでお試しください。まず、最初の画面のマイク（または文字入力）から始めてください。新しい画面が開きます。',
  'care-record':
    'パソコンのChromeでお試しください。まず、最初に出てくる画面のマイク（または文字入力）だけ押してみてください。新しい画面が開きます。',
  support:
    'まず、お客さまの気持ちで質問を一つ打ってみてください。新しい画面が開きます。会社名や連絡先を入れる必要はありません。',
}

const FILE_MAP = {
  'article-construction.html': 'construction',
  'article-manufacturing.html': 'manufacturing',
  'article-care.html': 'care',
  'article-childcare.html': 'childcare',
  'article-retail.html': 'retail',
  'article-restaurant.html': 'restaurant',
  'article-building.html': 'building',
  'article-logistics.html': 'logistics',
  'article-warehouse.html': 'warehouse',
}

function stripChrome(html) {
  let out = html
  // class="top" 付き、またはブランド行だけの <header>
  out = out.replace(/<header(?:\s[^>]*)?>[\s\S]*?<\/header>\s*/i, '')
  out = out.replace(/<footer(?:\s[^>]*)?>[\s\S]*?<\/footer>\s*/i, '')
  return out
}

function rebrand(html) {
  return html
    .replace(/AXEON/g, 'ideal')
    .replace(/axeon/g, 'ideal')
}

function contactHref(slug) {
  return `/contact?service=ai-consulting&intent=article&article=${slug}`
}

function rewriteContact(html, slug) {
  const href = contactHref(slug)
  return html.replace(
    /<a([^>]*?)href="#"[^>]*?data-cta="contact"([^>]*)>/gi,
    `<a$1href="${href}"$2>`,
  ).replace(
    /<a([^>]*?)data-cta="contact"([^>]*?)href="#"/gi,
    `<a$1data-cta="contact"$2href="${href}"`,
  )
}

function rewriteDemoLinks(html) {
  return html.replace(
    /<a([^>]*?)href="#"[^>]*?data-demo="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi,
    (match, before, demoId, after, label) => {
      const url = DEMO_URLS[demoId]
      if (!url) {
        return `<span class="btn is-soon" role="status" aria-disabled="true">${label.trim()}（画面は準備中）</span>`
      }
      const step = FIRST_STEPS[demoId]
        ? `<p class="demo-first-step">${FIRST_STEPS[demoId]}</p>`
        : ''
      const attrs = `${before}href="${url}" data-demo="${demoId}" target="_blank" rel="noopener noreferrer"${after}`
      // If we already injected first-step nearby, avoid duplicate by only replacing the anchor
      return `${step}<a ${attrs.trim()}>${label}</a>`
    },
  )
}

function fixManufacturingCopy(html, slug) {
  if (slug !== 'manufacturing') return html
  return html.replace(
    /こちらで用意した手順書と検査記録で動きます。<br>\s*御社の文書を入れて試すこともできます。<br>/,
    'こちらで用意した手順書と検査記録で動きます。<br>',
  )
}

function injectCareVoiceNote(html, slug) {
  if (slug !== 'care' && slug !== 'childcare') return html
  // first-step already covers Chrome; ensure fine text mentions text fallback if missing
  if (html.includes('文字入力')) return html
  return html.replace(
    /(登録は要りません。)/,
    '$1 音声が使えない場合は、文字入力でも同じ結果をご覧いただけます。',
  )
}

function injectDemoSlots(html, slug) {
  if (slug === 'logistics') {
    const marker =
      /(<section class="sec">\s*<h2>月末に分かっても、もう戻せません<\/h2>)/
    if (marker.test(html) && !html.includes('DEMO SLOT (logistics)')) {
      return html.replace(
        marker,
        `<!-- DEMO SLOT (logistics) — 未実装
  差し込み位置: 判定時期の階段の直後
  最初の一手: まず、サンプルの2週を開いて、赤い点灯がいつ付くかを見てください。
-->
$1`,
      )
    }
  }
  if (slug === 'warehouse') {
    const marker =
      /(<\/ol>\s*)(<figure class="figure">\s*<p class="figure__t">図2　範囲を半分ずつ絞る<\/p>)/
    if (marker.test(html) && !html.includes('DEMO SLOT (warehouse)')) {
      return html.replace(
        marker,
        `$1<!-- DEMO SLOT (warehouse) — 未実装
  差し込み位置: 「数を合わせる前にやること」の直後（手順リストの後）
  最初の一手: まず、10個足りない行を開き、数を合わせる前に原因の枝を選んでください。
-->
$2`,
      )
    }
  }
  return html
}

function extractBodyFragment(html) {
  // Prefer content inside <body>…</body>, else whole file after strip
  const m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  if (m) return m[1].trim()
  return html
}

function extractStyle(html) {
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(
    (m) => m[1],
  )
  return styles.join('\n')
}

function buildPublishDoc(style, body) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<style>
${style}
/* publish overrides */
.demo-first-step{ font-size:13.5px; line-height:1.85; margin:0 0 14px; opacity:.95; }
.btn.is-soon,.n__go.is-soon{
  display:inline-block; opacity:.65; cursor:default; pointer-events:none;
  font-weight:700; font-size:15px; padding:15px 30px; border-radius:2px;
  background:#e8e8e8; color:#555; text-decoration:none;
}
</style>
</head>
<body>
${body}
</body>
</html>
`
}

fs.mkdirSync(outDir, { recursive: true })

for (const [file, slug] of Object.entries(FILE_MAP)) {
  const src = path.join(srcDir, file)
  let html = fs.readFileSync(src, 'utf8')
  html = stripChrome(html)
  html = rebrand(html)
  html = rewriteContact(html, slug)
  html = rewriteDemoLinks(html)
  html = fixManufacturingCopy(html, slug)
  html = injectCareVoiceNote(html, slug)
  html = injectDemoSlots(html, slug)

  const style = extractStyle(html)
  const body = extractBodyFragment(html)
  const out = buildPublishDoc(style, body)
  const dest = path.join(outDir, `${slug}.html`)
  fs.writeFileSync(dest, out, 'utf8')
  console.log('wrote', path.relative(root, dest))
}
