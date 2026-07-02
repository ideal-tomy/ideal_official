export type ZkpClaim = {
  claim: string
}

export const zkpClaims: ZkpClaim[] = [
  { claim: 'この貢献者の PoC 資産 ≥ 上位20%閾値' },
  { claim: '過去12ヶ月の整合性 ξ ≥ 0.7 を維持' },
  { claim: 'このDAOの参加資格（貢献 ≥ 基準）を満たす' },
  { claim: '記録された貢献はすべて本人署名済み' },
]

export const zkpPrivateRows = [
  '発言・議論ログ',
  'コード断片',
  '個別の行動履歴',
  '評価の生データ',
]
