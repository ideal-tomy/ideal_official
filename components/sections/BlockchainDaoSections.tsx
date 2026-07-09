import dynamic from 'next/dynamic'
import { SingleColumnSection } from './SingleColumnSection'
import { TwoColumnSection } from './TwoColumnSection'

const ThreeCardSection = dynamic(
  () => import('./ThreeCardSection').then((mod) => ({ default: mod.ThreeCardSection })),
  { loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" /> }
)

export function BlockchainDaoSections() {
  return (
    <>
      <div id="dao-governance" className="border-b border-brand scroll-mt-24">
        <SingleColumnSection
          title="DAO・ガバナンス設計"
          description="分散型自律組織（DAO）のガバナンス設計、投票システム、トークンによる意思決定プロセスを支援します。組織の透明性と自律性を高める実務的な設計を行います。"
          variant="dark"
        >
          <div className="mt-6">
            <p className="text-gray-300 leading-relaxed">
              投資DAO、プロトコルDAO、コミュニティDAOなど、目的に応じたガバナンスモデルとスマートコントラクト連携を設計します。
            </p>
          </div>
        </SingleColumnSection>
      </div>

      <div className="border-b border-brand">
        <ThreeCardSection
          title="DAOの活用形態"
          description="目的に応じたDAO設計のパターンをご紹介します"
          cards={[
            {
              title: '投資DAO / VC DAO',
              description:
                'メンバーからの資金を集め、投票によって投資先を決定。利益分配もスマートコントラクトで自動化します。',
              tags: ['投資', 'VC', '資金調達'],
            },
            {
              title: 'プロトコルDAO / プロダクトDAO',
              description:
                'DeFiプロトコルやサービスの開発・運営方針をコミュニティの投票で決定。貢献者への報酬も自動分配します。',
              tags: ['DeFi', 'プロダクト', 'ガバナンス'],
            },
            {
              title: 'コミュニティDAO',
              description:
                '共通の目的を持つメンバーが、コミュニティ運営方針や共有資産の管理を民主的に行います。',
              tags: ['コミュニティ', 'NFT', 'メンバーシップ'],
            },
          ]}
          variant="dark"
        />
      </div>

      <div className="border-b border-brand">
        <TwoColumnSection
          title="従来組織との比較"
          leftContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">従来の中央集権組織</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>トップダウンの意思決定</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>情報の非対称性</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>恣意的な評価・報酬</span>
                </li>
              </ul>
            </div>
          }
          rightContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">DAO（分散型自律組織）</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>分散型の意思決定</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>透明性の高い情報共有</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>ルールに基づく自動的な評価・報酬</span>
                </li>
              </ul>
            </div>
          }
          variant="dark"
          textAlign="center"
        />
      </div>

      <div id="dao-legal" className="border-b border-brand scroll-mt-24">
        <SingleColumnSection
          title="DAO法に基づく組織・ルールメイク"
          description="日本のDAO法（株式会社法の特例等）を踏まえた合同会社型DAOの設計、定款・ガバナンスルールの策定、トークン発行と法務の整合をサポートします。"
          variant="accent"
        >
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              トークン発行、ガバナンストークン設計、投票・提案プロセスのルール策定、法人格・税務の論点整理まで、
              オンチェーンとオフチェーンの両面から伴走します。
            </p>
            <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
              <li>トークン発行・トークノミクス設計</li>
              <li>DAO法に基づく合同会社のルールメイク</li>
              <li>ガバナンス・投票システムの設計</li>
              <li>スマートコントラクトと法務ドキュメントの整合</li>
            </ul>
          </div>
        </SingleColumnSection>
      </div>
    </>
  )
}

