'use client'

import Link from 'next/link'
import {
  CapabilityShowcaseDemo,
  type CapabilityShowcaseSlug,
} from '@/components/ai-capability-gallery/showcases/CapabilityShowcaseDemo'
import { useInViewAutoPlay } from '@/components/ai-capability-gallery/hooks/useInViewAutoPlay'
import { AsymmetricFeatureGrid } from '@/components/services/AsymmetricFeatureGrid'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import {
  galleryDemoHref,
  getServicesFeaturedCapabilities,
} from '@/data/services/ai-hub'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

function CompactShowcase({ slug }: { slug: CapabilityShowcaseSlug }) {
  const { ref, isInView } = useInViewAutoPlay()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg bg-[#F4F5F7]"
      aria-hidden
    >
      <div className="pointer-events-none absolute left-1/2 top-0 w-[640px] origin-top -translate-x-1/2 scale-[0.38]">
        <CapabilityShowcaseDemo slug={slug} playWhen={isInView} />
      </div>
    </div>
  )
}

function DemoPanel({
  capability,
  featured = false,
}: {
  capability: Capability
  featured?: boolean
}) {
  const slug = capability.slug as CapabilityShowcaseSlug

  return (
    <div
      className={`flex h-full min-h-0 flex-col ${
        featured
          ? 'overflow-hidden rounded-2xl border-2 border-brand/20 bg-[var(--site-bg)]'
          : 'rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6'
      }`}
    >
      {featured ? (
        <div className="min-h-[220px] flex-1 border-b border-[var(--site-border)] bg-[#F4F5F7] p-3 sm:p-4">
          <CapabilityShowcaseDemo slug={slug} />
        </div>
      ) : (
        <CompactShowcase slug={slug} />
      )}

      <div className={featured ? 'flex flex-col p-5 md:p-6' : 'flex flex-1 flex-col'}>
        <p className="mb-2 text-xs font-medium text-brand/90">
          {capability.subtitle}
        </p>
        <h3
          className={`mb-2 font-bold text-[var(--site-fg)] ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}
        >
          {capability.title}
        </h3>
        <p className="mb-3 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
          {capability.showcaseLead}
        </p>
        <p className="mb-4 text-xs leading-relaxed text-[var(--site-fg-muted)]">
          {capability.before}
          <span className="mx-1.5 font-bold">→</span>
          <span className="font-medium text-[var(--site-fg)]">{capability.after}</span>
        </p>
        <Link
          href={galleryDemoHref(capability.slug)}
          className="inline-flex items-center text-sm font-bold text-brand transition-colors hover:text-brand-hover"
        >
          デモを開く →
        </Link>
      </div>
    </div>
  )
}

export function AiInteractionShowcase() {
  const demos = getServicesFeaturedCapabilities()
  const primary = demos[0]
  const secondaryA = demos[1]
  const secondaryB = demos[2]

  if (!primary || !secondaryA || !secondaryB) return null

  return (
    <ServiceSectionShell
      tone="interactive"
      title="ここで触ってみる"
      align="left"
      emphasis="feature"
      contentBleed
    >
      <AsymmetricFeatureGrid
        primary={<DemoPanel capability={primary} featured />}
        secondary={[
          <DemoPanel key={secondaryA.id} capability={secondaryA} />,
          <DemoPanel key={secondaryB.id} capability={secondaryB} />,
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
    </ServiceSectionShell>
  )
}
