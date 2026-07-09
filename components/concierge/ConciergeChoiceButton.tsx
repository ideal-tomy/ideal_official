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
        bg-gray-900/80 ${borders.border} border-brand/60
        ${colors.text.primary} ${typography.small}
        ${transitions.all}
        hover:bg-gray-800 hover:border-brand
        focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-950
        ${selected ? 'ring-2 ring-brand border-brand' : ''}
        ${shadows.md}
      `}
    >
      {label}
    </button>
  )
}
