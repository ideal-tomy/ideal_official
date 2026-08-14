import type { ReactNode } from 'react'
import { HoodBody } from '@/components/services/HoodBody'

export interface AiTechCard {
  id: string
  title: string
  tags: string[]
  siteUsage: string
  modalBody: ReactNode
}

export const techDetailItems: AiTechCard[] = [
  {
    id: 'llm',
    title: 'LLM / API 連携',
    tags: ['OpenAI', 'Gemini', 'Structured Output'],
    siteUsage: 'AIコンシェルジュ、Gallery デモの要約・分類・報告書下書き',
    modalBody: (
      <HoodBody
        lead="大規模言語モデルを業務 API として組み込み、プロンプト設計・出力形式・エラー処理まで含めて実装します。"
        siteUsage="会話型コンシェルジュ、各デモのテキスト生成・判定ロジックの基盤です。"
        points={[
          {
            title: 'モデル選定とコスト設計',
            text: 'GPT / Gemini / Claude 等を用途・レイテンシ・単価で選定し、トークン上限とフォールバックを設計します。',
          },
          {
            title: 'Structured Output',
            text: 'JSON Schema や function calling で、DB や UI に載せやすい固定フォーマットを返します。',
          },
          {
            title: 'ガードレール',
            text: '入力検証、レート制限、ログ・監査のためのトレース設計で、本番運用を前提にします。',
          },
        ]}
      />
    ),
  },
  {
    id: 'rag',
    title: 'RAG / Embeddings',
    tags: ['Vector DB', 'Embeddings', 'Retrieval'],
    siteUsage: '「ナレッジ → 検索」デモ、規程・マニュアル照会のプロトタイプ',
    modalBody: (
      <HoodBody
        lead="社内文書やマニュアルを検索可能にするため、埋め込み生成から検索・再ランクまで RAG パイプラインを構築します。"
        siteUsage="製造判断デモの根拠提示、規程検索パターンの実装に使っています。"
        points={[
          {
            title: 'チャンク設計',
            text: '文書種別に合わせた分割、メタデータ付与、更新差分の再インデックスを行います。',
          },
          {
            title: 'Vector Store',
            text: 'pgvector / Pinecone 等への格納、キーワード検索とベクトル検索のハイブリッド化。',
          },
          {
            title: '根拠提示',
            text: '引用元ページ・段落を UI に返し、回答の検証可能性を確保します。',
          },
        ]}
      />
    ),
  },
  {
    id: 'speech-nlp',
    title: '音声認識 / NLP',
    tags: ['Whisper', 'STT', 'Entity Extraction'],
    siteUsage: '「音声 → 構造化」デモ、介護・現場報告ケース',
    modalBody: (
      <HoodBody
        lead="音声の文字起こしにとどまらず、業務フィールドへマッピングする NLP パイプラインを実装します。"
        siteUsage="音声入力デモの transcript → 日報フィールド変換ロジック。"
        points={[
          {
            title: '音声認識（STT）',
            text: 'Whisper 等の STT と、現場ノイズ・専門用語への前処理・辞書補正。',
          },
          {
            title: '構造化抽出',
            text: 'エンティティ抽出、スキーマ固定の JSON 出力、欠損項目の確認フロー設計。',
          },
          {
            title: '日本語最適化',
            text: '固有名詞辞書、口語・敬語の正規化、業界用語のチューニング。',
          },
        ]}
      />
    ),
  },
  {
    id: 'ml-vision',
    title: '機械学習 / 画像認識',
    tags: ['Computer Vision', 'Classification', 'LightGBM'],
    siteUsage: '「写真 → 分類」「データ → 予測」デモ',
    modalBody: (
      <HoodBody
        lead="画像の分類・検出や、表形式・時系列データの予測モデルを、学習から推論 API まで設計します。"
        siteUsage="写真自動整理デモのラベル推定、需要予測デモのモデル構成。"
        points={[
          {
            title: '画像認識',
            text: '分類・物体検出 API またはファインチューニング。ラベル設計と評価セットの作成。',
          },
          {
            title: '従来型 ML',
            text: '特徴量設計、LightGBM 等の学習パイプライン、再学習・バージョン管理。',
          },
          {
            title: '評価と閾値',
            text: '精度指標に加え、現場の許容ミス率に合わせた閾値・Human review 点の設計。',
          },
        ]}
      />
    ),
  },
  {
    id: 'pipeline',
    title: 'パイプライン / API 連携',
    tags: ['Webhook', 'Queue', 'Orchestration'],
    siteUsage: '「業務 → 自動化」「文書 → 抽出」デモの処理フロー',
    modalBody: (
      <HoodBody
        lead="AI 処理を単発 API ではなく、再実行可能なジョブとして組み立て。トリガー・キュー・外部サービスをつなぎます。"
        siteUsage="ワークフロー自動化デモ、文書抽出 → 登録 → 通知の一連処理。"
        points={[
          {
            title: 'オーケストレーション',
            text: 'Webhook、メッセージキュー、ステップ実行で順序・依存・並列度を管理します。',
          },
          {
            title: '外部 API アダプタ',
            text: 'メール、Slack、LINE、既存 SaaS との入出力を正規化し、差し替え可能にします。',
          },
          {
            title: '本番運用',
            text: 'リトライ、デッドレター、処理ログ、Human-in-the-loop の差し込み点を設計します。',
          },
        ]}
      />
    ),
  },
]
