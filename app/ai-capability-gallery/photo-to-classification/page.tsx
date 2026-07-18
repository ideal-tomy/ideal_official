import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { PhotoToClassificationDemo } from '@/components/ai-capability-gallery/demos/PhotoToClassificationDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { photoDetailPage } from '@/data/ai-capability-gallery/photo-to-classification'

export const metadata: Metadata = {
  title: photoDetailPage.metaTitle,
  description: photoDetailPage.metaDescription,
  openGraph: {
    title: photoDetailPage.metaTitle,
    description: photoDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter(
  (c) => c.slug !== photoDetailPage.slug
)

export default function PhotoToClassificationPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: photoDetailPage.slug,
          eyebrow: photoDetailPage.eyebrow,
          title: photoDetailPage.title,
          lead: photoDetailPage.lead,
          tags: photoDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <PhotoToClassificationDemo />
        </section>

        <div className="hidden md:block">
          <TwoColumnSection
            title="Before / After"
            leftContent={
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {photoDetailPage.beforeTitle}
                </p>
                <p className="text-gray-300 leading-relaxed">{photoDetailPage.beforeText}</p>
              </div>
            }
            rightContent={
              <div className="p-6 rounded-xl border border-brand/20 bg-brand/5">
                <p className="text-xs uppercase tracking-wider text-brand/80 mb-2">
                  {photoDetailPage.afterTitle}
                </p>
                <p className="text-gray-200 leading-relaxed">{photoDetailPage.afterText}</p>
              </div>
            }
            columnRatio="equal"
            padding="md"
          />
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.16em] text-brand/90 mb-1">Cases</p>
            <p className="text-white font-semibold mb-1">
              建設現場では、どう置き換わるか
            </p>
            <p className="text-sm text-gray-400">
              撮る→戻る→整理の流れが、アップロード→AI判定へ変わる事例を読めます。
            </p>
          </div>
          <Link
            href="/cases/industries/construction-photo-sorting"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-brand/40 px-5 py-2.5 text-sm font-medium text-brand-hover hover:bg-brand/10 transition-colors"
          >
            事例を読む →
          </Link>
        </div>
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
