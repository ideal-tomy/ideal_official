'use client'

import Link from 'next/link'
import {
  capabilities,
  type Capability,
} from '@/data/ai-capability-gallery/capabilities'
import { ChangeLabel } from '@/components/ui/ChangeLabel'
import { DemoFrame } from '@/components/ai-capability-gallery/demos/DemoFrame'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useInViewAutoPlay } from '@/components/ai-capability-gallery/hooks/useInViewAutoPlay'
import { useEffect, useMemo, useState } from 'react'
import { voiceProcessingSteps, voiceSampleSets } from '@/data/ai-capability-gallery/voice-to-structured'
import { photoSampleSets, processingSteps as photoProcessingSteps } from '@/data/ai-capability-gallery/photo-to-classification'
import { documentProcessingSteps, documentSampleSets } from '@/data/ai-capability-gallery/document-to-extraction'
import { predictionProcessingSteps, predictionSampleSets } from '@/data/ai-capability-gallery/data-to-prediction'
import { workflowProcessingSteps, workflowSampleSets } from '@/data/ai-capability-gallery/workflow-to-automation'
import { knowledgeProcessingSteps, knowledgeSampleSets } from '@/data/ai-capability-gallery/knowledge-to-search'
import { reportProcessingSteps, reportSampleSets } from '@/data/ai-capability-gallery/multi-input-to-report'

function VoiceShowcase() {
  const sample = voiceSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(400)
  const { ref, isInView } = useInViewAutoPlay()

  useEffect(() => {
    if (isInView) start(voiceProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="音声 → 構造化">
        <div className="grid lg:grid-cols-[0.95fr_0.2fr_1fr] gap-4 items-center">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              音声入力
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {sample.transcript}
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center text-2xl text-brand">
            ↓ AI
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              現場日報
            </p>
            <div className="space-y-2 text-sm">
              {sample.fields.map((field, index) => (
                <div
                  key={field.key}
                  className={`grid grid-cols-[84px_1fr] gap-3 transition-all duration-500 ${
                    isComplete || index < logs.length - 1
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-20 translate-y-1'
                  }`}
                >
                  <span className="text-gray-500">{field.key}</span>
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

function PhotoShowcase() {
  const sample = photoSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(380)
  const { ref, isInView } = useInViewAutoPlay()

  useEffect(() => {
    if (isInView) start(photoProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="写真 → 分類">
        <div className="grid lg:grid-cols-[0.8fr_0.3fr_1fr] gap-4 items-start">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
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
          <div className="hidden lg:flex flex-col gap-2 pt-6">
            {logs.map((log) => (
              <span key={log} className="text-xs text-brand">
                {log}
              </span>
            ))}
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              整理後
            </p>
            <div className="space-y-2 text-sm">
              {sample.results.map((result, index) => (
                <div
                  key={result.id}
                  className={`transition-all duration-500 ${
                    isComplete || index < logs.length - 1
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-15 translate-y-2'
                  }`}
                >
                  <p className="text-gray-500">{result.folder}/</p>
                  <p className="font-mono text-gray-800 pl-4">{result.newName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function DocumentShowcase() {
  const sample = documentSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(420)
  const { ref, isInView } = useInViewAutoPlay()
  const activeFieldCount = Math.max(0, logs.length - 1)

  useEffect(() => {
    if (isInView) start(documentProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="文書 → 抽出">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-4">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              契約書
            </p>
            <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
              {sample.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.id}
                  className={`rounded p-2 transition-colors ${
                    activeFieldCount > 0 && index < activeFieldCount
                      ? 'bg-yellow-100 border border-yellow-300'
                      : 'bg-gray-50'
                  }`}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
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
                  <p className="text-xs text-gray-500 mb-1">{field.label}</p>
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

function PredictionShowcase() {
  const sample = predictionSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(400)
  const { ref, isInView } = useInViewAutoPlay()

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
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-4 items-center">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <svg viewBox="0 0 320 140" className="w-full h-auto" aria-hidden="true">
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
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              予測結果
            </p>
            <p className="text-3xl font-bold text-gray-800 mb-2">
              {isComplete ? sample.forecast.value.toLocaleString() : '---'}
              <span className="text-sm font-normal text-gray-500 ml-1">{sample.unit}</span>
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
                  <p className="text-xs text-gray-500">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function WorkflowShowcase() {
  const sample = workflowSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(360)
  const { ref, isInView } = useInViewAutoPlay()

  useEffect(() => {
    if (isInView) start(workflowProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="業務 → 自動化">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-4 items-start">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <div className="space-y-3">
              {sample.steps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-3 w-3 rounded-full ${
                      isComplete || index < logs.length
                        ? 'bg-brand'
                        : 'bg-gray-300'
                    }`}
                  />
                  <div>
                    <p className="text-sm text-gray-800">{step.label}</p>
                    <p className="text-xs text-gray-500">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              完了状態
            </p>
            <div className="space-y-3">
              <div className={`rounded-lg p-3 border ${isComplete ? 'border-green-200 bg-green-50' : 'border-[#D9DDE3] bg-gray-50'}`}>
                <p className="text-xs text-gray-500">登録ID</p>
                <p className="text-sm font-mono text-gray-800">
                  {isComplete ? sample.result.registeredId : '---'}
                </p>
              </div>
              <div className={`rounded-lg p-3 border ${isComplete ? 'border-brand/30 bg-brand/10' : 'border-[#D9DDE3] bg-gray-50'}`}>
                <p className="text-xs text-gray-500">通知</p>
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

function KnowledgeShowcase() {
  const sample = knowledgeSampleSets[0]
  const question = sample.questions[0]
  const source = sample.sources.find((item) => item.id === question.sourceId)
  const { logs, isComplete, start, reset } = useDemoProcess(420)
  const { ref, isInView } = useInViewAutoPlay()

  useEffect(() => {
    if (isInView) start(knowledgeProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="ナレッジ → 検索">
        <div className="grid lg:grid-cols-[0.9fr_1fr_0.9fr] gap-4">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              質問
            </p>
            <p className="text-sm text-gray-800">{question.question}</p>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              回答
            </p>
            <p className={`text-sm text-gray-800 transition-opacity duration-500 ${isComplete ? 'opacity-100' : 'opacity-20'}`}>
              {question.answer}
            </p>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              根拠
            </p>
            <p className="text-xs text-brand-deep mb-2">{source?.title}</p>
            <p className={`text-xs text-gray-600 leading-relaxed transition-opacity duration-500 ${isComplete ? 'opacity-100' : 'opacity-25'}`}>
              {source?.excerpt}
            </p>
          </div>
        </div>
      </DemoFrame>
    </section>
  )
}

function ReportShowcase() {
  const sample = reportSampleSets[0]
  const { logs, isComplete, start, reset } = useDemoProcess(380)
  const { ref, isInView } = useInViewAutoPlay()

  useEffect(() => {
    if (isInView) start(reportProcessingSteps)
    else reset()
  }, [isInView, reset, start])

  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DemoFrame title="複数情報 → 報告書">
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-4 items-start">
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              素材
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              {sample.materials.map((material) => (
                <li key={material.id}>
                  {material.label} <span className="text-gray-500">{material.preview}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              完成報告書
            </p>
            <div className="space-y-3">
              {sample.sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`transition-all duration-500 ${
                    isComplete || index < logs.length - 1
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-20 translate-y-2'
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-800">{section.heading}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-1.5">
                    {section.content}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {section.sources.map((source) => (
                      <span
                        key={source}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-brand/10 text-brand-deep border border-brand/20"
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

function ShowcaseDemo({ slug }: { slug: Capability['slug'] }) {
  switch (slug) {
    case 'voice-to-structured':
      return <VoiceShowcase />
    case 'photo-to-classification':
      return <PhotoShowcase />
    case 'document-to-extraction':
      return <DocumentShowcase />
    case 'data-to-prediction':
      return <PredictionShowcase />
    case 'workflow-to-automation':
      return <WorkflowShowcase />
    case 'knowledge-to-search':
      return <KnowledgeShowcase />
    case 'multi-input-to-report':
      return <ReportShowcase />
    default:
      return null
  }
}

function ShowcaseText({
  capability,
}: {
  capability: Capability
}) {
  return (
    <div className="max-w-xl">
      <p className="text-sm font-mono tracking-[0.2em] text-gray-500 mb-4">
        {String(capability.number).padStart(2, '0')}
      </p>
      <p className="text-xs md:text-sm mb-4">
        <ChangeLabel label={capability.englishLabel} className="tracking-[0.22em]" />
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        {capability.title}
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        {capability.showcaseLead}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {capability.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-2 mb-8 text-sm">
        <div className="flex gap-3">
          <span className="text-gray-500 shrink-0 w-14">Before</span>
          <span className="text-gray-400">{capability.before}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-brand shrink-0 w-14">After</span>
          <span className="text-gray-200">{capability.after}</span>
        </div>
      </div>
      <Link
        href={capability.href}
        className="inline-flex items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        このデモを体験
      </Link>
    </div>
  )
}

export function CapabilityShowcase() {
  const sections = useMemo(() => capabilities, [])

  return (
    <section id="showcase" className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 md:space-y-10">
        {sections.map((capability, index) => {
          const reverse = index % 2 === 1

          return (
            <article
              key={capability.id}
              id={`capability-${capability.slug}`}
              className="scroll-mt-28 rounded-[28px] border border-gray-800 bg-gradient-to-b from-gray-950 to-black p-6 md:p-8 lg:p-10"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-center ${
                  reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                }`}
              >
                <ShowcaseText capability={capability} />
                <ShowcaseDemo slug={capability.slug} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
