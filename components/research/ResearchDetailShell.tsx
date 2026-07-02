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
    <div className="bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-8 pb-6 border-b border-gray-800"
          aria-label="Research ナビゲーション"
        >
          <Link
            href="/philosophy"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            ← DAO研究・取り組み
          </Link>
          <span className="text-gray-600" aria-hidden="true">
            /
          </span>
          <Link
            href={POC_INSTRUMENT_LP}
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            PoC Instrument 全体像
          </Link>
          <span className="text-gray-600" aria-hidden="true">
            /
          </span>
          <Link
            href="/research"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            Research 一覧
          </Link>
        </nav>

        {fromPhilosophy && sectionLabel && (
          <div
            className="mb-8 p-4 rounded-lg border border-cyan-500/25 bg-cyan-500/10"
            role="status"
          >
            <p className="text-sm text-gray-200">
              <span className="text-cyan-400 font-medium">Philosophy から：</span>{' '}
              「{sectionLabel}」で述べた内容の技術的アプローチです。
            </p>
          </div>
        )}

        <header className="mb-10 lg:mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-3">
            {page.eyebrow}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {page.title}
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">{page.lead}</p>
          <p className="text-base text-gray-300 leading-relaxed border-l-2 border-blue-400/50 pl-4">
            {page.philosophyConnection}
          </p>
        </header>

        <div className="research-prose space-y-10">{children}</div>

        <footer className="mt-16 pt-10 border-t border-gray-800">
          <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
            関連するデモ
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {relatedPages.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/research/poc-instrument/${related.slug}`}
                  className="block p-4 rounded-lg border border-gray-800 bg-gray-900/40 hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
                >
                  <span className="text-sm font-medium text-white">{related.title}</span>
                  <span className="block text-xs text-gray-400 mt-1 line-clamp-2">
                    {related.lead.slice(0, 60)}…
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href={POC_INSTRUMENT_LP}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              全体像を見る（インタラクティブ LP）→
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
