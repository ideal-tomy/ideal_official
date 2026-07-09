import { z } from 'zod'
import type { IdealTrack } from '../ideal-flow'
import {
  CONCIERGE_AI_MAX_ANSWER,
  CONCIERGE_AI_MAX_FREE_TEXT,
  CONCIERGE_AI_MAX_QUESTIONS,
} from './types'

const idealTrackSchema = z.enum(['web', 'app', 'ai', 'bc', 'unsure'])

const flowAnswerSchema = z.object({
  stepId: z.string().max(64),
  choiceId: z.string().max(64),
  label: z.string().max(200),
})

const pageContextSchema = z
  .object({
    pathname: z.string().max(300),
    pageType: z.string().max(32),
    demoId: z.string().max(80).optional(),
    caseSlug: z.string().max(80).optional(),
    serviceId: z.string().max(80).optional(),
    insightSlug: z.string().max(80).optional(),
    industry: z.string().max(80).optional(),
    label: z.string().max(200).optional(),
  })
  .optional()

const qaSchema = z.object({
  question: z.string().max(300),
  answer: z.string().max(CONCIERGE_AI_MAX_ANSWER),
})

export const conciergeChatRequestSchema = z.object({
  track: idealTrackSchema,
  answers: z.array(flowAnswerSchema).max(12),
  pageContext: pageContextSchema,
  freeText: z.string().max(CONCIERGE_AI_MAX_FREE_TEXT),
  qa: z.array(qaSchema).max(CONCIERGE_AI_MAX_QUESTIONS),
  userMessage: z.string().min(1).max(CONCIERGE_AI_MAX_FREE_TEXT),
})

export type ParsedConciergeChatRequest = z.infer<
  typeof conciergeChatRequestSchema
> & { track: IdealTrack }
