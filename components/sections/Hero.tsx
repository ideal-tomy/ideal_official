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

      <HeroReveal
        className={`relative z-10 ${layout.container} text-center`}
      >
        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
          Web・アプリ開発で
          <br />
          ビジネスの次の一歩を
        </h1>

        <p
          className={`${typography.bodyLarge} ${colors.text.muted} mb-10 max-w-2xl mx-auto`}
        >
          スタートアップの技術支援からコンサル会社の実装パートナーまで。
          企画・開発・AI導入を伴走します。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/services">
            <Button variant="primary" size="lg">
              サービスを見る
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
