'use client'

/**
 * ServicesDropdown コンポーネント
 * 
 * サービスドロップダウンメニューの開閉機能のみを管理
 * クライアントコンポーネントとして最小限の機能を提供
 */

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { colors, transitions } from '@/lib/design-tokens'

interface ServicesDropdownProps {
  serviceLinks: Array<{ href: string; label: string }>
}

export function ServicesDropdown({ serviceLinks }: ServicesDropdownProps) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesDropdownOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('[data-dropdown]')) {
          setIsServicesDropdownOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isServicesDropdownOpen])

  return (
    <li className="relative" data-dropdown>
      <button
        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
        className={`
          ${colors.text.secondary}
          ${transitions.colors}
          hover:${colors.text.primary}
          ${colors.state.focus}
          focus:outline-none
          text-base lg:text-lg
          flex items-center gap-1
        `}
      >
        Services
        <svg 
          className={`w-4 h-4 ${transitions.all} ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isServicesDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
          <div className="py-2">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-700 my-2"></div>
            <Link
              href="/services"
              prefetch={false}
              className="block px-4 py-2 text-sm text-blue-400 hover:bg-gray-800 transition-colors"
              onClick={() => setIsServicesDropdownOpen(false)}
            >
              すべてのサービスを見る
            </Link>
          </div>
        </div>
      )}
    </li>
  )
}


