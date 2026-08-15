# 不要ファイル・不要コード整理計画

最終更新: 2026-08-15
**実施状況: 全フェーズ完了(2026-08-15)。** コミット `26568b7`〜`1a19656`。実施結果と当初計画からの変更点は各フェーズ末尾の「実施結果」を参照。
目的: `ideal_official` リポジトリに蓄積した一時ファイル・使われなくなったコンポーネント・未参照メディア・空/陳腐化ドキュメントを洗い出し、安全な順序で削除・整理する。
調査方法: ディレクトリ構成の目視確認、`git ls-files` によるトラッキング状態確認、`npm run lint` のベースライン取得、全コンポーネント/データファイルに対する import・JSXタグの網羅的 grep（サブエージェントによる二重検証込み）。

> **進め方の原則**
> - 各フェーズごとに `git rm` でコミットし、フェーズ単位で `npm run build` と `npm run lint` を通す（差分が追いやすく、何か壊れても該当コミットだけ切り戻せる）。
> - 「削除候補」は機械的検証（grep）で未参照を確認済みのもの。「要確認」は人による最終判断が必要なもの（ビジネス的に意図した保持の可能性があるため）。
> - `next/dynamic` は本リポジトリで未使用のため、動的import経由の見落としリスクは低い。ただし削除前に一度 `npm run build` で型エラー・未解決importが出ないことを必ず確認すること。

---

## フェーズ0: 現状サマリー

| 項目 | 状態 |
|---|---|
| Git管理 | ✅ リポジトリ化済み・作業ツリーはクリーン |
| ESLint | 17 errors / 20 warnings（後述フェーズ6・付録で詳細） |
| 未使用npm依存 | なし（`@headlessui/react`, `@hookform/resolvers`, `framer-motion`, `react-hook-form`, `zod` すべて実使用を確認） |
| 未使用データファイル(`data/`) | なし（バレル`index.ts`経由の間接参照込みで確認済み） |

---

## フェーズ1: 即削除できる作業残骸（最優先・リスク最小）

いずれもコードとして参照されない、作業中に生成された一時ファイル。

| パス | 内容 | 備考 |
|---|---|---|
| `temp_card_data.txt` | philosophyページのJSX抜粋 | 7/22更新、`components/philosophy/*.tsx` 分割作業用スクラッチ |
| `temp_conflict_section.txt` | 同上 | 同上 |
| `temp_declaration_section.txt` | 同上 | 同上 |
| `temp_mechanism_section.txt` | 同上 | 同上 |
| `temp_path_section.txt` | 同上 | 同上 |
| `temp_philosophy_section.txt` | 同上 | 同上 |
| `temp_structure_section.txt` | 同上 | 同上 |
| `tmp-qa/` (30ファイル, 3.6MB) | cases hero画像加工の検証用スクリーンショット/PNG | `framed-full-v2.png`等、試行錯誤の出力。フェーズ4のPythonスクリプト群と一体の作業ログ |
| `public/file.svg` `globe.svg` `next.svg` `vercel.svg` `window.svg` | create-next-app 初期テンプレートのデフォルトSVG | 5ファイルとも全コード grep でヒット0件、完全未参照 |
| `docs/CHANGELOG.md` | 空ファイル（0バイト） | 使うなら運用開始、使わないなら削除 |
| `docs/TROUBLESHOOTING.md` | 空ファイル（0バイト） | 同上 |

**アクション**: 上記すべて `git rm`。すべてリポジトリに**トラッキングされている**ため（`.gitignore`に載っていない）、単に `rm` するだけでなく忘れずコミットすること。

**再発防止**: `.gitignore` に以下を追記する。
```gitignore
# 作業用スクラッチ（コミットしない）
temp_*.txt
tmp-qa/
```

> **実施結果**: 計画通り実施。コミット `26568b7`。

---

## フェーズ2: 未使用コンポーネントの削除（ページ再設計の残骸）

サイトの複数箇所が「一覧ハブページ → リダイレクト or 単一統合ページ」に再設計された結果、旧UIを構成していたコンポーネント一式が孤立している。`app/`・`components/`・`data/` 全域を import文・JSXタグの両方で grep し、いずれの参照も検出されなかったもの。

### 2-1. `app/ai-capability-gallery/page.tsx` が `redirect()` のみになった結果、孤立
- `components/ai-capability-gallery/GalleryHero.tsx`
- `components/ai-capability-gallery/GalleryCta.tsx`
- `components/ai-capability-gallery/GallerySectionNav.tsx`
- `components/ai-capability-gallery/CapabilityCardGrid.tsx`
- `components/ai-capability-gallery/CapabilityPatternShowcase.tsx`
- `components/ai-capability-gallery/MobileScrollTilt.tsx`

### 2-2. `app/cases/page.tsx` が `redirect()` のみになった結果、孤立
- `components/cases/CaseCard.tsx`
- `components/cases/CaseIndustryNav.tsx`

### 2-3. `app/services/` が個別ハブ構成 → `ServiceHubHero` + `ServicesBuildTabs` + `ServicesOverviewSection` の単一統合ページに再設計された結果、孤立
- `components/services/ai-hub/AiHubHero.tsx`
- `components/services/ai-hub/AiHubBrowseSections.tsx`
- `components/services/ai-hub/AiHubCapabilityGrid.tsx`
- `components/services/ai-hub/AiHubFeaturedDemos.tsx`
- `components/services/app-hub/AppHubHero.tsx`
- `components/services/web-hub/WebHubHero.tsx`
- `components/services/hub/ServiceCardGrid.tsx`
- `components/services/hub/ServiceFeaturedCases.tsx`
- `components/services/hub/ServiceFeaturedDemos.tsx`
- `components/services/hub/ServiceProblemSolution.tsx`

> 注: `components/services/hub/ServicesPageToc.tsx` と `ServicesHashScroll.tsx` は `app/services/page.tsx` で実際に使用中なので**削除しない**（重複ではなく併用）。

### 2-4. 個別に孤立しているコンポーネント
- `components/concierge/IdealConciergeFlow.tsx`（→ 現在は `GuideConciergeFlow.tsx` を使用。フェーズ3参照）
- `components/how-we-work/HowWeWorkPageCta.tsx`
- `components/layout/SmoothScroll.tsx`
- `components/motion/HeroReveal.tsx`
- `components/motion/HeroScrollHint.tsx`
- `components/motion/ScrollStagger.tsx`（→ 現在は `StaggerReveal.tsx` を使用。フェーズ3参照）
- `components/research/ResearchDetailPlaceholder.tsx`
- `components/sections/FAQSection.tsx`
- `components/sections/RelatedServicesSection.tsx`
- `components/sections/ServiceAiCta.tsx`
- `components/sections/ServiceNavigation.tsx`

**合計 29ファイル。**

**アクション**: `git rm` で削除 → `npm run build` で型エラーが出ないことを確認 → コミット。念のため削除前に各ファイル名でもう一度 `grep -rn "ファイル名"` を実行し、ドキュメント内の言及やコメントアウトされた再利用予定コードがないか目視確認すること。

> **実施結果**: 計画通り29ファイルすべて削除。加えて、削除対象だった `HeroReveal.tsx`/`HeroScrollHint.tsx` からしか使われていなかった `lib/motion-tokens.ts` の `getHeroRevealCompleteDelay()`・`heroRevealItemCounts` も連鎖的に不要と判明したため削除。コミット `2853929`。

---

## フェーズ3: 新旧重複コンポーネントの整理

命名規則（`*Old`/`*V2`/`*Legacy`等）による機械検索ではヒットしなかったが、機能的に同じ役割の新旧ペアが存在する（いずれもフェーズ2に含まれる未使用側の削除で自然に解消する）。

| 旧実装（未使用・削除対象） | 現行実装（使用中） |
|---|---|
| `components/motion/ScrollStagger.tsx` | `components/motion/StaggerReveal.tsx`（`PremiumDialog.tsx`で使用） |
| `components/concierge/IdealConciergeFlow.tsx` | `components/concierge/GuideConciergeFlow.tsx`（`ConciergeRoot.tsx`で使用） |
| `components/ai-capability-gallery/*` `services/ai-hub|app-hub|web-hub|hub/Service*` 一式 | `AiCapabilityDetailShell.tsx` 経由の詳細ページ群 / `ServiceHubHero.tsx` + `ServicesBuildTabs.tsx` |

このフェーズはフェーズ2の実行で完了する。表として明示したのは「なぜ削除して良いか」の裏付けを残すため。

---

## フェーズ4: 未参照メディアファイルの削除

`public/images/` は94MB・105ファイル。全件の網羅チェックはしていないが、ファイル名でのspot-check grep（`app`/`components`/`data`配下でヒット0件）で以下を確認した。

### 削除候補（ヒット0件を確認済み）
- `public/images/test01.png` `test02.png` `test03.png`（テスト用と思われる名称）
- `public/images/top02.png`
- `public/images/meta_para.png` と `public/images/meta_para .png`（★後者はファイル名末尾にスペースが入ったタイポ/重複と思われる）
- `public/images/ai_para.png` `app_para.png` `bc_para.png` `DAO_para.png` `web_para.png`（旧事業領域=ブロックチェーン/DAO/メタバース関連の絵。フェーズ6の `docs/philosophy.md` の内容と符合）
- `public/images/sv_bc.png` `sv_DAO.png` `sv_meta.png`（同上系統。`sv_app.png`/`sv_web.png`は使用中なので残す）
- `public/images/cases/cases_hero.png` `genba-desktop.png` `genba-phone.png` `genba-phone-cutout.png` `genba-phone-framed.png` `genba-phone-hand.png` `genba-phone-hand-cutout.png`（実際にページで参照されるのは `cases-hero-visual01/02/04.png` のみ。これらはフェーズ5のPythonスクリプトが生成した中間素材と思われる）

**アクション（要確認込み）**:
1. 上記ファイル名で最終的にもう一度 `grep -rn "ファイル名" app components data public` を実行し、CSS/next.config/sitemap等での参照も含めて0件を確認する。
2. 特に `ai_para`〜`sv_DAO` 系はブロックチェーン/DAO/メタバース事業の絵だが、現行事業（AI/Web/App受託 + 業種別デモ）と方向性が異なる可能性が高いため、削除前に**ユーザーに一言確認**するのが安全（完全に廃止した事業なのか、将来使う可能性が残るのか）。
3. `public/research/poc-instrument/` は未調査（今回の調査スコープ外）。中身を確認の上、要否判断すること。

> **実施結果**: 全候補21ファイルとも最終grepで参照ゼロを確認し削除。`public/research/poc-instrument/index.html` は `app/research/poc-instrument/page.tsx` 等から実際に参照されていたため対象外・保持。コミット `2ab50c8`。

---

## フェーズ5: 一回限りの画像加工スクリプト整理

`scripts/` 配下は package.json / README / docs のどこからも参照されていない。

| ファイル | 判定 |
|---|---|
| `scripts/clear-use-case-hero-bg.py` | 削除 or `scripts/archive/` へ移動候補。絶対パス埋め込みの一回限り処理（PIL/numpyで背景透過）。出力先である `public/images/cases/genba-phone-cutout.png` 等はフェーズ4で削除候補に挙がっている中間素材と一致し、mtimeもスクリプトと近接（7/31）→ 既に役目を終えている |
| `scripts/crop-cases-hero-visual.py` | 同上 |
| `scripts/pad-use-case-hero-products.py` | 同上 |
| `scripts/prep-cases-hero-cutouts.py` | 同上 |
| `scripts/prep-cases-hero-images.py` | 同上 |
| `scripts/theme-token-bulk.cjs` | **要確認**。Tailwindの直書きクラス（`bg-black`等）をCSS変数トークンへ一括置換するコードモッド。現状、生クラスが残るファイルはフェーズ2削除後は3件のみ（`components/ai-capability-gallery/CapabilityCard.tsx`, `components/sections/demo-first/TopFeaturedDemoShowcase.tsx`, `components/services/ai-hub/AiInteractionShowcase.tsx`）。移行がほぼ完了していることの傍証。残り3件を手動移行して役目を終えたと判断できればこのスクリプトも削除可 |

**アクション**: フェーズ4の削除方針（保持 or 廃止）と合わせて、5本のPythonスクリプトを削除するか `scripts/archive/` に退避するかを決める。個人的には「一回限り処理・再実行の予定なし」なら削除、「同種の画像加工が今後も発生しうる」なら `scripts/archive/` に退避してREADMEに一行だけ用途を書き残す方が安全。

> **実施結果**: 5本のPythonスクリプトと `theme-token-bulk.cjs` を削除（`scripts/`ディレクトリごと消滅）。`theme-token-bulk.cjs` は残存3ファイルの `bg-black/55` 等を調査した結果、置換リストの対象外(オパシティ値が異なる)であり、かつ画像上のバッジ用オーバーレイという性質上テーマトークン化すべきでない意匠判断と推測されたため、手動移行はせずスクリプトのみ削除。コミット `c170a7b`。

---

## フェーズ6: `docs/` の整理

`docs/archive/` は既に存在し運用されている。以下は `docs/` 直下にあるが、内容的に archive 行き、または削除候補。

### 削除候補
- `docs/CHANGELOG.md`（空。フェーズ1で対応済み）
- `docs/TROUBLESHOOTING.md`（空。フェーズ1で対応済み）

### `docs/archive/` へ移動候補
- `docs/確認.md` — 冒頭に「最終更新: 2026-07-20（確認実施済）」「本ファイルは記録用」と明記された、完了済みチェックリスト
- `docs/cursor-instructions-ideal-cases.md` — Cursorへの一回限りの外部委託指示書。対象URLを名指しした具体的タスク文書で、恒久ドキュメントではない

### 要確認（新しい正本ドキュメントに上書きされている可能性）
`docs/SITE_IA_DIRECTION.md` / `docs/SITE_MAP_v2.md` / `docs/REDIRECT_MAP.md`（いずれも2026-08-11〜12更新、「合意済み」「正本」との記載あり）が最新の設計方針。それより古い以下のドキュメントは内容が重複・矛盾している可能性があるため、読み比べて統合 or archive を判断:
- `docs/AI_CONCIERGE_REDESIGN.md`（2026-07-23）
- `docs/AI_CONCIERGE_SALES_SCENARIO.md`（2026-07-23）
- `docs/SITE_EXPERIENCE_REDESIGN.md`（2026-07-10）
- `docs/UX_AUDIT.md`（2026-07-10）

### 要確認（事業方向性との整合）
- `docs/philosophy.md` — 「DAO研究・取り組み」「自由と秩序が両立した社会を設計する」という内容。現行サイトはAI/Web/App受託開発＋建設・介護・小売向けデモが中心で、DAO/ブロックチェーン色の強い内容は事業方向性と乖離している可能性が高い（フェーズ4で見つかった未参照の `bc_para.png`/`DAO_para.png`/`meta_para.png` とも符合）。残すか削除するかはビジネス判断が必要

### 優先度低（要確認）
- `docs/re_demo/copy-construction-record-v2.md` — v1が存在せずv2/v3のみ現存。v3が最新版として確定しているなら v2 は `docs/archive/` へ

### 保持（stale と断定する材料なし）
`docs/concept.md`, `docs/design.md`, `docs/DEVELOPMENT_GUIDE.md`, `docs/lp.md`, `docs/AI_POLICY.md`, `docs/IMAGE_GENERATION_PROMPTS.md`, `docs/FooterConcierge.md` は日付記載がなく内容も現行方針のガイドラインに見えるため、今回は対象外。

### おまけ: `README.md`
プロジェクトルートの `README.md` は `create-next-app` のデフォルトテンプレートのままで、このプロジェクト固有の情報（何のサイトか、`docs/` の位置づけ、`.env.example` の使い方、`test:e2e` の実行方法など）が一切書かれていない。削除対象ではないが、このクリーンアップの一環で実プロジェクト向けに書き直すことを推奨。

> **実施結果**:
> - `docs/確認.md` → `docs/archive/確認.md` へ移動（内部リンクを相対パス修正）
> - `docs/cursor-instructions-ideal-cases.md` → `docs/archive/` へ移動
> - `docs/re_demo/copy-construction-record-v2.md` → `docs/archive/` へ移動。v3が「実装正本」を明言しv2からの変更点を記載しているため確定。ただし `docs/re_demo/construction-record-lp-text-inventory.md` がv2の語彙ルールを参照していたため、参照パスを `../archive/copy-construction-record-v2.md` に更新して整合性を維持
> - **計画からの重要な修正**: `docs/philosophy.md` は実際に内容を読んだ結果、「DAO研究」という見出しにもかかわらず、現在稼働中の `/philosophy` ページ（`app/philosophy/page.tsx` → `components/philosophy/*`）のコンテンツ原本であることが判明。フェーズ1で削除した `temp_philosophy_section.txt` 等の一時ファイル名とも一致しており、事業方向性と無関係の廃止済みDAO事業計画ではなく現行LABページの設計思想ドキュメントだった。**削除・archive化せず保持**
> - **計画からの重要な修正**: `AI_CONCIERGE_REDESIGN.md` / `AI_CONCIERGE_SALES_SCENARIO.md` / `SITE_EXPERIENCE_REDESIGN.md` / `UX_AUDIT.md` も内容を確認したところ、最新の `docs/SITE_IA_DIRECTION.md`（正本）や `e2e/README.md` から現在も相互参照されている生きたドキュメント群と判明。「古い設計文書だから重複/矛盾の可能性」という当初の推測は誤りだったため**すべて保持**
> - `README.md` を実プロジェクト向けに書き直し
> - コミット `1a19656`

---

## フェーズ7（付録・スコープ外寄り）: ESLintが検出する「未使用コード」

ファイル削除ではなくファイル内の不要コード。`npm run lint` のベースラインで検出された `no-unused-vars` 警告（20件中、フェーズ2で削除されるファイル分を除いた残り）:

| ファイル | 内容 |
|---|---|
| `components/sections/TwoColumnSection.tsx` | 未使用の `typography`, `spacing` import・未使用の `variant` 変数 |
| `components/services/app-hub/ProductShowcase.tsx` | 未使用の型 `StatusStep` |
| `components/theme/ThemeProvider.tsx` | 未使用の `_mode` |
| `components/ui/Accordion.tsx` | 未使用の `colors` import・未使用の `allowMultiple` |
| `lib/concierge/estimate.ts` | 未使用の `pageContext` |
| `lib/resolve-route-motion.ts` | 未使用の `_pathname` |
| `e2e/journeys/services.spec.ts` | 未使用の `expect` import |

（`components/sections/FAQSection.tsx`・`RelatedServicesSection.tsx` の同種警告はフェーズ2のファイル削除で解消する）

**アクション**: 上記は機械的に安全に削除できる未使用importなので、フェーズ2〜6と合わせて一括修正して良い。

> **実施結果**: 一覧の7件に加え、最初のベースライン確認で見落としていた `DemoLpRoiSection.tsx`(`lpBody`)・`lpTypography.ts`(`contentH2Centered`)の未使用importも発見・修正。`Accordion.tsx` の `allowMultiple` は propとして実際にコンポーネント外(`ServiceTechAccordion.tsx`)から渡されているが、コンポーネント内部でDisclosureごとの開閉制御に配線されていない — 単なる不要importではなく機能未実装のギャップと判断し、今回のスコープ外として手を付けず残した。ESLint警告は37件→14件に減少(残り: `react-hooks/set-state-in-effect` 11件[別スコープの品質課題]、`allowMultiple` 1件[機能ギャップ]、`prefer-const` 2件[未修正・別スコープ])。コミット `c8cf51f`。

> **スコープ外の注記**: 同じ `npm run lint` で `react-hooks/set-state-in-effect`（useEffect内での同期的setState、17件）というエラーも検出されているが、これは「不要コード」ではなく描画パフォーマンスに関わるコード品質・バグ修正の話なので、本クリーンアップとは別タスクとして扱うことを推奨する。

---

## 実行順序まとめ

1. **フェーズ1**（作業残骸削除）→ 最もリスクが低く即実行可能
2. **フェーズ2〜3**（未使用コンポーネント削除）→ `npm run build` で検証しながら
3. **フェーズ7**（未使用import削除）→ フェーズ2と同じコミットでまとめて良い
4. **フェーズ5**（一回限りスクリプト整理）→ フェーズ4の判断とセットで
5. **フェーズ4**（未参照メディア削除）→ DAO/ブロックチェーン系画像はユーザー確認後に
6. **フェーズ6**（docs整理）→ コードに影響しないため最後でも並行でも可

各フェーズ完了後に `npm run build` と `npm run lint` を実行し、リグレッションがないことを確認してからコミットすること。
