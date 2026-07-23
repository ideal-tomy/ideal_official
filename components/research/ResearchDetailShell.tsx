'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { PhilosophySectionId } from '@/data/philosophy/solution-links'
import {
  getPhilosophySectionLabel,
  type DetailPageMeta,
  detailPages,
  POC_INSTRUMENT_LP,
} from '@/data/research/detail-pages'

interface ResearchDetailShellProps {
  page: DetailPageMeta
  children: React.ReactNode
}

export function ResearchDetailShell({ page, children }: ResearchDetailShellProps) {
  const searchParams = useSearchParams()
  const fromPhilosophy = searchParams.get('from') === 'philosophy'
  const sectionId = searchParams.get('section') as PhilosophySectionId | null
  const sectionLabel =
    sectionId && getPhilosophySectionLabel(sectionId)
      ? getPhilosophySectionLabel(sectionId)
      : null

  const relatedPages = detailPages.filter((p) => p.slug !== page.slug)

  return (
    <div className="bg-[var(--site-bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-8 pb-6 border-b border-[var(--site-border)]"
          aria-label="Research ナビゲーション"
        >
          <Link
            href="/philosophy"
            className="text-[var(--site-fg-muted)] hover:text-brand transition-colors"
          >
            ← DAO研究・取り組み
          </Link>
          <span className="text-gray-600" aria-hidden="true">
            /
          </span>
          <Link
            href={POC_INSTRUMENT_LP}
            className="text-[var(--site-fg-muted)] hover:text-brand transition-colors"
          >
            PoC Instrument 全体像
          </Link>
          <span className="text-gray-600" aria-hidden="true">
            /
          </span>
          <Link
            href="/research"
            className="text-[var(--site-fg-muted)] hover:text-brand transition-colors"
          >
            Research 一覧
          </Link>
        </nav>

        {fromPhilosophy && sectionLabel && (
          <div
            className="mb-8 p-4 rounded-lg border border-brand/25 bg-brand/10"
            role="status"
          >
            <p className="text-sm text-[var(--site-fg)]">
              <span className="text-brand font-medium">Philosophy から：</span>{' '}
              「{sectionLabel}」で述べた内容の技術的アプローチです。
            </p>
          </div>
        )}

        <header className="mb-10 lg:mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand/90 mb-3">
            {page.eyebrow}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--site-fg)] mb-6 leading-tight tracking-tight">
            {page.title}
          </h1>
          <p className="text-lg text-[var(--site-fg)] leading-relaxed mb-4">{page.lead}</p>
          <p className="text-base text-[var(--site-fg-muted)] leading-relaxed border-l-2 border-brand/50 pl-4">
            {page.philosophyConnection}
          </p>
        </header>

        <div className="research-prose space-y-10">{children}</div>

        <footer className="mt-16 pt-10 border-t border-[var(--site-border)]">
          <p className="text-sm font-medium text-[var(--site-fg-muted)] mb-4 uppercase tracking-wider">
            関連するデモ
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {relatedPages.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/research/poc-instrument/${related.slug}`}
                  className="block p-4 rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 hover:border-brand/30 hover:bg-[var(--site-bg-elevated)]/60 transition-colors"
                >
                  <span className="text-sm font-medium text-[var(--site-fg)]">{related.title}</span>
                  <span className="block text-xs text-[var(--site-fg-muted)] mt-1 line-clamp-2">
                    {related.lead.slice(0, 60)}…
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href={POC_INSTRUMENT_LP}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
            >
              全体像を見る（インタラクティブ LP）→
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
