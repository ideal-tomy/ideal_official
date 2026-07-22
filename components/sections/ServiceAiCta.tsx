'use client'

import Link from 'next/link'
import { colors, typography } from '../../lib/design-tokens'
import { getServiceLabel } from '../../data/services/service-links'

interface ServiceAiCtaProps {
  serviceId: string
  className?: string
}

export function ServiceAiCta({ serviceId, className = '' }: ServiceAiCtaProps) {
  const serviceLabel = getServiceLabel(serviceId)

  return (
    <div className={`border-b border-brand bg-black ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className={`${typography.h3} ${colors.text.primary} mb-3`}>
          この内容について相談できます
        </h2>
        <p className={`${typography.body} ${colors.text.muted} mb-8 max-w-2xl mx-auto`}>
          要件が固まっていなくても構いません。お問い合わせからご相談ください。概算だけ先に見ることもできます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/contact?service=${serviceId}`}
            className="
              inline-flex items-center justify-center rounded-lg
              bg-brand px-8 py-4 text-lg font-bold text-white
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:bg-brand-hover active:scale-95
              focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-black
            "
          >
            {serviceLabel}のお問い合わせ
          </Link>
        </div>
        <p className="mt-6">
          <Link
            href="/estimate"
            className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            概算の感触を先に見る →
          </Link>
        </p>
      </div>
    </div>
  )
}
