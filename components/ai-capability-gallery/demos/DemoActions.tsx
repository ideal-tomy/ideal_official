'use client'

import { Button } from '@/components/ui/Button'

interface DemoActionsProps {
  onProcess: () => void
  onReset: () => void
  isProcessing: boolean
  processLabel?: string
  processingLabel?: string
}

export function DemoActions({
  onProcess,
  onReset,
  isProcessing,
  processLabel = '実行する',
  processingLabel = '処理中…',
}: DemoActionsProps) {
  return (
    <>
      {/* PC: インライン */}
      <div className="mt-4 hidden flex-wrap gap-3 md:flex">
        <Button
          variant="primary"
          size="md"
          onClick={onProcess}
          disabled={isProcessing}
          className="!bg-brand hover:!bg-brand-hover"
        >
          {isProcessing ? processingLabel : processLabel}
        </Button>
        <Button
          variant="outline"
          size="md"
          onClick={onReset}
          disabled={isProcessing}
          className="!border-gray-400 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900"
        >
          リセット
        </Button>
      </div>
      <p className="mt-3 hidden text-[11px] text-[var(--site-fg-muted)] md:block">
        ※ デモ用サンプルデータを使用しています。実運用では要件に合わせて設計可能です。
      </p>

      {/* スマホ: sticky（相談 FAB と重ならないよう bottom 余白） */}
      <div className="pointer-events-none h-24 md:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D9DDE3] bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-lg gap-2 pr-20">
          <Button
            variant="primary"
            size="md"
            onClick={onProcess}
            disabled={isProcessing}
            className="!bg-brand hover:!bg-brand-hover flex-1"
          >
            {isProcessing ? processingLabel : processLabel}
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={onReset}
            disabled={isProcessing}
            className="!border-gray-400 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900 shrink-0"
          >
            リセット
          </Button>
        </div>
        <p className="mx-auto mt-1.5 max-w-lg text-[10px] text-[var(--site-fg-muted)]">
          ※ デモ用サンプルデータです
        </p>
      </div>
    </>
  )
}
