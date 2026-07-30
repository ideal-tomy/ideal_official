import Image from 'next/image'
import Link from 'next/link'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { hubServices } from '@/data/services/hub'

export function ServiceCardGrid() {
  return (
    <ServiceSectionShell
      id="services"
      surface="default"
      title="事業を加速するデジタルプロダクト"
      lead="Web・業務ツール・AIまで。触って確かめてから開発するデモファーストの支援です。"
      maxWidth="6xl"
    >
      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {hubServices.map((service) => (
          <article
            key={service.id}
            className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] shadow-[var(--service-card-shadow)] transition-transform hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={service.image}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                aria-hidden
              />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="text-lg font-bold text-[var(--site-fg)] md:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand/25 bg-brand/10 px-2 py-0.5 text-[11px] font-medium text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={service.href}
                className="mt-5 inline-flex items-center text-sm font-bold text-brand transition-colors hover:text-brand-hover"
              >
                詳細を見る →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </ServiceSectionShell>
  )
}
