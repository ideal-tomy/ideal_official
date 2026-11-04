'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  servicesLpExamples,
  type ServicesLpExampleTab,
  type ServicesLpTabId,
} from '@/data/services/hub'
import { Eyebrow, LpHeading } from './ServicesLpParts'

const tabs: readonly ServicesLpExampleTab[] = servicesLpExamples.tabs

const HASH_TO_TAB: Record<string, ServicesLpTabId> = {
  web: 'web',
  app: 'app',
  ai: 'ai',
  'build-web': 'web',
  'build-app': 'app',
  'build-ai': 'ai',
}

type Revealed = Record<ServicesLpTabId, [boolean, boolean, boolean]>

const NOT_REVEALED: Revealed = {
  web: [false, false, false],
  app: [false, false, false],
  ai: [false, false, false],
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

export function ServicesLpExamples() {
  const [tabId, setTabId] = useState<ServicesLpTabId>('web')
  const [step, setStep] = useState(0)
  const [revealed, setRevealed] = useState<Revealed>(NOT_REVEALED)
  const storyRef = useRef<HTMLDivElement>(null)

  const syncFromHash = useCallback((scroll: boolean) => {
    const id = HASH_TO_TAB[window.location.hash.replace(/^#/, '')]
    if (!id) return
    setTabId(id)
    setStep(0)
    if (scroll) {
      document.getElementById('examples')?.scrollIntoView({ block: 'start' })
    }
  }, [])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => syncFromHash(false))
    const onHashChange = () => syncFromHash(true)
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [syncFromHash])

  const tab = tabs.find((t) => t.id === tabId) ?? tabs[0]!
  const item = tab.steps[step]!
  const nextStep = tab.steps[step + 1]
  const shown = revealed[tabId][step]

  const chooseTab = (id: ServicesLpTabId) => {
    setTabId(id)
    setStep(0)
    window.history.replaceState(null, '', `#${id}`)
  }

  const chooseStep = (next: number) => {
    if (next > 2) {
      document.getElementById('roi')?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
      return
    }
    setStep(Math.max(0, next))
    storyRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
  }

  const reveal = () => {
    setRevealed((prev) => {
      const nextFlags: [boolean, boolean, boolean] = [...prev[tabId]]
      nextFlags[step] = true
      return { ...prev, [tabId]: nextFlags }
    })
  }

  return (
    <section id="examples" className="svc-w svc-sec svc-examples">
      <div className="svc-wrap">
        <Eyebrow>{servicesLpExamples.eyebrow}</Eyebrow>
        <LpHeading lines={servicesLpExamples.heading} />
        <p className="svc-body">{servicesLpExamples.body}</p>

        <div className="svc-tabs" role="tablist" aria-label="画面の例">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`svc-tab-${t.id}`}
              aria-selected={t.id === tabId}
              aria-controls="svc-story-panel"
              className="svc-tab"
              onClick={() => chooseTab(t.id)}
            >
              <small>{t.service}</small>
              {t.label}
            </button>
          ))}
        </div>

        <div
          ref={storyRef}
          className="svc-win svc-story-win"
          id="svc-story-panel"
          role="tabpanel"
          aria-labelledby={`svc-tab-${tab.id}`}
        >
          <div className="svc-win__bar">
            <span>画面の例</span>
            <small>架空の例での説明</small>
          </div>
          <div className="svc-story">
            <div className="svc-story-head">
              <h3>
                <span>{tab.service}</span>
                <span>{tab.title}</span>
              </h3>
              <p>{tab.sub}</p>
            </div>
            <ol className="svc-story-steps" aria-label="進め方の段">
              {tab.steps.map(({ label }, i) => (
                <li key={label}>
                  <button
                    type="button"
                    className="svc-story-step"
                    aria-current={i === step ? 'step' : undefined}
                    onClick={() => chooseStep(i)}
                  >
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {label}
                  </button>
                </li>
              ))}
            </ol>

            <div className="svc-story-grid" key={`${tab.id}-${step}`}>
              <div className="svc-doc">
                <div className="svc-doc-title">{item.docTitle}</div>
                <h4>{item.heading}</h4>
                {item.rows.map((row) => (
                  <div
                    key={`${row.label}-${row.value}`}
                    className={`svc-doc-row${row.hit ? ' svc-doc-hit' : ''}`}
                  >
                    <span>{row.label}</span>
                    <b>{row.value}</b>
                  </div>
                ))}
              </div>
              <div className="svc-story-side">
                <h4>{item.sideTitle}</h4>
                <p>{item.sideText}</p>
                {shown ? (
                  <div className="svc-result" aria-live="polite">
                    <strong>{item.result.title}</strong>
                    <p>{item.result.body}</p>
                    {item.result.source ? (
                      <span className="svc-source">{item.result.source}</span>
                    ) : null}
                  </div>
                ) : (
                  <button type="button" className="svc-btn" onClick={reveal}>
                    {item.action} →
                  </button>
                )}
              </div>
            </div>

            <div className="svc-story-nav">
              <button
                type="button"
                className="svc-story-back"
                disabled={step === 0}
                onClick={() => chooseStep(step - 1)}
              >
                ← 前に戻る
              </button>
              <span className="svc-story-count">{step + 1} / 3</span>
              <button type="button" className="svc-btn" onClick={() => chooseStep(step + 1)}>
                {nextStep ? `次へ：${nextStep.label} →` : servicesLpExamples.lastLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
