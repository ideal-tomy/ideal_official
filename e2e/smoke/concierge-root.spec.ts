import { test, expect } from '@playwright/test'
import { openConciergeFromFab } from '../helpers'

/**
 * サイト案内コンシェルジュ（テンプレ優先）
 */
test.describe('サイト案内コンシェルジュ', () => {
  test('トップから開くと案内チップが表示される', async ({ page }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.setItem('ideal_welcome_greeted', '1')
      } catch {
        /* ignore */
      }
    })
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
    await page.addInitScript(() => {
      try {
        sessionStorage.setItem('ideal_welcome_greeted', '1')
      } catch {
        /* ignore */
      }
    })
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

  test('初回訪問であいさつが出て消える', async ({ page }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.removeItem('ideal_welcome_greeted')
      } catch {
        /* ignore */
      }
    })
    await page.goto('/')
    await expect(
      page.getByRole('status', { name: 'コンシェルジュからのあいさつ' }),
    ).toBeVisible({ timeout: 10_000 })
    await expect(page.getByText('来てくれてありがとうございます')).toBeVisible()
    await expect(
      page.getByRole('status', { name: 'コンシェルジュからのあいさつ' }),
    ).toBeHidden({ timeout: 15_000 })
  })

  test('フッター直前であいさつが出る（ページごと）', async ({ page }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.setItem('ideal_welcome_greeted', '1')
        sessionStorage.removeItem('ideal_footer_greeted:/')
      } catch {
        /* ignore */
      }
    })
    await page.goto('/')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(
      page.getByRole('dialog', { name: 'コンシェルジュからのメッセージ' }),
    ).toBeVisible({ timeout: 15_000 })
    await expect(
      page.getByText('読んでくれてありがとうございます'),
    ).toBeVisible()
    // クロスフェード後にボタンのみ吹き出し
    await expect(page.getByRole('link', { name: 'デモ一覧' })).toBeVisible({
      timeout: 10_000,
    })
    await expect(page.getByRole('link', { name: 'デモ一覧' })).toHaveAttribute(
      'href',
      '/ai-capability-gallery',
    )
    await expect(page.getByRole('link', { name: '活用イメージ' })).toHaveAttribute(
      'href',
      '/cases',
    )
    // チップ表示後はありがとう文が消えている（非表示）
    await expect(
      page.getByText('読んでくれてありがとうございます'),
    ).toBeHidden({ timeout: 5_000 })
  })

  test('デモ一覧のフッターは別導線チップ', async ({ page }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.setItem('ideal_welcome_greeted', '1')
        sessionStorage.removeItem('ideal_footer_greeted:/ai-capability-gallery')
      } catch {
        /* ignore */
      }
    })
    await page.goto('/ai-capability-gallery')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(
      page.getByRole('dialog', { name: 'コンシェルジュからのメッセージ' }),
    ).toBeVisible({ timeout: 15_000 })
    await expect(page.getByRole('link', { name: '活用イメージ' })).toBeVisible({
      timeout: 10_000,
    })
    await expect(page.getByRole('link', { name: 'お問い合わせ' })).toHaveAttribute(
      'href',
      '/contact',
    )
  })
})
