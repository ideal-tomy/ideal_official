type ServiceSectionHeaderProps = {
  kicker?: string
  title?: string
  lead?: string
  align?: 'left' | 'center'
  onBand?: boolean
  className?: string
  /** h3 = サービス内サブセクション見出し */
  headingLevel?: 'h2' | 'h3'
  /** feature = 製作タブ内の主セクション（大きめ見出し） */
  emphasis?: 'default' | 'feature'
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
  emphasis = 'default',
}: ServiceSectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const titleClass = onBand
    ? 'text-[var(--service-band-fg)]'
    : 'text-[var(--site-fg)]'
  const leadClass = onBand
    ? 'text-[var(--service-band-muted)]'
    : 'text-[var(--site-fg-muted)]'
  const kickerClass = onBand ? 'text-brand' : 'text-brand/90'

  const h2Class =
    emphasis === 'feature'
      ? 'text-[clamp(1.75rem,5.6vw,2.75rem)] font-black leading-[1.2] tracking-[0.01em]'
      : 'text-3xl font-bold tracking-[0.02em] md:text-4xl'

  const h3Class =
    emphasis === 'feature'
      ? 'text-[clamp(1.5rem,3.8vw,2.125rem)] font-black leading-[1.25] tracking-[0.01em]'
      : 'text-xl font-semibold tracking-[0.01em] md:text-2xl'

  return (
    <header className={`${alignClass} ${className}`.trim()}>
      {kicker ? (
        <p
          className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] ${kickerClass} md:mb-3 md:text-xs`}
        >
          {kicker}
        </p>
      ) : null}
      {title ? (
        headingLevel === 'h3' ? (
          <h3 className={`${h3Class} ${titleClass}`}>{title}</h3>
        ) : (
          <h2 className={`${h2Class} ${titleClass}`}>{title}</h2>
        )
      ) : null}
      {lead ? (
        <p
          className={`mt-3 max-w-2xl leading-relaxed md:mt-4 ${leadClass} ${
            align === 'center' ? 'mx-auto' : ''
          } ${
            emphasis === 'feature'
              ? 'max-w-lg text-xs md:text-sm'
              : 'text-sm md:text-base'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  )
}
