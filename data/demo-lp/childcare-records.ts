import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainHoursPerPersonValue,
  laborHoursBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields, howWeWorkProcess } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'

/**
 * ページの1文:
 * 対応しながら口頭で数行残すと、報告書の下書きと保護者連絡の文案が、園のマニュアルの引用付きでそろいます。
 */
const slug = 'childcare-records'
const hubUrl = EXTERNAL_DEMO_URLS.childcare

const labor = {
  people: 15,
  minutesPerDay: 35,
  hourlyYen: 1800,
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

const workDaysSlider = roiConfig.sliders.find((s) => s.key === 'workDays')
if (workDaysSlider) {
  workDaysSlider.label = '開園日数'
  workDaysSlider.note = '年間の開園日'
}

export const childcareRecordsLp: LpConfig = {
  delivery: {
    slug,
    kind: 'workflow',
    publicPath: `/demo/w/${slug}`,
    demoName: '保育記録・報告デモ',
    demoUrl: hubUrl,
    ogp: {
      title: '保育記録デモ｜記録の時間を減らして、子どもと向き合う時間を増やす',
      description:
        '対応しながら口頭で数行残すと、報告書の下書きと保護者連絡の文案がそろいます。園のマニュアルのどこに沿った対応かも一緒に残ります。',
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
    headline: '記録にかかる時間を減らして、子どもと向き合う時間を増やす。',
    subline:
      '書く仕事が夕方に残るほど、子どもを見ている時間はその分減っています。',
    body: '対応しながら、口頭で数行残します。そこから報告書の下書きと保護者連絡の文案がそろい、園のマニュアルのどこに沿った対応かも一緒に残ります。担任・主任・保護者が、同じ内容を見て話せます。文章は人が確認して確定します。',
    demoNote:
      '体験は用意されたシナリオで進みます。マイクや実際の記録は不要です。',
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
    primaryMetric: 'hours',
    mainFigure: {
      lead: '試算の初期値では、記録と報告に、職員1人あたり年間',
      value: impactMainHoursPerPersonValue(labor),
      trail: 'が使われています。',
    },
    basis: laborHoursBasisNote(labor, { dayLabel: '開園日' }),
  },
  problem: {
    label: 'いま発生している作業',
    headline: '対応は終わっているのに、書く仕事だけが残っていませんか。',
    lead: '園ではその場で必要な対応をしています。しかし報告書や保護者連絡は、子どもが帰ったあとにまとめて書くことになります。',
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
        body: '転倒・アレルギー・子ども同士のトラブルなど、対応を先に行います。',
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
        body: '伝え方を整え、園のマニュアルに沿っているかも確認します。',
      },
    ],
    summary: {
      headline: 'その場で残せないから、夕方に思い出しながら書いています。',
      body: '時間が空くほど、時刻や対応の細かいところが曖昧になります。',
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
      line2:
        'どのマニュアルに沿った対応だったかは、その場で残さないと思い出せません。',
    },
  },
  roleImpact: {
    label: '誰の仕事が変わるか',
    headline: '担任・主任・保護者が、同じ内容を見て話せます。',
    lead: 'いまは、担任の記憶と書き方によって、伝わる内容が変わります。',
    closing:
      '夕方に残る書き仕事が減ります。その時間を何に使うかは、園が決めることです。',
    rows: [
      {
        role: '担任',
        before: '対応しながら「あとで書くこと」を覚えておく',
        after: 'その場で口頭で残す。覚えておかなくてよい',
      },
      {
        role: '主任・園長',
        before: '報告を読んで、対応が妥当だったか判断し直す',
        after: 'どのマニュアルに沿った対応かが、最初から付いている',
      },
      {
        role: '保護者',
        before: '説明の詳しさが、担任によって変わる',
        after: '誰が対応しても、同じ根拠で説明される',
      },
    ],
  },
  fit: {
    layout: 'prose',
    label: 'どのような園に向いているか',
    headline: '転倒やアレルギーの記録を、毎日どこかで書いている園向けです。',
    lead: '',
    scopeNote:
      'いまの帳票や連絡手段を、いきなり全部やめる必要はありません。報告書の下書きから始められます。',
    conditions: [
      {
        no: '1',
        roleLabel: '現場',
        title: '記録すべき出来事が日常にある',
        body: '転倒・アレルギー・子ども同士のトラブルなど、残す出来事がある。',
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
        title: '園のマニュアルに沿って残したい',
        body: 'どの指針に沿った対応かを引用した形で、人が確認して確定したい。',
      },
    ],
    affirm:
      'この3つに当てはまる場合、記録と報告にかかる時間を減らせます。',
    exclude:
      '介護施設のケア記録は別のデモ（ケア記録デモ）が対象です。子どもの状態の判断そのものを自動化したい場合は向きません。',
  },
  usecasesAfterResult: true,
  partsCatalogAfterResult: true,
  usecases: {
    layout: 'names',
    label: '記録業務',
    headline: '出来事の種類が変わっても、書く項目は対象・時刻・場所・対応です。',
    lead: '保育園からクラス運営まで、対応のあとに書く仕事がある場面に使います。',
    items: [
      {
        industry: '保育園',
        icon: 'nursery',
        scope: 'インシデント報告',
        quote: '対応のあとに、書く時間が取れない',
        body: 'その場の数行から、報告書の下書きをそろえます。',
      },
      {
        industry: 'こども園',
        icon: 'kodomo',
        scope: '保護者連絡',
        quote: '伝え方を毎回ゼロから考えている',
        body: '保護者向けの文案を、報告書とセットで用意します。',
      },
      {
        industry: '園の事務・管理',
        icon: 'office',
        scope: 'マニュアルとの照合',
        quote: 'この対応でよかったか、あとから確認したい',
        body: '園のマニュアルのどこに沿った対応かを引用した形にします。',
      },
      {
        industry: '担任・クラス運営',
        icon: 'teacher',
        scope: '引き継ぎ',
        quote: '口頭では伝えたが、記録に残っていない',
        body: '次の担当が読める形にそろえ、抜けを減らします。',
      },
    ],
  },
  partsCatalog: {
    label: '必要な機能から',
    headline: '報告書の下書きだけでも使えます。',
    align: 'center',
    hideItems: true,
    diagram: {
      src: '/images/lp/childcare-records/parts-to-flow.svg',
      alt: 'その場の記録・下書き・マニュアル引用を1つから入れて、対応から報告までつなげる',
    },
    footerCta: {
      label: 'デモで体験する',
      href: hubUrl,
      variant: 'primary',
    },
    items: [
      {
        no: '01',
        name: 'その場の記録',
        body: '出来事を、対応のあと口頭で数行残します。手が空くまで覚えておく必要がありません。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '報告書の下書き',
        body: '対象・時刻・場所・対応が、帳票の形に並びます。保護者連絡の文案も一緒に用意します。',
        standalone: false,
        dependsOn: ['その場の記録'],
        demoUrl: hubUrl,
      },
      {
        no: '03',
        name: 'マニュアルの引用',
        body: '園のマニュアルのどこに沿った対応かを一緒に表示し、人が確認して確定します。',
        standalone: false,
        dependsOn: ['報告書の下書き'],
        demoUrl: hubUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: 'その場で残した数行が、報告書の形になります。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'memo',
        label: '記録',
        surface: 'mobile',
        caption: '出来事を口頭で数行残すと、報告書の形に整えます。',
        image: {
          src: '/images/lp/childcare-records/incident-to-draft.svg',
          alt: 'その場の記録から報告書下書きへ',
          note: '※図はイメージです',
        },
      },
      {
        id: 'draft',
        label: '下書き',
        surface: 'document',
        caption: '対象・時刻・対応・保護者連絡の文案が、帳票に並びます。',
        image: {
          src: '/images/lp/childcare-records/report-draft.svg',
          alt: 'インシデント報告書の下書き。対象・時刻・対応・保護者連絡文案が並ぶ',
          note: '※図はイメージです',
        },
      },
      {
        id: 'rule',
        label: '確認',
        surface: 'dashboard',
        caption: '園のマニュアルの引用が付き、人が確認して確定します。',
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
    headline: 'いま記録に使っている時間を入れると、年間の合計が出ます。',
    lead: '園やクラスによって、記録や報告にかかる時間は異なります。固定の数字ではなく、いまの状況を入れて試算します。',
    hideCta: true,
    config: roiConfig,
  },
  process: { ...howWeWorkProcess(), exitNote: undefined },
  faq: [
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '園の数、クラス数、いまお使いの帳票の種類によって異なります。デモの体験と、最初の整理までは無償です。本導入時に範囲と費用をご案内します。',
      featured: true,
      defaultOpen: true,
    },
    {
      category: 'coexistence',
      q: '連絡帳アプリをすでに使っています。',
      a: '併用したまま始められます。いまの連絡手段は残し、報告書の下書きだけを足す形も取れます。',
      featured: true,
    },
    {
      category: 'fit',
      q: '保育中に話しかけるのは現実的ですか？',
      a: '対応が落ち着いてから、数行だけ残す想定です。話した内容はその場で文字になり、あとで直せます。書けるときは、これまでどおり手で入力しても構いません。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: '下書きをそのまま保護者に送ってよいですか？',
      a: 'いいえ。文案は下書きで、送る前に必ず人が確認して直せます。分からない部分は推測で埋めず、確認が必要な箇所として残します。',
      featured: true,
    },
    {
      category: 'security',
      q: '子どもの声や周りの音も録音されますか？',
      a: '記録するのは職員が話した内容です。録音データの保存の有無や保存期間は、園のルールに合わせて設計します。',
      featured: true,
    },
    {
      category: 'small-start',
      q: '一部のクラスだけでもできますか？',
      a: 'できます。1クラスから始めて、効果を見てから広げられます。',
      featured: true,
    },
    {
      category: 'security',
      q: '子どもの情報はどこに保存されますか？',
      a: '保存先と取り扱いは、園のルールと契約に合わせて設計します。NDAの締結にも対応します。',
    },
    {
      category: 'fit',
      q: '園ごとに帳票が違っても使えますか？',
      a: '使えます。まず使用中の帳票を確認し、対象の項目を決めてから設計します。最初から全帳票への対応は前提にしません。',
    },
    {
      category: 'running-cost',
      q: '毎月いくらかかりますか？',
      a: '利用する人数と構成によって変わります。想定する使い方を伺ったうえで見積もります。',
    },
    {
      category: 'preparation',
      q: '園のマニュアルを整えてからでないと使えませんか？',
      a: 'いまあるもので始められます。引用できる形になっていない場合は、どこから整えるかを一緒に決めます。',
    },
    {
      category: 'partial',
      q: '介護のケア記録とは違いますか？',
      a: '違います。介護施設向けは別ページ（ケア記録デモ）です。このページは保育園・こども園の報告が対象です。',
    },
  ],
  finalCta: {
    headline: 'まずは、数行の記録から下書きがそろう流れを試せます。',
    body: '用意されたシナリオで体験できます。マイクや実際の記録は不要です。流れを確認したうえで、まず1クラスから試すかどうかを決めてください。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '子どもの情報の扱いは園のルールに合わせます',
    ],
    formTitle: '保育の記録について相談する',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder: '例：インシデント報告の作成が負担。まずデモから',
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
