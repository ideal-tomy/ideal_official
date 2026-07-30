import Link from 'next/link'
import { industryEntries, problemEntries, processSteps } from '@/data/services/ai-hub'
import { ServiceProcessSteps } from '@/components/services/ServiceProcessSteps'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function AiHubIndustryGrid() {
  return (
    <ServiceSectionShell
      surface="elevated"
      title="業界で見る"
      lead="公開済みの活用イメージから読むか、近いデモから自社業務への置き換えを想像できます。"
      maxWidth="5xl"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industryEntries.map((entry) => (
          <Link
            key={entry.id}
            href={entry.href}
            className="rounded-lg border border-[var(--site-border)] bg-[var(--site-bg)] px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--service-card-shadow)]"
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <p className="font-semibold text-[var(--site-fg)]">{entry.label}</p>
              {entry.status === 'case' && (
                <span className="rounded border border-brand/30 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-brand/90">
                  Case
                </span>
              )}
            </div>
            <p className="text-sm text-[var(--site-fg-muted)]">{entry.hint}</p>
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

export function AiHubProblemGrid() {
  return (
    <ServiceSectionShell
      surface="default"
      title="課題から見る"
      lead="よくある現場の困りごとから、対応するデモへ直接進めます。"
      maxWidth="5xl"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {problemEntries.map((entry) => (
          <Link
            key={entry.id}
            href={entry.href}
            className="group rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] p-5 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--service-card-shadow)]"
          >
            <p className="mb-1 text-sm text-[var(--site-fg-muted)]">課題</p>
            <p className="mb-3 text-lg font-semibold text-[var(--site-fg)]">
              {entry.problem}
            </p>
            <p className="text-sm text-brand/90 transition-colors group-hover:text-brand-hover">
              → {entry.solution}
            </p>
          </Link>
        ))}
      </div>
    </ServiceSectionShell>
  )
}

export function AiHubProcess() {
  return (
    <ServiceProcessSteps
      title="進め方"
      lead="機能を先に作るのではなく、変えるべき業務を見極めてから進めます。"
      steps={processSteps}
      surface="elevated"
    />
  )
}
