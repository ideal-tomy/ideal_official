import Link from 'next/link'
import { homeHubCta } from '@/data/home/hub'
import { Eyebrow, LpHeading } from '@/components/services/hub/lp/ServicesLpParts'

export function HomeHubCta() {
  return (
    <section className="svc-w svc-sec home-hub-cta">
      <div className="svc-wrap">
        <Eyebrow>{homeHubCta.eyebrow}</Eyebrow>
        <LpHeading lines={homeHubCta.heading} />
        <p className="svc-body">{homeHubCta.body}</p>
        <Link href={homeHubCta.button.href} className="svc-btn">
          {homeHubCta.button.label}
        </Link>
      </div>
    </section>
  )
}
