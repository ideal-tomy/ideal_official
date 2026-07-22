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

export function buildRoiSimulatorHref(opts?: {
  kit?: string
  returnPath?: string
  from?: string
}): string | null {
  const origin = getRoiSimulatorOrigin()
  if (!origin) return null
  const q = new URLSearchParams()
  q.set('brand', 'ideal')
  q.set('from', opts?.from?.trim() || 'ideal-site')
  if (opts?.kit) q.set('kit', opts.kit)
  if (opts?.returnPath) {
    const ret = normalizeReturnPath(opts.returnPath)
    if (ret) q.set('return', ret)
  }
  return `${origin}/?${q.toString()}`
}
