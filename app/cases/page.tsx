import type { Metadata } from 'next'
import { CasesIndexHero } from '@/components/cases/CaseHero'
import { CaseCard } from '@/components/cases/CaseCard'
import { CaseIndustryNav } from '@/components/cases/CaseIndustryNav'
import { HowWeWorkSummary } from '@/components/how-we-work/HowWeWorkSummary'
import { groupPublishedCasesByIndustry } from '@/data/cases'

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

export default function CasesIndexPage() {
  const groups = groupPublishedCasesByIndustry()

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <CasesIndexHero
        title="自社の仕事に、置き換えてみる。"
        subtitle="業界ごとの現場の流れと変化を読むページです。詳細で Before / After や向き不向きを確認し、そこから関連デモへ進めます。"
      />

      <div className="pb-4 pt-8 md:pb-6 md:pt-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--site-fg-muted)] md:mb-8">
            業種から選ぶ
          </p>
          <CaseIndustryNav groups={groups} />
        </div>
      </div>

      <div>
        {groups.map((group, index) => {
          const elevated = index % 2 === 0
          return (
            <section
              key={group.industry}
              id={`industry-${group.industry}`}
              className={`scroll-mt-24 py-10 md:scroll-mt-28 md:py-14 ${
                elevated
                  ? 'bg-[var(--site-bg-elevated)]'
                  : 'bg-[var(--site-bg)]'
              }`}
            >
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-black tracking-[0.02em] text-[var(--site-fg)] md:text-3xl">
                  {group.industryLabel}
                </h2>
                <div className="mt-4 md:mt-5">
                  {group.cases.map((caseStudy) => (
                    <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <HowWeWorkSummary showEstimateLink showCasesLink={false} />
    </div>
  )
}
