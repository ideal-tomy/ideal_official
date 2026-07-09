import Link from 'next/link'
import { typography, colors, layout } from '@/lib/design-tokens'
import { Button } from '@/components/ui/Button'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroBackground } from '@/components/motion/HeroBackground'
import { HeroScrollHint } from '@/components/motion/HeroScrollHint'

export function GalleryHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
      <HeroBackground />

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-4">
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
            <Button variant="primary" size="lg">
              デモを見る
            </Button>
          </Link>
          <Link href="/contact?service=ai-consulting&intent=gallery">
            <Button variant="secondary" size="lg">
              自社向け開発を相談する
            </Button>
          </Link>
        </div>
      </HeroReveal>

      <HeroScrollHint />
    </section>
  )
}
