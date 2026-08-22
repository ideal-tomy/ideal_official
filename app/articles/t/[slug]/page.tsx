import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArticleShadowHost } from '@/components/articles/ArticleShadowHost'
import {
  getAllThemeArticleSlugs,
  getThemeArticleBySlug,
  themeArticles,
  getArticleBySlug,
} from '@/data/articles'
import { readThemeArticleHtml } from '@/lib/articles/load-html'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllThemeArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getThemeArticleBySlug(slug)
  if (!article) return { title: 'よくある悩み | ideal' }
  return {
    title: `${article.title.replace(/。$/, '')} | ideal`,
    description: article.description,
    openGraph: {
      title: `${article.title.replace(/。$/, '')} | ideal`,
      description: article.description,
    },
  }
}

export default async function ThemeArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getThemeArticleBySlug(slug)
  const html = readThemeArticleHtml(slug)

  if (!article || !html) {
    notFound()
  }

  const prototype = article.prototypeSlug
    ? getArticleBySlug(article.prototypeSlug)
    : undefined
  const otherThemes = themeArticles.filter((a) => a.slug !== slug)

  return (
    <div className="min-h-screen">
      <div className="border-b border-[var(--site-border)]/70">
        <div className="mx-auto flex w-[min(100%-40px,940px)] flex-wrap items-center gap-x-2 py-1.5 text-xs text-[var(--site-fg-muted)]">
          <Link href="/#articles" className="no-underline hover:text-brand hover:no-underline">
            現場の記事
          </Link>
          <span aria-hidden>/</span>
          <span>よくある悩み</span>
          <span aria-hidden>/</span>
          <span className="text-[var(--site-fg)]">{article.hub}</span>
        </div>
      </div>

      <ArticleShadowHost html={html} />

      <section className="border-t border-[var(--site-border)]/70 py-8">
        <div className="mx-auto w-[min(100%-40px,620px)]">
          <h2 className="mb-3 text-xs tracking-[0.08em] text-[var(--site-fg-muted)]">
            ほかのよくある悩み
          </h2>
          <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
            {otherThemes.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/articles/t/${item.slug}`}
                  className="text-sm text-[var(--site-fg-muted)] hover:text-brand"
                >
                  {item.hub}
                </Link>
              </li>
            ))}
          </ul>
          {prototype && (
            <>
              <h2 className="mb-3 text-xs tracking-[0.08em] text-[var(--site-fg-muted)]">
                業界の記事
              </h2>
              <p>
                <Link
                  href={`/articles/${prototype.slug}`}
                  className="text-sm text-[var(--site-fg-muted)] hover:text-brand"
                >
                  {prototype.hubIndustry} — {prototype.title.replace(/。$/, '')}
                </Link>
              </p>
            </>
          )}
          <p className="mt-5">
            <Link
              href="/#articles"
              className="text-xs text-[var(--site-fg-muted)] no-underline hover:text-brand hover:no-underline"
            >
              目次に戻る
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
