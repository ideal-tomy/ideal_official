import { test, expect } from '@playwright/test'

/**
 * LAB は思想の1ページ。計器は別ページ。
 */
test.describe('LAB 導線', () => {
  test('ヘッダーから LAB へ進み、思想の節が同じページにある', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: 'メニューを開く' }).click()
    await page
      .getByRole('navigation', { name: 'メインナビゲーション' })
      .getByRole('link', { name: 'LAB' })
      .click()
    await expect(page).toHaveURL(/\/lab\/?$/)

    await expect(page.locator('#philosophy')).toBeVisible()
    await expect(page.locator('#vision')).toBeVisible()
    await expect(page.locator('#declaration')).toBeVisible()
    await expect(page.locator('a[href="/research/poc-instrument"]').first()).toBeVisible()
    await expect(page.locator('#spatial')).toHaveCount(0)
  })

  test('旧 URL は思想か計器へ移る', async ({ page }) => {
    await page.goto('/philosophy')
    await expect(page).toHaveURL(/\/lab#philosophy$/)

    await page.goto('/research')
    await expect(page).toHaveURL(/\/research\/poc-instrument\/?$/)

    await page.goto('/lab/metaverse')
    await expect(page).toHaveURL(/\/lab\/?$/)

    await page.goto('/research/poc-instrument/loop')
    await expect(page).toHaveURL(/\/research\/poc-instrument#loop$/)
  })
})
