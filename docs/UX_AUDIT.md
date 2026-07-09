# ideal Site UX Audit（草案）

最終更新: 2026-07-10  
関連: [`SITE_EXPERIENCE_REDESIGN.md`](./SITE_EXPERIENCE_REDESIGN.md) / [`AI_CONCIERGE_IMPLEMENTATION_PLAN.md`](./AI_CONCIERGE_IMPLEMENTATION_PLAN.md)  
自動テスト: [`e2e/`](../e2e/)（Playwright 骨組み）

## 0. 目的

大規模なサイト再構成後に、**ページ単体のデザイン**ではなく **サイト全体を一つのプロダクトとして導線監査**する。

確認の4段階:

| 段階 | 内容 | 手段 |
|------|------|------|
| ① 導線設計 | サイトマップ・CTA・前後関係 | 本ドキュメント |
| ② UI整合 | 3カラム化・旧名称・関連リンク | 影響箇所インベントリ |
| ③ 自動テスト | リンク切れ・CTA・モーダル・主要シナリオ | Playwright (`e2e/`) |
| ④ 訪問者シナリオ | 迷わないか・快適か | 人手ウォークスルー |

**自動テストだけでは「3カラムが自然か」「迷わないか」は判断できない。**  
快適さは④、回帰防止は③。

---

## 1. 確定サイトマップ（監査基準）

```
TOP (/)
DEMO (/ai-capability-gallery + 個別デモ)
CASES (/cases + /cases/industries/[slug])
SERVICES
  ├ Webサイト・LP制作          /services/web-development
  ├ Webアプリ・業務ツール開発  /services/app-development
  └ AIプロトタイプ・自動化     /services/ai-consulting
LAB
  ├ Insights                   /lab/insights
  ├ Blockchain / DAO           /lab/blockchain
  ├ Spatial / VR / AR          /lab/metaverse
  ├ Philosophy                 /philosophy
  └ Research                   /research (+ poc-instrument)
CONTACT (/contact)
```

**主力サービスは3本。** Blockchain / Metaverse / ゲームは SERVICES と同格に置かない（LAB または非掲載）。

理想導線:

```
デモを見る → 自社業務に置き換える → AIコンシェルジュで相談
  → 要件整理・概算 → 問い合わせ
```

営業デモ手順: [`AI_CONCIERGE_SALES_SCENARIO.md`](./AI_CONCIERGE_SALES_SCENARIO.md)

---

## 2. 影響箇所インベントリ（2026-07-10 時点）

### 2.1 優先度 High（先に直す）

| ID | 箇所 | 状態 | 対応 |
|----|------|------|------|
| H1 | `/services` 一覧 | **対応済** | 主力3 + LAB 誘導に書き換え |
| H2 | サイト metadata | **対応済** | `layout.tsx` / `contact/page.tsx` |
| H3 | AI 関連サービス | **対応済** | `ai.tsx` related を Web / App / LAB に |
| H4 | Web 関連サービス | **対応済** | ゲーム制作リンク削除 |
| H5 | コンシェルジュ ROOT | **対応済** | 新5択 + LAB 相談口 |
| H6 | 死リンク URL | **対応済** | 公開ページから href 削除（redirect は未追加） |

### 2.2 優先度 Medium

| ID | 箇所 | 状態 | 対応 |
|----|------|------|------|
| M1 | 依頼できることグリッド | **対応済** | `lg:grid-cols-3` 固定 |
| M2 | サービス正式名称 | **対応済** | ナビ・トップ・service-links 統一 |
| M3 | コンシェルジュ BC track | **対応済** | ROOT 最下位 + metaverse → bc ヒント |
| M4 | redirect と共存ページ | 未対応 | 本プラン外（デッドコード残存） |
| M5 | sitemap / robots | **対応済** | `app/sitemap.ts` / `app/robots.ts` |
| M6 | App related（旧データ） | **対応済** | `app-development.tsx` 整理 |

### 2.3 優先度 Low / オーファン

| ID | 箇所 | メモ |
|----|------|------|
| L1 | `ServicesOverview` / `ServiceGridSection` / `TwoCardSection` | 未 import。旧5サービス hardcode |
| L2 | `/test-*`（10ルート） | 開発用。旧コピー多数。本番導線外 |
| L3 | `data/services/game-development.tsx` 等 | 未使用データ残存 |
| L4 | Hero「Web・AI・アプリ」 | 許容範囲だが正式名と揃えるとよい |

### 2.4 比較的きれいな領域

- Header / Footer / MobileMenu の NAV 構造（トップ・デモ・事例・サービスDD・LAB・問い合わせ）
- トップのサービス件数（3件）
- LAB ハブ・`labNavLinks`
- BC / Meta / dao-design の `next.config.ts` redirects
- コンシェルジュの pathname → `pageContext` 自動解決（C1）

---

## 3. ページ別導線マップ（草案）

各ページで埋める項目:

| 項目 | 内容 |
|------|------|
| 目的 | 何を理解・体験してほしいか |
| 主CTA | 最も押してほしいボタン |
| 副CTA | 次に取れる行動 |
| 前のページ | どこから来るか |
| 次のページ | どこへ行くか |
| 関連デモ | 何を見せるか |
| コンシェルジュ | どの文脈で開くか |

### 3.1 TOP `/`

| 項目 | 現状メモ | 推奨 |
|------|----------|------|
| 目的 | 体験入口を示す | 維持 |
| 主CTA | デモを体験 | 維持 |
| 副CTA | お問い合わせ / 事例 | 維持 |
| 次 | デモ → 依頼できること → 事例 → LAB → CTA | **依頼できること: 3カラム化 (M1)** |
| コンシェルジュ | `home` → 多くは ROOT 直行 | ROOT を新3本立てに (H5) |

### 3.2 DEMO Hub `/ai-capability-gallery`

| 項目 | 推奨 |
|------|------|
| 目的 | 触って「できそう」を感じる |
| 主CTA | 個別デモへ |
| 副CTA | 事例 / コンシェルジュ |
| コンシェルジュ | `demo_hub` 文脈（実装済み） |

### 3.3 個別デモ（例: voice-to-structured）

| 項目 | 推奨 |
|------|------|
| 目的 | 1パターンを体験 |
| 主CTA | 自社向けに相談 / 関連デモ |
| コンシェルジュ | `demo` + demoId（実装済み）→ 「このデモを業務に応用できるか」 |

### 3.4 CASES

| 項目 | 推奨 |
|------|------|
| 目的 | 業界フローで置き換える |
| 主CTA | 関連デモ → 相談 |
| コンシェルジュ | `case` 文脈 |

### 3.5 SERVICES（各 Hub）

| ページ | 主CTA | 関連 | コンシェルジュ |
|--------|-------|------|----------------|
| Web | 体験・相談 | App / AI /（LABは控えめ） | `service` + web |
| App | 操作デモ・相談 | Web / AI | `service` + app |
| AI | デモ Hub・相談 | Web / App / 事例 | `service` + ai |

**関連サービスは旧 peer（ゲーム・NFT 等）を載せない (H3/H4)。**

### 3.6 LAB

| 項目 | 推奨 |
|------|------|
| 目的 | 研究・専門領域。売り込みを抑える |
| 主CTA | Insights / プロジェクト深掘り |
| 副CTA | 専門相談（コンシェルジュ or contact） |
| 注意 | 主力3サービスと同格のカードにしない |

### 3.7 CONTACT

| 項目 | 推奨 |
|------|------|
| 目的 | 相談の完了 |
| 前 | コンシェルジュ完了・各ページ CTA |
| metadata | 旧5領域表記を更新 (H2) |

---

## 4. 訪問者シナリオ（人手レビュー用）

実施: 2026-07-10（E2E + コード導線確認。快適さの最終判断は引き続き人手推奨）

| シナリオ | 結果 | メモ |
|----------|------|------|
| A Webリニューアル | OK | TOP → 依頼できること → Web Hub。3クリック以内 |
| B 業務効率化（AI詳しくない） | OK | デモ Hub → 音声デモ → コンシェルジュ。AI 用語なしでも到達可 |
| C 技術力確認 | OK | デモ・事例・サービス・LAB の導線は維持 |
| D LAB専門相談 | OK | LAB → Blockchain / Spatial。ROOT に LAB 相談口追加 |

---

## 5. AIコンシェルジュ整合（監査メモ）

実装済み: pathname → `resolvePageContext` → context openings（C0〜C2）。

**2026-07-10 対応済み:**

1. `ROOT_CHOICES` を新5択に更新（ゲーム同列を廃止、LAB 相談を最下位に配置）
2. `app` track の「ゲーム」文言を業務ツール寄りに変更
3. `serviceIdToIdealTrack` に `metaverse` → `bc` を追加

残タスク（別プラン）:

- トップ `home` からの文脈オープニング強化（C1 拡張）
- C3 LLM 接続

---

## 6. UI整合チェックリスト（改修用）

- [x] トップ「依頼できること」を PC 3カラムに（`xl:grid-cols-4` 削除）
- [x] `/services` を3サービス + LAB 誘導に書き換え
- [x] 全 `relatedServices` の死リンク・旧 peer を除去
- [x] `ROOT_CHOICES` / app track の「ゲーム」表記を見直し
- [x] ナビ・カード・metadata のサービス名を統一
- [x] `game-development` 等へのリンク削除（公開導線）
- [x] sitemap.ts / robots.ts
- [ ] 未使用セクション・test ページの整理方針決定（Low・後続）

---

## 7. 自動テスト方針

詳細は `e2e/`。最低シナリオ:

| テスト | 経路 |
|--------|------|
| デモ→相談 | TOP → デモ Hub → 音声デモ → コンシェルジュ |
| Web相談 | TOP → 依頼できること → Web → コンシェルジュ文脈 |
| App相談 | TOP → App Hub |
| AI相談 | TOP → AI Hub → デモ |
| LAB閲覧 | TOP → LAB → Blockchain または Spatial |
| 死リンク監視 | 主要ページの禁止 href がないこと | `e2e/smoke/dead-links.spec.ts` |
| ROOT 整合 | トップ FAB から新5択 | `e2e/smoke/concierge-root.spec.ts` |

Visual Regression（任意・後続）:

- viewport: 1440 / 1024 / 768 / 390
- 対象: TOP, デモ Hub, Web Hub, AI Hub

---

## 8. 推奨作業順

1. ~~本インベントリの High を修正~~ **完了（2026-07-10）**
2. ~~M1 3カラム化~~ **完了**
3. ~~シナリオ A〜D を確認~~ **E2E + 導線確認済み**
4. **`npm run test:e2e` を CI またはローカル習慣に**（継続）
5. Visual Regression を追加（後続）
6. Low（オーファン・test-*）の整理（後続）

---

## 9. 変更履歴

| 日付 | 内容 |
|------|------|
| 2026-07-10 | 初版草案。コードベース洗い出し + Playwright 骨組みと同時作成。E2E 9本（smoke + journeys）がローカルで通過することを確認 |
| 2026-07-10 | UX Audit 実行プラン実施。High + M1/M2/M5 対応、E2E 拡張（dead-links / concierge-root） |
