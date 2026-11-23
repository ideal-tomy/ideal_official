import { Ribbon } from '@/components/services/hub/lp/ServicesLpParts'
import { ServicesLpMotion } from '@/components/services/hub/lp/ServicesLpMotion'
import { homeHubRibbonTopics } from '@/data/home/hub'
import { HomeHubCards } from './HomeHubCards'
import { HomeHubCta } from './HomeHubCta'
import { HomeHubDemoTeaser } from './HomeHubDemoTeaser'
import { HomeHubHero } from './HomeHubHero'
import { HomeHubPillars } from './HomeHubPillars'

const ROOT_ID = 'home-hub'

/** トップハブ — svc-lp 統一の薄い誘導ページ */
export function HomeHub() {
  return (
    <div id={ROOT_ID} className="svc-lp">
      <ServicesLpMotion rootId={ROOT_ID} />
      <div className="svc-col">
        <Ribbon items={homeHubRibbonTopics} reverse />
        <HomeHubHero />
        <HomeHubPillars />
        <HomeHubCards />
        <HomeHubDemoTeaser />
        <HomeHubCta />
      </div>
    </div>
  )
}
