import Image from 'next/image'
import Link from 'next/link'

export function DemoFirstHero() {
  return (
    <section
      id="top"
      className="relative -mt-16 flex min-h-[min(78svh,720px)] flex-col justify-center overflow-hidden px-0 py-16 text-white md:mt-0 md:min-h-[min(92svh,900px)] md:py-24"
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
        <p className="df-rise-1 mb-3 hidden text-xs font-bold tracking-[0.2em] text-white/85 md:block">
          DEMO-FIRST DEVELOPMENT
        </p>
        <h1 className="df-rise-1 text-[clamp(28px,7.5vw,40px)] font-black leading-tight tracking-[0.04em] [text-shadow:0_2px_24px_rgba(0,0,0,.55)] md:text-[clamp(34px,9vw,64px)] md:leading-[1.4]">
          まず、触ってください。
          <br className="hidden md:block" />
          説明より、動くデモを。
        </h1>
        <p className="df-rise-3 mt-6 max-w-[560px] text-[clamp(15px,3.6vw,18px)] font-normal text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,.5)] md:hidden">
          Web・業務アプリ・AIの開発を、動くデモから始めます。提案書の前に触れて、答え合わせをします。
        </p>
        <p className="df-rise-3 mt-6 hidden max-w-[560px] text-[clamp(15px,3.6vw,18px)] font-normal text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,.5)] md:block">
          idealは、Webサイト・業務アプリ・AIプロトタイプを、触れるデモから一緒に設計する開発チームです。提案書の前に業務の課題を「触れるかたち」にしてから答え合わせをする——それが、認識のズレをゼロにする最短ルートだと考えています。
        </p>
        <div className="df-rise-4 mt-8 flex flex-wrap gap-3.5">
          <a
            href="#demos"
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-7 py-3.5 font-bold text-white transition-transform duration-250 hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)]"
          >
            デモを触ってみる
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] border border-white/70 bg-white/15 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white/25"
          >
            サービス一覧
          </Link>
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
