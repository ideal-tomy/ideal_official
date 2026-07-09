import Image from 'next/image'
import Link from 'next/link'
import { typography, colors, layout } from '@/lib/design-tokens'
import { Button } from '@/components/ui/Button'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroScrollHint } from '@/components/motion/HeroScrollHint'
import { galleryImages } from '@/data/ai-capability-gallery/capabilities'

export function GalleryHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
      <Image
        src={galleryImages.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* 可読性のためのオーバーレイ（画像はフルブリードのまま） */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/55 to-black/85"
        aria-hidden="true"
      />

      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand/90 mb-4">
          AI Capability Demo Gallery
        </p>

        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
          AIで、仕事はどこまで
          <br />
          変えられるか。
        </h1>

        <p
          className={`${typography.bodyLarge} ${colors.text.muted} mb-10 max-w-2xl mx-auto`}
        >
          音声、写真、文書、データ。
          日々の業務をAIがどう理解し、整理し、実行するのか。
          実際に触れる7つのデモで体験できます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#capabilities">
            <Button variant="secondary" size="lg">
              デモを見る
            </Button>
          </Link>
          <OpenConciergeButton serviceId="ai-consulting" variant="outline" size="lg">
            自社でも使えるか相談する
          </OpenConciergeButton>
        </div>
      </HeroReveal>

      <HeroScrollHint />
    </section>
  )
}
