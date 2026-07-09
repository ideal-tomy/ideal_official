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

---

## 2. 影響箇所インベントリ（2026-07-10 時点）

### 2.1 優先度 High（先に直す）

| ID | 箇所 | 現状 | あるべき姿 | ファイル |
|----|------|------|------------|----------|
| H1 | `/services` 一覧 | 5サービス（BC・Meta を peer 掲載）、旧コピー | 主力3 + LAB誘導 | `app/services/page.tsx` |
| H2 | サイト metadata | 「ゲーム制作、ブロックチェーン開発」等 | 3サービス中心の説明 | `app/layout.tsx`, `app/contact/page.tsx` |
| H3 | AI 関連サービス | BC / メタバース開発 / NFT（死リンク含む） | Web / App /（必要なら LAB） | `data/services/ai.tsx` → `relatedServices`（未使用の `aiRelatedServices` あり） |
| H4 | Web 関連サービス | **ゲーム制作** → `/services/game-development`（404） | 3サービス + LAB | `data/services/web-development.tsx` |
| H5 | コンシェルジュ ROOT | 5択（アプリ・ゲーム / BC 同列） | 3サービス + 未定 + LAB相談（任意） | `lib/concierge/ideal-flow.ts` |
| H6 | 死リンク URL | `game-development` / `metaverse-development` / `nft-development` | redirect またはリンク削除 | `next.config.ts` + related データ |

### 2.2 優先度 Medium

| ID | 箇所 | 現状 | あるべき姿 | ファイル |
|----|------|------|------------|----------|
| M1 | 依頼できることグリッド | 3件なのに `xl:grid-cols-4` | PC は3カラム | `components/sections/ServiceGridSectionFixed.tsx` |
| M2 | サービス正式名称 | 「Webサイト制作」「AI」など短い旧名 | LP / プロトタイプ等の正式名に寄せる | `app/page.tsx`, `data/services/service-links.ts` |
| M3 | コンシェルジュ BC track | ROOT 同列 + `blockchain-development` ID | LAB 相談として分離 or 下位 | `ideal-flow.ts`, `service-links.ts`, `context-openings.ts` |
| M4 | redirect と共存ページ | `/services/blockchain-development` 等は 301 済みだが page 残存 | デッドコード整理（任意） | `app/services/blockchain-development/`, `metaverse/` |
| M5 | sitemap / robots | なし | 主要ルートを明示 | （未作成） |
| M6 | App related（旧データ） | `app-development.tsx` にゲーム制作 | Hub 側は概ねOK。旧ファイル整理 | `data/services/app-development.tsx` |

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
| 主CTA | デモを体験する | 維持 |
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

### シナリオ A — Webサイトを作り直したい小規模事業者

```
TOP → 依頼できること → Webサイト・LP → 制作表現・事例 → コンシェルジュ → リニューアル → 相談
```

確認: **3クリック前後で Web ページに着けるか。**

### シナリオ B — 業務効率化したいが AI に詳しくない

```
TOP → デモ → 音声→構造化 等 → 「使えそう」→ コンシェルジュ → 業務課題 → 関連デモ・要件整理
```

確認: **AI という言葉なしでも欲しいものに着けるか。**

### シナリオ C — 発注予定はないが技術力を見たい

```
TOP → デモ複数 → 事例 → Web / AI → LAB
```

確認: **売り込み感なく技術力を感じられるか。**

### シナリオ D — DAO / VR の専門相談

```
TOP → LAB → Blockchain または Spatial → プロジェクト → 専門相談
```

確認: **主力から外した領域が見つからなくなっていないか。**

---

## 5. AIコンシェルジュ整合（監査メモ）

実装済み: pathname → `resolvePageContext` → context openings（C0〜C2）。

まだズレている点:

1. **ROOT_CHOICES が旧5 peer 構造**（ゲーム・BC 同列）
2. トップから開くと文脈オープニングが弱く、旧 ROOT に直行しやすい
3. LAB（spatial）からの track ヒントが薄い（`metaverse` → IdealTrack なし）

推奨 ROOT 案（実装は別タスク）:

- Webサイト・LPを作りたい / 作り直したい
- 業務ツール・Webアプリを作りたい
- AIを業務やサービスに取り入れたい
- まだ決まっていないが、何ができるか相談したい
- LAB領域について相談したい（任意・下位）

---

## 6. UI整合チェックリスト（改修用）

- [ ] トップ「依頼できること」を PC 3カラムに（`xl:grid-cols-4` 削除）
- [ ] `/services` を3サービス + LAB 誘導に書き換え
- [ ] 全 `relatedServices` の死リンク・旧 peer を除去
- [ ] `ROOT_CHOICES` / app track の「ゲーム」表記を見直し
- [ ] ナビ・カード・metadata のサービス名を統一
- [ ] `game-development` 等へ redirect またはリンク削除
- [ ] （任意）sitemap.ts / robots.txt
- [ ] （任意）未使用セクション・test ページの整理方針決定

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
| 死リンク監視 | 主要ページの `a[href]` が 404 でないこと（段階的に） |

Visual Regression（任意・後続）:

- viewport: 1440 / 1024 / 768 / 390
- 対象: TOP, デモ Hub, Web Hub, AI Hub

---

## 8. 推奨作業順

1. **本インベントリの High を修正**（死リンク・`/services`・related・ROOT）
2. **M1 3カラム化**（見た目の即効）
3. **シナリオ A〜D を人手で1周**
4. **`npm run test:e2e` を CI またはローカル習慣に**
5. 必要なら Visual Regression を追加

---

## 9. 変更履歴

| 日付 | 内容 |
|------|------|
| 2026-07-10 | 初版草案。コードベース洗い出し + Playwright 骨組みと同時作成。E2E 9本（smoke + journeys）がローカルで通過することを確認 |
