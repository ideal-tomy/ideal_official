import Link from 'next/link'
import { CapabilityPatternShowcase } from '@/components/ai-capability-gallery/CapabilityPatternShowcase'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { SectionKicker } from './SectionKicker'

type Props = {
  capabilities: Capability[]
}

/** TOP §03 — 体験・デモ */
export function DemoFirstPatternShowcase({ capabilities }: Props) {
  return (
    <section
      id="demos"
      className="bg-[var(--df-bg-blue)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <SectionKicker index="03" label="体験・デモ" />
        <h2 className="my-2 mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-6">
          資料ではなく、
          <br className="hidden md:inline" />
          動くデモで確かめる。
        </h2>
        <p className="mb-6 max-w-[640px] text-[var(--df-text)] md:mb-8">
          業務課題から生まれた開発デモです。パターンを見比べて、近いものから触ってください。
        </p>
      </div>

      <CapabilityPatternShowcase
        capabilities={capabilities}
        experienceCtaLabel="触ってみる →"
        variant="top"
      />

      <div className="mx-auto mt-8 w-[min(100%-48px,1080px)] flex justify-center md:mt-10">
        <Link
          href={GALLERY_BASE}
          className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] border border-[var(--site-border)] bg-[var(--df-bg)] px-7 py-3.5 font-bold text-[var(--df-text)] transition-colors hover:border-[var(--df-primary)]/45 hover:text-[var(--df-primary)]"
        >
          すべてのパターン一覧へ
        </Link>
      </div>
    </section>
  )
}
