import { Fragment } from 'react'
import Link from 'next/link'
import { howWeWorkFlow, type HowWeWorkFlowStep } from '@/data/how-we-work'
import { servicesLpRoi } from '@/data/services/hub'
import { Eyebrow, LpHeading } from '@/components/services/hub/lp/ServicesLpParts'
import { ServicesLpRoiCalc } from '@/components/services/hub/lp/ServicesLpRoiCalc'
import { ESTIMATE_DISCLAIMER, PRICING_LINES, type PricingLineId } from '@/lib/concierge/pricing-rules'

const KINDS = ['doing', 'notYet', 'prepare'] as const

function fromLabel(id: PricingLineId) {
  return `${PRICING_LINES[id].minMan}万円〜`
}

function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </>
  )
}

function MapNode({ step }: { step: HowWeWorkFlowStep }) {
  return (
    <a className="hww-map__node" href={`#${step.id}`}>
      <strong>{step.name}</strong>
      <span>{step.goal}</span>
    </a>
  )
}

function MapRow({ steps }: { steps: readonly HowWeWorkFlowStep[] }) {
  return (
    <div className="hww-map__row">
      {steps.map((step, index) => (
        <Fragment key={step.id}>
          {index > 0 ? <Arrow /> : null}
          <MapNode step={step} />
        </Fragment>
      ))}
    </div>
  )
}

function Arrow() {
  return <span className="hww-map__arrow" aria-hidden="true" />
}

function FlowCard({ step }: { step: HowWeWorkFlowStep }) {
  return (
    <article className="hww-card" id={step.id}>
      <header className="hww-card__face">
        <h2>{step.name}</h2>
        <p className="hww-card__goal">{step.goal}</p>
      </header>
      <dl className="hww-card__body">
        {KINDS.map((kind) => (
          <div key={kind} className={`hww-point hww-point--${kind}`}>
            <dt>{howWeWorkFlow.labels[kind]}</dt>
            {step[kind].map((item) => (
              <dd key={item}>{item}</dd>
            ))}
          </div>
        ))}
      </dl>
    </article>
  )
}

function PriceLine({
  id,
  period,
  points,
}: {
  id: PricingLineId
  period: string
  points: readonly string[]
}) {
  const line = PRICING_LINES[id]
  return (
    <div className="hww-line">
      <p className="hww-line__name">{line.label}</p>
      <p className="hww-line__price">
        <span className="hww-line__key">金額</span>
        {fromLabel(id)}
      </p>
      <p className="hww-line__period">
        <span className="hww-line__key">期間</span>
        {period}
      </p>
      <p className="hww-line__note">
        <span className="hww-line__key">概要</span>
        {points.join('、')}
      </p>
    </div>
  )
}

function AddonLine({ id }: { id: PricingLineId }) {
  const line = PRICING_LINES[id]
  return (
    <li>
      <span>{line.label}</span>
      <b>{fromLabel(id)}</b>
    </li>
  )
}

/** 導入の流れ。頼み方、契約までの段、規模ごとの分け方、金額、試算の順に並べる */
export function HowWeWorkFlowPage() {
  const { asks, map, steps, scales, prices, outro } = howWeWorkFlow
  const top = steps.slice(0, 3)
  const bottom = steps.slice(3)

  return (
    <div className="hww-page">
      <section className="hww-hero">
        <div className="hww-inner">
          <p className="hww-eyebrow">{howWeWorkFlow.eyebrow}</p>
          <h1>
            <Lines lines={howWeWorkFlow.heading} />
          </h1>
          <p className="hww-lead">
            <Lines lines={howWeWorkFlow.body} />
          </p>
        </div>
      </section>

      <section className="hww-inner hww-asks" aria-label="頼み方">
        <h2>
          <Lines lines={asks.heading} />
        </h2>
        <div className="hww-asks__list">
          {asks.items.map((item) => (
            <article key={item.id} className="hww-ask">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hww-map-wrap" aria-label={map.title}>
        <div className="hww-map hww-inner">
          <div className="hww-map__title">
            <p>{map.title}</p>
            <span>{map.caption}</span>
          </div>
          <div className="hww-map__board">
            <MapRow steps={top} />
            <div className="hww-map__return" aria-hidden="true" />
            <MapRow steps={bottom} />
          </div>
        </div>
      </section>

      <section className="hww-inner hww-cards" aria-label="各段ですること">
        {steps.map((step) => (
          <FlowCard key={step.id} step={step} />
        ))}
      </section>

      <section className="hww-inner hww-scales" aria-label="規模ごとの契約の進め方">
        <h2>
          <Lines lines={scales.heading} />
        </h2>
        <div className="hww-scale__head" aria-hidden="true">
          <span>{scales.head.size}</span>
          <span>{scales.head.example}</span>
          <span>{scales.head.how}</span>
        </div>
        {scales.rows.map((row) => (
          <div key={row.size} className="hww-scale">
            <p className="hww-scale__size">{row.size}</p>
            <p className="hww-scale__example">
              <span className="hww-scale__key">{scales.head.example}</span>
              {row.example}
            </p>
            <p className="hww-scale__how">
              <span className="hww-scale__key">{scales.head.how}</span>
              {row.how}
            </p>
          </div>
        ))}
      </section>

      <section className="hww-prices" aria-label="金額の目安">
        <div className="hww-inner">
          <h2>
            <Lines lines={prices.heading} />
          </h2>
          <p className="hww-prices__promise">
            <Lines lines={prices.promise} />
          </p>

          <h3 className="hww-prices__label">{prices.basesLabel}</h3>
          <div className="hww-sheet">
            <div className="hww-sheet__head">
              <span>業務</span>
              <span>金額</span>
              <span>期間</span>
              <span>概要</span>
            </div>
            {prices.bases.map((row) => (
              <PriceLine key={row.id} id={row.id} period={row.period} points={row.points} />
            ))}
          </div>

          <div className="hww-addons">
            <h3>{prices.addonsLabel}</h3>
            <ul>
              {prices.addons.map((row) => (
                <AddonLine key={row.id} id={row.id} />
              ))}
            </ul>
          </div>

          <p className="hww-disclaimer">{ESTIMATE_DISCLAIMER}</p>
          <div className="hww-actions">
            <Link href={prices.contactLink.href} className="hww-btn hww-btn--fill">
              {prices.contactLink.label}
            </Link>
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

      <section className="hww-outro">
        <div className="hww-inner">
          <h2>
            <Lines lines={outro.heading} />
          </h2>
          <Link href={outro.servicesLink.href} className="hww-textlink">
            {outro.servicesLink.label}
          </Link>
        </div>
      </section>
    </div>
  )
}
