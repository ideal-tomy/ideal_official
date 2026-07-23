'use client'

import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { typography, colors } from '@/lib/design-tokens'

export function GalleryCta() {
  return (
    <Section backgroundColor="black">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
          次の一歩を選んでください。
        </h2>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          活用イメージで現場の流れを読むか、概算で金額感をつかむか、そのままお問い合わせでも構いません。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact?service=ai-consulting&intent=gallery"
            className="
              inline-flex items-center justify-center rounded-lg
              bg-brand px-8 py-4 text-lg font-bold text-[var(--df-on-primary)]
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:bg-brand-hover active:scale-95
              focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
            "
          >
            お問い合わせフォームへ
          </Link>
        </div>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            href="/cases"
            className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            活用イメージを読む →
          </Link>
          <Link
            href="/estimate"
            className="text-sm font-medium text-[var(--site-fg-muted)] hover:text-brand transition-colors"
          >
            概算の感触を先に見る →
          </Link>
        </p>
      </div>
    </Section>
  )
}
