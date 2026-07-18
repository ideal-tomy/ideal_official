export type NewsItem = {
  id: string
  date: string
  title: string
  href: string
  isNew?: boolean
}

/** お知らせ（静的。将来 CMS 接続時はこの配列を差し替え） */
export const newsItems: NewsItem[] = [
  {
    id: 'kb-demo',
    date: '2026.07.10',
    title: 'ナレッジ検索デモを公開 — 回答と根拠文書を同時に返す',
    href: '/ai-capability-gallery/knowledge-to-search',
    isNew: true,
  },
  {
    id: 'photo-demo',
    date: '2026.06.24',
    title: '現場写真の分類デモを更新 — 命名・フォルダ整理まで体験可能',
    href: '/ai-capability-gallery/photo-to-classification',
  },
  {
    id: 'voice-demo',
    date: '2026.05.18',
    title: '音声→構造化デモを公開 — 話すだけで記録が完成する流れ',
    href: '/ai-capability-gallery/voice-to-structured',
  },
]

export function getNewsItems(): NewsItem[] {
  return newsItems
}
