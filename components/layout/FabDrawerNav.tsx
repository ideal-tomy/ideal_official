'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useState } from 'react'

type NavItem = {
  href: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'トップ' },
  { href: '/flow', label: '導入の流れ' },
  { href: '/services', label: 'サービス' },
  { href: '/lab', label: 'LAB' },
  { href: '/contact', label: 'お問い合わせ' },
]

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string
  label: string
  pathname: string
}) {
  const active =
    pathname === href || (href !== '/' && pathname.startsWith(href))
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-[var(--df-primary)] ${
        active ? 'text-[var(--df-primary)]' : 'text-[var(--site-fg)]/80'
      }`}
    >
      {label}
    </Link>
  )
}

export function FabDrawerNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
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
      <header className="sticky top-0 z-[1000] hidden border-b border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] bg-[color-mix(in_srgb,var(--site-bg)_80%,transparent)] backdrop-blur-md md:block">
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
            <li>
              <NavLink href="/flow" label="導入の流れ" pathname={pathname} />
            </li>
            <li>
              <NavLink href="/services" label="サービス" pathname={pathname} />
            </li>
            <li>
              <NavLink href="/lab" label="LAB" pathname={pathname} />
            </li>
            <li>
              <NavLink href="/contact" label="お問い合わせ" pathname={pathname} />
            </li>
          </ul>
        </nav>
      </header>

      <header className="sticky top-0 z-[1100] border-b border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_80%,transparent)] backdrop-blur-md md:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <Link
            href="/"
            className={`px-1 py-2 text-[22px] font-black tracking-[0.06em] text-[var(--site-fg)] ${
              open ? 'invisible' : ''
            }`}
          >
            ideal
          </Link>

          <button
            type="button"
            className={`grid h-11 min-h-11 w-11 min-w-11 place-items-center text-[var(--site-fg)] ${
              open ? 'fab-open' : ''
            }`}
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
            aria-controls="site-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">メニュー</span>
            <span className="flex w-6 flex-col gap-[5px]" aria-hidden>
              <span
                className={`block h-0.5 w-full bg-[var(--site-fg)] transition-transform duration-300 ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[var(--site-fg)] transition-opacity duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[var(--site-fg)] transition-transform duration-300 ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>

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
      </div>
    </>
  )
}
