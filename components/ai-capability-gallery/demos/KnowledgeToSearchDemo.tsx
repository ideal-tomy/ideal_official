'use client'

import { useEffect, useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import { useStagedDemoScroll } from '@/components/ai-capability-gallery/hooks/useStagedDemoScroll'
import {
  knowledgeSampleSets,
  knowledgeProcessingSteps,
  type KnowledgeSampleSet,
  type KnowledgeQuestion,
} from '@/data/ai-capability-gallery/knowledge-to-search'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { EvidencePanel } from './EvidencePanel'
import { DemoActions } from './DemoActions'
import { DemoBeforeAfterRail } from './DemoBeforeAfterRail'

export function KnowledgeToSearchDemo() {
  const [selectedSet, setSelectedSet] = useState<KnowledgeSampleSet>(knowledgeSampleSets[0])
  const [selectedQuestion, setSelectedQuestion] = useState<KnowledgeQuestion | null>(null)
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null)
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()
  const { beforeRef, afterRef, railRef } = useStagedDemoScroll(
    isProcessing,
    isComplete,
    { fallbackDelayMs: knowledgeProcessingSteps.length * 500 * 0.55 },
  )

  useEffect(() => {
    if (isComplete && selectedQuestion) {
      setActiveSourceId(selectedQuestion.sourceId)
    }
  }, [isComplete, selectedQuestion])

  const handleSetChange = (setId: string) => {
    const next = knowledgeSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      setSelectedQuestion(null)
      setActiveSourceId(null)
      reset()
    }
  }

  const handleQuestionSelect = (question: KnowledgeQuestion) => {
    if (isProcessing) return
    setSelectedQuestion(question)
    setActiveSourceId(null)
    reset()
  }

  const runSearch = (question: KnowledgeQuestion) => {
    if (isProcessing) return
    setSelectedQuestion(question)
    setActiveSourceId(null)
    reset()
    start(knowledgeProcessingSteps)
  }

  const currentAnswer = isComplete && selectedQuestion ? selectedQuestion : null
  const sources =
    isComplete && selectedQuestion
      ? selectedSet.sources.filter((s) => s.id === selectedQuestion.sourceId)
      : []

  const questionsPanel = (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        質問一覧
      </p>
      <ul className="space-y-2">
        {selectedSet.questions.map((q) => (
          <li key={q.id}>
            <button
              type="button"
              onClick={() => handleQuestionSelect(q)}
              disabled={isProcessing}
              className={`
                w-full rounded border p-2 text-left text-xs transition-colors
                ${
                  selectedQuestion?.id === q.id
                    ? 'border-brand-hover bg-brand/10 text-brand-deep'
                    : 'border-[#D9DDE3] text-gray-700 hover:border-brand/30'
                }
                disabled:opacity-50
              `}
            >
              {q.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  const answerPanel = (
    <div className="min-h-[120px] rounded-lg border border-[#D9DDE3] bg-white p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
        回答
      </p>
      {!currentAnswer ? (
        <p className="text-sm text-gray-400">
          {selectedQuestion
            ? '「検索する」を押すと回答が表示されます'
            : '質問を選んでから「検索する」を押してください'}
        </p>
      ) : (
        <div>
          <p className="mb-2 text-sm leading-relaxed text-gray-800">
            {currentAnswer.answer}
          </p>
          <span className="rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
            出典: {selectedSet.sources.find((s) => s.id === currentAnswer.sourceId)?.title}
          </span>
        </div>
      )}
    </div>
  )

  return (
    <DemoFrame title="ナレッジ → 検索デモ">
      <SampleSetTabs
        sets={knowledgeSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <DemoBeforeAfterRail
        railRef={railRef}
        beforeRef={beforeRef}
        afterRef={afterRef}
        before={questionsPanel}
        after={
          <div className="space-y-4">
            {answerPanel}
            <EvidencePanel
              sources={sources}
              activeSourceId={activeSourceId}
              onSelectSource={setActiveSourceId}
            />
          </div>
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
        {questionsPanel}
        <div className="space-y-4">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />
          {answerPanel}
        </div>
        <EvidencePanel
          sources={sources}
          activeSourceId={activeSourceId}
          onSelectSource={setActiveSourceId}
        />
      </div>

      <DemoActions
        onProcess={() => {
          if (selectedQuestion) runSearch(selectedQuestion)
          else if (selectedSet.questions[0]) runSearch(selectedSet.questions[0])
        }}
        onReset={() => {
          reset()
          setSelectedQuestion(null)
          setActiveSourceId(null)
        }}
        isProcessing={isProcessing}
        processLabel={selectedQuestion ? '検索する' : '質問を選んで検索'}
        processingLabel="検索中…"
      />
    </DemoFrame>
  )
}
