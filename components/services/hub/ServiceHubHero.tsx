import Link from 'next/link'
import { servicesHubHero } from '@/data/services/hub'

/** サービスLPの白い列の先頭。右の目次は、この下の各節と共通 */
export function ServiceHubHero() {
  return (
    <section className="svc-w svc-sec">
      <div className="svc-wrap">
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.45] tracking-[0.02em] text-[var(--s-night)] [word-break:keep-all] [overflow-wrap:anywhere]">
          {servicesHubHero.title}
        </h1>
        <p className="mt-4 text-[0.9375rem] leading-[1.9] text-[var(--s-mute)] [word-break:keep-all] [overflow-wrap:anywhere] md:text-base">
          {servicesHubHero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={servicesHubHero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-sm font-bold text-[var(--df-on-primary)] transition-all hover:scale-[1.02] hover:bg-brand-hover active:scale-[0.98]"
          >
            {servicesHubHero.primaryCta.label}
          </Link>
          <Link
            href={servicesHubHero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-lg border border-[var(--s-line)] bg-[var(--s-mist)] px-5 py-3 text-sm font-bold text-[var(--s-night)] transition-colors hover:border-brand/40"
          >
            {servicesHubHero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
