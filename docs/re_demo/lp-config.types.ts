/**
 * デモ紹介LP 共通CONFIG型定義 v1.0
 *
 * 対応: lp-block-definition-v1.md
 * 階層: BrandConfig ─┬─ DemoConfig  (既存)
 *                    ├─ RoiConfig   (既存: 投資回収シミュレーター)
 *                    └─ LpConfig    (本ファイル)
 *
 * 原則:
 *  - LpConfig に金額の直値を書かない。数字は RoiConfig から導出する
 *  - Core にブランド名を直書きしない。ブランド差分は BrandConfig にのみ置く
 */

// ============================================================
// 共通プリミティブ
// ============================================================

/** 画像アセット。alt は必須（アクセシビリティ・SEO） */
export interface Asset {
  src: string;
  alt: string;
  /** 「※画像はイメージです」等の注記 */
  note?: string;
}

export interface Cta {
  label: string;
  /** '#roi' 等のアンカー、または外部URL */
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

/** 本文中でハイライト表示する語句 */
export type Highlight = string[];

// ============================================================
// Brand 層（AXEON / ideal で切り替わる部分のみ）
// ============================================================

export interface BrandConfig {
  id: 'axeon' | 'ideal';
  companyName: string;
  logo: Asset;
  /** 一人称表現（例: 「私たち」「AXEON」） */
  firstPerson: string;
  colors: {
    primary: string;
    accent: string;
    ink: string;
    surface: string;
  };
  form: {
    endpoint: string;
    privacyUrl: string;
  };
  footer: {
    address?: string;
    contactUrl: string;
  };
}

// ============================================================
// B01 ヒーロー
// ============================================================

export interface HeroBlock {
  /** 常時表示の小見出し（例: 仕様書・規程・図面──…を扱う企業のためのAI） */
  eyebrow?: string;
  /** 断定コピー1行 */
  headline: string;
  /** 損失を示すサブコピー2行 */
  subline: string;
  /** 状況説明3〜4行 */
  body: string;
  highlight?: Highlight;
  ctas: [Cta, Cta];
  /** 安心バッジ3つ（無償・NDA・準備不要 等） */
  badges?: [string, string, string];
  visual: Asset & { fit?: 'cover' | 'contain'; videoSrc?: string };
}

// ============================================================
// B02 数字インパクトバー
// ============================================================

export interface ImpactBlock {
  /** 主要損失額。RoiConfig の初期値から算出すること（直値禁止） */
  mainFigure: {
    /** 前置き（例: 文書と向き合う100人の部門では） */
    lead: string;
    /** 表示値。roi.computeAnnualLoss(roi.defaults) の結果を渡す */
    value: string;
    /** 後置き（例: が消えている計算に） */
    trail: string;
  };
  /** 計算根拠の注記 */
  basis: string;
  metrics: [MetricCard, MetricCard, MetricCard, MetricCard];
}

export interface MetricCard {
  value: string;
  label: string;
}

// ============================================================
// B03 価値の3本柱
// ============================================================

export interface Pillar {
  icon: string;
  title: string;
  body: string;
  highlight?: Highlight;
}

// ============================================================
// B04 コストの正体
// ============================================================

export interface ProblemBlock {
  label: string;
  headline: string;
  lead: string;
  items: [ProblemItem, ProblemItem, ProblemItem, ProblemItem];
  illustration?: Asset;
  /** 4つを1文に束ねる帯。論点を「知識」から「手段」へ移す */
  summary: {
    headline: string;
    body: string;
  };
}

export interface ProblemItem {
  no: string;
  /** 動詞で（探す / 聞く・教える / 間違える / 二度解く） */
  title: string;
  body: string;
}

// ============================================================
// B05 効く条件 / 効かない条件
// ============================================================

export interface FitBlock {
  label: string;
  headline: string;
  lead: string;
  /** 業種ではなく「状態」で切る */
  conditions: [FitCondition, FitCondition, FitCondition];
  affirm: string;
  /**
   * 除外文。設計原則 P2。
   * このフィールドは省略不可 —— 適合しない見込み客を正直に外すことが信頼の源泉。
   */
  exclude: string;
}

export interface FitCondition {
  no: string;
  title: string;
  body: string;
}

// ============================================================
// B06 業界別ユースケース
// ============================================================

export interface UseCase {
  industry: string;
  icon: string;
  /** 対象文書・対象業務 */
  scope: string;
  /** 現場の人が実際に言いそうな一言（吹き出し表示） */
  quote: string;
  body: string;
}

export interface UseCasesBlock {
  label: string;
  headline: string;
  lead: string;
  items: UseCase[];
  /** その他業界の列挙1〜2行 */
  more: string;
}

// ============================================================
// B07 壁 × 技術
// ============================================================

export interface MechanismBlock {
  label: string;
  headline: string;
  lead: string;
  diagram: Asset;
  /** 壁と技術は1対1で対応させる */
  items: MechanismItem[];
}

export interface MechanismItem {
  /** 壁のラベル（例: 量: 多すぎて、読みきれない） */
  wall: string;
  techNo: string;
  techName: string;
  body: string;
  /** 「→」で始まるベネフィット一行 */
  effect: string;
}

// ============================================================
// B08 結果イメージ
// ============================================================

export interface ResultShotBlock {
  caption: string;
  image: Asset;
  note: string;
}

// ============================================================
// B09 よくある失敗との違い
// ============================================================

export interface ComparisonBlock {
  label: string;
  headline: string;
  lead: string;
  /** 競合製品名ではなく「手法名」で比較する */
  columns: {
    common: string;
    ours: string;
  };
  /** 「運用とコスト」行を必ず含める */
  rows: ComparisonRow[];
  /** フェアネス注記。省略不可（設計原則 P2） */
  fairnessNote: string;
}

export interface ComparisonRow {
  point: string;
  common: string;
  ours: string;
}

// ============================================================
// B10 育つ / 継続価値
// ============================================================

export interface GrowthBlock {
  label: string;
  headline: string;
  lead: string;
  cycles: [GrowthCycle, GrowthCycle, GrowthCycle];
  illustration?: Asset;
  /** 締めの対比2行 */
  closing: string;
}

export interface GrowthCycle {
  no: string;
  title: string;
  body: string;
}

// ============================================================
// B11 ROI 60秒試算（RoiConfig を参照）
// ============================================================

export interface RoiSlider {
  key: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  /** 「控えめに見たい場合は下げてください」等の誘導 */
  note: string;
}

export interface RoiConfig {
  sliders: RoiSlider[];
  /** 年間損失額の計算 */
  computeAnnualLoss: (v: Record<string, number>) => number;
  /** 取り戻せる金額の計算 */
  computeRecoverable: (v: Record<string, number>) => number;
  /** 開発費用の概算レンジ（あれば回収期間まで算出） */
  estimateDevCost?: (v: Record<string, number>) => { low: number; high: number };
  outputs: {
    lossLabel: string;
    recoverableLabel: string;
    paybackLabel?: string;
  };
  cta: Cta;
  /** 「想定モデルによる試算です（効果の保証ではありません）」 */
  disclaimer: string;
}

export interface RoiBlock {
  label: string;
  headline: string;
  lead: string;
  config: RoiConfig;
}

// ============================================================
// B12 進め方
// ============================================================

export interface ProcessBlock {
  label: string;
  headline: string;
  lead: string;
  steps: [ProcessStep, ProcessStep, ProcessStep];
  illustration?: Asset;
  /** 「合わなければ、ここで終えて構いません」 */
  exitNote: string;
}

export interface ProcessStep {
  no: string;
  title: string;
  /** 費用の発生点を明示（無償・数週間 / ここまで費用ゼロ / 本導入・運用） */
  costLabel: string;
  body: string;
}

// ============================================================
// B13 FAQ
// ============================================================

export type FaqCategory =
  | 'fit'
  | 'price'
  | 'running-cost'
  | 'environment'
  | 'accuracy'
  | 'security'
  | 'coexistence'
  | 'preparation'
  | 'small-start'
  | 'other';

export interface FaqItem {
  category: FaqCategory;
  q: string;
  a: string;
  defaultOpen?: boolean;
}

// ============================================================
// B14 最終CTA + フォーム
// ============================================================

export type FormFieldKey = 'company' | 'name' | 'email' | 'message' | 'privacy';

export interface FormField {
  key: FormFieldKey;
  label: string;
  placeholder?: string;
  required: boolean;
  type: 'text' | 'email' | 'textarea' | 'checkbox';
}

export interface FinalCtaBlock {
  headline: string;
  body: string;
  /** 安心3点 */
  assurances: [string, string, string];
  formTitle: string;
  /** 「入力は1分。1営業日以内にご連絡します。」 */
  formNote: string;
  /** 最大5項目（役職・電話番号は取らない） */
  fields: FormField[];
  /** フォームとは別に置く体験導線 */
  tryCta: Cta;
}

// ============================================================
// 配信メタ
// ============================================================

export interface DeliveryConfig {
  /** /demo/{slug} */
  slug: string;
  demoName: string;
  /** デモ本体へのリンク */
  demoUrl: string;
  ogp: {
    title: string;
    description: string;
    image: Asset;
  };
  /** 個別送付版は true */
  noindex: boolean;
  /** ?ref={client-slug} の受け取り */
  trackReferrer: boolean;
}

// ============================================================
// ルート
// ============================================================

export interface LpConfig {
  delivery: DeliveryConfig;
  brand: BrandConfig;

  hero: HeroBlock;              // B01 ◎
  impact: ImpactBlock;          // B02 ◎
  pillars?: [Pillar, Pillar, Pillar]; // B03 ○
  problem: ProblemBlock;        // B04 ◎
  fit: FitBlock;                // B05 ◎
  usecases?: UseCasesBlock;     // B06 ○ 省略可
  mechanism: MechanismBlock;    // B07 ◎
  resultShot?: ResultShotBlock; // B08 ○
  comparison?: ComparisonBlock; // B09 ○ 省略可（理由の記録を要件シートに）
  growth?: GrowthBlock;         // B10 △ 蓄積性がなければ省略可
  roi: RoiBlock;                // B11 ◎
  process: ProcessBlock;        // B12 ◎
  faq: FaqItem[];               // B13 ◎ 8〜10問
  finalCta: FinalCtaBlock;      // B14 ◎
}

// ============================================================
// 実装ガード
// ============================================================

/**
 * ビルド前チェック。品質ゲート（定義書 §5）のうち機械的に検証できるもの。
 * CI で実行し、不合格ならビルドを止める。
 */
export function assertLpConfig(cfg: LpConfig): string[] {
  const errors: string[] = [];

  // P1: B02 の主要数字は RoiConfig の初期値から導出されているか
  const defaults = Object.fromEntries(
    cfg.roi.config.sliders.map((s) => [s.key, s.defaultValue]),
  );
  const derived = cfg.roi.config.computeAnnualLoss(defaults);
  if (!cfg.impact.mainFigure.value.includes(formatOku(derived))) {
    errors.push(
      'B02の主要数字がROI初期値と一致していません（設計原則P1: 単一ソース）',
    );
  }

  // P2: 除外文・フェアネス注記の削除禁止
  if (!cfg.fit.exclude?.trim()) {
    errors.push('B05の除外文が空です（設計原則P2: 除外の明示）');
  }
  if (cfg.comparison && !cfg.comparison.fairnessNote?.trim()) {
    errors.push('B09のフェアネス注記が空です（設計原則P2）');
  }

  // P4: 試算の但し書き
  if (!cfg.roi.config.disclaimer?.trim()) {
    errors.push('B11の試算注記が空です（設計原則P4）');
  }

  // B13: 料金とセキュリティは必須カテゴリ
  const cats = new Set(cfg.faq.map((f) => f.category));
  for (const required of ['price', 'security'] as FaqCategory[]) {
    if (!cats.has(required)) {
      errors.push(`B13に必須カテゴリ「${required}」の質問がありません`);
    }
  }
  if (cfg.faq.length < 8) {
    errors.push('B13のFAQが8問未満です');
  }

  // B14: フォーム項目は5つまで
  if (cfg.finalCta.fields.length > 5) {
    errors.push('B14のフォーム項目が5つを超えています（離脱要因）');
  }

  // P6: Core にブランド名を直書きしていないか（簡易検出）
  const brandWords = ['AXEON', 'ideal合同会社'];
  const scan = JSON.stringify({ ...cfg, brand: undefined });
  for (const w of brandWords) {
    if (scan.includes(w)) {
      errors.push(
        `ブランド名「${w}」がBrandConfig外に直書きされています（設計原則P6）`,
      );
    }
  }

  return errors;
}

/** 8000万円 → "8,000万円" 形式 */
function formatOku(yen: number): string {
  const man = Math.round(yen / 10_000);
  return `${man.toLocaleString('ja-JP')}万円`;
}
