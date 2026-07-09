import { test, expect } from '@playwright/test'

const FORBIDDEN_HREFS = [
  '/services/game-development',
  '/services/metaverse-development',
  '/services/nft-development',
]

const PAGES_TO_CHECK = [
  '/',
  '/services',
  '/services/web-development',
  '/services/app-development',
  '/services/ai-consulting',
  '/lab',
]

/**
 * 公開導線から死リンク URL への href が消えていること
 * @see docs/UX_AUDIT.md §2.1 H6
 */
test.describe('死リンク監視', () => {
  for (const path of PAGES_TO_CHECK) {
    test(`${path} に禁止 href がない`, async ({ page }) => {
      await page.goto(path)

      for (const forbidden of FORBIDDEN_HREFS) {
        await expect(page.locator(`a[href="${forbidden}"]`)).toHaveCount(0)
      }
    })
  }
})
