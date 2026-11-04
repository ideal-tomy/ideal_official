import type { TopFeaturedDemoId } from '@/data/demo-first/top-featured-demos'

/**
 * /demo/intro/[id] の原稿。axeon_demo_selection の各 *-story.js を写したもの。
 */

export type DemoIntroImage = {
  src: string
  width: number
  height: number
}

export type DemoIntroStep = {
  headline: string
  subtitle: string
  image: DemoIntroImage
  alt: string
}

export type DemoIntroStory = {
  eyebrow: string
  title: string[]
  intro: string[]
  cta: string
  heroImage: DemoIntroImage
  previewTitle: string
  meta: [string, string][]
  steps: DemoIntroStep[]
  changes: [string, string][]
  conditionSummary: string[]
  conditionTitle: string
  conditions: string[]
  closingTitle: string
  closing: string
  related: TopFeaturedDemoId[]
}

const phone = (src: string): DemoIntroImage => ({ src, width: 780, height: 1688 })
const wide = (src: string): DemoIntroImage => ({ src, width: 1280, height: 720 })

export const DEMO_INTRO_STORIES: Record<TopFeaturedDemoId, DemoIntroStory> = {
  'construction-record': {
    eyebrow: '建設・現場の業務改善',
    title: ['現場写真から、', '報告書まで。'],
    intro: ['写真を整理し、報告書の下書きを確認。', '提出した日報を、管理側で確認する操作も試せます。'],
    cta: '写真整理のデモを開く',
    heroImage: { src: '/images/demos/construction-record/top.png', width: 1066, height: 882 },
    previewTitle: '写真整理から提出後の確認まで',
    meta: [
      ['対象', '現場監督・事務担当・工事責任者'],
      ['体験する作業', '3ステップ'],
      ['下書きの確認', '担当者が確認'],
    ],
    steps: [
      {
        headline: '写真を送る',
        subtitle: '現場で撮った写真をまとめて送るだけ。',
        image: { src: '/images/demos/construction-record/01.png', width: 993, height: 500 },
        alt: '写真を整える',
      },
      {
        headline: '整理して下書き',
        subtitle: '写真を現場ごとに整理し、必要な項目を自動で下書きにします。',
        image: { src: '/images/demos/construction-record/02.png', width: 1625, height: 786 },
        alt: '報告書',
      },
      {
        headline: '提出後を確認',
        subtitle: '提出した日報の確認や、不足写真の依頼もまとめて行えます。',
        image: { src: '/images/demos/construction-record/03.png', width: 1678, height: 770 },
        alt: '現場オペ',
      },
    ],
    changes: [
      ['写真を探して名前を付け直す', '現場ごとに整理。名前も自動で付ける'],
      ['一から報告書を書く', '下書きから確認する'],
      ['一人ずつ不足写真を確認', 'まとめて確認する'],
    ],
    conditionSummary: [
      'サンプルの写真と文章ですぐ試せます。',
      '実際の送信や業務データの保存は行いません。',
    ],
    conditionTitle: '利用条件・写真を使う際の注意',
    conditions: [
      '写真整理と報告書のサンプルは、自分の写真やAPIキーを用意せずに試せます。分類結果や下書きには、用意された内容を使います。',
      '「提出」「通知」「催促」はデモ内の操作です。実際の担当者への送信や、業務データのサーバーへの保存は行いません。',
      '「要確認」は見直す箇所の例です。すべての誤りを検出する機能ではありません。下書き全体を担当者が確認してください。',
      '自分の写真を使う解析はサンプルとは別の機能です。画像がAI APIへ送信されるため、デモ内の利用案内を確認し、機密情報や個人情報を含む写真は使用しないでください。',
    ],
    closingTitle: '実際に試してみる',
    closing: 'サンプルデータですぐ操作できます。',
    related: ['approval-inspection', 'gym-facility'],
  },
  'internal-knowledge': {
    eyebrow: '社内規程・マニュアル',
    title: ['社内規程に、', '聞いてみる。'],
    intro: ['知りたいことを質問すると、', '回答と必要な手続き、根拠となる規程を確認できます。'],
    cta: '規程への質問を試す',
    heroImage: { src: '/images/demos/internal-knowledge/top.png', width: 1200, height: 680 },
    previewTitle: '質問から、回答と根拠の確認まで',
    meta: [
      ['使う人', '社員・総務・人事'],
      ['体験する作業', '質問と回答確認'],
      ['回答の根拠', '該当する規程'],
    ],
    steps: [
      {
        headline: '知りたいことを質問',
        subtitle: '用意された質問を選ぶか、知りたいことを入力します。',
        image: phone('/images/demos/internal-knowledge/01.jpg'),
        alt: '用意された質問から試せます。',
      },
      {
        headline: '回答と手続きを確認',
        subtitle: '回答の要点と条件、必要な申請や承認を確認します。',
        image: phone('/images/demos/internal-knowledge/02.jpg'),
        alt: '条件や必要な申請を確認。',
      },
      {
        headline: '根拠の規程を確認',
        subtitle: '「根拠を見る」から、該当する条文と理由を確認します。',
        image: phone('/images/demos/internal-knowledge/03.jpg'),
        alt: '該当する規程を開く。',
      },
    ],
    changes: [
      ['規程を開いて該当箇所を探す', '質問して回答と条件を確認する'],
      ['必要な手続きを文書から拾う', '申請や承認の手順をまとめて確認する'],
      ['回答の根拠を改めて探す', '回答から該当する条文を確認する'],
    ],
    conditionSummary: [
      '架空の会社のサンプル規程ですぐ試せます。',
      'サンプルモードではAPIキーは不要です。',
    ],
    conditionTitle: '利用条件・データを使う際の注意',
    conditions: [
      '架空の会社の規程を使います。サンプルモードの回答は、用意された回答または規程検索をもとに表示し、外部のAI APIは呼び出しません。',
      '回答に表示される申請や承認は手続きの案内です。自社の規程や運用にそのまま適用せず、担当部署に確認してください。',
      '自社文書の追加は「標準規程」から、接続方法の切り替えは「設定」から確認できます。追加した文書は、このタブのセッションに保持されます。',
      'APIキーや体験コードを使うモードでは、質問や関連する文書の内容を外部AIへ送信します。接続先と利用条件を確認し、機密情報や個人情報を含む内容は入力しないでください。',
    ],
    closingTitle: '実際に試してみる',
    closing: 'サンプル規程で、質問から根拠まで確認できます。',
    related: ['construction-record', 'quality-incident', 'kaigo-handoff'],
  },
  'quality-incident': {
    eyebrow: '製造・品質',
    title: ['品質トラブルの原因と、', '是正内容を確認する。'],
    intro: ['不具合の発見から、原因の調査、是正・承認まで。', '架空の事例で、対応の手順を試せます。'],
    cta: '品質管理のデモを開く',
    heroImage: wide('/images/demos/quality-incident/top.png'),
    previewTitle: '発見から、原因候補と是正まで',
    meta: [
      ['使う人', '品質・製造'],
      ['体験する作業', '原因調査と是正'],
      ['最後の作業', '是正・承認'],
    ],
    steps: [
      {
        headline: '不具合の状況を確認',
        subtitle: '優先案件から詳細を開き、状況と分析結果を確認します。',
        image: phone('/images/demos/quality-incident/01.jpg'),
        alt: '優先して対応する案件を確認。',
      },
      {
        headline: '原因の候補を見比べる',
        subtitle: '根拠付きの候補を並べて比較します。自動で原因は確定しません。',
        image: phone('/images/demos/quality-incident/02.jpg'),
        alt: '原因候補と、その根拠を確認。',
      },
      {
        headline: '是正と承認の手順を確認',
        subtitle: '処置内容と記録を確認し、デモ内の提出操作まで試せます。',
        image: phone('/images/demos/quality-incident/03.jpg'),
        alt: '処置内容と記録を確認。',
      },
    ],
    changes: [
      ['不具合の記録を紙やメールから探す', '優先案件から状況を同じ画面で確認する'],
      ['原因の候補を個別に調べる', '根拠付きの候補を並べて比較する'],
      ['是正と承認の手順が分かれている', '是正内容の確認からデモ内の提出まで辿る'],
    ],
    conditionSummary: [
      '架空の工場を使った、用意された事例のデモです。原因候補は表示されますが、原因を自動で確定するものではありません。',
      'PDF保存では印刷プレビューが開きます。提出はデモ内の通知のみです。',
    ],
    conditionTitle: '利用条件・データを使う際の注意',
    conditions: [
      '架空の工場・固定シナリオを使います。表示される原因候補は説明用であり、原因を自動で確定する機能ではありません。',
      'PDF保存では印刷プレビューが開きます。提出はデモ内の通知のみで、実際の送信や業務データの保管は行いません。',
      '画面上の分析結果や処置案はサンプルです。自社の品質管理にそのまま適用しないでください。',
      '実際の判断・承認は担当者が行ってください。',
    ],
    closingTitle: '実際に試してみる',
    closing: '架空の事例で、発見から是正までの流れを確認できます。',
    related: ['approval-inspection', 'internal-knowledge', 'kaigo-handoff'],
  },
  'logistics-dispatch': {
    eyebrow: '運送・配車',
    title: ['空で戻る車に、', '積める荷物がないか探す。'],
    intro: ['配車状況と帰り荷の候補を確認できます。', '積む荷物は担当者が決めます。'],
    cta: '配車のデモを開く',
    heroImage: wide('/images/demos/logistics-dispatch/top.png'),
    previewTitle: '今日の手配から、帰り荷の選定まで',
    meta: [
      ['使う人', '配車・運行管理'],
      ['体験する作業', '帰り荷の選定'],
      ['荷物の決定', '担当者が判断'],
    ],
    steps: [
      {
        headline: '今日の手配を確認',
        subtitle: '受注と配車盤を開き、今日の件数と状況を確認します。',
        image: phone('/images/demos/logistics-dispatch/01.jpg'),
        alt: '受注一覧と配車盤を見る。',
      },
      {
        headline: '帰り荷の候補を選ぶ',
        subtitle: '載せる／載せないを担当者が決めます。自動配車はしません。',
        image: phone('/images/demos/logistics-dispatch/02.jpg'),
        alt: '候補を積むかどうか決める。',
      },
      {
        headline: '確認事項を見直す',
        subtitle: '休息時間やFAXなど、人が見る項目を確認します。',
        image: phone('/images/demos/logistics-dispatch/03.jpg'),
        alt: '休息時間やFAXの確認。',
      },
    ],
    changes: [
      ['依頼と空車の情報が入口ごとに分かれる', '今日の手配と配車盤を同じ画面で確認する'],
      ['帰り荷の候補を電話や表で探す', '候補を見て載せるかどうかを決める'],
      ['休息やFAXの確認が後回しになる', '未確認の項目をまとめて見直す'],
    ],
    conditionSummary: [
      '架空の依頼と車両を使ったデモです。APIへの接続は不要です。',
      '自動配車や運賃の確定は行いません。',
    ],
    conditionTitle: '利用条件・データを使う際の注意',
    conditions: [
      '架空の依頼・車両データを使います。APIキーは不要です。',
      '自動配車や運賃の確定は行いません。積む荷物は担当者が判断します。',
      '実際の送信や業務データのサーバーへの保存は行いません。',
    ],
    closingTitle: '実際に試してみる',
    closing: '架空の配車データで、帰り荷の選定を試せます。',
    related: ['construction-record', 'approval-inspection'],
  },
  'approval-inspection': {
    eyebrow: '製造・受入検査',
    title: ['図面と材料証明書を照合して、', '確認・承認まで。'],
    intro: ['照合結果と保留理由、承認記録を確認できます。', 'タブを切り替えて、各画面をご覧ください。'],
    cta: '受入検査の画面を見る',
    heroImage: wide('/images/demos/approval-inspection/top.png'),
    previewTitle: '照合から、保留理由と承認まで',
    meta: [
      ['使う人', '検査・品質'],
      ['見られる内容', '照合から基準改定'],
      ['形式', '画面紹介'],
    ],
    steps: [
      {
        headline: '図面と証明書を照合',
        subtitle: '一致・要確認・記載なしの結果を整理した画面を見ます。',
        image: phone('/images/demos/approval-inspection/01.jpg'),
        alt: '照合結果を確認。',
      },
      {
        headline: '保留の理由を確認',
        subtitle: '確認が必要な項目と、その理由が一覧で並びます。',
        image: phone('/images/demos/approval-inspection/02.jpg'),
        alt: '保留一覧で確認。',
      },
      {
        headline: '承認と基準改定を見る',
        subtitle: '承認記録から基準改定までの画面を順に確認します。',
        image: phone('/images/demos/approval-inspection/03.jpg'),
        alt: '承認時の確認内容を見る。',
      },
    ],
    changes: [
      ['図面と証明書を別々に見比べる', '照合結果を同じ画面で確認する'],
      ['保留の理由を口頭やメモで残す', '保留理由を一覧で確認する'],
      ['承認と基準改定の記録を探す', '承認記録と基準改定の画面を辿る'],
    ],
    conditionSummary: [
      '架空の案件を使った画面紹介です。タブを切り替えて、照合・保留・承認・基準改定の画面をご覧ください。',
      '画像内のボタンは操作できません。保存や送信は行いません。',
    ],
    conditionTitle: '利用条件・データを使う際の注意',
    conditions: [
      '架空の案件データを使った画面紹介です。デモ内には4つのタブ（照合・保留・承認・基準改定）があり、紹介カードでは主な3場面を示しています。',
      '画像内のボタンや入力欄は操作できません。実際の承認・保存・送信は行われません。',
      '表示内容は説明用のサンプルです。自社の検査基準や運用にそのまま適用しないでください。',
      '体験の入口から各画面を開き、照合から承認までの流れを確認できます。',
    ],
    closingTitle: '実際に試してみる',
    closing: '画面紹介で、照合から承認までの流れを確認できます。',
    related: ['quality-incident', 'construction-record', 'internal-knowledge'],
  },
  'kaigo-handoff': {
    eyebrow: '介護・記録',
    title: ['申し送りから、', '日々の記録まで。'],
    intro: ['申し送り・面談・日報。', 'それぞれの記録をまとめ、内容を確認する操作を試せます。'],
    cta: '介護記録のデモを開く',
    heroImage: wide('/images/demos/kaigo-handoff/top.png'),
    previewTitle: '申し送りから、面談・日報まで',
    meta: [
      ['使う人', '介護職員'],
      ['記録の種類', '3種類'],
      ['内容の確認', '担当者が確認'],
    ],
    steps: [
      {
        headline: '申し送りを記録する',
        subtitle: '時刻枠を録音または入力し、内容を確認して提出します。',
        image: phone('/images/demos/kaigo-handoff/01.jpg'),
        alt: '録音する',
      },
      {
        headline: '面談の内容を見直す',
        subtitle: '録音または入力から経過記録へまとめ、要確認欄を直します。',
        image: phone('/images/demos/kaigo-handoff/02.jpg'),
        alt: '面談から経過記録を作る。',
      },
      {
        headline: '日報にまとめて確認',
        subtitle: '提出物を確認し、フロアの日報欄への反映を試せます。',
        image: phone('/images/demos/kaigo-handoff/03.jpg'),
        alt: '提出された記録を確認。',
      },
    ],
    changes: [
      ['申し送りを紙や口頭だけに残す', '時刻枠ごとに記録し、内容を確認して提出する'],
      ['面談メモを後から書き直す', '会話から経過記録を清書し、要確認を直す'],
      ['日報への反映を別作業で行う', '提出物の確認から日報欄まで辿る'],
    ],
    conditionSummary: [
      '架空の利用者データで試せます。録音画面では、用意された会話や入力した内容を使います。',
      '記録はブラウザの sessionStorage に保持されます。実際の送信は行いません。',
    ],
    conditionTitle: '利用条件・データを使う際の注意',
    conditions: [
      '架空の利用者データを使います。録音は枠タップまたは入力の演出であり、実マイク録音が必須ではありません。',
      '記録はブラウザの sessionStorage に保持されます。タブを閉じたり再読み込みすると消えることがあります。',
      '実際の送信や、施設システムの本番保存は行いません。',
      '表示される記録内容はサンプルです。実運用の記録ルールにそのまま適用しないでください。',
    ],
    closingTitle: '実際に試してみる',
    closing: '架空のデータで、申し送りから日報までの流れを試せます。',
    related: ['internal-knowledge', 'gym-facility', 'quality-incident'],
  },
  'gym-facility': {
    eyebrow: '指定管理・施設',
    title: ['体育館の利用状況と、', '設備の記録を確認する。'],
    intro: ['施設の利用可否や、設備ごとの記録を確認できます。', '画像を見て、対応が必要か判断する操作も試せます。'],
    cta: '施設管理のデモを開く',
    heroImage: wide('/images/demos/gym-facility/top.png'),
    previewTitle: '利用状況から、設備記録と画像確認まで',
    meta: [
      ['使う人', '指定管理者・施設担当'],
      ['確認する内容', '施設・設備の状況'],
      ['対応の判断', '画像を見て確認'],
    ],
    steps: [
      {
        headline: '利用できるか確認',
        subtitle: '施設の状況と、要対応の項目を確認します。',
        image: phone('/images/demos/gym-facility/01.jpg'),
        alt: '施設の状況と要対応の項目を確認。',
      },
      {
        headline: '設備の記録を開く',
        subtitle: '場所・設備ごとの点検や対応の履歴を確認します。',
        image: phone('/images/demos/gym-facility/02.jpg'),
        alt: '場所・設備一覧から記録を開く。',
      },
      {
        headline: '画像で対応を記録',
        subtitle: '画像を見て、対応が必要か／問題なしかをデモ内で記録します。',
        image: phone('/images/demos/gym-facility/03.jpg'),
        alt: '対応が必要か、問題なしかを選ぶ。',
      },
    ],
    changes: [
      ['施設の状態が表やメモに散らばる', '利用状況と要対応を同じ画面で確認する'],
      ['設備の履歴を別ファイルで探す', '場所・設備の記録を一覧から開く'],
      ['画像確認の結果が残らない', '対応要否をデモ内で記録し、やり直しも試す'],
    ],
    conditionSummary: [
      '架空の施設を使い、日時を固定したデモです。',
      '画像の判定はタブ内のみです。リロードで消え、送信・本番保管は行いません。',
    ],
    conditionTitle: '利用条件・データを使う際の注意',
    conditions: [
      '架空の指定管理施設・固定日時のデモです。',
      '画像の判定結果はこのタブ内のみです。リロードすると消え、送信や本番保管は行いません。',
      '表示内容は説明用です。実施設の運用判断にそのまま適用しないでください。',
    ],
    closingTitle: '実際に試してみる',
    closing: '架空の施設データで、状況確認から画像判定まで試せます。',
    related: ['construction-record', 'kaigo-handoff', 'internal-knowledge'],
  },
  'wholesale-quote': {
    eyebrow: '卸・受注',
    title: ['型番の問い合わせを確認し、', '返信の下書きを見直す。'],
    intro: ['在庫などの確認結果と、返信の下書きを見られます。', '在庫表と照らし合わせ、担当者が返信内容を決めます。'],
    cta: '問い合わせ対応のデモを開く',
    heroImage: wide('/images/demos/wholesale-quote/top.png'),
    previewTitle: '問い合わせから、在庫と返信下書きまで',
    meta: [
      ['使う人', '営業・受注担当'],
      ['体験する作業', '在庫確認と返信'],
      ['返信内容', '担当者が確認'],
    ],
    steps: [
      {
        headline: '問い合わせを開く',
        subtitle: '確認結果と返信下書きが同じ画面に並びます。',
        image: phone('/images/demos/wholesale-quote/01.jpg'),
        alt: '届いた問い合わせを確認。',
      },
      {
        headline: '在庫表を照らし合わせる',
        subtitle: '該当行の数量を確認し、下書きの根拠を見ます。',
        image: phone('/images/demos/wholesale-quote/02.jpg'),
        alt: '在庫数を照らし合わせる。',
      },
      {
        headline: '返信内容を決める',
        subtitle: '下書きのまま返すか直すかを人が決めます。実送信はしません。',
        image: phone('/images/demos/wholesale-quote/03.jpg'),
        alt: 'デモでは実際に送信しません。',
      },
    ],
    changes: [
      ['問い合わせと在庫表が別の場所にある', '確認結果と返信下書きを同じ画面で見る'],
      ['在庫を探す・聞く作業が分かれる', '在庫表の該当行を開いて数量を確認する'],
      ['返す文面を一から書く', '下書きを見直して、担当者が返信内容を決める'],
    ],
    conditionSummary: [
      '架空の電材卸の問い合わせで、在庫確認と返信下書きの確認を試せます。APIキーは不要です。',
      '実際の返信や価格の自動確定、在庫引当は行いません。',
    ],
    conditionTitle: '利用条件・データを使う際の注意',
    conditions: [
      '架空の電材卸データを使います。APIキーは不要です。',
      '自動返信・価格の自動確定・在庫引当は行いません。返信内容は担当者が判断します。',
      '実際のメール送信や業務データのサーバーへの保存は行いません。',
    ],
    closingTitle: '実際に試してみる',
    closing: '架空の問い合わせで、在庫確認と返信下書きを試せます。',
    related: ['logistics-dispatch', 'internal-knowledge', 'approval-inspection'],
  },
}
