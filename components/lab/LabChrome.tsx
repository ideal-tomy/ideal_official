import { HeroBackground } from '@/components/motion/HeroBackground'
import { labHero, labSections } from '@/data/lab/hub'

export function LabHubHero() {
  return (
    <section className="relative -mt-16 overflow-hidden px-0 pb-12 pt-28 text-[var(--site-fg)] md:mt-0 md:pb-16 md:pt-32">
      <HeroBackground />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="text-[13px] font-bold tracking-[0.12em] text-brand">LAB</p>
          <h1 className="mt-3 text-[clamp(1.75rem,5vw,3rem)] font-black leading-tight tracking-[0.02em] text-[var(--site-fg)]">
            {labHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-[var(--site-fg-muted)] md:text-base">
            {labHero.description}
          </p>
        </div>

        <nav aria-label="LABの内容">
          <ol className="divide-y divide-[var(--site-border)] overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] shadow-[var(--service-card-shadow)]">
            {labSections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="group flex gap-4 px-5 py-4 transition-colors hover:bg-[var(--site-bg-elevated)]"
                >
                  <span className="pt-0.5 text-sm font-black text-brand tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-[var(--site-fg)] group-hover:text-brand">
                      {section.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-[var(--site-fg-muted)]">
                      {section.description}
                    </span>
                  </span>
                  <span aria-hidden className="self-center text-brand">
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}

/** LAB の各セクション見出し。見出しは行の配列で持ち、意味の切れ目だけで改行する */
export function LabSectionHead({
  eyebrow,
  lines,
  lead,
}: {
  eyebrow: string
  lines: readonly string[]
  lead?: string
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="flex items-center justify-center gap-2.5 text-[13px] font-bold tracking-[0.12em] text-brand before:h-0.5 before:w-[22px] before:bg-current after:h-0.5 after:w-[22px] after:bg-current">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[clamp(22px,6vw,34px)] font-extrabold leading-[1.5] tracking-[0.02em] text-[var(--site-fg)] [word-break:keep-all] [overflow-wrap:anywhere]">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      {lead && (
        <p className="mt-5 text-[0.9375rem] leading-[1.9] text-[var(--site-fg-muted)] md:text-base">
          {lead}
        </p>
      )}
    </header>
  )
}
