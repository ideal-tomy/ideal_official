'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type CaseFoldSectionProps = {
  eyebrow?: string
  title: string
  children: ReactNode
}

/**
 * スマホでは初期クローズ、md以上では常時オープンの詳細セクション。
 * 縦長になりやすい補足ブロック（進め方・デモ範囲・向き不向き）用。
 */
export function CaseFoldSection({
  eyebrow,
  title,
  children,
}: CaseFoldSectionProps) {
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => {
      // PCは常時オープン、スマホは初期クローズ（縦長対策）
      el.open = mq.matches
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <section className="border-b border-[var(--site-border)]">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 md:py-14 lg:px-8">
        {/* SSR/PC初回は open。スマホは mount 後に閉じる */}
        <details ref={ref} className="group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 md:pointer-events-none md:cursor-default [&::-webkit-details-marker]:hidden">
            <div className="min-w-0">
              {eyebrow ? (
                <p className="mb-2 text-xs font-medium text-brand/90">{eyebrow}</p>
              ) : null}
              <h2 className="text-balance text-xl font-bold leading-snug text-[var(--site-fg)] md:text-3xl">
                {title}
              </h2>
            </div>
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--site-border)] text-lg leading-none text-[var(--site-fg)] transition-transform group-open:rotate-45 md:hidden"
              aria-hidden
            >
              +
            </span>
          </summary>
          <div className="mt-5 md:mt-8">{children}</div>
        </details>
      </div>
    </section>
  )
}
