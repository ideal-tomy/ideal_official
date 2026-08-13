import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainFigureValue,
  laborBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

/**
 * ページの1文:
 * 話すだけでケア記録の下書きがそろう。シフト後の書き写しを減らす。
 */
const slug = 'care-records'
const hubUrl = EXTERNAL_DEMO_URLS.care
const galleryUrl = `${GALLERY_BASE}/voice-to-structured`
const voiceKarteUrl = EXTERNAL_DEMO_URLS.voiceKarte

const labor = {
  people: 25,
  minutesPerDay: 45,
  hourlyYen: 2800,
  workDays: 250,
  recoverRate: 0.5,
  devLow: 2_000_000,
  devHigh: 4_500_000,
} as const

const roiConfig = createLaborRoiConfig(labor, {
  label: '削減できる時間を試算する',
  href: '#roi',
  variant: 'primary',
})

export const careRecordsLp: LpConfig = {
  delivery: {
    slug,
    kind: 'workflow',
    publicPath: `/demo/w/${slug}`,
    demoName: '医療・福祉ケア記録デモ',
    demoUrl: hubUrl,
    ogp: {
      title: 'ケア記録デモ｜話すだけで、記録の下書きがそろう',
      description:
        '申し送りや観察を話すと、ケア記録の項目に整えます。シフト後の書き写しを減らせます。まず無償で体験できます。',
      image: {
        src: '/images/lp/care.png',
        alt: 'ケア記録デモのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    headline: '話すだけで、ケア記録の下書きがそろう。',
    subline: '申し送りは口頭で済む。帳票への書き写しだけが、シフト後に残る。',
    body: '現場で話した内容を、日付・対象・観察・対応などの業務項目にそろえます。記録のための残業を減らし、「ゼロから書く」を「整った候補を直す」に変えます。',
    ctas: [
      {
        label: '削減できる時間を試算する',
        href: '#roi',
        variant: 'primary',
      },
      {
        label: 'デモを試す ↗',
        href: hubUrl,
        variant: 'secondary',
      },
    ],
    visual: {
      src: '/images/lp/care.png',
      alt: 'ケア記録・音声入力のイメージ',
      note: '※画像はイメージです',
      fit: 'contain',
      videoSrc: '/videos/demo-lp/care-records.mp4',
    },
  },
  impact: {
    mainFigure: {
      lead: '試算の初期値では、記録に関わる25人の現場で',
      value: `年間 ${impactMainFigureValue(roiConfig)}`,
      trail: 'が、記録の転記・整理に使われています。',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '45分', label: '1人・1日あたりの記録作業（試算初期値）' },
      { value: '¥0', label: '実証トライアルは無償' },
      { value: '話すだけ', label: 'その場で残せる' },
      { value: '3〜5ヶ月', label: '投資回収の目安' },
    ],
  },
  problem: {
    label: 'いま発生している作業',
    headline: '話したのに、記録は持ち帰りになっていませんか。',
    lead: '現場ではすでに必要な情報を把握しています。しかし帳票への入力は、帰宅後やシフト終了後にまとめて行われがちです。',
    cardHiddenItemNos: ['01', '02', '03', '04'],
    spotDiagrams: [
      {
        placement: 'after-lead',
        asset: {
          src: '/images/lp/care/speak-triple-write.svg',
          alt: '話した1回が、三度扱われている（記憶・メモ・帳票）',
        },
      },
    ],
    items: [
      {
        no: '01',
        title: '現場で聞き取り・観察する',
        body: '利用者との会話や様子を、その場で把握します。',
      },
      {
        no: '02',
        title: 'メモや頭の中に留める',
        body: '手が塞がっているときは、走り書きや記憶に頼ります。',
      },
      {
        no: '03',
        title: 'シフト後に転記する',
        body: '帰宅後や交代前に、記録票へ書き写します。',
      },
      {
        no: '04',
        title: '抜け漏れを目視で確認する',
        body: '必須項目や申し送りの抜けがないか、人がチェックします。',
      },
    ],
    summary: {
      headline: '足りないのは熱意ではありません。話すことと帳票をつなぐ手段です。',
      body: '同じ内容を二度扱い、時間が経つほどニュアンスが落ちます。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline: '時間が経つほど、話した内容は薄くなる。',
    diagram: {
      src: '/images/lp/care/nuance-fades.svg',
      alt: 'シフトが終わると、その場のニュアンスは撮り直せない',
    },
    closing: {
      line1: 'シフト後では、「その場の様子」は撮り直せません。',
      line2:
        '確認は担当者の記憶に頼り、抜けに気づくのは記録を書く直前になりがちです。',
    },
  },
  fit: {
    label: 'どのような現場に向いているか',
    headline: '「話す情報」が記録の本体になっている現場に向いています。',
    lead: '次のような業務がある場合に利用できます。',
    scopeNote:
      '現行の帳票やシステムを、いきなりすべて捨てる必要はありません。必要な記録項目に合わせて設計します。',
    conditions: [
      {
        no: '1',
        roleLabel: '現場',
        title: '口頭の申し送り・観察が多い',
        body: '訪室・巡回などで、キーボードより先に言葉で伝える場面がある。',
      },
      {
        no: '2',
        roleLabel: '記録',
        title: '記録項目がある程度決まっている',
        body: '日付・対象・観察・対応など、帳票の欄が言語化されている。',
      },
      {
        no: '3',
        roleLabel: '確認',
        title: '人の確認を残せる',
        body: '生成結果を人が見て確定する運用でよい（自動確定だけはない）。',
      },
    ],
    affirm:
      'この3つに当てはまる場合、記録負荷を下げる設計に乗せやすいです。',
    exclude:
      '音声を残すこと自体が極端に難しい制約の現場、項目が日々大きく変わる業務、判断そのものの自動化が主目的の場合は向きません。',
  },
  usecases: {
    label: '業務ごとの利用例',
    headline: 'ケアの現場で、話す内容を記録の下書きにできます。',
    lead: '介護・医療周辺で、申し送りと帳票のあいだに時間がかかっている業務に向きます。',
    items: [
      {
        industry: '介護施設',
        icon: 'care',
        scope: '日常ケア記録・申し送り',
        quote: '今の様子、あとで書く時間がない',
        body: '話した内容から、ケア記録の項目候補をそろえます。',
      },
      {
        industry: '訪問介護・看護',
        icon: 'visit',
        scope: '訪問メモ・報告',
        quote: '移動のあいだに書く時間が取れない',
        body: 'その場や移動中に話して残し、事務所での転記を減らします。',
      },
      {
        industry: '日中活動・通所',
        icon: 'day',
        scope: '活動記録・連絡',
        quote: '口頭で伝えたはずが、記録に残っていない',
        body: '申し送りの抜けを減らし、次の担当が読みやすい形に揃えます。',
      },
      {
        industry: '看護・医療周辺',
        icon: 'nurse',
        scope: '経過メモの下書き',
        quote: 'まず下書きを揃え、人が確定したい',
        body: '確定前の候補として使い、現場ルールに合わせた確認を残します。',
      },
    ],
    more:
      '記録項目が定まっている医療・福祉周辺の業務にも、同じ考え方を適用できます。',
  },
  partsCatalog: {
    label: '必要な機能から導入できます',
    headline: 'すべての機能を一度に導入する必要はありません。',
    lead: '記録の負担が大きいところから始められます。',
    diagram: {
      src: '/images/lp/care/speak-to-record-flow.svg',
      alt: '話す→整える→確定を1つからつなぐ',
    },
    closing:
      '1つの体験から試し、効果が分かってから範囲を広げられます。',
    items: [
      {
        no: '01',
        name: '音声 → 構造化',
        body: 'サンプル音声から、業務項目に整う流れを体験できます。',
        standalone: true,
        demoUrl: galleryUrl,
        lpUrl: galleryUrl,
      },
      {
        no: '02',
        name: 'ケア記録デモ',
        body: '業務画面寄りのケア記録フローで、操作感を確かめられます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '03',
        name: '音声カルテ系体験',
        body: '申し送りに近い下書きまでの流れを別デモでも触れます。',
        standalone: true,
        demoUrl: voiceKarteUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: '話す → 整える → 記録に載せる。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'field',
        label: '現場',
        surface: 'mobile',
        caption: '現場で話し、音声メモとして残します。',
        image: {
          src: '/images/lp/voicememo.png',
          alt: '現場で話す・録音するイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'office',
        label: '構造化',
        surface: 'dashboard',
        caption: '日付・対象・観察・対応などが項目に並びます。',
        image: {
          src: '/images/lp/care.png',
          alt: '構造化されたケア記録のイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'deliverable',
        label: '確定',
        surface: 'document',
        caption: '人が確認し、帳票や共有用の形に整えます。',
        image: {
          src: '/images/lp/document_workflow.png',
          alt: '記録票・申し送りとしての成果物イメージ',
          note: '※画像はイメージです',
        },
      },
    ],
  },
  comparison: {
    label: '記録のやり方を、全部変える必要はありません',
    headline: '書く負担が大きいところから、少しずつ導入します。',
    lead: '既存の帳票や運用を尊重し、効くところだけを足します。',
    columns: {
      common: '一般的なやり方',
      ours: 'この仕組み',
    },
    rows: [
      {
        point: '入力の起点',
        common: 'シフト後にゼロから手入力',
        ours: 'その場で話す → 項目の候補を作る',
      },
      {
        point: '確認',
        common: '抜け漏れを思い出しながら見る',
        ours: '整った候補を人が直して確定',
      },
      {
        point: '導入範囲',
        common: 'システムを全部入れ替え',
        ours: '対象記録から小さく始める',
      },
      {
        point: '個人情報',
        common: 'ルールが曖昧なまま試す',
        ours: '現場ルールに合わせた扱いを設計',
      },
    ],
    fairnessNote:
      '認識精度の保証や、診断そのものの自動化を約束するものではありません。人の確認を前提に設計します。',
  },
  growth: {
    label: '使いながら、現場の言い方に合わせます',
    headline: '施設ごとの用語や帳票に寄せていきます。',
    lead: '最初から全施設・全帳票を完璧に揃える前提にはしません。',
    cycles: [
      {
        no: '1',
        title: '確認結果を次回に活かす',
        body: '人が直した表現や項目を、同じ種類の記録に反映しやすくします。',
      },
      {
        no: '2',
        title: '現場語を登録する',
        body: '施設で使っている呼び方や略称を、徐々に揃えられます。',
      },
      {
        no: '3',
        title: '項目の抜けやすい所を見る',
        body: 'どの観測が抜けやすいかを見て、確認の仕方を見直せます。',
      },
    ],
    closing: '運用しながら、御施設のルールに寄せて調整できます。',
  },
  roi: {
    label: '削減できる時間を試算',
    headline: '現在の記録時間から、削減効果を確認できます。',
    lead: '人数・1日あたりの時間・時間単価を動かして、御施設の近い数字を試せます。',
    config: roiConfig,
  },
  process: {
    label: '導入方法',
    headline: 'まず触って、効くかを確認します。',
    lead: '全施設導入を先に決める必要はありません。',
    steps: [
      {
        no: '01',
        title: 'デモで体験する',
        costLabel: '費用：無償',
        body: 'サンプル音声や業務寄りの画面で、「話す→項目化」の感覚を確かめます。',
      },
      {
        no: '02',
        title: '対象記録を絞る',
        costLabel: 'ここまで費用ゼロに近い',
        body: 'ケア記録の一部など、効きそうな帳票から範囲を決めます。',
      },
      {
        no: '03',
        title: '小さく本番に載せる',
        costLabel: '本導入・運用',
        body: '確認フローと環境に合わせて構築し、効果を見て広げます。',
      },
    ],
    exitNote:
      '体験だけで終わって構いません。効果が分からなければ、その時点で終了できます。',
    detailHref: '/flow#how-we-work',
    detailLabel: '導入の流れの詳細を見る →',
  },
  faq: [
    {
      category: 'fit',
      q: '施設ごとに帳票が違っても使えますか？',
      a: '対象項目を確認したうえで設計します。最初から全帳票対応を前提にしません。',
      defaultOpen: true,
    },
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '対象業務・人数・連携範囲によって異なります。体験・初期の確認は無償で進められます。本導入時に範囲と費用をご案内します。',
    },
    {
      category: 'running-cost',
      q: '音声認識の利用料はどれくらいですか？',
      a: '利用量と採用サービスによります。想定利用量を伺ったうえで見積もります。',
    },
    {
      category: 'environment',
      q: '既存の記録システムと連携できますか？',
      a: '既存を残したまま、下書きの作成やエクスポートから始めることもできます。',
    },
    {
      category: 'accuracy',
      q: 'AIの結果をそのまま確定にしてよいですか？',
      a: 'いいえ。人の確認を前提にします。不確かなところは推測で埋めず、不足や要確認として扱える設計にします。',
    },
    {
      category: 'security',
      q: '個人情報の扱いはどうなりますか？',
      a: '現場のルールと契約に合わせて設計します。NDAの締結にも対応します。',
    },
    {
      category: 'coexistence',
      q: '紙や既存ソフトをすぐやめられないです。',
      a: '併用を前提に始められます。効くところだけ置き換えます。',
    },
    {
      category: 'preparation',
      q: '始める前にデータを綺麗にする必要はありますか？',
      a: 'まずはデモと想定フローの確認からで構いません。本導入時に必要な整理項目を一緒に洗い出します。',
    },
    {
      category: 'small-start',
      q: '一部の職種・ユニットだけでもできますか？',
      a: 'できます。小さな単位から始めて、効果を見て広げます。',
    },
    {
      category: 'partial',
      q: '音声構造化の体験だけでもよいですか？',
      a: '問題ありません。ギャラリーの体験から始められます。',
    },
  ],
  finalCta: {
    headline: 'まずは、話すだけで項目がそろう感覚を試せます。',
    body: '無理な営業は行いません。NDAを結んでお話しすることもできます。課題が言葉になっていなくても構いません。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '個人情報の扱いは現場ルールに合わせます',
    ],
    formTitle: 'ケア記録の相談をする',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：特養・ケア記録の転記が負担。まず音声体験から',
          }
        : f,
    ),
    tryCta: {
      label: 'デモを試す ↗',
      href: hubUrl,
      variant: 'secondary',
    },
  },
}
