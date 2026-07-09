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
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
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
        <TwoColumnSection
          title="Before / After"
          leftContent={
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {voiceDetailPage.beforeTitle}
              </p>
              <p className="text-gray-300 leading-relaxed">{voiceDetailPage.beforeText}</p>
            </div>
          }
          rightContent={
            <div className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
              <p className="text-xs uppercase tracking-wider text-cyan-400/80 mb-2">
                {voiceDetailPage.afterTitle}
              </p>
              <p className="text-gray-200 leading-relaxed">{voiceDetailPage.afterText}</p>
            </div>
          }
          columnRatio="equal"
          padding="md"
        />
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
