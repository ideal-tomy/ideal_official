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
        fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8
        flex items-center gap-2 rounded-full
        bg-blue-500 text-white font-bold text-sm sm:text-base
        px-5 py-3 sm:px-6 sm:py-4
        shadow-lg shadow-blue-500/30
        hover:bg-blue-600 hover:scale-105 active:scale-95
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black
      "
    >
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">相談</span>
    </button>
  )
}
