import { Fragment } from 'react'
import Link from 'next/link'
import { howWeWorkFlow, type HowWeWorkFlowStep } from '@/data/how-we-work'
import { servicesLpSteps } from '@/data/services/hub'
import { ESTIMATE_DISCLAIMER, PRICING_LINES, type PricingLineId } from '@/lib/concierge/pricing-rules'

const KINDS = ['weDo', 'decided', 'notYet', 'prepare'] as const

function fromLabel(id: PricingLineId) {
  return `${PRICING_LINES[id].minMan}万円〜`
}

function stepMeta(step: HowWeWorkFlowStep) {
  const base = servicesLpSteps.find((item) => item.id === step.stepId)
  return {
    no: step.no ?? base?.no ?? '',
    name: step.name ?? base?.name ?? '',
    goal: step.goal ?? base?.goal ?? '',
  }
}

function MapNode({ step }: { step: HowWeWorkFlowStep }) {
  const meta = stepMeta(step)
  return (
    <a className="hww-map__node" href={`#${step.stepId}`}>
      <b>{meta.no}</b>
      <strong>{meta.name}</strong>
      <span>{meta.goal}</span>
    </a>
  )
}

function MapRow({ steps }: { steps: readonly HowWeWorkFlowStep[] }) {
  return (
    <div className="hww-map__row">
      {steps.map((step, index) => (
        <Fragment key={step.stepId}>
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
  const meta = stepMeta(step)

  return (
    <article className="hww-card" id={step.stepId}>
      <header className="hww-card__face">
        <p className="hww-card__no">{meta.no}</p>
        <h2>{meta.name}</h2>
        <p className="hww-card__goal">{meta.goal}</p>
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

/** 導入の流れ。図で段をつなぎ、説明カードと下限の金額を並べる */
export function HowWeWorkFlowPage() {
  const { prices, outro, steps } = howWeWorkFlow
  const top = steps.slice(0, 3)
  const bottom = steps.slice(3)

  return (
    <div className="hww-page">
      <section className="hww-hero">
        <div className="hww-inner">
          <p className="hww-eyebrow">{howWeWorkFlow.eyebrow}</p>
          <h1>
            {howWeWorkFlow.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hww-lead">
            {howWeWorkFlow.body.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
      </section>

      <section className="hww-map-wrap" aria-label="6つの段">
        <div className="hww-map hww-inner">
          <div className="hww-map__title">
            <p>導入の流れ</p>
            <span>契約までの全体</span>
          </div>
          <div className="hww-map__board">
            <MapRow steps={top} />
            <div className="hww-map__return" aria-hidden="true" />
            <MapRow steps={bottom} />
          </div>
        </div>
      </section>

      <section className="hww-inner hww-cards" aria-label="各段で決まっていること">
        {steps.map((step) => (
          <FlowCard key={step.stepId} step={step} />
        ))}
      </section>

      <section className="hww-prices" aria-label="金額の目安">
        <div className="hww-inner">
          <h2>
            {prices.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="hww-prices__promise">
            {prices.promise.map((line) => (
              <span key={line}>{line}</span>
            ))}
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
            <Link href={prices.estimateLink.href} className="hww-btn hww-btn--fill">
              {prices.estimateLink.label}
            </Link>
            <Link href={prices.contactLink.href} className="hww-btn">
              {prices.contactLink.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="hww-outro">
        <div className="hww-inner">
          <h2>
            {outro.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <Link href={outro.servicesLink.href} className="hww-textlink">
            {outro.servicesLink.label}
          </Link>
        </div>
      </section>
    </div>
  )
}
