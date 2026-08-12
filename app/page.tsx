import {
  DemoFirstContact,
  DemoFirstHero,
  DemoFirstIndustryService,
  DemoFirstLab,
  DemoFirstMarquee,
  DemoFirstNews,
  DemoFirstPatternShowcase,
  DemoFirstReason,
} from '@/components/sections/demo-first'
import { getIndustryCards } from '@/data/demo-first/top-page'
import { getNewsItems } from '@/data/news/items'

export default function Home() {
  const industryCards = getIndustryCards()
  const news = getNewsItems()

  return (
    <div className="demo-first">
      <DemoFirstHero />
      <DemoFirstMarquee />
      <DemoFirstIndustryService cards={industryCards} />
      <DemoFirstReason />
      <DemoFirstPatternShowcase />
      <DemoFirstNews items={news} />
      <DemoFirstLab />
      <DemoFirstContact />
    </div>
  )
}
