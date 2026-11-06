import Link from 'next/link'
import { howWeWorkTopBand } from '@/data/how-we-work'

/** TOP — デモの直後に置く、導入の流れへの短い帯 */
export function DemoFirstFlowBand() {
  return (
    <section
      aria-label="導入の流れ"
      className="border-y border-[var(--site-border)] bg-[var(--df-bg)] py-8 md:py-10"
    >
      <div className="mx-auto flex w-[min(100%-48px,1080px)] flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-base font-bold leading-relaxed text-[var(--df-text)] [word-break:keep-all] md:text-lg">
          {howWeWorkTopBand.text}
        </p>
        <Link
          href={howWeWorkTopBand.link.href}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-6 py-3 text-sm font-bold text-[var(--df-on-primary)] transition-colors hover:bg-[var(--df-primary-hover)] md:text-base"
        >
          {howWeWorkTopBand.link.label}
        </Link>
      </div>
    </section>
  )
}
