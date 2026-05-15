'use client'

/**
 * MobileMenu コンポーネント
 * 
 * モバイルメニューの開閉機能のみを管理
 * クライアントコンポーネントとして最小限の機能を提供
 */

import Link from 'next/link'
import { useState } from 'react'
import { colors, transitions } from '@/lib/design-tokens'

interface MobileMenuProps {
  navLinks: Array<{ href: string; label: string }>
  serviceLinks: Array<{ href: string; label: string }>
}

export function MobileMenu({ navLinks, serviceLinks }: MobileMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* モバイルメニューボタン */}
      <button
        type="button"
        className={`
          md:hidden
          ${colors.text.primary}
          ${colors.state.focus}
          focus:outline-none
          p-2
        `}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="メニューを開く"
        aria-expanded={isMobileMenuOpen}
      >
        {/* ハンバーガーアイコン */}
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            // ✕ アイコン
            <>
              <path d="M6 18L18 6M6 6l12 12" />
            </>
          ) : (
            // ≡ アイコン
            <>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </>
          )}
        </svg>
      </button>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div
          className={`
            md:hidden
            absolute top-full left-0 right-0
            ${colors.bg.primary}
            border-t ${colors.luxury.border}
          `}
        >
          <ul className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    block
                    ${colors.text.secondary}
                    ${transitions.colors}
                    hover:${colors.text.primary}
                    ${colors.state.focus}
                    focus:outline-none
                    text-lg
                    py-2
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            {/* モバイル用Servicesメニュー */}
            <li>
              <div className="text-gray-300 font-medium mb-2">Services</div>
              <ul className="ml-4 space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
                        block
                        ${colors.text.secondary}
                        ${transitions.colors}
                        hover:${colors.text.primary}
                        ${colors.state.focus}
                        focus:outline-none
                        text-base
                        py-1
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className={`
                      block
                      text-blue-400
                      ${transitions.colors}
                      hover:text-blue-300
                      ${colors.state.focus}
                      focus:outline-none
                      text-base
                      py-1
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    すべてのサービスを見る
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}


