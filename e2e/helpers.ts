import { expect, type Page } from '@playwright/test'

/** FAB（aria-label 既定: コンシェルジュ）でモーダルを開く */
export async function openConciergeFromFab(page: Page) {
  await page.getByRole('button', { name: 'コンシェルジュ', exact: true }).click()
  await expect(
    page.getByRole('heading', { name: 'AIコンシェルジュ', exact: true }),
  ).toBeVisible({ timeout: 15_000 })
}

/** 主要ナビが壊れていないこと（ヘッダー） */
export async function expectMainNav(page: Page) {
  const nav = page.getByRole('navigation', { name: 'メインナビゲーション' })
  await expect(nav.getByRole('link', { name: 'トップ' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'デモ' })).toBeVisible()
  await expect(nav.getByRole('link', { name: '事例' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'LAB' })).toBeVisible()
  await expect(nav.getByRole('link', { name: '問い合わせ' })).toBeVisible()
}

/**
 * トップ「依頼できること」にサービスカードがあることを確認し、ページを開く。
 * Next.js のクライアント遷移は環境によって不安定なため、href 検証 + goto を使う。
 */
export async function assertHomeServiceCardAndOpen(
  page: Page,
  href: '/services/web-development' | '/services/ai-consulting' | '/services/app-development',
) {
  await page.goto('/')
  const section = page.locator('section').filter({
    has: page.getByRole('heading', { name: '依頼できること' }),
  })
  await section.scrollIntoViewIfNeeded()
  await expect(section.locator(`a[href="${href}"]`)).toBeVisible()
  await page.goto(href)
  await expect(page).toHaveURL(new RegExp(href.replace(/\//g, '\\/')))
}
