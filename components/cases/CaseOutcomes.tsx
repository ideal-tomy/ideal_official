type CaseOutcomesProps = {
  outcomes: string[]
}

export function CaseOutcomes({ outcomes }: CaseOutcomesProps) {
  if (outcomes.length === 0) return null

  return (
    <section className="border-b border-[var(--site-border)] py-8 md:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-balance text-xl font-bold text-[var(--site-fg)] md:mb-8 md:text-3xl">
          何が変わるか
        </h2>
        <ol className="space-y-3.5 md:space-y-5">
          {outcomes.map((item, index) => (
            <li key={item} className="flex gap-3 md:gap-4">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand md:h-8 md:w-8 md:text-sm"
                aria-hidden
              >
                {index + 1}
              </span>
              <p className="pt-0.5 text-sm leading-relaxed text-[var(--site-fg)]/90 md:pt-1 md:text-base">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
