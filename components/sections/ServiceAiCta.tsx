'use client'

import Link from 'next/link'
import { getServiceLabel } from '@/data/services/service-links'

interface ServiceAiCtaProps {
  serviceId: string
  className?: string
}

export function ServiceAiCta({ serviceId, className = '' }: ServiceAiCtaProps) {
  const serviceLabel = getServiceLabel(serviceId)

  return (
    <div
      className={`bg-[var(--service-cta-tint)] ${className}`.trim()}
    >
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-bold text-[var(--site-fg)] md:text-3xl">
          この内容について相談できます
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[var(--site-fg-muted)]">
          要件が固まっていなくても構いません。お問い合わせからご相談ください。概算だけ先に見ることもできます。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`/contact?service=${serviceId}`}
            className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-4 text-lg font-bold text-[var(--df-on-primary)] transition-all hover:scale-[1.02] hover:bg-brand-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]"
          >
            {serviceLabel}のお問い合わせ
          </Link>
        </div>
        <p className="mt-6">
          <Link
            href="/estimate"
            className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            概算の感触を先に見る →
          </Link>
        </p>
      </div>
    </div>
  )
}
