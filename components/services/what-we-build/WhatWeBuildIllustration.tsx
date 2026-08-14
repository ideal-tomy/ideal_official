import type { ReactElement } from 'react'
import { AiEmbedMock } from './AiEmbedMock'
import { AiProductMock } from './AiProductMock'
import { AiWorkflowMock } from './AiWorkflowMock'
import { AppAdminMock } from './AppAdminMock'
import { AppFieldLineMock } from './AppFieldLineMock'
import { AppMemberMock } from './AppMemberMock'
import { WebBusinessMock } from './WebBusinessMock'
import { WebCorporateMock } from './WebCorporateMock'
import { WebLpMock } from './WebLpMock'

export const WHAT_WE_BUILD_IDS = [
  'web-corporate',
  'web-lp',
  'web-business',
  'app-admin',
  'app-member',
  'app-field-line',
  'ai-embed',
  'ai-workflow',
  'ai-product',
] as const

export type WhatWeBuildIllustrationId = (typeof WHAT_WE_BUILD_IDS)[number]

const ILLUSTRATIONS: Record<WhatWeBuildIllustrationId, () => ReactElement> = {
  'web-corporate': WebCorporateMock,
  'web-lp': WebLpMock,
  'web-business': WebBusinessMock,
  'app-admin': AppAdminMock,
  'app-member': AppMemberMock,
  'app-field-line': AppFieldLineMock,
  'ai-embed': AiEmbedMock,
  'ai-workflow': AiWorkflowMock,
  'ai-product': AiProductMock,
}

export function WhatWeBuildIllustration({
  id,
}: {
  id: WhatWeBuildIllustrationId
}) {
  const Illustration = ILLUSTRATIONS[id]
  return <Illustration />
}
