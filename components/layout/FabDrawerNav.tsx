'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useState } from 'react'
import { useTheme } from '@/components/theme/ThemeProvider'

type NavItem = {
  href: string
  label: string
}

/** 実ページのみ（同一ページ内アンカーは含めない） */
const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'トップ' },
  { href: '/ai-capability-gallery', label: 'デモ一覧' },
  { href: '/cases', label: '活用イメージ' },
  { href: '/services', label: 'サービス一覧' },
  { href: '/estimate', label: '自動見積もり' },
  { href: '/lab', label: 'LAB' },
  { href: '/contact', label: 'お問い合わせ' },
]

function ThemeToggleButton({
  theme,
  onToggle,
  className = '',
  compact = false,
}: {
  theme: 'light' | 'dark'
  onToggle: () => void
  className?: string
  compact?: boolean
}) {
  const label =
    theme === 'dark'
      ? compact
        ? 'ライト'
        : 'ライトモードへ'
      : compact
        ? 'ダーク'
        : 'ダークモードへ'
  return (
    <button
      type="button"
      onClick={onToggle}
      className={className}
      aria-label={theme === 'dark' ? 'ライトモードへ切替' : 'ダークモードへ切替'}
    >
      {label}
    </button>
  )
}

export function FabDrawerNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const titleId = useId()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <>
      {/* PC: 横ナビバー */}
      <header
        className="sticky top-0 z-[1000] hidden border-b border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] bg-[color-mix(in_srgb,var(--site-bg)_92%,transparent)] backdrop-blur-md md:block"
      >
        <nav
          className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8"
          aria-label="メインナビゲーション"
        >
          <Link
            href="/"
            className="shrink-0 text-lg font-black tracking-[0.06em] text-[var(--site-fg)]"
          >
            ideal
          </Link>

          <ul className="flex flex-1 items-center justify-end gap-5 lg:gap-6">
            {NAV_ITEMS.filter((item) => item.href !== '/').map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--df-primary)] ${
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href))
                      ? 'text-[var(--df-primary)]'
                      : 'text-[var(--site-fg)]/80'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggleButton
                theme={theme}
                onToggle={toggleTheme}
                compact
                className="rounded-md border border-[color-mix(in_srgb,var(--site-fg)_25%,transparent)] px-3 py-1.5 text-xs font-bold text-[var(--site-fg)] transition-colors hover:border-[var(--df-primary)] hover:text-[var(--df-primary)]"
              />
            </li>
          </ul>
        </nav>
      </header>

      {/* SP: ロゴ（メニュー開時は非表示） */}
      <Link
        href="/"
        className={`fixed left-4 top-4 z-[1000] rounded-lg bg-[color-mix(in_srgb,var(--site-bg)_55%,transparent)] px-3 py-2 text-[22px] font-black tracking-[0.06em] text-[var(--site-fg)] backdrop-blur-sm md:hidden ${
          open ? 'hidden' : ''
        }`}
      >
        ideal
      </Link>

      <button
        type="button"
        className={`fixed right-4 top-4 z-[1100] grid h-14 w-14 place-items-center rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,.2)] md:hidden ${
          open ? 'fab-open' : ''
        }`}
        style={{ background: 'var(--df-primary)' }}
        aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={open}
        aria-controls="site-drawer"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">メニュー</span>
        <span className="flex w-6 flex-col gap-[5px]" aria-hidden>
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      {/* SP: 全画面ドロワー */}
      <div
        id="site-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`fixed inset-0 z-[1000] flex flex-col justify-start px-8 pt-20 pb-12 transition-[opacity,visibility] duration-350 md:hidden ${
          open
            ? 'visible opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(160deg, var(--df-hero-2), var(--df-primary-deep))',
        }}
      >
        <h2 id={titleId} className="sr-only">
          サイトメニュー
        </h2>
        <nav className="mx-auto w-full max-w-md" aria-label="メインナビゲーション">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="block border-b border-white/15 py-3 text-[20px] font-bold text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3">
          <ThemeToggleButton
            theme={theme}
            onToggle={toggleTheme}
            className="inline-flex items-center justify-center rounded-[var(--df-radius-btn,8px)] border border-white/50 bg-transparent px-7 py-3 font-bold text-white"
          />
        </div>
      </div>
    </>
  )
}
