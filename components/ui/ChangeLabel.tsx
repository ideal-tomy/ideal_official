/**
 * 「VOICE → STRUCTURED DATA」形式のラベル。
 * 矢印だけブランド赤にして「変化が起きる場所」を示す。
 */
export function ChangeLabel({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  const parts = label.split(/\s*→\s*/)
  if (parts.length < 2) {
    return (
      <span className={`tracking-[0.18em] text-[var(--site-fg-muted)] ${className}`}>{label}</span>
    )
  }

  return (
    <span className={`tracking-[0.18em] text-[var(--site-fg-muted)] ${className}`}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && <span className="mx-1.5 text-brand font-medium">→</span>}
          {part}
        </span>
      ))}
    </span>
  )
}
