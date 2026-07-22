/**
 * ページ文脈に応じた案内オープニング（選択式なし・1文）
 */

import type { ConciergePageContext } from '../page-context'

export function getGuideOpening(
  pageContext: ConciergePageContext | undefined,
): string {
  if (!pageContext) {
    return '聞きたいことややりたいことを書いてください。サイト内の最適なページへご案内します。'
  }

  switch (pageContext.pageType) {
    case 'demo':
      return `「${pageContext.label ?? 'このデモ'}」を見ている方向けです。活用イメージや進め方、見積もりなど、知りたいことをどうぞ。`
    case 'demo_hub':
      return 'デモ一覧を見ている方向けです。触りたい変化や、金額・進め方など知りたいことをどうぞ。'
    case 'case':
      return `「${pageContext.label ?? 'この活用イメージ'}」を見ている方向けです。進め方や見積もり、お問い合わせなどご案内できます。`
    case 'service':
      return `「${pageContext.label ?? 'このサービス'}」のページからですね。金額・デモ・進め方・連絡方法など、知りたいことをどうぞ。`
    case 'contact':
      return 'お問い合わせページにいます。送信前にデモや見積もりを見たい場合もご案内できます。'
    case 'home':
      return '聞きたいことややりたいことを書いてください。金額・デモ・活用イメージ・進め方など、サイト内へご案内します。'
    default:
      return '聞きたいことややりたいことを書いてください。サイト内の最適なページへご案内します。'
  }
}
