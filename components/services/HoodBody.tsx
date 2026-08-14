type HoodBodyProps = {
  lead: string
  points: { title: string; text: string }[]
  siteUsage: string
}

/** 使用技術アコーディオン内の説明ブロック（ライト/ダーク両対応） */
export function HoodBody({ lead, points, siteUsage }: HoodBodyProps) {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-[var(--site-fg)]/90">{lead}</p>
      <div className="rounded-lg border border-brand/25 bg-brand/5 p-4">
        <p className="mb-1 text-xs uppercase tracking-wider text-brand">
          このサイトでの使用
        </p>
        <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">{siteUsage}</p>
      </div>
      <div className="space-y-4">
        {points.map((p) => (
          <div key={p.title}>
            <h4 className="mb-2 font-semibold text-brand">{p.title}</h4>
            <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
