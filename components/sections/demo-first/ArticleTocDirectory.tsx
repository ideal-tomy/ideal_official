'use client'

import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { industryArticles, type IndustryArticle } from '@/data/articles'
import { ArticleTocIcon } from './ArticleTocIcon'

const PANELS = [
  { id: 'industry', title: '業界から' },
  { id: 'jam', title: '詰まりから' },
] as const

function TocRow({
  href,
  label,
  showIcon,
  slug,
  tone,
}: {
  href: string
  label: string
  showIcon?: boolean
  slug: string
  tone?: 'industry' | 'jam'
}) {
  return (
    <Link
      href={href}
      className="group flex min-w-0 items-center gap-2.5 py-2 pr-0.5 text-[var(--df-text)] no-underline transition-colors hover:text-[var(--df-primary)] hover:no-underline"
    >
      {showIcon ? <ArticleTocIcon slug={slug} size="sm" tone={tone} /> : null}
      <span className="min-w-0 flex-1 text-[13px] font-medium leading-snug md:text-sm">
        {label}
      </span>
      <span
        className="shrink-0 text-[11px] text-[var(--df-text-muted)]/80 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--df-primary)]"
        aria-hidden
      >
        ›
      </span>
    </Link>
  )
}

function TocGrid({
  articles,
  labelOf,
  showIcon,
  columns,
  tone,
}: {
  articles: IndustryArticle[]
  labelOf: (article: IndustryArticle) => string
  showIcon?: boolean
  columns: 'two' | 'twoFromMd'
  tone?: 'industry' | 'jam'
}) {
  return (
    <ul
      className={
        columns === 'two'
          ? 'grid grid-cols-2 gap-x-4 gap-y-0.5 sm:gap-x-6'
          : 'grid grid-cols-1 gap-y-0.5 md:grid-cols-2 md:gap-x-6'
      }
    >
      {articles.map((article) => (
        <li key={article.slug}>
          <TocRow
            href={`/articles/${article.slug}`}
            label={labelOf(article)}
            slug={article.slug}
            showIcon={showIcon}
            tone={tone}
          />
        </li>
      ))}
    </ul>
  )
}

/** PCは2列グリッド。スマホは業界／詰まりをフリックで表裏切り替え */
export function ArticleTocDirectory() {
  const [page, setPage] = useState<0 | 1>(0)
  const touchX = useRef<number | null>(null)
  const touchY = useRef<number | null>(null)

  const goTo = useCallback((index: 0 | 1) => {
    setPage(index)
  }, [])

  const onTouchStart = useCallback((event: React.TouchEvent) => {
    touchX.current = event.touches[0].clientX
    touchY.current = event.touches[0].clientY
  }, [])

  const onTouchEnd = useCallback((event: React.TouchEvent) => {
    if (touchX.current == null || touchY.current == null) return
    const dx = event.changedTouches[0].clientX - touchX.current
    const dy = event.changedTouches[0].clientY - touchY.current
    touchX.current = null
    touchY.current = null
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) goTo(1)
    else goTo(0)
  }, [goTo])

  return (
    <div>
      <div
        className="mb-3 grid grid-cols-2 rounded-lg border border-[var(--site-border)] p-0.5 md:hidden"
        role="tablist"
        aria-label="記事の入り口"
      >
        {PANELS.map((panel, index) => {
          const selected = page === index
          return (
            <button
              key={panel.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`rounded-md py-1.5 text-sm font-bold transition-colors ${
                selected
                  ? 'bg-[var(--df-bg-card)] text-[var(--df-text)]'
                  : 'text-[var(--df-text-muted)]'
              }`}
              onClick={() => goTo(index as 0 | 1)}
            >
              {panel.title}
            </button>
          )
        })}
      </div>

      <div
        className="overflow-hidden rounded-[var(--df-radius-card)] bg-[var(--df-bg)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <section
            aria-labelledby="top-articles-industry"
            className={`${page === 0 ? 'block' : 'hidden'} px-1 py-1 md:block md:px-0 md:py-0`}
          >
            <h3
              id="top-articles-industry"
              className="mb-3 hidden text-lg font-black text-[var(--df-text)] md:mb-4 md:block"
            >
              業界から
            </h3>
            <TocGrid
              articles={industryArticles}
              labelOf={(a) => a.hubIndustry}
              showIcon
              tone="industry"
              columns="two"
            />
          </section>

          <section
            aria-labelledby="top-articles-jam"
            className={`${page === 1 ? 'block' : 'hidden'} px-1 py-1 md:block md:px-0 md:py-0`}
          >
            <h3
              id="top-articles-jam"
              className="mb-3 hidden text-lg font-black text-[var(--df-text)] md:mb-4 md:block"
            >
              詰まりから
            </h3>
            <TocGrid
              articles={industryArticles}
              labelOf={(a) => a.jamLabel}
              showIcon
              tone="jam"
              columns="twoFromMd"
            />
          </section>
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-1.5 md:hidden" aria-hidden>
        {PANELS.map((panel, index) => (
          <span
            key={panel.id}
            className={`h-1.5 rounded-full transition-all ${
              page === index
                ? 'w-4 bg-[var(--df-primary)]'
                : 'w-1.5 bg-[var(--site-border)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
