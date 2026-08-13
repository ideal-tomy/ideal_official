import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createLaborRoiConfig,
  impactMainFigureValue,
  laborBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

/**
 * ページの1文:
 * 定型の問い合わせにその場で答え、必要なときだけ有人へつなぐ。小売・サービスの応対負担を減らす。
 * 主軸: CS / 需要予測は副題。
 */
const slug = 'retail-support'
const hubUrl = EXTERNAL_DEMO_URLS.retail
const galleryPredict = `${GALLERY_BASE}/data-to-prediction`
const galleryWorkflow = `${GALLERY_BASE}/workflow-to-automation`

const labor = {
  people: 20,
  minutesPerDay: 50,
  hourlyYen: 2500,
  workDays: 300,
  recoverRate: 0.5,
  devLow: 1_800_000,
  devHigh: 4_000_000,
} as const

const roiConfig = createLaborRoiConfig(labor, {
  label: '削減できる時間を試算する',
  href: '#roi',
  variant: 'primary',
})

export const retailSupportLp: LpConfig = {
  delivery: {
    slug,
    kind: 'workflow',
    publicPath: `/demo/w/${slug}`,
    demoName: '小売・サービス 案内サポートデモ',
    demoUrl: hubUrl,
    ogp: {
      title: '小売・サービス案内｜定型の問い合わせにその場で答える',
      description:
        '商品・予約・返品などよくある質問に、チャット案内で答えます。必要なときだけ有人へつなげます。',
      image: {
        src: '/images/lp/retail.png',
        alt: '小売・サービス案内デモのイメージ',
      },
    },
    noindex: false,
    trackReferrer: true,
  },
  brand: idealBrand,
  hero: {
    headline: 'よくある問い合わせに、人が毎回答えなくてよい。',
    subline:
      '営業時間外や混雑時に案内が止まると、取りこぼしが起きる。',
    body: '業種別のチャット案内で、定型の質問にその場で答え、必要なときだけ有人対応へつなげます。応対の負担を減らし、取りこぼしを減らすことを目指します。',
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
      src: '/images/lp/retail.png',
      alt: '店舗・サービス案内のイメージ',
      note: '※画像はイメージです',
      fit: 'contain',
      videoSrc: '/videos/demo-lp/retail-support.mp4',
    },
  },
  impact: {
    mainFigure: {
      lead: '試算の初期値では、応対に関わる20人で',
      value: `年間 ${impactMainFigureValue(roiConfig)}`,
      trail: 'が、定型の問い合わせ対応に使われています。',
    },
    basis: laborBasisNote(labor),
    metrics: [
      { value: '50分', label: '1人・1日あたりの定型対応（試算初期値）' },
      { value: '¥0', label: '体験は無償' },
      { value: '24時間', label: '定型案内の窓口を広げやすい' },
      { value: '3〜5ヶ月', label: '投資回収の目安' },
    ],
  },
  problem: {
    label: 'いま発生している作業',
    headline: '同じ質問に、何度も人が答えていませんか。',
    lead: '商品・予約・返品・営業時間など、答え方が決まっている問い合わせほど、人の時間を食います。',
    cardHiddenItemNos: ['01', '02', '03', '04'],
    spotDiagrams: [
      {
        placement: 'after-lead',
        asset: {
          src: '/images/lp/retail/same-faq-many-hands.svg',
          alt: '同じ答えなのに、チャネルごとに人が毎回説明している',
        },
      },
    ],
    items: [
      {
        no: '01',
        title: '問い合わせが来る',
        body: '電話・チャット・SNS・店頭で同じ質問が繰り返される。',
      },
      {
        no: '02',
        title: '人が確認して答える',
        body: '在庫・ルール・FAQを探しながら、毎回同じ説明をする。',
      },
      {
        no: '03',
        title: '時間外に取りこぼす',
        body: '営業時間外や混雑時に、返答が遅れ機会損失になる。',
      },
      {
        no: '04',
        title: '複雑な案件に手が回らない',
        body: '定型対応で埋まり、本当に人が必要な案件が後回しになる。',
      },
    ],
    summary: {
      headline: '定型は仕組みに任せ、人が本来やる仕事に時間を戻します。',
      body: '一次案内をそろえると、有人対応の質が上がりやすくなります。',
    },
  },
  recurringProblems: {
    label: 'よく起きる問題',
    headline: '時間外や混雑時に、定型案内が止まると機会が消える。',
    diagram: {
      src: '/images/lp/retail/after-hours-drop.svg',
      alt: '閉店後の問い合わせは、その瞬間に取りこぼす',
    },
    closing: {
      line1: '翌朝の返信では、その瞬間の取りこぼしは戻りません。',
      line2: '定型案内が止まると、機会がその場で消えます。',
    },
  },
  fit: {
    label: 'どのような店舗・サービスに向いているか',
    headline: '「よくある質問」が反復しているところに向いています。',
    lead: '次のような状況に近いほど効きます。',
    scopeNote:
      '業種ごとに案内シナリオを合わせます。最初から全チャネル・全商品を対象にする必要はありません。',
    conditions: [
      {
        no: '1',
        roleLabel: '顧客',
        title: '定型の問い合わせが多い',
        body: '商品・予約・返品・時間帯など、答えの型がある質問が反復する。',
      },
      {
        no: '2',
        roleLabel: '担当',
        title: '有人窓口の負担が大きい',
        body: '電話やチャットが、同じ説明で埋まっている。',
      },
      {
        no: '3',
        roleLabel: 'つなぎ',
        title: '複雑な案件は人に渡したい',
        body: '自動で完結しきれないものは、エスカレーションしてよい。',
      },
    ],
    affirm:
      '3つ当てはまるなら、一次案内を自動化する価値が出やすいです。',
    exclude:
      'ほぼ一対一の高度なカウンセリングのみ、商品・ルールが日々激変しFAQ化できない場合は優先度が下がります。',
  },
  usecases: {
    label: '業務ごとの利用例',
    headline: '案内が止まらない店舗・サービスへ。',
    lead: '小売・サービスで、定型応対を仕組みに寄せる例です。需要予測は副次的な活用として触れます。',
    items: [
      {
        industry: '店舗・EC',
        icon: 'shop',
        scope: '商品・返品・配送',
        quote: '同じ返品ルールを、毎日繰り返し説明している',
        body: 'チャットで一次回答し、例外だけ有人へ回します。',
      },
      {
        industry: '予約系サービス',
        icon: 'book',
        scope: '予約・変更・キャンセル',
        quote: '電話が予約変更で埋まる',
        body: '定型の手順を案内し、混雑時の取りこぼしを減らします。',
      },
      {
        industry: '店舗運営',
        icon: 'ops',
        scope: '混雑・時間外',
        quote: '閉店後の問い合わせが翌朝の仕事になる',
        body: '時間外でも定型案内を返し、翌朝の仕分けを軽くします。',
      },
      {
        industry: '発注・需要（副）',
        icon: 'forecast',
        scope: 'データ → 予測',
        quote: '感覚だけの発注を、材料付きにしたい',
        body: '需要予測は別パターンとして体験できます（主軸は案内）。',
      },
    ],
    more:
      '案内の型が固まっていれば、業種を問わず同じ考え方を適用できます。',
  },
  partsCatalog: {
    label: '必要な機能から導入できます',
    headline: 'まずは案内デモから触れます。',
    lead: '定型応対の削減が主。需要予測は必要なら追加で。',
    diagram: {
      src: '/images/lp/retail/guide-to-handoff-flow.svg',
      alt: '定型は自動、例外だけ有人へ',
    },
    closing: '案内だけ・予測だけの部分導入も可能です。',
    items: [
      {
        no: '01',
        name: 'カスタマーサポート・チャット',
        body: '業種別の案内チャットで、定型問い合わせへの応答を体験できます。',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: 'データ → 予測',
        body: '需要・来客などの予測と要因提示のパターンを体験できます（副題）。',
        standalone: true,
        demoUrl: galleryPredict,
        lpUrl: galleryPredict,
      },
      {
        no: '03',
        name: '業務 → 自動化',
        body: '受信から登録・通知など、定型フローを自動化する体験です。',
        standalone: true,
        demoUrl: galleryWorkflow,
        lpUrl: galleryWorkflow,
      },
    ],
  },
  resultTabs: {
    sectionLabel: '実際の利用イメージ',
    headline: '質問 → 自動案内 → 必要なら有人。',
    note: '※掲載画面はイメージです。',
    tabs: [
      {
        id: 'field',
        label: '顧客',
        surface: 'mobile',
        caption: 'チャットやウェブから、よくある質問を入力します。',
        image: {
          src: '/images/lp/customer.png',
          alt: '顧客が問い合わせるイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'office',
        label: '案内',
        surface: 'dashboard',
        caption: '定型の答えを即返し、スコアや履歴を残せます。',
        image: {
          src: '/images/lp/retail.png',
          alt: '自動案内のイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'deliverable',
        label: '有人',
        surface: 'document',
        caption: '複雑な案件だけ、担当者へ引き継ぎます。',
        image: {
          src: '/images/lp/workflow_prosess.png',
          alt: '有人引き継ぎのイメージ',
          note: '※画像はイメージです',
        },
      },
    ],
  },
  comparison: {
    label: '既存の窓口を全部やめなくてよい',
    headline: '定型だけ切り出し、有人は残します。',
    lead: '電話や店頭を捨てる話ではなく、同じ説明の反復を減らします。',
    columns: {
      common: '一般的なやり方',
      ours: 'この仕組み',
    },
    rows: [
      {
        point: '定型の答え',
        common: '人が毎回説明',
        ours: '案内シナリオで即答',
      },
      {
        point: '時間外',
        common: '翌朝まで待つ',
        ours: '定型は先に返せる',
      },
      {
        point: '例外',
        common: '同じ列で待つ',
        ours: '有人へエスカレーション',
      },
      {
        point: '導入',
        common: '全チャネル同時',
        ours: 'FAQが多い導線から',
      },
    ],
    fairnessNote:
      'すべての問い合わせを無人化する前提ではありません。案内内容の正確さは運用と更新に依存します。',
  },
  growth: {
    label: '使いながら、質問と答えを育てます',
    headline: '実際に来た質問で、シナリオを更新します。',
    lead: '最初から完璧なFAQは不要です。運用しながら精度と範囲を広げます。',
    cycles: [
      {
        no: '1',
        title: '未解決を集める',
        body: '答えられなかった質問を分類し、シナリオに足します。',
      },
      {
        no: '2',
        title: '有人の話を減らす',
        body: '人だけが知っている答えを、案内に移します。',
      },
      {
        no: '3',
        title: 'チャネルを広げる',
        body: '効いた型を、他の接点や店舗にも広げます。',
      },
    ],
    closing: '案内品質は、継続的な更新で保ちます。',
  },
  roi: {
    label: '削減できる時間を試算',
    headline: '定型応対の時間から、効果を試せます。',
    lead: '人数と1日あたりの対応時間を動かして、近い数字を確認できます。',
    config: roiConfig,
  },
  process: {
    label: '導入方法',
    headline: 'まず体験し、よくある質問から載せます。',
    lead: '全商品・全チャネルを一度に決める必要はありません。',
    steps: [
      {
        no: '01',
        title: 'デモで体験する',
        costLabel: '費用：無償',
        body: 'カスタマーサポート系デモで、定型案内の感覚を確かめます。',
      },
      {
        no: '02',
        title: 'FAQと導線を決める',
        costLabel: 'ここまで費用ゼロに近い',
        body: '一番多い質問と、有人へ渡す条件を整理します。',
      },
      {
        no: '03',
        title: '小さく公開する',
        costLabel: '本導入・運用',
        body: '一部導線から公開し、ログを見ながら広げます。',
      },
    ],
    exitNote: '体験だけで終えても問題ありません。',
    detailHref: '/flow#how-we-work',
    detailLabel: '導入の流れの詳細を見る →',
  },
  faq: [
    {
      category: 'fit',
      q: '業種によって案内文は変わりますか？',
      a: '変わります。業種・商品・ルールに合わせてシナリオを用意します。',
      defaultOpen: true,
    },
    {
      category: 'price',
      q: '料金はいくらですか？',
      a: '想定チャネル・質問量・連携により異なります。体験後に範囲と費用を提示します。',
    },
    {
      category: 'running-cost',
      q: '会話量が増えたら費用はどうなりますか？',
      a: 'プラットフォームと利用量に依存します。想定トラフィックを伺って見積もります。',
    },
    {
      category: 'environment',
      q: '既存のECや予約システムと連携できますか？',
      a: '要件を伺い、可能な接続から段階的に進めます。',
    },
    {
      category: 'accuracy',
      q: '誤案内が心配です。',
      a: '有人エスカレーションと、禁止・確認ルールを設計に含めます。更新体制も前提です。',
    },
    {
      category: 'security',
      q: '顧客データの扱いはどうなりますか？',
      a: '要件と契約に合わせて設計します。NDAにも対応します。',
    },
    {
      category: 'coexistence',
      q: 'コールセンターを残したまま使えますか？',
      a: '使えます。定型だけ自動化し、有人は残す構成が標準です。',
    },
    {
      category: 'preparation',
      q: 'FAQがまだ整理されていません。',
      a: 'デモ後に、よくある質問の洗い出しから一緒に進められます。',
    },
    {
      category: 'small-start',
      q: '1サイト・1チャネルだけからできますか？',
      a: 'できます。小さく公開してから広げます。',
    },
    {
      category: 'partial',
      q: '需要予測だけ試したいです。',
      a: 'ギャラリーの「データ→予測」から体験できます。本ページの主軸は案内です。',
    },
  ],
  finalCta: {
    headline: 'まずは、定型案内がどう楽になるか試せます。',
    body: '無理な営業はしません。取りこぼしが気になるチャネルから、一緒に整理できます。',
    assurances: [
      '無理な営業は行いません',
      'NDAを締結できます',
      '有人窓口を残したまま始められます',
    ],
    formTitle: '案内自動化について相談する',
    formNote: '入力は約1分です。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：ECの返品問い合わせが多い。チャットから試したい',
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
