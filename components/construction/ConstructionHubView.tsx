import Link from 'next/link'
import {
  constructionHub,
  getConstructionRoiHref,
  type ConstructionHubDemo,
} from '@/data/demo-first/construction-hub'

function DemoCard({ demo }: { demo: ConstructionHubDemo }) {
  const className =
    'flex min-h-[7.5rem] flex-col justify-between rounded-2xl border-2 border-[#1a1a1a] bg-[#fff8e7] p-4 text-left shadow-[4px_4px_0_#1a1a1a] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:min-h-[8.5rem] sm:p-5'

  const body = (
    <>
      <div>
        <p className="text-xs font-black tracking-wide text-[#c45c00] sm:text-sm">
          {demo.step} {demo.title}
        </p>
        <p className="mt-2 text-lg font-black leading-snug text-[#1a1a1a] sm:text-xl">
          {demo.core}
        </p>
        {demo.note && (
          <p className="mt-2 text-sm leading-relaxed text-[#3d3d3d]">{demo.note}</p>
        )}
      </div>
      <span className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#ff6b00] px-4 text-base font-black text-white sm:text-lg">
        {demo.cta}
        {demo.external ? ' ↗' : ' →'}
      </span>
    </>
  )

  if (demo.external) {
    return (
      <a
        href={demo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {body}
      </a>
    )
  }

  return (
    <Link href={demo.href} className={className}>
      {body}
    </Link>
  )
}

/** 建設ハブ専用UI（製造シェル非流用・スマホ高コントラスト） */
export function ConstructionHubView() {
  const roiHref = getConstructionRoiHref()
  const { title, englishLabel, wedge, proof, comboLine, demos, contactHref } =
    constructionHub

  return (
    <div className="min-h-[100dvh] bg-[#1a1a1a] text-[#fff8e7]">
      <div className="mx-auto w-[min(100%-1.5rem,40rem)] pb-16 pt-6 sm:pt-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffb347]">
          {englishLabel}
        </p>
        <h1 className="mt-2 text-[clamp(1.75rem,7vw,2.5rem)] font-black leading-tight text-white">
          {title}
        </h1>
        <p className="mt-4 text-base font-semibold leading-relaxed text-[#ffd9a0] sm:text-lg">
          {wedge}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#cfcfcf] sm:text-base">
          {proof}
        </p>

        <div className="mt-6 rounded-2xl border-2 border-[#ff6b00] bg-[#2a2a2a] px-4 py-4 sm:px-5">
          <p className="text-xs font-bold uppercase tracking-wide text-[#ff6b00]">
            つながると
          </p>
          <p className="mt-2 text-base font-bold leading-snug text-white sm:text-lg">
            {comboLine}
          </p>
        </div>

        <ol className="mt-8 space-y-4">
          {demos.map((demo) => (
            <li key={demo.id}>
              <DemoCard demo={demo} />
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap items-center justify-end gap-3 border-t border-[#444] pt-6">
          {roiHref && (
            <a
              href={roiHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-xl border-2 border-[#ffb347] px-4 text-sm font-bold text-[#ffb347] hover:bg-[#ffb347]/10"
            >
              投資回収の目安 ↗
            </a>
          )}
          <Link
            href={contactHref}
            className="inline-flex min-h-12 items-center rounded-xl bg-white px-4 text-sm font-black text-[#1a1a1a]"
          >
            相談する
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-[#888]">
          <Link href="/" className="underline-offset-2 hover:text-white hover:underline">
            ← ideal トップへ
          </Link>
        </p>
      </div>
    </div>
  )
}
