'use client'

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'

type DemoBeforeAfterRailProps = {
  before: ReactNode
  after: ReactNode
  beforeLabel?: string
  afterLabel?: string
  hint?: string
  beforeRef?: RefObject<HTMLDivElement | null>
  afterRef?: RefObject<HTMLDivElement | null>
  railRef?: RefObject<HTMLDivElement | null>
}

/**
 * スマホ専用: Before / After を横スワイプ（snap）。
 * PC では呼び出し側で別レイアウトを使う想定。
 */
export function DemoBeforeAfterRail({
  before,
  after,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  hint = 'スワイプで結果を見る →',
  beforeRef,
  afterRef,
  railRef,
}: DemoBeforeAfterRailProps) {
  const internalRail = useRef<HTMLDivElement>(null)
  const rail = railRef ?? internalRail
  const [page, setPage] = useState(0)

  useEffect(() => {
    const el = rail.current
    if (!el) return
    const onScroll = () => {
      const w = el.clientWidth
      if (w <= 0) return
      setPage(Math.round(el.scrollLeft / w))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [rail])

  return (
    <div className="md:hidden">
      <p className="mb-2 text-[11px] text-gray-500">{hint}</p>
      <div
        ref={rail}
        className="flex snap-x snap-mandatory overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* w-full min-w-full: レール幅ぴったり。100vw 指定だと隣スライドが覗いて中途半端に見える */}
        <div
          ref={beforeRef}
          className="w-full min-w-full shrink-0 snap-center pr-0"
        >
          <p className="mb-1.5 text-[10px] font-bold tracking-[0.16em] text-gray-400">
            {beforeLabel}
          </p>
          {before}
        </div>
        <div
          ref={afterRef}
          className="w-full min-w-full shrink-0 snap-center"
        >
          <p className="mb-1.5 text-[10px] font-bold tracking-[0.16em] text-brand">
            {afterLabel}
          </p>
          {after}
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-1.5" aria-hidden>
        <span
          className={`h-1.5 w-1.5 rounded-full ${page === 0 ? 'bg-brand' : 'bg-gray-300'}`}
        />
        <span
          className={`h-1.5 w-1.5 rounded-full ${page === 1 ? 'bg-brand' : 'bg-gray-300'}`}
        />
      </div>
    </div>
  )
}

/** After パネルへ横スクロール（rail 内） */
export function scrollRailToAfter(
  rail: HTMLDivElement | null,
  after: HTMLDivElement | null,
  smooth: boolean,
) {
  if (!rail || !after) return
  // display:none（PC）のときは何もしない
  if (rail.offsetParent === null && getComputedStyle(rail).display === 'none') {
    return
  }
  rail.scrollTo({
    left: after.offsetLeft - rail.offsetLeft,
    behavior: smooth ? 'smooth' : 'auto',
  })
}
