import type { ReactNode } from 'react'
import { typography, colors } from '@/lib/design-tokens'

interface ServiceBannerSectionProps {
  title: string
  description: string
  imageSrc: string
  children?: ReactNode
}

/**
 * サービス詳細ページ用 — デスクトップで parallax-bg（fixed）、モバイルは scroll
 */
export function ServiceBannerSection({
  title,
  description,
  imageSrc,
  children,
}: ServiceBannerSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand bg-[var(--site-bg)]">
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-center opacity-40 parallax-bg md:block"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 parallax-bg md:hidden"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[var(--site-bg)]/50 z-0" aria-hidden />

      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand to-brand-hover bg-clip-text text-transparent">
              {title}
            </h2>
            <p className={`${typography.bodyLarge} ${colors.text.muted} mb-6`}>
              {description}
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
