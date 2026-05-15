'use client'

import { SingleColumnSection } from '../../components/sections/SingleColumnSection'
import { ServiceCard } from '../../components/ui/ServiceCard'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { TechnologyCard } from '../../components/ui/TechnologyCard'
import Image from 'next/image'

export default function TestSingleColumnPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            SingleColumnSection テストページ
          </h1>
          <p className="text-gray-300 text-center mt-4">
            単一カラムレイアウトのセクションコンポーネントの動作確認
          </p>
        </div>
      </div>

      {/* テスト1: 基本レイアウト */}
      <SingleColumnSection
        title="基本レイアウトテスト"
        subtitle="サブタイトル"
        description="これは単一カラムレイアウトの基本テストです。中央配置で表示されます。"
      >
        <div className="space-y-4">
          <p className="text-gray-300">
            このセクションは単一カラムで表示されます。コンテンツは中央に配置され、
            最大幅は4xl（896px）に制限されています。
          </p>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">サンプルコンテンツ</h3>
            <p className="text-gray-300">
              ここに任意のコンテンツを配置できます。カード、画像、テキストなど、
              様々な要素を組み合わせて使用できます。
            </p>
          </div>
        </div>
      </SingleColumnSection>

      {/* テスト2: ダークバリアント */}
      <SingleColumnSection
        title="ダークバリアント"
        description="背景色がダークなバリアントです。"
        variant="dark"
        textAlign="left"
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">機能1</h4>
              <p className="text-gray-300">左寄せレイアウトのテスト</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">機能2</h4>
              <p className="text-gray-300">レスポンシブ対応のテスト</p>
            </div>
          </div>
        </div>
      </SingleColumnSection>

      {/* テスト3: アクセントバリアント */}
      <SingleColumnSection
        title="アクセントバリアント"
        description="アクセントカラーを使用したバリアントです。"
        variant="accent"
        padding="xl"
      >
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">カードコンポーネントテスト</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Web開発"
                description="モダンなWebサイト制作"
                variant="default"
                onClick={() => console.log('Web開発 clicked')}
              />
              <FeatureCard
                title="レスポンシブ対応"
                description="あらゆるデバイスに対応"
                icon="📱"
                onClick={() => console.log('Feature clicked')}
              />
              <TechnologyCard
                title="React"
                description="最新のフロントエンド技術"
                tags={['JavaScript', 'TypeScript']}
                onClick={() => console.log('Technology clicked')}
              />
            </div>
          </div>
        </div>
      </SingleColumnSection>

      {/* テスト4: 小さいパディング */}
      <SingleColumnSection
        title="小さいパディング"
        description="パディングサイズを小さくしたバリアントです。"
        padding="sm"
        textAlign="right"
      >
        <div className="space-y-4">
          <p className="text-gray-300">
            右寄せレイアウトのテストです。パディングも小さく設定されています。
          </p>
          <div className="bg-gray-800 p-4 rounded-lg text-right">
            <p className="text-gray-300">
              このコンテンツは右寄せで表示されます。
            </p>
          </div>
        </div>
      </SingleColumnSection>

      {/* テスト5: 画像配置例 - ポートレート画像（上に画像、下にテキスト） */}
      <SingleColumnSection
        title="画像配置例 - ポートレート"
        subtitle="上に画像、下にテキスト"
        description="test01.jpg（ポートレート）を使用したレイアウト例です。"
        className="border-t border-gray-700"
      >
        <div className="space-y-6">
          {/* ポートレート画像の配置例 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-96 w-full">
              <Image
                src="/images/test01.jpg"
                alt="AI技術とデータ分析のコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">AI技術の可能性</h3>
              <p className="text-gray-300 mb-4">
                ポートレート画像を上部に配置し、下部にテキストを配置したレイアウトです。
                画像の縦長の特性を活かし、視覚的なインパクトを与えます。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">データ分析</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">グローバル</span>
              </div>
            </div>
          </div>
        </div>
      </SingleColumnSection>

      {/* テスト6: 画像配置例 - ランドスケープ画像 */}
      <SingleColumnSection
        title="画像配置例 - ランドスケープ"
        subtitle="上に画像、下にテキスト"
        description="test02.jpg（ランドスケープ）を使用したレイアウト例です。"
      >
        <div className="space-y-6">
          {/* ランドスケープ画像の配置例 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/images/test02.jpg"
                alt="グローバルなテクノロジーとメディアのコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">グローバルなテクノロジー</h3>
              <p className="text-gray-300 mb-4">
                ランドスケープ画像を上部に配置し、下部にテキストを配置したレイアウトです。
                横長の画像の特性を活かし、広がりのある印象を与えます。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">グローバル</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">テクノロジー</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">メディア</span>
              </div>
            </div>
          </div>
        </div>
      </SingleColumnSection>

      {/* テスト7: カスタムクラス */}
      <SingleColumnSection
        title="カスタムクラス"
        description="追加のCSSクラスを適用したテストです。"
        className="border-t border-gray-700"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">グラデーション背景</h3>
            <p className="text-blue-100">
              カスタムクラスを使用してグラデーション背景を適用しました。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📦</div>
                <p className="text-sm text-gray-300">アイテム {item}</p>
              </div>
            ))}
          </div>
        </div>
      </SingleColumnSection>

      {/* フッター */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            SingleColumnSection コンポーネントのテスト完了
          </p>
        </div>
      </div>
    </div>
  )
}
