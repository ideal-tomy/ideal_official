const fs = require('fs')
const path = require('path')

const roots = ['components', 'app', 'lib']
const skip = (p) =>
  p.includes(`${path.sep}test-`) ||
  p.includes('node_modules') ||
  p.includes('.next') ||
  p.includes(`${path.sep}e2e${path.sep}`)

const exts = new Set(['.tsx', '.ts', '.jsx', '.js'])

const replacements = [
  [/ring-offset-black/g, 'ring-offset-[var(--site-bg)]'],
  [/bg-black\/90/g, 'bg-[var(--site-bg)]/90'],
  [/bg-black\/80/g, 'bg-[var(--site-bg)]/80'],
  [/bg-black\/75/g, 'bg-[var(--site-bg)]/75'],
  [/bg-black\/70/g, 'bg-[var(--site-bg)]/70'],
  [/bg-black\/50/g, 'bg-[var(--site-bg)]/50'],
  [/\bfrom-black\b/g, 'from-[var(--site-bg)]'],
  [/\bvia-gray-950\b/g, 'via-[var(--site-bg-elevated)]'],
  [/\bto-black\b/g, 'to-[var(--site-bg)]'],
  [/\bbg-black\b/g, 'bg-[var(--site-bg)]'],
  [/\bbg-gray-950\b/g, 'bg-[var(--site-bg)]'],
  [/\bbg-gray-900\b/g, 'bg-[var(--site-bg-elevated)]'],
  [/\bbg-gray-800\b/g, 'bg-[var(--site-bg-elevated)]'],
  [/border-gray-800\b/g, 'border-[var(--site-border)]'],
  [/border-gray-700\b/g, 'border-[var(--site-border)]'],
  [/border-gray-600\b/g, 'border-[var(--site-border)]'],
  [/text-gray-500\b/g, 'text-[var(--site-fg-muted)]'],
  [/text-gray-400\b/g, 'text-[var(--site-fg-muted)]'],
  [/text-gray-300\b/g, 'text-[var(--site-fg-muted)]'],
  [/text-gray-200\b/g, 'text-[var(--site-fg)]'],
  [/text-gray-100\b/g, 'text-[var(--site-fg)]'],
  [/hover:text-white\b/g, 'hover:text-[var(--site-fg)]'],
  [/hover:bg-gray-800\b/g, 'hover:bg-[var(--site-bg-elevated)]'],
  [/hover:bg-gray-900\b/g, 'hover:bg-[var(--site-bg-elevated)]'],
  [/\btext-white\b/g, 'text-[var(--site-fg)]'],
]

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (skip(p)) continue
    if (ent.isDirectory()) walk(p, out)
    else if (exts.has(path.extname(ent.name))) out.push(p)
  }
  return out
}

const base = process.cwd()
const files = []
for (const r of roots) {
  const d = path.join(base, r)
  if (fs.existsSync(d)) walk(d, files)
}

let changed = 0
for (const file of files) {
  let s = fs.readFileSync(file, 'utf8')
  const orig = s
  for (const [re, to] of replacements) s = s.replace(re, to)
  // brand filled buttons need on-primary text
  s = s.replace(
    /bg-brand([^"'`\n]*)text-\[var\(--site-fg\)\]/g,
    'bg-brand$1text-[var(--df-on-primary)]',
  )
  s = s.replace(
    /bg-brand-hover([^"'`\n]*)text-\[var\(--site-fg\)\]/g,
    'bg-brand-hover$1text-[var(--df-on-primary)]',
  )
  s = s.replace(
    /bg-\[var\(--df-primary\)\]([^"'`\n]*)text-\[var\(--site-fg\)\]/g,
    'bg-[var(--df-primary)]$1text-[var(--df-on-primary)]',
  )
  if (s !== orig) {
    fs.writeFileSync(file, s)
    changed++
    console.log('updated', path.relative(base, file))
  }
}
console.log('files changed:', changed)
