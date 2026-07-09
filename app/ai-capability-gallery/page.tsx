import type { Metadata } from 'next'
import { SingleColumnSection } from '@/components/sections/SingleColumnSection'
import { GalleryHero } from '@/components/ai-capability-gallery/GalleryHero'
import { CapabilityCardGrid } from '@/components/ai-capability-gallery/CapabilityCardGrid'
import { GalleryCta } from '@/components/ai-capability-gallery/GalleryCta'
import { howToUseSteps } from '@/data/ai-capability-gallery/capabilities'

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
    <div className="bg-black min-h-screen">
      <GalleryHero />

      <SingleColumnSection
        title="AI機能ではなく、業務の変化を見せる。"
        description="このギャラリーでは、「AIチャットボット」「OCR」「自動化ツール」といった技術名ではなく、実際の仕事がどう変わるかを7つのパターンに整理して紹介します。"
        variant="dark"
        padding="lg"
      >
        <></>
      </SingleColumnSection>

      <CapabilityCardGrid />

      <section className="bg-black py-16 lg:py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              このサイトの見方
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {howToUseSteps.map((step, index) => (
              <div
                key={step.title}
                className="p-6 rounded-xl border border-gray-800 bg-gray-900/40"
              >
                <span className="text-2xl font-bold text-blue-400/60 mb-3 block">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SingleColumnSection
        title="機能を作る前に、何を変えるべきかを見極める。"
        description="我々は、企業ごとに異なる課題に対して、どこに技術を介入させるべきかを見つけ、必要ならプロトタイプを作り、業務の未来を先に見せます。このギャラリーは、そのための基本パターン集です。"
        variant="dark"
        padding="lg"
      >
        <></>
      </SingleColumnSection>

      <GalleryCta />
    </div>
  )
}
