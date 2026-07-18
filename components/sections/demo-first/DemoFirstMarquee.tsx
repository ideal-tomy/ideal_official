import { MARQUEE_CHIPS } from '@/data/demo-first/top-page'

export function DemoFirstMarquee() {
  const chips = [...MARQUEE_CHIPS, ...MARQUEE_CHIPS]

  return (
    <div
      className="df-marquee overflow-hidden bg-[var(--df-bg)] py-6 pb-12"
      aria-hidden
    >
      <div className="df-marquee-track flex w-max gap-3.5">
        {chips.map((chip, i) => (
          <span
            key={`${chip.industry}-${chip.demo}-${i}`}
            className="shrink-0 whitespace-nowrap rounded-full border border-[var(--df-bg-blue-2)] bg-[var(--df-bg-card)] px-5 py-2 text-[13px] font-bold text-[var(--df-primary-deep)]"
          >
            {chip.industry} ×{' '}
            <b className="font-bold text-[var(--df-primary)]">{chip.demo}</b>
          </span>
        ))}
      </div>
    </div>
  )
}
