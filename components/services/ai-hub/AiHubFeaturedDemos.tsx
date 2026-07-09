import Image from 'next/image'
import Link from 'next/link'
import {
  galleryCapabilityHref,
  galleryDemoHref,
  getFeaturedCapabilities,
} from '@/data/services/ai-hub'

export function AiHubFeaturedDemos() {
  const featured = getFeaturedCapabilities()

  return (
    <section className="bg-black py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            まずはここから触る
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            変化が分かりやすい3本です。ショーケースで流れを見て、そのままデモを体験できます。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((capability) => (
            <article
              key={capability.id}
              className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden"
            >
              <Link
                href={galleryCapabilityHref(capability.slug)}
                className="relative aspect-[16/10] overflow-hidden group"
              >
                <Image
                  src={capability.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-3 left-3 right-3 text-[11px] tracking-[0.16em] text-brand-hover">
                  {capability.englishLabel}
                </p>
              </Link>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed flex-1">
                  {capability.showcaseLead}
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href={galleryCapabilityHref(capability.slug)}
                    className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
                  >
                    ギャラリーで見る →
                  </Link>
                  <Link
                    href={galleryDemoHref(capability.slug)}
                    className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-hover transition-colors"
                  >
                    デモを体験
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
