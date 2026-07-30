import type { ReactNode } from 'react'
import { ServiceSectionHeader } from '@/components/services/ServiceSectionHeader'

export type ServiceSurface = 'default' | 'elevated' | 'band' | 'cta'

type ServiceSectionShellProps = {
  children: ReactNode
  surface?: ServiceSurface
  id?: string
  className?: string
  /** 内側コンテナ幅 */
  maxWidth?: '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  kicker?: string
  title?: string
  lead?: string
  align?: 'left' | 'center'
  /** false のとき上下 padding を付けない */
  padded?: boolean
}

const surfaceClass: Record<ServiceSurface, string> = {
  default: 'bg-[var(--site-bg)] text-[var(--site-fg)]',
  elevated: 'bg-[var(--site-bg-elevated)] text-[var(--site-fg)]',
  band: 'bg-[var(--service-band-bg)] text-[var(--service-band-fg)]',
  cta: 'bg-[var(--service-cta-tint)] text-[var(--site-fg)]',
}

const maxWidthClass = {
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
} as const

/**
 * サービス LP / 下層共通のセクション面シェル
 */
export function ServiceSectionShell({
  children,
  surface = 'default',
  id,
  className = '',
  maxWidth = '6xl',
  kicker,
  title,
  lead,
  align = 'center',
  padded = true,
}: ServiceSectionShellProps) {
  const isBand = surface === 'band'

  return (
    <section
      id={id}
      className={`${surfaceClass[surface]} ${padded ? 'py-16 lg:py-20' : ''} ${className}`.trim()}
    >
      <div
        className={`mx-auto ${maxWidthClass[maxWidth]} px-4 sm:px-6 lg:px-8`}
      >
        {(title || lead || kicker) && (
          <ServiceSectionHeader
            kicker={kicker}
            title={title}
            lead={lead}
            align={align}
            onBand={isBand}
            className="mb-10 md:mb-12"
          />
        )}
        {children}
      </div>
    </section>
  )
}
