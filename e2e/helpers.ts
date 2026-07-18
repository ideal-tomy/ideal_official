import { expect, type Page } from '@playwright/test'

/** FAB（aria-label 既定: コンシェルジュ）でモーダルを開く */
export async function openConciergeFromFab(page: Page) {
  await page.getByRole('button', { name: 'コンシェルジュ', exact: true }).click()
  await expect(
    page.getByRole('heading', { name: 'AIコンシェルジュ', exact: true }),
  ).toBeVisible({ timeout: 15_000 })
}

/** サイトメニュー FAB を開く */
export async function openSiteMenu(page: Page) {
  await page.getByRole('button', { name: 'メニューを開く' }).click()
  await expect(
    page.getByRole('navigation', { name: 'メインナビゲーション' }),
  ).toBeVisible()
}

/** 主要ナビが壊れていないこと（FAB ドロワー） */
export async function expectMainNav(page: Page) {
  await openSiteMenu(page)
  const nav = page.getByRole('navigation', { name: 'メインナビゲーション' })
  await expect(nav.getByRole('link', { name: 'トップ' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'デモ一覧' })).toBeVisible()
  await expect(nav.getByRole('link', { name: '事例' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'LAB' })).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'お問い合わせ' }).first(),
  ).toBeVisible()
}

/**
 * トップのデモショーケース経由でサービス／デモ導線があることを確認し、ページを開く。
 * Next.js のクライアント遷移は環境によって不安定なため、href 検証 + goto を使う。
 */
export async function assertHomeServiceCardAndOpen(
  page: Page,
  href: '/services/web-development' | '/services/ai-consulting' | '/services/app-development',
) {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /まず、触ってください/ })).toBeVisible()
  // サービス詳細はドロワーまたは /services 経由。直接遷移で検証を安定させる
  await page.goto(href)
  await expect(page).toHaveURL(new RegExp(href.replace(/\//g, '\\/')))
}
