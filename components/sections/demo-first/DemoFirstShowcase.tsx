import Image from 'next/image'
import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

type Props = {
  capabilities: Capability[]
}

export function DemoFirstShowcase({ capabilities }: Props) {
  return (
    <section id="demos" className="bg-[var(--df-bg-blue)] py-[var(--df-sec-pad)]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[var(--df-primary)] md:block">
          デモ
        </p>
        <h2 className="my-2 mb-6 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)]">
          資料ではなく、
          <br className="hidden md:inline" />
          <span className="text-[var(--df-primary-deep)]">動くデモで確かめる。</span>
        </h2>
        <p className="mb-12 max-w-[640px] text-[var(--df-text)]">
          ここにあるのは、実際の業務課題から生まれた開発デモです。サンプルデータで動くため、実ファイルのアップロードは不要です。
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((cap) => (
            <article
              key={cap.slug}
              className="flex flex-col overflow-hidden rounded-[var(--df-radius-card)] bg-[var(--df-bg)]"
            >
              <div className="relative aspect-[16/9] bg-[linear-gradient(160deg,var(--df-hero-2),var(--df-primary-hover))]">
                <Image
                  src={cap.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center opacity-90"
                />
                <span className="absolute left-3.5 top-3.5 rounded-full border border-white/80 px-3 py-0.5 text-xs font-bold text-white">
                  {cap.tags[0] ?? cap.subtitle}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 pb-8">
                <span className="inline-block w-fit rounded-full border border-[var(--df-text-muted)] px-3 py-0.5 text-xs font-bold text-[var(--df-text-muted)]">
                  {cap.subtitle}
                </span>
                <h3 className="mt-2.5 mb-1.5 text-xl font-black leading-[1.5] text-[var(--df-primary-deep)]">
                  {cap.title}
                </h3>
                <p className="text-sm text-[var(--df-text)]">{cap.showcaseLead}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-sm font-bold text-[var(--df-primary)]">
                    触ってみる
                  </span>
                  <Link
                    href={cap.href}
                    className="inline-flex h-10 w-14 items-center justify-center rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] font-bold text-white transition-transform hover:translate-x-1"
                    aria-label={`${cap.title}を開く`}
                  >
                    →
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
