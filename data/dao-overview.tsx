/**
 * DAO概要データ
 * トップページのDAO概要セクション用
 */

export interface DAOOverviewData {
  title: string
  subtitle: string
  description: string
  keyPoints: {
    title: string
    description: string
    icon: string
  }[]
  cta: {
    text: string
    link: string
  }
}

export const daoOverviewData: DAOOverviewData = {
  title: 'DAOについて',
  subtitle: '分散型自律組織（DAO）がもたらす新しい組織の可能性',
  description: 'DAO（分散型自律組織）は、従来の中央集権的な組織運営から脱却し、透明性、自律性、協調性を重視した新しい組織形態です。私たちidealは、この革新的な組織形態が持つ可能性に注目し、テクノロジーを活用した公正で持続可能な社会の実現を目指しています。',
  keyPoints: [
    {
      title: '透明性',
      description: 'すべての意思決定と活動がブロックチェーン上で記録され、誰でも検証可能',
      icon: 'check-circle'
    },
    {
      title: '自律性',
      description: '中央集権的な管理なしに、メンバーが自律的に意思決定と実行を行う',
      icon: 'lightning'
    },
    {
      title: '協調性',
      description: '多様な価値観を持つメンバーが協力し、共通の目標に向かって活動',
      icon: 'users'
    }
  ],
  cta: {
    text: '詳しくはこちら>>',
    link: '/philosophy'
  }
}

