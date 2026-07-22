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
  const navLinks = [
    { href: '/', label: 'トップ' },
    { href: '/ai-capability-gallery', label: 'デモ一覧' },
    { href: '/cases', label: '事例' },
    { href: '/lab', label: 'LAB' },
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
        <Link
          href="/"
          scroll
          prefetch={true}
          className={`
            text-2xl font-bold ${colors.text.primary}
            ${transitions.colors}
            hover:${colors.accent.primary}
          `}
        >
          ideal
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll
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

          <ServicesDropdown serviceLinks={serviceLinks} />

          {navLinks.slice(3).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll
                prefetch={false}
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
        </ul>

        <MobileMenu navLinks={navLinks} serviceLinks={serviceLinks} />
      </nav>
    </ScrollHeader>
  )
}
