import Link from 'next/link'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { getTopFeaturedDemos } from '@/data/demo-first/top-featured-demos'
import { contentLeadBare } from '@/lib/content-typography'
import { SectionKicker } from './SectionKicker'
import { TopFeaturedDemoShowcase } from './TopFeaturedDemoShowcase'

/** TOP §02 — 代表デモ4枚（サンプル完走できるものだけ） */
export function DemoFirstPatternShowcase() {
  const demos = getTopFeaturedDemos()

  return (
    <section
      id="demos"
      className="bg-[var(--df-bg-blue)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <SectionKicker index="02" label="デモ" />
        <h2 className="my-2 mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-6">
          資料ではなく、
          <br className="hidden md:inline" />
          動くデモで確かめる。
        </h2>
        <p className={`mb-6 max-w-[640px] md:mb-8 ${contentLeadBare}`}>
          サンプルデータで完走できるデモです。右の動きはイメージ再生、本編は「サンプルで体験」から辿れます。
        </p>
      </div>

      <TopFeaturedDemoShowcase demos={demos} />

      <div className="mx-auto mt-8 flex w-[min(100%-48px,1080px)] justify-center md:mt-10">
        <Link
          href={GALLERY_BASE}
          className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] border border-[var(--site-border)] bg-[var(--df-bg)] px-7 py-3.5 font-bold text-[var(--df-text)] transition-colors hover:border-[var(--df-primary)]/45 hover:text-[var(--df-primary)]"
        >
          能力パターン一覧へ
        </Link>
      </div>
    </section>
  )
}
