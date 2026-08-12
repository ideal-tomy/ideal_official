import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainFigureValue,
  laborBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields, howWeWorkFooterCta, howWeWorkProcess } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'

/**
 * ページの1文:
 * 園の出来事を残すと、ルールを引いた報告書と保護者向け文案までそろう。
 *
 * 物語: 書く仕事が残る → あとから書くと根拠が薄れる → 事案を残すと下書きと根拠がそろう。
 * 図はページ内で使い回さない（Hero写真 / 残る作業 / 根拠の薄れ / 部品のつなぎ / 事案→下書き / 帳票下書き / ルール引用）。
 */
const slug = 'childcare-records'
const hubUrl = EXTERNAL_DEMO_URLS.childcare

const labor = {
  people: 20,
  minutesPerDay: 35,
  hourlyYen: 2500,
  workDays: 250,
  recoverRate: 0.5,
  devLow: 1_800_000,
  devHigh: 4_000_000,
} as const

const roiConfig = createLaborRoiConfig(labor, {
  label: '削減できる時間を試算する',
  href: '#roi',
  variant: 'primary',
})

export const childcareRecordsLp: LpConfig = {
  delivery: {
    slug,
    kind: 'workflow',
    publicPath: `/demo/w/${slug}`,
    demoName: '保育記録・報告デモ',
    demoUrl: hubUrl,
    ogp: {
      title: '保育記録デモ｜園の出来事から、報告書の下書きまで',
      description:
        '園の出来事を残すと、ルールを引いた報告書と保護者向け文案までそろいます。デモシナリオで体験できます。',
      image: {
        src: '/images/SafeChild.png',
        alt: '保育記録デモのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    headline: '園の記録を、あとから書かなくてよくする。',
    subline: '子ども対応のあとに、報告書づくりが残っていないか。',
    body: '事案の内容から、報告書の下書きと保護者連絡の文案をそろえます。園のルール（マニュアル）を引用した根拠付きの形にします。マイク実録音は不要で、デモシナリオで体験できます。',
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
      src: '/images/SafeChild.png',
      alt: '保育の報告書・記録デモ画面',
      note: '※画像はイメージです',
      fit: 'contain',
      videoSrc: '/videos/demo-lp/childcare-records.mp4',
    },
  },
  impact: {
    mainFigure: {
      lead: '試算の初期値では、記録・報告に関わる20人の園で',
      value: `年間 ${impactMainFigureValue(roiConfig)}`,
      trail: 'が、報告書と保護者連絡の作成に使われています。',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '35分', label: '1人・1日あたりの記録・報告（試算初期値）' },
      { value: '¥0', label: 'デモシナリオ体験は無償' },
      { value: 'シナリオ', label: '実マイク不要で体験' },
      { value: '3〜5ヶ月', label: '投資回収の目安' },
    ],
  },
  problem: {
    label: 'いま発生している作業',
    headline: '対応は終わっているのに、書く仕事だけが残っていませんか。',
    lead: '園ではその場で必要な対応をしています。しかし報告書や保護者連絡は、あとからまとめて書くことが多くなります。',
    cardHiddenItemNos: ['01', '02', '03', '04'],
    spotDiagrams: [
      {
        placement: 'after-lead',
        asset: {
          src: '/images/lp/childcare-records/after-hours-writing.svg',
          alt: '子ども対応のあとに、報告書と保護者連絡の作成が残る',
        },
      },
    ],
    items: [
      {
        no: '01',
        title: 'その場で対応する',
        body: '転倒・アレルギー・トラブルなど、子どもへの対応を先に行います。',
      },
      {
        no: '02',
        title: '記憶やメモに残す',
        body: '手が塞がっているときは、あとで書く前提で持ち越します。',
      },
      {
        no: '03',
        title: '報告書を書く',
        body: '対象・時刻・場所・対応などを、帳票に書き起こします。',
      },
      {
        no: '04',
        title: '保護者連絡の文面を作る',
        body: '伝え方を整え、必要ならルールに沿っているかも確認します。',
      },
    ],
    summary: {
      headline: '足りないのは丁寧さではありません。書く手間を減らす手段です。',
      body: '対応と記録のあいだに時間が空くほど、抜けが増えます。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline: 'あとから書くほど、根拠が薄くなる。',
    diagram: {
      src: '/images/lp/childcare-records/evidence-fades.svg',
      alt: '時間が空くほど、詳細とルール引用が残らなくなる',
    },
    closing: {
      line1: '時間が空くと、「転んだ。処置した。」だけが残ります。',
      line2: 'どのルールに沿ったかは、その場で残さないと消えます。',
    },
  },
  fit: {
    label: 'どのような園に向いているか',
    headline: '事案の記録と保護者連絡がある園に向いています。',
    lead: '次のような業務がある場合に利用できます。',
    scopeNote:
      'いまの帳票や連絡手段を、いきなり全部捨てる必要はありません。報告書の下書きから小さく始められます。',
    conditions: [
      {
        no: '1',
        roleLabel: '現場',
        title: '事案の記録が日常にある',
        body: '転倒・アレルギー・トラブルなど、残すべき出来事がある。',
      },
      {
        no: '2',
        roleLabel: '報告',
        title: '報告書や保護者連絡がある',
        body: '対象・時刻・対応・連絡文など、書く項目が決まっている。',
      },
      {
        no: '3',
        roleLabel: '確認',
        title: '園のルールに沿って残したい',
        body: 'マニュアルや指針を引用した形で、人が確認して確定したい。',
      },
    ],
    affirm:
      'この3つに当てはまる場合、記録・報告の負担を下げる設計に乗せやすいです。',
    exclude:
      '介護施設のケア記録ニーズは別デモ（ケア記録）向けです。診断・処遇の自動化が主目的の場合も向きません。',
  },
  usecases: {
    label: '業務ごとの利用例',
    headline: '園の「残す・伝える」仕事に使えます。',
    lead: '保育・こども園で、事案記録と保護者連絡に時間がかかっている業務に向きます。',
    items: [
      {
        industry: '保育園',
        icon: 'nursery',
        scope: 'インシデント報告',
        quote: '対応のあとに書く時間がない',
        body: '事案メモから、報告書の下書きをそろえます。',
      },
      {
        industry: 'こども園',
        icon: 'kodomo',
        scope: '保護者連絡',
        quote: '伝え方を毎回ゼロから考えている',
        body: '保護者向けの文案候補を、報告書とセットで用意します。',
      },
      {
        industry: '園の事務・管理',
        icon: 'office',
        scope: 'ルール照合',
        quote: 'この対応でよかったか後から確認したい',
        body: '園のマニュアルを引用した根拠付きの形にします。',
      },
      {
        industry: '担任・クラス運営',
        icon: 'teacher',
        scope: '引き継ぎ',
        quote: '口頭では伝えたが、記録に残っていない',
        body: '次の担当が読みやすい形に揃え、抜けを減らします。',
      },
    ],
    more:
      '記録項目が定まっている保育・教育周辺の報告業務にも、同じ考え方を適用できます。',
  },
  partsCatalog: {
    label: '必要な機能から導入できます',
    headline: 'すべての機能を一度に導入する必要はありません。',
    lead: 'いま時間がかかっている作業から始められます。',
    diagram: {
      src: '/images/lp/childcare-records/parts-to-flow.svg',
      alt: '事案記録・下書き・ルール引用を1つから入れて、対応から報告までつなげる',
    },
    closing: '1つから試し、効いたらつなぎます。',
    footerCta: howWeWorkFooterCta,
    items: [
      {
        no: '01',
        name: '事案記録',
        body: '出来事を、その場で残します。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '下書き',
        body: '対象・時刻・対応が、帳票に並びます。',
        standalone: false,
        dependsOn: ['事案記録'],
        demoUrl: hubUrl,
      },
      {
        no: '03',
        name: 'ルール引用',
        body: '園のマニュアルを引いた形で、人が確認します。',
        standalone: false,
        dependsOn: ['下書き'],
        demoUrl: hubUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: '事案を残す → 下書き → 根拠付きで確認。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'memo',
        label: '事案',
        surface: 'mobile',
        caption: '出来事を残すと、報告書の形に整えます（デモはシナリオでも可）。',
        image: {
          src: '/images/lp/childcare-records/incident-to-draft.svg',
          alt: '事案メモから報告書下書きへ',
          note: '※図はイメージです',
        },
      },
      {
        id: 'draft',
        label: '下書き',
        surface: 'document',
        caption: '対象・時刻・対応・保護者連絡文案が、帳票に並びます。',
        image: {
          src: '/images/lp/childcare-records/report-draft.svg',
          alt: 'インシデント報告書の下書き。対象・時刻・対応・保護者連絡文案が並ぶ',
          note: '※図はイメージです',
        },
      },
      {
        id: 'rule',
        label: '根拠',
        surface: 'dashboard',
        caption: '園のルール引用が付き、人が確認して確定します。',
        image: {
          src: '/images/lp/childcare-records/rule-cited-report.svg',
          alt: 'ルール引用付きの報告書',
          note: '※図はイメージです',
        },
      },
    ],
  },
  comparison: {
    label: 'やり方を、全部変える必要はありません',
    headline: '書く負担が大きいところから、少しずつ導入します。',
    lead: '既存の帳票や連絡手段を尊重し、効くところだけを足します。',
    columns: {
      common: '一般的なやり方',
      ours: 'この仕組み',
    },
    rows: [
      {
        point: '書くタイミング',
        common: '対応後にゼロから手入力',
        ours: '事案を残す → 下書きを直す',
      },
      {
        point: '根拠',
        common: '記憶や口頭で「適切だった」とする',
        ours: '園のルールを引用して残す',
      },
      {
        point: '保護者連絡',
        common: '文面を毎回ゼロから作る',
        ours: '文案候補を報告書とセットで用意',
      },
      {
        point: '導入範囲',
        common: 'システムを全部入れ替え',
        ours: '報告書の一部から小さく始める',
      },
    ],
    fairnessNote:
      '認識精度の保証や、対応そのものの自動化を約束するものではありません。人の確認を前提に設計します。',
  },
  growth: {
    label: '使いながら、園の言い方に合わせます',
    headline: '園ごとの用語や帳票に寄せていきます。',
    lead: '最初から全クラス・全帳票を完璧に揃える前提にはしません。',
    cycles: [
      {
        no: '1',
        title: '確認結果を次回に活かす',
        body: '人が直した表現や項目を、同じ種類の報告に反映しやすくします。',
      },
      {
        no: '2',
        title: '園のルールを登録する',
        body: '引用したいマニュアルや連絡基準を、徐々に揃えられます。',
      },
      {
        no: '3',
        title: '抜けやすい項目を見る',
        body: 'どの欄が抜けやすいかを見て、確認の仕方を見直せます。',
      },
    ],
    closing: '運用しながら、御園のルールに寄せて調整できます。',
  },
  roi: {
    label: '削減できる時間を試算',
    headline: 'いまの記録・報告時間から、削減効果を確認できます。',
    lead: '人数・1日あたりの時間・時間単価を動かして、近い数字を試せます。',
    config: roiConfig,
  },
  process: howWeWorkProcess(),
  faq: [
    {
      category: 'fit',
      q: '園ごとに帳票が違っても使えますか？',
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
      q: '運用コストはどれくらいですか？',
      a: '利用量と構成によります。想定利用量を伺ったうえで見積もります。',
    },
    {
      category: 'environment',
      q: 'いまの記録・連絡手段と併用できますか？',
      a: '既存を残したまま、下書きの作成から始めることもできます。',
    },
    {
      category: 'accuracy',
      q: 'AIの結果をそのまま確定にしてよいですか？',
      a: 'いいえ。人の確認を前提にします。不確かなところは推測で埋めず、要確認として扱える設計にします。',
    },
    {
      category: 'security',
      q: '子どもの情報の扱いはどうなりますか？',
      a: '園のルールと契約に合わせて設計します。NDAの締結にも対応します。',
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
      q: '一部のクラスだけでもできますか？',
      a: 'できます。小さな単位から始めて、効果を見て広げます。',
    },
    {
      category: 'partial',
      q: '介護のケア記録とは違いますか？',
      a: '違います。介護施設向けは別ページ（ケア記録デモ）があります。本ページは保育・こども園の報告向けです。',
    },
  ],
  finalCta: {
    headline: 'まずは、事案から下書きがそろう流れを試せます。',
    body: '無理な営業は行いません。NDAを結んでお話しすることもできます。課題が言葉になっていなくても構いません。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '子どもの情報の扱いは園のルールに合わせます',
    ],
    formTitle: '保育記録の相談をする',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：保育園・インシデント報告の作成が負担。まずデモから',
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
