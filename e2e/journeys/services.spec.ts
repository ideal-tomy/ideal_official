import { test } from '@playwright/test'
import { assertHomeServiceCardAndOpen, openConciergeFromFab } from '../helpers'

/**
 * 主力サービスへの到達（旧 URL は /services アンカーへ集約）
 * @see docs/UX_AUDIT.md §4 シナリオ A / §7
 */
test.describe('サービス導線', () => {
  test('トップから Web サービスへ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(
      page,
      '/services/web-development',
      'Webサイト・LP制作',
    )
    await openConciergeFromFab(page)
  })

  test('トップから AI Hub へ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(
      page,
      '/services/ai-consulting',
      'AIプロトタイプ・自動化',
    )
  })

  test('トップから App Hub へ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(
      page,
      '/services/app-development',
      'Webアプリ・業務ツール開発',
    )
  })
})
