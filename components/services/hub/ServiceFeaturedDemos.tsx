import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import {
  getHubFeaturedDemos,
  galleryDemoHref,
} from '@/data/services/hub'
import { AI_HUB_GALLERY } from '@/data/services/ai-hub'

export function ServiceFeaturedDemos() {
  const demos = getHubFeaturedDemos()
  const [featured, ...rest] = demos

  if (!featured) return null

  return (
    <ServiceSectionShell
      surface="band"
      title="まずはデモを触ってみる"
      lead="言葉や資料ではなく、触れる体験で開発力を確認できます。"
      maxWidth="6xl"
    >
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
        <Link
          href={galleryDemoHref(featured.slug)}
          className="group overflow-hidden rounded-xl border border-white/10 bg-black/20 transition-transform hover:-translate-y-0.5"
        >
          <div className="relative aspect-[16/10] w-full">
            <ThemeImage
              src={featured.image}
              alt=""
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 55vw"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="text-xs font-medium text-white/70">
                {featured.subtitle}
              </p>
              <h3 className="mt-1 text-lg font-bold text-white md:text-xl">
                {featured.title}
              </h3>
              <span className="mt-3 inline-block text-sm font-bold text-brand">
                デモを開く →
              </span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-4">
          {rest.map((demo) => (
            <Link
              key={demo.id}
              href={galleryDemoHref(demo.slug)}
              className="group flex gap-4 overflow-hidden rounded-xl border border-white/10 bg-black/20 p-3 transition-colors hover:border-brand/40"
            >
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
                <ThemeImage
                  src={demo.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="112px"
                  aria-hidden
                />
              </div>
              <div className="min-w-0 flex-1 py-0.5">
                <p className="text-[11px] text-[var(--service-band-muted)]">
                  {demo.subtitle}
                </p>
                <h3 className="mt-0.5 line-clamp-2 text-sm font-bold text-[var(--service-band-fg)]">
                  {demo.title}
                </h3>
                <span className="mt-2 inline-block text-xs font-bold text-brand">
                  デモを開く →
                </span>
              </div>
            </Link>
          ))}
          <Link
            href={AI_HUB_GALLERY}
            className="mt-auto text-center text-sm font-medium text-[var(--service-band-muted)] transition-colors hover:text-brand"
          >
            デモ一覧をすべて見る →
          </Link>
        </div>
      </div>
    </ServiceSectionShell>
  )
}
