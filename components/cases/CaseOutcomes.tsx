type CaseOutcomesProps = {
  outcomes: string[]
}

export function CaseOutcomes({ outcomes }: CaseOutcomesProps) {
  if (outcomes.length === 0) return null

  return (
    <section className="border-b border-[var(--site-border)] py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          Outcomes
        </p>
        <h2 className="mb-8 text-2xl font-bold text-[var(--site-fg)] md:text-3xl">
          何が変わるか
        </h2>
        <ol className="space-y-5">
          {outcomes.map((item, index) => (
            <li key={item} className="flex gap-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand"
                aria-hidden
              >
                {index + 1}
              </span>
              <p className="pt-1 text-base leading-relaxed text-[var(--site-fg)]/90 md:text-lg">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
