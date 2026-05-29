import type { ReactNode } from 'react'

interface HeroRevealProps {
  children: ReactNode
  className?: string
}

/** ヒーロー内の段階アニメは無効。ページ遷移の crossfade に任せる */
export function HeroReveal({ children, className = '' }: HeroRevealProps) {
  return <div className={className}>{children}</div>
}
