import type { ReactNode } from 'react'

export type WhatWeBuildEditorialItem = {
  title: string
  description: string
  media: ReactNode
}

type WhatWeBuildEditorialProps = {
  items: readonly WhatWeBuildEditorialItem[]
}

function BuildBlock({
  index,
  item,
  featured = false,
}: {
  index: number
  item: WhatWeBuildEditorialItem
  featured?: boolean
}) {
  const step = String(index + 1).padStart(2, '0')

  return (
    <article>
      <p className="text-xs font-medium tabular-nums text-brand/90">
        {step}
      </p>
      <h3
        className={`mt-1.5 font-black leading-snug text-[var(--site-fg)] ${
          featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`mt-2 leading-relaxed text-[var(--site-fg-muted)] ${
          featured ? 'max-w-md text-sm md:text-[0.9375rem]' : 'text-sm'
        }`}
      >
        {item.description}
      </p>
      <div
        className={`overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--site-bg)] ${
          featured ? 'mt-5' : 'mt-4'
        }`}
      >
        {item.media}
      </div>
    </article>
  )
}

/**
 * 「作れます」用の編集型レイアウト
 * 各件は必ず 番号 → タイトル → 説明 → 画像 の順。PC は主役左・残り右。
 */
export function WhatWeBuildEditorial({ items }: WhatWeBuildEditorialProps) {
  const [hero, second, third] = items
  if (!hero || !second || !third) return null

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-14">
      <BuildBlock index={0} item={hero} featured />
      <div className="flex flex-col gap-8 lg:gap-10">
        <BuildBlock index={1} item={second} />
        <BuildBlock index={2} item={third} />
      </div>
    </div>
  )
}
