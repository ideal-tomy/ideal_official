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
    variant: 'peak',
    diagram: {
      src: '/images/lp/childcare-records/evidence-fades.svg',
      alt: '時間が空くほど、詳細とルール引用が残らなくなる',
    },
    closing: {
      line1: 'あとから書くほど、根拠が薄くなる。',
      line2: 'どのルールに沿ったかは、その場で残さないと消えます。',
    },
  },
  fit: {
    layout: 'prose',
    label: 'どのような園に向いているか',
    headline:
      '対応する人、報告書を書く人、保護者へ出す前に確認する人が分かれている園向けです。',
    lead: '',
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
  usecasesAfterResult: true,
  partsCatalogAfterResult: true,
  usecases: {
    layout: 'names',
    label: '記録業務',
    headline: '残す中身は違っても、事案を残して報告書にする手順は同じです。',
    lead: '保育園からクラス運営まで、対応のあとに書く仕事がある場面に使います。',
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
  },
  partsCatalog: {
    label: '必要な機能から',
    headline: '1つから始めて、つなぐ。',
    align: 'center',
    hideItems: true,
    diagram: {
      src: '/images/lp/childcare-records/parts-to-flow.svg',
      alt: '事案記録・下書き・ルール引用を1つから入れて、対応から報告までつなげる',
    },
    footerCta: {
      label: 'デモで体験する',
      href: hubUrl,
      variant: 'primary',
    },
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
    headline: '事案を残すと、報告書ではこう見えます。',
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
  roi: {
    label: '削減できる時間を試算',
    headline: 'いまの時間を入れて、近い数字を出す。',
    lead: '園やクラスによって、記録・報告にかかる時間は異なります。固定の数字ではなく、いまの状況を入れて試算します。',
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
      q: '紙や既存ソフトをすぐやめられないです。',
      a: '併用を前提に始められます。効くところだけ置き換えます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: 'AIの結果をそのまま確定にしてよいですか？',
      a: 'いいえ。人の確認を前提にします。不確かなところは推測で埋めず、要確認として扱える設計にします。',
      featured: true,
    },
    {
      category: 'small-start',
      q: '一部のクラスだけでもできますか？',
      a: 'できます。小さな単位から始めて、効果を見て広げます。',
      featured: true,
    },
    {
      category: 'security',
      q: '子どもの情報の扱いはどうなりますか？',
      a: '園のルールと契約に合わせて設計します。NDAの締結にも対応します。',
      featured: true,
    },
    {
      category: 'fit',
      q: '園ごとに帳票が違っても使えますか？',
      a: '対象項目を確認したうえで設計します。最初から全帳票対応を前提にしません。',
    },
    {
      category: 'environment',
      q: 'いまの記録・連絡手段と併用できますか？',
      a: '既存を残したまま、下書きの作成から始めることもできます。',
    },
    {
      category: 'running-cost',
      q: '運用コストはどれくらいですか？',
      a: '利用量と構成によります。想定利用量を伺ったうえで見積もります。',
    },
    {
      category: 'preparation',
      q: '始める前にデータを綺麗にする必要はありますか？',
      a: 'まずはデモと想定フローの確認からで構いません。本導入時に必要な整理項目を一緒に洗い出します。',
    },
    {
      category: 'partial',
      q: '介護のケア記録とは違いますか？',
      a: '違います。介護施設向けは別ページ（ケア記録デモ）があります。本ページは保育・こども園の報告向けです。',
    },
  ],
  finalCta: {
    headline: 'まずは、事案から下書きがそろう流れを試せます。',
    body: 'デモシナリオで体験できます。マイク実録音は不要です。効果を確認したうえで、本導入するかどうかを判断してください。',
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
    hideForm: true,
    tryCta: {
      label: 'デモを試す ↗',
      href: hubUrl,
      variant: 'secondary',
    },
    contactCta: {
      label: '問い合わせ',
      href: '/contact?service=ai-consulting&intent=demo-lp&demo=childcare-records',
      variant: 'secondary',
    },
  },
}
