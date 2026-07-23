# 製造 — 3本建てデモ構成 PLAN

最終更新: 2026-07-24  
Industry ID: `manufacturing`  
サイト業界カード id: `manufacturing`

共通原則: [`README.md`](./README.md)  
UX／業種別UI: [`ux-saas-principles.md`](./ux-saas-principles.md) §4.1

---

## 0. ビジュアル方針

| 項目 | 決定 |
|------|------|
| トーン | 最低限のシンプル。文書と根拠が主役 |
| 色 | 抑えめ（紺／ニュートラル） |
| 文字 | 標準・煽らない |
| 主端末 | デスク＋タブレット |
| 参考 | 静かで速い業務ツール（Linear / Notion 的） |
| UI正本 | [`product_flow/docs/experience-player-ux.md`](../../../../product_flow/docs/experience-player-ux.md) |

他業種へこのシェルを流用しない。

---

## 1. 楔（隙間）と証明する一文

### 楔

**文書・手順・版情報** と **現場・品質・設計のその場の判断** のあいだ。  
探す・聞き回る・版を取り違える・部門の窓口を間違える、で仕事が止まる。

### 証明する一文

製造の現場・品質・管理が、同じ文書体系を「探す」のではなく「聞いて根拠付きで判断できる」。

---

## 2. ハブ構成

組み合わせ文（ハブに必ず出す）:

> 現場は①で動き、改定は②で揃え、設計変更は③で漏らさない。つながると「判断が止まらない工場」になる。

| # | Demo ID | テーマ名 | 体験の核（一言） | 主役役割 | status |
|---|---------|----------|------------------|----------|--------|
| ① | `mfg-field-judgment` | 現場判断 | 不良時手順・部門またぎ・版ずれ優先 | 現場 → 品質 | `ready_asset` |
| ② | `mfg-sop-revision` | 手順改定・教育 | SOP差分 → 必須化 → 教育要否 | 管理職 | `ready_asset` |
| ③ | `mfg-change-impact` | 変更影響 | 版差分 → 影響範囲 → 試験/FMEA | 設計・品質・経営 | `ready_asset` |

推奨の初回着地: **Demo①**（自分事化が最も速い）  
業界カード暫定CTA: ハブ完成までは①直リンク可。完成後はハブ優先。

検査パック（`inspection`）: **Demo③の補強**（出荷判定の版・電子記録）に寄せる。公開3本には同格で並べない。  
`minato-hr` / `standardization` / `starter`: 営業・テンプレ用。製造ハブ非掲載。

---

## 3. Demo 詳細

### Demo① — 現場判断

- **Demo ID:** `mfg-field-judgment`
- **テーマ:** 工場QMS文書に聞いて、その場で正しく動く
- **体験してもらうこと:** 短いガイドのあと、**現場言葉の自由記述 × 根拠付き回答**（社内ボット連想）
- **感じてほしいこと:** 「探すより聞いた方が早い。怒られそうなことも聞ける。うちの言い方でも答えが来る」
- **主役役割:** 現場（主）／品質管理（副）
- **本命（クライマックス）:** ガイド完走ではなく、**「塗装剥がれどうする？」等の現場一言が第7条フロー等に着地する**こと。ガイド内の版ずれ（台本 Q5）は入口の型見せ
- **ガイド手数:** 5（Q1→Q2→Q3→Q5→Q7）→ その後に現場言葉入力が前面
- **公開UI:** [`/play/minato-factory`](../../../../product_flow)（体験プレイヤー）。旧シェルは `?packs=1` 専用
- **AIの使い方:** サンプル先行 → プレイヤー内でライブ／自社文書。ROI・相談は「次の一歩」折りたたみのみ
- **既存資産:**
  - リポジトリ: [`product_flow`](../../../../product_flow)
  - パック: `minato-factory`
  - UX正本: [`product_flow/docs/experience-player-ux.md`](../../../../product_flow/docs/experience-player-ux.md)
  - 解釈ルール: [`product_flow/docs/field-language-interpretation-rules.md`](../../../../product_flow/docs/field-language-interpretation-rules.md)
  - 台本: [`product_flow/docs/knowledge2/14_…`](../../../../product_flow/docs/knowledge2/14_想定質問リスト_製造現場デモ台本.md) / 用例 [`15_…`](../../../../product_flow/docs/knowledge2/15_現場言葉_自由記述用例.md)
  - 公開ベース: `https://product-flow-jet.vercel.app/manufacturing`
  - ギャラリー試食: `knowledge-to-search`
- **status:** `ready_asset`（プレイヤー再設計中。ハブ `/manufacturing` 維持）
- **ギャップ:** デプロイ後の `/play/…` 確認
- **受け入れ（Demo単体）:** 「現場の言い方で聞いても、根拠付きで次の一手が分かる」と言える

### Demo② — 手順改定・教育

- **Demo ID:** `mfg-sop-revision`
- **テーマ:** 手順書の改定が、現場適用と教育完了まで見通せる
- **体験してもらうこと:** SOP新旧差分（任意→必須、トルク数値など）→ 影響（誰が・何を変えるか）→ 教育・旧版残置チェック
- **感じてほしいこと:** 「改定を出しただけでは終わらない。現場に落ちるまでが仕事だと分かる」
- **主役役割:** 管理職（製造・品質・教育）
- **クライマックス:** 「この改定を現場適用して大丈夫か」に、教育完了と旧版撤去が条件として返る
- **ガイド手数:** 4
- **AIの使い方:** サンプル先行。プレイヤー内でライブ
- **既存資産:**
  - パック: `work-procedure`（現行 `DEFAULT_PACK_ID`）
  - URL例: `/play/work-procedure`（公開）/ `/?pack=work-procedure&packs=1`（旧シェル）
- **status:** `ready_asset`（体験プレイヤー接続済）

### Demo③ — 変更影響

- **Demo ID:** `mfg-change-impact`
- **テーマ:** 仕様の版上げが、どこまで波及するか一覧できる
- **体験してもらうこと:** 制御仕様などの版差分 → 影響範囲 → 再試験／FMEA更新要否
- **感じてほしいこと:** 「ちょっと変えた」の漏れが怖い。根拠付きで範囲が切れる
- **主役役割:** 設計・品質（主）／経営（リスク要約）
- **クライマックス:** 「この変更の影響範囲は？」に制御・試験・FMEAがセットで返る
- **ガイド手数:** 4
- **AIの使い方:** サンプル＋構造化回答。プレイヤー内でライブ
- **既存資産:**
  - パック: `tcu-480`
  - URL例: `/play/tcu-480`（公開）/ `/?pack=tcu-480&packs=1`（旧シェル）
  - LP Before/After: [`product_flow` Landing](../../../../product_flow/src/pages/LandingPage.tsx) のメッセージと整合
  - 補強候補: `inspection`（判定基準の版・電子記録）— ③内の追加ガイドまたは営業用
- **status:** `ready_asset`（体験プレイヤー接続済）
- **受け入れ（Demo単体）:** 「変更の影響を、試験とFMEAまで含めて見られる」と言える

---

## 4. サイト導線（ideal_official）

| 箇所 | 現状 | 直し方針 |
|------|------|----------|
| TOP 製造カード `tryHref` | `/manufacturing` ハブ | ハブ完了 |
| `tryLabel` | 製造の判断（3体験） | 反映済 |
| 課題／解決文 | 文書↔判断の楔 | 反映済 |
| `detailHref` | `/services/ai-consulting` | 将来ハブ or Cases。当面AIハブでも可 |
| Cases | 製造専用事例が薄い | ハブ公開時に①起点の事例を検討 |
| portfolio `manufacturing` | ハブURL | 反映済 |

参照:

- [`../../data/demo-first/top-page.ts`](../../data/demo-first/top-page.ts)
- [`../../data/demo-first/portfolio.ts`](../../data/demo-first/portfolio.ts)

ギャラリー `knowledge-to-search` は①の試食。本線着地にしない。

---

## 5. Won't（やらないこと）

- MES／生産計画／在庫まで含む「製造フルDX」デモを1本化する
- 公開UIで全パックを同等に切り替える体験を残す
- デモ内で①→②→③の業務ワークフロー画面をつなぐ
- inspection / HR / 標準化教材を製造ハブの4本目にする
- ギャラリーだけで製造本線を完結させる
- 旧 Live/AI シェルへ公開機能を継ぎ足し続けること

---

## 6. 実装優先度（体験プレイヤー再設計）

旧シェル継ぎ足しは打ち切り。公開は体験プレイヤー。詳細順は rethink PLAN。

| Phase | 内容 | 完了条件 |
|-------|------|----------|
| **0** | UX／解釈ルール文書＋本ファイル更新 | レビュー可能・UIなし |
| **1** | ①現場言葉用例＋チャンク抜粋補強 | 用例の質問→条が分かる |
| **2** | エイリアス＋`llmSystemPrompt` | 「塗装剥がれ」がサンプル／ライブで根拠付き |
| **3** | `/play/:packId`（①）＋ハブリンク | 初訪5秒で番号、本命＝現場言葉 |
| **4** | ②③を同型適用＋ハブ文言＋デプロイ確認 | ideal CTA `/manufacturing` がプレイヤーへ着地 |

参照: [`product_flow/docs/experience-player-ux.md`](../../../../product_flow/docs/experience-player-ux.md)

---

## 7. ハブ受け入れ（業界単位）

- [ ] 楔と組み合わせ文がハブ上で読める
- [ ] ①現場判断／②改定教育／③変更影響の違いが30秒で分かる
- [ ] 各デモのクライマックスが言える
- [ ] 「つながると判断が止まらない工場」が想像できる
- [ ] ROI / 相談へ進める

---

## 付録: 入口URL（実装時の目安）

| 入口 | URL |
|------|-----|
| ハブ | `https://product-flow-jet.vercel.app/manufacturing` |
| ① 公開プレイヤー | `/play/minato-factory` |
| ② 公開プレイヤー | `/play/work-procedure` |
| ③ 公開プレイヤー | `/play/tcu-480` |
| 旧シェル（開発） | `/?pack=…&packs=1` |

ローカル: `http://localhost:5173/manufacturing`（ポートは環境による）

ideal 側 `/demos/manufacturing` は未作成（外部ハブへリンクで足りる）。
