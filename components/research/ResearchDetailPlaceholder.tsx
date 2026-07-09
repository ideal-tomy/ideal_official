import Link from 'next/link'
import {
  getDetailPage,
  getPhilosophySectionLabel,
  POC_INSTRUMENT_LP,
  type DetailPageSlug,
} from '@/data/research/detail-pages'
import type { PhilosophySectionId } from '@/data/philosophy/solution-links'

interface ResearchDetailPlaceholderProps {
  slug: DetailPageSlug
}

export function ResearchDetailPlaceholder({ slug }: ResearchDetailPlaceholderProps) {
  const page = getDetailPage(slug)
  if (!page) return null

  const primarySection = page.philosophySections[0]

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand/90 mb-4">
          準備中
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">{page.title}</h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          この機能詳細ページは現在準備中です。全体 LP で概要をご確認いただけます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={POC_INSTRUMENT_LP}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand/20 border border-brand/40 text-brand-hover hover:bg-brand/30 transition-colors"
          >
            全体 LP を見る
          </Link>
          {primarySection && (
            <Link
              href={`/philosophy#${primarySection}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:border-gray-500 transition-colors"
            >
              Philosophy「{getPhilosophySectionLabel(primarySection as PhilosophySectionId)}」に戻る
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
