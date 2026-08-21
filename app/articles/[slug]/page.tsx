import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArticleShadowHost } from '@/components/articles/ArticleShadowHost'
import {
  getAllArticleSlugs,
  getArticleBySlug,
  industryArticles,
} from '@/data/articles'
import { readArticleHtml } from '@/lib/articles/load-html'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: '現場の記事 | ideal' }
  return {
    title: `${article.title.replace(/。$/, '')} | ideal`,
    description: article.description,
    openGraph: {
      title: `${article.title.replace(/。$/, '')} | ideal`,
      description: article.description,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  const html = readArticleHtml(slug)

  if (!article || !html) {
    notFound()
  }

  const others = industryArticles.filter((a) => a.slug !== slug).slice(0, 4)

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <div className="border-b border-[var(--site-border)] bg-[var(--site-bg-elevated)]/30">
        <div className="mx-auto flex w-[min(100%-40px,940px)] flex-wrap items-center gap-x-3 gap-y-1 py-3 text-sm text-[var(--site-fg-muted)]">
          <Link href="/articles" className="hover:text-brand">
            現場の記事
          </Link>
          <span aria-hidden>/</span>
          <span className="text-[var(--site-fg)]">{article.industry}</span>
        </div>
      </div>

      <ArticleShadowHost html={html} />

      {others.length > 0 && (
        <section className="border-t border-[var(--site-border)] py-14">
          <div className="mx-auto w-[min(100%-40px,620px)]">
            <h2 className="mb-5 text-sm font-medium tracking-wider text-[var(--site-fg-muted)] uppercase">
              ほかの記事
            </h2>
            <ul className="space-y-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/articles/${item.slug}`}
                    className="text-sm font-medium text-brand hover:text-brand-hover"
                  >
                    {item.title} →
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/articles" className="text-sm text-[var(--site-fg-muted)] hover:text-brand">
                目次に戻る
              </Link>
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
