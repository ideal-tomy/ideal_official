'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useStagedDemoScroll } from '@/components/ai-capability-gallery/hooks/useStagedDemoScroll'
import {
  reportSampleSets,
  reportProcessingSteps,
  type ReportSampleSet,
} from '@/data/ai-capability-gallery/multi-input-to-report'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { DemoActions } from './DemoActions'
import { DemoBeforeAfterRail } from './DemoBeforeAfterRail'

const typeIcons: Record<string, string> = {
  photo: '📷',
  voice: '🎙',
  memo: '📝',
  data: '📊',
}

export function MultiInputToReportDemo() {
  const [selectedSet, setSelectedSet] = useState<ReportSampleSet>(reportSampleSets[0])
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()
  const { beforeRef, afterRef, railRef } = useStagedDemoScroll(
    isProcessing,
    isComplete,
    { fallbackDelayMs: reportProcessingSteps.length * 500 * 0.55 },
  )

  const handleSetChange = (setId: string) => {
    const next = reportSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      reset()
    }
  }

  const materialsPanel = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        入力素材
      </p>
      <ul className="space-y-2">
        {selectedSet.materials.map((mat) => (
          <li
            key={mat.id}
            className="flex items-start gap-2 rounded border border-[#D9DDE3] bg-gray-50 p-2"
          >
            <span aria-hidden="true">{typeIcons[mat.type]}</span>
            <div>
              <p className="text-xs font-medium text-gray-700">{mat.label}</p>
              <p className="text-[11px] text-gray-500">{mat.preview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  const reportPanel = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        完成報告書
      </p>
      {!isComplete ? (
        <p className="text-sm text-gray-400">処理完了後に表示されます</p>
      ) : (
        <div className="space-y-4">
          <h3 className="border-b border-[#D9DDE3] pb-2 text-sm font-semibold text-gray-800">
            {selectedSet.title}
          </h3>
          {selectedSet.sections.map((section) => (
            <div key={section.id}>
              <h4 className="mb-1 text-xs font-semibold text-gray-700">{section.heading}</h4>
              <p className="mb-1.5 text-xs leading-relaxed text-gray-600">{section.content}</p>
              <div className="flex flex-wrap gap-1">
                {section.sources.map((src) => (
                  <span
                    key={src}
                    className="rounded border border-brand/20 bg-brand/10 px-1.5 py-0.5 text-[10px] text-brand"
                  >
                    {src}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <DemoFrame title="複数情報 → 報告書デモ">
      <SampleSetTabs
        sets={reportSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <DemoBeforeAfterRail
        railRef={railRef}
        beforeRef={beforeRef}
        afterRef={afterRef}
        before={materialsPanel}
        after={reportPanel}
      />

      <details className="mt-3 rounded-lg border border-[#D9DDE3] bg-white md:hidden">
        <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-gray-600">
          AI処理ログ {logs.length > 0 ? `(${logs.length})` : ''}
        </summary>
        <div className="border-t border-[#D9DDE3] p-3">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
        </div>
      </details>

      <div className="hidden gap-4 md:grid lg:grid-cols-3">
        {materialsPanel}
        <ProcessingLog logs={logs} isProcessing={isProcessing} />
        {reportPanel}
      </div>

      <DemoActions
        onProcess={() => start(reportProcessingSteps)}
        onReset={reset}
        isProcessing={isProcessing}
        processLabel="報告書を生成する"
        processingLabel="生成中…"
      />
    </DemoFrame>
  )
}
