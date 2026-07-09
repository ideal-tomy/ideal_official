import type {
  ConciergeChatRequest,
  ConciergeChatResponse,
} from './types'

export async function postConciergeChat(
  body: ConciergeChatRequest,
): Promise<ConciergeChatResponse> {
  const res = await fetch('/api/concierge/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  let data: ConciergeChatResponse
  try {
    data = (await res.json()) as ConciergeChatResponse
  } catch {
    return {
      action: 'unavailable',
      reason: 'error',
      message: '応答の解析に失敗しました。選択内容のみで結果へ進めます。',
    }
  }

  if (
    data &&
    (data.action === 'ask' ||
      data.action === 'draft' ||
      data.action === 'unavailable')
  ) {
    return data
  }

  return {
    action: 'unavailable',
    reason: 'error',
    message: '予期しない応答です。選択内容のみで結果へ進めます。',
  }
}
