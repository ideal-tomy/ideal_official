import {
  DemoFirstContact,
  DemoFirstFlowBand,
  DemoFirstHero,
  DemoFirstLab,
  DemoFirstMarquee,
  DemoFirstPatternShowcase,
  DemoFirstReason,
} from '@/components/sections/demo-first'

export default function Home() {
  return (
    <div className="demo-first">
      <DemoFirstHero />
      <DemoFirstMarquee />
      <DemoFirstReason />
      <DemoFirstPatternShowcase />
      <DemoFirstFlowBand />
      <DemoFirstLab />
      <DemoFirstContact />
    </div>
  )
}
