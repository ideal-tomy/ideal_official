/**
 * Header コンポーネント（サーバーコンポーネント版）
 * 
 * 全ページ共通のナビゲーションヘッダー
 * 静的な部分はサーバーコンポーネント、動的な部分のみクライアントコンポーネント
 */

import Link from 'next/link'
import { layout, colors, transitions } from '@/lib/design-tokens'
import { headerFooterServiceLinks } from '@/data/services/service-links'
import { ScrollHeader } from './ScrollHeader'
import { ServicesDropdown } from './ServicesDropdown'
import { MobileMenu } from './MobileMenu'

export function Header() {
  // ナビゲーションリンク
  const navLinks = [
    { href: '/', label: 'トップ' },
    { href: '/philosophy', label: 'DAO研究・取り組み' },
    { href: '/contact', label: '問い合わせ' },
  ]

  const serviceLinks = headerFooterServiceLinks

  return (
    <ScrollHeader>
      <nav
        className={`${layout.container} h-full flex items-center justify-between`}
        role="navigation"
        aria-label="メインナビゲーション"
      >
        {/* ロゴ */}
        <Link
          href="/"
          prefetch={true}
          className={`
            text-2xl font-bold ${colors.text.primary}
            ${transitions.colors}
            hover:${colors.accent.primary}
          `}
        >
          ideal
        </Link>

        {/* デスクトップメニュー */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                prefetch={link.href === '/' ? true : false}
                className={`
                  ${colors.text.secondary}
                  ${transitions.colors}
                  hover:${colors.text.primary}
                  ${colors.state.focus}
                  focus:outline-none
                  text-base lg:text-lg
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Services ドロップダウン（クライアントコンポーネント） */}
          <ServicesDropdown serviceLinks={serviceLinks} />
        </ul>

        {/* モバイルメニュー（クライアントコンポーネント） */}
        <MobileMenu navLinks={navLinks} serviceLinks={serviceLinks} />
      </nav>
    </ScrollHeader>
  )
}
