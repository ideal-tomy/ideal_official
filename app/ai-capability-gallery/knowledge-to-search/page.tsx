import { Suspense } from 'react'
import type { Metadata } from 'next'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { KnowledgeToSearchDemo } from '@/components/ai-capability-gallery/demos/KnowledgeToSearchDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { knowledgeDetailPage } from '@/data/ai-capability-gallery/knowledge-to-search'

export const metadata: Metadata = {
  title: knowledgeDetailPage.metaTitle,
  description: knowledgeDetailPage.metaDescription,
  openGraph: {
    title: knowledgeDetailPage.metaTitle,
    description: knowledgeDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter((c) => c.slug !== knowledgeDetailPage.slug)

export default function KnowledgeToSearchPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: knowledgeDetailPage.slug,
          eyebrow: knowledgeDetailPage.eyebrow,
          title: knowledgeDetailPage.title,
          lead: knowledgeDetailPage.lead,
          tags: knowledgeDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <KnowledgeToSearchDemo />
        </section>
        <TwoColumnSection
          title="Before / After"
          leftContent={
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {knowledgeDetailPage.beforeTitle}
              </p>
              <p className="text-gray-300 leading-relaxed">{knowledgeDetailPage.beforeText}</p>
            </div>
          }
          rightContent={
            <div className="p-6 rounded-xl border border-brand/20 bg-brand/5">
              <p className="text-xs uppercase tracking-wider text-brand/80 mb-2">
                {knowledgeDetailPage.afterTitle}
              </p>
              <p className="text-gray-200 leading-relaxed">{knowledgeDetailPage.afterText}</p>
            </div>
          }
          columnRatio="equal"
          padding="md"
        />
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
