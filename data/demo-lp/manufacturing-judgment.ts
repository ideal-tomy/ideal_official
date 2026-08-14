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
 * 質問すると、答えと、それがどの手順書のどこに書いてあるかが一緒に出ます。
 */
const slug = 'manufacturing-judgment'
const hubUrl = EXTERNAL_DEMO_URLS.manufacturingIdeal

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
      title: '製造の判断デモ｜聞くと、答えと手順書のページが出る',
      description:
        '規程や手順書を探す時間を減らします。質問に対して、答えと、それがどこに書いてあるかを一緒に表示します。デモで体験できます。',
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
    headline: '質問すると、答えと、手順書のページが出ます。',
    subline:
      '手順書はあるのに、どれが正しい版かを知っているのはベテランだけ、という状態になっていないか。',
    body: '現場や他部門からの質問に、答えだけでなく、根拠になった規程・手順書の箇所も一緒に表示します。古い版を見てしまう、誰に聞けばいいか分からない、といった理由で止まる時間を短くします。',
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
      lead: '試算の初期値では、問い合わせと資料探しに関わる40人で年間',
      value: impactMainFigureValue(roiConfig),
      trail: 'が、資料を探す時間と確認待ちに使われています。',
    },
    basis: laborBasisNote(labor),
  },
  problem: {
    label: 'いま発生している作業',
    headline: '答えは手順書に書いてあるのに、探すのに時間がかかっていませんか。',
    lead: '共有ドライブを開き、詳しい人に聞き、どこに書いてあったかは共有されないまま、同じ質問がまた来ます。',
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
        title: '質問が来る',
        body: '現場や他部門から、手順・優先順位・窓口についての問い合わせが来ます。',
      },
      {
        no: '02',
        title: '資料を探す',
        body: '共有ドライブ、紙の手順書、チャットの履歴を順番に探します。',
      },
      {
        no: '03',
        title: '詳しい人に聞く',
        body: 'ベテランに口頭で確認します。どの手順書に書いてあったかは、その場では残りません。',
      },
      {
        no: '04',
        title: 'その場で返す',
        body: '同じ質問がまた来ます。人によって答えが違うこともあります。',
      },
    ],
    summary: {
      headline: '答えが決まるまでの時間の大半は、探している時間です。',
      body: '答えと一緒に、どこに書いてあったかが残っていれば、次の人は同じ資料を探さずに済みます。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline: 'どこに書いてあったかが残らないと、同じ質問がまた来ます。',
    variant: 'peak',
    diagram: {
      src: '/images/lp/manufacturing/same-question-loop.svg',
      alt: '同じ質問が毎週戻る。根拠が残らないから',
    },
    closing: {
      line1: 'どこに書いてあったかが残らないと、同じ質問がまた来ます。',
      line2: '口頭で答えるたびに、次の人はまた最初から探し始めます。',
    },
  },
  roleImpact: {
    label: '誰の仕事が変わるか',
    headline: '同じ質問に、詳しい人が何度も答えなくてよくなります。',
    lead: '答えられる人が限られていると、質問が来るたびにその人の手が止まります。',
    closing:
      '判断そのものを置き換えるものではありません。同じ質問を何度も受けなくてよくする仕組みです。',
    rows: [
      {
        role: '聞く人（現場・他部門）',
        before: '誰に聞けばよいか探し、返事を待つ',
        after: '聞けば、答えと、どの手順書に書いてあるかが出る',
      },
      {
        role: '聞かれる人（ベテラン・管理者）',
        before: '同じ質問に、その都度自分の作業を止めて答える',
        after: '一度確認した答えが残り、次の人はそれを読む',
      },
      {
        role: '異動・中途で入った人',
        before: '誰に何を聞けばよいか分からない',
        after: '自分で調べて、根拠まで確認できる',
      },
    ],
  },
  fit: {
    layout: 'prose',
    label: 'どのような部署に向いているか',
    headline: '同じ質問が毎週のように来る部署向けです。',
    lead: '',
    scopeNote:
      '全社の文書をいきなり全部取り込む前提にはしません。対象にする文書の範囲と、誰が見られるかを決めてから進めます。',
    conditions: [
      {
        no: '1',
        roleLabel: '現場',
        title: '同じ問い合わせが繰り返される',
        body: '手順・優先順位・連絡先など、似た質問が毎週のように発生している。',
      },
      {
        no: '2',
        roleLabel: '文書',
        title: '規程や手順書が文書として存在する',
        body: '口頭だけの知識ではなく、参照できる文書がある（内容が古くても構いません）。',
      },
      {
        no: '3',
        roleLabel: '確認',
        title: '何を根拠に答えたかを残したい',
        body: '答えだけでなく、その根拠まで残す運用にしたい。',
      },
    ],
    affirm:
      'この3つに当てはまる場合、探す時間と、人によって答えが変わる状態を減らせます。',
    exclude:
      '文書がほとんどなく口頭だけで運用している場合、人が確認せずに回答を最終決定に使いたい場合、権限を決めずに機密文書まで横断検索したい場合は向きません。',
  },
  usecasesAfterResult: true,
  partsCatalogAfterResult: true,
  usecases: {
    layout: 'names',
    label: '判断業務',
    headline: '生産でも品質でも、聞かれることは「どれが正しい手順か」です。',
    lead: '生産現場から間接部門まで、探してから決める仕事に使います。',
    items: [
      {
        industry: '生産・現場',
        icon: 'plant',
        scope: '手順・優先順位',
        quote: 'どれが正しい手順書か、探すだけで時間が終わる',
        body: '質問に対して、該当する手順と、その箇所を表示します。',
      },
      {
        industry: '品質・QC',
        icon: 'qc',
        scope: '窓口・判断の分かれ目',
        quote: '誰に聞けばいいか分からず、ラインが止まる',
        body: '連絡先や優先順位を、文書に基づいて示します。',
      },
      {
        industry: '技術・設計',
        icon: 'eng',
        scope: '変更の影響範囲・規格',
        quote: '影響する範囲を、記憶をたどりながら調べている',
        body: '関連する文書を、短時間で見つけられます。',
      },
      {
        industry: '間接部門',
        icon: 'office',
        scope: '社内規程の問い合わせ',
        quote: '同じ規程の質問が、何度も総務に来る',
        body: '総務・人事の社内規程にも、同じ仕組みを使えます。',
      },
    ],
  },
  partsCatalog: {
    label: '必要な機能から',
    headline: '規程の検索だけでも使えます。',
    align: 'center',
    hideItems: true,
    diagram: {
      src: '/images/lp/manufacturing/ask-to-decide-flow.svg',
      alt: '答えと手順書のページが出て、その場で判断できる',
    },
    footerCta: {
      label: 'デモで体験する',
      href: hubUrl,
      variant: 'primary',
    },
    items: [
      {
        no: '01',
        name: '質問を受ける',
        body: '現場や他部門からの質問を、普段の言葉のまま受け取ります。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '根拠を示す',
        body: '答えと一緒に、どの規程・手順書のどこに書いてあるかを示します。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '03',
        name: '判断を残す',
        body: '人が確認して確定した答えを残し、次の同じ質問に使います。',
        standalone: true,
        demoUrl: hubUrl,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: '質問すると、画面にはこう出ます。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'field',
        label: '質問',
        surface: 'mobile',
        caption: '現場や他部門が、普段の言葉のまま聞きます。',
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
        caption: '要点が整理され、次の作業に使える形で出ます。',
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
        caption: '参照した規程・手順書の箇所も一緒に表示されます。',
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
    headline: '資料を探すのに使っている時間から計算します。',
    lead: 'ラインや部門によって、探す時間や確認待ちの長さは異なります。固定の数字ではなく、いまの状況を入れて試算します。',
    hideCta: true,
    config: roiConfig,
  },
  process: { ...howWeWorkProcess(), exitNote: undefined },
  faq: [
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '対象にする文書の量、利用する人数、権限の連携範囲によって異なります。デモの体験と、最初の整理までは無償です。本導入時に範囲と費用をご案内します。',
      featured: true,
      defaultOpen: true,
    },
    {
      category: 'coexistence',
      q: 'いまの文書管理システムは残せますか？',
      a: '残せます。保存場所はそのままにして、検索と回答の部分だけを足す構成も取れます。',
      featured: true,
    },
    {
      category: 'accuracy',
      q: '回答は必ず正しいですか？',
      a: '保証しません。根拠になった箇所を示したうえで、人が確認して確定する運用を前提にします。',
      featured: true,
    },
    {
      category: 'fit',
      q: 'ベテランの判断を置き換えるものですか？',
      a: 'いいえ。手順書に書いてあることを探す部分だけを引き受けます。書かれていないことの判断は、これまでどおり人が行います。',
      featured: true,
    },
    {
      category: 'small-start',
      q: '1ライン・1部門だけから始められますか？',
      a: 'できます。まず1部門で試し、効果を確認してから広げられます。',
      featured: true,
    },
    {
      category: 'security',
      q: '機密文書も検索できますか？',
      a: '誰がどの文書を見られるかを決めたうえで対象に含めます。権限を設計せずに全文書を横断させることはしません。',
      featured: true,
    },
    {
      category: 'fit',
      q: '手順書が古いままでも始められますか？',
      a: '始められます。ただし、どれが最新版かを決める作業とセットで進めるのが安全です。デモでは、探し方の仕組みだけ先に確認できます。',
    },
    {
      category: 'environment',
      q: '社外に文書を出せません。',
      a: '社内のサーバーや、外部とつながらない環境に置く構成も検討します。要件を伺ったうえで配置方法を決めます。',
    },
    {
      category: 'running-cost',
      q: '質問が増えると費用も増えますか？',
      a: '利用量と基盤の構成によって変わります。想定する利用量を伺ったうえで設計します。',
    },
    {
      category: 'preparation',
      q: '紙の手順書を全部スキャンし直す必要がありますか？',
      a: 'ありません。よく聞かれる範囲から対象を絞れば、最初から全件をデータ化する必要はありません。',
    },
    {
      category: 'partial',
      q: 'サイト上の検索だけ試したいのですが。',
      a: '問題ありません。まずサイト内で、質問して答えと根拠が返る形を確認できます。',
    },
  ],
  finalCta: {
    headline: 'まずは、聞いたら根拠が返ってくる形を試せます。',
    body: 'デモで体験できます。どの文書を対象にするかを一緒に決めたうえで、本導入するかどうかを判断してください。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '誰がどの文書を見られるかから設計します',
    ],
    formTitle: '製造・社内文書の検索について相談する',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder: '例：手順の問い合わせ対応が負担。まず体験したい',
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
