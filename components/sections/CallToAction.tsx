'use client'

/**
 * CallToAction セクション
 */

import Link from 'next/link'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { Section } from '../ui/Section'
import { typography, colors } from '../../lib/design-tokens'

export default function CallToAction() {
  return (
    <Section backgroundColor="black">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
          プロジェクトを始めませんか？
        </h2>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          要件がまとまっていなくても、コンシェルジュまたはお問い合わせからご相談いただけます。
          <br className="hidden sm:block" />
          選択内容を整理したうえで、担当が内容を確認のうえフォローいたします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <OpenConciergeButton variant="primary" size="lg">
            AIコンシェルジュに相談する
          </OpenConciergeButton>
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center rounded-lg
              bg-cyan-500 px-8 py-4 text-lg font-bold text-white
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:bg-cyan-600 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
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
      </div>
    </Section>
  )
}
