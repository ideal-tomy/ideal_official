import Link from 'next/link'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'

export function DemoFirstContact() {
  return (
    <section
      id="contact"
      className="bg-[var(--df-bg-blue-2)] py-[var(--df-sec-pad)] text-center"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[var(--df-primary)] md:block">
          Contact
        </p>
        <h2 className="my-2 mb-6 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)]">
          <span className="md:hidden">まだ言葉になっていなくても大丈夫です。</span>
          <span className="hidden md:inline">
            まだ課題が言葉になっていなくても、
            <br />
            大丈夫です。
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-[560px] text-[var(--df-text)]">
          「なんとなく非効率な気がする」——その段階からで構いません。お話を伺いながら、まずは触れるデモのかたちでご提案します。デモのカスタマイズ相談だけでも歓迎です。
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-8 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)]"
          >
            お問い合わせ
          </Link>
          <OpenConciergeButton variant="secondary" size="lg">
            自社でも使えるか相談する
          </OpenConciergeButton>
        </div>

        <p className="mt-8">
          <Link
            href="/estimate"
            className="text-sm font-bold text-[var(--df-primary)] hover:underline"
          >
            概算の感触を先に見る →
          </Link>
        </p>
      </div>
    </section>
  )
}
