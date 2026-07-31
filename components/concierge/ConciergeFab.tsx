'use client'

import { useEffect, useState } from 'react'
import { ConciergeRobot, CONCIERGE_ROBOT_CSS } from './ConciergeRobot'

interface ConciergeFabProps {
  onClick: () => void
  label?: string
  /** 業務上の表示可否（パネル開・他挨拶との排他）。スクロール条件は内部で判定 */
  enabled?: boolean
}

const ROBOT_SIZE = Math.round(72 * 0.65)

export function ConciergeFab({
  onClick,
  label = 'サイト案内',
  enabled = true,
}: ConciergeFabProps) {
  const [nearBottom, setNearBottom] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setNearBottom(
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600,
      )
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const visible = enabled && nearBottom

  return (
    <>
      <style>{CONCIERGE_ROBOT_CSS}</style>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`
          fixed z-40 bottom-6 right-4
          flex flex-col items-center gap-1
          rounded-full bg-transparent p-0
          transition-opacity duration-300 ease-in-out
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-brand-deep
          focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
          ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}
        `}
      >
        <ConciergeRobot size={ROBOT_SIZE} />
        <span
          className="
            rounded-full bg-brand-deep text-[#111]
            px-2 py-0.5 text-[10px] font-bold
            shadow-md
          "
        >
          案内
        </span>
      </button>
    </>
  )
}
