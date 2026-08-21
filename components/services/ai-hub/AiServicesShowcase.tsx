'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { KnowledgeToSearchDemo } from '@/components/ai-capability-gallery/demos/KnowledgeToSearchDemo'
import { PhotoToClassificationDemo } from '@/components/ai-capability-gallery/demos/PhotoToClassificationDemo'
import { VoiceToStructuredDemo } from '@/components/ai-capability-gallery/demos/VoiceToStructuredDemo'
import { AsymmetricFeatureGrid } from '@/components/services/AsymmetricFeatureGrid'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import {
  getServicesFeaturedCapabilities,
  servicesFeaturedDemoSlugs,
} from '@/data/services/ai-hub'

type ServicesDemoSlug = (typeof servicesFeaturedDemoSlugs)[number]

function EmbeddedAiDemo({ slug }: { slug: ServicesDemoSlug }) {
  switch (slug) {
    case 'voice-to-structured':
      return <VoiceToStructuredDemo />
    case 'knowledge-to-search':
      return <KnowledgeToSearchDemo />
    case 'photo-to-classification':
      return <PhotoToClassificationDemo />
    default:
      return null
  }
}

function DemoPickerCard({
  capability,
  index,
  onSelect,
}: {
  capability: Capability
  index: number
  onSelect: () => void
}) {
  const step = String(index + 1).padStart(2, '0')

  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6 text-left transition-colors hover:border-brand/35 hover:shadow-[var(--service-card-shadow)]"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/90">
        {step} · {capability.subtitle}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-[var(--site-fg)]">
        {capability.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
        {capability.showcaseLead}
      </p>
      <p className="mt-4 text-sm font-bold text-brand">このデモを表示 →</p>
    </button>
  )
}

function EmbeddedDemoPanel({ slug }: { slug: ServicesDemoSlug }) {
  const capability = getServicesFeaturedCapabilities().find((c) => c.slug === slug)
  const stepIndex = servicesFeaturedDemoSlugs.indexOf(slug)
  const step = stepIndex >= 0 ? String(stepIndex + 1).padStart(2, '0') : '01'

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-brand/20 bg-[var(--site-bg)]">
      <div className="border-b border-[var(--site-border)] p-5 md:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/90">
          {step} · {capability?.subtitle}
        </p>
        <h3 className="mt-2 text-xl font-bold text-[var(--site-fg)] md:text-2xl">
          {capability?.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
          {capability?.showcaseLead}
        </p>
      </div>
      <div className="min-h-0 flex-1 overflow-auto border-t border-[var(--site-border)] bg-[color-mix(in_srgb,var(--color-brand)_4%,var(--site-bg))] p-3 sm:p-4 md:p-5">
        <EmbeddedAiDemo slug={slug} />
      </div>
    </div>
  )
}

export function AiServicesShowcaseContent() {
  const demos = getServicesFeaturedCapabilities()
  const [selectedSlug, setSelectedSlug] = useState<ServicesDemoSlug>(
    servicesFeaturedDemoSlugs[0],
  )

  const pickers = useMemo(
    () => demos.filter((demo) => demo.slug !== selectedSlug),
    [demos, selectedSlug],
  )

  const pickerEntries = pickers.map((capability) => ({
    capability,
    index: servicesFeaturedDemoSlugs.indexOf(
      capability.slug as ServicesDemoSlug,
    ),
  }))

  const [pickerA, pickerB] = pickerEntries

  if (!pickerA || !pickerB) {
    return (
      <EmbeddedDemoPanel slug={selectedSlug} />
    )
  }

  return (
    <>
      <AsymmetricFeatureGrid
        primary={<EmbeddedDemoPanel slug={selectedSlug} />}
        secondary={[
          <DemoPickerCard
            key={pickerA.capability.id}
            capability={pickerA.capability}
            index={pickerA.index}
            onSelect={() =>
              setSelectedSlug(pickerA.capability.slug as ServicesDemoSlug)
            }
          />,
          <DemoPickerCard
            key={pickerB.capability.id}
            capability={pickerB.capability}
            index={pickerB.index}
            onSelect={() =>
              setSelectedSlug(pickerB.capability.slug as ServicesDemoSlug)
            }
          />,
        ]}
      />

      <p className="mt-8 text-left text-sm">
        <Link
          href="/flow"
          className="inline-flex items-center font-medium text-brand transition-colors hover:text-brand-hover"
        >
          7パターンすべて見る →
        </Link>
      </p>
    </>
  )
}
