import { NextResponse } from 'next/server'
import { handleContactRequest } from '@/lib/contact/handle-contact'
import type { ContactWebhookPayload } from '@/lib/contact/handle-contact'
import { limitContactRequest } from '@/lib/contact/rate-limit'
import { verifyTurnstileToken } from '@/lib/contact/turnstile'

export const runtime = 'nodejs'

function isContactDeliveryConfigured(): boolean {
  return Boolean(process.env.CONTACT_WEBHOOK_URL?.trim())
}

async function deliverContact(payload: ContactWebhookPayload): Promise<boolean> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim()
  if (!webhookUrl) return false

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.CONTACT_WEBHOOK_SECRET
        ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` }
        : {}),
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    console.error('[contact] webhook status', res.status)
    return false
  }

  return true
}

export async function POST(req: Request) {
  const result = await handleContactRequest(req, {
    limit: limitContactRequest,
    deliveryConfigured: isContactDeliveryConfigured,
    verify: (token) => verifyTurnstileToken(token),
    deliver: deliverContact,
  })

  return NextResponse.json(result.body, {
    status: result.status,
    headers: result.headers,
  })
}
