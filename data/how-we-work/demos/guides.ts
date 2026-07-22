import type { HowWeWorkDemoGuide, HowWeWorkStep } from '../types'
import { HOW_WE_WORK_STEPS } from '../steps'

/** 共通ステップをベースに、指定 id だけ上書きする */
function customizeSteps(
  overrides: Partial<Record<string, Partial<HowWeWorkStep>>>,
): HowWeWorkStep[] {
  return HOW_WE_WORK_STEPS.map((step) => {
    const o = overrides[step.id]
    if (!o) return step
    return {
      ...step,
      ...o,
      weDo: o.weDo ?? step.weDo,
      youDo: o.youDo ?? step.youDo,
      notDecidedYet: o.notDecidedYet ?? step.notDecidedYet,
    }
  })
}

export const voiceToStructuredGuide: HowWeWorkDemoGuide = {
  demoSlug: 'voice-to-structured',
  title: '音声 → 構造化を起点にした進め方',
  lead:
    '「話すだけで記録が残る」体験を起点に、現場の録音ルール・帳票項目・定着までどう進めるかを整理します。',
  steps: customizeSteps({
    hearing: {
      summary: '誰が・いつ・何を話す記録が負担かを一緒に整理します。',
      weDo: [
        '申し送り・日報・ケア記録など、対象業務をヒアリングする',
        'デモで触った構造化項目と、現場帳票のギャップを確認する',
        '音声入力が向く場面／向かない場面を切り分ける',
      ],
      youDo: [
        '実際の帳票・記録項目の例を共有する',
        '現場で話せること／話せない制約（プライバシー等）を伝える',
        '録音デバイスやシフトの実態を簡単に説明する',
      ],
    },
    requirements: {
      summary: '必須の記録項目と、概算レンジを揃えます。',
      weDo: [
        '構造化したい項目リストを要件としてまとめる',
        '音声認識・確認 UI・既存システム連携の要否を整理する',
        '参考の概算と PoC 範囲案を提示する',
      ],
      youDo: [
        '必須項目と「あればよい」項目を優先度付けする',
        '既存の記録システムへの出力要否を伝える',
      ],
    },
    poc: {
      summary: '現場サンプル音声で、項目化の精度を確かめます。',
      weDo: [
        '合意した項目テンプレで試作する',
        'サンプル音声での認識・構造化結果をレビューする',
        '人手確認が必要な箇所を洗い出す',
      ],
      youDo: [
        '現場に近いサンプル音声（個人情報に配慮したもの）を用意する',
        '結果の過不足を現場目線でフィードバックする',
      ],
      notDecidedYet: [
        '全シフト・全利用者への展開は PoC では行わない',
        '認識精度の保証値はこの段階では約束しない',
      ],
    },
  }),
}

export const photoToClassificationGuide: HowWeWorkDemoGuide = {
  demoSlug: 'photo-to-classification',
  title: '写真 → 分類を起点にした進め方',
  lead:
    '現場写真の整理体験を起点に、命名ルール・保存先・報告書連携までどう進めるかを整理します。',
  estimateKit: 'report-auto',
  steps: customizeSteps({
    hearing: {
      summary: '撮る〜戻る〜整理で、どこに時間が消えるかを整理します。',
      weDo: [
        '現場写真の用途（報告・検査・共有）をヒアリングする',
        'いまのフォルダ・命名・転記の手順を可視化する',
        'デモの分類結果と現場ルールの差を確認する',
      ],
      youDo: [
        '散在しがちな写真の例や、報告書への載せ方を共有する',
        '保存先（クラウド／社内サーバ）の制約を伝える',
      ],
    },
    requirements: {
      summary: '分類ラベル・命名規則と概算を揃えます。',
      weDo: [
        '工事種別・日付・現場名など分類軸を要件化する',
        '自動整理後の出力先と連携を整理する',
        '参考概算と PoC で使う写真セットを提案する',
      ],
      youDo: [
        '望ましいフォルダ構成・ファイル名の例を出す',
        '個人情報や機密が写る写真の扱い方針を決める',
      ],
    },
    poc: {
      summary: '実現場に近い写真セットで分類・命名を検証します。',
      weDo: [
        '分類・命名の試作を実装する',
        '誤分類の傾向を分析し、ルールを調整する',
      ],
      youDo: [
        '検証用の写真一式を用意する',
        '現場監督など実利用者に結果を見てもらう',
      ],
    },
  }),
}

export const documentToExtractionGuide: HowWeWorkDemoGuide = {
  demoSlug: 'document-to-extraction',
  title: '文書 → 抽出を起点にした進め方',
  lead:
    '契約・DD 資料からの抽出体験を起点に、見る項目・確認フロー・本番への載せ方を整理します。',
  steps: customizeSteps({
    hearing: {
      summary: '通読のどこがボトルネックかを一緒に整理します。',
      weDo: [
        '対象文書の種類と、抜き出したい項目をヒアリングする',
        'いまのレビュー手順（通読・抜粋・確認）を可視化する',
        'デモ結果と実務のギャップを確認する',
      ],
      youDo: [
        '匿名化した契約書・資料のサンプルを共有する',
        '必ず確認したい条項・リスク観点を伝える',
      ],
    },
    requirements: {
      summary: '抽出テンプレと概算レンジを決めます。',
      weDo: [
        '抽出項目テンプレートを要件として固定する',
        '原文ハイライトやエクスポートの要否を整理する',
        '参考概算と PoC 範囲を提示する',
      ],
      youDo: [
        '必須項目リストに優先度を付ける',
        '法務・担当者の確認フローを共有する',
      ],
    },
    poc: {
      summary: '実文書サンプルで抽出精度と確認 UI を検証します。',
      weDo: [
        'テンプレに沿った抽出試作を行う',
        '抜け漏れ・誤抽出をレビューし調整する',
      ],
      youDo: [
        '検証用文書セットを用意する',
        '抽出結果の合否を実務基準でフィードバックする',
      ],
      notDecidedYet: [
        '法的助言や審査の代替にはならない',
        '全文書種別への対応は PoC 後に判断する',
      ],
    },
  }),
}

export const dataToPredictionGuide: HowWeWorkDemoGuide = {
  demoSlug: 'data-to-prediction',
  title: 'データ → 予測を起点にした進め方',
  lead:
    '需要・来客などの予測体験を起点に、使うデータ・判断への載せ方・検証の進め方を整理します。',
  steps: customizeSteps({
    hearing: {
      summary: '感覚判断が効いている業務と、データで支えたい判断を整理します。',
      weDo: [
        '発注・人員・在庫など、予測を載せたい判断をヒアリングする',
        'いま使える履歴データの有無を確認する',
        'デモの見せ方と現場判断の接点を整理する',
      ],
      youDo: [
        '売上・来客・在庫などのデータの所在を共有する',
        '「当たればよい」ではなく、どう使いたいかを伝える',
      ],
    },
    requirements: {
      summary: '予測の用途と概算を揃えます。',
      weDo: [
        '予測対象・更新頻度・表示する指標を要件化する',
        '影響要因の見せ方と人手判断の残し方を設計する',
        '参考概算と PoC 用データ範囲を提案する',
      ],
      youDo: [
        'データの期間・粒度・欠損の実態を伝える',
        '判断責任者とのすり合わせ窓口を用意する',
      ],
    },
    poc: {
      summary: '過去データで予測の見方と業務適合を検証します。',
      weDo: [
        '限定範囲で予測試作を行う',
        '信頼区間・要因の見せ方を現場と調整する',
      ],
      youDo: [
        '検証用の履歴データを提供する',
        '現場の感覚とずれる点をフィードバックする',
      ],
      notDecidedYet: [
        '予測精度の保証は行わない',
        '自動発注の完全自動化は別判断になる',
      ],
    },
  }),
}

export const workflowToAutomationGuide: HowWeWorkDemoGuide = {
  demoSlug: 'workflow-to-automation',
  title: '業務 → 自動化を起点にした進め方',
  lead:
    '受信〜登録〜通知の自動化体験を起点に、例外処理と人の確認ポイントを含めて進め方を整理します。',
  steps: customizeSteps({
    hearing: {
      summary: '毎日繰り返している定型手順を一緒に書き出します。',
      weDo: [
        'メール／PDF／登録／通知の現状フローをヒアリングする',
        '例外・手戻りが多い箇所を特定する',
        'デモの一気通貫と現場の差分を確認する',
      ],
      youDo: [
        '典型的な依頼メールや帳票の例を共有する',
        '人が必ず見るべきチェックポイントを伝える',
      ],
    },
    requirements: {
      summary: '自動化範囲と人の承認ポイントを決めます。',
      weDo: [
        '自動処理するステップと手動残すステップを切り分ける',
        '連携先システムとエラー時の扱いを整理する',
        '参考概算と PoC シナリオを提示する',
      ],
      youDo: [
        '連携先の API／権限の可否を確認する',
        '承認者が誰かを明確にする',
      ],
    },
    poc: {
      summary: '代表シナリオ1本で、流れ全体を検証します。',
      weDo: [
        '1本の典型フローで試作する',
        '例外ケースの扱いを洗い出す',
      ],
      youDo: [
        '検証用の受信サンプルを用意する',
        '登録結果と通知内容を現場で確認する',
      ],
    },
  }),
}

export const knowledgeToSearchGuide: HowWeWorkDemoGuide = {
  demoSlug: 'knowledge-to-search',
  title: 'ナレッジ → 検索を起点にした進め方',
  lead:
    '規程・マニュアルへの質問体験を起点に、入れる文書・根拠表示・社内展開までを整理します。',
  steps: customizeSteps({
    hearing: {
      summary: '探し回っている質問と、根拠にしたい文書を整理します。',
      weDo: [
        'よくある社内問い合わせと、参照すべき文書をヒアリングする',
        'いまの探し方（フォルダ・口頭・属人）を可視化する',
        'デモの回答＋根拠の見せ方との差を確認する',
      ],
      youDo: [
        '対象にする規程・マニュアル・FAQ の一覧を共有する',
        '回答してよい範囲／有人対応が必要な範囲を伝える',
      ],
    },
    requirements: {
      summary: '対象文書と権限・概算を揃えます。',
      weDo: [
        'インデックス対象と更新頻度を要件化する',
        '根拠表示・権限・監査ログの要否を整理する',
        '参考概算と PoC 用コーパスを提案する',
      ],
      youDo: [
        '最新版の文書セットと更新担当を決める',
        '閲覧権限のルールを共有する',
      ],
    },
    poc: {
      summary: '限られた文書セットで回答品質を検証します。',
      weDo: [
        'PoC 用コーパスで試作する',
        '誤回答・根拠ずれをレビューし調整する',
      ],
      youDo: [
        '検証用の質問リストを用意する',
        '現場の問い合わせ担当に触ってもらう',
      ],
      notDecidedYet: [
        '全社文書の一括取り込みは PoC 後に判断する',
        '回答の法的・人事的な正しさは保証しない',
      ],
    },
  }),
}

export const multiInputToReportGuide: HowWeWorkDemoGuide = {
  demoSlug: 'multi-input-to-report',
  title: '複数情報 → 報告書を起点にした進め方',
  lead:
    '素材から報告書候補までの体験を起点に、必要な入力・体裁・確認フローを整理します。',
  estimateKit: 'report-auto',
  steps: customizeSteps({
    hearing: {
      summary: '報告書に載せている素材と、机上でまとめる負担を整理します。',
      weDo: [
        '写真・音声・メモ・数値など入力の種類をヒアリングする',
        '現行の報告書フォーマットを確認する',
        'デモの生成結果と現場体裁の差を整理する',
      ],
      youDo: [
        '完成形に近い報告書のサンプルを共有する',
        '現場で集められる素材の実態を伝える',
      ],
    },
    requirements: {
      summary: '報告書テンプレと概算を決めます。',
      weDo: [
        '章立て・必須項目・参照元表示を要件化する',
        '出力形式（PDF／Word 等）と連携を整理する',
        '参考概算と PoC 用素材セットを提案する',
      ],
      youDo: [
        '社内で通る体裁・承認フローを共有する',
        '個人情報の扱いルールを決める',
      ],
    },
    poc: {
      summary: '実素材セットで報告書候補の品質を検証します。',
      weDo: [
        'テンプレに沿った生成試作を行う',
        '参照元付き出力の見やすさを調整する',
      ],
      youDo: [
        '検証用の素材一式を用意する',
        '現場・上司目線で文章の過不足をフィードバックする',
      ],
    },
  }),
}
