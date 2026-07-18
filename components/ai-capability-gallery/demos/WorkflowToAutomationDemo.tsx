'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useStagedDemoScroll } from '@/components/ai-capability-gallery/hooks/useStagedDemoScroll'
import {
  workflowSampleSets,
  workflowProcessingSteps,
  type WorkflowSampleSet,
} from '@/data/ai-capability-gallery/workflow-to-automation'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { DemoActions } from './DemoActions'
import { DemoBeforeAfterRail } from './DemoBeforeAfterRail'

export function WorkflowToAutomationDemo() {
  const [selectedSet, setSelectedSet] = useState<WorkflowSampleSet>(workflowSampleSets[0])
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()
  const { beforeRef, afterRef, railRef } = useStagedDemoScroll(
    isProcessing,
    isComplete,
    { fallbackDelayMs: workflowProcessingSteps.length * 500 * 0.55 },
  )

  const handleSetChange = (setId: string) => {
    const next = workflowSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      reset()
    }
  }

  const inboxPanel = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        受信トレイ
      </p>
      <div className="overflow-hidden rounded-lg border border-[#D9DDE3]">
        <div className="border-b border-[#D9DDE3] bg-gray-50 px-3 py-2 text-xs text-gray-500">
          受信メール 1件
        </div>
        <div className="space-y-2 p-3">
          <p className="text-xs text-gray-500">From: {selectedSet.email.from}</p>
          <p className="text-sm font-medium text-gray-800">{selectedSet.email.subject}</p>
          <p className="text-xs leading-relaxed text-gray-600">{selectedSet.email.body}</p>
          {selectedSet.email.attachment && (
            <p className="text-xs text-brand">📎 {selectedSet.email.attachment}</p>
          )}
        </div>
      </div>
    </div>
  )

  const resultPanel = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        登録結果
      </p>
      {!isComplete ? (
        <p className="text-sm text-gray-400">処理完了後に表示されます</p>
      ) : (
        <div className="space-y-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="mb-1 text-xs font-medium text-green-700">登録完了</p>
            <dl className="space-y-1 text-xs">
              <div className="flex justify-between">
                <dt className="text-gray-500">ID</dt>
                <dd className="font-mono text-gray-800">{selectedSet.result.registeredId}</dd>
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
          <div className="rounded-lg border border-brand/30 bg-brand/10 p-3">
            <p className="text-xs text-brand-deep">🔔 {selectedSet.result.notification}</p>
          </div>
        </div>
      )}
    </div>
  )

  const stepsPanel = isComplete ? (
    <div className="mt-3 rounded-lg border border-[#D9DDE3] bg-white p-3">
      <p className="mb-2 text-[11px] text-gray-500">実行ステップ</p>
      <ol className="space-y-1">
        {selectedSet.steps.map((step) => (
          <li key={step.id} className="flex gap-2 text-xs text-gray-600">
            <span className="shrink-0 text-green-600">✓</span>
            <span>
              <strong className="text-gray-700">{step.label}</strong> — {step.detail}
            </span>
          </li>
        ))}
      </ol>
    </div>
  ) : null

  return (
    <DemoFrame title="業務 → 自動化デモ">
      <SampleSetTabs
        sets={workflowSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <DemoBeforeAfterRail
        railRef={railRef}
        beforeRef={beforeRef}
        afterRef={afterRef}
        before={inboxPanel}
        after={resultPanel}
      />

      <details className="mt-3 rounded-lg border border-[#D9DDE3] bg-white md:hidden">
        <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-gray-600">
          処理ログ {logs.length > 0 ? `(${logs.length})` : ''}
        </summary>
        <div className="space-y-3 border-t border-[#D9DDE3] p-3">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
          {stepsPanel}
        </div>
      </details>

      <div className="hidden gap-4 md:grid lg:grid-cols-3">
        {inboxPanel}
        <div>
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
          {stepsPanel}
        </div>
        {resultPanel}
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
