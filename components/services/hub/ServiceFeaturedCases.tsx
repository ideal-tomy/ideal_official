import Link from 'next/link'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { getHubFeaturedCases, getCaseHref } from '@/data/services/hub'

export function ServiceFeaturedCases() {
  const cases = getHubFeaturedCases()
  if (cases.length === 0) return null

  return (
    <ServiceSectionShell
      surface="default"
      title="実際の活用イメージ"
      lead="業界・課題ごとの現場の流れから、自社への置き換えを想像できます。"
      maxWidth="6xl"
    >
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {cases.map((caseStudy) => (
          <Link
            key={caseStudy.slug}
            href={getCaseHref(caseStudy.slug)}
            className="group flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--service-card-shadow)]"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full border border-brand/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                Case
              </span>
              <span className="text-xs text-[var(--site-fg-muted)]">
                {caseStudy.industryLabel}
              </span>
            </div>
            <h3 className="text-base font-bold leading-snug text-[var(--site-fg)] transition-colors group-hover:text-brand md:text-lg">
              {caseStudy.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
              {caseStudy.pain.headline}
            </p>
            <span className="mt-4 text-sm font-medium text-brand">
              活用詳細を読む →
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/cases"
          className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
        >
          活用イメージ一覧を見る →
        </Link>
      </div>
    </ServiceSectionShell>
  )
}
