import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import {
  galleryDemoHref,
  getServicesFeaturedCapabilities,
} from '@/data/services/ai-hub'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

function DemoPanel({
  capability,
  index,
}: {
  capability: Capability
  index: number
}) {
  const step = String(index + 1).padStart(2, '0')

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] shadow-[var(--service-card-shadow)]">
      <div className="relative aspect-[16/10] w-full shrink-0 border-b border-[var(--site-border)]">
        <ThemeImage
          src={capability.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
          aria-hidden
        />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1">
          {capability.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="mb-2 text-xs tracking-[0.16em] text-brand/90">
          <span className="rounded-full bg-brand/10 px-2 py-0.5">
            {step} · {capability.subtitle}
          </span>
        </p>
        <h3 className="mb-2 text-lg font-semibold text-[var(--site-fg)] md:text-xl">
          {capability.title}
        </h3>
        <p className="mb-3 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
          {capability.showcaseLead}
        </p>
        <p className="mb-4 text-xs leading-relaxed text-brand/90">
          {capability.before}
          <span className="mx-1.5 font-bold text-[var(--site-fg-muted)]">→</span>
          {capability.after}
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

  return (
    <ServiceSectionShell tone="interactive" title="ここで触ってみる">
      <div className="grid gap-5 md:grid-cols-3">
        {demos.map((capability, index) => (
          <DemoPanel key={capability.id} capability={capability} index={index} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/flow"
          className="inline-flex items-center text-sm font-medium text-brand transition-colors hover:text-brand-hover"
        >
          7パターンすべて見る →
        </Link>
      </div>
    </ServiceSectionShell>
  )
}
