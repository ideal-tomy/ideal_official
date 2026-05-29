import { Children, type ReactNode } from 'react'

interface ScrollStaggerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  itemDuration?: number
}

/** スクロール連動アニメは無効。レイアウト用ラッパーのみ */
export function ScrollStagger({
  children,
  className = '',
}: ScrollStaggerProps) {
  const filtered = Children.toArray(children).filter(Boolean)

  if (filtered.length === 0) {
    return null
  }

  return <div className={className}>{filtered}</div>
}
