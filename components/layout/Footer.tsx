/**
 * Footer コンポーネント
 *
 * 全ページ共通のフッター
 * サーバーコンポーネント（静的な内容のみ）
 */

import Link from 'next/link'
import { layout } from '@/lib/design-tokens'
import {
  headerFooterServiceLinks,
  labNavLinks,
} from '@/data/services/service-links'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const exploreLinks = [
    { href: '/', label: 'トップ' },
    { href: '/#articles', label: '現場の記事' },
    { href: '/contact', label: '問い合わせ' },
  ]

  const serviceLinks = headerFooterServiceLinks

  const linkClass =
    'text-sm font-medium text-white/90 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70'

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className={`${layout.container} py-14 lg:py-16`}>
        <div className="flex flex-col gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.08em] text-[#9ec0ff]">ideal</p>
            <p className="mt-2 text-[26px] font-bold leading-snug [word-break:keep-all]">
              <span className="block">動くデモから、</span>
              <span className="block">一緒に設計します。</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 [word-break:keep-all]">
              相談だけで終えても、テストのあとで止めても構いません。
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2b6fe0] px-5 text-sm font-bold text-white"
          >
            問い合わせる
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h2 className="mb-3 text-sm font-bold tracking-[0.06em] text-[#9ec0ff]">見る</h2>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} scroll prefetch={false} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold tracking-[0.06em] text-[#9ec0ff]">サービス</h2>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} scroll prefetch={false} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" scroll prefetch={false} className={linkClass}>
                  サービス内容
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" scroll prefetch={false} className={linkClass}>
                  導入の流れ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold tracking-[0.06em] text-[#9ec0ff]">LAB</h2>
            <ul className="space-y-2">
              {labNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} scroll prefetch={false} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-sm text-white/80">
          &copy; {currentYear} ideal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
