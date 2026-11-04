/** 思想の節。LAB の先頭から、本文の該当箇所へ飛ぶ */
export const labSections = [
  { id: 'vision', title: 'はじめに', description: '無数の理想郷が共存できる、メタシステムの設計。' },
  { id: 'conflict', title: '問題と課題', description: '信用コストと、評価をごまかす優しさ。' },
  { id: 'value', title: '価値の再定義', description: '評価と救済を、システムとして分けます。' },
  { id: 'mechanism', title: '基本設計', description: '観測、記録、測定、執行、フィードバック。' },
  { id: 'structure', title: '組織構造', description: '価値観で分岐し、履歴は持ち運べます。' },
  { id: 'path', title: 'ロードマップ', description: 'まだ壁があることを隠さず、順に確かめます。' },
  { id: 'declaration', title: '新しい最適化', description: '正直さが、結果と結びつく環境。' },
] as const

/** トップ・サービス末尾・フッターから、2つのページへ入る */
export const labEntries = [
  {
    id: 'philosophy',
    title: '思想',
    description: '自由と秩序が両立した社会の設計。考え方と、そこへ至る道筋。',
    href: '/lab#philosophy',
  },
  {
    id: 'instrument',
    title: '技術提案',
    description: '思想の仕組みを、1ページの計器で動かして確かめます。',
    href: '/research/poc-instrument',
  },
] as const

export const labHero = {
  title: '深く知る場所',
  description: '仕事の手前で考えている社会の仕組みを、ここで読んでいます。',
} as const

export const labPhilosophyHead = {
  eyebrow: '思想',
  lines: ['自由と秩序が両立した', '社会を設計する'],
  lead: '正直であることが合理的な環境の設計へ。思想と仕組みの両面から、理想の社会像を示します。',
} as const

export const labInstrument = {
  eyebrow: '技術提案',
  lines: ['読んだ仕組みを、', '動かして確かめる'],
  lead: '各節の終わりからも、同じ論点の計器へ行けます。計器は、このページとは別の1ページです。',
  cta: '計器を動かす',
  href: '/research/poc-instrument',
} as const

export const labContact = {
  lines: ['思想への質問も、', '試作の相談も'],
  body: '読みながら出てきた質問や、試作の相談は、お問い合わせから送ってください。',
  cta: 'お問い合わせへ',
  href: '/contact',
} as const
