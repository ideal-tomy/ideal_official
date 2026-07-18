'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useStagedDemoScroll } from '@/components/ai-capability-gallery/hooks/useStagedDemoScroll'
import {
  documentSampleSets,
  documentProcessingSteps,
  type DocumentSampleSet,
} from '@/data/ai-capability-gallery/document-to-extraction'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { DemoActions } from './DemoActions'
import { DemoBeforeAfterRail } from './DemoBeforeAfterRail'

export function DocumentToExtractionDemo() {
  const [selectedSet, setSelectedSet] = useState<DocumentSampleSet>(documentSampleSets[0])
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null)
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()
  const { beforeRef, afterRef, railRef } = useStagedDemoScroll(
    isProcessing,
    isComplete,
    { fallbackDelayMs: documentProcessingSteps.length * 500 * 0.55 },
  )

  const handleSetChange = (setId: string) => {
    const next = documentSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      setSelectedFieldId(null)
      reset()
    }
  }

  const highlightedParagraphId =
    selectedFieldId != null
      ? selectedSet.fields.find((f) => f.id === selectedFieldId)?.paragraphId
      : null

  const documentView = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        文書ビュー
      </p>
      <p className="mb-3 text-sm font-semibold text-gray-800">{selectedSet.documentTitle}</p>
      <div className="space-y-2">
        {selectedSet.paragraphs.map((para) => (
          <p
            key={para.id}
            className={`rounded p-2 text-xs leading-relaxed transition-colors ${
              highlightedParagraphId === para.id
                ? 'border border-yellow-300 bg-yellow-100 text-gray-800'
                : 'text-gray-600'
            }`}
          >
            {para.text}
          </p>
        ))}
      </div>
    </div>
  )

  const extractionResult = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        抽出結果
      </p>
      {!isComplete ? (
        <p className="text-sm text-gray-400">処理完了後に表示されます</p>
      ) : (
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#D9DDE3]">
              <th className="py-2 text-left font-medium text-gray-500">項目</th>
              <th className="py-2 text-left font-medium text-gray-500">値</th>
            </tr>
          </thead>
          <tbody>
            {selectedSet.fields.map((field) => (
              <tr
                key={field.id}
                onClick={() => setSelectedFieldId(field.id)}
                className={`
                        cursor-pointer border-b border-[#D9DDE3] transition-colors
                        ${selectedFieldId === field.id ? 'bg-brand/10' : 'hover:bg-gray-50'}
                      `}
              >
                <td className="py-2 pr-2 text-gray-600">
                  {field.label}
                  {field.risk === 'high' && (
                    <span className="ml-1 text-[10px] text-red-500">高</span>
                  )}
                  {field.risk === 'medium' && (
                    <span className="ml-1 text-[10px] text-amber-500">中</span>
                  )}
                </td>
                <td className="py-2 text-gray-800">{field.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )

  return (
    <DemoFrame title="文書 → 抽出デモ">
      <SampleSetTabs
        sets={documentSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <DemoBeforeAfterRail
        railRef={railRef}
        beforeRef={beforeRef}
        afterRef={afterRef}
        before={documentView}
        after={extractionResult}
      />

      <details className="mt-3 rounded-lg border border-[#D9DDE3] bg-white md:hidden">
        <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-gray-600">
          AI処理ログ {logs.length > 0 ? `(${logs.length})` : ''}
        </summary>
        <div className="border-t border-[#D9DDE3] p-3">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
        </div>
      </details>

      <div className="mb-4 hidden gap-4 md:grid lg:grid-cols-2">
        {documentView}
        <div className="space-y-4">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
          {extractionResult}
        </div>
      </div>

      {isComplete && (
        <div className="mb-4 rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
            重要項目サマリー
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedSet.summary.map((item) => (
              <span
                key={item.label}
                className={`
                  rounded-full border px-3 py-1.5 text-xs
                  ${
                    item.risk === 'high'
                      ? 'border-red-200 bg-red-50 text-red-700'
                      : item.risk === 'medium'
                        ? 'border-amber-200 bg-amber-50 text-amber-700'
                        : 'border-gray-200 bg-gray-50 text-gray-700'
                  }
                `}
              >
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        </div>
      )}

      <DemoActions
        onProcess={() => start(documentProcessingSteps)}
        onReset={() => {
          reset()
          setSelectedFieldId(null)
        }}
        isProcessing={isProcessing}
        processLabel="情報を抽出する"
        processingLabel="抽出中…"
      />
    </DemoFrame>
  )
}
