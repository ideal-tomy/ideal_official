import Image from 'next/image'
import Link from 'next/link'

export function DemoFirstHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(92svh,900px)] flex-col justify-center overflow-hidden px-0 py-24 text-white"
    >
      <Image
        src="/images/top.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      {/* 中央のコピー可読性を確保するグラデーション */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.45) 38%, rgba(0,0,0,.2) 55%, rgba(0,0,0,.45) 100%), linear-gradient(180deg, rgba(0,0,0,.35) 0%, transparent 28%, transparent 72%, rgba(0,0,0,.5) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(100%-48px,1080px)]">
        <p className="df-rise-1 mb-3 text-xs font-bold tracking-[0.2em] text-white/85">
          DEMO-FIRST DEVELOPMENT
        </p>
        <h1 className="text-[clamp(34px,9vw,64px)] font-black leading-[1.4] tracking-[0.04em] [text-shadow:0_2px_24px_rgba(0,0,0,.55)]">
          <span className="df-rise-1 block">まず、触ってください。</span>
          <span className="df-rise-2 block">説明より、動くデモを。</span>
        </h1>
        <p className="df-rise-3 mt-6 max-w-[560px] text-[clamp(15px,3.6vw,18px)] font-normal text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,.5)]">
          私たちは提案書の前にデモを作ります。業務の課題を「触れるかたち」にしてから、一緒に答え合わせをする——それが、認識のズレをゼロにする最短ルートだと考えているからです。
        </p>
        <div className="df-rise-4 mt-8 flex flex-wrap gap-3.5">
          <a
            href="#demos"
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-7 py-3.5 font-bold text-white transition-transform duration-250 hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)]"
          >
            デモを触ってみる
          </a>
          <a
            href="#service"
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] border border-white/70 bg-white/15 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white/25"
          >
            サービスを見る
          </a>
          <Link
            href="/estimate"
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] border border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white/90 transition-colors hover:border-white/80 hover:text-white"
          >
            概算を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
