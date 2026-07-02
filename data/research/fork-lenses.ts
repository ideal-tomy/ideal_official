export type ForkAction = {
  name: string
  sp: number
  q: number
  co: number
}

export type ForkLens = {
  id: string
  name: string
  description: string
  key: 'sp' | 'q' | 'co'
  color: string
}

export const forkActions: ForkAction[] = [
  { name: '後輩への技術指導（部署横断）', sp: 0.2, q: 0.8, co: 0.95 },
  { name: '短期で成果を出す単独リリース', sp: 0.95, q: 0.4, co: 0.2 },
  { name: 'ドキュメント整備・知識共有', sp: 0.15, q: 0.95, co: 0.9 },
  { name: '高速な意思決定と実装反復', sp: 0.9, q: 0.3, co: 0.35 },
  { name: 'コミュニティ調整・合意形成', sp: 0.25, q: 0.6, co: 0.98 },
]

export const forkLenses: ForkLens[] = [
  {
    id: 'speed',
    name: 'スピード重視 DAO',
    description: '意思決定と実装の速さを最大の貢献とみなす。丁寧さより到達速度。',
    key: 'sp',
    color: '#E0A24E',
  },
  {
    id: 'quality',
    name: '品質・持続 DAO',
    description: '長期に効く堅牢さと知識の蓄積を評価。速さは二次的。',
    key: 'q',
    color: '#5EC8D8',
  },
  {
    id: 'community',
    name: '共助・調整 DAO',
    description: '他者を伸ばす行動と合意形成こそが最大の価値。',
    key: 'co',
    color: '#D9705A',
  },
]
