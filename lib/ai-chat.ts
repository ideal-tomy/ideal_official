/**
 * AIコンシェルジュ導線
 * — クライアントではコンシェルジュパネル（FAB）を開く
 * — ハンドラ未登録時は /contact へのフォールバック
 */

import { requestOpenConcierge } from '@/lib/concierge/open-bridge'

export function getAiChatContactUrl(serviceId?: string): string {
  const params = new URLSearchParams({ intent: 'ai-chat' })
  if (serviceId) {
    params.set('service', serviceId)
  }
  return `/contact?${params.toString()}`
}

/** コンシェルジュ完了想定の contact URL（ストレージは別途セット） */
export function getConciergeContactFallbackUrl(serviceId?: string): string {
  const params = new URLSearchParams({ intent: 'concierge' })
  if (serviceId) params.set('service', serviceId)
  return `/contact?${params.toString()}`
}

export function openConciergeChat(serviceId?: string): void {
  if (typeof window === 'undefined') return
  const opened = requestOpenConcierge(
    serviceId ? { serviceHint: serviceId } : undefined,
  )
  if (!opened) {
    window.location.href = getConciergeContactFallbackUrl(serviceId)
  }
}
