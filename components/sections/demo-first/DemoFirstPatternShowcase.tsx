import { getTopFeaturedDemos } from '@/data/demo-first/top-featured-demos'
import { contentLeadBare } from '@/lib/content-typography'
import { DemoFirstHashScroll } from './DemoFirstHashScroll'
import { TopFeaturedDemoShowcase } from './TopFeaturedDemoShowcase'

/** TOP — 代表デモ8枚（サンプルで体験できるものだけ） */
export function DemoFirstPatternShowcase() {
  const demos = getTopFeaturedDemos()

  return (
    <section
      id="demos"
      className="overflow-x-clip bg-[var(--df-bg-blue)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <DemoFirstHashScroll />
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <h2 className="mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-6">
          動くデモで確かめる。
        </h2>
      </div>

      <TopFeaturedDemoShowcase demos={demos} />
    </section>
  )
}
