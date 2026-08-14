/** yen（円）→ "8,000万円" 形式（assertLpConfig と表示で共有） */
export function formatManYen(yen: number): string {
  const man = Math.round(yen / 10_000)
  return `${man.toLocaleString('ja-JP')}万円`
}

export function formatYen(yen: number): string {
  return `¥${Math.round(yen).toLocaleString('ja-JP')}`
}

/** 時間（時間）→ "146時間" 形式 */
export function formatHours(hours: number): string {
  return `${Math.round(hours).toLocaleString('ja-JP')}時間`
}
