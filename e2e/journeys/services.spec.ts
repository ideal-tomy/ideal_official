import { test } from '@playwright/test'
import { assertHomeServiceCardAndOpen, openConciergeFromFab } from '../helpers'

/**
 * 主力3サービスへの到達
 * @see docs/UX_AUDIT.md §4 シナリオ A / §7
 */
test.describe('サービス導線', () => {
  test('トップ「社内にIT部門がなくても、 事業に必要な仕組みはつくれる。」から Web へ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(page, '/services/web-development')
    await openConciergeFromFab(page)
  })

  test('トップから AI Hub へ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(page, '/services/ai-consulting')
  })

  test('トップから App Hub へ進める', async ({ page }) => {
    await assertHomeServiceCardAndOpen(page, '/services/app-development')
  })
})
