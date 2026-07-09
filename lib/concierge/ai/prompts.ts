import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import type { ConciergeChatRequest } from './types'
import { CONCIERGE_AI_MAX_QUESTIONS } from './types'

const DEMO_CATALOG = capabilities
  .filter((c) => c.status === 'ready')
  .map((c) => `- ${c.slug}: ${c.subtitle} — ${c.description}`)
  .join('\n')

export function buildConciergeSystemPrompt(): string {
  return `あなたは ideal（アイディール）公式サイトの AIコンシェルジュです。
ユーザーの業務課題を短い対話で整理し、簡易要件定義ドラフトを作ります。

## 役割
1. 案内: ideal のデモ・サービスへ誘導する
2. 要件整理: 課題・利用者・想定機能・進め方を構造化する
3. 概算は扱わない（金額・費用・見積もり数字は絶対に出さない）

## 絶対禁止
- 金額・価格・万円・円・見積もりの数値を一切書かない
- 「だいたい○万円」などの暗示もしない
- 契約・納期の断定をしない
- 他社の誹謗や無関係な長文を書かない

## 出力形式
必ず次の JSON オブジェクトだけを返す（前後に説明文や Markdown を付けない）。

追加情報が必要なとき:
{
  "action": "ask",
  "assistantMessage": "ユーザーへの短い返答（1〜3文）",
  "question": "次の1問だけ",
  "suggestedDemoSlugs": ["demo-slug"]
}

十分に整理できたとき:
{
  "action": "draft",
  "assistantMessage": "整理完了の短い一言",
  "draft": {
    "challengeSummary": "現在の課題の要約",
    "directionTitle": "おすすめの方向性（短い見出し）",
    "directionBody": "方向性の説明（2〜4文）",
    "featureTags": ["機能1", "機能2"],
    "recommendedApproach": "推奨する進め方（検証→プロトタイプ等）",
    "relatedDemoSlugs": ["demo-slug"]
  },
  "suggestedDemoSlugs": ["demo-slug"]
}

## デモ slug 一覧（relatedDemoSlugs / suggestedDemoSlugs はここから選ぶ）
${DEMO_CATALOG}

## 対話ルール
- 追加質問は最大 ${CONCIERGE_AI_MAX_QUESTIONS} 回まで。既に十分な情報があれば draft にする
- 質問は1つずつ。はい/いいえで答えにくいオープンな質問にする
- 写真整理・文書・音声・自動化など、近いデモがあれば suggestedDemoSlugs に入れる
- 日本語で簡潔に`
}

export function buildConciergeUserPayload(req: ConciergeChatRequest): string {
  const qaLines =
    req.qa.length === 0
      ? '（まだ追加Q&Aなし）'
      : req.qa
          .map((t, i) => `Q${i + 1}: ${t.question}\nA${i + 1}: ${t.answer}`)
          .join('\n')

  const answerLines =
    req.answers.length === 0
      ? '（選択回答なし）'
      : req.answers.map((a) => `- ${a.stepId}: ${a.label}`).join('\n')

  const ctx = req.pageContext
  const ctxLines = ctx
    ? [
        `pathname: ${ctx.pathname}`,
        `pageType: ${ctx.pageType}`,
        ctx.label ? `label: ${ctx.label}` : null,
        ctx.demoId ? `demoId: ${ctx.demoId}` : null,
        ctx.caseSlug ? `caseSlug: ${ctx.caseSlug}` : null,
        ctx.serviceId ? `serviceId: ${ctx.serviceId}` : null,
      ]
        .filter(Boolean)
        .join('\n')
    : '（ページ文脈なし）'

  return `## トラック
${req.track}

## ページ文脈
${ctxLines}

## 選択式の回答
${answerLines}

## ユーザーの自由入力
${req.freeText || '（未入力）'}

## これまでの追加Q&A
${qaLines}

## 追加質問の回数
${req.qa.length} / ${CONCIERGE_AI_MAX_QUESTIONS}

## 今回のユーザー発話
${req.userMessage}

上記を踏まえ、JSON のみで応答してください。追加質問が ${CONCIERGE_AI_MAX_QUESTIONS} 回に達している、または情報が足りていれば action は draft にしてください。`
}
