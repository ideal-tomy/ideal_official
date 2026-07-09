import { Suspense } from 'react'
import type { Metadata } from 'next'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { WorkflowToAutomationDemo } from '@/components/ai-capability-gallery/demos/WorkflowToAutomationDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { workflowDetailPage } from '@/data/ai-capability-gallery/workflow-to-automation'

export const metadata: Metadata = {
  title: workflowDetailPage.metaTitle,
  description: workflowDetailPage.metaDescription,
  openGraph: {
    title: workflowDetailPage.metaTitle,
    description: workflowDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter((c) => c.slug !== workflowDetailPage.slug)

export default function WorkflowToAutomationPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: workflowDetailPage.slug,
          eyebrow: workflowDetailPage.eyebrow,
          title: workflowDetailPage.title,
          lead: workflowDetailPage.lead,
          tags: workflowDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <WorkflowToAutomationDemo />
        </section>
        <TwoColumnSection
          title="Before / After"
          leftContent={
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {workflowDetailPage.beforeTitle}
              </p>
              <p className="text-gray-300 leading-relaxed">{workflowDetailPage.beforeText}</p>
            </div>
          }
          rightContent={
            <div className="p-6 rounded-xl border border-brand/20 bg-brand/5">
              <p className="text-xs uppercase tracking-wider text-brand/80 mb-2">
                {workflowDetailPage.afterTitle}
              </p>
              <p className="text-gray-200 leading-relaxed">{workflowDetailPage.afterText}</p>
            </div>
          }
          columnRatio="equal"
          padding="md"
        />
      </AiCapabilityDetailShell>
    </Suspense>
  )
}
