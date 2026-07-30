'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { headerFooterServiceLinks } from '@/data/services/service-links'

type FabServicesMenuProps = {
  pathname: string
}

/** PC ナビ用：サービス下層へのクリック開ドロップダウン */
export function FabServicesMenu({ pathname }: FabServicesMenuProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement>(null)
  const menuId = useId()
  const isActive =
    pathname === '/services' || pathname.startsWith('/services/')

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <li ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--df-primary)] ${
          isActive ? 'text-[var(--df-primary)]' : 'text-[var(--site-fg)]/80'
        }`}
      >
        サービス
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          onMouseLeave={() => setOpen(false)}
          className="absolute left-1/2 top-full z-50 mt-2 min-w-[15rem] -translate-x-1/2 rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)] py-2 shadow-lg"
        >
          {headerFooterServiceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-[color-mix(in_srgb,var(--site-fg)_6%,transparent)] hover:text-[var(--df-primary)] ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? 'text-[var(--df-primary)]'
                  : 'text-[var(--site-fg)]/85'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="my-1.5 border-t border-[var(--site-border)]" />
          <Link
            href="/services"
            role="menuitem"
            className="block px-4 py-2.5 text-sm font-medium text-[var(--df-primary)] transition-colors hover:bg-[color-mix(in_srgb,var(--site-fg)_6%,transparent)]"
            onClick={() => setOpen(false)}
          >
            サービス一覧を見る
          </Link>
        </div>
      ) : null}
    </li>
  )
}
