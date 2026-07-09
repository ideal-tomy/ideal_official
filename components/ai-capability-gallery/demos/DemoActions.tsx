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
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          variant="primary"
          size="md"
          onClick={onProcess}
          disabled={isProcessing}
          className="!bg-brand hover:!bg-brand-deep"
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
      <p className="mt-3 text-[11px] text-gray-500">
        ※ デモ用サンプルデータを使用しています。実運用では要件に合わせて設計可能です。
      </p>
    </>
  )
}
