import { servicesLpSteps, type ServicesLpRow, type ServicesLpStep } from '@/data/services/hub'
import { DoneMark, Win, delay } from './ServicesLpParts'

const steps: readonly ServicesLpStep[] = servicesLpSteps

/** 該当の行だけが残り、ほかの行は薄くなる */
function Rows({ rows, start }: { rows: readonly ServicesLpRow[]; start: number }) {
  return rows.map((row, index) => {
    const d = start + index * 0.2
    return (
      <div
        key={`${row.label}-${row.value}`}
        className={`svc-row ${row.hit ? 'svc-step svc-hit' : 'svc-dim'}`}
        style={delay(d, row.hit ? d + 0.6 : undefined)}
      >
        <span>{row.label}</span>
        <b>{row.value}</b>
        {row.flag ? (
          <em className="svc-flag svc-pop" style={delay(d, d + 0.6)}>
            {row.flag}
          </em>
        ) : (
          <span aria-hidden />
        )}
      </div>
    )
  })
}

/** 相談から運用保守までの5ステップ。各段で残る成果物を画面の例で見せる */
export function ServicesLpSteps() {
  return (
    <section id="steps" className="svc-w svc-patterns">
      <div className="svc-wrap">
        {steps.map((step) => {
          const afterRows = 0.2 + step.rows.length * 0.2 + 0.6
          return (
            <article key={step.id} className="svc-pattern" id={step.id}>
              {step.id === 'step-consult' ? (
                <span id="overview-consult" className="svc-anchor" aria-hidden />
              ) : null}
              <div className="svc-pattern__no svc-rv">
                <span>{step.name}</span>
                <b>{step.no}</b>
              </div>
              <h3 className="svc-pattern__q svc-rv">{step.goal}</h3>
              <Win bar={step.bar} label={step.label}>
                <div className="svc-win__ttl">{step.title}</div>
                <Rows rows={step.rows} start={0.2} />
                {step.periods ? (
                  <ol
                    className="svc-periods svc-step"
                    style={delay(afterRows)}
                    aria-label="相談の期間の目安"
                  >
                    {step.periods.map((period) => (
                      <li key={period.title}>
                        <b>{period.title}</b>
                        <span>{period.duration}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}
                <div
                  className="svc-done svc-step"
                  style={delay(afterRows + (step.periods ? 0.6 : 0))}
                >
                  <DoneMark />
                  {step.done}
                </div>
              </Win>
              <div className="svc-pattern__a svc-rv">
                <small>このステップで行うこと</small>
                <p>{step.answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
