import type { CSSProperties, ReactNode } from 'react'
import type { TopFeaturedDemoId } from '@/data/demo-first/top-featured-demos'

/** 段階 1〜5 で出る要素。タイミングは globals.css の df-* が持つ */
const vars = (values: Record<string, string>) => values as CSSProperties

const muted = 'text-[#6b7280]'

function Screen({ app, children }: { app: string; children: ReactNode }) {
  return (
    <span className="block w-full max-w-[460px] overflow-hidden rounded-[14px] bg-white text-left text-[#1a1a2e] shadow-[0_14px_30px_rgba(11,31,74,0.2)]">
      <span className="flex items-center justify-between gap-3 border-b border-[#e5e7eb] px-3.5 py-2 text-[11px] font-bold">
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="h-2 w-2 rounded-full bg-[#2b6fe0]" />
          {app}
        </span>
        <span className={`font-medium whitespace-nowrap ${muted}`}>画面の例</span>
      </span>
      <span className="relative block h-[224px] p-3.5">{children}</span>
    </span>
  )
}

const PHOTO_TONES = [
  'linear-gradient(180deg,#cfe0f5 0 42%,#9aa6b6 42% 100%)',
  'linear-gradient(180deg,#d8e6f3 0 50%,#b5a58c 50% 100%)',
  'linear-gradient(180deg,#c9dbef 0 38%,#8f9aab 38% 100%)',
]

function ConstructionScene() {
  return (
    <Screen app="工事日報">
      <span className="grid h-full grid-cols-[84px_minmax(0,1fr)] gap-4">
        <span className="relative">
          <span className="absolute inset-0 grid place-items-center rounded-lg border-2 border-dashed border-[#cbd5e1] bg-[#f8fafc] text-center text-[11px] font-bold">
            <span>
              <span className={`block ${muted}`}>現場写真</span>
              <span className="df-m df-in-3 block text-[#2b6fe0]">3枚を送信</span>
            </span>
          </span>
          {PHOTO_TONES.map((tone, index) => (
            <span
              key={tone}
              className="df-m df-absorb absolute left-0 h-[50px] w-[78px] rounded-md border-2 border-white shadow-[0_4px_10px_rgba(11,31,74,0.18)]"
              style={{
                top: `${6 + index * 62}px`,
                background: tone,
                ...vars({
                  '--x0': `${-24 - index * 6}px`,
                  '--y0': `${-8 + index * 6}px`,
                  '--r': `${-8 + index * 7}deg`,
                  '--x1': '190px',
                  '--y1': `${44 - index * 62}px`,
                }),
              }}
            />
          ))}
        </span>
        <span className="flex flex-col rounded-lg border border-[#e5e7eb] bg-[#f8fafc] p-3">
          <span className="flex items-baseline justify-between gap-2 text-[11px]">
            <b className="whitespace-nowrap">工事日報</b>
            <span className={`whitespace-nowrap ${muted}`}>6月12日 基礎工事</span>
          </span>
          <span className="mt-2 grid grid-cols-4 gap-1.5">
            {PHOTO_TONES.map((tone) => (
              <span
                key={tone}
                className="df-m df-in-3 block aspect-[4/3] rounded"
                style={{ background: tone, ...vars({ '--s0': '0.6', '--y0': '0px' }) }}
              />
            ))}
            <span className="df-m df-in-4 grid aspect-[4/3] place-items-center rounded border border-dashed border-[#e0a23a] bg-[#fff4e0] text-[10px] font-bold text-[#b45309]">
              不足
            </span>
          </span>
          <span className="df-m df-in-3 mt-3 flex gap-2 text-[12px] whitespace-nowrap">
            <span className={muted}>作業内容</span>
            <b>基礎配筋の検査</b>
          </span>
          <span className="df-m df-in-4 mt-1 flex gap-2 text-[12px] whitespace-nowrap">
            <span className={muted}>写真</span>
            <b>3枚を整理、1枚が不足</b>
          </span>
          <span className="df-m df-in-5 mt-auto self-start rounded-full bg-[#2b6fe0] px-3 py-1 text-[11px] font-bold whitespace-nowrap text-white">
            下書きを確認して提出
          </span>
        </span>
      </span>
    </Screen>
  )
}

function KnowledgeScene() {
  return (
    <Screen app="社内規程に質問">
      <span className="flex h-full flex-col gap-2.5">
        <span
          className="df-m df-in-1 self-end rounded-2xl rounded-br-sm bg-[#2b6fe0] px-3 py-2 text-[12.5px] font-bold whitespace-nowrap text-white"
          style={vars({ '--x0': '12px', '--y0': '0px' })}
        >
          午前半休のあと、午後は在宅にできる？
        </span>
        <span className="relative self-start">
          <span className="df-m df-blip-2 absolute top-0 left-0 flex gap-1 rounded-2xl bg-[#f1f5f9] px-3 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
          </span>
          <span className="df-m df-in-3 block rounded-2xl rounded-bl-sm bg-[#f1f5f9] px-3 py-2 text-[12.5px] leading-relaxed">
            <span className="block whitespace-nowrap">条件を満たせば可能です。</span>
            <span className="block whitespace-nowrap">在宅勤務の申請と、上長の承認が必要です。</span>
          </span>
        </span>
        <span
          className="df-m df-grow-4 block origin-top rounded-md border-l-[3px] border-[#2b6fe0] bg-[#eaf3fb] px-3 py-2"
          style={vars({ '--g0': 'scaleY(0)' })}
        >
          <span className="block text-[10.5px] font-bold text-[#2b6fe0]">根拠の規程</span>
          <span className="block text-[12px] font-bold whitespace-nowrap">就業規則 第18条 在宅勤務</span>
        </span>
        <span className={`df-m df-in-5 text-[11px] whitespace-nowrap ${muted}`}>
          手続き：前日までに申請し、上長が承認
        </span>
      </span>
    </Screen>
  )
}

function QualityScene() {
  return (
    <Screen app="品質インシデント">
      <span className="grid h-full grid-cols-[120px_minmax(0,1fr)] gap-3.5">
        <span className="flex flex-col">
          <span className="relative grid h-[118px] place-items-center rounded-lg bg-[#eef1f7]">
            <span className="relative block h-[58px] w-[96px] rotate-[-10deg] rounded-[12px] border border-[#9aa4b8] bg-[linear-gradient(135deg,#c5cdd8,#f5f7fa_40%,#9ca6b8)] shadow-[4px_8px_12px_rgba(26,35,64,0.15)]">
              <span className="absolute top-[11px] left-[32px] h-8 w-8 rounded-full border-[6px] border-[#8d97ac] bg-[#d8dee8]" />
              <span className="absolute top-[14px] right-[10px] h-[2px] w-4 rotate-[36deg] bg-[#5f6c86]" />
            </span>
            <span
              className="df-m df-in-1 absolute top-[30px] right-[14px] h-8 w-9 rounded-full border-2 border-[#e0a23a]"
              style={vars({ '--s0': '1.8', '--y0': '0px' })}
            />
          </span>
          <span className={`mt-2 text-[11px] whitespace-nowrap ${muted}`}>ロット Q-0618 外観</span>
          <span className="df-m df-in-1 mt-0.5 text-[12px] font-bold whitespace-nowrap">
            シール面に線状の傷
          </span>
        </span>
        <span className="flex flex-col gap-2">
          <span className={`text-[11px] ${muted}`}>原因の候補</span>
          <span className="df-m df-in-2 block" style={vars({ '--x0': '16px', '--y0': '0px' })}>
            <span className="df-m df-ring-4 block rounded-lg border border-[#dbe3f0] bg-white px-3 py-2">
              <b className="block text-[10.5px] text-[#2b6fe0]">候補A</b>
              <span className="block text-[12.5px] font-bold whitespace-nowrap">治具の摩耗</span>
              <span className={`block text-[11px] whitespace-nowrap ${muted}`}>同じ位置に3件発生</span>
            </span>
          </span>
          <span className="df-m df-in-3 block" style={vars({ '--x0': '16px', '--y0': '0px' })}>
            <span
              className="df-m df-dim-4 block rounded-lg border border-[#dbe3f0] bg-white px-3 py-2"
              style={vars({ '--d1': 'translate(10px, 4px) scale(0.96)' })}
            >
              <b className="block text-[10.5px] text-[#2b6fe0]">候補B</b>
              <span className="block text-[12.5px] font-bold whitespace-nowrap">材料ロット</span>
              <span className={`block text-[11px] whitespace-nowrap ${muted}`}>別ロットでも発生</span>
            </span>
          </span>
          <span className="df-m df-in-5 text-[12px] font-bold whitespace-nowrap text-[#2b6fe0]">
            是正：治具を交換して再測定
          </span>
        </span>
      </span>
    </Screen>
  )
}

function CityNode({ name }: { name: string }) {
  return (
    <span className="row-span-2 grid place-items-center self-stretch rounded-lg bg-[#14264a] px-2.5 text-[12px] font-bold whitespace-nowrap text-white">
      {name}
    </span>
  )
}

function LogisticsScene() {
  return (
    <Screen app="配車盤">
      <span className="flex h-full flex-col">
        <span className="grid grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-2 gap-x-2.5 gap-y-3">
          <CityNode name="名古屋" />
          <span className="flex flex-col gap-1">
            <span className="df-m df-in-1 text-[10.5px] font-bold whitespace-nowrap text-[#2b6fe0]">
              行き　納品 12t
            </span>
            <span className="df-m df-grow-1 block h-[3px] origin-left rounded bg-[#2b6fe0]" />
          </span>
          <CityNode name="大阪" />
          <span className="flex flex-col gap-1">
            <span
              className="df-m df-grow-2 block origin-right border-t-[3px] border-dashed border-[#94a3b8]"
              style={vars({ '--g0': 'scaleX(0)' })}
            />
            <span className={`df-m df-in-2 text-[10.5px] font-bold whitespace-nowrap ${muted}`}>
              帰り　荷台が空いている
            </span>
          </span>
        </span>
        <span className="mt-4 grid grid-cols-2 gap-2">
          <span className="df-m df-in-3 block">
            <span className="df-m df-ring-4 block rounded-lg border border-[#dbe3f0] bg-white px-2.5 py-2">
              <span className="flex items-center justify-between gap-2">
                <b className="text-[12.5px] whitespace-nowrap">京都発 4枚</b>
                <span className="df-m df-in-4 rounded bg-[#2b6fe0] px-1.5 text-[10px] font-bold whitespace-nowrap text-white">
                  載せる
                </span>
              </span>
              <span className={`block text-[11px] whitespace-nowrap ${muted}`}>帰着18:00に間に合う</span>
            </span>
          </span>
          <span className="df-m df-in-3 block">
            <span className="df-m df-dim-4 block rounded-lg border border-[#dbe3f0] bg-white px-2.5 py-2">
              <b className="block text-[12.5px] whitespace-nowrap">奈良発 6枚</b>
              <span className={`block text-[11px] whitespace-nowrap ${muted}`}>休息時間が足りない</span>
            </span>
          </span>
        </span>
        <span className={`df-m df-in-5 mt-auto text-[11px] whitespace-nowrap ${muted}`}>
          積む荷物は担当者が決めます
        </span>
      </span>
    </Screen>
  )
}

const INSPECTION_ROWS = [
  { label: '材質', drawing: 'SUS304', cert: 'SUS304', link: 'df-grow-2' },
  { label: '引張強さ', drawing: '520以上', cert: '545', link: 'df-grow-3' },
  { label: '硬さ', drawing: 'HRB 90以下', cert: '記載なし', link: null },
] as const

function InspectionScene() {
  return (
    <Screen app="受入検査の照合">
      <span className="flex h-full flex-col">
        <span className={`grid grid-cols-[64px_minmax(0,1fr)_52px_minmax(0,1fr)] px-1.5 text-[11px] font-bold ${muted}`}>
          <span />
          <span>図面</span>
          <span />
          <span>材料証明書</span>
        </span>
        {INSPECTION_ROWS.map((row) => (
          <span key={row.label} className="df-m df-in-1 mt-2 block">
            <span
              className={`grid grid-cols-[64px_minmax(0,1fr)_52px_minmax(0,1fr)] items-center rounded-md px-1.5 py-1 ${
                row.link ? '' : 'df-m df-hl-4'
              }`}
            >
              <span className={`text-[11px] whitespace-nowrap ${muted}`}>{row.label}</span>
              <b className="rounded-md border border-[#e5e7eb] bg-white px-2 py-1.5 text-[12px] whitespace-nowrap">
                {row.drawing}
              </b>
              <span className="grid place-items-center px-1">
                {row.link ? (
                  <span className={`df-m ${row.link} block h-[2px] w-full origin-left bg-[#2b6fe0]`} />
                ) : (
                  <span className="df-m df-in-4 rounded border border-[#c47b12] bg-white px-1 text-[10px] font-bold whitespace-nowrap text-[#c47b12]">
                    要確認
                  </span>
                )}
              </span>
              <b className="rounded-md border border-[#e5e7eb] bg-white px-2 py-1.5 text-[12px] whitespace-nowrap">
                {row.cert}
              </b>
            </span>
          </span>
        ))}
        <span className="df-m df-in-5 mt-auto text-[12px] font-bold whitespace-nowrap text-[#b45309]">
          保留：硬さの記載を取引先に確認
        </span>
      </span>
    </Screen>
  )
}

const HANDOFF_MEMOS = [
  { time: '朝 申し送り', body: '朝食は半分ほど' },
  { time: '昼 申し送り', body: '入浴は明日に変更' },
  { time: '夕 面談', body: 'ご家族が来所予定' },
]

function HandoffScene() {
  return (
    <Screen app="記録と日報">
      <span className="grid h-full grid-cols-[124px_minmax(0,1fr)] gap-3.5">
        <span className="relative flex flex-col gap-2">
          <span className={`text-[11px] ${muted}`}>今日の記録</span>
          <span className="df-m df-in-3 absolute inset-x-0 top-[24px] bottom-0 grid place-items-center rounded-lg border-2 border-dashed border-[#f3dfb0] bg-[#fffdf7] text-center text-[11px] font-bold text-[#b45309]">
            <span>
              <span className="block whitespace-nowrap">3件の記録を</span>
              <span className="block whitespace-nowrap">日報にまとめました</span>
            </span>
          </span>
          {HANDOFF_MEMOS.map((memo, index) => (
            <span
              key={memo.time}
              className="df-m df-absorb block rounded-lg border border-[#f3dfb0] bg-[#fff8e6] px-2.5 py-1.5"
              style={vars({
                '--x0': '-10px',
                '--y0': '0px',
                '--x1': '150px',
                '--y1': `${-index * 30}px`,
              })}
            >
              <span className="block text-[10px] font-bold whitespace-nowrap text-[#b45309]">{memo.time}</span>
              <span className="block text-[12px] whitespace-nowrap">{memo.body}</span>
            </span>
          ))}
        </span>
        <span className="flex flex-col rounded-lg border border-[#e5e7eb] bg-[#f8fafc] p-3">
          <span className="flex items-baseline justify-between gap-2">
            <b className="text-[12px] whitespace-nowrap">日報　2階フロア</b>
            <span className={`text-[10.5px] whitespace-nowrap ${muted}`}>6月12日</span>
          </span>
          <span className="df-m df-in-3 mt-2.5 flex gap-2 text-[12px] whitespace-nowrap">
            <span className={muted}>食事</span>
            <b>朝は半分、昼は全量</b>
          </span>
          <span className="df-m df-in-3 mt-1.5 flex gap-2 text-[12px] whitespace-nowrap">
            <span className={muted}>予定</span>
            <b>入浴を明日に、夕方に来所</b>
          </span>
          <span className="df-m df-in-4 mt-1.5 block">
            <span className="df-m df-hl-4 flex gap-2 rounded px-1.5 py-1 text-[12px] whitespace-nowrap">
              <span className="text-[#b45309]">要確認</span>
              <b>服薬の時刻が未記入</b>
            </span>
          </span>
          <span className="df-m df-in-5 mt-auto self-start rounded-full border border-[#2b6fe0] px-3 py-1 text-[11px] font-bold whitespace-nowrap text-[#2b6fe0]">
            フロアの日報に反映
          </span>
        </span>
      </span>
    </Screen>
  )
}

function Court({ name, children }: { name: string; children?: ReactNode }) {
  return (
    <span className="relative block h-[104px] rounded-lg bg-[#e8cfa4]">
      <span className="absolute inset-2 rounded border-2 border-white/80" />
      <span className="absolute top-2 bottom-2 left-1/2 w-[2px] -translate-x-1/2 bg-white/80" />
      <span className="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80" />
      <span className="absolute top-2.5 left-3 rounded bg-white/90 px-1.5 text-[10.5px] font-bold whitespace-nowrap">
        {name}
      </span>
      {children}
    </span>
  )
}

function GymScene() {
  return (
    <Screen app="施設の状況">
      <span className="flex h-full flex-col">
        <span className="grid grid-cols-2 gap-3">
          <Court name="第1競技場">
            <span className="absolute bottom-2.5 left-3 h-5 w-[140px]">
              <span className="df-m df-swap-out-2 absolute top-0 left-0 rounded bg-white px-1.5 text-[10.5px] font-bold whitespace-nowrap text-[#1f7a3a]">
                空き
              </span>
              <span className="df-m df-in-2 absolute top-0 left-0 rounded bg-[#2b6fe0] px-1.5 text-[10.5px] font-bold whitespace-nowrap text-white">
                利用中 9:00〜12:00
              </span>
            </span>
          </Court>
          <Court name="第2競技場">
            <span className="absolute bottom-2.5 left-3 rounded bg-white px-1.5 text-[10.5px] font-bold whitespace-nowrap text-[#1f7a3a]">
              空き
            </span>
            <span className="df-m df-in-3 absolute top-5 right-5 block" style={vars({ '--y0': '-26px' })}>
              <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 drop-shadow">
                <path
                  d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z"
                  fill="#e0a23a"
                />
                <circle cx="12" cy="9" r="3" fill="#fff" />
              </svg>
            </span>
          </Court>
        </span>
        <span className="df-m df-in-4 mt-3 flex items-center gap-3 rounded-lg border border-[#e5e7eb] bg-white p-2.5">
          <span className="relative block h-[40px] w-[56px] shrink-0 overflow-hidden rounded bg-[linear-gradient(180deg,#2a3346,#4a5872)]">
            <span className="absolute top-1.5 left-2 h-2.5 w-2.5 rounded-full bg-[#fef3c7]" />
            <span className="absolute top-1.5 left-6 h-2.5 w-2.5 rounded-full bg-[#fef3c7]" />
            <span className="absolute top-1.5 left-10 h-2.5 w-2.5 rounded-full bg-[#475569]" />
          </span>
          <span className="min-w-0 flex-1">
            <b className="block text-[12px] whitespace-nowrap">第2競技場 照明</b>
            <span className={`block text-[11px] whitespace-nowrap ${muted}`}>1灯が点かない（画像で確認）</span>
          </span>
          <span className="df-m df-in-5 rounded border border-[#c47b12] bg-[#fff4e0] px-1.5 text-[10.5px] font-bold whitespace-nowrap text-[#c47b12]">
            対応
          </span>
        </span>
      </span>
    </Screen>
  )
}

const STOCK_ROWS = [
  { code: 'AB-1100', place: '本社倉庫', qty: '32個', hit: false },
  { code: 'AB-1200', place: '本社倉庫', qty: '12個', hit: true },
  { code: 'AB-1300', place: '第2倉庫', qty: '0個', hit: false },
]

const REPLY_LINES = [
  { text: 'AB-1200は、本社倉庫に12個ございます。', step: 'df-in-3' },
  { text: '残りの8個は、来週の入荷予定です。', step: 'df-in-4' },
  { text: '分納でよろしいか、ご確認ください。', step: 'df-in-5' },
]

function WholesaleScene() {
  return (
    <Screen app="問い合わせ対応">
      <span className="flex h-full flex-col gap-1.5">
        <span className="df-m df-in-1 flex items-center gap-2 rounded-lg bg-[#f1f5f9] px-3 py-1.5">
          <span className={`text-[10.5px] whitespace-nowrap ${muted}`}>問い合わせ</span>
          <b className="text-[12px] whitespace-nowrap">AB-1200を20個、納期は？</b>
        </span>
        <span className="block rounded-lg border border-[#e5e7eb] py-0.5">
          {STOCK_ROWS.map((row) => (
            <span key={row.code} className="df-m df-in-1 block">
              <span
                className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] px-3 py-[3px] text-[11.5px] ${
                  row.hit ? 'df-m df-hl-2' : ''
                }`}
              >
                <b className="whitespace-nowrap">{row.code}</b>
                <span className={`whitespace-nowrap ${muted}`}>{row.place}</span>
                <span className="font-bold whitespace-nowrap">{row.qty}</span>
              </span>
            </span>
          ))}
        </span>
        <span className="df-m df-in-3 mt-0.5 text-[10.5px] font-bold whitespace-nowrap text-[#2b6fe0]">
          返信の下書き（送信前に担当者が確認）
        </span>
        <span className="block border-l-2 border-[#2b6fe0] pl-2.5">
          {REPLY_LINES.map((line) => (
            <span
              key={line.text}
              className={`df-m ${line.step} block text-[12px] leading-[1.55] whitespace-nowrap`}
              style={vars({ '--x0': '-8px', '--y0': '0px' })}
            >
              {line.text}
            </span>
          ))}
        </span>
      </span>
    </Screen>
  )
}

const SCENES: Record<TopFeaturedDemoId, () => ReactNode> = {
  'construction-record': ConstructionScene,
  'internal-knowledge': KnowledgeScene,
  'quality-incident': QualityScene,
  'logistics-dispatch': LogisticsScene,
  'approval-inspection': InspectionScene,
  'kaigo-handoff': HandoffScene,
  'gym-facility': GymScene,
  'wholesale-quote': WholesaleScene,
}

/** PCのカード中央。デモごとの機能を、画面の例の動きで見せる */
export function DemoCardMotion({ id }: { id: TopFeaturedDemoId }) {
  const Scene = SCENES[id]

  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-[286px] left-[300px] z-[1] hidden items-center justify-center lg:flex"
    >
      <Scene />
    </span>
  )
}
