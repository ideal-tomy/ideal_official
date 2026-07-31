import type { Metadata } from 'next'
import Link from 'next/link'
import { CasesIndexHero } from '@/components/cases/CaseHero'
import { CaseIndustryNav } from '@/components/cases/CaseIndustryNav'
import { HowWeWorkSummary } from '@/components/how-we-work/HowWeWorkSummary'
import {
  getCaseHref,
  groupPublishedCasesByIndustry,
} from '@/data/cases'

export const metadata: Metadata = {
  title: '活用イメージ | ideal',
  description:
    '業界・課題ごとの現場の流れと変化を読み、自社業務に置き換えて検討できます。',
  openGraph: {
    title: '活用イメージ | ideal',
    description:
      '業界・課題ごとの現場の流れと変化を読み、自社業務に置き換えて検討できます。',
  },
}

/** 「業種 × 課題」形式なら課題側だけ返す */
function topicFromSubtitle(subtitle: string): string {
  const parts = subtitle.split(/\s*×\s*/)
  if (parts.length >= 2) {
    return parts.slice(1).join(' × ').trim()
  }
  return subtitle
}

export default function CasesIndexPage() {
  const groups = groupPublishedCasesByIndustry()

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <CasesIndexHero
        title="自社の仕事に、置き換えてみる。"
        subtitle="現場管理、報告、進捗確認。実際のツールに触れながら、業務の流れを具体的にイメージできます。"
        primaryCta={{ label: '業種から探す', href: '#cases-browse' }}
      />

      <div
        id="cases-browse"
        className="scroll-mt-24 pb-4 pt-8 md:scroll-mt-28 md:pb-6 md:pt-10"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--site-fg-muted)] md:mb-8">
            業種から選ぶ
          </p>
          <CaseIndustryNav groups={groups} />
        </div>
      </div>

      <section className="bg-[var(--site-bg)] py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => {
              const lead = group.cases[0]
              if (!lead) return null
              const tag = topicFromSubtitle(lead.subtitle)
              return (
                <Link
                  key={group.industry}
                  id={`industry-${group.industry}`}
                  href={getCaseHref(lead.slug)}
                  className="
                    block scroll-mt-24 rounded-2xl border border-[var(--site-border)]
                    bg-[var(--site-bg-elevated)] p-6
                    transition duration-200
                    hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--site-fg)_35%,var(--site-border))]
                    md:scroll-mt-28
                  "
                >
                  <p className="text-xs text-[var(--site-fg-muted)]">{tag}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-[var(--site-fg)]">
                    {group.industryLabel}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--site-fg-muted)]">
                    {lead.pain.headline}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <HowWeWorkSummary showEstimateLink showCasesLink={false} />
    </div>
  )
}
