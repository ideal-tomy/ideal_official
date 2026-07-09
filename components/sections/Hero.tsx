/**
 * Hero セクション
 *
 * トップページのファーストビュー
 */

import Link from 'next/link'
import { typography, colors, layout } from '../../lib/design-tokens'
import { Button } from '../ui/Button'
import { HeroReveal } from '../motion/HeroReveal'
import { HeroBackground } from '../motion/HeroBackground'
import { HeroScrollHint } from '../motion/HeroScrollHint'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
      <HeroBackground />

      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
          多機能よりも
          <br />
          シンプルな使用環境を
        </h1>

        <p
          className={`${typography.bodyLarge} ${colors.text.muted} mb-10 max-w-2xl mx-auto`}
        >
          Web・AI・アプリの制作技術を体験し、自社の課題に置き換えてから相談できます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/ai-capability-gallery">
            <Button variant="primary" size="lg">
              デモを体験する
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </HeroReveal>

      <HeroScrollHint />
    </section>
  )
}
