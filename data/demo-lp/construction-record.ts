import type { LpConfig } from '@/lib/demo-lp/types'
import { idealBrand } from '@/lib/demo-lp/brand-ideal'
import {
  createWorkflowSiteRoiConfig,
  impactMainFigureValue,
  workflowSiteBasisNote,
} from '@/lib/demo-lp/roi-factory'
import { defaultFormFields } from '@/lib/demo-lp/shared-blocks'
import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'

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
  label: 'この数字を、無償トライアルで実測する',
  href: '#contact',
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
      title: '建設の記録デモ｜写真は、もう撮れている。',
      description:
        '現場写真の整理・日報・朝礼・提出状況まで。戻ってからの転記作業を短くする建設向けワークフローAI。',
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
    eyebrow:
      '現場写真・日報・朝礼──「戻ってからの作業」に追われる建設業へ',
    headline: '写真は、もう撮れている。',
    subline: '整理と転記に、毎晩が消えている。',
    body: '現場で撮った写真を、日付と工区を思い出しながら名前をつけ直し、報告書へ貼り直す。現場が終わってからが、もうひとつの仕事になっています。撮る側の手順を変えずに、整理・転記・提出までを短時間で終わらせます。',
    highlight: ['整理と転記', '撮る側の手順を変えずに'],
    ctas: [
      {
        label: '削減時間を60秒で試算する →',
        href: '#roi',
        variant: 'primary',
      },
      {
        label: 'デモを触ってみる ↗',
        href: hubUrl,
        variant: 'secondary',
      },
    ],
    badges: [
      '実証トライアルは無償',
      'NDA締結・秘密厳守',
      '撮り方・保存先の変更は不要',
    ],
    visual: {
      src: '/images/lp/autophoto.png',
      alt: '現場から送った写真が命名・分類済みで並んだ状態',
      note: '※画像はイメージです',
    },
  },
  impact: {
    mainFigure: {
      lead: '5現場を抱える工務では、「整理・転記・催促」だけで',
      value: impactMainFigureValue(roiConfig),
      trail: 'が消えている計算に',
    },
    basis: workflowSiteBasisNote(siteDefaults),
    metrics: [
      {
        value: '即日',
        label: '撮影から報告書提出まで（現状2〜3日）',
      },
      { value: '0回', label: '写真の名前をつけ直す回数' },
      { value: '¥0', label: '実証トライアル' },
      { value: '3〜6ヶ月', label: '投資回収の目安' },
    ],
  },
  pillars: [
    {
      icon: 'send',
      title: '送るだけで、整う',
      body: '現場は撮って送るだけ。日付・工区・工種を読み取り、意味のある名前と保存先に振り分けます。撮り方も、いま使っているスマホも変えません。',
    },
    {
      icon: 'draft',
      title: '報告書は、下書きから始まる',
      body: '整理された写真が、そのまま日報・朝礼資料・写真台帳の下書きになります。白紙から打ち直す作業がなくなります。',
    },
    {
      icon: 'visible',
      title: '出ていない現場が、見える',
      body: '誰の、どの現場が止まっているかが一覧で分かります。電話とLINEで追いかける時間がなくなります。',
    },
  ],
  problem: {
    label: 'コストの正体',
    headline: '「現場は終わったのに、仕事が終わらない」を生む 4つの継ぎ目',
    lead: 'どれも会計帳簿には出てきません。しかし毎日、残業と休日出勤という形で支払われ続けています。',
    cardHiddenItemNos: ['01', '04'],
    spotDiagrams: [
      {
        placement: 'after-lead',
        asset: {
          src: '/images/lp/construction/transcribe-cost.svg',
          alt: '同じ内容を、三度書き直している（写真1枚からファイル名・日報・台帳へ）',
        },
      },
      {
        placement: 'before-summary',
        asset: {
          src: '/images/lp/construction/cannot-reshoot.svg',
          alt: '後から撮り直せる写真は1枚もない（着工前・施工中・完成の不可逆性）',
        },
      },
    ],
    items: [
      {
        no: '01',
        title: '転記するコスト',
        body: '撮った写真に、日付・工区・工種を思い出しながら名前をつけ直す。同じ情報を、写真・日報・台帳へ三度打ち込む。',
      },
      {
        no: '02',
        title: '待つコスト',
        body: '現場が事務所に戻るまで、報告は一歩も動かない。夜にまとめて処理するため、翌日以降にずれ込む。',
      },
      {
        no: '03',
        title: '催促するコスト',
        body: '誰の、どの現場が出ていないか分からない。探して、電話して、LINEで追う時間が管理側に積み上がる。',
      },
      {
        no: '04',
        title: '差し戻るコスト',
        body: '提出前や監査で写真の不足が発覚する。工事が進んだ後では撮り直せないため、書類の辻褄合わせに時間を使う。',
      },
    ],
    summary: {
      headline: '共通点は、どれも担当者の能力の問題ではないこと。',
      body: '情報は現場で出そろっています。足りないのは、それが次の人へ意味を持ったまま渡る仕組みです。継ぎ目の問題は、継ぎ目の設計で解決できます。',
    },
  },
  fit: {
    label: '効く条件',
    headline: 'この仕組みが効く会社は、はっきりしています',
    lead: '業種でも工種でもなく、「誰から誰へ渡るか」で決まります。',
    scopeNote:
      '工種・現場数・提出様式・いま使っているツール（LINE、メール、Excel、紙）は一切問いません。',
    conditions: [
      {
        no: '1',
        roleLabel: '現場監督・職長',
        title: '現場で撮る人がいる',
        body: '工事写真・状況写真を、スマホやデジカメで日常的に記録している。',
      },
      {
        no: '2',
        roleLabel: '内勤・工務',
        title: '事務所でまとめる人が、別にいる',
        body: '撮った本人とは違う誰かが、報告書・台帳・提出書類の形にしている。',
      },
      {
        no: '3',
        roleLabel: '所長・現場代理人',
        title: '出す前に確認する立場がある',
        body: '提出先（元請・発注者・監査）へ出す前に、内容を見て通す/戻す判断をしている。',
      },
    ],
    affirm:
      '3つが揃っているなら、この仕組みは乗ります。バトンが一方向に渡る現場なら成立するように設計されています。',
    exclude:
      '逆に、一人親方で撮影から提出まで一人で完結している場合や、写真提出の義務がない工事だけを扱っている場合は、フロー化の価値は出ません。その場合は写真の整理機能だけで十分です。',
  },
  usecases: {
    label: '立場別の読み替え',
    headline: '同じ仕組みを、立場ごとにこう使います',
    lead: '総合建設から維持修繕まで、「現場で撮って、事務所でまとめる」構造があれば効きます。',
    items: [
      {
        industry: '総合建設（元請）',
        icon: 'gc',
        scope: '工事写真台帳・日報・安全書類',
        quote:
          '協力会社から上がってくる写真の形式が、毎回バラバラで揃わない',
        body: '提出元ごとに違う名前・形式の写真を、同じ基準の台帳へ揃えます。差し戻しの往復が減ります。',
      },
      {
        industry: '専門工事（下請）',
        icon: 'sub',
        scope: '施工写真・出来形・作業報告',
        quote: '元請ごとに様式が違うから、同じ現場の写真を何度も作り直している',
        body: '記録は一度だけ。提出先ごとの様式へは、同じ記録から出し分けます。',
      },
      {
        industry: '設備・電気',
        icon: 'equip',
        scope: '施工前後写真・試験成績・引渡書類',
        quote:
          '隠蔽部の写真、後から撮れないのに撮り忘れが分かるのが提出直前',
        body: '必要な記録が揃っているかを、工程が進む前にチェックできる形にします。',
      },
      {
        industry: 'インフラ点検・維持修繕',
        icon: 'infra',
        scope: '点検写真・調書・変状記録',
        quote: '同じ箇所の去年の写真を探すのに、フォルダを何時間も遡る',
        body: '場所・部位・時期で記録が引けるため、経年比較がその場でできます。',
      },
    ],
    more: 'このほか、解体・造園・プラント設備の定期整備など、「現場で撮って、事務所でまとめる」構造がある業務であれば、同じ仕組みが効きます。',
  },
  partsCatalog: {
    label: '部品カタログ',
    headline: 'このフローは、3つの機能でできています',
    lead: 'すべてを同時に入れる必要はありません。',
    diagram: {
      src: '/images/lp/construction/parts-to-flow.svg',
      alt: '部品が継ぎ目を埋め、つなぐと現場から提出まで一本になる',
    },
    closing: '1つだけ入れることも、全部つなぐこともできます。',
    items: [
      {
        no: '01',
        name: '写真の仕事化',
        body: '散在写真を分類・命名して振り分け',
        seamRemoved: '01 転記 — 現場→事務所で「名前をつけ直す」作業',
        standalone: true,
        demoUrl: hubUrl,
      },
      {
        no: '02',
        name: '報告書・朝礼下書き',
        body: '整理済み写真から日報・台帳の下書きを生成',
        seamRemoved: '01 転記 — 写真→報告書の「貼り直し・打ち直し」',
        standalone: false,
        dependsOn: ['写真の仕事化'],
        demoUrl: reportUrl,
      },
      {
        no: '03',
        name: '現場オペ画面',
        body: '提出状況と担当が一覧で見える業務アプリ',
        seamRemoved: '02 待つ / 03 催促 — 「誰で止まっているか」を探す時間',
        standalone: true,
        demoUrl: opsUrl,
      },
    ],
  },
  mechanism: {
    label: '連結の仕組み',
    headline: '記録が仕事にならない 4つの壁を、4つの技術で壊します',
    lead: '現場監督 →（記録）→ 内勤・工務 →（確認依頼）→ 所長 →（提出）。戻りは「内容の差戻し」「記録不足の差戻し」の2種類に固定します。',
    diagram: {
      src: '/images/lp/technology_background.png',
      alt: '記録が次の担当へ渡るバトンパスのイメージ',
    },
    items: [
      {
        wall: '意味: 撮った本人にしか、何の写真か分からない',
        techNo: 'TECH 01',
        techName: '現場の文脈を読み取って命名する',
        body: '写真の中身と撮影情報から、工区・工種・状況を推定し、社内の呼び方で名前をつけます。',
        effect: '→ 撮り方を変えなくても、事務所で意味が通る',
      },
      {
        wall: '様式: 提出先ごとに、様式がバラバラ',
        techNo: 'TECH 02',
        techName: '記録と様式を切り離す',
        body: '記録は一度だけ。日報・台帳・朝礼資料へは、同じ記録から様式ごとに出し分けます。',
        effect: '→ 同じ現場の写真を、二度作り直さない',
      },
      {
        wall: '停滞: 誰で止まっているか分からない',
        techNo: 'TECH 03',
        techName: '状態を共通の言葉に揃える',
        body: '撮影済 / 整理済 / 下書き / 確認待ち / 提出済 に統一し、差戻しは2種類だけに固定します。工程名は御社の呼び方に差し替えます。',
        effect: '→ 止まっている現場が、探さなくても分かる',
      },
      {
        wall: '信用: AIが作った報告書は、そのまま出せない',
        techNo: 'TECH 04',
        techName: '元の写真と必ず紐づける',
        body: '生成した記述には、根拠になった写真が必ず紐づきます。裏づけのない記述は出さず、「記録が不足しています」と返します。',
        effect: '→ 作り話は、構造的に出せない',
      },
    ],
  },
  resultTabs: {
    note: '※画像はイメージです。撮って送るところから、提出できる形になるまでを1本の流れで確認できます。',
    tabs: [
      {
        id: 'field',
        label: '現場',
        surface: 'mobile',
        caption:
          '現場で撮って送るだけ。写真・チェック・図面がそのまま次の工程へ渡る。',
        image: {
          src: '/images/lp/construction/result-field.png',
          alt: '現場：スマホで撮影し、現場データがデジタルへ流れるイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'office',
        label: '内勤',
        surface: 'dashboard',
        caption:
          '事務所で一覧・グラフ・レポートへ整理。滞留と担当が見える状態に。',
        image: {
          src: '/images/lp/construction/result-office.png',
          alt: '内勤：PC画面で現場データを整理・確認するイメージ',
          note: '※画像はイメージです',
        },
      },
      {
        id: 'deliverable',
        label: '成果物',
        surface: 'document',
        caption:
          '報告書・写真台帳・分析ビューなど、提出できる形に出し分けられる。',
        image: {
          src: '/images/lp/construction/result-deliverable.png',
          alt: '成果物：報告書・写真ギャラリー・台帳など提出物のイメージ',
          note: '※画像はイメージです',
        },
      },
    ],
  },
  comparison: {
    label: 'よくある失敗との違い',
    headline: '「写真管理アプリを入れたが、現場が使わなかった」御社へ',
    lead: '導入単位と現場負担の設計が、定着を分けます。',
    columns: {
      common: 'よくある進め方',
      ours: '本手法',
    },
    rows: [
      {
        point: '導入単位',
        common: '全現場・全機能を一斉に切り替える',
        ours: '詰まっている継ぎ目1つから。部品単位で足せる',
      },
      {
        point: '現場の負担',
        common: '撮影時にタグ付け・分類の入力が増える',
        ours: '撮って送るだけ。分類は受け取った側で自動',
      },
      {
        point: '止まったとき',
        common: '誰かが気づいて電話・LINEで催促する',
        ours: '滞留日数と担当が自動で並ぶ',
      },
      {
        point: '差戻し',
        common: '口頭・チャットで戻り、記録が残らない',
        ours: '2種類に固定され、履歴が残る',
      },
      {
        point: '運用とコスト',
        common: '様式変更のたびに改修見積もり',
        ours: '様式・呼び方はCONFIG差替で吸収する範囲を明示',
      },
    ],
    fairnessNote:
      '既存の写真管理アプリや共有フォルダが悪いわけではありません。継ぎ目が1つしかない業務——撮った人がそのまま提出するなら、いまのやり方で十分です。私たちが効くのは、受け渡しが3回以上あり、そのたびに人が転記している領域です。',
  },
  growth: {
    label: '育つナレッジ',
    headline: '使うことが、そのまま手入れになる',
    lead: '現場が増えるほど散らかるのではなく、揃っていく設計です。',
    cycles: [
      {
        no: '1',
        title: '確認が、正解データになる',
        body: '「この命名で合っていた」の記録がたまり、次の分類がより現場の呼び方に寄っていきます。',
      },
      {
        no: '2',
        title: '現場が増えるほど、辞書が育つ',
        body: '工区名・工種の呼び方・略語が現場ごとに追加され、手作業のメンテナンスは不要です。',
      },
      {
        no: '3',
        title: '不足の傾向が見える',
        body: '「この工種で毎回この写真が足りない」が分かり、撮影ルールの見直しに使えます。',
      },
    ],
    closing:
      '現場が増えるほど散らかるのが、これまでの記録。現場が増えるほど揃うのが、この仕組みです。',
  },
  roi: {
    label: '60秒試算',
    headline: '御社の数字で、整理・転記のロスを試算してください',
    lead: '私たちが盛った数字を見ても意味がありません。4つのつまみを御社の実感に合わせてください。',
    config: roiConfig,
  },
  process: {
    label: '進め方',
    headline: '無償で試して、数字を見てから決める',
    lead: '全社一斉ではなく、いちばん詰まっている継ぎ目から始めます。',
    steps: [
      {
        no: '01',
        title: 'いちばん詰まっている継ぎ目を、1つ選ぶ',
        costLabel: '無償・数週間',
        body: '1現場ぶんの写真をそのままお預かりし、整理だけを動かします。選ぶ・並べ替える準備は一切不要です。実測レポートをお見せします。',
      },
      {
        no: '02',
        title: '隣の継ぎ目へ、部品を足す',
        costLabel: 'ここまで費用ゼロ',
        body: '1で効いた形のまま、報告書の下書きを追加します。全社の合意を待つ必要はありません。',
      },
      {
        no: '03',
        title: 'つないで、フローにする',
        costLabel: '本導入・運用',
        body: '部品が揃った時点で連結し、現場オペ画面が立ち上がります。御社のクラウド環境の中に構築し、運用まで伴走します。',
      },
    ],
    exitNote:
      '1で終えても構いません。部品は単独で価値が出るように作ってあります。',
    detailHref: '/how-we-work',
    detailLabel: '導入の流れの詳細を見る →',
  },
  faq: [
    {
      category: 'fit',
      q: '現場ごとに写真の撮り方も呼び方もバラバラです。本当に対応できますか。',
      a: 'はい。どんな写真でも読める万能ツールを売るのではなく、御社の呼び方を学習させるやり方だからです。現場ごとの呼び方・略語は運用しながら辞書に乗せていきます。',
      defaultOpen: true,
    },
    {
      category: 'price',
      q: '料金はいくらですか。',
      a: '導入範囲（部品・現場数・連携）で変わります。部品単位の概算は相談または見積シミュレーターで確認できます。このページの試算で規模感をつかんだうえで、詳細は /estimate またはお問い合わせへ。',
    },
    {
      category: 'running-cost',
      q: '写真が大量にあります。AI利用料が膨大になりませんか。',
      a: '処理は取り込み時に一度だけ行う設計です。使うほど辞書が育ち、同じ判断のやり直しが減る方向に寄せます。',
    },
    {
      category: 'environment',
      q: 'いまの写真の置き場（共有サーバ・クラウド）を変える必要がありますか。',
      a: '原則不要です。いまの保管場所のまま接続する前提で設計します。',
    },
    {
      category: 'accuracy',
      q: '精度は何%ですか。',
      a: '単一の精度％では答えません。根拠になる写真が無ければ報告書を生成しない設計です。曖昧なことをそれっぽく埋めるのではなく、「記録が不足しています」と返します。',
    },
    {
      category: 'security',
      q: '現場写真を外部に出せません。情報システム部門の審査もあります。',
      a: '御社のクラウド環境内に構築する前提です。NDA締結と審査対応を進め方に含めます。',
    },
    {
      category: 'coexistence',
      q: '既に工事写真管理ソフトを使っています。併用できますか。',
      a: '可能です。既存ソフトを出力先として捉え、様式に合わせて出し分ける使い方ができます。',
    },
    {
      category: 'preparation',
      q: 'トライアルのために、写真を選んだり整理したりする必要がありますか。',
      a: '一切不要です。散らかったままお渡しください。選別やリネームの準備は求めません。',
    },
    {
      category: 'small-start',
      q: '何から始めればいいですか。全社一斉は不安です。',
      a: '1現場・1つの継ぎ目から始めます。進め方のセクション（無償で試すステップ）に沿って段階を分けます。',
    },
    {
      category: 'flow-fit',
      q: 'うちの承認フローは特殊です。同じ形にできますか。',
      a: '御社の承認フローをそのままコピーする必要はありません。効く条件にある3つ（撮る人／まとめる人／確認する立場）が揃っていれば、バトンの渡し方として設計します。',
    },
    {
      category: 'partial',
      q: '全部は要りません。写真の整理だけ導入できますか。',
      a: 'できます。部品カタログの「写真の仕事化」だけ単独で導入できます。効いたら隣の継ぎ目へ部品を足せます。',
    },
  ],
  finalCta: {
    headline: 'このコストは、今日の現場でも発生しています。',
    body: '記録はすでに現場で出そろっています。使える形にするだけです。NDAを結んで、1現場ぶんの写真をお渡しいただくだけ——無償で確かめられます。',
    assurances: [
      '売り込みはしません。まず動くものと実測数字をお見せします',
      '写真の選定・整理・リネームなどの準備は一切不要です',
      '合わなければトライアルで終えて構いません',
    ],
    formTitle: '無料トライアルについて相談する',
    formNote: '入力は1分。1営業日以内にご連絡します。',
    fields: defaultFormFields.map((f) =>
      f.key === 'message'
        ? {
            ...f,
            placeholder:
              '例：土木部の工事写真台帳・日報が対象。まず整理だけ試したい',
          }
        : f,
    ),
    tryCta: {
      label: '先にデモを触ってみる ↗',
      href: hubUrl,
      variant: 'secondary',
    },
  },
}
