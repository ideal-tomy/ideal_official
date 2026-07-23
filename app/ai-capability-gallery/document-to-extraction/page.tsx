import { Suspense } from 'react'
import type { Metadata } from 'next'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { DocumentToExtractionDemo } from '@/components/ai-capability-gallery/demos/DocumentToExtractionDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { documentDetailPage } from '@/data/ai-capability-gallery/document-to-extraction'

export const metadata: Metadata = {
  title: documentDetailPage.metaTitle,
  description: documentDetailPage.metaDescription,
  openGraph: {
    title: documentDetailPage.metaTitle,
    description: documentDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter((c) => c.slug !== documentDetailPage.slug)

export default function DocumentToExtractionPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: documentDetailPage.slug,
          eyebrow: documentDetailPage.eyebrow,
          title: documentDetailPage.title,
          lead: documentDetailPage.lead,
          tags: documentDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <DocumentToExtractionDemo />
        </section>
        <div className="hidden md:block">
          <TwoColumnSection
            title="Before / After"
            leftContent={
              <div className="p-6 rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40">
                <p className="text-xs uppercase tracking-wider text-[var(--site-fg-muted)] mb-2">
                  {documentDetailPage.beforeTitle}
                </p>
                <p className="text-[var(--site-fg-muted)] leading-relaxed">{documentDetailPage.beforeText}</p>
              </div>
            }
            rightContent={
              <div className="p-6 rounded-xl border border-brand/20 bg-brand/5">
                <p className="text-xs uppercase tracking-wider text-brand/80 mb-2">
                  {documentDetailPage.afterTitle}
                </p>
                <p className="text-[var(--site-fg)] leading-relaxed">{documentDetailPage.afterText}</p>
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
