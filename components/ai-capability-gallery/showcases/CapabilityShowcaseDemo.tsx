'use client'

import { useEffect } from 'react'
import { DemoFrame } from '@/components/ai-capability-gallery/demos/DemoFrame'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useInViewAutoPlay } from '@/components/ai-capability-gallery/hooks/useInViewAutoPlay'
import { voiceProcessingSteps, voiceSampleSets } from '@/data/ai-capability-gallery/voice-to-structured'
import {
  photoSampleSets,
  processingSteps as photoProcessingSteps,
} from '@/data/ai-capability-gallery/photo-to-classification'
import {
  documentProcessingSteps,
  documentSampleSets,
} from '@/data/ai-capability-gallery/document-to-extraction'
import {
  predictionProcessingSteps,
  predictionSampleSets,
} from '@/data/ai-capability-gallery/data-to-prediction'
import {
  workflowProcessingSteps,
  workflowSampleSets,
} from '@/data/ai-capability-gallery/workflow-to-automation'
import {
  knowledgeProcessingSteps,
  knowledgeSampleSets,
} from '@/data/ai-capability-gallery/knowledge-to-search'
import {
  reportProcessingSteps,
  reportSampleSets,
} from '@/data/ai-capability-gallery/multi-input-to-report'

export type CapabilityShowcaseSlug =
  | 'voice-to-structured'
  | 'photo-to-classification'
  | 'document-to-extraction'
  | 'data-to-prediction'
  | 'workflow-to-automation'
  | 'knowledge-to-search'
  | 'multi-input-to-report'

type ShowcasePlayProps = {
  /** 親要素で inView を管理する場合に指定 */
  playWhen?: boolean
}

function useShowcasePlay(playWhen?: boolean) {
  const internal = useInViewAutoPlay()
  return {
    isInView: playWhen ?? internal.isInView,
    ref: playWhen === undefined ? internal.ref : undefined,
  }
}

function VoiceShowcase({ playWhen }: ShowcasePlayProps) {
  const sample = voiceSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(400)
  const { isInView, ref } = useShowcasePlay(playWhen)

  useEffect(() => {
    if (isInView) start(voiceProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="音声 → 構造化">
        <div className="grid items-center gap-4 lg:grid-cols-[0.95fr_0.2fr_1fr]">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              音声入力
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{sample.transcript}</p>
          </div>
          <div className="hidden items-center justify-center text-2xl text-brand lg:flex">
            ↓ AI
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              現場日報
            </p>
            <div className="space-y-2 text-sm">
              {sample.fields.map((field, index) => (
                <div
                  key={field.key}
                  className={`grid grid-cols-[84px_1fr] gap-3 transition-all duration-500 ${
                    isComplete || index < logs.length - 1
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-1 opacity-20'
                  }`}
                >
                  <span className="text-[var(--site-fg-muted)]">{field.key}</span>
                  <span className="text-gray-800">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function PhotoShowcase({ playWhen }: ShowcasePlayProps) {
  const sample = photoSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(380)
  const { isInView, ref } = useShowcasePlay(playWhen)

  useEffect(() => {
    if (isInView) start(photoProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="写真 → 分類">
        <div className="grid items-start gap-4 lg:grid-cols-[0.8fr_0.3fr_1fr]">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              入力画像
            </p>
            <ul className="space-y-2">
              {sample.photos.map((photo) => (
                <li key={photo.id} className="font-mono text-sm text-gray-700">
                  {photo.originalName}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden flex-col gap-2 pt-6 lg:flex">
            {logs.map((log) => (
              <span key={log} className="text-xs text-brand">
                {log}
              </span>
            ))}
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              整理後
            </p>
            <div className="space-y-2 text-sm">
              {sample.results.map((result, index) => (
                <div
                  key={result.id}
                  className={`transition-all duration-500 ${
                    isComplete || index < logs.length - 1
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-15'
                  }`}
                >
                  <p className="text-[var(--site-fg-muted)]">{result.folder}/</p>
                  <p className="pl-4 font-mono text-gray-800">{result.newName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function DocumentShowcase({ playWhen }: ShowcasePlayProps) {
  const sample = documentSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(420)
  const { isInView, ref } = useShowcasePlay(playWhen)
  const activeFieldCount = Math.max(0, logs.length - 1)

  useEffect(() => {
    if (isInView) start(documentProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="文書 → 抽出">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              契約書
            </p>
            <div className="space-y-2 text-xs leading-relaxed text-gray-700">
              {sample.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.id}
                  className={`rounded p-2 transition-colors ${
                    activeFieldCount > 0 && index < activeFieldCount
                      ? 'border border-yellow-300 bg-yellow-100'
                      : 'bg-gray-50'
                  }`}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              抽出項目
            </p>
            <div className="space-y-2">
              {sample.fields.map((field, index) => (
                <div
                  key={field.id}
                  className={`rounded border p-3 text-sm transition-all duration-500 ${
                    isComplete || index < activeFieldCount
                      ? 'border-brand/30 bg-brand/10 opacity-100'
                      : 'border-[#D9DDE3] bg-gray-50 opacity-30'
                  }`}
                >
                  <p className="mb-1 text-xs text-[var(--site-fg-muted)]">{field.label}</p>
                  <p className="text-gray-800">{field.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function PredictionShowcase({ playWhen }: ShowcasePlayProps) {
  const sample = predictionSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(400)
  const { isInView, ref } = useShowcasePlay(playWhen)

  useEffect(() => {
    if (isInView) start(predictionProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  const points = sample.dataPoints
  const values = points.map((point) => point.value)
  const min = Math.min(...values) * 0.9
  const max = Math.max(...values) * 1.1
  const range = max - min || 1
  const x = (i: number) => 24 + (i / (points.length - 1)) * 260
  const y = (v: number) => 120 - ((v - min) / range) * 88
  const path = points
    .filter((point) => !point.isForecast)
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${x(index)} ${y(point.value)}`)
    .join(' ')

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="データ → 予測">
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <svg viewBox="0 0 320 140" className="h-auto w-full" aria-hidden="true">
              <path d={path} fill="none" stroke="#3B82F6" strokeWidth="3" />
              {points.map((point, index) => (
                <circle
                  key={point.label}
                  cx={x(index)}
                  cy={y(point.value)}
                  r={point.isForecast ? 5 : 4}
                  fill={point.isForecast && isComplete ? '#06B6D4' : '#3B82F6'}
                  opacity={point.isForecast && !isComplete ? 0.25 : 1}
                />
              ))}
              {isComplete && (
                <line
                  x1={x(points.length - 2)}
                  y1={y(points[points.length - 2].value)}
                  x2={x(points.length - 1)}
                  y2={y(points[points.length - 1].value)}
                  stroke="#06B6D4"
                  strokeWidth="3"
                  strokeDasharray="5 4"
                />
              )}
            </svg>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              予測結果
            </p>
            <p className="mb-2 text-3xl font-bold text-gray-800">
              {isComplete ? sample.forecast.value.toLocaleString() : '---'}
              <span className="ml-1 text-sm font-normal text-[var(--site-fg-muted)]">
                {sample.unit}
              </span>
            </p>
            <div className="space-y-2 text-sm">
              {sample.factors.map((factor, index) => (
                <div
                  key={factor.label}
                  className={`rounded border p-2 ${
                    isComplete || index < logs.length - 1
                      ? 'border-[#D9DDE3] bg-gray-50 opacity-100'
                      : 'border-[#D9DDE3] bg-gray-50 opacity-25'
                  }`}
                >
                  <p className="text-gray-700">{factor.label}</p>
                  <p className="text-xs text-[var(--site-fg-muted)]">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function WorkflowShowcase({ playWhen }: ShowcasePlayProps) {
  const sample = workflowSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(360)
  const { isInView, ref } = useShowcasePlay(playWhen)

  useEffect(() => {
    if (isInView) start(workflowProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="業務 → 自動化">
        <div className="grid items-start gap-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <div className="space-y-3">
              {sample.steps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-3 w-3 rounded-full ${
                      isComplete || index < logs.length ? 'bg-brand' : 'bg-gray-300'
                    }`}
                  />
                  <div>
                    <p className="text-sm text-gray-800">{step.label}</p>
                    <p className="text-xs text-[var(--site-fg-muted)]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              完了状態
            </p>
            <div className="space-y-3">
              <div
                className={`rounded-lg border p-3 ${
                  isComplete ? 'border-green-200 bg-green-50' : 'border-[#D9DDE3] bg-gray-50'
                }`}
              >
                <p className="text-xs text-[var(--site-fg-muted)]">登録ID</p>
                <p className="font-mono text-sm text-gray-800">
                  {isComplete ? sample.result.registeredId : '---'}
                </p>
              </div>
              <div
                className={`rounded-lg border p-3 ${
                  isComplete ? 'border-brand/30 bg-brand/10' : 'border-[#D9DDE3] bg-gray-50'
                }`}
              >
                <p className="text-xs text-[var(--site-fg-muted)]">通知</p>
                <p className="text-sm text-gray-800">
                  {isComplete ? sample.result.notification : '処理中…'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function KnowledgeShowcase({ playWhen }: ShowcasePlayProps) {
  const sample = knowledgeSampleSets[0]
  const question = sample.questions[0]
  const source = sample.sources.find((item) => item.id === question.sourceId)
  const { isComplete, start, reset } = useDemoProcess(420)
  const { isInView, ref } = useShowcasePlay(playWhen)

  useEffect(() => {
    if (isInView) start(knowledgeProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="ナレッジ → 検索">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1fr_0.9fr]">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              質問
            </p>
            <p className="text-sm text-gray-800">{question.question}</p>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              回答
            </p>
            <p
              className={`text-sm text-gray-800 transition-opacity duration-500 ${
                isComplete ? 'opacity-100' : 'opacity-20'
              }`}
            >
              {question.answer}
            </p>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              根拠
            </p>
            <p className="mb-2 text-xs text-brand-deep">{source?.title}</p>
            <p
              className={`text-xs leading-relaxed text-gray-600 transition-opacity duration-500 ${
                isComplete ? 'opacity-100' : 'opacity-25'
              }`}
            >
              {source?.excerpt}
            </p>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function ReportShowcase({ playWhen }: ShowcasePlayProps) {
  const sample = reportSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(380)
  const { isInView, ref } = useShowcasePlay(playWhen)

  useEffect(() => {
    if (isInView) start(reportProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="複数情報 → 報告書">
        <div className="grid items-start gap-4 lg:grid-cols-[0.9fr_1fr]">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              素材
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              {sample.materials.map((material) => (
                <li key={material.id}>
                  {material.label}{' '}
                  <span className="text-[var(--site-fg-muted)]">{material.preview}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              完成報告書
            </p>
            <div className="space-y-3">
              {sample.sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`transition-all duration-500 ${
                    isComplete || index < logs.length - 1
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-20'
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-800">{section.heading}</p>
                  <p className="mb-1.5 text-xs leading-relaxed text-gray-600">
                    {section.content}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {section.sources.map((source) => (
                      <span
                        key={source}
                        className="rounded border border-brand/20 bg-brand/10 px-1.5 py-0.5 text-[10px] text-brand-deep"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

type CapabilityShowcaseDemoProps = ShowcasePlayProps & {
  slug: CapabilityShowcaseSlug
}

export function CapabilityShowcaseDemo({ slug, playWhen }: CapabilityShowcaseDemoProps) {
  switch (slug) {
    case 'voice-to-structured':
      return <VoiceShowcase playWhen={playWhen} />
    case 'photo-to-classification':
      return <PhotoShowcase playWhen={playWhen} />
    case 'document-to-extraction':
      return <DocumentShowcase playWhen={playWhen} />
    case 'data-to-prediction':
      return <PredictionShowcase playWhen={playWhen} />
    case 'workflow-to-automation':
      return <WorkflowShowcase playWhen={playWhen} />
    case 'knowledge-to-search':
      return <KnowledgeShowcase playWhen={playWhen} />
    case 'multi-input-to-report':
      return <ReportShowcase playWhen={playWhen} />
    default:
      return null
  }
}
