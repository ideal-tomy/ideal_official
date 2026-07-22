import type { Metadata } from 'next'
import { CasesIndexHero } from '@/components/cases/CaseHero'
import { CaseCard } from '@/components/cases/CaseCard'
import { HowWeWorkSummary } from '@/components/how-we-work/HowWeWorkSummary'
import { getPublishedCases } from '@/data/cases'

export const metadata: Metadata = {
  title: '活用イメージ | ideal',
  description:
    '業界・課題ごとの業務フロー変化を読み、関連デモを体験し、AIコンシェルジュで自社への応用を整理できます。',
  openGraph: {
    title: '活用イメージ | ideal',
    description:
      '業界・課題ごとの業務フロー変化を読み、関連デモを体験し、AIコンシェルジュで自社への応用を整理できます。',
  },
}

export default function CasesIndexPage() {
  const cases = getPublishedCases()

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <CasesIndexHero
        title="自社の仕事に、置き換えてみる。"
        subtitle="7つの業務フロー。Before / After を読み、関連デモを体験し、概算や相談へ進めます。"
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <HowWeWorkSummary showEstimateLink showCasesLink={false} />
    </div>
  )
}
