'use client'

import { useState } from 'react'
import type { ResultTab } from '@/lib/demo-lp/types'

export function DemoLpResultTabs({
  sectionLabel = '結果イメージ',
  headline = '現場・事務所・成果物を、ひとつの流れで確認できます。',
  tabs,
  note,
}: {
  sectionLabel?: string
  headline?: string
  tabs: [ResultTab, ResultTab, ResultTab]
  note: string
}) {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0]

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lp-primary)]">
          {sectionLabel}
        </p>
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl [text-wrap:balance]">
          {headline}
        </h2>

        {/* 狭い幅: セレクト / md+: タブ */}
        <div className="mb-4 md:hidden">
          <label className="sr-only" htmlFor="result-tab-select">
            表示する画面
          </label>
          <select
            id="result-tab-select"
            value={activeId}
            onChange={(e) => setActiveId(e.target.value)}
            className="w-full rounded-lg border border-[var(--lp-ink)]/15 bg-white px-3 py-2.5 text-sm font-medium"
          >
            {tabs.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div
          className="mb-4 hidden flex-wrap justify-center gap-2 md:flex"
          role="tablist"
          aria-label="役割別の結果イメージ"
        >
          {tabs.map((t) => {
            const selected = t.id === activeId
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selected
                    ? 'bg-[var(--lp-primary)] text-white'
                    : 'border border-[var(--lp-ink)]/15 text-[var(--lp-ink)]/70 hover:border-[var(--lp-primary)]/40'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        <div role="tabpanel" className="text-center">
          <p className="mb-4 text-sm font-medium text-[var(--lp-ink)]">
            {active.caption}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.image.src}
            alt={active.image.alt}
            className="mx-auto w-full rounded-xl border border-[var(--lp-ink)]/10 object-cover shadow-sm"
          />
          {(active.image.note || note) && (
            <p className="mt-3 text-sm text-[var(--lp-ink)]/65">
              {active.image.note ?? note}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
