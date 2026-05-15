'use client'

import Link from 'next/link'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { colors, typography } from '../../lib/design-tokens'
import { getServiceLabel } from '../../data/services/service-links'

interface ServiceAiCtaProps {
  serviceId: string
  className?: string
}

export function ServiceAiCta({ serviceId, className = '' }: ServiceAiCtaProps) {
  const serviceLabel = getServiceLabel(serviceId)

  return (
    <div className={`border-b border-blue-400 bg-black ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className={`${typography.h3} ${colors.text.primary} mb-3`}>
          AIコンシェルジュに相談する
        </h2>
        <p className={`${typography.body} ${colors.text.muted} mb-8 max-w-2xl mx-auto`}>
          要件がまとまっていなくても大丈夫です。選択内容を整理したうえで、お問い合わせに引き継げます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <OpenConciergeButton serviceId={serviceId} variant="primary" size="lg">
            AIコンシェルジュに相談する
          </OpenConciergeButton>
          <Link
            href={`/contact?service=${serviceId}`}
            className="
              inline-flex items-center justify-center rounded-lg
              bg-cyan-500 px-8 py-4 text-lg font-bold text-white
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:bg-cyan-600 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
            "
          >
            {serviceLabel}のお問い合わせ
          </Link>
        </div>
      </div>
    </div>
  )
}
