import { Suspense } from 'react'
import type { Metadata } from 'next'
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
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
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
            <div className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
              <p className="text-xs uppercase tracking-wider text-cyan-400/80 mb-2">
                {photoDetailPage.afterTitle}
              </p>
              <p className="text-gray-200 leading-relaxed">{photoDetailPage.afterText}</p>
            </div>
          }
          columnRatio="equal"
          padding="md"
        />
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
