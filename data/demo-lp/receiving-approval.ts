import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainFigureValue,
  laborBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields, howWeWorkProcess } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'

/**
 * ページの1文:
 * 図面と材料証明書を突き合わせ、違うところだけ人が確認する。確認内容は承認に残る。
 */
const slug = 'receiving-approval'
const hubUrl = EXTERNAL_DEMO_URLS.approvalDiagram

const labor = {
  people: 15,
  minutesPerDay: 40,
  hourlyYen: 3500,
  workDays: 240,
  recoverRate: 0.5,
  devLow: 2_000_000,
  devHigh: 5_000_000,
} as const

const roiConfig = createLaborRoiConfig(labor, {
  label: '削減できる時間を試算する',
  href: '#roi',
  variant: 'primary',
})

export const receivingApprovalLp: LpConfig = {
  delivery: {
    slug,
    kind: 'workflow',
    publicPath: `/demo/w/${slug}`,
    demoName: '受入検査デモ',
    demoUrl: hubUrl,
    ogp: {
      title: '受入検査デモ｜図面と証明書のずれだけ、人が確認する',
      description:
        '図面と材料証明書を突き合わせ、違うところだけ人が確認します。確認内容は承認に残ります。サンプルで流れを体験できます。',
      image: {
        src: '/images/product_flow_lphero.png',
        alt: '受入検査デモのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    headline: '届いた材料は、図面どおりか。',
    subline: '全部を人が見るのではなく、ずれだけを人に渡す。',
    body: '「一致・要確認・記載なし」に分けます。人が確認した根拠は承認に残り、あとから対象を絞りやすくします。操作は「次へ」だけのサンプルデモで流れを確認できます。',
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
      alt: '図面と証明書の突合せデモ画面',
      note: '※画像はイメージです',
      fit: 'contain',
      videoSrc: '/videos/demo-lp/receiving-approval.mp4',
    },
  },
  impact: {
    mainFigure: {
      lead: '試算の初期値では、受入・品質に関わる15人で',
      value: `年間 ${impactMainFigureValue(roiConfig)}`,
      trail: 'が、突合せと確認待ちに使われています。',
    },
    basis: laborBasisNote(labor),
  },
  problem: {
    label: 'いま発生している作業',
    headline: '図面と証明書を、毎回人が全部見ていませんか。',
    lead: '受入では、図面の指定と材料証明書の記載を突き合わせます。表記が違う・項目がない場合に、確認と記録が止まりがちです。',
    cardHiddenItemNos: ['01', '02', '03', '04'],
    spotDiagrams: [
      {
        placement: 'after-lead',
        asset: {
          src: '/images/lp/receiving-approval/mismatch-triage.svg',
          alt: '図面と証明書を突き合わせ、一致・要確認・記載なしに分ける',
        },
      },
    ],
    items: [
      {
        no: '01',
        title: '図面の指定を確認する',
        body: '材質・板厚・規格など、見る項目を図面から拾います。',
      },
      {
        no: '02',
        title: '証明書と突き合わせる',
        body: '材料証明書の記載を、図面の指定と比べます。',
      },
      {
        no: '03',
        title: '違うところを人が判断する',
        body: '表記ゆれや記載なしは、その場で止めて人が確認します。',
      },
      {
        no: '04',
        title: '何を確認したかを残す',
        body: 'あとから不具合が出たとき、対象を絞れる記録が必要です。',
      },
    ],
    summary: {
      headline: '足りないのは注意力ではありません。ずれを仕分ける手段です。',
      body: '全部を人が見るほど、本当に見るべきところが埋もれます。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline: '確認したはずなのに、あとから辿れない。',
    variant: 'peak',
    diagram: {
      src: '/images/lp/receiving-approval/cannot-trace-peak.svg',
      alt: '口頭やメモだけの確認では、あとから何を見て通したか辿れない',
    },
    closing: {
      line1: '確認したはずなのに、あとから辿れない。',
      line2:
        '「何を見て通したか」が承認に残っていないと、同じ確認が何度も発生します。',
    },
  },
  fit: {
    layout: 'prose',
    label: 'どのような現場に向いているか',
    headline:
      '図面を見る人、証明書と突き合わせる人、通す前に確認する人が分かれている現場向けです。',
    lead: '',
    scopeNote:
      'いまの帳票や承認フローを、いきなり全部捨てる必要はありません。確認項目から小さく始められます。',
    conditions: [
      {
        no: '1',
        roleLabel: '受入',
        title: '図面と証明書を突き合わせている',
        body: '材質・規格・寸法など、見る項目が決まっている。',
      },
      {
        no: '2',
        roleLabel: '品質',
        title: '表記ゆれや記載なしが起きる',
        body: '同等材の表記違いや、ロット未記載などで人が止まっている。',
      },
      {
        no: '3',
        roleLabel: '承認',
        title: '人の確認を残したい',
        body: '自動で確定するのではなく、確認内容を承認に残したい。',
      },
    ],
    affirm:
      'この3つに当てはまる場合、受入の確認負荷を下げる設計に乗せやすいです。',
    exclude:
      '図面・証明書がデータとして揃っていない現場、人が確認せず自動確定だけしたい場合は向きません。',
  },
  usecasesAfterResult: true,
  partsCatalogAfterResult: true,
  usecases: {
    layout: 'names',
    label: '確認業務',
    headline: '突き合わせる中身は違っても、ずれだけ人に渡す手順は同じです。',
    lead: '受入から次工程まで、指定と実績を揃える仕事に使います。',
    items: [
      {
        industry: '受入検査',
        icon: 'recv',
        scope: '図面 × 材料証明書',
        quote: '全部見るのが仕事になっている',
        body: '一致・要確認・記載なしに分け、確認だけ人に渡します。',
      },
      {
        industry: '品質保証',
        icon: 'qa',
        scope: '承認・差戻し',
        quote: '何を見て通したか残したい',
        body: '確認した根拠を承認に残し、あとから辿れるようにします。',
      },
      {
        industry: '調達・購買',
        icon: 'buy',
        scope: '取引先への記載依頼',
        quote: '毎回同じ項目が足りない',
        body: '足りない項目を基準に戻し、次の入荷で同じ止まりを減らします。',
      },
      {
        industry: '製造現場',
        icon: 'mfg',
        scope: '次工程への引き継ぎ',
        quote: '前工程の確認が曖昧だと止まる',
        body: '受入でそろった前提を、次工程がそのまま使えます。',
      },
    ],
  },
  partsCatalog: {
    label: '必要な機能から',
    headline: '1つから始めて、つなぐ。',
    align: 'center',
    hideItems: true,
    diagram: {
      src: '/images/lp/receiving-approval/parts-to-flow.svg',
      alt: '仕分け・人の確認・承認記録を1つから入れて、受入から次工程までつなげる',
    },
    footerCta: {
      label: 'デモで体験する',
      href: hubUrl,
      variant: 'primary',
    },
    items: [
      {
        no: '01',
        name: '仕分け',
        body: '図面と証明書を、一致・要確認・記載なしに分けます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '人の確認',
        body: '要確認だけが、人の手元に届きます。',
        standalone: false,
        dependsOn: ['仕分け'],
        demoUrl: hubUrl,
      },
      {
        no: '03',
        name: '承認記録',
        body: '何を見て通したかを、承認に残します。',
        standalone: false,
        dependsOn: ['人の確認'],
        demoUrl: hubUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: 'ずれだけが、人の手元ではこう見えます。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'triage',
        label: '仕分け',
        surface: 'dashboard',
        caption: '図面と証明書を比べ、3つに分けます。',
        image: {
          src: '/images/lp/receiving-approval/mismatch-triage.svg',
          alt: '一致・要確認・記載なしへの仕分け',
          note: '※図はイメージです',
        },
      },
      {
        id: 'human',
        label: '人の確認',
        surface: 'dashboard',
        caption: '要確認だけが人の手元に届きます。',
        image: {
          src: '/images/lp/receiving-approval/human-then-record.svg',
          alt: '人が確認し承認に残す',
          note: '※図はイメージです',
        },
      },
      {
        id: 'improve',
        label: '次の入荷',
        surface: 'document',
        caption: '足りない項目を基準に戻し、次から同じ止まりを減らします。',
        image: {
          src: '/images/lp/receiving-approval/next-receipt-easier.svg',
          alt: '基準に戻すと次の入荷が楽になる',
          note: '※図はイメージです',
        },
      },
    ],
  },
  roi: {
    label: '削減できる時間を試算',
    headline: 'いまの時間を入れて、近い数字を出す。',
    lead: '品目や取引先によって、突合せにかかる時間は異なります。固定の数字ではなく、いまの状況を入れて試算します。',
    hideCta: true,
    config: roiConfig,
  },
  process: { ...howWeWorkProcess(), exitNote: undefined },
  faq: [
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '対象業務・人数・連携範囲によって異なります。体験・初期の確認は無償で進められます。本導入時に範囲と費用をご案内します。',
      featured: true,
      defaultOpen: true,
    },
    {
      category: 'coexistence',
      q: '紙の証明書もまだあります。',
      a: '併用を前提に始められます。効くところだけ置き換えます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: 'AIの結果をそのまま合否にしてよいですか？',
      a: 'いいえ。人の確認を前提にします。表記ゆれは自動で断定せず、要確認として渡します。',
      featured: true,
    },
    {
      category: 'small-start',
      q: '一部の品目・取引先だけでもできますか？',
      a: 'できます。小さな単位から始めて、効果を見て広げます。',
      featured: true,
    },
    {
      category: 'security',
      q: '図面・証明書の扱いはどうなりますか？',
      a: '現場のルールと契約に合わせて設計します。NDAの締結にも対応します。',
      featured: true,
    },
    {
      category: 'fit',
      q: '図面や証明書の形式がバラバラでも使えますか？',
      a: '対象項目と取り込み方を確認したうえで設計します。最初から全形式対応を前提にしません。',
    },
    {
      category: 'environment',
      q: 'いまの承認システムと連携できますか？',
      a: '既存を残したまま、確認支援から始めることもできます。',
    },
    {
      category: 'running-cost',
      q: '運用コストはどれくらいですか？',
      a: '利用量と構成によります。想定利用量を伺ったうえで見積もります。',
    },
    {
      category: 'preparation',
      q: '始める前にマスタを綺麗にする必要はありますか？',
      a: 'まずはデモと想定フローの確認からで構いません。本導入時に必要な整理項目を一緒に洗い出します。',
    },
    {
      category: 'partial',
      q: 'サンプル体験だけでもよいですか？',
      a: '問題ありません。デモから始められます。',
    },
  ],
  finalCta: {
    headline: 'まずは、ずれだけが人に渡る流れを試せます。',
    body: 'サンプルデモで流れを確認できます。効果を確認したうえで、本導入するかどうかを判断してください。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '図面・証明書の扱いは現場ルールに合わせます',
    ],
    formTitle: '受入検査の相談をする',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：受入で図面と証明書の突合せに時間がかかる。まずデモから',
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
      href: '/contact?service=ai-consulting&intent=demo-lp&demo=receiving-approval',
      variant: 'secondary',
    },
  },
}
