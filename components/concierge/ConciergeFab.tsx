'use client'

import { useEffect, useState } from 'react'
import { ConciergeRobot, CONCIERGE_ROBOT_CSS } from './ConciergeRobot'

interface ConciergeFabProps {
  onClick: () => void
  label?: string
  /** パネルや他のあいさつが出ているあいだは隠す */
  enabled?: boolean
}

const ROBOT_SIZE = Math.round(72 * 0.65)
const PHONE_QUERY = '(max-width: 767px)'

export function ConciergeFab({
  onClick,
  label = 'サイト案内',
  enabled = true,
}: ConciergeFabProps) {
  const [isPhone, setIsPhone] = useState(false)
  const [peek, setPeek] = useState(false)
  const [prevEnabled, setPrevEnabled] = useState(enabled)

  if (enabled !== prevEnabled) {
    setPrevEnabled(enabled)
    if (!enabled) setPeek(false)
  }

  useEffect(() => {
    const media = window.matchMedia(PHONE_QUERY)
    const sync = () => setIsPhone(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  if (!enabled) return null

  if (isPhone && !peek) {
    return (
      <button
        type="button"
        onClick={() => setPeek(true)}
        aria-label="案内を出す"
        className="
          fixed bottom-4 right-3 z-40
          min-h-9 rounded-full bg-[#2b6fe0] px-3 py-1.5
          text-sm font-bold text-white shadow-md
          focus:outline-none focus:ring-2 focus:ring-brand-deep
        "
      >
        案内
      </button>
    )
  }

  return (
    <>
      <style>{CONCIERGE_ROBOT_CSS}</style>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className="
          fixed bottom-4 right-3 z-40
          flex flex-col items-center gap-1
          rounded-full bg-transparent p-0
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-brand-deep
          focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
          md:bottom-6 md:right-4
        "
      >
        <ConciergeRobot size={ROBOT_SIZE} />
        <span className="rounded-full bg-[#2b6fe0] px-2 py-0.5 text-[10px] font-bold text-white shadow-md">
          案内
        </span>
      </button>
    </>
  )
}
