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
          自社に合うパターンを、一緒に考えませんか。
        </h2>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          デモをベースに業界特化版を作りたい方、自社課題から提案を受けたい方へ。
          まずはお気軽にご相談ください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <OpenConciergeButton serviceId="ai-consulting" variant="primary" size="lg">
            AIコンシェルジュに相談する
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
            自社向け開発を相談する
          </Link>
        </div>
      </div>
    </Section>
  )
}
