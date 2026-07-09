'use client'

import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export interface CapabilityDetailMeta {
  slug: string
  eyebrow: string
  title: string
  lead: string
  tags: string[]
}

interface AiCapabilityDetailShellProps {
  page: CapabilityDetailMeta
  children: React.ReactNode
  relatedCapabilities?: Capability[]
}

export function AiCapabilityDetailShell({
  page,
  children,
  relatedCapabilities = [],
}: AiCapabilityDetailShellProps) {
  const contactPrefill = encodeURIComponent(
    `「${page.title}」のデモをベースに、自社向けのプロトタイプを相談したいです。`
  )

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-8 pb-6 border-b border-gray-800"
          aria-label="ギャラリーナビゲーション"
        >
          <Link
            href={GALLERY_BASE}
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            ← AI Capability Demo Gallery
          </Link>
          <span className="text-gray-600" aria-hidden="true">
            /
          </span>
          <span className="text-gray-400">{page.eyebrow}</span>
        </nav>

        <header className="mb-10 lg:mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-3">
            {page.eyebrow}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {page.title}
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">{page.lead}</p>
          <div className="flex flex-wrap gap-2">
            {page.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-10">{children}</div>

        <footer className="mt-16 pt-10 border-t border-gray-800">
          <div className="mb-10 p-6 rounded-xl border border-blue-400/20 bg-blue-500/5">
            <h2 className="text-lg font-semibold text-white mb-2">
              このデモを自社向けに作りたい方へ
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              業界特化版や実運用に向けたプロトタイプのご相談を承ります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?service=ai-consulting&intent=gallery&prefill=${contactPrefill}`}
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
              >
                自社向け開発を相談する
              </Link>
              <Link
                href={GALLERY_BASE}
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 hover:border-blue-400/30 hover:text-white transition-colors"
              >
                他のデモを見る
              </Link>
            </div>
          </div>

          {relatedCapabilities.length > 0 && (
            <>
              <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                他のパターン
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {relatedCapabilities.map((related) => (
                  <li key={related.id}>
                    {related.status === 'ready' ? (
                      <Link
                        href={related.href}
                        className="block p-4 rounded-lg border border-gray-800 bg-gray-900/40 hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
                      >
                        <span className="text-sm font-medium text-white">{related.subtitle}</span>
                        <span className="block text-xs text-gray-400 mt-1 line-clamp-2">
                          {related.title}
                        </span>
                      </Link>
                    ) : (
                      <div className="block p-4 rounded-lg border border-gray-800 bg-gray-900/20 opacity-60">
                        <span className="text-sm font-medium text-gray-400">{related.subtitle}</span>
                        <span className="block text-xs text-gray-500 mt-1">準備中</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </footer>
      </div>
    </div>
  )
}
