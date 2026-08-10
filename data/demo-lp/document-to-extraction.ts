import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainFigureValue,
  laborBasisNote,
} from '@/lib/demo-lp/roi-factory'
import {
  defaultFaq,
  defaultFinalCta,
  defaultProcess,
} from '@/lib/demo-lp/shared-blocks'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

const slug = 'document-to-extraction'
const galleryUrl = `${GALLERY_BASE}/${slug}`
const tryUrl = 'https://dd-demo-red.vercel.app/'

const labor = {
  people: 20,
  minutesPerDay: 60,
  hourlyYen: 4500,
  workDays: 220,
  recoverRate: 0.5,
  devLow: 2_500_000,
  devHigh: 6_000_000,
}

const roiConfig = createLaborRoiConfig(labor)

export const documentToExtractionLp: LpConfig = {
  delivery: {
    slug,
    demoName: '文書情報抽出',
    demoUrl: galleryUrl,
    ogp: {
      title: '文書情報抽出｜意思決定に必要な情報だけを。',
      description:
        'PDFや契約・請求・DD文書から、判断に必要な項目だけを抜き出す。触って確かめられます。',
      image: {
        src: '/images/lp/document_workflow.png',
        alt: '文書抽出のイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    eyebrow: '契約・請求・DD・点検文書を扱うチームのためのAI',
    headline: '読む負担が、判断を遅らせている。',
    subline: '全部は読めない。でも見落としは許されない。',
    body: '重要条項や金額・期限を目視で探しているあいだ、意思決定は止まり続けます。必要項目だけを抽出し、原文と連動して確認できる状態へ。',
    ctas: [
      { label: '削減額を60秒で試算する', href: '#roi', variant: 'primary' },
      { label: 'いますぐデモを触る', href: galleryUrl, variant: 'secondary' },
    ],
    badges: ['その場で体験可', 'NDA対応可', '文書サンプルで開始'],
    visual: {
      src: '/images/lp/document_workflow.png',
      alt: '抽出結果と原文が連動する画面イメージ',
      note: '※画像はイメージです',
    },
  },
  impact: {
    mainFigure: {
      lead: '文書レビューに関わる20人のチームでは',
      value: impactMainFigureValue(roiConfig),
      trail: 'が消えている計算に',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '必要項目のみ', label: '見る対象の絞り込み' },
      { value: '原文連動', label: '確認のしやすさ' },
      { value: '¥0', label: '体験デモの費用' },
      { value: '3〜6ヶ月', label: '回収期間の目安' },
    ],
  },
  pillars: [
    {
      icon: 'extract',
      title: '抜く',
      body: '長文PDFから、判断に必要なフィールドだけを構造化して提示します。',
    },
    {
      icon: 'link',
      title: '原文とつながる',
      body: '抽出値をクリックで根拠箇所へ。信頼の最終確認を人が残せます。',
    },
    {
      icon: 'try',
      title: '試せる',
      body: '簡易デモとDD系の本格デモで、自分たちの文書型に効くか触れます。',
    },
  ],
  problem: {
    label: 'コストの正体',
    headline: '読むこと自体がボトルネックになる。',
    lead: '専門知識はある。ページ数とばらつきが、時間とリスクを増やしています。',
    items: [
      {
        no: '01',
        title: '探す',
        body: '条項・金額・期限をページ送りで目視捜索する。',
      },
      {
        no: '02',
        title: '転記する',
        body: 'スプレッドシートへ手入力し、打ち間違いと欠落が起きる。',
      },
      {
        no: '03',
        title: '見落とす',
        body: '例外条項・注記がレビュー漏れになり、後工程で発覚する。',
      },
      {
        no: '04',
        title: '二度解く',
        body: '同じ型の文書レビューを、案件ごとにゼロから繰り返す。',
      },
    ],
    summary: {
      headline: '足りないのは読解力ではない。',
      body: '大量文書から「判断に必要な差分」だけを早く・確認可能に出す手段です。',
    },
  },
  fit: {
    label: '効く条件',
    headline: '文書の「型」が繰り返される現場か。',
    lead: '次の状態に近いほど効果が大きいです。',
    conditions: [
      {
        no: '01',
        title: '同型の文書が定期的に発生する',
        body: '契約・請求・DD資料・点検報告など、フォーマットの家族がある。',
      },
      {
        no: '02',
        title: '抽出すべき項目が言語化できる',
        body: '「金額・期限・当事者・主要義務」など、見る先が決まっている。',
      },
      {
        no: '03',
        title: '最終判断は人が残す運用でよい',
        body: 'AIを自動決裁ではなく、レビュー加速のために使う姿勢がある。',
      },
    ],
    affirm: '3つ当てはまるなら、文書レビューの負荷を下げる設計に乗れます。',
    exclude:
      '毎回まったく未知の文書形式で、かつ抽出項目も未定義の状態では、先に型定義が必要です。全文要約チャットが十分ならそちらで足りる場合もあります。',
  },
  usecases: {
    label: '使い方の例',
    headline: '見るべき項目を、先に並べる。',
    lead: '業界をまたいでも「長い文書から必要な欄だけ」という問いは同じです。',
    items: [
      {
        industry: '専門サービス',
        icon: 'file',
        scope: 'DD資料・契約一式',
        quote: 'この条項、どこに書いてある',
        body: 'レビューシート用の論点抽出を短時間で用意できます。',
      },
      {
        industry: '経理',
        icon: 'yen',
        scope: '請求書・支払条件',
        quote: '支払条件と税額だけ先に',
        body: '登録前に必要フィールドを揃える流れに乗せられます。',
      },
      {
        industry: '設備・点検',
        icon: 'check',
        scope: '点検・報告書PDF',
        quote: '異常指摘だけ抜きたい',
        body: '判定に効く項目を一覧化し、原文照合を残せます。',
      },
      {
        industry: '営業管理',
        icon: 'deal',
        scope: '提案・契約条件比較',
        quote: '前回と何が違う？',
        body: '比較すべき欄を構造化して差分検討を速めます。',
      },
    ],
    more: 'その他、不動産・製造の仕様書レビューなど、ページ数が多い同型文書全般。',
  },
  mechanism: {
    label: '壁 × 技術',
    headline: '4つの壁を、4つの技術で壊します。',
    lead: '「要約すればよい」だけでは足りない現場向けの分解です。',
    diagram: {
      src: '/images/lp/technology_background.png',
      alt: '文書抽出の処理イメージ',
    },
    items: [
      {
        wall: '長さ: 全文を読めない',
        techNo: 'TECH 01',
        techName: 'レイアウト理解',
        body: '見出し・表・脚注を含む構造を把握し、項目探索の対象を絞ります。',
        effect: '→ 見るべき場所を先に並べられる',
      },
      {
        wall: '項目: 欲しい欄がバラバラ',
        techNo: 'TECH 02',
        techName: 'スキーマ抽出',
        body: '事前に定義したフィールドへ値を書き出します。',
        effect: '→ 転記先の表がそのまま手元に残る',
      },
      {
        wall: '信頼: AIの捏造が怖い',
        techNo: 'TECH 03',
        techName: '根拠スパン',
        body: '抽出値と原文位置を対応づけ、人が確認できるようにします。',
        effect: '→ 確認なし自動決裁を避けられる',
      },
      {
        wall: 'ばらつき: 版と形式が違う',
        techNo: 'TECH 04',
        techName: 'テンプレ適応',
        body: 'よく出る文書家族ごとに抽出定義を育てます。',
        effect: '→ 使うほど同型案件が速くなる',
      },
    ],
  },
  resultShot: {
    caption: '壁を壊すと、こうなります。',
    image: {
      src: '/images/lp/document_workflow.png',
      alt: '抽出結果一覧と原文連動',
      note: '※画像はイメージです',
    },
    note: '必要項目が表形式で並び、原文確認まで一気通貫です。',
  },
  comparison: {
    label: 'よくある失敗との違い',
    headline: '全文要約チャットを試して足りなかった御社へ。',
    lead: '手法の違いで比較します。',
    columns: {
      common: '汎用要約チャット',
      ours: '項目抽出＋原文連動',
    },
    rows: [
      {
        point: '出力形式',
        common: '散文の要約',
        ours: '定義したフィールドの値',
      },
      {
        point: '根拠',
        common: 'しばしば出典が曖昧',
        ours: '値ごとに原文位置',
      },
      {
        point: '後工程',
        common: 'そのまま転記しづらい',
        ours: '表・次工程に載せやすい',
      },
      {
        point: '運用とコスト',
        common: '案件ごとにプロンプト探索',
        ours: '文書家族の定義を資産化',
      },
      {
        point: '試し方',
        common: 'まず大規模導入前提になりがち',
        ours: 'デモで型に効くか先に確認',
      },
    ],
    fairnessNote:
      '短い文書のざっくり理解だけなら、汎用要約で十分な場合もあります。',
  },
  growth: {
    label: '継続価値',
    headline: '文書家族が増えるほど、速くなる。',
    lead: '単発変換で終わらせず、型定義を育てます。',
    cycles: [
      {
        no: '01',
        title: '定義する',
        body: '抽出したい項目と文書家族を決める。',
      },
      {
        no: '02',
        title: '確認で直す',
        body: '誤抽出を定義とプロンプトにフィードバックする。',
      },
      {
        no: '03',
        title: '次案件が速い',
        body: '同型レビューの立ち上げが短くなる。',
      },
    ],
    closing: '放っておくとプロンプトが散らばる。定義を育てるほど安く速くなります。',
  },
  roi: {
    label: '60秒試算',
    headline: 'レビュー時間のロスを数字にする。',
    lead: '人数と1日あたりのレビューロスを動かすと、年間の目安が出ます。',
    config: roiConfig,
  },
  process: defaultProcess('文書抽出'),
  faq: defaultFaq({
    fit: '同型の長い文書が多く、見る項目が決まっているチーム向きです。',
    price:
      '対象文書の種類と件数で見積が変わります。まず試算とデモで範囲を決めてから提示します。',
    security:
      '取扱い文書の機密度に応じて、閲覧範囲・保存先・保持期間を設計します。',
    accuracy:
      '抽出結果は最終判断ではありません。原文連動での人確認を前提にします。',
    prep: '代表的なサンプル文書と、抽出したい項目一覧があると早いです。',
    small: '文書家族を1〜2種類に絞って小さく始められます。',
    env: 'レビューシートや業務システムへのフィールド連携を想定できます。',
    coexistence: '既存の目視レビューと併用し、一次抜き出しから置き換える導入が可能です。',
  }),
  finalCta: defaultFinalCta(tryUrl, '本格デモを開く'),
}
