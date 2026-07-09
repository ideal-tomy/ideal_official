import Image from 'next/image'
import Link from 'next/link'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import {
  AI_HUB_GALLERY,
  galleryCapabilityHref,
} from '@/data/services/ai-hub'

export function AiHubCapabilityGrid() {
  return (
    <section id="capabilities" className="bg-black py-16 lg:py-20 border-b border-blue-400/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            7つの業務変化パターン
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            技術名ではなく、仕事がどう変わるかで整理しています。気になるパターンからデモへ進めます。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {capabilities.map((capability) => {
            const href = galleryCapabilityHref(capability.slug)
            return (
              <Link
                key={capability.id}
                href={href}
                className="group flex flex-col h-full rounded-xl border border-gray-800 bg-gray-900/40 overflow-hidden hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                  <Image
                    src={capability.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute top-3 left-3 text-xs font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded">
                    {String(capability.number).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[11px] tracking-[0.18em] text-cyan-400/90 mb-2">
                    {capability.englishLabel}
                  </p>
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                    {capability.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    デモを見る →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={AI_HUB_GALLERY}
            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ギャラリー全体を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
