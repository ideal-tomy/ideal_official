type SectionKickerProps = {
  index?: string
  label: string
  className?: string
  /** inverse = 濃色背景上（白文字） */
  tone?: 'brand' | 'inverse'
}

/** セクション入口マーカー（装飾 — Accent ではなく Muted） */
export function SectionKicker({
  index,
  label,
  className = '',
  tone = 'brand',
}: SectionKickerProps) {
  const toneClass =
    tone === 'inverse'
      ? 'text-white/85'
      : 'text-[var(--df-text-muted)]'

  return (
    <p
      className={`mb-2 text-xs font-bold uppercase tracking-[0.16em] md:mb-3 md:text-sm md:tracking-[0.12em] ${toneClass} ${className}`.trim()}
    >
      {index ? (
        <>
          <span
            className={`tabular-nums ${
              tone === 'inverse' ? 'text-white/55' : 'text-[var(--df-text-muted)]'
            }`}
          >
            {index}
          </span>
          <span
            className={`mx-2 ${
              tone === 'inverse' ? 'text-[var(--site-fg)]/40' : 'text-[var(--df-text-muted)]/60'
            }`}
            aria-hidden
          >
            —
          </span>
        </>
      ) : null}
      {label}
    </p>
  )
}
