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
import { getReadyPortfolioDemos } from '@/data/demo-first/portfolio'
import {
  getIndustryCards,
  getShowcaseCapabilities,
} from '@/data/demo-first/top-page'
import { getNewsItems } from '@/data/news/items'

export default function Home() {
  const showcase = getShowcaseCapabilities()
  const portfolio = getReadyPortfolioDemos()
  const industryCards = getIndustryCards()
  const news = getNewsItems()

  return (
    <div className="demo-first">
      <DemoFirstHero />
      <DemoFirstMarquee />
      <DemoFirstShowcase capabilities={showcase} />
      <DemoFirstIndustryService cards={industryCards} />
      <DemoFirstReason />
      <DemoFirstGallery items={portfolio} />
      <DemoFirstNews items={news} />
      <DemoFirstContact />
    </div>
  )
}
