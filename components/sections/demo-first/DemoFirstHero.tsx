import Image from 'next/image'
import Link from 'next/link'
import { PageHero, pageHeroActionsClass } from '@/components/sections/PageHero'

export function DemoFirstHero() {
  return (
    <PageHero
      id="top"
      title="触って試せるシステム開発"
      description="言葉や資料ではなく、触れるデモで答え合わせ。Web・業務アプリ・AIをスピーディに開発。"
      background={
        <>
          <Image
            src="/images/top.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.45) 38%, rgba(0,0,0,.2) 55%, rgba(0,0,0,.45) 100%), linear-gradient(180deg, rgba(0,0,0,.35) 0%, transparent 28%, transparent 72%, rgba(0,0,0,.5) 100%)',
            }}
          />
        </>
      }
    >
      <div className={pageHeroActionsClass}>
        <a
          href="#demos"
          className="inline-flex min-w-0 flex-1 basis-1/2 items-center justify-center gap-2 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-3 py-3.5 text-center text-sm font-bold text-[var(--df-on-primary)] transition-transform duration-250 hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)] sm:px-7 sm:text-base"
        >
          デモを触ってみる
        </a>
        <Link
          href="/services"
          className="inline-flex min-w-0 flex-1 basis-1/2 items-center justify-center gap-2 rounded-[var(--df-radius-btn)] border border-white/70 bg-white/15 px-3 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-white/25 sm:px-7 sm:text-base"
        >
          サービス一覧
        </Link>
      </div>
    </PageHero>
  )
}
