import type { FaqCategory, LpConfig } from './types'
import { formatHours, formatManYen } from './format'

/**
 * ビルド前チェック。品質ゲートのうち機械的に検証できるもの。
 */
export function assertLpConfig(cfg: LpConfig): string[] {
  const errors: string[] = []

  const defaults = Object.fromEntries(
    cfg.roi.config.sliders.map((s) => [s.key, s.defaultValue]),
  )
  if (cfg.impact.primaryMetric === 'hours') {
    const minutes = defaults.minutesPerDay ?? 0
    const days = defaults.workDays ?? 0
    const hoursLabel = formatHours((minutes / 60) * days)
    if (!cfg.impact.mainFigure.value.includes(hoursLabel)) {
      errors.push(
        'B02の主要数字（時間）がROI初期値と一致していません（設計原則P1: 単一ソース）',
      )
    }
  } else {
    const derived = cfg.roi.config.computeAnnualLoss(defaults)
    if (!cfg.impact.mainFigure.value.includes(formatManYen(derived))) {
      errors.push(
        'B02の主要数字がROI初期値と一致していません（設計原則P1: 単一ソース）',
      )
    }
  }

  if (cfg.roleImpact && cfg.roleImpact.rows.length !== 3) {
    errors.push('roleImpact の行は3つである必要があります')
  }

  if (!cfg.fit.exclude?.trim()) {
    errors.push('B05の除外文が空です（設計原則P2: 除外の明示）')
  }
  if (cfg.comparison && !cfg.comparison.fairnessNote?.trim()) {
    errors.push('B09のフェアネス注記が空です（設計原則P2）')
  }

  if (!cfg.roi.config.disclaimer?.trim()) {
    errors.push('B11の試算注記が空です（設計原則P4）')
  }

  const cats = new Set(cfg.faq.map((f) => f.category))
  for (const required of ['price', 'security'] as FaqCategory[]) {
    if (!cats.has(required)) {
      errors.push(`B13に必須カテゴリ「${required}」の質問がありません`)
    }
  }
  if (cfg.faq.length < 8) {
    errors.push('B13のFAQが8問未満です')
  }

  if (cfg.finalCta.fields.length > 5) {
    errors.push('B14のフォーム項目が5つを超えています（離脱要因）')
  }

  if (cfg.partsCatalog) {
    if (cfg.partsCatalog.items.length < 3) {
      errors.push('W-B07aの部品カタログは3枚以上必要です')
    }
    for (const part of cfg.partsCatalog.items) {
      if (!part.demoUrl?.trim()) {
        errors.push(`W-B07a「${part.name}」に demoUrl がありません`)
      }
      if (!part.standalone && (!part.dependsOn || part.dependsOn.length === 0)) {
        errors.push(
          `W-B07a「${part.name}」は standalone:false のため dependsOn が必要です`,
        )
      }
    }
  }

  // prose フィットは1行表示のみ。scopeNote は cards レイアウト向け
  if (
    cfg.delivery.kind === 'workflow' &&
    cfg.fit.layout !== 'prose' &&
    !cfg.fit.scopeNote?.trim()
  ) {
    errors.push('W型の B05 に scopeNote がありません')
  }

  if (cfg.resultTabs && cfg.resultTabs.tabs.length !== 3) {
    errors.push('W-B08 の resultTabs は3枚である必要があります')
  }

  const brandWords = ['AXEON', 'ideal合同会社']
  const scan = JSON.stringify({ ...cfg, brand: undefined })
  for (const w of brandWords) {
    if (scan.includes(w)) {
      errors.push(
        `ブランド名「${w}」がBrandConfig外に直書きされています（設計原則P6）`,
      )
    }
  }

  return errors
}
