/** LAB の各セクション見出し。見出しは行の配列で持ち、意味の切れ目だけで改行する */
export function LabSectionHead({
  eyebrow,
  lines,
  lead,
  align = 'center',
  as = 'h2',
}: {
  eyebrow: string
  lines: readonly string[]
  lead?: string
  align?: 'center' | 'start'
  as?: 'h1' | 'h2'
}) {
  const Title = as
  const start = align === 'start'

  return (
    <header className={start ? 'max-w-3xl' : 'mx-auto max-w-3xl text-center'}>
      <p
        className={`flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.22em] text-[var(--site-fg-muted)] before:h-px before:w-6 before:shrink-0 before:bg-current ${
          start
            ? ''
            : 'justify-center after:h-px after:w-6 after:shrink-0 after:bg-current'
        }`}
      >
        {eyebrow}
      </p>
      <Title
        className={`font-extrabold tracking-[0.02em] text-[var(--site-fg)] [word-break:keep-all] [overflow-wrap:anywhere] ${
          as === 'h1'
            ? 'mt-4 text-[clamp(28px,4.5vw,40px)] leading-[1.45]'
            : 'mt-3 text-[clamp(22px,6vw,34px)] leading-[1.5]'
        }`}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </Title>
      {lead && (
        <p className="mt-5 max-w-3xl text-[0.9375rem] leading-[1.9] text-[var(--site-fg-muted)] [word-break:keep-all] [overflow-wrap:anywhere] md:text-base">
          {lead}
        </p>
      )}
    </header>
  )
}
