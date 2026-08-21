import fs from 'node:fs'
import path from 'node:path'

const articlesDir = path.join(process.cwd(), 'content', 'articles')

export function readArticleHtml(slug: string): string | null {
  const filePath = path.join(articlesDir, `${slug}.html`)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf8')
}
