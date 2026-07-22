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

        <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs tracking-[0.16em] text-brand/90">活用イメージ</p>
            <p className="mb-1 font-semibold text-white">
              建設現場では、どう置き換わるか
            </p>
            <p className="text-sm text-gray-400">
              撮る→戻る→整理の流れが、アップロード→AI判定へ変わる活用イメージを読めます。
            </p>
          </div>
          <Link
            href="/cases/industries/construction-photo-sorting"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-brand/40 px-5 py-2.5 text-sm font-medium text-brand-hover transition-colors hover:bg-brand/10"
          >
            活用イメージを読む →
          </Link>
        </div>
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
