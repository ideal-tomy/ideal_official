import type { Metadata } from 'next'
import Link from 'next/link'
import { GalleryHero } from '@/components/ai-capability-gallery/GalleryHero'
import { CapabilityCardGrid } from '@/components/ai-capability-gallery/CapabilityCardGrid'
import { CapabilityShowcase } from '@/components/ai-capability-gallery/CapabilityShowcase'
import { GallerySectionNav } from '@/components/ai-capability-gallery/GallerySectionNav'
import { HowWeWorkSummary } from '@/components/how-we-work/HowWeWorkSummary'

export const metadata: Metadata = {
  title: 'AI Capability Demo Gallery | ideal',
  description:
    'AIで何ができるのかを、見て・触って・自社業務に置き換えて想像できるデモギャラリー。7つの業務変化パターンを体験できます。',
  openGraph: {
    title: 'AI Capability Demo Gallery | ideal',
    description:
      'AIで何ができるのかを、見て・触って・自社業務に置き換えて想像できるデモギャラリー。',
  },
}

const navBtn =
  'inline-flex flex-1 items-center justify-center rounded-lg px-3 py-3.5 text-center text-sm font-semibold transition-colors sm:min-w-[9.5rem] sm:px-6'

export default function AiCapabilityGalleryPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <GalleryHero />

      {/* PC: Showcase 用ドットナビ（スマホはカード主導線のため非表示） */}
      <div className="hidden md:contents">
        <GallerySectionNav />
      </div>

      <CapabilityCardGrid />

      <div className="hidden md:block">
        <CapabilityShowcase />
      </div>

      <section className="border-t border-[var(--site-border)] bg-[var(--site-bg)] py-10 md:py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
            Next
          </p>
          <h2 className="mb-6 text-center text-xl font-bold text-[var(--site-fg)] md:text-2xl">
            次に進む
          </h2>
          <div className="flex gap-2 sm:gap-3">
            <Link
              href="/cases"
              className={`${navBtn} bg-brand text-white hover:bg-brand-hover`}
            >
              活用イメージ
            </Link>
            <Link
              href="/estimate"
              className={`${navBtn} border border-[var(--site-border)] text-[var(--site-fg)] hover:border-brand/40 hover:bg-brand/5`}
            >
              概算見積もり
            </Link>
            <Link
              href="/contact?service=ai-consulting&intent=gallery"
              className={`${navBtn} border border-[var(--site-border)] text-[var(--site-fg)] hover:border-brand/40 hover:bg-brand/5`}
            >
              問い合わせ
            </Link>
          </div>
        </div>
      </section>

      <HowWeWorkSummary showEstimateLink showCasesLink={false} />
    </div>
  )
}
