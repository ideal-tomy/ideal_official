import { Metadata } from 'next'
import { Modal } from '../../components/ui/Modal'
import { ModalTrigger } from '../../components/ui/ModalTrigger'
import { Section } from '../../components/ui/Section'
import { colors, typography } from '../../lib/design-tokens'

export const metadata: Metadata = {
  title: 'モーダルコンポーネントテスト | ideal',
  description: 'モーダルコンポーネントの動作確認用ページ',
}

/**
 * モーダルコンポーネントのテストページ
 * 単一責任: モーダルコンポーネントの動作確認のみ
 */
export default function TestModalPage() {
  return (
    <div className="min-h-screen bg-black">
      <Section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className={`${typography.h1} ${colors.text.primary} mb-8`}>
              モーダルコンポーネントテスト
            </h1>
            <p className={`${typography.bodyLarge} ${colors.text.secondary} mb-12`}>
              Headless UIを使用したモーダルコンポーネントの動作確認
            </p>
          </div>

          {/* 基本モーダルのテスト */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              基本モーダル
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
              基本的なモーダルコンポーネントの動作確認
            </p>
            
            <Modal 
              buttonText="基本モーダルを開く"
              title="基本モーダル"
              size="md"
            >
              <div className="space-y-4">
                <p>
                  これは基本的なモーダルコンポーネントのテストです。
                  Headless UIのDialogコンポーネントを使用して実装されています。
                </p>
                <p>
                  キーボードのESCキーで閉じることもできます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>アクセシビリティ対応</li>
                  <li>キーボードナビゲーション</li>
                  <li>フォーカストラップ</li>
                  <li>アニメーション</li>
                </ul>
              </div>
            </Modal>
          </div>

          {/* サイズ別モーダルのテスト */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              サイズ別モーダル
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
              異なるサイズのモーダルコンポーネントの動作確認
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Modal 
                buttonText="小サイズ"
                title="小サイズモーダル"
                size="sm"
              >
                <p>これは小サイズ（sm）のモーダルです。</p>
              </Modal>

              <Modal 
                buttonText="中サイズ"
                title="中サイズモーダル"
                size="md"
              >
                <p>これは中サイズ（md）のモーダルです。デフォルトサイズです。</p>
              </Modal>

              <Modal 
                buttonText="大サイズ"
                title="大サイズモーダル"
                size="lg"
              >
                <p>これは大サイズ（lg）のモーダルです。より多くのコンテンツを表示できます。</p>
              </Modal>

              <Modal 
                buttonText="特大サイズ"
                title="特大サイズモーダル"
                size="xl"
              >
                <p>これは特大サイズ（xl）のモーダルです。最大の表示領域を提供します。</p>
              </Modal>
            </div>
          </div>

          {/* モーダルトリガーのテスト */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              モーダルトリガー
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
              任意の要素をクリックしてモーダルを開くテスト
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModalTrigger
                title="カードクリックでモーダル"
                size="md"
                modalContent={
                  <div className="space-y-4">
                    <h4 className={`${typography.h4} ${colors.text.primary}`}>
                      AI戦略コンサルティング
                    </h4>
                    <p>
                      ビジネス目標に合わせたAI導入戦略の策定から実装まで、
                      一貫したサポートを提供します。
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>戦略立案</li>
                      <li>ロードマップ作成</li>
                      <li>KPI設定</li>
                    </ul>
                  </div>
                }
              >
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 hover:border-blue-400 transition-colors cursor-pointer">
                  <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                    AI戦略コンサルティング
                  </h3>
                  <p className={`${typography.body} ${colors.text.secondary}`}>
                    ビジネス目標に合わせたAI導入戦略の策定
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 text-sm rounded-full">
                      戦略立案
                    </span>
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 text-sm rounded-full">
                      ロードマップ作成
                    </span>
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 text-sm rounded-full">
                      KPI設定
                    </span>
                  </div>
                </div>
              </ModalTrigger>

              <ModalTrigger
                title="技術詳細モーダル"
                size="lg"
                modalContent={
                  <div className="space-y-6">
                    <h4 className={`${typography.h4} ${colors.text.primary}`}>
                      機械学習モデル開発
                    </h4>
                    <p>
                      ビジネスニーズに合わせた機械学習モデルの設計と開発を行います。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className={`${typography.h4} ${colors.text.primary} mb-2`}>
                          使用技術
                        </h5>
                        <ul className="space-y-1">
                          <li>• TensorFlow</li>
                          <li>• PyTorch</li>
                          <li>• Scikit-learn</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className={`${typography.h4} ${colors.text.primary} mb-2`}>
                          開発期間
                        </h5>
                        <p>3-6ヶ月</p>
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 hover:border-blue-400 transition-colors cursor-pointer">
                  <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                    機械学習モデル開発
                  </h3>
                  <p className={`${typography.body} ${colors.text.secondary}`}>
                    ビジネスニーズに合わせた機械学習モデルの設計と開発
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-900 text-green-300 text-sm rounded-full">
                      TensorFlow
                    </span>
                    <span className="px-3 py-1 bg-green-900 text-green-300 text-sm rounded-full">
                      PyTorch
                    </span>
                    <span className="px-3 py-1 bg-green-900 text-green-300 text-sm rounded-full">
                      Scikit-learn
                    </span>
                  </div>
                </div>
              </ModalTrigger>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

