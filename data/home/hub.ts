/** トップハブ（/）の文案・URL。構成の正本は docs/TOP_HUB_PLAN.md */

export const homeHubLinks = {
  services: '/services',
  about: '/services#about',
  examples: '/services#examples',
  steps: '/services#steps',
  articles: '/articles',
  lab: '/lab',
  contact: '/contact',
} as const

export const homeHubRibbonTopics = [
  '設計と一緒に',
  'サンプルで試す',
  '段階的に開発',
  'Web',
  'アプリ',
  'AI',
] as const

export const homeHubHero = {
  eyebrow: 'ideal',
  heading: ['設計と一緒に、', 'サンプルで試せる。'] as const,
  lead: '要件定義を紙で何往復もする前に、動くサンプルで制作イメージと設計の解像度を上げます。小さな単位で段階的に開発し、都度確認しながら手戻りとリスクを抑えます。サンプルで早くズレに気づくから、全体として速く・安全に進められます。',
  primaryCta: { label: 'サービスを見る', href: homeHubLinks.services },
  secondaryCta: { label: 'サンプルを触る', href: homeHubLinks.examples },
} as const

export type HomeHubPillar = {
  title: string
  body: string
  linkLabel: string
  href: string
}

export const homeHubPillars: readonly HomeHubPillar[] = [
  {
    title: '設計を一緒に',
    body: '何から着手するか、どこまでを一期にするかを、現場運用まで含めて一緒に設計します。',
    linkLabel: 'サービスの全体像を見る',
    href: homeHubLinks.about,
  },
  {
    title: 'サンプルで試す',
    body: '要件が固まりきる前から、触れるサンプルで方向と質感を合わせます。',
    linkLabel: 'サンプルを見る',
    href: homeHubLinks.examples,
  },
  {
    title: '小さく段階的に',
    body: '小さく試し、反応を見てから本実装へ。都度リスクを確認しながら進めます。',
    linkLabel: '進め方を見る',
    href: homeHubLinks.steps,
  },
]

export type HomeHubCard = {
  label: string
  lead: string
  href: string
}

export const homeHubCards: readonly HomeHubCard[] = [
  {
    label: 'サービス',
    lead: '相談・設計から Web・アプリ・AI まで',
    href: homeHubLinks.services,
  },
  {
    label: '動くデモ',
    lead: '触って確かめるサンプル',
    href: homeHubLinks.examples,
  },
  {
    label: '進め方',
    lead: '設計から段階的に進める流れ',
    href: homeHubLinks.steps,
  },
  {
    label: '現場の記事',
    lead: '業界・悩み別の読み物',
    href: homeHubLinks.articles,
  },
  {
    label: 'LAB',
    lead: '思想と研究',
    href: homeHubLinks.lab,
  },
  {
    label: '問い合わせ',
    lead: 'まだ言葉になっていなくても相談可',
    href: homeHubLinks.contact,
  },
]

export const homeHubDemoTeaser = {
  eyebrow: 'サンプル',
  heading: ['触って試せる', 'システム開発'] as const,
  body: '代表例です。詳しくはサービスページの事例から。',
  cta: { label: 'もっと見る', href: homeHubLinks.examples },
} as const

export const homeHubCta = {
  eyebrow: 'Contact',
  heading: ['まだ課題が言葉に', 'なっていなくても大丈夫。'] as const,
  body: '「なんとなく非効率な気がする」——その段階からで構いません。',
  button: { label: 'お問い合わせ', href: homeHubLinks.contact },
} as const

export const homeHubMetadata = {
  title: 'ideal | 設計と一緒に、サンプルで試せる',
  description:
    '動くサンプルで設計と制作イメージを揃え、段階的に開発。Web・業務アプリ・AI。サービス詳細・デモ・相談への入口。',
} as const
