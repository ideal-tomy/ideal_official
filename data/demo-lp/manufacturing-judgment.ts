import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainFigureValue,
  laborBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields, howWeWorkProcess } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

/**
 * ページの1文:
 * 規程や手順を探し回らず、質問すると回答と根拠がそろう。製造の判断を止めにくくする。
 */
const slug = 'manufacturing-judgment'
const hubUrl = EXTERNAL_DEMO_URLS.manufacturingIdeal
const knowledgeUrl = EXTERNAL_DEMO_URLS.internalKnowledge
const galleryUrl = `${GALLERY_BASE}/knowledge-to-search`

const labor = {
  people: 40,
  minutesPerDay: 35,
  hourlyYen: 3500,
  workDays: 240,
  recoverRate: 0.5,
  devLow: 2_500_000,
  devHigh: 6_000_000,
} as const

const roiConfig = createLaborRoiConfig(labor, {
  label: '削減できる時間を試算する',
  href: '#roi',
  variant: 'primary',
})

export const manufacturingJudgmentLp: LpConfig = {
  delivery: {
    slug,
    kind: 'workflow',
    publicPath: `/demo/w/${slug}`,
    demoName: '製造の判断デモ',
    demoUrl: hubUrl,
    ogp: {
      title: '製造の判断デモ｜聞いて、根拠付きで答えにたどり着く',
      description:
        '規程・手順・判断基準を探し回る時間を減らし、回答と出典をセットで返します。製造ハブで体験できます。',
      image: {
        src: '/images/lp/manufacturing.png',
        alt: '製造の判断デモのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    headline: '規程を探し回らず、聞けば根拠が届く。',
    subline:
      '判断基準がベテランの頭の中にある。文書はあるのに、たどり着くまでが仕事になっている。',
    body: '現場や部門からの質問に、回答だけでなく根拠の文書箇所まで添えて返します。版ずれや窓口の違いで止まる時間を短くすることを目指します。',
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
      src: '/images/product_flow_lphero.png',
      alt: '製造現場の判断支援デモ画面',
      note: '※画像はイメージです',
      fit: 'contain',
      videoSrc: '/videos/demo-lp/manufacturing-judgment.mp4',
    },
  },
  impact: {
    mainFigure: {
      lead: '試算の初期値では、問い合わせ・探索に関わる40人で',
      value: `年間 ${impactMainFigureValue(roiConfig)}`,
      trail: 'が、資料探索と確認の待ちに使われています。',
    },
    basis: laborBasisNote(labor),
  },
  problem: {
    label: 'いま発生している作業',
    headline: '正解はあるのに、たどり着くまでが仕事になっていませんか。',
    lead: 'フォルダを開き、詳しい人に聞き、根拠のページが共有されないまま同じ質問が繰り返されます。',
    cardHiddenItemNos: ['01', '02', '03', '04'],
    spotDiagrams: [
      {
        placement: 'after-lead',
        asset: {
          src: '/images/lp/manufacturing/search-maze-cost.svg',
          alt: '答えは文書にあるのに、たどり着くまでが仕事',
        },
      },
    ],
    items: [
      {
        no: '01',
        title: '質問が発生する',
        body: '現場や他部門から、手順・優先・窓口についての問い合わせが来る。',
      },
      {
        no: '02',
        title: '資料を探す',
        body: '共有ドライブや紙・チャット履歴を探し回る。',
      },
      {
        no: '03',
        title: '詳しい人に聞く',
        body: 'ベテランに口頭で確認し、根拠ページは曖昧なまま残る。',
      },
      {
        no: '04',
        title: 'その場しのぎで返す',
        body: '同じ質問が再発し、判断のばらつきが残る。',
      },
    ],
    summary: {
      headline: '探す時間が、判断のリードタイムそのものです。',
      body: '回答と出典を同時にそろえると、次の人が同じ探索をしにくくなります。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline: '根拠が残らないと、同じ問い合わせが何度でも戻る。',
    variant: 'peak',
    diagram: {
      src: '/images/lp/manufacturing/same-question-loop.svg',
      alt: '同じ質問が毎週戻る。根拠が残らないから',
    },
    closing: {
      line1: '根拠が残らないと、同じ問い合わせが何度でも戻る。',
      line2: '次の人がまた同じ探索を始め、同じ質問が毎週戻ってきます。',
    },
  },
  fit: {
    layout: 'prose',
    label: 'どのような会社に向いているか',
    headline:
      '聞く人、探す人、根拠を確認する人が分かれている現場向けです。',
    lead: '',
    scopeNote:
      '全社文書の一括取り込みを最初から前提にしません。対象コーパスと権限を決めてから進めます。',
    conditions: [
      {
        no: '1',
        roleLabel: '現場',
        title: '同じ問い合わせが繰り返される',
        body: '手順・優先・連絡先など、似た質問が毎週のように発生する。',
      },
      {
        no: '2',
        roleLabel: '文書',
        title: '規程・マニュアルが文書として存在する',
        body: '口頭だけの知識ではなく、参照できる文書がある（不十分でもよい）。',
      },
      {
        no: '3',
        roleLabel: '確認',
        title: '根拠の提示まで揃えたい',
        body: '「何を根拠にそう言ったか」を残したい運用である。',
      },
    ],
    affirm:
      '3つ当てはまるなら、探索時間と属人回答を減らす設計に乗せやすいです。',
    exclude:
      '文書がほぼ無く口頭だけ、回答を無確認で最終決定に使う、権限設計なしで機密を広く検索させたい、といった場合は向きません。',
  },
  usecasesAfterResult: true,
  partsCatalogAfterResult: true,
  usecases: {
    layout: 'names',
    label: '判断業務',
    headline: '聞く中身は違っても、回答と根拠をそろえる手順は同じです。',
    lead: '生産現場から間接部門まで、探してから決める仕事に使います。',
    items: [
      {
        industry: '生産・現場',
        icon: 'plant',
        scope: '手順・優先ルール',
        quote: 'どの手順が正なのか、探すだけで時間が終わる',
        body: '質問に対して、該当する手順と根拠箇所を返せます。',
      },
      {
        industry: '品質・QC',
        icon: 'qc',
        scope: '窓口・判断の分岐',
        quote: '窓口がどこか分からず、現場が止まる',
        body: '連絡先や優先の手がかりを、文書ベースで示せます。',
      },
      {
        industry: '技術・設計',
        icon: 'eng',
        scope: '変更影響・規格',
        quote: '影響範囲を思い出しながら調べている',
        body: '関連文書への手がかりを短時間で揃えやすくします。',
      },
      {
        industry: '間接部門',
        icon: 'office',
        scope: '社内規程の問い合わせ',
        quote: '同じ規程の質問が何度も来る',
        body: '総務・人事寄りの社内ナレッジにも同じ型を適用できます。',
      },
    ],
  },
  partsCatalog: {
    label: '必要な機能から',
    headline: '1つから始めて、つなぐ。',
    align: 'center',
    hideItems: true,
    diagram: {
      src: '/images/lp/manufacturing/ask-to-decide-flow.svg',
      alt: '聞いて根拠が返ると、判断が先に進む',
    },
    footerCta: {
      label: 'デモで体験する',
      href: hubUrl,
      variant: 'primary',
    },
    items: [
      {
        no: '01',
        name: 'ナレッジ → 検索',
        body: '質問から回答と根拠がセットで返る流れをサイト内で体験できます。',
        standalone: true,
        demoUrl: galleryUrl,
        lpUrl: galleryUrl,
      },
      {
        no: '02',
        name: '製造の判断（3体験）',
        body: '製造ハブで、現場判断・手順・変更影響をまとめて触れます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '03',
        name: '社内ナレッジAI',
        body: '規程・マニュアルへの質問を、業務画面寄りに確認できます。',
        standalone: true,
        demoUrl: knowledgeUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: '質問すると、回答と根拠がこう見えます。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'field',
        label: '質問',
        surface: 'mobile',
        caption: '現場や部門が、自然な言葉で聞きます。',
        image: {
          src: '/images/lp/knowledge.png',
          alt: '質問入力のイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'office',
        label: '回答',
        surface: 'dashboard',
        caption: '要点が整理され、次の行動に使えます。',
        image: {
          src: '/images/lp/manufacturing.png',
          alt: '回答表示のイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'deliverable',
        label: '根拠',
        surface: 'document',
        caption: '参照した規程・手順の箇所を添えます。',
        image: {
          src: '/images/lp/document_workflow.png',
          alt: '根拠文書のイメージ',
          note: '※画像はイメージです',
        },
      },
    ],
  },
  roi: {
    label: '削減できる時間を試算',
    headline: 'いまの時間を入れて、近い数字を出す。',
    lead: 'ラインや部門によって、探索・確認にかかる時間は異なります。固定の数字ではなく、いまの状況を入れて試算します。',
    hideCta: true,
    config: roiConfig,
  },
  process: { ...howWeWorkProcess(), exitNote: undefined },
  faq: [
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '対象範囲・文書量・権限連携により異なります。初期確認は無償で進め、本導入時に見積もります。',
      featured: true,
      defaultOpen: true,
    },
    {
      category: 'coexistence',
      q: '既存の文書管理システムは残しますか？',
      a: '残したまま、検索・回答の層を足す形も取れます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: '回答は必ず正しいですか？',
      a: '保証しません。根拠を提示し、人が確認する運用を前提にします。',
      featured: true,
    },
    {
      category: 'small-start',
      q: '1ライン・1部門だけからできますか？',
      a: 'できます。小さく始め、効いたら広げます。',
      featured: true,
    },
    {
      category: 'security',
      q: '機密文書を横断検索できますか？',
      a: '権限設計なしでの横断は想定しません。アクセス制御を設計してから載せます。',
      featured: true,
    },
    {
      category: 'fit',
      q: '文書が古いままでも始められますか？',
      a: '始められます。ただし正しい版の整備とセットで進めるのが安全です。デモでは「探索の型」を先に確認できます。',
    },
    {
      category: 'environment',
      q: 'オンプレや閉域でもできますか？',
      a: '要件を伺い、配置方式を含めて検討します。',
    },
    {
      category: 'running-cost',
      q: '問い合わせが増えたら費用はどうなりますか？',
      a: '利用量や基盤によって変わります。想定利用を伺ったうえで設計します。',
    },
    {
      category: 'preparation',
      q: '全文書をOCRし直す必要がありますか？',
      a: '対象を絞れば、最初から全件は不要です。',
    },
    {
      category: 'partial',
      q: 'ギャラリーのナレッジ検索だけ試したいです。',
      a: '問題ありません。サイト内体験から始められます。',
    },
  ],
  finalCta: {
    headline: 'まずは、聞いて根拠が返る感覚を試せます。',
    body: '製造ハブで体験できます。探したい文書の種類を一緒に整理したうえで、本導入するかどうかを判断してください。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '権限と対象文書から設計します',
    ],
    formTitle: '製造・ナレッジについて相談する',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：製造ラインの手順問い合わせが負担。まず体験したい',
          }
        : f,
    ),
    hideForm: true,
    tryCta: {
      label: 'デモを試す ↗',
      href: hubUrl,
      variant: 'secondary',
    },
    contactCta: {
      label: '問い合わせ',
      href: '/contact?service=ai-consulting&intent=demo-lp&demo=manufacturing-judgment',
      variant: 'secondary',
    },
  },
}
