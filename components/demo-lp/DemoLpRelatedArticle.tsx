'use client'

import Link from 'next/link'
import { industryArticles } from '@/data/articles'
import { lpBody, lpH2, lpSectionLabel } from './lpTypography'

type Props = {
  /** 現在の W型LP 公開パス（例: /demo/w/construction-record） */
  lpPath: string
}

export function DemoLpRelatedArticle({ lpPath }: Props) {
  const related = industryArticles.filter((a) => a.relatedDemoLp === lpPath)
  if (related.length === 0) return null

  return (
    <section className="border-y border-[var(--lp-ink)]/10 bg-[var(--lp-surface)] py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className={lpSectionLabel}>関連する読み物</p>
        <h2 className={lpH2}>実務の分け方を、先に読んでおく</h2>
        <p className={`${lpBody} mt-2`}>
          デモの前に、現場で起きていることの整理だけ読んでおけます。導入の話ではなく、明日から使える手順です。
        </p>
        <ul className="mt-6 space-y-3">
          {related.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="block rounded-lg border border-[var(--lp-ink)]/10 bg-white px-4 py-3 text-left transition-colors hover:border-[var(--lp-primary)]/40"
              >
                <span className="font-semibold text-[var(--lp-ink)]">
                  {article.title}
                </span>
                <span className={`mt-1 block text-sm ${lpBody}`}>
                  {article.industry} ／ 読むのに {article.readingMinutes}分
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
