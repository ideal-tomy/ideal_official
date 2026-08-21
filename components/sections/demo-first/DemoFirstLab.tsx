import Link from 'next/link'
import { labHubAreas } from '@/data/lab/hub'

/** TOP — LAB への入口 */
export function DemoFirstLab() {
  const featured = labHubAreas.slice(0, 4)

  return (
    <section
      id="lab"
      className="bg-[var(--df-bg)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <h2 className="mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-6">
          思想・研究・
          <br className="hidden md:inline" />
          深い解説へ。
        </h2>
        <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-slate-700 md:mb-10 md:text-xl md:leading-8">
          デモと業種の話のほかに、思想・研究・導入の考え方など、もう一段深い読み物を LAB に集約しています。
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {featured.map((area) => (
            <Link
              key={area.id}
              href={area.href}
              className="group rounded-[var(--df-radius-card)] border border-[var(--site-border)] bg-[var(--df-bg-card)] p-5 transition-colors hover:border-[var(--df-primary)]/45"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--df-text-muted)]">
                {area.eyebrow}
              </p>
              <h3 className="mb-2 text-base font-black text-[var(--df-text)] md:text-lg">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--df-text-muted)]">
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
