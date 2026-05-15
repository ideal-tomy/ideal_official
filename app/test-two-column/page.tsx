'use client'

import { TwoColumnSection } from '../../components/sections/TwoColumnSection'
import { ServiceCard } from '../../components/ui/ServiceCard'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { TechnologyCard } from '../../components/ui/TechnologyCard'
import Image from 'next/image'

export default function TestTwoColumnPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            TwoColumnSection テストページ
          </h1>
          <p className="text-gray-300 text-center mt-4">
            2カラムレイアウトのセクションコンポーネントの動作確認
          </p>
        </div>
      </div>

      {/* テスト1: 基本レイアウト（等分割） */}
      <TwoColumnSection
        title="基本レイアウトテスト"
        subtitle="等分割レイアウト"
        description="左右のカラムが等分割で表示されます。"
        leftContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">左カラム</h3>
            <p className="text-gray-300 mb-4">
              このセクションは左カラムのコンテンツです。
              テキスト、画像、カードなど、任意のコンテンツを配置できます。
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">サンプルカード</h4>
              <p className="text-gray-300">
                カード形式のコンテンツも配置可能です。
              </p>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">右カラム</h3>
            <p className="text-gray-300 mb-4">
              このセクションは右カラムのコンテンツです。
              左カラムと同様に、様々なコンテンツを配置できます。
            </p>
            <ServiceCard
              title="サービス例"
              description="カードコンポーネントの使用例"
              variant="default"
              onClick={() => console.log('Service clicked')}
            />
          </div>
        }
      />

      {/* テスト2: 左重視レイアウト */}
      <TwoColumnSection
        title="左重視レイアウト"
        description="左カラムが2/3、右カラムが1/3の比率で表示されます。"
        columnRatio="left-heavy"
        variant="dark"
        leftContent={
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">メインコンテンツ</h3>
            <p className="text-gray-300 mb-4">
              左カラムが広く表示されるため、メインコンテンツを配置するのに適しています。
              詳細な説明文や画像、動画などのメディアコンテンツを配置できます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                title="機能1"
                description="詳細な機能説明"
                icon="⚡"
                onClick={() => console.log('Feature 1 clicked')}
              />
              <FeatureCard
                title="機能2"
                description="詳細な機能説明"
                icon="🚀"
                onClick={() => console.log('Feature 2 clicked')}
              />
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">サイドバー</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-white mb-2">関連情報</h4>
              <p className="text-gray-300 text-sm">
                右カラムは狭いため、補足情報や関連リンクなどを配置するのに適しています。
              </p>
            </div>
            <TechnologyCard
              title="技術スタック"
              description="使用技術の一覧"
              tags={['React', 'TypeScript', 'Tailwind']}
              onClick={() => console.log('Tech clicked')}
            />
          </div>
        }
      />

      {/* テスト3: 右重視レイアウト */}
      <TwoColumnSection
        title="右重視レイアウト"
        description="左カラムが1/3、右カラムが2/3の比率で表示されます。"
        columnRatio="right-heavy"
        variant="accent"
        leftContent={
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">ナビゲーション</h3>
            <div className="space-y-2">
              {['項目1', '項目2', '項目3', '項目4'].map((item, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">メインコンテンツ</h3>
            <p className="text-gray-300 mb-4">
              右カラムが広く表示されるため、メインコンテンツを配置するのに適しています。
              画像や動画などのメディアコンテンツを配置できます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">詳細1</h4>
                <p className="text-gray-300 text-sm">
                  詳細な説明文を配置できます。
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">詳細2</h4>
                <p className="text-gray-300 text-sm">
                  詳細な説明文を配置できます。
                </p>
              </div>
            </div>
          </div>
        }
      />

      {/* テスト4: モバイル順序逆転 */}
      <TwoColumnSection
        title="モバイル順序逆転"
        description="モバイル表示では右カラムが先に表示されます。"
        reverseOnMobile={true}
        padding="xl"
        leftContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">左カラム（PC表示）</h3>
            <p className="text-gray-300">
              このコンテンツはPC表示では左に、モバイル表示では下に表示されます。
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300 text-sm">
                モバイル表示では順序が逆転します。
              </p>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">右カラム（PC表示）</h3>
            <p className="text-gray-300">
              このコンテンツはPC表示では右に、モバイル表示では上に表示されます。
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300 text-sm">
                モバイル表示では順序が逆転します。
              </p>
            </div>
          </div>
        }
      />

      {/* テスト5: 画像配置例 - 左に画像、右にテキスト（ポートレート） */}
      <TwoColumnSection
        title="画像配置例 - 左に画像、右にテキスト"
        subtitle="ポートレート画像の活用"
        description="test01.jpg（ポートレート）を左カラムに配置し、右カラムにテキストを配置したレイアウト例です。"
        columnRatio="left-heavy"
        variant="dark"
        leftContent={
          <div className="space-y-4">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/test01.jpg"
                alt="AI技術とデータ分析のコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">ポートレート画像の特性を活かした配置</p>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">AI技術の可能性</h3>
            <p className="text-gray-300 mb-4">
              ポートレート画像を左カラムに配置することで、画像の縦長の特性を活かし、
              視覚的なインパクトを与えながら、右カラムで詳細な説明を展開できます。
            </p>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">特徴</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• 縦長の画像を効果的に活用</li>
                  <li>• 左カラムで視覚的インパクト</li>
                  <li>• 右カラムで詳細説明</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">データ分析</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">グローバル</span>
              </div>
            </div>
          </div>
        }
      />

      {/* テスト6: 画像配置例 - 左にテキスト、右に画像（ランドスケープ） */}
      <TwoColumnSection
        title="画像配置例 - 左にテキスト、右に画像"
        subtitle="ランドスケープ画像の活用"
        description="test02.jpg（ランドスケープ）を右カラムに配置し、左カラムにテキストを配置したレイアウト例です。"
        columnRatio="right-heavy"
        variant="accent"
        leftContent={
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">グローバルなテクノロジー</h3>
            <p className="text-gray-300 mb-4">
              ランドスケープ画像を右カラムに配置することで、画像の横長の特性を活かし、
              広がりのある印象を与えながら、左カラムで詳細な説明を展開できます。
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">特徴</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• 横長の画像を効果的に活用</li>
                  <li>• 右カラムで視覚的インパクト</li>
                  <li>• 左カラムで詳細説明</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">グローバル</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">テクノロジー</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">メディア</span>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/test02.jpg"
                alt="グローバルなテクノロジーとメディアのコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">ランドスケープ画像の特性を活かした配置</p>
            </div>
          </div>
        }
      />

      {/* テスト7: カスタムクラス */}
      <TwoColumnSection
        title="カスタムクラス"
        description="追加のCSSクラスを適用したテストです。"
        className="border-t border-gray-700"
        leftContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">グラデーション背景</h3>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg">
              <p className="text-white">
                カスタムクラスを使用してグラデーション背景を適用しました。
              </p>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">アニメーション</h3>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <p className="text-gray-300">
                ホバーエフェクトが適用されたカードです。
              </p>
            </div>
          </div>
        }
      />

      {/* フッター */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            TwoColumnSection コンポーネントのテスト完了
          </p>
        </div>
      </div>
    </div>
  )
}
