import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createWorkflowSiteRoiConfig,
  impactMainFigureValue,
  workflowSiteBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields, howWeWorkProcess } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'

/**
 * ページの1文:
 * 現場は撮って送るだけ。名前付けも、足りない写真の催促も、事務所側で起きなくなります。
 */
const slug = 'construction-record'
const hubUrl = EXTERNAL_DEMO_URLS.construction
const reportUrl = EXTERNAL_DEMO_URLS.ocrConstruction
const opsUrl = EXTERNAL_DEMO_URLS.constructionOps

const siteDefaults = {
  sites: 5,
  minutesPerSiteDay: 40,
  hourlyYen: 4000,
  reworkRatePercent: 15,
  workDays: 240,
  recoverRate: 0.5,
  reworkFactor: 0.5,
  devLow: 2_000_000,
  devHigh: 6_000_000,
} as const

const roiConfig = createWorkflowSiteRoiConfig(siteDefaults, {
  label: '削減できる時間を試算する',
  href: '#roi',
  variant: 'primary',
})

export const constructionRecordLp: LpConfig = {
  delivery: {
    slug,
    kind: 'workflow',
    publicPath: `/demo/w/${slug}`,
    demoName: '建設の記録デモ',
    demoUrl: hubUrl,
    ogp: {
      title: '建設の記録デモ｜現場は撮って送るだけ、事務所の催促をなくす',
      description:
        '撮影して送るだけで、ファイル名を付けて所定のフォルダへ整理します。写真が足りないときは現場へ撮り直しを依頼します。1現場分の写真から試せます。',
      image: {
        src: '/images/lp/construction.png',
        alt: '建設の記録デモのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: {
    ...idealBrand,
    colors: {
      ...idealBrand.colors,
      primary: '#2B6FE0',
    },
  },
  hero: {
    headline: '現場は、撮って送るだけ。',
    subline:
      '写真の名前付けも、足りない分の催促も、いまは事務所側で発生しています。',
    body: '撮影して送るだけで、ファイル名を付けて所定のフォルダへ整理します。写真が足りないときは、現場へ撮り直しを依頼します。撮り方や保存先を大きく変える必要はありません。まずは1現場から、実際の写真を使って試せます。',
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
      src: '/images/cases/cases-hero-visual01.png',
      alt: '現場管理のダッシュボードとスマートフォンの操作画面',
      note: '※画像はイメージです',
      fit: 'contain',
      videoSrc: '/videos/demo-lp/construction-record.mp4',
    },
  },
  impact: {
    mainFigure: {
      lead: '試算の初期値では、5現場を抱える会社で年間',
      value: impactMainFigureValue(roiConfig),
      trail: 'が、写真の整理と入力に使われています。',
    },
    basis: workflowSiteBasisNote(siteDefaults),
  },
  problem: {
    label: 'いま発生している作業',
    headline: '同じ現場の情報を、何度も入力していませんか。',
    lead: '現場では、すでに必要な写真や情報が記録されています。しかし事務所では、その写真を確認して名前を付け、日報へ入力し、工事写真台帳へ貼り付ける作業が発生します。',
    cardHiddenItemNos: ['01', '02', '03', '04'],
    spotDiagrams: [
      {
        placement: 'after-lead',
        asset: {
          src: '/images/lp/construction/transcribe-cost.svg',
          alt: '同じ内容を、三度入力している（写真1枚からファイル名・日報・工事写真台帳へ）',
        },
      },
    ],
    items: [
      {
        no: '01',
        title: '現場で撮影する',
        body: '現場監督や職長が、工事写真や状況写真を撮影します。',
      },
      {
        no: '02',
        title: '写真を確認して、ファイル名を付ける',
        body: '事務所で写真を開き、内容に合わせて名前を付けます。',
      },
      {
        no: '03',
        title: '日報や朝礼資料へ入力する',
        body: '同じ内容を、報告用の書類へ入力します。',
      },
      {
        no: '04',
        title: '工事写真台帳へ貼り付ける',
        body: '台帳の形式に合わせて、写真を貼り付けたり整理し直します。',
      },
    ],
    summary: {
      headline: '撮った写真は1枚なのに、同じ内容を3回入力しています。',
      body: '現在の試算では、こうした作業に1現場あたり1日約40分が使われています。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline: '工事が進んだ後では、もう撮り直せません。',
    variant: 'peak',
    diagram: {
      src: '/images/lp/construction/cannot-reshoot-peak.svg',
      alt: '着工前・施工中の写真は、完成後には撮り直せない',
    },
    closing: {
      line1: '工事が進んだ後では、もう撮り直せません。',
      line2: '不足に気づくのが提出直前だと、もう間に合いません。',
    },
  },
  roleImpact: {
    label: '誰の仕事が変わるか',
    headline: '現場に催促の連絡をしなくてよくなります。',
    lead: '1枚の写真をめぐって、現場と事務所が何度もやりとりしています。',
    closing: '現場と事務所のやりとりが、写真の催促ではなく工事の話になります。',
    rows: [
      {
        role: '現場（現場監督・職長）',
        before: '撮影して、名前を付けて、指定のフォルダへ入れる',
        after: '撮影して送るだけ。足りない写真があれば、その場で撮り直しの依頼が届く',
      },
      {
        role: '事務所（内勤）',
        before: '写真を探し、名前を直し、足りない分を現場へ催促する',
        after: '届いた時点で分類されている。催促の連絡をしなくてよい',
      },
      {
        role: '所長・現場代理人',
        before: '提出直前に不足が見つかる',
        after: 'まだ撮り直せる時期に分かる',
      },
    ],
  },
  fit: {
    layout: 'prose',
    label: 'どのような会社に向いているか',
    headline:
      '撮る人、まとめる人、提出前に確認する人が分かれている会社向けです。',
    lead: '',
    conditions: [
      {
        no: '1',
        roleLabel: '現場',
        title: '現場で写真を撮る人がいる',
        body: '現場監督や職長が、工事写真・状況写真などを日常的に撮影している。',
      },
      {
        no: '2',
        roleLabel: '事務所',
        title: '事務所でまとめる人がいる',
        body: '撮影した本人とは別の担当者が、写真を整理して日報・台帳・提出書類を作成している。',
      },
      {
        no: '3',
        roleLabel: '確認',
        title: '提出前に確認する人がいる',
        body: '所長や現場代理人などが、元請・発注者・監査などへ提出する前に内容を確認している。',
      },
    ],
    affirm:
      'この3つに当てはまる場合、現場から提出までの作業をまとめて整理できます。',
    exclude:
      '一方、撮影から提出までを一人で行っている場合は、すべての機能を導入する必要はありません。写真整理など、必要な機能だけを利用できます。',
  },
  usecasesAfterResult: true,
  partsCatalogAfterResult: true,
  usecases: {
    layout: 'names',
    label: '記録業務',
    headline: '工種が違っても、写真を選んで名前を付ける作業は同じです。',
    lead: '総合建設から維持修繕まで、現場の写真を事務所で揃える仕事に使います。',
    items: [
      {
        industry: '総合建設・元請',
        icon: 'gc',
        scope: '工事写真台帳・日報・安全書類',
        quote:
          '協力会社から届く写真の名前や形式が異なる場合でも、同じ基準で整理したい',
        body: '提出元ごとに違う名前の写真を、同じ台帳へ揃えます。',
      },
      {
        industry: '専門工事・下請',
        icon: 'sub',
        scope: '施工写真・出来形・作業報告',
        quote: '元請ごとに様式が違うため、同じ写真を何度も整理し直している',
        body: '一度撮った写真から、提出先に合わせた書類を作ります。',
      },
      {
        industry: '設備・電気',
        icon: 'equip',
        scope: '施工前後写真・試験成績・引渡書類',
        quote: '施工後には確認できなくなる箇所の写真を、提出前に見落としたくない',
        body: '施工後には見えない箇所の、撮影漏れに早く気づきます。',
      },
      {
        industry: 'インフラ点検・維持修繕',
        icon: 'infra',
        scope: '点検写真・調書・変状記録',
        quote: '以前の写真をフォルダから探し出す作業に時間がかかる',
        body: '場所・部位・時期から、以前の写真を探せます。',
      },
    ],
  },
  partsCatalog: {
    label: '必要な機能から',
    headline: '写真整理だけでも使えます。',
    align: 'center',
    hideItems: true,
    diagram: {
      src: '/images/lp/construction/parts-to-flow.svg',
      alt: '写真整理・撮影漏れの確認・報告書作成を1つから入れて、現場から提出までつなげる',
    },
    footerCta: {
      label: 'デモで体験する',
      href: hubUrl,
      variant: 'primary',
    },
    items: [
      {
        no: '01',
        name: '写真整理',
        body: '現場から送られた写真を分類し、名前を付けて所定のフォルダへ整理します。写真整理だけで利用することもできます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '撮影漏れの確認',
        body: '必要な写真が届いていない場合に、現場へ撮り直しを依頼します。提出直前ではなく、まだ撮り直せる時期に知らせます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '03',
        name: '報告書作成',
        body: '整理した写真から、日報・朝礼資料・工事写真台帳などの下書きを作成します。同じ内容を入力し直す作業を減らします。',
        standalone: false,
        dependsOn: ['写真整理'],
        demoUrl: reportUrl,
      },
      {
        no: '04',
        name: '進捗管理',
        body: '現場ごとの提出状況と担当者を一覧で確認します。どの現場で確認や提出が止まっているかが分かります。',
        standalone: true,
        demoUrl: opsUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: '現場で撮った写真が、事務所ではこう並びます。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'field',
        label: '現場',
        surface: 'mobile',
        caption:
          '写真を撮影して送ります。写真だけでなく、チェック内容や図面なども次の作業へ引き継げます。',
        image: {
          src: '/images/lp/construction/result-field.png',
          alt: '現場：スマホで撮影し、記録を送る画面のイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'office',
        label: '内勤',
        surface: 'dashboard',
        caption:
          '送られてきた情報を整理・確認します。写真の分類、足りない写真の有無、報告書の作成状況を画面上で確認できます。',
        image: {
          src: '/images/lp/construction/result-office.png',
          alt: '内勤：PC画面で写真と進捗を確認するイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'deliverable',
        label: '成果物',
        surface: 'document',
        caption:
          '整理した情報から、報告書・工事写真台帳・写真一覧などを作成します。提出先や用途に合わせて、同じ記録から必要な形式を作成します。',
        image: {
          src: '/images/lp/construction/result-deliverable.png',
          alt: '成果物：日報・工事写真台帳など提出書類のイメージ',
          note: '※画像はイメージです',
        },
      },
    ],
  },
  roi: {
    label: '削減できる時間を試算',
    headline: '1現場あたり、いま何分かかっていますか。',
    lead: '会社や現場によって、写真整理や報告書作成にかかる時間は異なります。固定の数字ではなく、いまの状況を入れて試算します。',
    hideCta: true,
    config: roiConfig,
  },
  process: { ...howWeWorkProcess(), exitNote: undefined },
  faq: [
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '導入する機能、対象となる現場数、既存システムとの連携内容によって異なります。デモの体験と、最初の整理までは無償です。実際の対象業務を確認したうえで、本導入に必要な範囲と費用をご案内します。',
      featured: true,
      defaultOpen: true,
    },
    {
      category: 'coexistence',
      q: 'すでに工事写真管理ソフトを使っています。',
      a: '現在のソフトを残したまま利用する方法を検討できます。既存ソフトを提出先として利用し、必要な形式でデータを出力する構成も可能です。',
      featured: true,
    },
    {
      category: 'environment',
      q: '現在の写真の保存場所を変更する必要がありますか？',
      a: '原則として、現在の保存場所を利用する前提で検討します。共有サーバーやクラウドなど、現在の環境を確認したうえで接続方法を決めます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: '撮り直しの依頼は、どこまで自動で出ますか？',
      a: '現場と工種ごとに「必要な写真」を決めておき、届いていないものを知らせます。写真の中身の判断まで自動で確定はしません。判断に迷うものは、事務所の担当者に確認をお願いする形で届きます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: 'AIの判断をそのまま報告書に使うのですか？',
      a: '確認できる元の写真と結びつけて扱います。必要な記録が確認できない場合は、内容を推測して補うのではなく、記録が不足していることを表示します。',
      featured: true,
    },
    {
      category: 'small-start',
      q: '全社導入するのは不安です。',
      a: '1現場・1つの作業から始めます。実際にどれだけ時間が減るかを確認してから、対象を広げるかどうかを判断できます。',
      featured: true,
    },
    {
      category: 'fit',
      q: '工区名や工種の呼び方が現場ごとに違っても使えますか？',
      a: '対応できます。会社や現場で使われている工区名・工種名・略称などを登録し、実際の確認結果を反映しながら調整します。',
    },
    {
      category: 'running-cost',
      q: '写真が大量にあっても利用できますか？',
      a: '大量の写真を扱うことを想定しています。処理方法や費用については、写真の量や保存環境を確認したうえで設計します。',
    },
    {
      category: 'security',
      q: '現場写真を外部サービスへ保存できません。',
      a: '会社のクラウド環境内に構築する方法を含めて検討します。NDAの締結や、情報システム部門による審査にも対応します。',
    },
    {
      category: 'preparation',
      q: 'トライアル前に写真を整理する必要がありますか？',
      a: '必要ありません。実際の運用を確認するため、現在保存されている状態のままお預かりします。写真の選別、名前変更、フォルダ整理などを事前に行う必要はありません。',
    },
    {
      category: 'flow-fit',
      q: '会社独自の承認方法があります。',
      a: '現在の承認方法を確認したうえで設計します。特に「現場で記録する人」「事務所でまとめる人」「提出前に確認する人」の役割を確認し、現在の運用に合わせます。',
    },
    {
      category: 'partial',
      q: '写真整理だけでも利用できますか？',
      a: '利用できます。まず写真整理だけを試し、必要になった段階で機能を追加できます。',
    },
  ],
  finalCta: {
    headline: 'まずは、1現場分の写真で試せます。',
    body: '現在使っている写真を、そのままお預かりします。写真を選ぶ、名前を変更する、フォルダを整理するといった事前準備は必要ありません。実際の写真を使って整理を行い、どの作業をどれだけ減らせそうか確認します。効果を確認したうえで、本導入するかどうかを判断してください。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '現在の写真管理方法を前提に検討します',
    ],
    formTitle: '無料トライアルについて相談する',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：現場写真の整理と日報の作成に時間がかかる。1現場から試したい',
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
      href: '/contact?service=ai-consulting&intent=demo-lp&demo=construction-record',
      variant: 'secondary',
    },
  },
}
