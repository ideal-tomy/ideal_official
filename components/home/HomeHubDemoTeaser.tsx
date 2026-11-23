import Link from 'next/link'
import { getTopFeaturedDemos } from '@/data/demo-first/top-featured-demos'
import { homeHubDemoTeaser } from '@/data/home/hub'
import { TopFeaturedDemoShowcase } from '@/components/sections/demo-first/TopFeaturedDemoShowcase'
import { Eyebrow, LpHeading } from '@/components/services/hub/lp/ServicesLpParts'

export function HomeHubDemoTeaser() {
  const demos = getTopFeaturedDemos()

  return (
    <section className="svc-w svc-sec home-hub-demos" aria-labelledby="home-hub-demos-title">
      <div className="svc-wrap">
        <Eyebrow>{homeHubDemoTeaser.eyebrow}</Eyebrow>
        <div id="home-hub-demos-title">
          <LpHeading lines={homeHubDemoTeaser.heading} />
        </div>
        <p className="svc-body">{homeHubDemoTeaser.body}</p>
      </div>

      <div className="home-hub-demos__stack">
        <TopFeaturedDemoShowcase demos={demos} />
      </div>

      <div className="svc-wrap">
        <Link href={homeHubDemoTeaser.cta.href} className="svc-btn">
          {homeHubDemoTeaser.cta.label}
        </Link>
      </div>
    </section>
  )
}
