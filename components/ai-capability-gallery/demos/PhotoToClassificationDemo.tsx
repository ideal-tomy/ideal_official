'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import {
  photoSampleSets,
  processingSteps,
  type PhotoSampleSet,
} from '@/data/ai-capability-gallery/photo-to-classification'
import { DemoFrame } from './DemoFrame'
import { UploadArea } from './UploadArea'
import { ProcessingLog } from './ProcessingLog'
import { FolderTree } from './FolderTree'

export function PhotoToClassificationDemo() {
  const [selectedSet, setSelectedSet] = useState<PhotoSampleSet>(photoSampleSets[0])
  const [logs, setLogs] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([])

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

  return (
    <DemoFrame title="写真 → 分類デモ">
      <div className="mb-4 flex flex-wrap gap-2">
        {photoSampleSets.map((set) => (
          <button
            key={set.id}
            type="button"
            onClick={() => handleSetChange(set.id)}
            disabled={isProcessing}
            className={`
              px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
              ${
                selectedSet.id === set.id
                  ? 'bg-brand text-white'
                  : 'bg-white border border-[#D9DDE3] text-gray-600 hover:border-brand-hover'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {set.name}（{set.industry}）
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div>
          <UploadArea photos={selectedSet.photos} selectedSetName={selectedSet.name} />
        </div>
        <div>
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
        </div>
        <div>
          <FolderTree
            folders={selectedSet.folders}
            results={selectedSet.results}
            isComplete={isComplete}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          variant="primary"
          size="md"
          onClick={handleProcess}
          disabled={isProcessing}
          className="!bg-brand hover:!bg-brand-deep"
        >
          {isProcessing ? '整理中…' : '整理する'}
        </Button>
        <Button
          variant="outline"
          size="md"
          onClick={handleReset}
          disabled={isProcessing}
          className="!border-gray-400 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900"
        >
          リセット
        </Button>
      </div>

      <p className="mt-3 text-[11px] text-gray-500">
        ※ デモ用サンプルデータを使用しています。実運用では要件に合わせて設計可能です。
      </p>
    </DemoFrame>
  )
}
