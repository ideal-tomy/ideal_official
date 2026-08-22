import { test } from '@playwright/test'
import { assertHomeServiceCardAndOpen, openConciergeFromFab } from '../helpers'

/**
 * 主力サービスへの到達（旧 URL は /services アンカーへ集約）
 */
test.describe('サービス導線', () => {
  test('トップから Web サービスへ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(
      page,
      '/services/web-development',
      'Webサイト・LP制作',
      'Webサイト・LP',
    )
    await openConciergeFromFab(page)
  })

  test('トップから AI Hub へ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(
      page,
      '/services/ai-consulting',
      'AI開発',
    )
  })

  test('トップから App Hub へ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(
      page,
      '/services/app-development',
      'アプリ開発',
    )
  })
})
