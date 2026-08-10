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

const slug = 'voice-to-structured'
const galleryUrl = `${GALLERY_BASE}/${slug}`
const tryUrl = 'https://kaigo-operation-demo.vercel.app/'

const labor = {
  people: 30,
  minutesPerDay: 40,
  hourlyYen: 2800,
  workDays: 250,
  recoverRate: 0.5,
  devLow: 2_000_000,
  devHigh: 4_500_000,
}

const roiConfig = createLaborRoiConfig(labor)

export const voiceToStructuredLp: LpConfig = {
  delivery: {
    slug,
    demoName: '音声→構造化記録',
    demoUrl: galleryUrl,
    ogp: {
      title: '音声→構造化｜話すだけで、記録が完成する。',
      description:
        '会話や報告を、業務で使える構造化データへ。介護・現場記録の負担をその場で体験できます。',
      image: { src: '/images/lp/voicememo.png', alt: '音声記録のイメージ' },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    eyebrow: '現場記録・申送りを抱えるチームのためのAI',
    headline: '話すだけで、記録が完成する。',
    subline: 'あとで書く時間が、現場の負担になっている。',
    body: '会話や報告はその場で消える。パソコンに向かう時間が足りず、記録が遅れる・抜ける。音声から必要項目を整え、次の人に渡せる形へ。',
    ctas: [
      { label: '削減額を60秒で試算する', href: '#roi', variant: 'primary' },
      { label: 'いますぐデモを触る', href: galleryUrl, variant: 'secondary' },
    ],
    badges: ['その場で体験可', 'NDA対応可', 'サンプル音声で開始'],
    visual: {
      src: '/images/lp/voicememo.png',
      alt: '音声から構造化項目が埋まる画面',
      note: '※画像はイメージです',
    },
  },
  impact: {
    mainFigure: {
      lead: '記録業務に関わる30人の現場では',
      value: impactMainFigureValue(roiConfig),
      trail: 'が消えている計算に',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '話すだけ', label: '入力の起点' },
      { value: '項目化', label: '次工程への渡し方' },
      { value: '¥0', label: '体験デモの費用' },
      { value: '3〜5ヶ月', label: '回収期間の目安' },
    ],
  },
  pillars: [
    {
      icon: 'mic',
      title: '言える',
      body: 'キーボードより先に、現場の言葉で残せる体験に寄せます。',
    },
    {
      icon: 'form',
      title: '項目になる',
      body: '業務フォームの欄に合わせて構造化。転記の手間を削ります。',
    },
    {
      icon: 'try',
      title: '試せる',
      body: '簡易デモと業種デモで、自分たちの申送り・記録に効くか触れます。',
    },
  ],
  problem: {
    label: 'コストの正体',
    headline: '書かない時間も、現場コストです。',
    lead: 'ケアも工事も営業も、「あとで書く」が溜まると品質が落ちます。',
    items: [
      { no: '01', title: '忘れる', body: 'その場のニュアンスが、後書きで欠落する。' },
      { no: '02', title: '二度入力', body: '紙メモ→PC転記で同じ内容を二重に扱う。' },
      { no: '03', title: 'ばらつく', body: '人によって記録の粒度が違い、申し送りが弱い。' },
      { no: '04', title: '遅れる', body: '残業時間にまとめて書く習慣が慢性化する。' },
    ],
    summary: {
      headline: '足りないのは熱意ではない。',
      body: '話すことと、業務で使える記録を最短でつなぐ手段です。',
    },
  },
  fit: {
    label: '効く条件',
    headline: '「話す情報」が記録の本体になっているか。',
    lead: '次の状態に近いほど効きます。',
    conditions: [
      {
        no: '01',
        title: '現場で口頭報告が多い',
        body: '訪室・巡回・商談など、手が塞がっている場面がある。',
      },
      {
        no: '02',
        title: '記録すべき項目が決まっている',
        body: '帳票の欄・必須項目が言語化されている。',
      },
      {
        no: '03',
        title: '人手の確認を残せる',
        body: '生成結果を人が確認して確定する運用でよい。',
      },
    ],
    affirm: '3つ当てはまるなら、記録負荷を下げる設計に乗れます。',
    exclude:
      'ほぼ文字のみ・定型クリック入力だけで完結し、音声入力の余地が無い業務なら優先度は下がります。',
  },
  usecases: {
    label: '使い方の例',
    headline: '口頭が先、記録が後、の現場へ。',
    lead: '業界が違っても「話した内容を項目にしたい」は同じです。',
    items: [
      {
        industry: '介護',
        icon: 'care',
        scope: '訪室記録・申送り',
        quote: '今の様子、あとで書く時間がない',
        body: 'ケア記録のたたき台を音声から作れます。',
      },
      {
        industry: '建設',
        icon: 'site',
        scope: '日報・安全メモ',
        quote: '現場から上がる言い回しを残したい',
        body: '報告を構造化し、事務所入力を減らします。',
      },
      {
        industry: '営業',
        icon: 'sales',
        scope: '商談メモ',
        quote: '帰社後にCRMへ全部打つのがつらい',
        body: '話した論点を項目化して引き継ぎます。',
      },
      {
        industry: '医療周辺',
        icon: 'med',
        scope: '連絡・申し送り',
        quote: '口頭が中心で記録が追いつかない',
        body: '確認フロー付きで構造化メモを残せます。',
      },
    ],
    more: 'その他、フィールドワーク全般の音声メモ業務。',
  },
  mechanism: {
    label: '壁 × 技術',
    headline: '4つの壁を、4つの技術で壊します。',
    lead: '単なる音声文字起こしでは足りない点を分解します。',
    diagram: {
      src: '/images/lp/technology_background.png',
      alt: '音声構造化の処理イメージ',
    },
    items: [
      {
        wall: '雑音: 現場の音が汚い',
        techNo: 'TECH 01',
        techName: '音声認識最適化',
        body: '業務語彙と発話スタイルに寄せた認識を行います。',
        effect: '→ 現場でも文字起こしのたたき台が使える',
      },
      {
        wall: '項目: 文章のままだと使えない',
        techNo: 'TECH 02',
        techName: 'スキーマ整形',
        body: '帳票フィールドへマッピングして構造化します。',
        effect: '→ 次工程の入力欄が埋まる',
      },
      {
        wall: '漏れ: 必須項目が空',
        techNo: 'TECH 03',
        techName: '欠損検知',
        body: '足りない欄を提示し、聞き返し・追加入力を促します。',
        effect: '→ 不完全な記録のまま確定しにくい',
      },
      {
        wall: '確認: 自動確定が怖い',
        techNo: 'TECH 04',
        techName: '人確認フロー',
        body: '確定前に人が見て直せるUIを前提にします。',
        effect: '→ 記録品質の最終責任を人が持てる',
      },
    ],
  },
  resultShot: {
    caption: '壁を壊すと、こうなります。',
    image: {
      src: '/images/lp/voicememo.png',
      alt: '構造化結果画面',
      note: '※画像はイメージです',
    },
    note: '話した内容が項目一覧になり、確認して確定できます。',
  },
  comparison: {
    label: 'よくある失敗との違い',
    headline: '文字起こしアプリだけでは足りなかった御社へ。',
    columns: { common: '汎用文字起こし', ours: '業務スキーマ構造化' },
    lead: '手法の違いで比較します。',
    rows: [
      {
        point: '出力',
        common: '長いテキスト',
        ours: '帳票フィールド',
      },
      {
        point: '必須項目',
        common: '放置されがち',
        ours: '欠損を検知',
      },
      {
        point: '次工程',
        common: '人手で転記',
        ours: '構造のまま渡せる',
      },
      {
        point: '運用とコスト',
        common: '毎回プロンプト再発明',
        ours: '帳票定義を資産化',
      },
      {
        point: '試し方',
        common: '端末配布が前提になりがち',
        ours: 'まずデモで型を確認',
      },
    ],
    fairnessNote:
      '議事録の全文起こしだけが目的なら、汎用文字起こしで十分な場合もあります。',
  },
  roi: {
    label: '60秒試算',
    headline: '記録時間のロスを数字にする。',
    lead: '人数と1日あたりの記録ロスを動かすと、年間の目安が出ます。',
    config: roiConfig,
  },
  process: defaultProcess('音声記録'),
  faq: defaultFaq({
    fit: '口頭報告が多く、記録帳票の項目が決まっている現場向きです。',
    price: '端末・帳票数・連携範囲で見積が変わります。試算とデモ後に提示します。',
    security: '音声・個人情報の取り扱いは保存先と保持期間を含めて設計します。',
    accuracy: '生成結果は確認用です。確定は人が行う運用を推奨します。',
    prep: '代表的な帳票項目と、現場の話し方サンプルがあると早いです。',
    small: '1業務・1帳票から小さく始められます。',
    env: '既存の記録システム・シフト表との連携を想定できます。',
    coexistence: '手入力と併用し、負荷の高い場面から置き換えられます。',
  }),
  finalCta: defaultFinalCta(tryUrl, '本格デモを開く'),
}
