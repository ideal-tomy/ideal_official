import type { Metadata } from 'next'
import Link from 'next/link'
import { researchDemos } from '@/data/research/demos'
import { detailPages, getPhilosophySectionLabel } from '@/data/research/detail-pages'
import type { PhilosophySectionId } from '@/data/philosophy/solution-links'

export const metadata: Metadata = {
  title: 'Research Demos | ideal',
  description:
    'Proof of Contribution の技術提案デモ一覧。概念別の詳細ページとインタラクティブ LP へ。',
}

export default function ResearchHubPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <header className="mb-12 lg:mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-3">
            Research
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">技術提案デモ</h1>
          <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
            Philosophy で述べた思想を、技術的アプローチとして体感できるデモ集です。概念別の詳細ページと、全体を一望できるインタラクティブ LP があります。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4">
          {researchDemos.map((demo) => {
            const pageMeta =
              demo.type === 'detail'
                ? detailPages.find((p) => `/research/poc-instrument/${p.slug}` === demo.href)
                : null

            return (
              <Link
                key={demo.id}
                href={demo.href}
                className="group block p-6 rounded-xl border border-gray-800 bg-gray-900/40 hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {demo.title}
                  </h2>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 border border-gray-700 px-1.5 py-0.5 rounded shrink-0">
                    {demo.type === 'lp' ? '全体 LP' : '詳細'}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-3">
                  {demo.description}
                </p>
                {pageMeta && pageMeta.philosophySections.length > 0 && (
                  <p className="text-xs text-gray-400">
                    Philosophy:{' '}
                    {pageMeta.philosophySections
                      .map((s) => getPhilosophySectionLabel(s as PhilosophySectionId))
                      .join(' · ')}
                  </p>
                )}
              </Link>
            )
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link
            href="/philosophy"
            className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
          >
            ← DAO研究・取り組み（Philosophy）に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
