import Link from 'next/link'
import type { IndustryArticle } from '@/data/articles'

export function ArticleHubList({ articles }: { articles: IndustryArticle[] }) {
  return (
    <ul className="divide-y divide-[var(--site-border)] border-y border-[var(--site-border)]">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={`/articles/${article.slug}`}
            className="group flex flex-col gap-2 py-7 transition-colors hover:bg-[var(--site-bg-elevated)]/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-1"
          >
            <div className="min-w-0 flex-1">
              <h2 className="text-left text-[clamp(1.05rem,2.4vw,1.35rem)] font-bold leading-snug text-[var(--site-fg)] group-hover:text-brand">
                {article.title}
              </h2>
              <p className="mt-2 text-left text-sm text-[var(--site-fg-muted)]">
                {article.industry}
                <span className="mx-2 text-[var(--site-border)]" aria-hidden>
                  /
                </span>
                読むのに {article.readingMinutes}分
                <span className="mx-2 text-[var(--site-border)]" aria-hidden>
                  /
                </span>
                {article.demoLabel}
              </p>
            </div>
            <span className="shrink-0 text-sm font-medium text-brand">読む →</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
