import type { Metadata } from 'next'
import { CasesIndexHero } from '@/components/cases/CaseHero'
import { HowWeWorkSummary } from '@/components/how-we-work/HowWeWorkSummary'
import { RoiSimulatorEmbed } from '@/components/estimate/RoiSimulatorEmbed'
import { ESTIMATE_DISCLAIMER } from '@/lib/concierge/pricing-rules'
import { buildRoiSimulatorHref } from '@/lib/roiSimulator'
import { contentLeadBare, contentNote } from '@/lib/content-typography'

export const metadata: Metadata = {
  title: '導入の流れ | ideal',
  description:
    '相談から導入までの進め方と、自動見積もりで参考価格を確認できます。',
  openGraph: {
    title: '導入の流れ | ideal',
    description:
      '相談から導入までの進め方と、自動見積もりで参考価格を確認できます。',
  },
}

export default function FlowPage() {
  const embedSrc = buildRoiSimulatorHref({
    embed: true,
    returnPath: '/flow',
    from: 'ideal-site',
    industry: 'other',
    cat: 'internal',
  })

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <CasesIndexHero
        eyebrow="導入の流れ"
        primaryCta={{ label: '進め方を見る', href: '#how-we-work' }}
      />

      <HowWeWorkSummary showFooterLinks={false} />

      <section
        id="estimate"
        className="scroll-mt-24 border-t border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] bg-[color-mix(in_srgb,var(--color-brand)_4%,var(--site-bg))] py-14 md:scroll-mt-28 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand/90">
            Estimate
          </p>
          <h2 className="mb-3 text-[clamp(1.5rem,3.5vw,2rem)] font-black leading-tight text-[var(--site-fg)]">
            自動見積もり
          </h2>
          <p className={`mb-3 max-w-2xl text-sm md:text-base ${contentLeadBare}`}>
            いくつかの質問に答えると、参考の価格レンジがわかります。
          </p>
          <p className={`mb-8 max-w-2xl ${contentNote}`}>{ESTIMATE_DISCLAIMER}</p>
          <RoiSimulatorEmbed src={embedSrc} />
        </div>
      </section>
    </div>
  )
}
