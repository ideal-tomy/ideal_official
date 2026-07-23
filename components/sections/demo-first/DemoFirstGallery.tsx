import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { RelatedPatternsMarquee } from '@/components/ai-capability-gallery/RelatedPatternsMarquee'
import { SectionKicker } from './SectionKicker'

type Props = {
  items: Capability[]
}

/** 04—デモ一覧：画像付きパターンカルーセル（他のパターンと同型） */
export function DemoFirstGallery({ items }: Props) {
  return (
    <section
      id="gallery"
      className="bg-[var(--df-bg)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <SectionKicker index="04" label="デモ一覧" />
        <h2 className="my-2 mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-6">
          これまでに作った
          <br className="hidden md:inline" />
          開発デモの一部。
        </h2>
        <p className="mb-8 max-w-[640px] text-[var(--df-text-muted)] md:mb-10">
          パターンを流して見比べて、近いものから体験できます。
        </p>

        <RelatedPatternsMarquee items={items} title="" />

        <div className="mt-10 flex justify-center">
          <Link
            href={GALLERY_BASE}
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-7 py-3.5 font-bold text-[var(--df-on-primary)] transition-colors hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)]"
          >
            パターンデモ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
