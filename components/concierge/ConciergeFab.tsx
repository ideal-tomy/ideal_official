'use client'

interface ConciergeFabProps {
  onClick: () => void
  label?: string
}

export function ConciergeFab({ onClick, label = 'コンシェルジュ' }: ConciergeFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="
        fixed z-50
        bottom-[max(1.25rem,env(safe-area-inset-bottom))]
        right-[max(1.25rem,env(safe-area-inset-right))]
        sm:bottom-8 sm:right-8
        flex items-center gap-2 rounded-full
        bg-brand text-white font-bold text-sm sm:text-base
        px-5 py-3 sm:px-6 sm:py-4
        shadow-lg shadow-[0_8px_24px_var(--color-brand-glow)]
        hover:bg-brand-hover hover:scale-105 active:scale-95
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-black
      "
    >
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">相談</span>
    </button>
  )
}
