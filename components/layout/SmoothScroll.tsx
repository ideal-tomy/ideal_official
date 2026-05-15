'use client'

/**
 * SmoothScroll コンポーネント
 * 
 * スムーズスクロール機能を提供
 * ホワイトペーパーのナビゲーションリンク用
 */

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    // ナビゲーションリンクのスムーズスクロール機能
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      
      // nav-linkクラスを持つリンクのみ処理
      if (!target.classList.contains('nav-link')) return
      
      e.preventDefault()
      
      const targetId = target.getAttribute('href')
      if (!targetId || !targetId.startsWith('#')) return
      
      const targetElement = document.querySelector(targetId)
      if (!targetElement) return
      
      const headerHeight = 80 // ヘッダーの高さ
      const targetPosition = (targetElement as HTMLElement).offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }

    // イベントリスナーを追加
    document.addEventListener('click', handleSmoothScroll)
    
    // クリーンアップ
    return () => {
      document.removeEventListener('click', handleSmoothScroll)
    }
  }, [])

  return null
}
