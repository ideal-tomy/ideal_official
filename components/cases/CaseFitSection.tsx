import type { CaseStudy } from '@/data/cases'

type CaseFitSectionProps = {
  fit: CaseStudy['fit']
}

export function CaseFitSection({ fit }: CaseFitSectionProps) {
  return (
    <section className="border-b border-[var(--site-border)] py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          Fit
        </p>
        <h2 className="mb-3 text-2xl font-bold text-[var(--site-fg)] md:text-3xl">
          向いている／向いていない
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
          無理に当てはめないための目安です。迷ったら相談で一緒に切り分けできます。
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5 md:p-6">
            <p className="mb-4 text-sm font-semibold text-emerald-300">
              向いている
            </p>
            <ul className="space-y-3">
              {fit.goodFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-[var(--site-fg)]/90"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] p-5 md:p-6">
            <p className="mb-4 text-sm font-semibold text-[var(--site-fg-muted)]">
              向いていない・別の整理が先
            </p>
            <ul className="space-y-3">
              {fit.notIdealFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-[var(--site-fg-muted)]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--site-fg-muted)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
