/**
 * サイト案内 API — バリデーション
 */

import { z } from 'zod'
import { GUIDE_MAX_MESSAGE } from './types'

const pageContextSchema = z
  .object({
    pathname: z.string(),
    pageType: z.string(),
    demoId: z.string().optional(),
    caseSlug: z.string().optional(),
    serviceId: z.string().optional(),
    insightSlug: z.string().optional(),
    industry: z.string().optional(),
    label: z.string().optional(),
  })
  .optional()

export const guideRequestSchema = z
  .object({
    message: z.string().max(GUIDE_MAX_MESSAGE).optional(),
    intentId: z
      .enum([
        'pricing',
        'demos',
        'cases',
        'contact',
        'how_we_work',
        'difference',
        'off_topic',
      ])
      .optional(),
    pageContext: pageContextSchema,
  })
  .refine(
    (v) => Boolean(v.intentId) || Boolean(v.message?.trim()),
    { message: 'message or intentId required' },
  )
