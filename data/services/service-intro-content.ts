export const serviceIntroContent = {
  'web-development': {
    paragraph:
      'スタートアップのMVP開発、既存サービスのリニューアル、コンサル会社様の実装パートナーとして、企画からリリースまで伴走します。',
    useCases: [
      'コーポレートサイト・LPの新規制作',
      'ECサイト・会員制Webサービスの構築',
      '業務効率化のためのカスタムWebアプリ',
    ],
  },
  'app-development': {
    paragraph:
      'ネイティブ・クロスプラットフォームアプリ、スマホゲームまで。要件が固まっていない段階からでもご相談いただけます。',
    useCases: [
      'スタートアップ向けMVPアプリ開発',
      '既存アプリの機能追加・リニューアル',
      'Unity / Unreal を使ったゲームアプリ制作',
    ],
  },
  'ai-consulting': {
    paragraph:
      'AI導入の企画から実装まで。コンサル会社様のPoC開発や、プロダクトへのAI機能組み込みを技術面から支援します。',
    useCases: [
      '業務自動化・社内ツールへのAI組み込み',
      'ChatGPT / Gemini 等を活用したワークフロー設計',
      'AI機能付きWeb・アプリの開発支援',
    ],
  },
  'blockchain-development': {
    paragraph:
      'トークン設計からスマートコントラクト、DAOガバナンス・DAO法に基づくルールメイクまで。思想・研究は philosophy ページ、実務は本ページでご案内します。',
    useCases: [
      'トークン発行・トークノミクス設計',
      'スマートコントラクト / DApp 開発',
      'DAO法に基づく合同会社・ガバナンス設計',
    ],
  },
  metaverse: {
    paragraph:
      '3D・VR・AR・アバターを中心とした仮想空間の設計・構築。ブロックチェーンやAI連携が必要な場合は別途ご相談ください。',
    useCases: [
      'バーチャルイベント・展示会空間',
      'VR/AR体験アプリ・ショールーム',
      'アバター・3Dアセット制作',
    ],
  },
} as const

export type ServiceIntroId = keyof typeof serviceIntroContent
