'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  photoSampleSets,
  processingSteps,
  type PhotoSampleSet,
} from '@/data/ai-capability-gallery/photo-to-classification'
import { useStagedDemoScroll } from '@/components/ai-capability-gallery/hooks/useStagedDemoScroll'
import { DemoFrame } from './DemoFrame'
import { UploadArea } from './UploadArea'
import { ProcessingLog } from './ProcessingLog'
import { FolderTree } from './FolderTree'
import { DemoActions } from './DemoActions'
import { DemoBeforeAfterRail } from './DemoBeforeAfterRail'

export function PhotoToClassificationDemo() {
  const [selectedSet, setSelectedSet] = useState<PhotoSampleSet>(photoSampleSets[0])
  const [logs, setLogs] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([])
  const { beforeRef, afterRef, railRef } = useStagedDemoScroll(
    isProcessing,
    isComplete,
    { fallbackDelayMs: processingSteps.length * 500 * 0.55 },
  )

  const clearTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []
  }, [])

  useEffect(() => {
    return () => clearTimeouts()
  }, [clearTimeouts])

  const handleReset = () => {
    clearTimeouts()
    setLogs([])
    setIsProcessing(false)
    setIsComplete(false)
  }

  const handleSetChange = (setId: string) => {
    const next = photoSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      handleReset()
    }
  }

  const handleProcess = () => {
    clearTimeouts()
    setLogs([])
    setIsProcessing(true)
    setIsComplete(false)

    processingSteps.forEach((step, index) => {
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, step])
        if (index === processingSteps.length - 1) {
          setIsProcessing(false)
          setIsComplete(true)
        }
      }, (index + 1) * 500)
      timeoutRefs.current.push(timeout)
    })
  }

  const tabs = (
    <div className="mb-4 flex flex-wrap gap-2">
      {photoSampleSets.map((set) => (
        <button
          key={set.id}
          type="button"
          onClick={() => handleSetChange(set.id)}
          disabled={isProcessing}
          className={`
              rounded-lg px-3 py-1.5 text-xs font-medium transition-colors
              ${
                selectedSet.id === set.id
                  ? 'bg-brand text-white'
                  : 'border border-[#D9DDE3] bg-white text-gray-600 hover:border-brand-hover'
              }
              disabled:cursor-not-allowed disabled:opacity-50
            `}
        >
          {set.name}（{set.industry}）
        </button>
      ))}
    </div>
  )

  return (
    <DemoFrame title="写真 → 分類デモ">
      {tabs}

      <DemoBeforeAfterRail
        railRef={railRef}
        beforeRef={beforeRef}
        afterRef={afterRef}
        before={
          <UploadArea photos={selectedSet.photos} selectedSetName={selectedSet.name} />
        }
        after={
          <FolderTree
            folders={selectedSet.folders}
            results={selectedSet.results}
            isComplete={isComplete}
          />
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

      <div className="hidden gap-4 md:grid lg:grid-cols-3">
        <UploadArea photos={selectedSet.photos} selectedSetName={selectedSet.name} />
        <ProcessingLog logs={logs} isProcessing={isProcessing} />
        <FolderTree
          folders={selectedSet.folders}
          results={selectedSet.results}
          isComplete={isComplete}
        />
      </div>

      <DemoActions
        onProcess={handleProcess}
        onReset={handleReset}
        isProcessing={isProcessing}
        processLabel="整理する"
        processingLabel="整理中…"
      />
    </DemoFrame>
  )
}
