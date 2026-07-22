import { test, expect } from '@playwright/test'
import { openConciergeFromFab } from '../helpers'

/**
 * サイト案内コンシェルジュ（テンプレ優先）
 */
test.describe('サイト案内コンシェルジュ', () => {
  test('トップから開くと案内チップが表示される', async ({ page }) => {
    await page.goto('/')
    await openConciergeFromFab(page)

    await expect(
      page.getByRole('button', { name: '金額・見積もり' }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: '何ができるか' }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: '活用イメージ' }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: '連絡方法' }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: '進め方・依頼' }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: '他社との違い' }),
    ).toBeVisible()

    await expect(
      page.getByRole('button', { name: /Webサイト・LPを作りたい/ }),
    ).toHaveCount(0)
  })

  test('金額チップで見積もりリンクが出る', async ({ page }) => {
    await page.goto('/')
    await openConciergeFromFab(page)

    await page.getByRole('button', { name: '金額・見積もり' }).click()
    await expect(
      page.getByRole('link', { name: '概算見積もりへ' }),
    ).toBeVisible()
    await expect(page.getByRole('link', { name: '概算見積もりへ' })).toHaveAttribute(
      'href',
      '/estimate',
    )
  })

  test('フッター直前であいさつが出る（セッション1回）', async ({ page }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.removeItem('ideal_greeted')
      } catch {
        /* ignore */
      }
    })
    await page.goto('/')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(
      page.getByRole('dialog', { name: 'コンシェルジュからのメッセージ' }),
    ).toBeVisible({ timeout: 15_000 })
    await expect(page.getByRole('link', { name: 'デモを触る' })).toHaveAttribute(
      'href',
      '/ai-capability-gallery',
    )
  })
})
