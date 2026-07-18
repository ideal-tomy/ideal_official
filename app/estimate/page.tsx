/**
 * 自動見積もりページ
 *
 * 外部見積ツールを iframe で埋め込み。
 * ORIGIN は NEXT_PUBLIC_ESTIMATE_EMBED_ORIGIN で設定。
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { typography, colors } from '@/lib/design-tokens'
import { ESTIMATE_DISCLAIMER } from '@/lib/concierge/pricing-rules'

const estimateDescription =
  'Webサイト・LP、Webアプリ・業務ツール、AIプロトタイプの参考価格を、質問に答えて概算できます。正式見積ではありません。'

export const metadata: Metadata = {
  title: '自動見積もり | ideal',
  description: estimateDescription,
  openGraph: {
    title: '自動見積もり | ideal',
    description: estimateDescription,
  },
}

function getEmbedSrc(): string | null {
  const origin = process.env.NEXT_PUBLIC_ESTIMATE_EMBED_ORIGIN?.replace(/\/$/, '')
  if (!origin) return null
  return `${origin}/embed?brand=ideal&ui=full&embed=1`
}

export default function EstimatePage() {
  const embedSrc = getEmbedSrc()

  return (
    <>
      <Section backgroundColor="black" className="pt-8 md:pt-24 pb-8 md:pb-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="mb-3 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
            Estimate
          </p>
          <h1 className={`${typography.h2} ${colors.text.primary} mb-4`}>
            自動見積もり
          </h1>
          <p className={`${typography.body} ${colors.text.muted} mb-4`}>
            いくつかの質問に答えると、参考の価格レンジがわかります。
            <br className="hidden sm:block" />
            課題の整理や進め方の相談は、AIコンシェルジュもご利用ください。
          </p>
          <p className={`${typography.small} ${colors.text.disabled}`}>
            {ESTIMATE_DISCLAIMER}
          </p>
        </div>
      </Section>

      <Section
        backgroundColor="black"
        containerSize="full"
        className="pt-0 pb-12 md:pb-16"
      >
        {embedSrc ? (
          <iframe
            src={embedSrc}
            title="ideal 自動見積もり"
            className="w-full border-0 bg-[var(--site-bg)]"
            style={{ height: 1400 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="clipboard-write"
          />
        ) : (
          <div className="mx-4 rounded-xl border border-gray-700 bg-gray-900/40 px-6 py-16 text-center sm:mx-6">
            <p className={`${typography.body} ${colors.text.muted} mb-2`}>
              見積ツールの接続先が未設定です。
            </p>
            <p className={`${typography.small} ${colors.text.disabled}`}>
              環境変数{' '}
              <code className="text-gray-400">NEXT_PUBLIC_ESTIMATE_EMBED_ORIGIN</code>{' '}
              を設定してください。
            </p>
          </div>
        )}
      </Section>

      <Section
        backgroundColor="black"
        className="border-t border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] py-12 md:py-16"
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className={`${typography.h3} ${colors.text.primary} mb-3`}>
            概算のあとに、相談内容を整理できます
          </h2>
          <p className={`${typography.body} ${colors.text.muted} mb-8`}>
            金額感がつかめたら、AIコンシェルジュで課題・機能を整理し、そのままお問い合わせへ引き継げます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <OpenConciergeButton variant="primary" size="lg">
              自社でも使えるか相談する
            </OpenConciergeButton>
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center rounded-lg
                bg-transparent px-8 py-4 text-lg font-bold text-[var(--site-fg)]
                border border-[color-mix(in_srgb,var(--site-fg)_25%,transparent)]
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:border-brand/60 hover:text-brand-hover active:scale-95
                focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
              "
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
