export type EnvironmentShift = {
  theme: string
  from: string
  to: string
}

export const environmentShifts: EnvironmentShift[] = [
  {
    theme: '見えない貢献',
    from: '声の大きい人・目立つ人が得をし、静かな貢献や小さな配慮は無視される。',
    to: '見落とされがちな貢献も、小さなマイナスの影響も、AIが等しく捉える。',
  },
  {
    theme: '評価のものさし',
    from: '評価する人の印象・好き嫌い・その日の機嫌で、基準がぶれる。',
    to: '全員に対して同じ、統一された公平な基準。不平等・不公平が生まれにくい。',
  },
  {
    theme: '評価という負担',
    from: '評価する側もされる側も、気まずさ・忖度・顔色の伺い合いに消耗する。',
    to: '人が人を裁かなくていい。評価から解放される快適さが生まれる。',
  },
  {
    theme: '相関で見る',
    from: 'まぐれ当たり・責任転嫁・声の大きさが、実力のように通ってしまう。',
    to: '日々の活動と結果の相関で見るから、まぐれや押し付けが通用しにくい。',
  },
]

export type PlainLanguageCard = {
  title: string
  tech: string
  example: string
  benefit: string
  accent: 'signal' | 'value'
}

export const plainLanguageCards: PlainLanguageCard[] = [
  {
    title: '行動',
    tech: '観測',
    example:
      '後輩に教える、資料を整える、面倒な調整を引き受ける——目立たない行動も、AIが取りこぼさず気づきます。',
    benefit: '誰も見ていなかった貢献が、はじめて可視化される。',
    accent: 'signal',
  },
  {
    title: '記録',
    tech: '記録',
    example:
      'その事実は消えずに残ります。上司が代わっても、部署や会社を移っても、履歴はリセットされません。',
    benefit: '実績が、あなた自身のものとして持ち運べる。',
    accent: 'value',
  },
  {
    title: '評価',
    tech: '測定',
    example:
      '人の好き嫌いや第一印象ではなく、全員に対して同じ統一されたものさしで判定されます。',
    benefit: '「気に入られる努力」が要らなくなる。',
    accent: 'value',
  },
  {
    title: '執行',
    tech: '執行',
    example:
      '評価に応じて、報酬や信頼が自動で返ります。誰かの承認待ちや忖度は、間に挟まれません。',
    benefit: '頑張りが、遅延なく結果に変わる。',
    accent: 'signal',
  },
  {
    title: 'FB',
    tech: 'フィードバック',
    example:
      '積み上がった履歴が、次の機会につながります。短期の「逃げ得」は、長い目で見ると効きにくくなります。',
    benefit: '誠実さが、時間をかけて報われる。',
    accent: 'signal',
  },
]
