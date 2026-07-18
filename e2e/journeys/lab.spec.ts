import { test, expect } from '@playwright/test'

/**
 * LAB 領域が見つかること（主力から外しても孤立しない）
 * @see docs/UX_AUDIT.md §4 シナリオ D
 */
test.describe('LAB 導線', () => {
  test('ヘッダーから LAB → Blockchain へ進める', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: 'メニューを開く' }).click()
    await page
      .getByRole('navigation', { name: 'メインナビゲーション' })
      .getByRole('link', { name: 'LAB' })
      .click()
    await expect(page).toHaveURL(/\/lab\/?$/)

    await expect(page.locator('a[href="/lab/blockchain"]').first()).toBeVisible()
    await page.goto('/lab/blockchain')
    await expect(page).toHaveURL(/lab\/blockchain/)
  })

  test('LAB から Spatial / Metaverse へ進める', async ({ page }) => {
    await page.goto('/lab')
    await expect(page.locator('a[href="/lab/metaverse"]').first()).toBeVisible()
    await page.goto('/lab/metaverse')
    await expect(page).toHaveURL(/lab\/metaverse/)
  })
})
