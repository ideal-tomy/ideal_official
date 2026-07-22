'use client'

/**
 * CallToAction セクション
 */

import Link from 'next/link'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Section } from '../ui/Section'
import { typography, colors } from '../../lib/design-tokens'

export default function CallToAction() {
  return (
    <Section backgroundColor="black">
      <ScrollReveal className="text-center max-w-4xl mx-auto">
        <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
          まずは、話してみませんか
        </h2>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          デモや活用イメージを見たうえで、要件が固まっていなくても大丈夫です。
          <br className="hidden sm:block" />
          お問い合わせからご相談ください。概算だけ先に見たい場合も歓迎です。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center rounded-lg
              bg-brand px-8 py-4 text-lg font-bold text-white
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:bg-brand-hover active:scale-95
              focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-black
            "
          >
            お問い合わせ
          </Link>
        </div>

        <p className="mt-8">
          <Link
            href="/estimate"
            className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            概算の感触を先に見る →
          </Link>
        </p>

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
