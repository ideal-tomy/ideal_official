import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

type Props = {
  capabilities: Capability[]
}

export function DemoFirstGallery({ capabilities }: Props) {
  return (
    <section
      id="gallery"
      className="py-[var(--df-sec-pad)] text-[var(--df-on-primary)]"
      style={{
        background:
          'linear-gradient(170deg, var(--df-hero-1), var(--df-hero-2) 60%, var(--df-hero-3))',
      }}
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[#BFE0FF] md:block">
          Gallery
        </p>
        <h2 className="my-2 mb-6 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-white">
          これまでに作った
          <br className="hidden md:inline" />
          開発デモの一部。
        </h2>
        <p className="mb-12 max-w-[600px] text-white/90">
          どれも実在する業務課題から生まれたものです。似た課題をお持ちなら、そのままカスタマイズの相談から始められます。
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <article
              key={cap.slug}
              className="rounded-[var(--df-radius-card)] border border-white/35 bg-white/10 p-6 backdrop-blur-[2px]"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                {cap.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/80 px-3 py-0.5 text-xs font-bold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-[17px] font-black leading-[1.6]">{cap.title}</h3>
              <p className="text-[13.5px] opacity-90">{cap.showcaseLead}</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-4 text-[13px]">
                <span className="opacity-90">{cap.subtitle}</span>
                <Link
                  href={cap.href}
                  className="inline-flex h-10 w-14 items-center justify-center rounded-[var(--df-radius-btn)] bg-white font-bold text-[var(--df-primary)] transition-transform hover:translate-x-1"
                  aria-label={`${cap.title}を開く`}
                >
                  →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={GALLERY_BASE}
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] bg-white px-7 py-3.5 font-bold text-[var(--df-primary-deep)] transition-transform hover:-translate-y-0.5"
          >
            デモ一覧をすべて見る
          </Link>
        </div>
      </div>
    </section>
  )
}
