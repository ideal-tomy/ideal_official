/**
 * roi-simulator への導線。
 * ORIGIN は NEXT_PUBLIC_ROI_SIMULATOR_URL（末尾スラッシュなし）。
 * CTA は別タブ想定。returnPath で SiteContextBar の戻り先を指定（パス推奨）。
 */

export function getRoiSimulatorOrigin(): string | null {
  const raw = process.env.NEXT_PUBLIC_ROI_SIMULATOR_URL?.trim()
  if (!raw) return null
  return raw.replace(/\/$/, '')
}

/** SiteContextBar が homeUrl と結合できるよう、パス形式に正規化する */
function normalizeReturnPath(returnPath: string): string | null {
  const trimmed = returnPath.trim()
  if (!trimmed) return null

  if (trimmed.startsWith('/')) {
    return trimmed.split('?')[0] || trimmed
  }

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const u = new URL(trimmed)
      return `${u.pathname}${u.search}` || '/'
    } catch {
      return null
    }
  }

  return `/${trimmed}`
}

export type RoiSimulatorLinkOpts = {
  kit?: string
  industry?: string
  cat?: 'field' | 'internal' | 'dashboard'
  returnPath?: string
  from?: string
}

/** 簡易デモ slug → 見積入場パラメータ（kit 付きで見積モード直行） */
export const GALLERY_DEMO_ROI: Record<
  string,
  Pick<RoiSimulatorLinkOpts, 'kit' | 'industry' | 'cat'>
> = {
  'voice-to-structured': {
    kit: 'report-auto',
    industry: 'nursing',
    cat: 'field',
  },
  'photo-to-classification': {
    kit: 'report-auto',
    industry: 'construction',
    cat: 'field',
  },
  'document-to-extraction': {
    kit: 'report-auto',
    industry: 'professional',
    cat: 'internal',
  },
  'data-to-prediction': {
    kit: 'webapp',
    industry: 'manufacturing',
    cat: 'dashboard',
  },
  'workflow-to-automation': {
    kit: 'webapp',
    industry: 'other',
    cat: 'internal',
  },
  'knowledge-to-search': {
    kit: 'chatbot',
    industry: 'other',
    cat: 'internal',
  },
  'multi-input-to-report': {
    kit: 'report-auto',
    industry: 'other',
    cat: 'field',
  },
}

export function buildRoiSimulatorHref(
  opts?: RoiSimulatorLinkOpts,
): string | null {
  const origin = getRoiSimulatorOrigin()
  if (!origin) return null
  const q = new URLSearchParams()
  q.set('brand', 'ideal')
  q.set('from', opts?.from?.trim() || 'ideal-site')
  if (opts?.kit) q.set('kit', opts.kit)
  if (opts?.industry) q.set('industry', opts.industry)
  if (opts?.cat) q.set('cat', opts.cat)
  if (opts?.returnPath) {
    const ret = normalizeReturnPath(opts.returnPath)
    if (ret) q.set('return', ret)
  }
  return `${origin}/?${q.toString()}`
}

/** ギャラリー簡易デモから、対応キット付きで見積モードへ直行する URL */
export function buildRoiSimulatorHrefForGalleryDemo(
  demoSlug: string,
  opts?: { returnPath?: string; from?: string },
): string | null {
  const mapped = GALLERY_DEMO_ROI[demoSlug]
  return buildRoiSimulatorHref({
    ...mapped,
    // マッピングが無くても brand/from 付きで開く（閲覧モード寄り）
    returnPath: opts?.returnPath,
    // SiteContextBar 表示のため from は ideal-site 固定
    from: opts?.from ?? 'ideal-site',
  })
}
