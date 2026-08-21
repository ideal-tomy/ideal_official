'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/demo-lp/types'
import { lpBody, lpH2, lpSectionLabel } from './lpTypography'

function FaqList({
  items,
  open,
  setOpen,
  idOffset = 0,
}: {
  items: FaqItem[]
  open: number
  setOpen: (i: number) => void
  idOffset?: number
}) {
  return (
    <div className="divide-y divide-[var(--lp-ink)]/10 border-y border-[var(--lp-ink)]/10">
      {items.map((item, i) => {
        const index = idOffset + i
        const isOpen = open === index
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-[var(--lp-ink)] md:text-lg">
                {item.q}
              </span>
              <span className="text-slate-400" aria-hidden>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && <p className={`pb-4 ${lpBody}`}>{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

export function DemoLpFaq({ items }: { items: FaqItem[] }) {
  const featured = items.filter((i) => i.featured)
  const rest = items.filter((i) => !i.featured)
  const useSplit = featured.length > 0 && rest.length > 0
  const primary = useSplit ? featured : items

  const [open, setOpen] = useState(() => {
    const list = primary
    const idx = list.findIndex((i) => i.defaultOpen)
    return idx >= 0 ? idx : 0
  })
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className={lpSectionLabel}>よくある質問</p>
        <h2 className={`mb-8 ${lpH2}`}>よくある質問</h2>
        <FaqList items={primary} open={open} setOpen={setOpen} />
        {useSplit && (
          <div className="mt-8">
            <button
              type="button"
              className="text-sm font-semibold text-[var(--lp-primary)] hover:underline"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
            >
              {moreOpen ? 'その他の質問を閉じる' : 'その他の質問'}
            </button>
            {moreOpen && (
              <div className="mt-4">
                <FaqList
                  items={rest}
                  open={open}
                  setOpen={setOpen}
                  idOffset={primary.length}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
