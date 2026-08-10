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

const slug = 'data-to-prediction'
const galleryUrl = `${GALLERY_BASE}/${slug}`

const labor = {
  people: 15,
  minutesPerDay: 45,
  hourlyYen: 4000,
  workDays: 240,
  recoverRate: 0.45,
  devLow: 3_000_000,
  devHigh: 8_000_000,
}

const roiConfig = createLaborRoiConfig(labor)

export const dataToPredictionLp: LpConfig = {
  delivery: {
    slug,
    demoName: 'データ予測支援',
    demoUrl: galleryUrl,
    ogp: {
      title: 'データ→予測｜過去データから、次の判断を支援する。',
      description:
        '需要・来客・故障などの予測値と影響要因をセットで。判断の根拠を体験できます。',
      image: {
        src: '/images/lp/analytical.png',
        alt: '予測ダッシュボードのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    eyebrow: '需要・稼働・異常を見たいチームのためのAI',
    headline: '感覚だけの次の一手を、止める。',
    subline: '過去はある。次の判断の根拠が足りない。',
    body: '予測値だけでなく、信頼の幅と影響要因をセットで示し、「なぜその数字か」を会話できる状態へ。',
    ctas: [
      { label: '削減額を60秒で試算する', href: '#roi', variant: 'primary' },
      { label: 'いますぐデモを触る', href: galleryUrl, variant: 'secondary' },
    ],
    badges: ['その場で体験可', 'NDA対応可', 'サンプルデータで開始'],
    visual: {
      src: '/images/lp/analytical.png',
      alt: '予測値と影響要因の画面',
      note: '※画像はイメージです',
    },
  },
  impact: {
    mainFigure: {
      lead: '計画業務に関わる15人のチームでは',
      value: impactMainFigureValue(roiConfig),
      trail: 'が消えている計算に',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '予測＋要因', label: '提示のセット' },
      { value: '幅で示す', label: '過信を防ぐ' },
      { value: '¥0', label: '体験デモの費用' },
      { value: '4〜8ヶ月', label: '回収期間の目安' },
    ],
  },
  pillars: [
    {
      icon: 'chart',
      title: '見える',
      body: '次の期間の水準を、値と区間で提示します。',
      highlight: ['区間'],
    },
    {
      icon: 'factor',
      title: '説明できる',
      body: '効いていそうな要因を並べ、会議の議論を揃えられます。',
      highlight: ['要因'],
    },
    {
      icon: 'try',
      title: '試せる',
      body: '簡易デモで、予測の見せ方が現場に通じるか触れます。',
      highlight: ['簡易デモ'],
    },
  ],
  problem: {
    label: 'コストの正体',
    headline: '経験則だけだと、ばらつきコストが大きい。',
    lead: 'ベテランの勘は資産です。再現と引き継ぎが足りないと損失になります。',
    items: [
      {
        no: '01',
        title: '推測する',
        body: '会議前に数字の根拠を揃えられず、議論が長引く。',
      },
      {
        no: '02',
        title: '厚く持ちすぎる',
        body: '安全マージンが常に厚く、在庫や余剰稼働が増える。',
      },
      {
        no: '03',
        title: '機会を落とす',
        body: '在庫切れや人手不足による売上機会の損失が発生する。',
      },
      {
        no: '04',
        title: '後追いする',
        body: '結果の振り返りが満遍なく、次の計画に学びが残らない。',
      },
    ],
    summary: {
      headline: '足りないのは経験だけではない。',
      body: '判断の共通言語となる数字を、会議の前に並べる手段が必要です。',
    },
  },
  fit: {
    label: '効く条件',
    headline: '数値で話す場面が定期であるか。',
    lead: '次の状態に近いほど効きます。',
    conditions: [
      {
        no: '01',
        title: '履歴データが残っている',
        body: '需要・来客・故障など、過去の記録が取れる。',
      },
      {
        no: '02',
        title: '見たい指標が言語化できる',
        body: '何を予測したいか、何のために使うかが明確である。',
      },
      {
        no: '03',
        title: '人の判断を残せる',
        body: '自動決裁ではなく、予測を議論のたたき台にする運用でよい。',
      },
    ],
    affirm: '3つ当てはまるなら、計画業務の負荷を下げる設計に乗れます。',
    exclude:
      '履歴がほとんど無く、一回きりの判断だけなら、ダッシュボードや集計で十分な場合があります。',
  },
  usecases: {
    label: '使い方の例',
    headline: '見たいのは「次の一手」の共通言語。',
    lead: '業界をまたいでも、予測と要因を会議に載せる形は同じです。',
    items: [
      {
        industry: '小売',
        icon: 'store',
        scope: '来客・需要予測',
        quote: '来週の需要、根拠は？',
        body: '予測値と変動要因をセットで共有できます。',
      },
      {
        industry: '製造',
        icon: 'factory',
        scope: '稼働・故障の兆し',
        quote: 'このライン、止める前に何が見える',
        body: '異常の兆候を会議の議題に載せやすくします。',
      },
      {
        industry: '物流',
        icon: 'truck',
        scope: '荷量・人員計画',
        quote: '繁忙の波が読めない',
        body: '山場の見込みを値と幅で示し、手配を早めます。',
      },
      {
        industry: '人事',
        icon: 'team',
        scope: '採用・離職の傾向',
        quote: 'このトレンド、続くの？',
        body: '傾向と要因のたたき台で対話を揃えられます。',
      },
    ],
    more: 'その他、需要の波があるB2B・サービス業の計画業務全般。',
  },
  mechanism: {
    label: '壁 × 技術',
    headline: '4つの壁を、4つの技術で壊します。',
    lead: '黒箱の一点予測では足りない現場向けの分解です。',
    diagram: {
      src: '/images/lp/technology_background.png',
      alt: '予測処理のイメージ',
    },
    items: [
      {
        wall: '不確実: 一点の数字だけでは怖い',
        techNo: 'TECH 01',
        techName: '区間提示',
        body: '予測値に幅を添え、過信を抑えます。',
        effect: '→ 会議が「確信度」の話になる',
      },
      {
        wall: '説明: なぜその値か分からない',
        techNo: 'TECH 02',
        techName: '要因分解',
        body: '寄与しそうな要因を並べて提示します。',
        effect: '→ 次の行動が議論できる',
      },
      {
        wall: 'データ: 欠損とノイズ',
        techNo: 'TECH 03',
        techName: '前処理と検証',
        body: '入力品質の前提を明示し、怪しい区間を示します。',
        effect: '→ ゴミ入力を無批判に信じにくい',
      },
      {
        wall: '運用: 一度作って終わり',
        techNo: 'TECH 04',
        techName: '再学習サイクル',
        body: '実績との差分をフィードバックしモデルを更新します。',
        effect: '→ 計画プロセスに組み込める',
      },
    ],
  },
  resultShot: {
    caption: '壁を壊すと、こうなります。',
    image: {
      src: '/images/lp/analytical.png',
      alt: '予測値と影響要因の画面',
      note: '※画像はイメージです',
    },
    note: '予測値・区間・要因がセットで並びます。',
  },
  comparison: {
    label: 'よくある失敗との違い',
    headline: 'エクセルの感覚予測だけでは足りなかった御社へ。',
    lead: '手法の違いで比較します。',
    columns: {
      common: '感覚＋表計算',
      ours: '予測＋区間＋要因',
    },
    rows: [
      {
        point: '出力',
        common: '一点の見込み',
        ours: '値と幅',
      },
      {
        point: '説明',
        common: '属人',
        ours: '要因を並べて共有',
      },
      {
        point: '次工程',
        common: '会議で毎回ゼロから',
        ours: '議論のたたき台が先にある',
      },
      {
        point: '運用とコスト',
        common: '人が増えるほどブレる',
        ours: 'データ更新で再現性が出る',
      },
      {
        point: '試し方',
        common: '大規模構築が先',
        ours: 'デモで見せ方を先に確認',
      },
    ],
    fairnessNote:
      '安定した単純集計だけで足りる指標なら、予測モデルは不要な場合もあります。',
  },
  growth: {
    label: '継続価値',
    headline: '実績が溜まるほど、会話が速くなる。',
    lead: '一回きりのチャートではなく、計画プロセスに残します。',
    cycles: [
      {
        no: '01',
        title: '予測する',
        body: '次期間の値と幅を共有する。',
      },
      {
        no: '02',
        title: '実績と比較',
        body: 'ズレの要因を振り返る。',
      },
      {
        no: '03',
        title: '更新する',
        body: '前提とモデルを直し、次が良くなる。',
      },
    ],
    closing:
      '放っておくと前提が古びる。使う・測る・直すで計画の質が上がります。',
  },
  roi: {
    label: '60秒試算',
    headline: '計画ロスを、その場で掴む。',
    lead: '人数と1日あたりのロス時間を動かすと、年間ロスと取り戻せる金額の目安が出ます。',
    config: roiConfig,
  },
  process: defaultProcess('予測支援'),
  faq: defaultFaq({
    fit: '繰り返しの計画業務があり、履歴データが取れる組織向きです。',
    price:
      '対象指標と連携範囲で変わります。試算と簡易デモで金額感を合わせてから見積もります。',
    security: '利用データの範囲と権限を設計します。',
    accuracy:
      '予測は確実な未来ではありません。区間と前提をセットで見る運用を推奨します。',
    prep: '履歴データの有無と、見たい指標の定義があると早いです。',
    small: '1指標・1部門から小さく始められます。',
    env: '既存のBIや表計算への載せ替えを想定できます。',
    coexistence: '勘と経験に、数値のたたき台を足す形で併用できます。',
  }),
  finalCta: defaultFinalCta(galleryUrl),
}
