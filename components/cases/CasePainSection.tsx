import type { CaseStudy } from '@/data/cases'

type CasePainSectionProps = {
  pain: CaseStudy['pain']
}

export function CasePainSection({ pain }: CasePainSectionProps) {
  return (
    <section className="border-b border-[var(--site-border)] py-8 md:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:mb-4">
          Pain
        </p>
        <h2
          title={pain.headline}
          className="mb-3 whitespace-nowrap text-[clamp(0.8125rem,3.5vw,1.875rem)] font-bold leading-none tracking-tight text-[var(--site-fg)] md:mb-5"
        >
          {pain.headline}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--site-fg)]/90 md:text-base">
          {pain.body}
        </p>
      </div>
    </section>
  )
}
