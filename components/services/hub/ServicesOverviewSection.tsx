'use client'

import { useEffect, useState } from 'react'
import { ServiceJourneyDiagram } from '@/components/services/ServiceJourneyDiagram'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import {
  consultJourneySteps,
  overallJourneySteps,
  servicesConsultCopy,
  servicesOverviewCopy,
} from '@/data/services/hub'

export function ServicesOverviewSection() {
  const [consultOpen, setConsultOpen] = useState(false)

  useEffect(() => {
    const openIfConsultHash = () => {
      const hash = window.location.hash.replace(/^#/, '')
      if (hash === 'consult' || hash === 'overview-consult') {
        setConsultOpen(true)
        requestAnimationFrame(() => {
          document
            .getElementById('overview-consult')
            ?.scrollIntoView({ block: 'start' })
        })
      }
    }
    openIfConsultHash()
    window.addEventListener('hashchange', openIfConsultHash)
    return () => window.removeEventListener('hashchange', openIfConsultHash)
  }, [])

  return (
    <ServiceSectionShell
      id="overview"
      surface="elevated"
      kicker="APPROACH"
      title={servicesOverviewCopy.heading}
      lead={servicesOverviewCopy.lead}
      maxWidth="6xl"
    >
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        aria-label="サービスの3つの柱"
      >
        {servicesOverviewCopy.pillars.map((pillar) => (
          <span
            key={pillar}
            className="rounded-full border border-[var(--site-border)] bg-[var(--site-bg)] px-3 py-1 text-[13px] font-medium text-[var(--site-fg-muted)] md:text-[14px]"
          >
            {pillar}
          </span>
        ))}
      </div>
      <ServiceJourneyDiagram steps={overallJourneySteps} />

      <div id="overview-consult" className="mt-10 scroll-mt-28 md:mt-12">
        <button
          type="button"
          aria-expanded={consultOpen}
          aria-controls="overview-consult-panel"
          onClick={() => setConsultOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 rounded-xl border border-brand/25 bg-[color-mix(in_srgb,var(--color-brand)_6%,var(--site-bg))] px-5 py-4 text-left transition-colors hover:border-brand/40 md:px-6"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
              ステップ02の詳細
            </p>
            <p className="mt-1 text-base font-semibold text-[var(--site-fg)] md:text-lg">
              {servicesConsultCopy.heading} — 設計から実行計画まで
            </p>
            <p className="mt-1 text-sm text-[var(--site-fg-muted)]">
              相談だけで完了しても問題ありません。
            </p>
          </div>
          <svg
            className={`h-5 w-5 shrink-0 text-brand transition-transform ${consultOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {consultOpen ? (
          <div
            id="overview-consult-panel"
            className="mt-6 rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-5 md:p-8"
          >
            <p className="mb-6 text-center text-sm text-[var(--site-fg-muted)] md:text-base">
              {servicesConsultCopy.lead}
            </p>
            <ServiceJourneyDiagram steps={consultJourneySteps} />
            <ul className="mx-auto mt-8 max-w-xl list-none space-y-2">
              {servicesConsultCopy.outcomes.map((line) => (
                <li
                  key={line}
                  className="rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)] px-4 py-2.5 text-[14px] text-[var(--site-fg)]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </ServiceSectionShell>
  )
}
