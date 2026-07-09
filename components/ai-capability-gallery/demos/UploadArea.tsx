import type { SamplePhoto } from '@/data/ai-capability-gallery/photo-to-classification'

interface UploadAreaProps {
  photos: SamplePhoto[]
  selectedSetName: string
}

export function UploadArea({ photos, selectedSetName }: UploadAreaProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border-2 border-dashed border-[#D9DDE3] bg-white p-4 text-center">
        <p className="text-sm font-medium text-gray-700 mb-1">入力エリア</p>
        <p className="text-xs text-gray-500">
          サンプルセット: <span className="font-medium text-gray-700">{selectedSetName}</span>
        </p>
      </div>

      <ul className="space-y-2" aria-label="アップロード済み写真一覧">
        {photos.map((photo) => (
          <li
            key={photo.id}
            className="flex items-center gap-3 rounded-lg border border-[#D9DDE3] bg-white p-2"
          >
            <div
              className="h-10 w-10 rounded shrink-0 flex items-center justify-center text-[10px] text-white font-medium"
              style={{ backgroundColor: photo.color }}
              aria-hidden="true"
            >
              IMG
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-mono text-gray-600 truncate">{photo.originalName}</p>
              <p className="text-[11px] text-gray-400">{photo.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
