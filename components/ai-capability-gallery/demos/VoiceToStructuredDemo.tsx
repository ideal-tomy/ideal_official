'use client'

import { useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
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

function Waveform({ active }: { active: boolean }) {
  const bars = [3, 5, 8, 6, 9, 4, 7, 5, 8, 6, 4, 7, 5, 3]
  return (
    <div className="flex items-end gap-0.5 h-12" aria-hidden="true">
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

export function VoiceToStructuredDemo() {
  const [selectedSet, setSelectedSet] = useState<VoiceSampleSet>(voiceSampleSets[0])
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()

  const handleSetChange = (setId: string) => {
    const next = voiceSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      reset()
    }
  }

  const handleReset = () => reset()

  return (
    <DemoFrame title="音声 → 構造化デモ">
      <SampleSetTabs
        sets={voiceSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 space-y-3">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            音声入力
          </p>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-[#D9DDE3]">
            <span className="text-2xl" aria-hidden="true">🎙</span>
            <div>
              <p className="text-sm font-medium text-gray-700">サンプル音声</p>
              <p className="text-xs text-gray-500">長さ: {selectedSet.duration}</p>
            </div>
          </div>
          <Waveform active={isProcessing || isComplete} />
          <div className="border-t border-[#D9DDE3] pt-3">
            <p className="text-[11px] text-gray-500 mb-1">文字起こし（プレビュー）</p>
            <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 p-2 rounded">
              {isComplete ? selectedSet.transcript : '処理後に表示されます'}
            </p>
          </div>
        </div>

        <div>
          <ProcessingLog
            logs={logs}
            isProcessing={isProcessing}
          />
        </div>

        <div>
          <StructuredResult
            fields={selectedSet.fields}
            isComplete={isComplete}
          />
        </div>
      </div>

      <DemoActions
        onProcess={() => start(voiceProcessingSteps)}
        onReset={handleReset}
        isProcessing={isProcessing}
        processLabel="文字起こし＆構造化する"
        processingLabel="処理中…"
      />
    </DemoFrame>
  )
}
