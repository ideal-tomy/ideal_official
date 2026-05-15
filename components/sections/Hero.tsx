/**
 * Hero セクション
 *
 * トップページのファーストビュー
 */

import Link from 'next/link'
import { typography, colors } from '../../lib/design-tokens'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`
            ${typography.h1}
            ${colors.text.primary}
            mb-6
            animate-fade-in
          `}
        >
          Web・アプリ開発で
          <br />
          ビジネスの次の一歩を
        </h1>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-10 max-w-2xl mx-auto`}>
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
      </div>
    </section>
  )
}
