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
import { getReadyCapabilities } from '@/data/ai-capability-gallery/capabilities'
import {
  getIndustryCards,
  getShowcaseCapabilities,
} from '@/data/demo-first/top-page'
import { getNewsItems } from '@/data/news/items'

export default function Home() {
  const showcase = getShowcaseCapabilities()
  const galleryPatterns = getReadyCapabilities()
  const industryCards = getIndustryCards()
  const news = getNewsItems()

  return (
    <div className="demo-first">
      <DemoFirstHero />
      <DemoFirstMarquee />
      <DemoFirstShowcase capabilities={showcase} />
      <DemoFirstIndustryService cards={industryCards} />
      <DemoFirstReason />
      <DemoFirstGallery items={galleryPatterns} />
      <DemoFirstNews items={news} />
      <DemoFirstContact />
    </div>
  )
}
