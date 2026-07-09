interface SampleSetTab {
  id: string
  name: string
  industry: string
}

interface SampleSetTabsProps {
  sets: SampleSetTab[]
  selectedId: string
  onSelect: (id: string) => void
  disabled?: boolean
}

export function SampleSetTabs({ sets, selectedId, onSelect, disabled }: SampleSetTabsProps) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {sets.map((set) => (
        <button
          key={set.id}
          type="button"
          onClick={() => onSelect(set.id)}
          disabled={disabled}
          className={`
            px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
            ${
              selectedId === set.id
                ? 'bg-blue-500 text-white'
                : 'bg-white border border-[#D9DDE3] text-gray-600 hover:border-blue-300'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {set.name}（{set.industry}）
        </button>
      ))}
    </div>
  )
}
