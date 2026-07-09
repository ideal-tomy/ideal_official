'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import {
  workflowSampleSets,
  workflowProcessingSteps,
  type WorkflowSampleSet,
} from '@/data/ai-capability-gallery/workflow-to-automation'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { DemoActions } from './DemoActions'

export function WorkflowToAutomationDemo() {
  const [selectedSet, setSelectedSet] = useState<WorkflowSampleSet>(workflowSampleSets[0])
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()

  const handleSetChange = (setId: string) => {
    const next = workflowSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      reset()
    }
  }

  return (
    <DemoFrame title="業務 → 自動化デモ">
      <SampleSetTabs
        sets={workflowSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            受信トレイ
          </p>
          <div className="border border-[#D9DDE3] rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-3 py-2 border-b border-[#D9DDE3] text-xs text-gray-500">
              受信メール 1件
            </div>
            <div className="p-3 space-y-2">
              <p className="text-xs text-gray-500">From: {selectedSet.email.from}</p>
              <p className="text-sm font-medium text-gray-800">{selectedSet.email.subject}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{selectedSet.email.body}</p>
              {selectedSet.email.attachment && (
                <p className="text-xs text-blue-600">📎 {selectedSet.email.attachment}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
          {isComplete && (
            <div className="mt-3 rounded-lg border border-[#D9DDE3] bg-white p-3">
              <p className="text-[11px] text-gray-500 mb-2">実行ステップ</p>
              <ol className="space-y-1">
                {selectedSet.steps.map((step) => (
                  <li key={step.id} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    <span>
                      <strong className="text-gray-700">{step.label}</strong> — {step.detail}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            登録結果
          </p>
          {!isComplete ? (
            <p className="text-sm text-gray-400">処理完了後に表示されます</p>
          ) : (
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                <p className="text-xs text-green-700 font-medium mb-1">登録完了</p>
                <dl className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">ID</dt>
                    <dd className="text-gray-800 font-mono">{selectedSet.result.registeredId}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">カテゴリ</dt>
                    <dd className="text-gray-800">{selectedSet.result.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">ステータス</dt>
                    <dd className="text-green-700">{selectedSet.result.status}</dd>
                  </div>
                </dl>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-xs text-blue-700">
                  🔔 {selectedSet.result.notification}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <DemoActions
        onProcess={() => start(workflowProcessingSteps)}
        onReset={reset}
        isProcessing={isProcessing}
        processLabel="自動処理を開始する"
        processingLabel="実行中…"
      />
    </DemoFrame>
  )
}
