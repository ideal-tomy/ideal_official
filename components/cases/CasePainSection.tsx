import type { CaseStudy } from '@/data/cases'

type CasePainSectionProps = {
  pain: CaseStudy['pain']
}

export function CasePainSection({ pain }: CasePainSectionProps) {
  return (
    <section className="border-b border-[var(--site-border)] py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          Pain
        </p>
        <p className="mb-4 text-sm text-[var(--site-fg-muted)]">
          誰が困るか — {pain.who}
        </p>
        <h2 className="mb-5 text-2xl font-bold leading-snug tracking-tight text-[var(--site-fg)] md:text-3xl">
          {pain.headline}
        </h2>
        <p className="text-base leading-relaxed text-[var(--site-fg-muted)] md:text-lg">
          {pain.body}
        </p>
      </div>
    </section>
  )
}
