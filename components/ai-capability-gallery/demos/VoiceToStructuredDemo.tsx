'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useStagedDemoScroll } from '@/components/ai-capability-gallery/hooks/useStagedDemoScroll'
import {
  voiceSampleSets,
  voiceProcessingSteps,
  type VoiceSampleSet,
} from '@/data/ai-capability-gallery/voice-to-structured'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { StructuredResult } from './StructuredResult'
import { DemoActions } from './DemoActions'
import { DemoBeforeAfterRail } from './DemoBeforeAfterRail'

function Waveform({ active }: { active: boolean }) {
  const bars = [3, 5, 8, 6, 9, 4, 7, 5, 8, 6, 4, 7, 5, 3]
  return (
    <div className="flex h-12 items-end gap-0.5" aria-hidden="true">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`w-1 rounded-full bg-brand ${active ? 'animate-pulse' : 'opacity-40'}`}
          style={{ height: `${h * 4}px` }}
        />
      ))}
    </div>
  )
}

function VoiceInputPanel({
  selectedSet,
  isProcessing,
  isComplete,
}: {
  selectedSet: VoiceSampleSet
  isProcessing: boolean
  isComplete: boolean
}) {
  return (
    <div className="space-y-3 rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
        音声入力
      </p>
      <div className="flex items-center gap-3 rounded-lg border border-[#D9DDE3] bg-gray-50 p-3">
        <span className="text-2xl" aria-hidden="true">
          🎙
        </span>
        <div>
          <p className="text-sm font-medium text-gray-700">サンプル音声</p>
          <p className="text-xs text-[var(--site-fg-muted)]">長さ: {selectedSet.duration}</p>
        </div>
      </div>
      <Waveform active={isProcessing || isComplete} />
      <div className="border-t border-[#D9DDE3] pt-3">
        <p className="mb-1 text-[11px] text-[var(--site-fg-muted)]">文字起こし（プレビュー）</p>
        <p className="rounded bg-gray-50 p-2 text-xs leading-relaxed text-gray-700">
          {isComplete || isProcessing
            ? selectedSet.transcript
            : '処理後に表示されます'}
        </p>
      </div>
    </div>
  )
}

export function VoiceToStructuredDemo() {
  const [selectedSet, setSelectedSet] = useState<VoiceSampleSet>(voiceSampleSets[0])
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()
  const stageDelay =
    Math.max(1, voiceProcessingSteps.length) * 500 * 0.55
  const { beforeRef, afterRef, railRef } = useStagedDemoScroll(
    isProcessing,
    isComplete,
    { fallbackDelayMs: stageDelay },
  )

  const handleSetChange = (setId: string) => {
    const next = voiceSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      reset()
    }
  }

  return (
    <DemoFrame title="音声 → 構造化デモ">
      <SampleSetTabs
        sets={voiceSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      {/* スマホ: 横スワイプ Before / After */}
      <DemoBeforeAfterRail
        railRef={railRef}
        beforeRef={beforeRef}
        afterRef={afterRef}
        before={
          <VoiceInputPanel
            selectedSet={selectedSet}
            isProcessing={isProcessing}
            isComplete={isComplete}
          />
        }
        after={
          <StructuredResult fields={selectedSet.fields} isComplete={isComplete} />
        }
      />

      <details className="mt-3 rounded-lg border border-[#D9DDE3] bg-white md:hidden">
        <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-gray-600">
          AI処理ログ {logs.length > 0 ? `(${logs.length})` : ''}
        </summary>
        <div className="border-t border-[#D9DDE3] p-3">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
        </div>
      </details>

      {/* PC: 既存グリッド */}
      <div className="hidden gap-4 md:grid lg:grid-cols-3">
        <div>
          <VoiceInputPanel
            selectedSet={selectedSet}
            isProcessing={isProcessing}
            isComplete={isComplete}
          />
        </div>
        <div>
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
        </div>
        <div>
          <StructuredResult fields={selectedSet.fields} isComplete={isComplete} />
        </div>
      </div>

      <DemoActions
        onProcess={() => start(voiceProcessingSteps)}
        onReset={reset}
        isProcessing={isProcessing}
        processLabel="文字起こし＆構造化する"
        processingLabel="処理中…"
      />
    </DemoFrame>
  )
}
