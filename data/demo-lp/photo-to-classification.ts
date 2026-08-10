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

const slug = 'photo-to-classification'
const galleryUrl = `${GALLERY_BASE}/${slug}`
const tryUrl = 'https://construction-demo-two.vercel.app'

const labor = {
  people: 25,
  minutesPerDay: 35,
  hourlyYen: 3200,
  workDays: 230,
  recoverRate: 0.5,
  devLow: 2_000_000,
  devHigh: 5_000_000,
}

const roiConfig = createLaborRoiConfig(labor)

export const photoToClassificationLp: LpConfig = {
  delivery: {
    slug,
    demoName: '写真自動分類',
    demoUrl: galleryUrl,
    ogp: {
      title: '写真→分類｜送るだけで、写真が整理される。',
      description:
        '現場写真の内容理解・分類・命名・保存整理を自動化。建設デモで体験できます。',
      image: { src: '/images/lp/autophoto.png', alt: '写真分類のイメージ' },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    eyebrow: '現場写真・物件写真が溢れるチームのためのAI',
    headline: '送るだけで、写真が整理される。',
    subline: 'IMG_4832.jpg のまま散在している。',
    body: '撮るのは速い。仕分ける・名づける・置き場所を決めるのが遅い。内容を理解して分類・命名まで一気通貫で進めます。',
    ctas: [
      { label: '削減額を60秒で試算する', href: '#roi', variant: 'primary' },
      { label: 'いますぐデモを触る', href: galleryUrl, variant: 'secondary' },
    ],
    badges: ['その場で体験可', 'NDA対応可', 'サンプル写真で開始'],
    visual: {
      src: '/images/lp/autophoto.png',
      alt: '写真が分類・命名される画面',
      note: '※画像はイメージです',
    },
  },
  impact: {
    mainFigure: {
      lead: '写真整理に関わる25人の現場では',
      value: impactMainFigureValue(roiConfig),
      trail: 'が消えている計算に',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '送るだけ', label: '開始のハードル' },
      { value: '意味のある名前', label: '検索性の向上' },
      { value: '¥0', label: '体験デモの費用' },
      { value: '3〜6ヶ月', label: '回収期間の目安' },
    ],
  },
  pillars: [
    {
      icon: 'photo',
      title: 'わかる',
      body: '何が写っているかを把握し、分類タグのたたき台を出します。',
    },
    {
      icon: 'name',
      title: '名がつく',
      body: '日付・部位・工程など、探すときの言葉で命名します。',
    },
    {
      icon: 'try',
      title: '試せる',
      body: '簡易デモと建設ハブで、自分たちの写真運用に効くか触れます。',
    },
  ],
  problem: {
    label: 'コストの正体',
    headline: '撮ったあとの仕事が、現場を止めている。',
    lead: '撮影は習慣になっている。整理は後回しになりがちです。',
    items: [
      { no: '01', title: '溜める', body: 'カメラロールと共有フォルダに未整理写真が積まれる。' },
      { no: '02', title: '探す', body: '提出・報告の直前に、目的の1枚を手作業で探す。' },
      { no: '03', title: '名づける', body: '誰かがリネームする作業が属人化する。' },
      { no: '04', title: '取り違える', body: '似た写真を誤提出し、手戻りが起きる。' },
    ],
    summary: {
      headline: '足りないのは撮影量ではない。',
      body: '撮影から、探せる・出せる状態までの導線が足りていません。',
    },
  },
  fit: {
    label: '効く条件',
    headline: '写真が「証拠・報告の本流」になっているか。',
    lead: '次の状態に近いほど効きます。',
    conditions: [
      {
        no: '01',
        title: '毎日・毎案件で写真量が多い',
        body: '現場・物件・点検などで撮影がルーチン。',
      },
      {
        no: '02',
        title: '分類軸が言える',
        body: '工程・部位・異常/正常など、仕分けの軸がある。',
      },
      {
        no: '03',
        title: '命名と保管規則がある（または欲しい）',
        body: 'フォルダ規約や提出ルールを揃えたい。',
      },
    ],
    affirm: '3つ当てはまるなら、写真運用の負荷を下げる設計に乗れます。',
    exclude:
      '月に数枚しか撮らず、手作業で十分な量なら一般的なアルバム機能で足りる場合があります。',
  },
  usecases: {
    label: '使い方の例',
    headline: '撮る量が多い現場ほど効く。',
    lead: '建設だけでなく、写真を証拠にする業務全般。',
    items: [
      {
        industry: '建設',
        icon: 'crane',
        scope: '工程写真・是正写真',
        quote: 'この部位のビフォーどこだ',
        body: '工程・部位で仕分けし、提出前の捜索を減らします。',
      },
      {
        industry: '不動産',
        icon: 'home',
        scope: '物件写真',
        quote: '間取りのどの部屋かが分からない',
        body: '部屋・方角などの分類で在庫写真を整えます。',
      },
      {
        industry: '製造',
        icon: 'qc',
        scope: '不具合・外観検査',
        quote: '類似不良の画像をすぐ出したい',
        body: 'タグ付けで過去事例検索を速めます。',
      },
      {
        industry: '保険',
        icon: 'claim',
        scope: '事故・災害写真',
        quote: '案件ごとに散らばっている',
        body: '案件単位の整理と命名を支援します。',
      },
    ],
    more: 'その他、フィールド点検・農業など写真ログ業務。',
  },
  mechanism: {
    label: '壁 × 技術',
    headline: '4つの壁を、4つの技術で壊します。',
    lead: 'フォルダ分けだけでは届かない所を分解します。',
    diagram: {
      src: '/images/lp/technology_background.png',
      alt: '写真分類の処理イメージ',
    },
    items: [
      {
        wall: '理解: 何が写っているか分からない',
        techNo: 'TECH 01',
        techName: '画像認識',
        body: '被写体・状態のラベル候補を自動付与します。',
        effect: '→ 分類のたたき台がすぐある',
      },
      {
        wall: '命名: ファイル名がゴミ',
        techNo: 'TECH 02',
        techName: 'ルール命名',
        body: '日付・現場・部位などの規約でリネームします。',
        effect: '→ 探す言葉とファイル名が一致する',
      },
      {
        wall: '保管: 置き場所が人依存',
        techNo: 'TECH 03',
        techName: '仕分けパス',
        body: 'ルールに従い候補フォルダへ振り分けます。',
        effect: '→ 提出前の迷子が減る',
      },
      {
        wall: '確認: 誤分類が怖い',
        techNo: 'TECH 04',
        techName: '人確認UI',
        body: '自動結果を人が直してから確定できます。',
        effect: '→ 運用ルールを人が監督できる',
      },
    ],
  },
  resultShot: {
    caption: '壁を壊すと、こうなります。',
    image: {
      src: '/images/lp/autophoto.png',
      alt: '分類・命名後の一覧',
      note: '※画像はイメージです',
    },
    note: '送った写真が、意味のある名前と分類で並びます。',
  },
  comparison: {
    label: 'よくある失敗との違い',
    headline: '共有フォルダ運用だけでは回らなかった御社へ。',
    columns: { common: '手動フォルダ分け', ours: '内容理解＋規約自動化' },
    lead: '手法の違いで比較します。',
    rows: [
      { point: '起点', common: '人が見る', ours: '送るだけで候補' },
      { point: '命名', common: '属人', ours: '規約ベース' },
      { point: '検索', common: '記憶頼み', ours: 'タグと名前で辿る' },
      {
        point: '運用とコスト',
        common: '溜まるほど残業増',
        ours: 'ルールが効くほど単価が下がる',
      },
      { point: '試し方', common: '全社展開が前提', ours: 'デモで1現場から' },
    ],
    fairnessNote:
      '写真枚数が少なく手分けで間に合うなら、手動運用で十分な場合もあります。',
  },
  roi: {
    label: '60秒試算',
    headline: '仕分け時間のロスを数字にする。',
    lead: '人数と1日あたりの整理ロスを動かすと、年間の目安が出ます。',
    config: roiConfig,
  },
  process: defaultProcess('写真分類'),
  faq: defaultFaq({
    fit: '現場写真が多く、分類・命名規則を揃えたい組織向きです。',
    price: '保管連携と現場数で見積が変わります。試算後に提示します。',
    security: '撮影対象に個人情報・機密が含まれる場合は保管と権限を設計します。',
    accuracy: '自動分類は候補です。確定前の人確認を推奨します。',
    prep: '分類軸と命名規則のたたき台、代表写真があると早いです。',
    small: '1現場・1案件種別から始められます。',
    env: '共有ドライブ・施工管理アプリ等への連携を想定できます。',
    coexistence: '手動整理と併用し、負荷の高い案件から置き換えられます。',
  }),
  finalCta: defaultFinalCta(tryUrl, '本格デモを開く'),
}
