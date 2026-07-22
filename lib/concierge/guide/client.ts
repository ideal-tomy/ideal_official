import type { GuideReply, GuideRequest } from '@/lib/concierge/guide/types'
import { buildAmbiguousReply } from '@/lib/concierge/guide/resolve'

export async function postGuideChat(body: GuideRequest): Promise<GuideReply> {
  const res = await fetch('/api/concierge/guide', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  try {
    const data = (await res.json()) as GuideReply
    if (data && typeof data.answer === 'string' && data.intent && data.links) {
      return data
    }
  } catch {
    /* fall through */
  }

  return buildAmbiguousReply()
}
