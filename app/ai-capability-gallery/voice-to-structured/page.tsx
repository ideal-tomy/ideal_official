import { Suspense } from 'react'
import type { Metadata } from 'next'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { VoiceToStructuredDemo } from '@/components/ai-capability-gallery/demos/VoiceToStructuredDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { voiceDetailPage } from '@/data/ai-capability-gallery/voice-to-structured'

export const metadata: Metadata = {
  title: voiceDetailPage.metaTitle,
  description: voiceDetailPage.metaDescription,
  openGraph: {
    title: voiceDetailPage.metaTitle,
    description: voiceDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter((c) => c.slug !== voiceDetailPage.slug)

export default function VoiceToStructuredPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: voiceDetailPage.slug,
          eyebrow: voiceDetailPage.eyebrow,
          title: voiceDetailPage.title,
          lead: voiceDetailPage.lead,
          tags: voiceDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <VoiceToStructuredDemo />
        </section>
        <div className="hidden md:block">
          <TwoColumnSection
            title="Before / After"
            leftContent={
              <div className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-[var(--site-fg-muted)]">
                  {voiceDetailPage.beforeTitle}
                </p>
                <p className="leading-relaxed text-[var(--site-fg-muted)]">{voiceDetailPage.beforeText}</p>
              </div>
            }
            rightContent={
              <div className="rounded-xl border border-brand/20 bg-brand/5 p-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-brand/80">
                  {voiceDetailPage.afterTitle}
                </p>
                <p className="leading-relaxed text-[var(--site-fg)]">{voiceDetailPage.afterText}</p>
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
