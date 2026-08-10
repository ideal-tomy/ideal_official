'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/demo-lp/types'
import { lpBody, lpH2, lpSectionLabel } from './lpTypography'

export function DemoLpFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(() =>
    items.findIndex((i) => i.defaultOpen) >= 0
      ? items.findIndex((i) => i.defaultOpen)
      : 0,
  )

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className={lpSectionLabel}>FAQ</p>
        <h2 className={`mb-8 ${lpH2}`}>よくある質問</h2>
        <div className="divide-y divide-[var(--lp-ink)]/10 border-y border-[var(--lp-ink)]/10">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[var(--lp-ink)] md:text-lg">
                    {item.q}
                  </span>
                  <span className="text-slate-400" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className={`pb-4 ${lpBody}`}>{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
