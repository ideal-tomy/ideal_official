export const metaverseLabHero = {
  eyebrow: 'Spatial / VR・AR Lab',
  title: '画面ではなく、空間を体験する',
  subtitle:
    'VR・AR・3D・バーチャルイベント。空間体験を訓練・展示・物語の領域として研究・制作しています。',
} as const

export const metaverseCategories = [
  {
    id: 'vr-training',
    title: 'VR Training',
    description: '訓練・教育・防災。危険な作業や高額機材を使う訓練を安全に。',
  },
  {
    id: 'virtual-events',
    title: 'Virtual Events',
    description: 'イベント・展示会・コミュニティ。物理的制約を超えた集客と体験。',
  },
  {
    id: '3d-simulation',
    title: '3D Simulation',
    description: '建築・施設・空間シミュレーション。設計段階での可視化と検証。',
  },
  {
    id: 'interactive',
    title: 'Interactive Experiences',
    description: 'ゲーム・物語・体験型コンテンツ。没入感のあるインタラクティブ体験。',
  },
] as const

export const metaverseProjects = [
  {
    id: 'disaster-vr',
    title: '防災VR',
    description: '災害シナリオをVRで体験し、訓練・教育に活用する防災訓練コンテンツ。',
    category: 'VR Training',
  },
  {
    id: 'planetarium',
    title: 'プラネタリウム',
    description: '星空や宇宙を没入的に体験する、教育・展示向けの空間コンテンツ。',
    category: '3D Simulation',
  },
  {
    id: 'history-event',
    title: '歴史イベント体験',
    description: '歴史的な場面や出来事を、体験型コンテンツとして再現する企画。',
    category: 'Interactive Experiences',
  },
  {
    id: 'virtual-event',
    title: 'バーチャルイベント',
    description: '展示会・セミナー・コミュニティイベントを、仮想空間で開催する企画。',
    category: 'Virtual Events',
  },
  {
    id: 'gps-experience',
    title: 'GPS連動企画',
    description: '現実の位置情報と連動した、AR・空間体験型のインタラクティブ企画。',
    category: 'Interactive Experiences',
  },
  {
    id: 'meta-f1',
    title: 'メタF1 / ロンドンバス脱出',
    description: 'ゲーム・物語性を活かした、体験型エンターテインメントコンテンツ。',
    category: 'Interactive Experiences',
  },
] as const

export const metaverseTechnologies = [
  { name: 'Unity', description: 'クロスプラットフォーム3D・VR開発' },
  { name: 'Unreal Engine', description: '高品質リアルタイムレンダリング' },
  { name: 'WebXR', description: 'ブラウザベースのVR/AR体験' },
  { name: 'VR / AR', description: '各種ヘッドセット・ARデバイス対応' },
  { name: '3D Modeling', description: '空間・オブジェクトの3Dモデリング' },
] as const

export const metaverseSoftCta = {
  title: '企画・プロトタイプ相談',
  description:
    'VR / AR / 3D を活用した企画・プロトタイプについて相談できます。空間体験の研究領域から、実務への橋渡しとしてお気軽にどうぞ。',
  href: '/contact?service=metaverse',
} as const
