import { test, expect } from '@playwright/test'
import { openConciergeFromFab } from '../helpers'

/**
 * シナリオ骨格: トップ → デモ一覧 → 個別デモ（カード直リンク）→ AIコンシェルジュ
 * @see docs/UX_AUDIT.md §4 シナリオ B / §7
 */
test.describe('デモ体験から相談まで', () => {
  test('トップからデモを見てコンシェルジュを開ける', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: /デモを体験|デモ一覧|Gallery/i }).first().click()
    await expect(page).toHaveURL(/ai-capability-gallery/)

    await Promise.all([
      page.waitForURL(/voice-to-structured/),
      page
        .getByRole('link', { name: /話すだけで、記録が完成する/ })
        .first()
        .click(),
    ])

    await expect(
      page.getByRole('heading', { name: '話すだけで、記録が完成する。' }).first(),
    ).toBeVisible()

    await openConciergeFromFab(page)
  })
})
