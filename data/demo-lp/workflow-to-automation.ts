import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainFigureValue,
  laborBasisNote,
} from '@/lib/demo-lp/roi-factory'
import {
  defaultFaq,
  defaultFinalCta,
  defaultProcess,
} from '@/lib/demo-lp/shared-blocks'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

const slug = 'workflow-to-automation'
const galleryUrl = `${GALLERY_BASE}/${slug}`

const labor = {
  people: 12,
  minutesPerDay: 50,
  hourlyYen: 3200,
  workDays: 240,
  recoverRate: 0.55,
  devLow: 2_000_000,
  devHigh: 5_500_000,
}

const roiConfig = createLaborRoiConfig(labor)

export const workflowToAutomationLp: LpConfig = {
  delivery: {
    slug,
    demoName: '業務ワークフロー自動化',
    demoUrl: galleryUrl,
    ogp: {
      title: '業務→自動化｜繰り返し作業を、一連の流れで代行する。',
      description:
        '受信から登録・通知まで、定型業務を流れごと代行。触って確かめられます。',
      image: {
        src: '/images/lp/workflow_prosess.png',
        alt: 'ワークフロー自動化のイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    eyebrow: '定型の後工程が多いチームのためのAI',
    headline: '繰り返しを、流れごと代行する。',
    subline: '受信・転記・通知が、毎日人手を奪っている。',
    body: 'メール確認から登録・通知まで同じ手順を繰り返すなら、流れごと自動化して人は例外処理に集中できます。',
    ctas: [
      { label: '削減額を60秒で試算する', href: '#roi', variant: 'primary' },
      { label: 'いますぐデモを触る', href: galleryUrl, variant: 'secondary' },
    ],
    badges: ['その場で体験可', 'NDA対応可', 'サンプル業務で開始'],
    visual: {
      src: '/images/lp/workflow_prosess.png',
      alt: 'ワークフロー自動化の画面イメージ',
      note: '※画像はイメージです',
    },
  },
  impact: {
    mainFigure: {
      lead: '定型処理に関わる12人のチームでは',
      value: impactMainFigureValue(roiConfig),
      trail: 'が消えている計算に',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '数秒', label: '回答までの目安' },
      { value: '0分', label: 'フォルダ探索の削減目標' },
      { value: '¥0', label: '体験デモの費用' },
      { value: '3〜6ヶ月', label: '回収期間の目安' },
    ],
  },
  pillars: [
    {
      icon: 'search',
      title: '聞ける',
      body: '自然な言葉で質問するだけで、関連箇所を横断して回答のたたき台が返ります。',
      highlight: ['自然な言葉'],
    },
    {
      icon: 'source',
      title: '根拠が残る',
      body: '回答だけでなく出典をセットで提示。原文プレビューで確認できます。',
      highlight: ['出典'],
    },
    {
      icon: 'try',
      title: '試せる',
      body: '簡易デモと本格デモで、導入前に「自分たちの規程で使えるか」を触れます。',
      highlight: ['導入前'],
    },
  ],
  problem: {
    label: 'コストの正体',
    headline: '会計帳簿には出ないが、毎日払っている。',
    lead: '規程はある。たどり着くまでの時間と、口頭のばらつきがコストです。',
    items: [
      {
        no: '01',
        title: '探す',
        body: '共有ドライブやチャット履歴をフォルダ単位で探索し、正解ページまでが遠い。',
      },
      {
        no: '02',
        title: '聞く・教える',
        body: '詳しい人に集中し、回答品質が属人化する。教える側の時間も削られる。',
      },
      {
        no: '03',
        title: '間違える',
        body: '古い版・口頭の記憶違いで運用がバラつく。後から根拠を追えない。',
      },
      {
        no: '04',
        title: '二度解く',
        body: '同じ質問が再発し、探索と確認が繰り返し発生する。',
      },
    ],
    summary: {
      headline: '足りないのは知識ではない。',
      body: '社内にある答えへ、短時間で・根拠付きでたどり着く手段が足りていません。',
    },
  },
  fit: {
    label: '効く条件',
    headline: '業種ではなく、いまの状態で見てください。',
    lead: '次の3つに当てはまるほど、この仕組みの効果が大きいです。',
    conditions: [
      {
        no: '01',
        title: '同じ問い合わせが繰り返し発生している',
        body: '総務・人事・現場リーダー・ヘルプデスクに、定型の質問が戻ってくる。',
      },
      {
        no: '02',
        title: '正本が文書として存在する',
        body: '規程・マニュアル・FAQがファイルやページとしてある（口頭だけではない）。',
      },
      {
        no: '03',
        title: '回答だけでなく根拠も揃えたい',
        body: '「どこに書いてあるか」まで示さないと現場が動けない場面が多い。',
      },
    ],
    affirm:
      '3つ当てはまるなら、この仕組みは御社の問い合わせ業務のために設計されています。',
    exclude:
      'だいたい合っているで足りる用途や、文書がほぼ無い組織なら、一般的なRAGや検索の方が十分な場合もあります。',
  },
  usecases: {
    label: '使い方の例',
    headline: '問いの形は業界を超えて同じです。',
    lead: '規程・マニュアル・手順書──「どこに書いてある？」が業務を止めている場所。',
    items: [
      {
        industry: 'バックオフィス',
        icon: 'building',
        scope: '就業規則・経費・テレワーク規程',
        quote: '有給は何日？　原文どこ？',
        body: '問い合わせ窓口の一次回答を、出典付きで揃えられます。',
      },
      {
        industry: '建設',
        icon: 'hardhat',
        scope: '安全衛生マニュアル・手順書',
        quote: 'この高さだと安全帯は必須だっけ',
        body: '現場の確認事項を、持ち歩きマニュアルから即時に照合できます。',
      },
      {
        industry: '製造',
        icon: 'factory',
        scope: '作業手順・品質基準・設備マニュアル',
        quote: 'この異常のときの手順ページは？',
        body: 'ライン停止につながる確認を、紙とベテラン依存から減らします。',
      },
      {
        industry: '専門職',
        icon: 'briefcase',
        scope: '社内指針・コンプラ文書',
        quote: 'このケース、うちの指針ではどう書く',
        body: '社内方針の検索と説明のたたき台を短時間で得られます。',
      },
    ],
    more: 'その他、教育・医療・小売の社内FAQなど、「文書はあるが探しにくい」業務全般に適用できます。',
  },
  mechanism: {
    label: '壁 × 技術',
    headline: '4つの壁を、4つの技術で壊します。',
    lead: '誰もが考えたが、多くがつまずいたところを方式で分解します。',
    diagram: {
      src: '/images/lp/technology_background.png',
      alt: 'ナレッジ検索の処理イメージ',
    },
    items: [
      {
        wall: '量: 文書が多すぎて読みきれない',
        techNo: 'TECH 01',
        techName: 'チャンク検索',
        body: '全文を毎回読ませず、質問に関連する断片だけを拾い上げます。',
        effect: '→ 何万ページあっても答えは薄まらない',
      },
      {
        wall: '根拠: 出典が残らない',
        techNo: 'TECH 02',
        techName: '出典リンク付き生成',
        body: '回答文と参照箇所を同時に返し、原文プレビューへつなぎます。',
        effect: '→ 「どこに書いてあるか」が手元に残る',
      },
      {
        wall: '権限: 見せてはいけない文書がある',
        techNo: 'TECH 03',
        techName: '権限フィルタ',
        body: '取り込みと検索の段階で、閲覧可能な範囲に絞り込みます。',
        effect: '→ 機密を広げすぎない前提で検索できる',
      },
      {
        wall: '陳腐化: 版が古いまま使われる',
        techNo: 'TECH 04',
        techName: '更新追従',
        body: '正本の差し替えに追従し、古い版を回答の根拠に残さない設計にします。',
        effect: '→ 使うほど新しい内容が前面に出る',
      },
    ],
  },
  resultShot: {
    caption: '4つの壁を壊すと、こうなります。',
    image: {
      src: '/images/lp/document_workflow.png',
      alt: '回答と根拠がセットで返る画面',
      note: '※画像はイメージです',
    },
    note: '質問から数秒で、回答＋出典。元文書で確認できます。',
  },
  comparison: {
    label: 'よくある失敗との違い',
    headline: '全文検索やチャットボットを試して失敗した御社へ。',
    lead: '製品名ではなく、手法の違いで比較します。',
    columns: {
      common: 'キーワード検索 / 汎用チャット',
      ours: '根拠付きナレッジ検索',
    },
    rows: [
      {
        point: '答えの出し方',
        common: 'ヒット一覧 or 出典なしの会話',
        ours: '回答文＋出典のセット',
      },
      {
        point: '根拠の確認',
        common: '自分でファイルを開いて探す',
        ours: '原文プレビューまで一気通貫',
      },
      {
        point: '権限',
        common: '共有フォルダ任せになりがち',
        ours: '検索前に閲覧範囲を制限',
      },
      {
        point: '運用とコスト',
        common: '使うほどノイズが増え整理コスト増',
        ours: '正本更新に追従し、手入れが質問ログにもなる',
      },
      {
        point: '導入の試し方',
        common: '資料とPoC契約が先',
        ours: 'まずは触れるデモから始められる',
      },
    ],
    fairnessNote:
      'キーワード検索や汎用チャットが悪いわけではありません。文書量が少なく、根拠提示が不要な用途なら十分な場合もあります。',
  },
  growth: {
    label: '継続価値',
    headline: '使うことが、そのまま手入れになる。',
    lead: '単発のチャットではなく、問い合わせの資産化を狙います。',
    cycles: [
      {
        no: '01',
        title: '質問が集まる',
        body: '現場の言葉で聞かれた論点がログに残る。',
      },
      {
        no: '02',
        title: '正本を直す',
        body: '曖昧だった規程を更新し、次の回答品質が上がる。',
      },
      {
        no: '03',
        title: '再発が減る',
        body: '同じ質問の手さがしと口頭依存が減っていく。',
      },
    ],
    closing:
      '放っておくと版が古びる。使い、直し、また聞くことで、安く・新しく保てます。',
  },
  roi: {
    label: '60秒試算',
    headline: '削減額を、その場で掴む。',
    lead: '人数と1日あたりのロス時間を動かすと、年間ロスと取り戻せる金額の目安が出ます。',
    config: roiConfig,
  },
  process: defaultProcess('ワークフロー自動化'),
  faq: defaultFaq({
    fit: '受信・登録・通知など、手順が固定された業務が繰り返される組織向きです。',
    price:
      '対象業務のステップ数と連携先で変わります。試算とデモで範囲を決めてから見積もります。',
    security: '扱うデータの機密度に応じて、権限とログを設計します。',
    accuracy:
      '例外は人に渡す設計が前提です。完全無人化が目的ではありません。',
    prep: '対象業務の手順書き起こしと、代表的な入力例があると早いです。',
    small: '1業務フローから小さく始められます。',
    env: 'メール・ストレージ・業務システムとの連携を想定できます。',
    coexistence: '人手処理と併用し、定型部分から置き換えられます。',
  }),
  finalCta: defaultFinalCta(galleryUrl),
}
