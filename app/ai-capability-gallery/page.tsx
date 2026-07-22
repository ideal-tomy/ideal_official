import type { Metadata } from 'next'
import Image from 'next/image'
import { SingleColumnSection } from '@/components/sections/SingleColumnSection'
import { GalleryHero } from '@/components/ai-capability-gallery/GalleryHero'
import { CapabilityCardGrid } from '@/components/ai-capability-gallery/CapabilityCardGrid'
import { CapabilityShowcase } from '@/components/ai-capability-gallery/CapabilityShowcase'
import { GalleryCta } from '@/components/ai-capability-gallery/GalleryCta'
import { GallerySectionNav } from '@/components/ai-capability-gallery/GallerySectionNav'
import {
  galleryImages,
  howToUseSteps,
} from '@/data/ai-capability-gallery/capabilities'

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

export default function AiCapabilityGalleryPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <GalleryHero />

      {/* PC: Showcase 用ドットナビ（スマホはカード主導線のため非表示） */}
      <div className="hidden md:contents">
        <GallerySectionNav />
      </div>

      {/* PC 向け導入。スマホは Hero → カードへ直行 */}
      <div className="hidden md:block">
        <SingleColumnSection
          title="AI機能ではなく、業務の変化を見せる。"
          description="このギャラリーでは、「AIチャットボット」「OCR」「自動化ツール」といった技術名ではなく、実際の仕事がどう変わるかを7つのパターンに整理して紹介します。"
          variant="dark"
          padding="lg"
        >
          <></>
        </SingleColumnSection>
      </div>

      <CapabilityCardGrid />

      <div className="hidden md:block">
        <CapabilityShowcase />
      </div>

      <section className="relative hidden overflow-hidden border-t border-[var(--site-border)] bg-[var(--site-bg)] py-16 md:block lg:py-20">
        <Image
          src={galleryImages.background}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--site-bg)]/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[var(--site-fg)] md:text-4xl">
              このサイトの見方
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[var(--site-fg-muted)] md:text-lg">
              まず変化の全体像を選び、そのあと大きなビジュアルで変わる瞬間を確認し、最後に実際のデモを体験します。
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {howToUseSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/80 p-6 backdrop-blur-sm"
              >
                <span className="mb-3 block text-2xl font-bold text-brand/50">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[var(--site-fg)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <SingleColumnSection
          title="機能を作る前に、何を変えるべきかを見極める。"
          description="我々は、企業ごとの異なる課題に対して、どこに技術を介入させるべきかを見つけ、必要ならプロトタイプを作り、業務の未来を先に見せます。このギャラリーは、そのための基本パターン集です。"
          variant="dark"
          padding="lg"
        >
          <></>
        </SingleColumnSection>
      </div>

      <section className="border-t border-[var(--site-border)] bg-[var(--site-bg)] py-10 md:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand/90">
            活用イメージ
          </p>
          <h2 className="mb-3 text-xl font-bold text-[var(--site-fg)] md:text-2xl">
            業界の流れに、置き換えてみる
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[var(--site-fg-muted)]">
            建設の現場写真整理など、Before / After の業務フローから自社への当てはめを考えられます。
          </p>
          <a
            href="/cases"
            className="inline-flex items-center text-sm font-medium text-[var(--site-fg-muted)] transition-colors hover:text-brand"
          >
            活用イメージを読む →
          </a>
        </div>
      </section>

      <GalleryCta />
    </div>
  )
}
