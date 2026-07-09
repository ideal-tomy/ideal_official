interface EvidenceSource {
  id: string
  title: string
  excerpt: string
}

interface EvidencePanelProps {
  sources: EvidenceSource[]
  activeSourceId?: string | null
  onSelectSource?: (id: string) => void
  title?: string
  emptyMessage?: string
}

export function EvidencePanel({
  sources,
  activeSourceId,
  onSelectSource,
  title = '参照文書',
  emptyMessage = '根拠文書がここに表示されます',
}: EvidencePanelProps) {
  if (sources.length === 0) {
    return (
      <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 h-full min-h-[200px]">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
          {title}
        </p>
        <p className="text-sm text-gray-400">{emptyMessage}</p>
      </div>
    )
  }

  const active = sources.find((s) => s.id === activeSourceId) ?? sources[0]

  return (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 h-full space-y-3">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</p>

      <ul className="space-y-1">
        {sources.map((source) => (
          <li key={source.id}>
            <button
              type="button"
              onClick={() => onSelectSource?.(source.id)}
              className={`
                w-full text-left text-xs px-2 py-1.5 rounded transition-colors
                ${
                  active.id === source.id
                    ? 'bg-brand/10 text-brand-deep border border-brand/30'
                    : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              {source.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-[#D9DDE3] pt-3">
        <p className="text-[11px] text-gray-500 mb-1">原文プレビュー</p>
        <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 p-2 rounded border border-[#D9DDE3]">
          {active.excerpt}
        </p>
      </div>
    </div>
  )
}
