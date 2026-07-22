import Link from 'next/link'
import type { PortfolioDemo } from '@/data/demo-first/portfolio'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { DemoFirstPortfolioCarousel } from './DemoFirstPortfolioCarousel'

type Props = {
  items: PortfolioDemo[]
}

export function DemoFirstGallery({ items }: Props) {
  return (
    <section
      id="gallery"
      className="py-[var(--df-sec-pad)] text-[var(--df-on-primary)]"
      style={{
        background:
          'linear-gradient(170deg, var(--df-hero-1), var(--df-hero-2) 60%, var(--df-hero-3))',
      }}
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[#BFE0FF] md:block">
          デモ一覧
        </p>
        <h2 className="my-2 mb-6 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-white">
          これまでに作った
          <br className="hidden md:inline" />
          開発デモの一部。
        </h2>
        <p className="mb-10 max-w-[640px] text-white/90">
          まずはサイト内のサンプルで変化を素早く確かめ、深く体験したいときは本格デモ（別タブ）へ進めます。
        </p>

        <DemoFirstPortfolioCarousel items={items} />

        <div className="mt-10 flex justify-center">
          <Link
            href={GALLERY_BASE}
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] bg-white px-7 py-3.5 font-bold text-[var(--df-primary-deep)] transition-transform hover:-translate-y-0.5"
          >
            パターンデモ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
