type ServiceSectionHeaderProps = {
  kicker?: string
  title?: string
  lead?: string
  align?: 'left' | 'center'
  onBand?: boolean
  className?: string
  /** h3 = サービス内サブセクション見出し */
  headingLevel?: 'h2' | 'h3'
}

/**
 * サービス系セクション見出し（タイポ統一）
 */
export function ServiceSectionHeader({
  kicker,
  title,
  lead,
  align = 'center',
  onBand = false,
  className = '',
  headingLevel = 'h2',
}: ServiceSectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const titleClass = onBand
    ? 'text-[var(--service-band-fg)]'
    : 'text-[var(--site-fg)]'
  const leadClass = onBand
    ? 'text-[var(--service-band-muted)]'
    : 'text-[var(--site-fg-muted)]'
  const kickerClass = onBand ? 'text-brand' : 'text-brand/90'

  return (
    <header className={`${alignClass} ${className}`.trim()}>
      {kicker ? (
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-[0.18em] ${kickerClass}`}
        >
          {kicker}
        </p>
      ) : null}
      {title ? (
        headingLevel === 'h3' ? (
          <h3
            className={`text-xl font-semibold tracking-[0.01em] md:text-2xl ${titleClass}`}
          >
            {title}
          </h3>
        ) : (
          <h2
            className={`text-3xl font-bold tracking-[0.02em] md:text-4xl ${titleClass}`}
          >
            {title}
          </h2>
        )
      ) : null}
      {lead ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${leadClass} ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  )
}
