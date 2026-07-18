import { Suspense } from 'react'
import type { Metadata } from 'next'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { MultiInputToReportDemo } from '@/components/ai-capability-gallery/demos/MultiInputToReportDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { reportDetailPage } from '@/data/ai-capability-gallery/multi-input-to-report'

export const metadata: Metadata = {
  title: reportDetailPage.metaTitle,
  description: reportDetailPage.metaDescription,
  openGraph: {
    title: reportDetailPage.metaTitle,
    description: reportDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter((c) => c.slug !== reportDetailPage.slug)

export default function MultiInputToReportPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: reportDetailPage.slug,
          eyebrow: reportDetailPage.eyebrow,
          title: reportDetailPage.title,
          lead: reportDetailPage.lead,
          tags: reportDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <MultiInputToReportDemo />
        </section>
        <div className="hidden md:block">
          <TwoColumnSection
            title="Before / After"
            leftContent={
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {reportDetailPage.beforeTitle}
                </p>
                <p className="text-gray-300 leading-relaxed">{reportDetailPage.beforeText}</p>
              </div>
            }
            rightContent={
              <div className="p-6 rounded-xl border border-brand/20 bg-brand/5">
                <p className="text-xs uppercase tracking-wider text-brand/80 mb-2">
                  {reportDetailPage.afterTitle}
                </p>
                <p className="text-gray-200 leading-relaxed">{reportDetailPage.afterText}</p>
              </div>
            }
            columnRatio="equal"
            padding="md"
          />
        </div>
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
