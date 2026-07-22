export const blockchainLabHero = {
  eyebrow: 'Blockchain / DAO Lab',
  title: '分散型技術を、研究する',
  subtitle:
    '透明性・貢献・ガバナンス。ブロックチェーンと DAO を、組織設計と技術実験の領域として研究しています。',
} as const

export const blockchainPhilosophyPoints = [
  {
    title: '透明性',
    description: 'ルールと記録を改ざん困難な形で残し、信頼の基盤をつくる。',
  },
  {
    title: '貢献の記録',
    description: '誰が何をしたかを、一過性の評価ではなく記録として残す。',
  },
  {
    title: 'ガバナンス',
    description: '意思決定のプロセスをコードと合意で設計し、組織を自律化する。',
  },
  {
    title: '所有と参加',
    description: 'インセンティブと参加設計で、持続的なコミュニティを育てる。',
  },
] as const

export const blockchainResearchTopics = [
  {
    id: 'governance',
    title: 'DAO Governance',
    description: '組織意思決定の仕組み。投票、提案、執行の設計。',
  },
  {
    id: 'contribution',
    title: 'Contribution Measurement',
    description: '貢献をどのように記録・評価するか。PoC の思想と実装。',
  },
  {
    id: 'contracts',
    title: 'Smart Contracts',
    description: '契約やルールをコードで実行する仕組み。',
  },
  {
    id: 'token',
    title: 'Token Design',
    description: 'インセンティブと参加設計。トークンエコノミクスの設計。',
  },
] as const

export const blockchainExperiments = [
  {
    id: 'philosophy',
    title: 'Philosophy / DAO 思想',
    description: 'Proof of Contribution を中心とした社会設計の思想とロードマップ。',
    href: '/philosophy',
    status: 'ready' as const,
  },
  {
    id: 'research',
    title: '技術提案デモ',
    description: 'Philosophy の思想を、技術的アプローチとして体感できるデモ集。',
    href: '/research',
    status: 'ready' as const,
  },
  {
    id: 'poc-instrument',
    title: '正直さの物理法則 — 全体像',
    description: 'PoC の技術提案を一望できるインタラクティブ LP。',
    href: '/research/poc-instrument',
    status: 'ready' as const,
  },
  {
    id: 'dao-platform',
    title: 'DAO プラットフォーム構想',
    description: '投票・貢献度測定・トークン・学習DAO など、過去に検討してきた設計。',
    href: '/research/poc-instrument/governance-fork',
    status: 'ready' as const,
  },
] as const

export const blockchainSoftCta = {
  title: 'プロトタイプ・設計相談',
  description:
    'ブロックチェーンや DAO を用いたプロトタイプ開発・設計相談にも対応しています。研究領域から実務への橋渡しとして、お気軽にご相談ください。',
  href: '/contact?service=blockchain-development',
} as const
