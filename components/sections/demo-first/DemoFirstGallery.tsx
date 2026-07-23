import Link from 'next/link'
import type { PortfolioDemo } from '@/data/demo-first/portfolio'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { DemoFirstPortfolioCarousel } from './DemoFirstPortfolioCarousel'
import { SectionKicker } from './SectionKicker'

type Props = {
  items: PortfolioDemo[]
}

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
          タグで見比べて、近いものから体験できます。深く触りたいときは本格デモ（別タブ）へ。
        </p>

        <DemoFirstPortfolioCarousel items={items} />

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
