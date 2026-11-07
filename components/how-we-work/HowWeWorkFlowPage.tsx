import Link from 'next/link'
import { howWeWorkFlow } from '@/data/how-we-work'
import { servicesLpRoi } from '@/data/services/hub'
import { Eyebrow, LpHeading } from '@/components/services/hub/lp/ServicesLpParts'
import { ServicesLpRoiCalc } from '@/components/services/hub/lp/ServicesLpRoiCalc'
import { ESTIMATE_DISCLAIMER, PRICING_LINES, type PricingLineId } from '@/lib/concierge/pricing-rules'
import { HowWeWorkFlowDetails } from './HowWeWorkFlowDetails'

type AskId = (typeof howWeWorkFlow.asks.items)[number]['id']

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

function AskIcon({ id }: { id: AskId }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="hww-ask__icon">
      <circle cx="24" cy="24" r="24" className="hww-ask__icon-bg" />
      {id === 'undecided' ? (
        <>
          <circle cx="24" cy="19" r="7" className="hww-ask__icon-line" />
          <path d="M12 38c2-6 7-9 12-9s10 3 12 9" className="hww-ask__icon-line" />
          <path d="M33 9h6v6h-3" className="hww-ask__icon-line" />
        </>
      ) : null}
      {id === 'decided' ? (
        <>
          <circle cx="21" cy="21" r="8" className="hww-ask__icon-line" />
          <path d="M27 27l9 9" className="hww-ask__icon-line" />
        </>
      ) : null}
      {id === 'review' ? (
        <>
          <path d="M15 11h13l6 6v20H15z" className="hww-ask__icon-line" />
          <path d="M20 26l3 3 6-7" className="hww-ask__icon-line" />
        </>
      ) : null}
    </svg>
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

/** 導入の流れ。悩み、契約までの段、各段の詳細、規模、金額、試算の順に並べる */
export function HowWeWorkFlowPage() {
  const { asks, map, steps, scales, prices, outro } = howWeWorkFlow

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

      <section className="hww-inner hww-sec" aria-label="よくある悩み">
        <h2 className="hww-sec-title">
          <Lines lines={asks.heading} />
        </h2>
        <div className="hww-asks">
          {asks.items.map((item) => (
            <article key={item.id} className="hww-ask">
              <div className="hww-ask__head">
                <AskIcon id={item.id} />
                <h3 aria-label={item.title}>
                  <Lines lines={item.titleLines} />
                </h3>
              </div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hww-inner hww-sec" aria-label={map.title}>
        <h2 className="hww-sec-title">{map.title}</h2>
        <ol className="hww-stepper">
          {steps.map((step, index) => (
            <li key={step.id} className="hww-stepper__item">
              <span className="hww-stepper__no">{index + 1}</span>
              <span className="hww-stepper__name">
                <Lines lines={step.nameLines} />
              </span>
            </li>
          ))}
        </ol>
        <HowWeWorkFlowDetails />
      </section>

      <section className="hww-inner hww-sec hww-sec--end" aria-label="規模ごとの契約の進め方">
        <h2 className="hww-sec-title">
          <Lines lines={scales.heading} />
        </h2>
        <div className="hww-scales">
          {scales.rows.map((row) => (
            <article key={row.size} className="hww-scale">
              <h3>{row.size}</h3>
              <dl>
                <div>
                  <dt>{scales.head.how}</dt>
                  <dd>{row.how}</dd>
                </div>
                <div>
                  <dt>{scales.head.example}</dt>
                  <dd>{row.example}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
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
            <div className="hww-line hww-line--consult">
              <p className="hww-line__name">相談</p>
              <p className="hww-line__price">
                <span className="hww-line__key">金額</span>
                無料
              </p>
              <p className="hww-line__period" />
              <p className="hww-line__note" />
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

      <div className="hww-inner hww-outro">
        <Link href={outro.servicesLink.href} className="hww-textlink">
          {outro.servicesLink.label}
        </Link>
      </div>
    </div>
  )
}
