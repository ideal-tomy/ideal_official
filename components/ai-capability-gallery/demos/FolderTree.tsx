import type { ClassifiedPhoto } from '@/data/ai-capability-gallery/photo-to-classification'

interface FolderTreeProps {
  folders: string[]
  results: ClassifiedPhoto[]
  isComplete: boolean
}

export function FolderTree({ folders, results, isComplete }: FolderTreeProps) {
  if (!isComplete) {
    return (
      <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 h-full min-h-[200px]">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
          整理結果
        </p>
        <p className="text-sm text-gray-400">処理完了後に表示されます</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 space-y-4">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        整理結果
      </p>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">📁 整理済みフォルダ</p>
        <ul className="pl-4 space-y-1">
          {folders.map((folder) => {
            const count = results.filter((r) => r.folder === folder).length
            return (
              <li key={folder} className="text-sm text-gray-600">
                <span className="text-gray-400">├─</span> {folder}/
                <span className="text-xs text-gray-400 ml-1">({count})</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="border-t border-[#D9DDE3] pt-3">
        <p className="text-xs font-medium text-gray-500 mb-2">リネーム一覧</p>
        <ul className="space-y-2">
          {results.map((result) => (
            <li key={result.id} className="text-xs">
              <p className="font-mono text-gray-400 line-through truncate">
                {result.originalName}
              </p>
              <p className="font-mono text-green-700 truncate">→ {result.newName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
