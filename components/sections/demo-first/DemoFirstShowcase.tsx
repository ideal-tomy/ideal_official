import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { SectionKicker } from './SectionKicker'

type Props = {
  capabilities: Capability[]
}

/** トップ用：機能選択カード（画像付き・番号なし） */
export function DemoFirstShowcase({ capabilities }: Props) {
  return (
    <section
      id="demos"
      className="bg-[var(--df-bg-blue)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <SectionKicker index="01" label="体験" />
        <h2 className="my-2 mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-6">
          資料ではなく、
          <br className="hidden md:inline" />
          <span className="text-[var(--df-primary-deep)]">動くデモで確かめる。</span>
        </h2>
        <p className="mb-8 max-w-[640px] text-[var(--df-text)] md:mb-10">
          業務課題から生まれた開発デモです。パターンを見比べて、近いものから触ってください。
        </p>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {capabilities.map((cap) => (
            <Link
              key={cap.slug}
              href={cap.href}
              className="group flex flex-col overflow-hidden rounded-[var(--df-radius-card)] border border-[color-mix(in_srgb,var(--df-primary)_18%,transparent)] bg-[var(--df-bg)] transition-colors hover:border-[var(--df-primary)]/45 hover:bg-[var(--df-bg-card)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--df-bg-card)]">
                <ThemeImage
                  src={cap.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
                <div className="mb-3 flex items-center justify-end">
                  <span className="rounded-full bg-[var(--df-primary)]/10 px-2.5 py-0.5 text-[11px] font-bold text-[var(--df-primary-deep)]">
                    体験
                  </span>
                </div>
                <p className="mb-1.5 text-sm font-black tracking-wide text-[var(--df-primary)]">
                  {cap.subtitle}
                </p>
                <h3 className="mb-2 text-base font-black leading-snug text-[var(--df-text)] md:text-lg">
                  {cap.title}
                </h3>
                <p className="mb-3 text-xs leading-relaxed text-[var(--df-text-muted)]">
                  {cap.before}
                  <span className="mx-1.5 font-bold text-[var(--df-primary)]">→</span>
                  {cap.after}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {cap.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--site-border)] px-2 py-px text-[10px] text-[var(--df-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-auto text-sm font-bold text-[var(--df-primary)] transition-colors group-hover:text-[var(--df-primary-hover)]">
                  触ってみる →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
