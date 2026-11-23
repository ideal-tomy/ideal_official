import Link from 'next/link'
import { homeHubHero } from '@/data/home/hub'
import { Eyebrow, LpHeading } from '@/components/services/hub/lp/ServicesLpParts'

export function HomeHubHero() {
  return (
    <section className="svc-w svc-sec home-hub-hero">
      <div className="svc-wrap">
        <Eyebrow>{homeHubHero.eyebrow}</Eyebrow>
        <LpHeading as="h1" lines={homeHubHero.heading} />
        <p className="svc-body">{homeHubHero.lead}</p>
        <div className="home-hub-hero__actions">
          <Link href={homeHubHero.primaryCta.href} className="svc-btn">
            {homeHubHero.primaryCta.label}
          </Link>
          <Link href={homeHubHero.secondaryCta.href} className="svc-btn home-hub-btn--ghost">
            {homeHubHero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
