import { Suspense } from 'react'
import type { Metadata } from 'next'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { DataToPredictionDemo } from '@/components/ai-capability-gallery/demos/DataToPredictionDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { predictionDetailPage } from '@/data/ai-capability-gallery/data-to-prediction'

export const metadata: Metadata = {
  title: predictionDetailPage.metaTitle,
  description: predictionDetailPage.metaDescription,
  openGraph: {
    title: predictionDetailPage.metaTitle,
    description: predictionDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter((c) => c.slug !== predictionDetailPage.slug)

export default function DataToPredictionPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: predictionDetailPage.slug,
          eyebrow: predictionDetailPage.eyebrow,
          title: predictionDetailPage.title,
          lead: predictionDetailPage.lead,
          tags: predictionDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <DataToPredictionDemo />
        </section>
        <TwoColumnSection
          title="Before / After"
          leftContent={
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {predictionDetailPage.beforeTitle}
              </p>
              <p className="text-gray-300 leading-relaxed">{predictionDetailPage.beforeText}</p>
            </div>
          }
          rightContent={
            <div className="p-6 rounded-xl border border-brand/20 bg-brand/5">
              <p className="text-xs uppercase tracking-wider text-brand/80 mb-2">
                {predictionDetailPage.afterTitle}
              </p>
              <p className="text-gray-200 leading-relaxed">{predictionDetailPage.afterText}</p>
            </div>
          }
          columnRatio="equal"
          padding="md"
        />
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
