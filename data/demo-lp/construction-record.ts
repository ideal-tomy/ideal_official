import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createWorkflowSiteRoiConfig,
  impactMainFigureValue,
  workflowSiteBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields, howWeWorkFooterCta, howWeWorkProcess } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'

/**
 * ページの1文:
 * 現場で撮った写真を、事務所で何度も入力し直さずに、日報や工事写真台帳までつなげる。
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
      title: '建設の記録デモ｜現場写真の整理から報告書の作成まで',
      description:
        '現場で撮った写真を、事務所で何度も入力し直さずに、日報や工事写真台帳までつなげます。1現場から無償で試せます。',
      image: {
        src: '/images/lp/construction.png',
        alt: '建設の記録デモのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    headline: '現場写真の整理から、報告書の作成まで。',
    subline:
      '現場で撮影した写真を整理し、日報や工事写真台帳の作成につなげます。',
    body: '写真を撮る方法や、現在の保存先を大きく変える必要はありません。まずは1現場から、実際の写真を使って試すことができます。',
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
      lead: '試算の初期値では、5現場を抱える場合',
      value: `年間 ${impactMainFigureValue(roiConfig)}`,
      trail: 'の人件費が、写真の整理や入力作業に使われています。',
    },
    basis: workflowSiteBasisNote(siteDefaults),
    metrics: [
      { value: '40分', label: '1現場・1日あたりの整理や入力（試算初期値）' },
      { value: '¥0', label: '実証トライアルは無償' },
      { value: '1現場', label: 'まずは1現場から試せます' },
      { value: '3〜6ヶ月', label: '投資回収の目安' },
    ],
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
      headline:
        '内容は同じでも、提出する書類が変わるたびに入力や整理をやり直しています。',
      body: '現在の試算では、こうした作業に1現場あたり1日約40分が使われています。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline:
      '提出前に、写真の不足や使える画像かどうかが分かりにくい。',
    diagram: {
      src: '/images/lp/construction/cannot-reshoot.svg',
      alt: '着工前・施工中の写真は、完成後には撮り直せない',
    },
    closing: {
      line1: '工事が進んだ後では、もう撮り直せません。',
      line2:
        '写真の不足や不備に気づくのは、担当者の記憶や提出直前の確認に頼る形が多くなります。',
    },
  },
  fit: {
    label: 'どのような会社に向いているか',
    headline: '「撮る人」と「まとめる人」が分かれている会社に向いています。',
    lead: '特定の工種だけを対象にした仕組みではありません。次のような業務がある場合に利用できます。',
    scopeNote:
      '現在利用しているLINE、メール、Excel、紙、共有フォルダなどを、最初からすべて変更する必要はありません。',
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
  usecases: {
    label: '業務ごとの利用例',
    headline: '建設業のさまざまな記録業務で利用できます。',
    lead: '総合建設から維持修繕まで、現場で記録した情報を事務所で整理する業務で利用できます。',
    items: [
      {
        industry: '総合建設・元請',
        icon: 'gc',
        scope: '工事写真台帳・日報・安全書類',
        quote:
          '協力会社から届く写真の名前や形式が異なる場合でも、同じ基準で整理したい',
        body: '提出元ごとに違う名前・形式の写真を、同じ基準の台帳へ揃えます。提出前の確認や差し戻しにかかる作業を減らします。',
      },
      {
        industry: '専門工事・下請',
        icon: 'sub',
        scope: '施工写真・出来形・作業報告',
        quote: '元請ごとに様式が違うため、同じ写真を何度も整理し直している',
        body: '一度記録した内容をもとに、提出先に合わせた書類を作成します。元請ごとに同じ写真を整理し直す作業を減らします。',
      },
      {
        industry: '設備・電気',
        icon: 'equip',
        scope: '施工前後写真・試験成績・引渡書類',
        quote: '施工後には確認できなくなる箇所の写真を、提出前に見落としたくない',
        body: '必要な写真が揃っているかを確認し、撮影漏れに早い段階で気づけるようにします。特に、施工後には確認できなくなる箇所の記録に利用できます。',
      },
      {
        industry: 'インフラ点検・維持修繕',
        icon: 'infra',
        scope: '点検写真・調書・変状記録',
        quote: '以前の写真をフォルダから探し出す作業に時間がかかる',
        body: '場所・部位・時期などから過去の記録を確認できるようにします。経年比較に利用できます。',
      },
    ],
    more:
      'そのほか、解体・造園・プラント設備の定期整備など、現場で記録した情報を事務所で整理する業務にも利用できます。',
  },
  partsCatalog: {
    label: '必要な機能から導入できます',
    headline: 'すべての機能を一度に導入する必要はありません。',
    lead: '現在時間がかかっている作業から始めることができます。',
    diagram: {
      src: '/images/lp/construction/parts-to-flow.svg',
      alt: '写真整理・報告書作成・進捗管理を1つから入れて、現場から提出までつなげる',
    },
    closing:
      '必要に応じて1つだけ導入し、効果を確認してから対象を広げることができます。',
    footerCta: howWeWorkFooterCta,
    items: [
      {
        no: '01',
        name: '写真整理',
        body: '現場から集まった写真を分類し、名前を付けて整理します。写真整理だけで利用することもできます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '報告書作成',
        body: '整理した写真から、日報・朝礼資料・工事写真台帳などの下書きを作成します。写真を貼り直したり、同じ内容を入力し直したりする作業を減らします。',
        standalone: false,
        dependsOn: ['写真整理'],
        demoUrl: reportUrl,
      },
      {
        no: '03',
        name: '進捗管理',
        body: '現場ごとの提出状況と担当者を一覧で確認します。どの現場で確認や提出が止まっているかを確認できます。',
        standalone: true,
        demoUrl: opsUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: '現場・事務所・成果物を、ひとつの流れで確認できます。',
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
          '送られてきた情報を整理・確認します。写真の分類、必要な記録の確認、報告書の作成状況などを画面上で確認できます。',
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
  comparison: {
    label: '現在の運用をすべて変える必要はありません',
    headline: '時間がかかっている作業から、少しずつ導入します。',
    lead: '新しいシステムを導入するときに問題になりやすいのが、現場の作業が増えることです。この仕組みでは、最初からすべての現場・すべての機能を切り替えることを前提にしていません。',
    columns: {
      common: '一般的なやり方',
      ours: 'この仕組み',
    },
    rows: [
      {
        point: '導入する範囲',
        common: '全現場・全機能をまとめて変更する',
        ours: '時間がかかっている作業を1つ選んで始める',
      },
      {
        point: '現場での操作',
        common: '撮影時に分類や情報入力が必要になる',
        ours: '基本的には撮影して送る。整理はその後に行う',
      },
      {
        point: '作業が止まった場合',
        common: '電話やチャットで担当者へ確認する',
        ours: '現場ごとの状態を一覧で確認する',
      },
      {
        point: '差し戻し',
        common: '口頭やチャットで連絡する',
        ours: '差し戻した内容と履歴を残す',
      },
    ],
    fairnessNote:
      '現在使っている写真管理ソフトや共有フォルダを否定するものではありません。すでに問題なく運用できている部分はそのまま使い、時間がかかっている作業だけを対象にします。',
  },
  growth: {
    label: '使いながら、会社ごとのルールに合わせます',
    headline: '現場ごとの呼び方や分類方法を反映できます。',
    lead: '建設現場では、会社や現場によって工区名、工種名、略称などが異なります。そのため、最初からすべての写真を同じ方法で判断できることを前提にはしていません。',
    cycles: [
      {
        no: '1',
        title: '確認した内容を次回に反映する',
        body: '写真の分類や名前を担当者が確認し、正しい内容を記録します。同じ種類の写真を処理するときに、その確認結果を利用します。',
      },
      {
        no: '2',
        title: '現場で使われている言葉を登録する',
        body: '工区名や略称など、会社や現場で使われている言葉を登録できます。',
      },
      {
        no: '3',
        title: '写真不足の傾向を確認する',
        body: 'どの工種で、どのような写真が不足しやすいかを確認できます。必要に応じて、撮影方法や確認項目の見直しに利用できます。',
      },
    ],
    closing:
      '使い始めたあとも、御社の現場の言い方や運用に合わせて調整できます。',
  },
  roi: {
    label: '削減できる時間を試算',
    headline: '現在の作業時間から、削減効果を確認できます。',
    lead: '会社や現場によって、写真整理や報告書作成にかかる時間は異なります。そのため、固定された数字ではなく、現在の状況を入力して試算できます。',
    config: roiConfig,
  },
  process: howWeWorkProcess(),
  faq: [
    {
      category: 'fit',
      q: '現場ごとに写真の撮り方や呼び方が違っても使えますか？',
      a: '対応できます。会社や現場で使われている工区名・工種名・略称などを登録し、実際の確認結果を反映しながら調整します。',
      defaultOpen: true,
    },
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '導入する機能、対象となる現場数、既存システムとの連携内容によって異なります。最初の実証トライアルは無償です。実際の対象業務を確認したうえで、本導入に必要な範囲と費用をご案内します。',
    },
    {
      category: 'running-cost',
      q: '写真が大量にあっても利用できますか？',
      a: '大量の写真を扱うことを想定しています。処理方法や費用については、写真の量や保存環境を確認したうえで設計します。',
    },
    {
      category: 'environment',
      q: '現在の写真の保存場所を変更する必要がありますか？',
      a: '原則として、現在の保存場所を利用する前提で検討します。共有サーバーやクラウドなど、現在の環境を確認したうえで接続方法を決めます。',
    },
    {
      category: 'accuracy',
      q: 'AIの判断をそのまま報告書に使うのですか？',
      a: '確認できる元の写真と結びつけて扱います。必要な記録が確認できない場合は、内容を推測して補うのではなく、記録が不足していることを表示します。',
    },
    {
      category: 'security',
      q: '現場写真を外部サービスへ保存できません。',
      a: '会社のクラウド環境内に構築する方法を含めて検討します。NDAの締結や、情報システム部門による審査にも対応します。',
    },
    {
      category: 'coexistence',
      q: 'すでに工事写真管理ソフトを使っています。',
      a: '現在のソフトを残したまま利用する方法を検討できます。既存ソフトを提出先として利用し、必要な形式でデータを出力する構成も可能です。',
    },
    {
      category: 'preparation',
      q: 'トライアル前に写真を整理する必要がありますか？',
      a: '必要ありません。実際の運用を確認するため、現在保存されている状態のままお預かりします。写真の選別、名前変更、フォルダ整理などを事前に行う必要はありません。',
    },
    {
      category: 'small-start',
      q: '全社導入するのは不安です。',
      a: '1現場・1つの作業から始めます。実際にどれだけ時間が減るかを確認してから、対象を広げるかどうかを判断できます。',
    },
    {
      category: 'flow-fit',
      q: '会社独自の承認方法があります。',
      a: '現在の承認方法を確認したうえで設計します。特に「現場で記録する人」「事務所でまとめる人」「提出前に確認する人」の役割を確認し、現在の運用に合わせます。',
    },
    {
      category: 'partial',
      q: '写真整理だけでも利用できますか？',
      a: '利用できます。報告書作成や進捗管理まで導入する必要はありません。まず写真整理だけを試し、必要になった段階で機能を追加できます。',
    },
  ],
  finalCta: {
    headline: 'まずは、1現場分の写真で試せます。',
    body: '現在使っている写真を、そのままお預かりします。写真を選ぶ、名前を変更する、フォルダを整理するといった事前準備は必要ありません。実際の写真を使って整理を行い、どの作業をどれだけ減らせそうか確認します。実証トライアルは無償です。効果を確認したうえで、本導入するかどうかを判断してください。',
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
              '例：土木部の工事写真台帳と日報が対象。まず整理だけ試したい',
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
