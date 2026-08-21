import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleHubList } from '@/components/articles/ArticleHubList'
import { industryArticles } from '@/data/articles'

export const metadata: Metadata = {
  title: '現場の記事 | ideal',
  description:
    '業界ごとの実務の話。読んで分かったことを、画面で確かめてもらえます。DXや導入論ではなく、明日から使える分け方と手順をまとめています。',
  openGraph: {
    title: '現場の記事 | ideal',
    description:
      '業界ごとの実務の話。読んで分かったことを、画面で確かめてもらえます。',
  },
}

export default function ArticlesHubPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <div className="mx-auto w-[min(100%-40px,720px)] pb-20 pt-14 md:pb-28 md:pt-20">
        <nav className="mb-10 text-sm text-[var(--site-fg-muted)]">
          <Link href="/" className="hover:text-brand">
            トップ
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-[var(--site-fg)]">現場の記事</span>
        </nav>

        <header className="mb-12 text-left md:mb-16">
          <p className="mb-3 font-mono text-xs tracking-[0.16em] text-brand">ARTICLES</p>
          <h1 className="mb-4 text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-tight text-[var(--site-fg)]">
            この仕事で、いま何が詰まっているか。
          </h1>
          <p className="max-w-[34em] text-base leading-relaxed text-[var(--site-fg-muted)] md:text-[1.05rem]">
            業界ごとの実務の話です。導入の話ではなく、明日から使える分け方と手順を書いています。画面がある記事は、読んだあとその場で確かめられます。
          </p>
        </header>

        <ArticleHubList articles={industryArticles} />
      </div>
    </div>
  )
}
