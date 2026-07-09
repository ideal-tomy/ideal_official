import { test, expect } from '@playwright/test'

/**
 * Visual Regression の骨組み（初回は --update-snapshots で基準画像を生成）
 * モーション・フォント差分でフレークしやすいので、必要になるまで skip 可。
 * @see docs/UX_AUDIT.md §7
 */
test.describe('Visual: トップ @visual', () => {
  test('PC トップ（above the fold）', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')
    await expect(page).toHaveScreenshot('home-desktop-hero.png', {
      fullPage: false,
      animations: 'disabled',
    })
  })

  test('モバイル トップ（above the fold）', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await expect(page).toHaveScreenshot('home-mobile-hero.png', {
      fullPage: false,
      animations: 'disabled',
    })
  })
})
