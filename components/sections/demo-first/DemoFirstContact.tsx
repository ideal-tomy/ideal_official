import Link from 'next/link'
import { SectionKicker } from './SectionKicker'

export function DemoFirstContact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--df-bg-blue-2)] bg-[var(--df-bg-card)] py-[clamp(56px,12vw,88px)] text-center text-[var(--df-text)] md:py-[clamp(72px,12vw,112px)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <SectionKicker index="06" label="Contact" />
        <h2 className="my-2 mb-6 text-[clamp(28px,6.2vw,44px)] font-black leading-[1.35] text-[var(--df-text)]">
          <span className="md:hidden">まだ言葉になっていなくても大丈夫です。</span>
          <span className="hidden md:inline">
            まだ課題が言葉になっていなくても、
            <br />
            大丈夫です。
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-[560px] text-[var(--df-text-muted)]">
          「なんとなく非効率な気がする」——その段階からで構いません。お話を伺いながら、まずは触れるデモのかたちでご提案します。デモのカスタマイズ相談だけでも歓迎です。
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-8 py-4 text-lg font-bold text-[var(--df-on-primary)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)]"
          >
            お問い合わせ
          </Link>
        </div>

        <p className="mt-8">
          <Link
            href="/flow#estimate"
            className="text-sm font-bold text-[var(--df-primary)] underline-offset-4 hover:underline"
          >
            概算の感触を先に見る →
          </Link>
        </p>
      </div>
    </section>
  )
}
