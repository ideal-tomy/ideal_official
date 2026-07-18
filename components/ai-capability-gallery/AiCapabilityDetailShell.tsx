'use client'

import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { RelatedPatternsMarquee } from '@/components/ai-capability-gallery/RelatedPatternsMarquee'

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
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 md:py-12 lg:px-8 lg:py-20">
        <nav
          className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[var(--site-border)] pb-3 text-sm md:mb-8 md:pb-6"
          aria-label="ギャラリーナビゲーション"
        >
          <Link
            href={GALLERY_BASE}
            className="text-[var(--site-fg-muted)] transition-colors hover:text-brand"
          >
            <span className="md:hidden">← ギャラリー</span>
            <span className="hidden md:inline">← AI Capability Demo Gallery</span>
          </Link>
          <span className="hidden text-gray-600 md:inline" aria-hidden="true">
            /
          </span>
          <span className="hidden text-[var(--site-fg-muted)] md:inline">
            {page.eyebrow}
          </span>
        </nav>

        <header className="mb-4 md:mb-10 lg:mb-14">
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-brand/90 md:mb-3 md:text-xs">
            {page.eyebrow}
          </p>
          <h1 className="mb-2 text-xl font-bold leading-snug tracking-tight text-[var(--site-fg)] sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl lg:leading-tight">
            {page.title}
          </h1>

          {/* スマホではリード非表示。PC のみ表示 */}
          <p className="mb-4 hidden text-lg leading-relaxed text-[var(--site-fg)]/90 md:block">
            {page.lead}
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {page.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--site-border)] px-2 py-0.5 text-[10px] text-[var(--site-fg-muted)] md:px-2.5 md:py-1 md:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-8 md:space-y-10">{children}</div>

        <footer className="mt-12 border-t border-[var(--site-border)] pt-8 md:mt-16 md:pt-10">
          <div className="mb-10 rounded-xl border border-brand/20 bg-brand/5 p-6">
            <h2 className="mb-2 text-lg font-semibold text-[var(--site-fg)]">
              このデモ、自社でも使えるか整理しませんか
            </h2>
            <p className="mb-4 text-sm text-[var(--site-fg-muted)]">
              AIコンシェルジュが「{page.eyebrow}」を起点に、課題・必要な機能・概算の参考まで案内します。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <OpenConciergeButton
                serviceId="ai-consulting"
                variant="primary"
                size="md"
              >
                自社でも使えるか相談する
              </OpenConciergeButton>
              <Link
                href={GALLERY_BASE}
                className="inline-flex items-center justify-center rounded-lg border border-[var(--site-border)] px-6 py-3 text-sm font-medium text-[var(--site-fg-muted)] transition-colors hover:border-brand/30 hover:text-[var(--site-fg)]"
              >
                他のデモを見る
              </Link>
            </div>
          </div>

          {relatedCapabilities.length > 0 && (
            <RelatedPatternsMarquee items={relatedCapabilities} />
          )}
        </footer>
      </div>
    </div>
  )
}
