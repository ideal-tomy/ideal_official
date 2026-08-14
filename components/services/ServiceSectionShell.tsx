import type { ReactNode } from 'react'
import { ServiceSectionHeader } from '@/components/services/ServiceSectionHeader'

export type ServiceSurface = 'default' | 'elevated' | 'band' | 'cta'

/** interactive = 触れるデモ帯 / technical = 畳める技術詳細 */
export type ServiceSectionTone = 'default' | 'interactive' | 'technical'

type ServiceSectionShellProps = {
  children: ReactNode
  surface?: ServiceSurface
  tone?: ServiceSectionTone
  id?: string
  className?: string
  /** 内側コンテナ幅 */
  maxWidth?: '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  kicker?: string
  title?: string
  lead?: string
  align?: 'left' | 'center'
  headingLevel?: 'h2' | 'h3'
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
const toneClass: Record<ServiceSectionTone, string> = {
  default: '',
  interactive:
    'border-y border-brand/15 bg-[color-mix(in_srgb,var(--color-brand)_5%,var(--site-bg))]',
  technical: '',
}

const toneMaxWidth: Partial<
  Record<ServiceSectionTone, ServiceSectionShellProps['maxWidth']>
> = {
  interactive: '7xl',
  technical: '3xl',
}

const tonePadding: Record<ServiceSectionTone, string> = {
  default: 'py-16 lg:py-20',
  interactive: 'py-12 lg:py-16',
  technical: 'py-10 lg:py-12',
}

export function ServiceSectionShell({
  children,
  surface = 'default',
  tone = 'default',
  id,
  className = '',
  maxWidth,
  kicker,
  title,
  lead,
  align = 'center',
  headingLevel,
  padded = true,
}: ServiceSectionShellProps) {
  const isBand = surface === 'band'
  const resolvedMaxWidth = maxWidth ?? toneMaxWidth[tone] ?? '6xl'
  const resolvedHeadingLevel =
    headingLevel ?? (tone === 'default' && title ? 'h2' : tone !== 'default' ? 'h3' : 'h2')

  return (
    <section
      id={id}
      className={`${surfaceClass[surface]} ${toneClass[tone]} ${padded ? tonePadding[tone] : ''} ${id ? 'scroll-mt-28' : ''} ${className}`.trim()}
    >
      <div
        className={`mx-auto ${maxWidthClass[resolvedMaxWidth]} px-4 sm:px-6 lg:px-8`}
      >
        {(title || lead || kicker) && (
          <ServiceSectionHeader
            kicker={kicker}
            title={title}
            lead={lead}
            align={align}
            onBand={isBand}
            headingLevel={resolvedHeadingLevel}
            className={tone === 'technical' ? 'mb-6 md:mb-8' : 'mb-10 md:mb-12'}
          />
        )}
        {children}
      </div>
    </section>
  )
}
