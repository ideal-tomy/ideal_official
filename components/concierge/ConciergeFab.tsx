'use client'

import { ConciergeRobot, CONCIERGE_ROBOT_CSS } from './ConciergeRobot'

interface ConciergeFabProps {
  onClick: () => void
  label?: string
}

export function ConciergeFab({
  onClick,
  label = 'サイト案内',
}: ConciergeFabProps) {
  return (
    <>
      <style>{CONCIERGE_ROBOT_CSS}</style>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className="
          fixed z-50
          bottom-[max(1rem,env(safe-area-inset-bottom))]
          right-[max(1rem,env(safe-area-inset-right))]
          sm:bottom-6 sm:right-6
          flex flex-col items-center gap-1
          rounded-full
          bg-transparent
          p-0
          transition-transform duration-300 ease-in-out
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
        "
      >
        <ConciergeRobot size={72} />
        <span
          className="
            rounded-full bg-brand-deep text-[#111]
            px-2.5 py-0.5 text-[11px] font-bold
            shadow-md
          "
        >
          案内
        </span>
      </button>
    </>
  )
}
