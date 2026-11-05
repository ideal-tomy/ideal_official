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
