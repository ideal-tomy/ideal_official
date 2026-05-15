/**
 * サーバー境界をまたぐ openConciergeChat 用の薄いブリッジ
 * Provider マウント時にハンドラを登録する。
 */

export type OpenConciergeBridgeOpts = {
  serviceHint?: string
}

export type OpenConciergeBridgeHandler = (
  opts?: OpenConciergeBridgeOpts,
) => void

let handler: OpenConciergeBridgeHandler | null = null

export function registerOpenConciergeHandler(fn: OpenConciergeBridgeHandler | null) {
  handler = fn
}

export function requestOpenConcierge(opts?: OpenConciergeBridgeOpts): boolean {
  if (handler) {
    handler(opts)
    return true
  }
  return false
}
