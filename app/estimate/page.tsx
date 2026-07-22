/**
 * 自動見積もりページ
 *
 * 説明・免責のランディング。本体は roi-simulator フル版へ別タブ遷移。
 * ORIGIN は NEXT_PUBLIC_ROI_SIMULATOR_URL で設定。
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { HowWeWorkSummary } from '@/components/how-we-work/HowWeWorkSummary'
import { PageHero } from '@/components/sections/PageHero'
import { typography, colors } from '@/lib/design-tokens'
import { ESTIMATE_DISCLAIMER } from '@/lib/concierge/pricing-rules'
import { buildRoiSimulatorHref } from '@/lib/roiSimulator'
import { getHowWeWorkHref } from '@/data/how-we-work'

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

export default function EstimatePage() {
  const roiHref = buildRoiSimulatorHref({
    returnPath: '/estimate',
  })

  return (
    <>
      <PageHero
        title="自動見積もり"
        description="いくつかの質問に答えると、参考の価格レンジがわかります。課題整理や進め方の相談は、AIコンシェルジュもご利用ください。"
      >
        <p className={`mt-4 max-w-[560px] ${typography.small} ${colors.text.disabled}`}>
          {ESTIMATE_DISCLAIMER}
        </p>
      </PageHero>

      <Section
        backgroundColor="black"
        containerSize="full"
        className="pt-0 pb-12 md:pb-16"
      >
        <div className="mx-4 max-w-xl rounded-xl border border-gray-700 bg-gray-900/40 px-6 py-12 text-center sm:mx-auto sm:px-10">
          {roiHref ? (
            <>
              <p className={`${typography.body} ${colors.text.muted} mb-8`}>
                見積シミュレーターで、作りたいものに答えて概算を出します。
                <br className="hidden sm:block" />
                別タブで開きます。閉じたらこのページや進め方の説明に戻れます。
              </p>
              <a
                href={roiHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center rounded-lg
                  bg-brand px-8 py-4 text-lg font-bold text-white
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:bg-brand-hover active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
                "
              >
                概算見積もりをはじめる
              </a>
            </>
          ) : (
            <>
              <p className={`${typography.body} ${colors.text.muted} mb-2`}>
                見積ツールの接続先が未設定です。
              </p>
              <p className={`${typography.small} ${colors.text.disabled}`}>
                環境変数{' '}
                <code className="text-gray-400">NEXT_PUBLIC_ROI_SIMULATOR_URL</code>{' '}
                を設定してください。
              </p>
            </>
          )}
        </div>
      </Section>

      <Section
        backgroundColor="black"
        className="border-t border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className={`${typography.h3} ${colors.text.primary} mb-3`}>
            概算のあとに、相談内容を整理できます
          </h2>
          <p className={`${typography.body} ${colors.text.muted} mb-8`}>
            金額感がつかめたら、AIコンシェルジュで課題・機能を整理し、そのままお問い合わせへ引き継げます。
            依頼後の進め方は「相談〜導入の進め方」でも確認できます。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <OpenConciergeButton variant="primary" size="lg">
              自社でも使えるか相談する
            </OpenConciergeButton>
            <Link
              href={getHowWeWorkHref()}
              className="
                inline-flex items-center justify-center rounded-lg
                border border-[color-mix(in_srgb,var(--site-fg)_25%,transparent)]
                bg-transparent px-8 py-4 text-lg font-bold text-[var(--site-fg)]
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:border-brand/60 hover:text-brand-hover active:scale-95
                focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
              "
            >
              相談〜導入の進め方
            </Link>
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center rounded-lg
                border border-[color-mix(in_srgb,var(--site-fg)_25%,transparent)]
                bg-transparent px-8 py-4 text-lg font-bold text-[var(--site-fg)]
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

      <HowWeWorkSummary showEstimateLink={false} showCasesLink />
    </>
  )
}
