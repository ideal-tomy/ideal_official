export interface StructuredField {
  key: string
  value: string
}

interface StructuredResultProps {
  fields: StructuredField[]
  isComplete: boolean
  title?: string
  emptyMessage?: string
}

export function StructuredResult({
  fields,
  isComplete,
  title = '構造化結果',
  emptyMessage = '処理完了後に表示されます',
}: StructuredResultProps) {
  if (!isComplete) {
    return (
      <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 h-full min-h-[200px]">
        <p className="text-xs font-medium text-[var(--site-fg-muted)] uppercase tracking-wider mb-3">
          {title}
        </p>
        <p className="text-sm text-[var(--site-fg-muted)]">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 h-full">
      <p className="text-xs font-medium text-[var(--site-fg-muted)] uppercase tracking-wider mb-3">
        {title}
      </p>
      <dl className="space-y-3">
        {fields.map((field) => (
          <div key={field.key} className="border-b border-[#D9DDE3] pb-2 last:border-0">
            <dt className="text-[11px] text-[var(--site-fg-muted)] mb-0.5">{field.key}</dt>
            <dd className="text-sm text-gray-800 leading-relaxed">{field.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
