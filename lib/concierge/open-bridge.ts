/**
 * サーバー境界をまたぐ openConciergeChat 用の薄いブリッジ
 * Provider マウント時にハンドラを登録する。
 */

import type { ConciergePageContext } from './page-context'

export type OpenConciergeBridgeOpts = {
  serviceHint?: string
  /** 明示指定。省略時は Provider 側で pathname から解決 */
  pageContext?: ConciergePageContext
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
