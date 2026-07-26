import type { Metadata } from 'next'
import { CasesIndexHero } from '@/components/cases/CaseHero'
import { CaseCard } from '@/components/cases/CaseCard'
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

      <section className="pb-16 pt-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--site-fg-muted)] md:mb-10">
            業種から選ぶ
          </p>

          <div className="space-y-10 md:space-y-12">
            {groups.map((group) => (
              <div key={group.industry}>
                <h2 className="mb-1 border-b border-[var(--site-border)] pb-3 text-sm font-bold tracking-[0.12em] text-brand">
                  {group.industryLabel}
                </h2>
                <div>
                  {group.cases.map((caseStudy) => (
                    <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowWeWorkSummary showEstimateLink showCasesLink={false} />
    </div>
  )
}
