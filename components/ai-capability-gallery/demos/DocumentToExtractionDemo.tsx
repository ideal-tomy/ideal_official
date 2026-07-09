'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import {
  documentSampleSets,
  documentProcessingSteps,
  type DocumentSampleSet,
} from '@/data/ai-capability-gallery/document-to-extraction'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { DemoActions } from './DemoActions'

export function DocumentToExtractionDemo() {
  const [selectedSet, setSelectedSet] = useState<DocumentSampleSet>(documentSampleSets[0])
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null)
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()

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

  return (
    <DemoFrame title="文書 → 抽出デモ">
      <SampleSetTabs
        sets={documentSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            文書ビュー
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-3">{selectedSet.documentTitle}</p>
          <div className="space-y-2">
            {selectedSet.paragraphs.map((para) => (
              <p
                key={para.id}
                className={`text-xs leading-relaxed p-2 rounded transition-colors ${
                  highlightedParagraphId === para.id
                    ? 'bg-yellow-100 border border-yellow-300 text-gray-800'
                    : 'text-gray-600'
                }`}
              >
                {para.text}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />

          <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              抽出結果
            </p>
            {!isComplete ? (
              <p className="text-sm text-gray-400">処理完了後に表示されます</p>
            ) : (
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#D9DDE3]">
                    <th className="text-left py-2 text-gray-500 font-medium">項目</th>
                    <th className="text-left py-2 text-gray-500 font-medium">値</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedSet.fields.map((field) => (
                    <tr
                      key={field.id}
                      onClick={() => setSelectedFieldId(field.id)}
                      className={`
                        border-b border-[#D9DDE3] cursor-pointer transition-colors
                        ${selectedFieldId === field.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                      `}
                    >
                      <td className="py-2 pr-2 text-gray-600">
                        {field.label}
                        {field.risk === 'high' && (
                          <span className="ml-1 text-red-500 text-[10px]">高</span>
                        )}
                        {field.risk === 'medium' && (
                          <span className="ml-1 text-amber-500 text-[10px]">中</span>
                        )}
                      </td>
                      <td className="py-2 text-gray-800">{field.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {isComplete && (
        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 mb-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            重要項目サマリー
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedSet.summary.map((item) => (
              <span
                key={item.label}
                className={`
                  text-xs px-3 py-1.5 rounded-full border
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
