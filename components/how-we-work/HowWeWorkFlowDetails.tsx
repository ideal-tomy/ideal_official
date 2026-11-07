'use client'

import { useId, useState } from 'react'
import { howWeWorkFlow, type HowWeWorkFlowStep } from '@/data/how-we-work'

function DetailCard({ step, no }: { step: HowWeWorkFlowStep; no: number }) {
  return (
    <article className="hww-detail" id={step.id}>
      <h3 className="hww-detail__head">{`${no}. ${step.name}`}</h3>
      <div className="hww-detail__body">
        <ul>
          {step.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="hww-detail__boundary">
          {step.boundary.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
    </article>
  )
}

/** 5段の詳細。スマホでは閉じた状態で始まり、ボタンで開く */
export function HowWeWorkFlowDetails() {
  const { details, steps } = howWeWorkFlow
  const [open, setOpen] = useState(false)
  const listId = useId()

  return (
    <div className={`hww-details${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="hww-details__toggle"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? details.close : details.open}
      </button>
      <section id={listId} className="hww-details__panel" aria-label={details.title}>
        <h2 className="hww-sec-title">{details.title}</h2>
        <div className="hww-details__grid">
          {steps.map((step, index) => (
            <DetailCard key={step.id} step={step} no={index + 1} />
          ))}
        </div>
      </section>
    </div>
  )
}
