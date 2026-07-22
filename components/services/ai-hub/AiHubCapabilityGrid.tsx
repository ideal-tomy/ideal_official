import Image from 'next/image'
import Link from 'next/link'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import {
  AI_HUB_GALLERY,
  galleryDemoHref,
} from '@/data/services/ai-hub'

export function AiHubCapabilityGrid() {
  return (
    <section id="capabilities" className="bg-black py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brand to-brand-hover bg-clip-text text-transparent">
            7つの業務変化パターン
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            技術名ではなく、仕事がどう変わるかで整理しています。気になるパターンからデモへ進めます。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {capabilities.map((capability) => {
            const href = galleryDemoHref(capability.slug)
            return (
              <Link
                key={capability.id}
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-brand/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--site-bg)]">
                  <Image
                    src={capability.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-3 top-3 hidden rounded bg-black/55 px-2 py-0.5 font-mono text-xs text-white md:inline">
                    {String(capability.number).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-1 flex-col bg-[var(--site-bg-elevated)] p-4">
                  <p className="mb-1 text-xs font-medium text-brand/90">
                    {capability.subtitle}
                  </p>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-[var(--site-fg)]">
                    {capability.title}
                  </h3>
                  <p className="mb-3 text-xs leading-relaxed text-[var(--site-fg-muted)]">
                    {capability.before} → {capability.after}
                  </p>
                  <span className="mt-auto inline-flex items-center text-sm font-medium text-brand transition-colors group-hover:text-brand-hover">
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
            className="inline-flex items-center text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            デモ一覧をすべて見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
