import Link from 'next/link'
import type { IndustryArticle } from '@/data/articles'
import { themeArticles } from '@/data/articles'

export function ArticleHubList({ articles }: { articles: IndustryArticle[] }) {
  return (
    <div className="space-y-16 md:space-y-20">
      <section aria-labelledby="articles-by-industry">
        <h2
          id="articles-by-industry"
          className="mb-6 text-sm font-medium tracking-[0.08em] text-[var(--site-fg-muted)]"
        >
          業界から
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="text-[clamp(1.35rem,3.2vw,1.85rem)] font-bold leading-tight text-[var(--site-fg)] hover:text-brand"
              >
                {article.hubIndustry}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="articles-by-jam">
        <h2
          id="articles-by-jam"
          className="mb-5 text-sm font-medium tracking-[0.08em] text-[var(--site-fg-muted)]"
        >
          よくある悩み
        </h2>
        <ul className="space-y-2.5">
          {themeArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/t/${article.slug}`}
                className="text-[0.95rem] leading-snug text-[var(--site-fg-muted)] hover:text-brand md:text-base"
              >
                {article.hub}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
