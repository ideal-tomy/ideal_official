import Image from 'next/image'
import Link from 'next/link'
import { HeroBackground } from '@/components/motion/HeroBackground'
import { servicesHubHero } from '@/data/services/hub'

export function ServiceHubHero() {
  return (
    <section className="relative -mt-16 overflow-hidden px-0 pb-12 pt-28 text-[var(--site-fg)] md:mt-0 md:pb-16 md:pt-32">
      <HeroBackground />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-black leading-tight tracking-[0.02em] text-[var(--site-fg)]">
            {servicesHubHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-[var(--site-fg-muted)] md:text-base">
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
              className="inline-flex items-center justify-center rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)] px-5 py-3 text-sm font-bold text-[var(--site-fg)] transition-colors hover:border-brand/40"
            >
              {servicesHubHero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] shadow-[var(--service-card-shadow)]">
            <div className="flex items-center gap-1.5 border-b border-[var(--site-border)] bg-[var(--site-bg)] px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--site-border)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--site-border)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--site-border)]" />
              <span className="ml-2 flex-1 truncate rounded bg-[var(--site-bg-elevated)] px-2 py-0.5 text-[10px] text-[var(--site-fg-muted)]">
                app.ideal.example / dashboard
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={servicesHubHero.mockImage}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
