import Link from 'next/link'
import {
  servicesLpAbout,
  servicesLpBuilds,
  servicesLpProcessRibbon,
  servicesLpRoi,
  servicesLpStart,
  servicesLpSteps,
  servicesLpThinking,
  servicesLpTopics,
} from '@/data/services/hub'
import { ServicesLpCarousel } from './ServicesLpCarousel'
import { ServicesLpContact } from './ServicesLpContact'
import { ServicesLpExamples } from './ServicesLpExamples'
import { ServicesLpMotion } from './ServicesLpMotion'
import { BrandRibbon, Eyebrow, LpHeading, Ribbon } from './ServicesLpParts'
import { ServicesLpRoiCalc } from './ServicesLpRoiCalc'
import { ServicesLpSteps } from './ServicesLpSteps'
import { ServicesLpToc } from './ServicesLpToc'

const ROOT_ID = 'services-lp'

/** サービスページのヒーローより下。AXEON LP と同じ並びで、ideal のサービスを見せる */
export function ServicesLp() {
  return (
    <div id={ROOT_ID} className="svc-lp">
      <ServicesLpMotion rootId={ROOT_ID} />
      <ServicesLpToc rootId={ROOT_ID} />

      <div className="svc-col">
        <Ribbon items={servicesLpTopics} reverse />

        <section id="about" className="svc-w svc-sec svc-about">
          <div className="svc-wrap">
            <Eyebrow>{servicesLpAbout.eyebrow}</Eyebrow>
            <LpHeading lines={servicesLpAbout.heading} />
            <p className="svc-body">{servicesLpAbout.body}</p>
          </div>
          <ServicesLpCarousel />
        </section>

        <BrandRibbon lead={servicesLpProcessRibbon.lead} steps={servicesLpProcessRibbon.steps} />

        <section className="svc-d svc-sec svc-after-brand">
          <div className="svc-wrap">
            <Eyebrow>{servicesLpThinking.eyebrow}</Eyebrow>
            <LpHeading lines={servicesLpThinking.heading} />
            <p className="svc-body">{servicesLpThinking.body}</p>
            <div className="svc-pattern-card svc-rv">
              <div className="svc-brand">ideal</div>
              <strong>
                {servicesLpThinking.cardLead}
                <br />
                <b>{servicesLpThinking.cardCount}</b>
                {servicesLpThinking.cardUnit}
              </strong>
              <div className="svc-pattern-nums">
                {servicesLpSteps.map((step, index) => (
                  <a key={step.id} href={`#${step.id}`} aria-label={`${step.name}へ`}>
                    {index + 1}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServicesLpSteps />

        <section className="svc-d svc-sec">
          <div className="svc-wrap svc-center">
            <Eyebrow>{servicesLpStart.eyebrow}</Eyebrow>
            <LpHeading lines={servicesLpStart.heading} />
            <p className="svc-body svc-left">{servicesLpStart.body}</p>
            <Link href="#examples" className="svc-btn">
              {servicesLpStart.cta}
            </Link>
          </div>
        </section>

        <ServicesLpExamples />

        <section className="svc-d svc-sec">
          <div className="svc-wrap">
            <LpHeading lines={servicesLpBuilds.heading} />
            <div className="svc-chips">
              {servicesLpBuilds.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="roi" className="svc-roi">
          <div className="svc-roi-layout">
            <div className="svc-roi-head">
              <div>
                <Eyebrow>{servicesLpRoi.eyebrow}</Eyebrow>
                <LpHeading lines={servicesLpRoi.heading} reveal={false} />
              </div>
              <p>{servicesLpRoi.body}</p>
            </div>
            <ServicesLpRoiCalc />
          </div>
        </section>

        <ServicesLpContact />
      </div>
    </div>
  )
}
