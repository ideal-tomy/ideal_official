import { MARQUEE_CHIPS } from '@/data/demo-first/top-page'

export function DemoFirstMarquee() {
  const chips = [...MARQUEE_CHIPS, ...MARQUEE_CHIPS]

  return (
    <div
      className="df-marquee overflow-hidden border-y border-[var(--df-marquee-chip-border)] bg-[var(--df-marquee-band)] py-5 pb-8"
      aria-hidden
    >
      <div className="df-marquee-track flex w-max gap-3.5">
        {chips.map((chip, i) => (
          <span
            key={`${chip.industry}-${chip.demo}-${i}`}
            className="shrink-0 whitespace-nowrap rounded-full border border-[var(--df-marquee-chip-border)] bg-[var(--df-marquee-chip)] px-5 py-2 text-[13px] font-bold text-[var(--df-marquee-label)] shadow-[0_1px_0_color-mix(in_srgb,var(--df-text)_6%,transparent)]"
          >
            {chip.industry} ×{' '}
            <b className="font-bold text-[var(--df-marquee-topic)]">{chip.demo}</b>
          </span>
        ))}
      </div>
    </div>
  )
}
