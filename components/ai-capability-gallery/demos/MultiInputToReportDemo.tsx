'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import {
  reportSampleSets,
  reportProcessingSteps,
  type ReportSampleSet,
} from '@/data/ai-capability-gallery/multi-input-to-report'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { DemoActions } from './DemoActions'

const typeIcons: Record<string, string> = {
  photo: '📷',
  voice: '🎙',
  memo: '📝',
  data: '📊',
}

export function MultiInputToReportDemo() {
  const [selectedSet, setSelectedSet] = useState<ReportSampleSet>(reportSampleSets[0])
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()

  const handleSetChange = (setId: string) => {
    const next = reportSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      reset()
    }
  }

  return (
    <DemoFrame title="複数情報 → 報告書デモ">
      <SampleSetTabs
        sets={reportSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            入力素材
          </p>
          <ul className="space-y-2">
            {selectedSet.materials.map((mat) => (
              <li
                key={mat.id}
                className="flex items-start gap-2 p-2 rounded border border-[#D9DDE3] bg-gray-50"
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

        <div>
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
        </div>

        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            完成報告書
          </p>
          {!isComplete ? (
            <p className="text-sm text-gray-400">処理完了後に表示されます</p>
          ) : (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-800 border-b border-[#D9DDE3] pb-2">
                {selectedSet.title}
              </h3>
              {selectedSet.sections.map((section) => (
                <div key={section.id}>
                  <h4 className="text-xs font-semibold text-gray-700 mb-1">{section.heading}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-1.5">{section.content}</p>
                  <div className="flex flex-wrap gap-1">
                    {section.sources.map((src) => (
                      <span
                        key={src}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-brand/10 text-brand border border-brand/20"
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
