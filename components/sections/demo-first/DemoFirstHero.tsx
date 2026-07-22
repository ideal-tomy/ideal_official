import Image from 'next/image'
import Link from 'next/link'

export function DemoFirstHero() {
  return (
    <section
      id="top"
      className="relative -mt-16 flex aspect-square max-h-[min(100svw,420px)] min-h-0 flex-col justify-center overflow-hidden px-0 py-8 text-white md:mt-0 md:aspect-auto md:max-h-none md:min-h-[min(92svh,900px)] md:py-24"
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
        <h1 className="df-rise-1 text-[clamp(26px,6.5vw,56px)] font-black leading-tight tracking-[0.04em] [text-shadow:0_2px_24px_rgba(0,0,0,.55)] md:text-[clamp(34px,5.5vw,56px)] md:leading-[1.25]">
          触って試せるシステム開発
        </h1>
        <p className="df-rise-3 mt-4 max-w-[560px] text-[clamp(15px,3.6vw,18px)] font-normal text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,.5)] md:mt-6">
          言葉や資料ではなく、触れるデモで答え合わせ。Web・業務アプリ・AIをスピーディに開発。
        </p>
        <div className="df-rise-4 mt-5 flex w-full gap-3 sm:w-auto sm:max-w-md md:mt-8">
          <a
            href="#demos"
            className="inline-flex w-1/2 items-center justify-center gap-2 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-3 py-3.5 text-center text-sm font-bold text-white transition-transform duration-250 hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)] sm:w-auto sm:flex-1 sm:px-7 sm:text-base"
          >
            デモを触ってみる
          </a>
          <Link
            href="/services"
            className="inline-flex w-1/2 items-center justify-center gap-2 rounded-[var(--df-radius-btn)] border border-white/70 bg-white/15 px-3 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-white/25 sm:w-auto sm:flex-1 sm:px-7 sm:text-base"
          >
            サービス一覧
          </Link>
        </div>
      </div>
    </section>
  )
}
