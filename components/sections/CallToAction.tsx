'use client'

/**
 * CallToAction セクション
 */

import Link from 'next/link'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Section } from '../ui/Section'
import { typography, colors } from '../../lib/design-tokens'

export default function CallToAction() {
  return (
    <Section backgroundColor="black">
      <ScrollReveal className="text-center max-w-4xl mx-auto">
        <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
          自社でも使えるか一緒に整理しませんか
        </h2>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          デモや事例を起点に、AIコンシェルジュが課題・必要な機能・概算の参考まで案内します。
          <br className="hidden sm:block" />
          要件が固まっていなくても大丈夫です。整理内容はそのままお問い合わせに引き継げます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <OpenConciergeButton variant="primary" size="lg">
            自社でも使えるか相談する
          </OpenConciergeButton>
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center rounded-lg
              bg-transparent px-8 py-4 text-lg font-bold text-white
              border border-white/25
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:border-brand/60 hover:text-brand-hover active:scale-95
              focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-black
            "
          >
            お問い合わせ
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
          <span>Next.js</span>
          <span>React Native</span>
          <span>Unity</span>
          <span>AI / LLM</span>
          <span>ブロックチェーン</span>
        </div>
      </ScrollReveal>
    </Section>
  )
}
