/**
 * AIコンシェルジュ導線（将来 rinopro-site 移植用スタブ）
 *
 * 本格移植時は FAB 起動に差し替える。
 */

export function getAiChatContactUrl(serviceId?: string): string {
  const params = new URLSearchParams({ intent: 'ai-chat' })
  if (serviceId) {
    params.set('service', serviceId)
  }
  return `/contact?${params.toString()}`
}

/** @deprecated rinopro 移植後にチャット UI を直接開く */
export function openConciergeChat(serviceId?: string): void {
  if (typeof window !== 'undefined') {
    window.location.href = getAiChatContactUrl(serviceId)
  }
}
