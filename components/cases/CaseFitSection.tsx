import type { CaseStudy } from '@/data/cases'
import { CaseFoldSection } from '@/components/cases/CaseFoldSection'

type CaseFitSectionProps = {
  fit: CaseStudy['fit']
}

export function CaseFitSection({ fit }: CaseFitSectionProps) {
  return (
    <CaseFoldSection eyebrow="Fit" title="向いている／向いていない">
      <p className="mb-5 text-sm leading-relaxed text-[var(--site-fg)]/85 md:mb-8 md:text-base">
        無理に当てはめないための目安です。迷ったら相談で一緒に切り分けできます。
      </p>

      <div className="grid gap-3 md:grid-cols-2 md:gap-5">
        <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4 md:rounded-2xl md:p-6">
          <p className="mb-3 text-sm font-semibold text-emerald-300 md:mb-4">
            向いている
          </p>
          <ul className="space-y-2.5 md:space-y-3">
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

        <div className="rounded-xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] p-4 md:rounded-2xl md:p-6">
          <p className="mb-3 text-sm font-semibold text-[var(--site-fg)]/80 md:mb-4">
            向いていない・別の整理が先
          </p>
          <ul className="space-y-2.5 md:space-y-3">
            {fit.notIdealFor.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-[var(--site-fg)]/80"
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
    </CaseFoldSection>
  )
}
