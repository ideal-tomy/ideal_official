interface ProcessingLogProps {
  logs: string[]
  isProcessing: boolean
}

export function ProcessingLog({ logs, isProcessing }: ProcessingLogProps) {
  return (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 h-full min-h-[200px]">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
        AI処理ログ
      </p>
      <ul className="space-y-2 font-mono text-xs" aria-live="polite" aria-busy={isProcessing}>
        {logs.length === 0 && (
          <li className="text-gray-400">「整理する」を押すと処理が始まります</li>
        )}
        {logs.map((log, index) => (
          <li
            key={`${log}-${index}`}
            className={
              index === logs.length - 1 && isProcessing
                ? 'text-blue-600'
                : index === logs.length - 1 && !isProcessing && logs.length > 0
                  ? 'text-green-600'
                  : 'text-gray-600'
            }
          >
            <span className="text-gray-400 mr-2">›</span>
            {log}
          </li>
        ))}
        {isProcessing && (
          <li className="text-blue-600 animate-pulse">
            <span className="text-gray-400 mr-2">›</span>
            処理中…
          </li>
        )}
      </ul>
    </div>
  )
}
