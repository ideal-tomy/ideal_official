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
 * 図面と材料証明書を突き合わせ、合っていないところだけを人が確認します。確認した内容は承認に残ります。
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
      title: '受入検査デモ｜図面と証明書の、合っていないところだけを人が見る',
      description:
        '図面と材料証明書を突き合わせ、合っていないところだけを人が確認します。確認した内容は承認に残ります。サンプルで流れを体験できます。',
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
    subline: '全部を人が見るのではなく、合っていないところだけを人が見ます。',
    body: '図面の指定と材料証明書の記載を突き合わせ、「一致」「要確認」「記載なし」に分けます。人が確認した内容は承認に残るため、あとから同じ確認をやり直さずに済みます。操作は「次へ」だけのサンプルデモで、流れを確認できます。',
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
      lead: '試算の初期値では、受入と品質に関わる15人で年間',
      value: impactMainFigureValue(roiConfig),
      trail: 'が、突き合わせと確認待ちに使われています。',
    },
    basis: laborBasisNote(labor),
  },
  problem: {
    label: 'いま発生している作業',
    headline: '図面と証明書を、毎回1項目ずつ人が見比べていませんか。',
    lead: '受入では、図面の指定と材料証明書の記載を突き合わせます。表記が違う、項目そのものがない、という場面で確認が止まります。',
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
        body: '材料証明書の記載を、図面の指定と1項目ずつ比べます。',
      },
      {
        no: '03',
        title: '合っていないところを人が判断する',
        body: '表記が違う、ロットの記載がない、といった箇所で止めて確認します。',
      },
      {
        no: '04',
        title: '何を確認したかを残す',
        body: 'あとから問い合わせが来たとき、対象のロットを絞れる記録が必要です。',
      },
    ],
    summary: {
      headline: '人が全部見ていると、本当に見るべき数件が埋もれます。',
      body: '表記が違うだけの項目と、記載そのものがない項目が、いまは同じ扱いで並んでいます。',
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
        '「何を見て通したか」が承認に残っていないと、同じ確認をもう一度やり直すことになります。',
    },
  },
  roleImpact: {
    label: '誰の仕事が変わるか',
    headline: 'あとから聞かれたときに、記憶を頼りに答えなくてよくなります。',
    lead: 'あとから問い合わせが来たとき、いま頼りにしているのは担当者の記憶です。',
    closing:
      '誰の判断だったかを追うためではなく、同じ確認を二度しないための記録です。',
    rows: [
      {
        role: '受入担当',
        before: '全項目を1つずつ見比べる',
        after: '合っていない項目と、記載のない項目だけを見る',
      },
      {
        role: '品質担当',
        before: '通した理由を、当時の担当者に聞いて回る',
        after: '何を見て通したかが、承認にそのまま残っている',
      },
      {
        role: '取引先',
        before: '同じ項目が抜けたまま、毎回届く',
        after: '足りない項目を伝えられ、次の入荷から揃う',
      },
    ],
  },
  fit: {
    layout: 'prose',
    label: 'どのような現場に向いているか',
    headline: '材質や規格を、毎回図面と証明書で見比べている現場向けです。',
    lead: '',
    scopeNote:
      'いまの帳票や承認フローを、いきなり全部やめる必要はありません。確認する項目を1つ決めるところから始められます。',
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
        title: '表記の違いや記載なしが起きる',
        body: '同等材の表記違いや、ロットの記載なしで人が止まっている。',
      },
      {
        no: '3',
        roleLabel: '承認',
        title: '人が確認した内容を残したい',
        body: '自動で確定するのではなく、確認した内容を承認に残したい。',
      },
    ],
    affirm:
      'この3つに当てはまる場合、受入の確認にかかる時間を減らせます。',
    exclude:
      '図面や証明書がデータとして揃っていない場合、人の確認を挟まず自動で合否を確定したい場合は向きません。',
  },
  usecasesAfterResult: true,
  partsCatalogAfterResult: true,
  usecases: {
    layout: 'names',
    label: '確認業務',
    headline: '品目が変わっても、見るのは図面の指定と証明書の記載の2つです。',
    lead: '受入から次工程まで、指定と実物の記載を揃える仕事に使います。',
    items: [
      {
        industry: '受入検査',
        icon: 'recv',
        scope: '図面 × 材料証明書',
        quote: '全部見ることが仕事になっている',
        body: '一致・要確認・記載なしに分け、要確認だけを担当者が見ます。',
      },
      {
        industry: '品質保証',
        icon: 'qa',
        scope: '承認・差戻し',
        quote: '何を見て通したかを残したい',
        body: '確認した内容を承認に残し、あとから辿れるようにします。',
      },
      {
        industry: '調達・購買',
        icon: 'buy',
        scope: '取引先への記載依頼',
        quote: '毎回同じ項目が抜けて届く',
        body: '足りない項目を取引先に伝えて、次の入荷から記載してもらいます。',
      },
      {
        industry: '製造現場',
        icon: 'mfg',
        scope: '次工程への引き継ぎ',
        quote: '前工程の確認が曖昧だと止まる',
        body: '受入で揃った内容を、次工程がそのまま使えます。',
      },
    ],
  },
  partsCatalog: {
    label: '必要な機能から',
    headline: '仕分けだけでも使えます。',
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
        body: '図面と証明書を、一致・要確認・記載なしの3つに分けます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '人の確認',
        body: '要確認と記載なしだけが、担当者の手元に届きます。',
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
    headline: '合っていない項目だけが、担当者の画面に並びます。',
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
        caption: '要確認と記載なしだけが、担当者の手元に届きます。',
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
        caption: '足りない項目を取引先に伝えると、次の入荷から揃います。',
        image: {
          src: '/images/lp/receiving-approval/next-receipt-easier.svg',
          alt: '足りない項目を伝えると、次の入荷から揃う',
          note: '※図はイメージです',
        },
      },
    ],
  },
  roi: {
    label: '削減できる時間を試算',
    headline: '1日に何件、突き合わせていますか。',
    lead: '品目や取引先によって、突き合わせにかかる時間は異なります。固定の数字ではなく、いまの状況を入れて試算します。',
    hideCta: true,
    config: roiConfig,
  },
  process: { ...howWeWorkProcess(), exitNote: undefined },
  faq: [
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '対象の品目数、取引先の数、いまの承認フローとの連携範囲によって異なります。デモの体験と、最初の整理までは無償です。本導入時に範囲と費用をご案内します。',
      featured: true,
      defaultOpen: true,
    },
    {
      category: 'coexistence',
      q: '紙の証明書もまだあります。',
      a: '紙のまま併用して始められます。効果が出る品目だけ置き換えます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: '同等材で表記が違う場合はどうなりますか？',
      a: '自動で同じものと判断はしません。「要確認」として担当者に表示します。表記の対応関係が固まってきたら、基準として登録できます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: 'AIの結果をそのまま合否にしてよいですか？',
      a: 'いいえ。合否は人が決めます。システムがやるのは、見る対象を絞るところまでです。',
      featured: true,
    },
    {
      category: 'security',
      q: '記録は、担当者の責任を追及するために使われませんか？',
      a: 'そのための機能ではありません。残すのは「何を見て通したか」であり、あとから同じ確認をやり直さないための記録です。誰が確認したかを表示するかどうかも、運用に合わせて決められます。',
      featured: true,
    },
    {
      category: 'small-start',
      q: '一部の品目・取引先だけでもできますか？',
      a: 'できます。1品目・1取引先から始めて、効果を見てから広げられます。',
      featured: true,
    },
    {
      category: 'security',
      q: '図面や証明書が社外に出ますか？',
      a: '出さない構成も選べます。保管場所と取り扱いは、現場のルールと契約に合わせて設計します。NDAの締結にも対応します。',
    },
    {
      category: 'environment',
      q: 'いまの承認システムと連携できますか？',
      a: '既存の承認システムを残したまま、その手前の確認作業から始めることもできます。',
    },
    {
      category: 'running-cost',
      q: '毎月の費用はどれくらいですか？',
      a: '突き合わせる件数と構成によって変わります。想定する件数を伺ったうえで見積もります。',
    },
    {
      category: 'preparation',
      q: '始める前にマスタを綺麗にする必要はありますか？',
      a: 'ありません。まずはデモと想定の流れを確認するところからで構いません。本導入時に、整理が必要な項目を一緒に洗い出します。',
    },
    {
      category: 'partial',
      q: 'まずデモだけ見たいのですが。',
      a: '問題ありません。サンプルデモは「次へ」を押すだけで、実際のデータは不要です。',
    },
  ],
  finalCta: {
    headline: 'まずは、要確認だけが手元に届く流れを試せます。',
    body: 'サンプルデモは「次へ」を押すだけで、実際の図面や証明書は不要です。流れを確認したうえで、まず1品目・1取引先から試すかどうかを決めてください。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '図面・証明書の扱いは現場のルールに合わせます',
    ],
    formTitle: '受入検査について相談する',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：受入で図面と証明書の突き合わせに時間がかかる。まずデモから',
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
