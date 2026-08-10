import type { Cta } from '@/lib/demo-lp/types'

const base =
  'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

export function DemoLpCtaLink({
  cta,
  className = '',
}: {
  cta: Cta
  className?: string
}) {
  const variantCls =
    cta.variant === 'primary'
      ? 'bg-[var(--lp-primary)] text-white hover:opacity-90 focus-visible:outline-[var(--lp-primary)]'
      : cta.variant === 'secondary'
        ? 'border border-[var(--lp-ink)]/20 bg-white text-[var(--lp-ink)] hover:border-[var(--lp-primary)]/50 hover:bg-[var(--lp-surface)]'
        : 'text-[var(--lp-ink)]/80 underline-offset-4 hover:underline'

  const external =
    cta.href.startsWith('http') || cta.href.startsWith('//')
  const isAnchor = cta.href.startsWith('#')

  if (isAnchor) {
    return (
      <a href={cta.href} className={`${base} ${variantCls} ${className}`}>
        {cta.label}
      </a>
    )
  }

  if (external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variantCls} ${className}`}
      >
        {cta.label}
      </a>
    )
  }

  return (
    <a href={cta.href} className={`${base} ${variantCls} ${className}`}>
      {cta.label}
    </a>
  )
}
