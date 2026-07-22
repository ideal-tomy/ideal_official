'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useStagedDemoScroll } from '@/components/ai-capability-gallery/hooks/useStagedDemoScroll'
import {
  predictionSampleSets,
  predictionProcessingSteps,
  type PredictionSampleSet,
} from '@/data/ai-capability-gallery/data-to-prediction'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { DemoActions } from './DemoActions'
import { DemoBeforeAfterRail } from './DemoBeforeAfterRail'

function PredictionChart({ dataPoints, showForecast }: { dataPoints: PredictionSampleSet['dataPoints']; showForecast: boolean }) {
  const width = 320
  const height = 160
  const pad = { top: 16, right: 16, bottom: 28, left: 36 }
  const chartW = width - pad.left - pad.right
  const chartH = height - pad.top - pad.bottom

  const values = dataPoints.map((d) => d.value)
  const min = Math.min(...values) * 0.9
  const max = Math.max(...values) * 1.1
  const range = max - min || 1

  const x = (i: number) => pad.left + (i / (dataPoints.length - 1)) * chartW
  const y = (v: number) => pad.top + chartH - ((v - min) / range) * chartH

  const historical = dataPoints.filter((d) => !d.isForecast || !showForecast)
  const pathD = historical
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(d.value)}`)
    .join(' ')

  const lastHistIdx = dataPoints.findIndex((d) => d.isForecast)
  const forecastPoint = showForecast ? dataPoints.find((d) => d.isForecast) : null

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label="予測グラフ">
      {[0, 0.5, 1].map((t) => (
        <line
          key={t}
          x1={pad.left}
          y1={pad.top + chartH * (1 - t)}
          x2={width - pad.right}
          y2={pad.top + chartH * (1 - t)}
          stroke="#E5E7EB"
          strokeWidth={1}
        />
      ))}
      <path d={pathD} fill="none" stroke="#3B82F6" strokeWidth={2} />
      {showForecast && forecastPoint && lastHistIdx > 0 && (
        <>
          <line
            x1={x(lastHistIdx - 1)}
            y1={y(dataPoints[lastHistIdx - 1].value)}
            x2={x(lastHistIdx)}
            y2={y(forecastPoint.value)}
            stroke="#06B6D4"
            strokeWidth={2}
            strokeDasharray="4 3"
          />
          <circle cx={x(lastHistIdx)} cy={y(forecastPoint.value)} r={4} fill="#06B6D4" />
        </>
      )}
      {dataPoints.map((d, i) => (
        <g key={d.label}>
          <circle
            cx={x(i)}
            cy={y(d.value)}
            r={3}
            fill={d.isForecast && showForecast ? '#06B6D4' : '#3B82F6'}
          />
          <text
            x={x(i)}
            y={height - 6}
            textAnchor="middle"
            className="text-[9px] fill-gray-500"
          >
            {d.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function DataToPredictionDemo() {
  const [selectedSet, setSelectedSet] = useState<PredictionSampleSet>(predictionSampleSets[0])
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()
  const { beforeRef, afterRef, railRef } = useStagedDemoScroll(
    isProcessing,
    isComplete,
    { fallbackDelayMs: predictionProcessingSteps.length * 500 * 0.55 },
  )

  const handleSetChange = (setId: string) => {
    const next = predictionSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      reset()
    }
  }

  const dataPanel = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        データ・条件
      </p>
      <p className="mb-2 text-sm font-medium text-gray-800">{selectedSet.metric}</p>
      <dl className="mb-3 space-y-1 text-xs">
        {selectedSet.dataPoints
          .filter((d) => !d.isForecast)
          .map((d) => (
            <div key={d.label} className="flex justify-between text-gray-600">
              <dt>{d.label}</dt>
              <dd>
                {d.value.toLocaleString()} {selectedSet.unit}
              </dd>
            </div>
          ))}
      </dl>
    </div>
  )

  const resultPanel = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        予測結果
      </p>
      {!isComplete ? (
        <p className="text-sm text-gray-400">処理完了後に表示されます</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-[11px] text-gray-500">{selectedSet.forecast.period}</p>
            <p className="text-2xl font-bold text-gray-800">
              {selectedSet.forecast.value.toLocaleString()}
              <span className="ml-1 text-sm font-normal text-gray-500">{selectedSet.unit}</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              信頼区間: {selectedSet.forecast.confidenceLow.toLocaleString()} 〜{' '}
              {selectedSet.forecast.confidenceHigh.toLocaleString()} {selectedSet.unit}
            </p>
          </div>
          <div>
            <p className="mb-2 text-[11px] text-gray-500">影響要因</p>
            <ul className="space-y-2">
              {selectedSet.factors.map((factor) => (
                <li
                  key={factor.label}
                  className="rounded border border-[#D9DDE3] bg-gray-50 p-2 text-xs"
                >
                  <span
                    className={
                      factor.impact === 'positive'
                        ? 'text-green-600'
                        : factor.impact === 'negative'
                          ? 'text-red-600'
                          : 'text-gray-500'
                    }
                  >
                    {factor.impact === 'positive' ? '↑' : factor.impact === 'negative' ? '↓' : '→'}{' '}
                    {factor.label}
                  </span>
                  <p className="mt-0.5 text-gray-600">{factor.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <DemoFrame title="データ → 予測デモ">
      <SampleSetTabs
        sets={predictionSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <DemoBeforeAfterRail
        railRef={railRef}
        beforeRef={beforeRef}
        afterRef={afterRef}
        before={dataPanel}
        after={resultPanel}
      />

      {isComplete && (
        <div className="mt-3 rounded-lg border border-[#D9DDE3] bg-white p-3 md:hidden">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            予測グラフ
          </p>
          <PredictionChart dataPoints={selectedSet.dataPoints} showForecast={isComplete} />
        </div>
      )}

      <details className="mt-3 rounded-lg border border-[#D9DDE3] bg-white md:hidden">
        <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-gray-600">
          AI処理ログ {logs.length > 0 ? `(${logs.length})` : ''}
        </summary>
        <div className="border-t border-[#D9DDE3] p-3">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
        </div>
      </details>

      <div className="hidden gap-4 md:grid lg:grid-cols-3">
        {dataPanel}
        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
            予測グラフ
          </p>
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
          {isComplete && (
            <div className="mt-3">
              <PredictionChart dataPoints={selectedSet.dataPoints} showForecast={isComplete} />
            </div>
          )}
        </div>
        {resultPanel}
      </div>

      <DemoActions
        onProcess={() => start(predictionProcessingSteps)}
        onReset={reset}
        isProcessing={isProcessing}
        processLabel="予測を実行する"
        processingLabel="予測中…"
      />
    </DemoFrame>
  )
}
