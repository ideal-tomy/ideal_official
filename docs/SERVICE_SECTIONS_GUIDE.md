# サービスページセクションガイド

## 概要

このガイドは、AIページで完成させたセクション構成を番号付きで体系的に整理し、今後のサービスページ作成を効率化するためのものです。

### 使い方

セクション番号を指定するだけで、必要なセクションを組み合わせてページを作成できます。

**例：**
- AIページ: `0,1,2,3,4,5,6,7,8,9,10,11`（全12セクション）
- Web開発ページ: `0,1,3,5,8,9,10,11`
- アプリ開発ページ: `0,1,2,3,6,8,9,10,11`

## 全セクション一覧表

| 番号 | セクション名 | コンポーネント | 主な用途 | 必須/オプション |
|------|-------------|---------------|----------|----------------|
| 0 | ヒーローセクション | `HeroSection` | ページタイトルとサブテキスト | 必須 |
| 0.5 | サービスナビゲーション | `ServiceNavigation` | サービス間のナビゲーション | 必須 |
| 1 | 技術説明 | `SingleColumnSection` | 単一カラムでの技術説明 | 推奨 |
| 2 | ターゲット説明 | `SingleColumnSection` | ターゲット顧客への訴求 | オプション |
| 3 | 活用方法 | `ThreeCardSection` | 3つのカードで具体的な活用方法（モーダル付き） | 推奨 |
| 4 | 説明セクション | `SingleColumnSection` | タイトルと説明文のみのシンプルな説明 | オプション |
| 5 | 比較セクション | `TwoColumnSection` | 従来技術との比較など、2列での対比表示 | オプション |
| 6 | 導入要素 | `ThreeCardSection` | 導入に必要な要素の提示（モーダル付き） | オプション |
| 7 | 理由説明 | `TwoColumnSection` | 導入が必要な理由の説明 | オプション |
| 8 | 技術提供 | `TabSection` + `ThreeCardSection` | タブ切り替えで複数カテゴリの技術やサービス | 推奨 |
| 9 | FAQ | `FAQSection` | よくある質問のアコーディオン表示 | 推奨 |
| 10 | 関連サービス | `RelatedServicesSection` | 他のサービスへの導線 | 推奨 |
| 11 | CTA | `SingleColumnSection` | お問い合わせなどのCTA | 必須 |

## 各セクションの詳細説明

### セクション0: ヒーローセクション

**コンポーネント:** `HeroSection`

**Props:**
- `title: string` - ページのメインタイトル
- `subText: string` - サブテキスト
- `className?: string` - 追加のCSSクラス

**用途:** ページの最初に表示されるメインタイトルとサブテキスト

**実装例:**
```tsx
<HeroSection
  title="AI技術の可能性"
  subText="中小企業にこそ、AIがもたらす大きな恩恵"
/>
```

### セクション0.5: サービスナビゲーション

**コンポーネント:** `ServiceNavigation`

**Props:**
- `serviceLinks: ServiceLinkData[]` - サービスリンクの配列
- `currentServiceId: string` - 現在のサービスID
- `className?: string` - 追加のCSSクラス

**用途:** 全サービスページで統一されたナビゲーションメニュー

**実装例:**
```tsx
import { serviceLinks } from '../../../data/services/service-links'

<div className="border-b border-blue-400">
  <ServiceNavigation
    serviceLinks={serviceLinks}
    currentServiceId="web-development"
  />
</div>
```

**共通データファイル:**
```tsx
// data/services/service-links.ts
export const serviceLinks: ServiceLinkData[] = [
  { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
  { id: 'web-development', name: 'Web開発', href: '/services/web-development' },
  { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
  { id: 'game-development', name: 'ゲーム制作', href: '/services/game-development' },
  { id: 'blockchain-development', name: 'ブロックチェーン開発', href: '/services/blockchain-development' }
]
```

### セクション1: 技術説明

**コンポーネント:** `SingleColumnSection`

**Props:**
- `title: string` - セクションタイトル
- `description: string` - 説明文
- `children?: React.ReactNode` - 追加コンテンツ
- `variant?: 'default' | 'dark' | 'accent'` - 背景バリアント
- `className?: string` - 追加のCSSクラス

**用途:** 単一カラムでの技術説明

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <SingleColumnSection
    title="AI技術の可能性"
    description="AI（人工知能）は、ビジネスプロセスの自動化、データ分析、意思決定支援など、様々な領域で革新的なソリューションを提供します。"
    variant="dark"
  >
    <div className="mt-6">
      <p className="text-gray-300 leading-relaxed">
        機械学習、深層学習、自然言語処理などの先進的なAI技術を活用し、
        ビジネスの効率化と価値創造を実現します。
      </p>
    </div>
  </SingleColumnSection>
</div>
```

### セクション2: ターゲット説明

**コンポーネント:** `SingleColumnSection`

**Props:** セクション1と同じ

**用途:** ターゲット顧客への訴求

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <SingleColumnSection
    title="中小企業にこそ、AIがもたらす大きな恩恵"
    description="AI技術は、かつて大企業だけのものでしたが、クラウドサービスの発達とAIツールの普及により、中小企業でも手軽に導入できるようになりました。"
    variant="dark"
  >
    <div className="mt-6">
      <p className="text-gray-300 leading-relaxed">
        中小企業こそ、新しい技術の恩恵を最大限に活用できる柔軟性と意思決定の速さを持っています。
        限られたリソースを最大限に活用し、競争優位性を獲得するためのAI戦略を策定します。
      </p>
    </div>
  </SingleColumnSection>
</div>
```

### セクション3: 活用方法

**コンポーネント:** `ThreeCardSection`

**Props:**
- `title?: string` - セクションタイトル
- `description?: string` - セクション説明
- `cards: CardData[]` - カードデータ配列
- `variant?: 'default' | 'dark' | 'accent'` - 背景バリアント
- `padding?: 'sm' | 'md' | 'lg' | 'xl'` - パディングサイズ
- `className?: string` - 追加のCSSクラス

**CardData型:**
```tsx
interface CardData {
  title: string
  description: string
  tags?: string[]
  modalTitle?: string
  modalContent?: React.ReactNode
  modalSize?: 'sm' | 'md' | 'lg' | 'xl'
}
```

**用途:** 3つのカードで具体的な活用方法を提示（モーダル付き）

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <ThreeCardSection
    title="具体的な活用方法"
    description="AI技術を活用した具体的なビジネスソリューションをご提案します"
    cards={[
      {
        title: '業務効率化・自動化',
        description: 'AIが定型業務を代行し、ヒューマンエラーを削減。従業員をより創造的なコア業務へと解放し、企業全体の生産性を飛躍的に向上させます。',
        tags: ['自動化', '効率化', 'ChatGPT'],
        modalTitle: '業務効率化・自動化',
        modalContent: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">業務効率化・自動化</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">文書処理の自動化</h4>
                <p className="text-gray-300">契約書、請求書、レポートなどの文書を自動で分類・処理。OCR技術と自然言語処理を組み合わせ、従来の手作業を大幅に削減します。</p>
              </div>
              {/* 追加の詳細コンテンツ */}
            </div>
          </div>
        ),
        modalSize: "lg"
      },
      // 他のカード...
    ]}
    variant="dark"
  />
</div>
```

### セクション4: 説明セクション

**コンポーネント:** `SingleColumnSection`

**Props:** セクション1と同じ

**用途:** タイトルと説明文のみのシンプルな説明セクション

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <SingleColumnSection
    title="AI人材が働くすべての人たちに最適なワークライフバランスを"
    description="AI導入は業務効率化だけでなく、従業員の働き方も変革します。創造的な業務に時間を割けるよう、技術導入を通じて、すべての従業員がより充実した仕事と私生活を実現できる環境づくりをサポートします。"
    variant="dark"
  >
    <div></div>
  </SingleColumnSection>
</div>
```

### セクション5: 比較セクション

**コンポーネント:** `TwoColumnSection`

**Props:**
- `title?: string` - セクションタイトル
- `leftContent: React.ReactNode` - 左側のコンテンツ
- `rightContent: React.ReactNode` - 右側のコンテンツ
- `variant?: 'default' | 'dark' | 'accent'` - 背景バリアント
- `className?: string` - 追加のCSSクラス
- `textAlign?: 'left' | 'center' | 'right'` - テキストの配置

**用途:** 従来技術との比較など、2列での対比表示

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <TwoColumnSection
    title="従来技術との比較"
    leftContent={
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">従来のシステム開発</h3>
        <ul className="space-y-3 text-gray-300 inline-block text-left">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span>ルールベースの固定的な処理</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span>人手による大量のデータ処理</span>
          </li>
          {/* 他の項目... */}
        </ul>
      </div>
    }
    rightContent={
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">最新のAIソリューション</h3>
        <ul className="space-y-3 text-gray-300 inline-block text-left">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span>データからの自動学習と適応</span>
          </li>
          {/* 他の項目... */}
        </ul>
      </div>
    }
    variant="dark"
    textAlign="center"
  />
</div>
```

### セクション6: 導入要素

**コンポーネント:** `ThreeCardSection`

**Props:** セクション3と同じ

**用途:** 導入に必要な要素の提示（モーダル付き）

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <ThreeCardSection
    title="導入に必要な要素"
    description="AI導入成功のための3つの重要な要素をご説明します"
    cards={[
      {
        title: "技術要素",
        description: "AI導入に必要な技術的な要素を整理します。",
        tags: ["機械学習", "深層学習", "データ処理"],
        modalTitle: "技術要素",
        modalContent: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">データ基盤</h4>
                <p className="text-gray-300">高品質なデータの収集、蓄積、管理システムの構築</p>
              </div>
              {/* 他の詳細... */}
            </div>
          </div>
        ),
        modalSize: "lg"
      },
      // 他のカード...
    ]}
    variant="dark"
  />
</div>
```

### セクション7: 理由説明

**コンポーネント:** `TwoColumnSection`

**Props:** セクション5と同じ

**用途:** 導入が必要な理由の説明

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <TwoColumnSection
    title="なぜ今、導入が必要なのか"
    leftContent={
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">市場の変化</h3>
        <p className="text-gray-300">
          デジタル化の加速により、従来のビジネスモデルでは競争優位性を維持できなくなっています。
        </p>
        {/* 追加の説明... */}
      </div>
    }
    rightContent={
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">競争優位性</h3>
        <p className="text-gray-300">
          AI技術の早期導入により、市場での差別化と競争優位性を獲得できます。
        </p>
        {/* 追加の説明... */}
      </div>
    }
    variant="dark"
  />
</div>
```

### セクション8: 技術提供

**コンポーネント:** `TabSection` + `ThreeCardSection`（ネスト）

**Props:**
- `title?: string` - セクションタイトル
- `tabs: TabData[]` - タブデータ配列
- `defaultTab?: string` - デフォルトタブ
- `variant?: 'default' | 'dark' | 'accent'` - 背景バリアント

**TabData型:**
```tsx
interface TabData {
  id: string
  name: string
  content: React.ReactNode
}
```

**用途:** タブ切り替えで複数カテゴリの技術やサービスを提示

**デザイン特徴:**
- **ピル型/セグメントコントロール**: モダンで目立つタブデザイン
- **中央配置**: タブボタンが中央に配置され、統一感のあるデザイン
- **背景色によるアクティブ表示**: アンダーバーではなく背景色でアクティブ状態を表現

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <TabSection
    title="技術提供"
    tabs={[
      {
        id: 'development',
        name: '開発',
        content: (
          <ThreeCardSection
            padding="sm"
            cards={[
              {
                title: '機械学習モデル開発',
                description: 'ビジネスニーズに合わせた機械学習モデルの設計と開発',
                tags: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
                modalTitle: '機械学習モデル開発',
                modalContent: (
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      ビジネス課題を解決するカスタムAIモデル
                    </h4>
                    {/* 詳細コンテンツ... */}
                  </div>
                ),
                modalSize: "lg"
              },
              // 他のカード...
            ]}
            variant="dark"
          />
        )
      },
      {
        id: 'consulting',
        name: 'コンサルティング',
        content: (
          <ThreeCardSection
            padding="sm"
            cards={[
              // コンサルティング用のカード...
            ]}
            variant="dark"
          />
        )
      }
    ]}
    defaultTab="development"
    variant="dark"
  />
</div>
```

**タブデザインの詳細:**
- **外枠**: `bg-gray-800`でダークグレーの背景
- **ボタン**: `px-8 py-4`で大きく、`text-lg font-bold`で目立つ
- **アクティブ**: `bg-blue-600` + `shadow-md`で青背景と影
- **非アクティブ**: 透明背景 + `hover:bg-gray-700`でホバー効果

### セクション9: FAQ

**コンポーネント:** `FAQSection`

**Props:**
- `title?: string` - セクションタイトル
- `faqs: FAQData[]` - FAQデータ配列
- `variant?: 'default' | 'dark' | 'accent'` - 背景バリアント
- `defaultOpenId?: string` - デフォルトで開くFAQのID

**FAQData型:**
```tsx
interface FAQData {
  id: string
  question: string
  answer: string
}
```

**用途:** よくある質問のアコーディオン表示

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <FAQSection
    title="よくある質問"
    faqs={[
      {
        id: 'faq-1',
        question: 'AI導入にはどのくらいの期間がかかりますか？',
        answer: 'プロジェクトの規模や複雑さによって異なりますが、一般的には3ヶ月から6ヶ月程度です。'
      },
      {
        id: 'faq-2',
        question: 'どのような業界でAIを活用できますか？',
        answer: '製造業、金融、小売、ヘルスケアなど、あらゆる業界でAIの活用が可能です。'
      },
      // 他のFAQ...
    ]}
    variant="dark"
  />
</div>
```

### セクション10: 関連サービス

**コンポーネント:** `RelatedServicesSection`

**Props:**
- `title?: string` - セクションタイトル
- `services: RelatedServiceData[]` - 関連サービスデータ配列
- `variant?: 'default' | 'dark' | 'accent'` - 背景バリアント

**RelatedServiceData型:**
```tsx
interface RelatedServiceData {
  id: string
  title: string
  description: string
  image?: string
  tags?: string[]
  href: string
}
```

**用途:** 他のサービスへの導線

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <RelatedServicesSection
    title="関連サービス"
    services={[
      {
        id: 'web-development',
        title: 'Web開発',
        description: 'モダンなWebアプリケーションの開発',
        tags: ['React', 'Next.js', 'TypeScript'],
        href: '/services/web-development'
      },
      {
        id: 'app-development',
        title: 'アプリ開発',
        description: 'iOS・Androidアプリの開発',
        tags: ['React Native', 'Flutter'],
        href: '/services/app-development'
      },
      // 他のサービス...
    ]}
    variant="dark"
  />
</div>
```

### セクション11: CTA

**コンポーネント:** `SingleColumnSection`

**Props:** セクション1と同じ

**用途:** お問い合わせなどのCTA

**実装例:**
```tsx
<div className="border-b border-blue-400">
  <SingleColumnSection
    title="AIで新しいビジネス価値を創造しませんか？"
    description="IDEALのAI開発サービスで、貴社のビジネスに革新をもたらします。まずはお気軽にお問い合わせください。"
    variant="dark"
    className="text-center"
  >
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        お問い合わせ
      </button>
      <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors">
        サービス一覧に戻る
      </button>
    </div>
  </SingleColumnSection>
</div>
```

## セクション組み合わせパターン例

### AIページ（全セクション）
```
0,0.5,1,2,3,4,5,6,7,8,9,10,11
（ヒーロー、サービスナビ、技術説明、ターゲット説明、活用方法、説明、比較、導入要素、理由説明、技術提供、FAQ、関連、CTA）
```

### Web開発ページ例
```
0,0.5,1,3,5,8,9,10,11
（ヒーロー、サービスナビ、技術説明、活用方法、比較、技術提供、FAQ、関連、CTA）
```

### アプリ開発ページ例
```
0,0.5,1,2,3,6,8,9,10,11
（ヒーロー、サービスナビ、技術説明、ターゲット説明、活用方法、導入要素、技術提供、FAQ、関連、CTA）
```

### ゲーム制作ページ例
```
0,0.5,1,3,4,5,8,9,10,11
（ヒーロー、サービスナビ、技術説明、活用方法、説明、比較、技術提供、FAQ、関連、CTA）
```

### ブロックチェーン開発ページ例
```
0,0.5,1,2,3,5,7,8,9,10,11
（ヒーロー、サービスナビ、技術説明、ターゲット説明、活用方法、比較、理由説明、技術提供、FAQ、関連、CTA）
```

## 実装時の注意点

### 共通設定
- 各セクションは`<div className="border-b border-blue-400">`でラップする
- `variant="dark"`を統一使用
- ページ全体は`<div className="min-h-screen bg-black">`でラップ

### パディング調整
- 通常: `padding="lg"`（デフォルト）
- コンパクト: `padding="sm"`（技術提供セクションなど）
- 中程度: `padding="md"`

### デザイン統一の重要ポイント

#### **従来技術との比較セクション（セクション5）**
- **必須**: `textAlign="center"`を設定
- **箇条書き**: `inline-block text-left`クラスを適用
- **目的**: 中央配置でバランスの良い表示、テキストの左端を揃える

```tsx
// 正しい実装例
<TwoColumnSection
  title="従来技術との比較"
  textAlign="center"  // ← 必須
  leftContent={
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">従来のシステム開発</h3>
      <ul className="space-y-3 text-gray-300 inline-block text-left">  {/* ← 必須 */}
        <li className="flex items-start">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
          <span>テキスト</span>
        </li>
      </ul>
    </div>
  }
  // rightContent も同様...
/>
```

#### **技術提供セクション（セクション8）**
- **自動適用**: ピル型/セグメントコントロールデザインが自動で適用される
- **特徴**: 中央配置、背景色によるアクティブ表示、大きなボタンサイズ
- **カスタマイズ不要**: `TabSection`コンポーネントが標準で提供

### モーダルコンテンツ作成ガイドライン
- タイトル: `text-xl font-bold text-white mb-4`
- サブタイトル: `font-semibold text-blue-400 mb-2`
- 本文: `text-gray-300`
- セクション間隔: `space-y-4`または`space-y-6`

### レスポンシブ対応
- カードレイアウト: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 2カラムレイアウト: `grid md:grid-cols-2`
- ボタン配置: `flex flex-col sm:flex-row`
- タブデザイン: 自動でレスポンシブ対応済み

## コンポーネントファイルパス一覧

```typescript
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { SingleColumnSection } from '../../../components/sections/SingleColumnSection'
import { TwoColumnSection } from '../../../components/sections/TwoColumnSection'
import { ThreeCardSection } from '../../../components/sections/ThreeCardSection'
import { TabSection } from '../../../components/sections/TabSection'
import { FAQSection } from '../../../components/sections/FAQSection'
import { RelatedServicesSection } from '../../../components/sections/RelatedServicesSection'
```

## 型定義ファイル

```typescript
import { ServicePageData, TabData, CardData, RelatedServiceData, FAQData } from '../../types/service'
```

## 共通データファイル

```typescript
import { serviceLinks } from '../../../data/services/service-links'
```

## 使用例：新しいサービスページ作成

1. セクション番号を決定（例：`0,0.5,1,3,5,8,9,10,11`）
2. 必要なコンポーネントをimport
3. 共通データファイル（`serviceLinks`）をimport
4. 各セクションの実装例をコピー＆ペースト
5. データをサービスに合わせてカスタマイズ
6. モーダルコンテンツを追加（必要な場合）

### 必須セクション（全サービスページ共通）
- **セクション0**: ヒーローセクション（必須）
- **セクション0.5**: サービスナビゲーション（必須）

### デザイン統一の自動適用

#### **従来技術との比較セクション（セクション5）**
```tsx
// 必ず textAlign="center" を設定
<TwoColumnSection
  title="従来技術との比較"
  textAlign="center"  // ← 必須設定
  leftContent={...}
  rightContent={...}
  variant="dark"
/>

// 箇条書きには inline-block text-left を適用
<ul className="space-y-3 text-gray-300 inline-block text-left">
  <li className="flex items-start">
    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
    <span>テキスト</span>
  </li>
</ul>
```

#### **技術提供セクション（セクション8）**
```tsx
// ピル型デザインが自動で適用される
<TabSection
  title="技術提供"
  tabs={[...]}
  defaultTab="development"
  variant="dark"
/>
// ↑ 中央配置、背景色によるアクティブ表示、大きなボタンサイズが自動適用
```

### サービスナビゲーションの実装例
```tsx
import { serviceLinks } from '../../../data/services/service-links'

// ページ内で使用
<div className="border-b border-blue-400">
  <ServiceNavigation
    serviceLinks={serviceLinks}
    currentServiceId="your-service-id"
  />
</div>
```

### 新規サービスページ作成時のチェックリスト

#### **デザイン統一確認**
- [ ] 従来技術との比較セクションに`textAlign="center"`を設定
- [ ] 箇条書きに`inline-block text-left`クラスを適用
- [ ] 技術提供セクションでピル型デザインが適用されているか確認
- [ ] 全セクションに`border-b border-blue-400`を適用
- [ ] `variant="dark"`を統一使用

#### **機能確認**
- [ ] モーダル機能が正常に動作するか
- [ ] レスポンシブ表示が適切か
- [ ] サービスナビゲーションが表示されるか
- [ ] タブ切り替えが正常に動作するか

このガイドを使用することで、効率的にサービスページを作成できます。
