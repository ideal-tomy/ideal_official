'use client'

/**
 * ScrollHeader コンポーネント
 * 
 * スクロール時の背景変化のみを管理
 * クライアントコンポーネントとして最小限の機能を提供
 */

import { useState, useEffect, ReactNode } from 'react'
import { layout, transitions, zIndex } from '@/lib/design-tokens'

interface ScrollHeaderProps {
  children: ReactNode
}

export function ScrollHeader({ children }: ScrollHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`
        fixed top-0 w-full ${zIndex.fixed}
        ${layout.header}
        ${transitions.all}
        ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
      `}
    >
      {children}
    </header>
  )
}







