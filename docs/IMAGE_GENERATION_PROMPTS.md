# スマホ向け画像生成プロンプト集

ideal 公式サイト向け。生成AI（画像モデル）にそのまま貼れる英語プロンプトを中心に、用途・サイズ・保存先をまとめています。

## 共通スタイル（すべてのプロンプトに追記してよい）

```
Premium Japanese B2B tech brand aesthetic. Dark atmosphere: deep charcoal black, muted off-white, deep crimson accent (#9B2937) used sparingly as light or UI highlight. Photorealistic or high-end product photography look. Clean composition, shallow depth of field where appropriate. No text, no watermarks, no logos, no UI labels, no Japanese or English lettering in the image. Avoid purple neon glow, cyberpunk overload, stock-handshake clichés, cream/terracotta lifestyle look. Subject centered in a safe zone (center 70%) for mobile crop. High detail, commercial quality.
```

日本語で生成する場合は末尾に次を付けてください。

```
テキスト・ロゴ・透かし・文字入れなし。被写体は中央70%のセーフエリア内。紫のネオンや握手写真のストック感は避ける。黒・白・深紅の落ち着いたB2Bトーン。
```

---

## A. ヒーロー（スマホ専用・優先度：高）

### A1. トップ Hero SP

| 項目 | 内容 |
|------|------|
| 用途 | `/` の `DemoFirstHero`（`/images/top.png` の SP 差し替え） |
| サイズ | **1200×1600**（比率 3:4） |
| 保存例 | `public/images/sp/top-sp.webp` |

**Prompt**

```
Vertical 3:4 photograph for a mobile website hero. A Japanese professional at a work desk viewing a tablet that shows a clean dark-themed demo UI with subtle crimson accents. Soft ambient light, modern office or hybrid field-office setting. Hands and device in sharp focus, face optional or partially out of frame. Atmosphere of "try the demo first" — calm, confident, premium. Deep charcoal background tones, no readable text on screen (blur UI details). Centered composition safe for mobile crop. --ar 3:4
```

**Negative（任意）**

```
text, letters, logo, watermark, neon purple, handshake, crowded collage, bright office fluorescent glare
```

---

### A2. Gallery Hero SP

| 項目 | 内容 |
|------|------|
| 用途 | `/ai-capability-gallery` の `GalleryHero`（`lp/hero.png` の SP 差し替え） |
| サイズ | **1200×1600**（比率 3:4） |
| 保存例 | `public/images/sp/gallery-hero-sp.webp` |

**Prompt**

```
Vertical 3:4 abstract-editorial image representing multiple AI business capabilities in one scene. Layered visual motifs: faint audio waveform, scattered field photos becoming organized thumbnails, a document page, a simple line chart — arranged as a cohesive dark still-life on a matte black surface with a single soft crimson light accent. Not a screenshot. Artistic product photography, spacious, premium Japanese tech brand. No text. Subject cluster in center safe zone. --ar 3:4
```

---

## B. デモカード（16:9・優先度：高）

現行カード枠は `aspect-[16/9]`。情報密度を下げ、SPでも「入力 → 変化 → 結果」が一目で分かる構図にする。

| 項目 | 内容 |
|------|------|
| サイズ（共通） | **1600×900**（最低 1280×720） |
| 保存例 | `public/images/lp/{slug}-sp.webp` または既存ファイル差し替え |

共通追記:

```
Widescreen 16:9. Simplified composition for small mobile cards: fewer objects, larger focal subject, clear left-to-right or before/after contrast. No text. --ar 16:9
```

---

### B1. 音声 → 構造化（`voice-to-structured` / `voicememo.png`）

```
16:9 photorealistic still life: a modern microphone and soft glowing sound wave visualization on the left; on the right, a tablet showing a filled structured work report form with blurred fields (no readable text). Subtle crimson accent light. Dark charcoal desk. Suggests "speech becomes structured records". Sparse, premium, mobile-card friendly. --ar 16:9
```

---

### B2. 写真 → 分類（`photo-to-classification` / `autophoto.png`）

```
16:9 photorealistic: left side shows a messy pile of construction site and equipment photos; right side shows the same photos neatly organized into labeled folders as clean thumbnails. Central soft AI glow in deep crimson connecting both sides. Dark background. Simple enough to read on a phone card. No text or folder names readable. --ar 16:9
```

---

### B3. 文書 → 抽出（`document-to-extraction` / `document_workflow.png`）

```
16:9 top-down desk scene: an open PDF contract or invoice on the left; on the right, floating highlight cards extracting key fields (amount, date, party) as abstract glowing panels without readable letters. Dark matte surface, crimson accent on highlights. Clean corporate fintech aesthetic. --ar 16:9
```

---

### B4. データ → 予測（`data-to-prediction` / `analytical.png`）

```
16:9 dark dashboard atmosphere: a clean line chart with historical points and a soft forecast curve extending forward, plus a subtle confidence band. Minimal UI chrome, no readable axis labels. Crimson accent on the forecast segment. Suggests "past data supports next decision". Premium analytics product shot. --ar 16:9
```

---

### B5. 業務 → 自動化（`workflow-to-automation` / `workflow_prosess.png`）

```
16:9 photorealistic: email inbox and a PDF invoice on the left transforming into a vertical sequence of completed checklist steps with soft green or crimson check marks on the right. Dark background, sparse layout, automation pipeline metaphor. No readable email text. --ar 16:9
```

---

### B6. ナレッジ → 検索（`knowledge-to-search` / `knowledge.png`）

```
16:9 scene: a simple question bubble motif (empty, no letters) above binders and manuals on the left; on the right, an answer card with a citation strip pointing to a document. Dark knowledge-base aesthetic, crimson accent on the citation link. Clear "ask → answered with source" story for a small card. --ar 16:9
```

---

### B7. 複数情報 → 報告書（`multi-input-to-report` / `multiple_inputs.png`）

```
16:9 composition: scattered inputs on the left — phone photo, voice memo icon, sticky note, number pad — converging into a single clean bound report booklet or tablet report on the right. Dark desk, soft crimson connecting light. "Many materials become one report". Sparse for mobile readability. --ar 16:9
```

---

## C. 業界カード（優先度：中）

トップ「業界別サービス」用。現状はアイコンのみのため、カード上部サムネ想定。

| 項目 | 内容 |
|------|------|
| サイズ（共通） | **1200×900**（比率 4:3） |
| 保存例 | `public/images/sp/industry-{id}.webp` |

共通追記:

```
4:3 photograph, authentic Japanese workplace atmosphere, no faces in sharp focus (back or hands ok), no text. Premium documentary style. --ar 4:3
```

---

### C1. 建設・設備（`construction`）

```
4:3 photo: Japanese construction or facility site — hard hat, blueprints, and a smartphone photographing equipment. Overcast daylight, realistic dust and materials. Suggests field photo sorting workflow. No logos or readable drawings. --ar 4:3
```

---

### C2. 医療・福祉（`care`）

```
4:3 photo: calm Japanese care or clinic setting — caregiver's hands holding a tablet for voice notes beside a care record binder. Soft natural light, respectful, non-clinical coldness. Privacy-safe (no identifiable patient faces). --ar 4:3
```

---

### C3. 小売・サービス（`retail`）

```
4:3 photo: Japanese retail store aisle or counter with shelves and a tablet showing a simple demand chart silhouette (blurred). Warm but controlled lighting, everyday business realism. Suggests next-day ordering decisions. --ar 4:3
```

---

### C4. 製造（`manufacturing`）

```
4:3 photo: Japanese manufacturing floor or workshop — machinery, work instructions binder, tablet with knowledge search vibe. Industrial but clean, deep shadows, crimson safety accent optional and subtle. No readable manuals. --ar 4:3
```

---

## D. Cases 一覧用（優先度：中）

| 項目 | 内容 |
|------|------|
| サイズ | **1600×900**（16:9） |
| 保存例 | `public/images/sp/case-{slug}.webp` |
| 備考 | 現状はデモ画像流用。事例専用があると信頼感が増す |

共通: Before/After の変化が1枚で伝わること。

### D1. 建設写真仕分け（`construction-photo-sorting`）

```
16:9 before/after split: left — chaotic camera roll of site photos; right — tidy folder grid of sorted site images. Dark premium tone, crimson accent line in the middle. No text. --ar 16:9
```

### D2. 介護音声記録（`care-voice-records`）

```
16:9: caregiver speaking near a tablet; waveform dissolving into structured care-log rows (blurred). Soft, respectful lighting. --ar 16:9
```

### D3. 小売需要予測（`retail-demand-prediction`）

```
16:9: store shelf in background, foreground tablet with rising forecast curve (no numbers). Suggests smarter ordering. --ar 16:9
```

### D4. 文書抽出 DD（`dd-document-extraction`）

```
16:9: stack of due-diligence documents transforming into highlighted extracted clauses as glowing cards. Dark legal-tech mood. --ar 16:9
```

### D5. バックオフィス自動化（`backoffice-workflow-automation`）

```
16:9: cluttered desk inbox becoming a clean automated checklist pipeline. Crimson accent on the completed path. --ar 16:9
```

### D6. 農業現場報告（`agriculture-field-report`）

```
16:9: field photos and handwritten notes merging into a single neat field report on a tablet, outdoor soft light into dark UI. --ar 16:9
```

---

## E. Contact / Estimate（優先度：中〜低）

| 用途 | サイズ | 保存例 |
|------|--------|--------|
| Contact 装飾 | 1600×900 または 1200×1600 | `public/images/sp/contact-sp.webp` |
| Estimate 装飾 | 1600×900 | `public/images/sp/estimate-sp.webp` |

### E1. Contact

```
16:9 quiet Japanese meeting table: notebook, pen, tablet with blurred agenda, cup of tea. No people faces required. Warm-neutral dark grade, premium consulting atmosphere. No text. --ar 16:9
```

### E2. Estimate

```
16:9 abstract product shot: tablet showing a blurred price-range slider UI in dark theme with crimson accent, calculator intentionally absent. Calm, trustworthy fintech-adjacent mood. No readable numbers. --ar 16:9
```

---

## F. OG 画像（優先度：低・任意）

| サイズ | **1200×630** |
| 保存例 | `public/images/og/og-home.png` など |

```
1200x630 social share image background for a Japanese demo-first DX brand. Dark charcoal field, subtle geometric soft light, single crimson accent line. Large empty center safe area for later text overlay in design tool. No text in the generated image. --ar 1.91:1
```

※ OG は生成後に Figma 等でタイトル文字を載せる前提。

---

## 制作チェックリスト

- [ ] 画像内に文字・ロゴ・透かしがない
- [ ] カード用は厳密に **16:9**
- [ ] Hero SP は主題が中央 70% に入っている
- [ ] ファイルは WebP（または AVIF）、必要なら PNG マスターも保持
- [ ] 差し替え後、iPhone 幅（390px）で `object-cover` の切れ方を確認

## 最短セット（まずこれ）

1. A1 トップ Hero SP  
2. A2 Gallery Hero SP  
3. B1–B7 デモカード 7点  
4. C1–C4 業界 4点  

合計 **13点**。
