'use client'

import Link from 'next/link'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { Section } from '@/components/ui/Section'
import { typography, colors } from '@/lib/design-tokens'

export function GalleryCta() {
  return (
    <Section backgroundColor="black">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
          これ、自社でも使えるか一緒に整理しませんか。
        </h2>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          デモを起点に、課題の整理・必要な機能・概算の参考まで、AIコンシェルジュが案内します。
          要件が固まっていなくても大丈夫です。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <OpenConciergeButton serviceId="ai-consulting" variant="primary" size="lg">
            自社でも使えるか相談する
          </OpenConciergeButton>
          <Link
            href="/contact?service=ai-consulting&intent=gallery"
            className="
              inline-flex items-center justify-center rounded-lg
              bg-cyan-500 px-8 py-4 text-lg font-bold text-white
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:bg-cyan-600 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
            "
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </div>
    </Section>
  )
}
