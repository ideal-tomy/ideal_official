import { test, expect } from '@playwright/test'
import { openConciergeFromFab } from '../helpers'

/**
 * シナリオ骨格: トップ → デモ → 個別デモ → AIコンシェルジュ
 * @see docs/UX_AUDIT.md §4 シナリオ B / §7
 *
 * Gallery のカードはページ内アンカー。個別デモへは showcase の
 * 「このデモを体験する」から遷移する。
 */
test.describe('デモ体験から相談まで', () => {
  test('トップからデモを見てコンシェルジュを開ける', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', { name: /多機能よりも|シンプルな使用環境/ }),
    ).toBeVisible()

    await page.getByRole('link', { name: /デモを体験する/ }).first().click()
    await expect(page).toHaveURL(/ai-capability-gallery/)

    const voiceSection = page.locator('#capability-voice-to-structured')
    await voiceSection.scrollIntoViewIfNeeded()
    await Promise.all([
      page.waitForURL(/voice-to-structured/),
      voiceSection.getByRole('link', { name: /このデモを体験する/ }).click(),
    ])

    await expect(
      page.getByRole('heading', { name: '話すだけで、記録が完成する。' }).first(),
    ).toBeVisible()

    await openConciergeFromFab(page)
  })
})
