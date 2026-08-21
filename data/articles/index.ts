export type ArticleIndustry =
  | '建設'
  | '製造'
  | '医療・介護'
  | '保育'
  | '小売'
  | '飲食'
  | 'ビルメンテナンス'
  | '運送・物流'
  | '倉庫'

export type IndustryArticle = {
  slug: string
  title: string
  description: string
  industry: ArticleIndustry
  /** 読む目安（分） */
  readingMinutes: number
  /** 画面デモへの導線があるか（URL未公開の準備中は false） */
  hasDemo: boolean
  /** ハブに出す補足: 画面あり / 知識のみ / 画面準備中 */
  demoLabel: '画面あり' | '知識のみ' | '画面準備中'
  publishedAt: string
  lawCheckedAt: string
  /** 対応する W型LP（任意） */
  relatedDemoLp?: string
}

export const industryArticles: IndustryArticle[] = [
  {
    slug: 'construction',
    title: '工事写真の整理が終わらない理由と、その直し方。',
    description:
      '事務所に戻ってから写真を整理する。この順番のままでは終わりません。撮る前・撮るとき・撮ったあとに分けて、工事写真の実務のやり方をまとめました。',
    industry: '建設',
    readingMinutes: 10,
    hasDemo: true,
    demoLabel: '画面あり',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
    relatedDemoLp: '/demo/w/construction-record',
  },
  {
    slug: 'manufacturing',
    title: 'ベテランの手順を、聞き取って書き残す方法。',
    description:
      '手順書はあるのに、読んでも新人が作れない。書かれていないのは急所です。作業の分け方と、ベテランからの聞き出し方をまとめました。',
    industry: '製造',
    readingMinutes: 9,
    hasDemo: true,
    demoLabel: '画面あり',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
    relatedDemoLp: '/demo/w/manufacturing-judgment',
  },
  {
    slug: 'care',
    title: '運営指導で見られるのは、記録の量ではありません。',
    description:
      '見られるのは書類の量ではなく、書類どうしの食い違いです。何を見られるかは公開されています。記録の残し方をまとめました。',
    industry: '医療・介護',
    readingMinutes: 9,
    hasDemo: true,
    demoLabel: '画面あり',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
    relatedDemoLp: '/demo/w/care-records',
  },
  {
    slug: 'childcare',
    title: '保育の記録は、何かあった日のためにあります。',
    description:
      'いちばん重い役目は、何かあった日に説明できることです。ガイドラインの三つの場面から、記録の残し方をまとめました。',
    industry: '保育',
    readingMinutes: 8,
    hasDemo: true,
    demoLabel: '画面あり',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
    relatedDemoLp: '/demo/w/childcare-records',
  },
  {
    slug: 'retail',
    title: '問い合わせは、なぜ来たのかで分けると減らせます。',
    description:
      '内容で分けても件数は減りません。なぜ来たのかで分けると、表示を足せば来なくなるものが見えてきます。',
    industry: '小売',
    readingMinutes: 9,
    hasDemo: true,
    demoLabel: '画面あり',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
    relatedDemoLp: '/demo/w/retail-support',
  },
  {
    slug: 'restaurant',
    title: 'シフトでもめないために、先に決めておく四つのこと。',
    description:
      'シフトでもめるのは、組み方が下手だからではありません。決めていないことがあるからです。先に決めておくことをまとめました。',
    industry: '飲食',
    readingMinutes: 8,
    hasDemo: false,
    demoLabel: '画面準備中',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
  },
  {
    slug: 'building',
    title: '法定点検が漏れるのは、周期ではなく起点が違うからです。',
    description:
      '周期が違うだけならまだ管理できます。本当の問題は起点が違うことです。台帳に必要な列をまとめました。',
    industry: 'ビルメンテナンス',
    readingMinutes: 9,
    hasDemo: false,
    demoLabel: '画面準備中',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
  },
  {
    slug: 'logistics',
    title: '守れているかが分かる時期は、基準ごとに違います。',
    description:
      '改善基準告示は、その場で分かるものから年度末まで分からないものまであります。判定できる時期の違いをまとめました。',
    industry: '運送・物流',
    readingMinutes: 9,
    hasDemo: false,
    demoLabel: '知識のみ',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
  },
  {
    slug: 'warehouse',
    title: '数が合わないのは、数え間違いではありません。',
    description:
      '棚卸の差異には四つの原因があり、原因ごとに直し方が違います。数を合わせる前にやることをまとめました。',
    industry: '倉庫',
    readingMinutes: 9,
    hasDemo: false,
    demoLabel: '知識のみ',
    publishedAt: '2026-08',
    lawCheckedAt: '2026-08',
  },
]

export function getArticleBySlug(slug: string): IndustryArticle | undefined {
  return industryArticles.find((a) => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return industryArticles.map((a) => a.slug)
}

export function getArticleHref(slug: string): string {
  return `/articles/${slug}`
}

export function getArticleContactHref(slug: string): string {
  return `/contact?service=ai-consulting&intent=article&article=${encodeURIComponent(slug)}`
}
