/**
 * トップページ — デモファースト・ハブ
 *
 * Hero → Marquee → Demos → Service → Reason → Gallery → News → Contact
 */

import {
  DemoFirstContact,
  DemoFirstGallery,
  DemoFirstHero,
  DemoFirstIndustryService,
  DemoFirstMarquee,
  DemoFirstNews,
  DemoFirstReason,
  DemoFirstShowcase,
} from '@/components/sections/demo-first'
import {
  getGalleryCapabilities,
  getIndustryCards,
  getShowcaseCapabilities,
} from '@/data/demo-first/top-page'
import { getNewsItems } from '@/data/news/items'

export default function Home() {
  const showcase = getShowcaseCapabilities()
  const gallery = getGalleryCapabilities()
  const industryCards = getIndustryCards()
  const news = getNewsItems()

  return (
    <div className="demo-first">
      <DemoFirstHero />
      <DemoFirstMarquee />
      <DemoFirstShowcase capabilities={showcase} />
      <DemoFirstIndustryService cards={industryCards} />
      <DemoFirstReason />
      <DemoFirstGallery capabilities={gallery} />
      <DemoFirstNews items={news} />
      <DemoFirstContact />
    </div>
  )
}
