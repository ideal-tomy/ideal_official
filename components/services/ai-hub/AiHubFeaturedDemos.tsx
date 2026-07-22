import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import {
  AI_HUB_GALLERY,
  galleryDemoHref,
  getFeaturedCapabilities,
} from '@/data/services/ai-hub'

export function AiHubFeaturedDemos() {
  const featured = getFeaturedCapabilities()

  return (
    <section className="bg-black py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            まずはここから触る
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            トップと同じ代表3本です。サンプルデータで動くデモをそのまま体験できます。
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((capability) => (
            <article
              key={capability.id}
              className="flex flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]"
            >
              <Link
                href={galleryDemoHref(capability.slug)}
                className="group relative aspect-[16/9] overflow-hidden"
              >
                <ThemeImage
                  src={capability.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </Link>

              <div className="flex flex-1 flex-col bg-[var(--site-bg-elevated)] p-5">
                <p className="mb-1 text-xs font-medium text-brand/90">
                  {capability.subtitle}
                </p>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--site-fg)]">
                  {capability.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
                  {capability.showcaseLead}
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href={galleryDemoHref(capability.slug)}
                    className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
                  >
                    デモを体験
                  </Link>
                  <Link
                    href={AI_HUB_GALLERY}
                    className="text-center text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                  >
                    デモ一覧を見る →
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
