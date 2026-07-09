import { test, expect } from '@playwright/test'
import { openConciergeFromFab } from '../helpers'

/**
 * コンシェルジュ ROOT が新サイト構造と一致すること
 * @see docs/UX_AUDIT.md §5 / Phase 3
 */
test.describe('コンシェルジュ ROOT', () => {
  test('トップから開くと新5択が表示される', async ({ page }) => {
    await page.goto('/')
    await openConciergeFromFab(page)

    await expect(
      page.getByRole('button', { name: /Webサイト・LPを作りたい/ }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: /業務ツール・Webアプリを作りたい/ }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: /AIを業務やサービスに取り入れたい/ }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: /まだ決まっていないが、何ができるか相談したい/ }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: /LAB領域について相談したい/ }),
    ).toBeVisible()

    await expect(page.getByRole('button', { name: /アプリ・ゲーム/ })).toHaveCount(0)
  })
})
