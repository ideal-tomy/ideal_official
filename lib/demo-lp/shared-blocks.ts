import type { FaqItem, FinalCtaBlock, FormField, ProcessBlock } from './types'

export const defaultFormFields: FormField[] = [
  {
    key: 'company',
    label: '会社名',
    placeholder: '株式会社〇〇',
    required: true,
    type: 'text',
  },
  {
    key: 'name',
    label: 'お名前',
    placeholder: '山田 太郎',
    required: true,
    type: 'text',
  },
  {
    key: 'email',
    label: 'メールアドレス',
    placeholder: 'you@example.com',
    required: true,
    type: 'email',
  },
  {
    key: 'message',
    label: '相談内容（任意）',
    placeholder: '課題や導入希望時期など',
    required: false,
    type: 'textarea',
  },
  {
    key: 'privacy',
    label: 'プライバシーポリシーに同意する',
    required: true,
    type: 'checkbox',
  },
]

export function defaultProcess(demoLabel: string): ProcessBlock {
  return {
    label: '進め方',
    headline: 'まずは触って、数字を見て、相談する。',
    lead: '説明会より先に、御社の課題が解けるかを短時間で確かめられます。',
    steps: [
      {
        no: '01',
        title: 'デモ体験',
        costLabel: 'ここまで費用ゼロ',
        body: `${demoLabel}の簡易デモ（または本格デモ）を、その場で触れます。`,
      },
      {
        no: '02',
        title: '試算と範囲のすり合わせ',
        costLabel: '無償・数週間〜',
        body: '影響人数・作業時間から金額感を合わせ、導入範囲のたたき台を作ります。',
      },
      {
        no: '03',
        title: '小さく始める',
        costLabel: '本導入・運用',
        body: '対象業務を絞って導入し、運用しながら拡げます。',
      },
    ],
    exitNote: '合わなければ、ここで終えて構いません。',
  }
}

export function defaultFaq(theme: {
  fit: string
  price: string
  security: string
  accuracy: string
  prep: string
  small: string
  env: string
  coexistence: string
}): FaqItem[] {
  return [
    {
      category: 'fit',
      q: 'うちの業務にも向いていますか？',
      a: theme.fit,
      defaultOpen: true,
    },
    {
      category: 'price',
      q: '費用感はどのくらいですか？',
      a: theme.price,
    },
    {
      category: 'running-cost',
      q: '運用コストは続きますか？',
      a: 'モデル利用料と保守が中心です。問い合わせ削減で相殺できるかを試算で確認します。',
    },
    {
      category: 'environment',
      q: '既存システムとの接続は？',
      a: theme.env,
    },
    {
      category: 'accuracy',
      q: '精度や誤回答が心配です。',
      a: theme.accuracy,
    },
    {
      category: 'security',
      q: '社外へのデータ持ち出しは？',
      a: theme.security,
    },
    {
      category: 'coexistence',
      q: '既存ツールと併用できますか？',
      a: theme.coexistence,
    },
    {
      category: 'preparation',
      q: '導入前に何を準備すればよいですか？',
      a: theme.prep,
    },
    {
      category: 'small-start',
      q: '小さく始められますか？',
      a: theme.small,
    },
  ]
}

export function defaultFinalCta(
  tryHref: string,
  tryLabel = 'いますぐデモを触る',
): FinalCtaBlock {
  return {
    headline: 'まずは触って、金額感を見てください。',
    body: '資料請求で終わらせず、その場で体験できます。合わなければ無理に進めません。',
    assurances: ['無理な営業はしません', 'NDA対応可', 'オンラインで完結'],
    formTitle: '無償トライアルについて相談する',
    formNote: '入力は1分。1営業日以内にご連絡します。',
    fields: defaultFormFields,
    tryCta: {
      label: tryLabel,
      href: tryHref,
      variant: 'secondary',
    },
  }
}
