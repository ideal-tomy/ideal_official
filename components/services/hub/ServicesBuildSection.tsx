import Image from 'next/image'
import Link from 'next/link'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import {
  galleryDemoHref,
  getServicesFeaturedCapabilities,
} from '@/data/services/ai-hub'
import { hubServices, servicesBuildCopy } from '@/data/services/hub'

function BuildPreviewImage({
  src,
  alt,
}: {
  src?: string
  alt: string
}) {
  if (src) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--site-bg-elevated)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
    )
  }

  return (
    <div
      className="flex aspect-[16/10] w-full items-center justify-center bg-[#F4F5F7] text-xs text-[var(--site-fg-muted)]"
      aria-hidden
    >
      完成イメージ（準備中）
    </div>
  )
}

export function ServicesBuildSection() {
  const demos = getServicesFeaturedCapabilities()

  return (
    <>
      <ServiceSectionShell
        id="build"
        surface="default"
        kicker="BUILD"
        title={servicesBuildCopy.heading}
        lead={servicesBuildCopy.lead}
        align="left"
        emphasis="feature"
        maxWidth="6xl"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {hubServices.map((service) => (
            <article
              key={service.id}
              id={service.buildAnchor}
              className="scroll-mt-28 flex flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] shadow-[var(--service-card-shadow)]"
            >
              <BuildPreviewImage src={service.image} alt={service.title} />
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-lg font-bold text-[var(--site-fg)] md:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
                  {service.description}
                </p>
                {service.tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[var(--site-border)] px-2.5 py-0.5 text-[11px] text-[var(--site-fg-muted)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href={service.contactHref}
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-[var(--df-on-primary)] transition-colors hover:bg-brand-hover"
                >
                  相談する
                </Link>
              </div>
            </article>
          ))}
        </div>
      </ServiceSectionShell>

      <ServiceSectionShell
        id="build-demos"
        tone="interactive"
        title="ここで触ってみる"
        lead="サンプルデータで完走できるデモです。自社に近いパターンから、AI活用のイメージを掴めます。"
        align="left"
        emphasis="feature"
        contentBleed
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {demos.map((capability, index) => {
            const step = String(index + 1).padStart(2, '0')
            return (
              <Link
                key={capability.id}
                href={galleryDemoHref(capability.slug)}
                className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-5 transition-colors hover:border-brand/35 hover:shadow-[var(--service-card-shadow)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/90">
                  {step} · {capability.subtitle}
                </p>
                <h3 className="mt-2 text-base font-bold leading-snug text-[var(--site-fg)]">
                  {capability.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
                  {capability.showcaseLead}
                </p>
                <p className="mt-4 text-sm font-bold text-brand">デモを開く →</p>
              </Link>
            )
          })}
        </div>

        <p className="mt-8 text-left text-sm">
          <Link
            href="/flow"
            className="inline-flex items-center font-medium text-brand transition-colors hover:text-brand-hover"
          >
            7パターンすべて見る →
          </Link>
        </p>
      </ServiceSectionShell>
    </>
  )
}
