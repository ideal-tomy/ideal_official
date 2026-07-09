/**
 * Footer コンポーネント
 *
 * 全ページ共通のフッター
 * サーバーコンポーネント（静的な内容のみ）
 */

import Link from 'next/link'
import { layout, colors, borders } from '@/lib/design-tokens'
import {
  headerFooterServiceLinks,
  labNavLinks,
} from '@/data/services/service-links'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const exploreLinks = [
    { href: '/', label: 'トップ' },
    { href: '/ai-capability-gallery', label: 'デモ' },
    { href: '/cases', label: '事例' },
    { href: '/contact', label: '問い合わせ' },
  ]

  const serviceLinks = headerFooterServiceLinks

  return (
    <footer
      className={`
        ${colors.bg.secondary}
        ${borders.borderTop}
        ${layout.footer}
      `}
    >
      <div className={layout.container}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className={`${colors.text.primary} text-xl font-bold mb-4`}>
              ideal
            </h3>
            <p className={`${colors.text.muted} text-sm leading-relaxed`}>
              多機能よりも
              <br />
              シンプルな使用環境を
            </p>
          </div>

          <div>
            <h4 className={`${colors.text.primary} text-lg font-bold mb-4`}>
              体験する
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll
                    prefetch={false}
                    className={`
                      ${colors.text.muted}
                      hover:${colors.text.primary}
                      text-sm
                      transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-400
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${colors.text.primary} text-lg font-bold mb-4`}>
              サービス
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll
                    prefetch={false}
                    className={`
                      ${colors.text.muted}
                      hover:${colors.text.primary}
                      text-sm
                      transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-400
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  scroll
                  prefetch={false}
                  className={`
                    ${colors.text.muted}
                    hover:${colors.text.primary}
                    text-sm
                    transition-colors duration-300
                    focus:outline-none focus:ring-2 focus:ring-blue-400
                  `}
                >
                  一覧
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`${colors.text.primary} text-lg font-bold mb-4`}>
              LAB
            </h4>
            <ul className="space-y-2">
              {labNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll
                    prefetch={false}
                    className={`
                      ${colors.text.muted}
                      hover:${colors.text.primary}
                      text-sm
                      transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-400
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 ${borders.borderTop} text-center`}>
          <p className={`${colors.text.muted} text-sm`}>
            &copy; {currentYear} ideal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
