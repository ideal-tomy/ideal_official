'use client'

import { colors, borders, shadows, transitions, typography } from '@/lib/design-tokens'

interface ConciergeChoiceButtonProps {
  label: string
  selected?: boolean
  onClick: () => void
}

export function ConciergeChoiceButton({
  label,
  selected,
  onClick,
}: ConciergeChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full text-left px-4 py-3 rounded-lg
        bg-gray-900/80 ${borders.border} border-blue-400/60
        ${colors.text.primary} ${typography.small}
        ${transitions.all}
        hover:bg-gray-800 hover:border-blue-400
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950
        ${selected ? 'ring-2 ring-blue-400 border-blue-400' : ''}
        ${shadows.md}
      `}
    >
      {label}
    </button>
  )
}
