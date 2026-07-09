/**
 * コンシェルジュ概算用の価格ルール（万円単位）
 * 金額はここだけが正。AI に金額を生成させない。
 */

export type PricingLineKind = 'base' | 'addon'

export type PricingLineId =
  | 'lp'
  | 'corporate'
  | 'small_web_app'
  | 'ai_prototype'
  | 'bc_consult'
  | 'discovery'
  | 'ocr'
  | 'external_api'
  | 'admin'
  | 'db_integration'

export type PricingLine = {
  id: PricingLineId
  kind: PricingLineKind
  label: string
  /** 万円 */
  minMan: number
  /** 万円 */
  maxMan: number
  note?: string
}

/** カタログ（表示・合算の単一ソース） */
export const PRICING_LINES: Record<PricingLineId, PricingLine> = {
  lp: {
    id: 'lp',
    kind: 'base',
    label: 'LP制作',
    minMan: 15,
    maxMan: 30,
  },
  corporate: {
    id: 'corporate',
    kind: 'base',
    label: 'コーポレートサイト',
    minMan: 30,
    maxMan: 80,
  },
  small_web_app: {
    id: 'small_web_app',
    kind: 'base',
    label: '小規模Webアプリ・業務ツール',
    minMan: 50,
    maxMan: 150,
  },
  ai_prototype: {
    id: 'ai_prototype',
    kind: 'base',
    label: 'AIプロトタイプ',
    minMan: 30,
    maxMan: 100,
  },
  bc_consult: {
    id: 'bc_consult',
    kind: 'base',
    label: 'ブロックチェーン・DAO 設計整理',
    minMan: 40,
    maxMan: 120,
  },
  discovery: {
    id: 'discovery',
    kind: 'base',
    label: '課題整理・要件ヒアリング（初期）',
    minMan: 10,
    maxMan: 40,
  },
  ocr: {
    id: 'ocr',
    kind: 'addon',
    label: 'OCR / 文書・画像認識追加',
    minMan: 10,
    maxMan: 30,
  },
  external_api: {
    id: 'external_api',
    kind: 'addon',
    label: '外部API連携',
    minMan: 10,
    maxMan: 50,
  },
  admin: {
    id: 'admin',
    kind: 'addon',
    label: '管理画面',
    minMan: 20,
    maxMan: 60,
  },
  db_integration: {
    id: 'db_integration',
    kind: 'addon',
    label: 'データベース・保存基盤',
    minMan: 15,
    maxMan: 40,
  },
}

export const ESTIMATE_DISCLAIMER =
  '現時点の情報から算出した参考価格です。データ量、AI精度、外部サービス連携、管理機能の範囲によって変動します。正式見積ではありません。'
