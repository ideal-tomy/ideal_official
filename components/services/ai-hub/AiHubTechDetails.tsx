'use client'

import Link from 'next/link'
import { Accordion } from '@/components/ui/Accordion'
import { techDetailItems, whatWeBuild } from '@/data/services/ai-hub'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function AiHubTechDetails() {
  return (
    <ServiceSectionShell
      surface="default"
      title="どう作っているか"
      lead="まずはデモで変化を共有し、必要なら技術の詳細を確認してください。"
      maxWidth="3xl"
    >
      <ul className="mb-10 space-y-2">
        {whatWeBuild.map((item) => (
          <li
            key={item}
            className="flex items-start text-sm text-[var(--site-fg-muted)]"
          >
            <span className="mt-1.5 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--df-text-muted)]" />
            {item}
          </li>
        ))}
      </ul>

      <Accordion
        variant="card"
        allowMultiple
        items={techDetailItems.map((item) => ({
          id: item.id,
          title: item.title,
          content: (
            <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
              {item.summary}
            </p>
          ),
        }))}
      />

      <p className="mt-8 text-center text-sm text-[var(--site-fg-muted)]">
        比較・導入理由・働き方などの解説は{' '}
        <Link
          href="/lab/insights"
          className="text-brand transition-colors hover:text-brand-hover"
        >
          LAB Insights
        </Link>
        へ。
      </p>
    </ServiceSectionShell>
  )
}
