import { test, expect } from '@playwright/test'
import { expectMainNav } from '../helpers'

/**
 * ナビ健全性 + 旧 URL redirect
 * @see docs/UX_AUDIT.md §2 / next.config.ts
 */
test.describe('スモーク: ナビと redirect', () => {
  test('主要ナビが表示される', async ({ page }) => {
    await page.goto('/')
    await expectMainNav(page)
  })

  test('旧 blockchain サービス URL は LAB へ redirect', async ({ page }) => {
    await page.goto('/services/blockchain-development')
    await expect(page).toHaveURL(/lab\/blockchain/)
  })

  test('旧 metaverse サービス URL は LAB へ redirect', async ({ page }) => {
    await page.goto('/services/metaverse')
    await expect(page).toHaveURL(/lab\/metaverse/)
  })
})
