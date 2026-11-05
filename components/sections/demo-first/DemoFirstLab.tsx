import Link from 'next/link'
import { labEntries } from '@/data/lab/hub'

/** TOP — LAB への入口 */
export function DemoFirstLab() {
  return (
    <section
      id="lab"
      className="bg-[var(--df-bg)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <h2 className="mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] [word-break:keep-all] md:mb-6">
          <span className="block">考えていること</span>
        </h2>
        <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-slate-700 md:mb-10 md:max-w-none md:text-xl md:leading-8">
          社会の仕組みについての思想と、それを動かす計器を、2つのページにまとめています。
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {labEntries.map((area) => (
            <Link
              key={area.id}
              href={area.href}
              className="group flex flex-col rounded-[var(--df-radius-card)] border border-[var(--site-border)] bg-[var(--df-bg-card)] p-5 transition-colors hover:border-[var(--df-primary)]/45"
            >
              <h3 className="mb-2 text-base font-black text-[var(--df-text)] md:text-lg">
                {area.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-[var(--df-text-muted)]">
                {area.description}
              </p>
              <span className="mt-3 inline-flex text-sm font-bold text-[var(--df-primary)] transition-colors group-hover:text-[var(--df-primary-hover)]">
                見る →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2.5 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-7 py-3.5 font-bold text-[var(--df-on-primary)] transition-colors hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)]"
          >
            LAB を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
