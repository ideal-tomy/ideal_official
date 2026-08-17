import Link from 'next/link'
import {
  whatWeBuild,
  problemSolutions,
  relatedDemos,
  appProcessSteps,
} from '@/data/services/app-hub'
import { ServiceProcessSteps } from '@/components/services/ServiceProcessSteps'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { WhatWeBuildCards } from '@/components/services/WhatWeBuildCards'

export function AppWhatWeBuild() {
  return (
    <ServiceSectionShell
      surface="default"
      headingLevel="h3"
      title="こんなツールが作れます"
      lead="毎日の手作業を、触れる仕組みに。よくご依頼いただく型です。"
      align="left"
      emphasis="feature"
      maxWidth="7xl"
      contentBleed
    >
      <WhatWeBuildCards items={whatWeBuild} />
    </ServiceSectionShell>
  )
}

export function AppProblemSolution() {
  return (
    <ServiceSectionShell
      surface="elevated"
      title="課題 → 仕組み"
      lead="よくある業務の困りごとを、動く仕組みに置き換えます。"
      maxWidth="5xl"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {problemSolutions.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-5 shadow-[var(--service-card-shadow)]"
          >
            <p className="mb-1 text-sm text-[var(--site-fg-muted)]">課題</p>
            <p className="mb-3 text-lg font-semibold text-[var(--site-fg)]">
              {item.problem}
            </p>
            <p className="text-sm leading-relaxed text-brand/90">
              → {item.solution}
            </p>
          </div>
        ))}
      </div>
    </ServiceSectionShell>
  )
}

export function AppRelatedDemos() {
  return (
    <ServiceSectionShell
      surface="default"
      title="関連する実デモ"
      lead="業務ツールに近いデモや活用イメージから、自社への置き換えを想像できます。"
      maxWidth="5xl"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {relatedDemos.map((demo) => (
          <Link
            key={demo.id}
            href={demo.href}
            className="rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)] px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--service-card-shadow)]"
          >
            <p className="mb-1 font-semibold text-[var(--site-fg)]">
              {demo.label}
            </p>
            <p className="text-sm text-[var(--site-fg-muted)]">{demo.hint}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row">
        <Link
          href="/flow"
          className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
        >
          AIデモギャラリー →
        </Link>
        <Link
          href="/flow"
          className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
        >
          活用イメージ一覧 →
        </Link>
      </div>
    </ServiceSectionShell>
  )
}

export function AppProcess() {
  return (
    <ServiceProcessSteps
      lead="プロトタイプで方向を合わせ、本番運用まで伴走します。"
      steps={appProcessSteps}
      surface="elevated"
    />
  )
}
