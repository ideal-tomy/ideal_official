import type { CSSProperties, ReactNode } from 'react'
import type { TopFeaturedDemoId } from '@/data/demo-first/top-featured-demos'

/** 傾いた端末の中。幅150pxでも動きが分かるよう、要素は2〜3個に絞る */
const vars = (values: Record<string, string>) => values as CSSProperties

const PHOTO_TONES = ['#9bb4d4', '#c4b395', '#8e9aab']

function Stage({ children }: { children: ReactNode }) {
  return (
    <span className="absolute inset-0 flex flex-col gap-1.5 bg-white p-2 text-left text-[#1a1a2e] lg:hidden">
      {children}
    </span>
  )
}

function ConstructionMini() {
  return (
    <Stage>
      <span className="grid flex-1 grid-cols-2 gap-1.5">
        {PHOTO_TONES.map((tone, index) => (
          <span
            key={tone}
            className={`df-m df-in-${index + 1} block rounded-md`}
            style={{ background: tone, ...vars({ '--y0': '-10px' }) }}
          />
        ))}
        <span className="df-m df-in-4 grid place-items-center rounded-md border border-dashed border-[#e0a23a] bg-[#fff4e0] text-[11px] font-bold text-[#b45309]">
          不足
        </span>
      </span>
      <span className="df-m df-in-5 rounded-full bg-[#2b6fe0] py-1 text-center text-[11px] font-bold text-white">
        日報の下書き
      </span>
    </Stage>
  )
}

function KnowledgeMini() {
  return (
    <Stage>
      <span
        className="df-m df-in-1 self-end rounded-2xl rounded-br-sm bg-[#2b6fe0] px-2 py-1.5 text-[11px] font-bold text-white"
        style={vars({ '--x0': '8px', '--y0': '0px' })}
      >
        在宅できる？
      </span>
      <span className="df-m df-blip-2 flex w-fit gap-1 rounded-2xl bg-[#f1f5f9] px-2.5 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
      </span>
      <span className="df-m df-in-3 rounded-2xl rounded-bl-sm bg-[#f1f5f9] px-2 py-1.5 text-[11px] font-bold">
        申請と、上長の承認
      </span>
      <span
        className="df-m df-grow-4 mt-auto block origin-top rounded-md border-l-[3px] border-[#2b6fe0] bg-[#eaf3fb] px-2 py-1.5"
        style={vars({ '--g0': 'scaleY(0)' })}
      >
        <span className="block text-[10px] font-bold text-[#2b6fe0]">根拠</span>
        <span className="block text-[11px] font-bold">就業規則 第18条</span>
      </span>
    </Stage>
  )
}

function QualityMini() {
  return (
    <Stage>
      <span className="relative grid h-[72px] shrink-0 place-items-center rounded-lg bg-[#eef1f7]">
        <span className="relative block h-8 w-14 -rotate-12 rounded-lg border border-[#9aa4b8] bg-[linear-gradient(135deg,#c5cdd8,#f5f7fa_45%,#9ca6b8)]">
          <span className="absolute top-1 left-4 h-4 w-4 rounded-full border-4 border-[#8d97ac] bg-[#d8dee8]" />
        </span>
        <span
          className="df-m df-in-1 absolute top-3 right-5 h-5 w-6 rounded-full border-2 border-[#e0a23a]"
          style={vars({ '--s0': '1.6', '--y0': '0px' })}
        />
      </span>
      <span className="df-m df-in-2 block" style={vars({ '--x0': '10px', '--y0': '0px' })}>
        <span className="df-m df-ring-4 block rounded-md border border-[#dbe3f0] px-2 py-1">
          <span className="block text-[10px] font-bold text-[#2b6fe0]">候補A</span>
          <span className="block text-[12px] font-bold">治具の摩耗</span>
        </span>
      </span>
      <span className="df-m df-in-3 block" style={vars({ '--x0': '10px', '--y0': '0px' })}>
        <span
          className="df-m df-dim-4 block rounded-md border border-[#dbe3f0] px-2 py-1"
          style={vars({ '--d1': 'translate(6px, 2px) scale(0.96)' })}
        >
          <span className="block text-[10px] font-bold text-[#2b6fe0]">候補B</span>
          <span className="block text-[12px] font-bold">材料ロット</span>
        </span>
      </span>
    </Stage>
  )
}

function LogisticsMini() {
  return (
    <Stage>
      <span className="flex items-center gap-1.5">
        <span className="rounded bg-[#14264a] px-1.5 py-2 text-[11px] font-bold text-white">名古屋</span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="df-m df-grow-1 block h-[3px] origin-left rounded bg-[#2b6fe0]" />
          <span
            className="df-m df-grow-2 block origin-right border-t-[3px] border-dashed border-[#94a3b8]"
            style={vars({ '--g0': 'scaleX(0)' })}
          />
        </span>
        <span className="rounded bg-[#14264a] px-1.5 py-2 text-[11px] font-bold text-white">大阪</span>
      </span>
      <span className="df-m df-in-1 text-[10px] font-bold text-[#2b6fe0]">行きは納品済み</span>
      <span className="df-m df-in-3 block">
        <span className="df-m df-ring-4 flex items-center justify-between rounded-md border border-[#dbe3f0] px-2 py-1.5">
          <b className="text-[12px]">京都発 4枚</b>
          <span className="df-m df-in-4 rounded bg-[#2b6fe0] px-1.5 text-[10px] font-bold text-white">載せる</span>
        </span>
      </span>
      <span className="df-m df-in-3 block text-[11px] text-[#6b7280]">奈良発は休息不足</span>
    </Stage>
  )
}

function InspectionMini() {
  return (
    <Stage>
      <span className="grid grid-cols-[1fr_28px_1fr] text-center text-[10px] font-bold text-[#6b7280]">
        <span>図面</span>
        <span />
        <span>証明書</span>
      </span>
      <span className="df-m df-in-1 grid grid-cols-[1fr_28px_1fr] items-center">
        <b className="rounded border border-[#e5e7eb] px-1 py-1 text-center text-[11px]">SUS304</b>
        <span className="df-m df-grow-2 mx-1 block h-[2px] origin-left bg-[#2b6fe0]" />
        <b className="rounded border border-[#e5e7eb] px-1 py-1 text-center text-[11px]">SUS304</b>
      </span>
      <span className="df-m df-in-2 block">
        <span className="df-m df-hl-4 grid grid-cols-[1fr_auto] items-center gap-1 rounded px-1 py-1">
          <b className="text-[11px]">硬さ 記載なし</b>
          <span className="df-m df-in-4 rounded border border-[#c47b12] bg-white px-1 text-[10px] font-bold text-[#c47b12]">
            要確認
          </span>
        </span>
      </span>
      <span className="df-m df-in-5 mt-auto text-[11px] font-bold text-[#b45309]">保留して確認</span>
    </Stage>
  )
}

function HandoffMini() {
  return (
    <Stage>
      <span
        className="df-m df-in-1 rounded-md border border-[#f3dfb0] bg-[#fff8e6] px-2 py-1"
        style={vars({ '--x0': '-8px', '--y0': '0px' })}
      >
        <span className="block text-[10px] font-bold text-[#b45309]">朝</span>
        <span className="block text-[11px] font-bold">朝食は半分</span>
      </span>
      <span
        className="df-m df-in-2 rounded-md border border-[#f3dfb0] bg-[#fff8e6] px-2 py-1"
        style={vars({ '--x0': '-8px', '--y0': '0px' })}
      >
        <span className="block text-[10px] font-bold text-[#b45309]">夕</span>
        <span className="block text-[11px] font-bold">ご家族が来所</span>
      </span>
      <span className="df-m df-in-4 mt-auto rounded-md border border-[#e5e7eb] bg-[#f8fafc] px-2 py-1.5">
        <span className="block text-[10px] font-bold text-[#6b7280]">日報</span>
        <span className="df-m df-hl-4 mt-0.5 block rounded px-1 text-[11px] font-bold">服薬の時刻が未記入</span>
      </span>
    </Stage>
  )
}

function GymMini() {
  return (
    <Stage>
      <span className="grid flex-1 grid-cols-2 gap-1.5">
        <span className="relative rounded-md bg-[#e8cfa4]">
          <span className="absolute inset-1.5 rounded border border-white/80" />
          <span className="absolute top-1.5 left-1.5 text-[10px] font-bold">第1</span>
          <span className="df-m df-in-2 absolute bottom-1.5 left-1.5 rounded bg-[#2b6fe0] px-1 text-[10px] font-bold text-white">
            利用中
          </span>
        </span>
        <span className="relative rounded-md bg-[#e8cfa4]">
          <span className="absolute inset-1.5 rounded border border-white/80" />
          <span className="absolute top-1.5 left-1.5 text-[10px] font-bold">第2</span>
          <span className="df-m df-in-3 absolute top-5 right-1.5" style={vars({ '--y0': '-16px' })}>
            <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z" fill="#e0a23a" />
              <circle cx="12" cy="9" r="3" fill="#fff" />
            </svg>
          </span>
        </span>
      </span>
      <span className="df-m df-in-5 flex items-center justify-between rounded-md border border-[#e5e7eb] px-2 py-1">
        <b className="text-[11px]">照明が1灯消灯</b>
        <span className="rounded border border-[#c47b12] bg-[#fff4e0] px-1 text-[10px] font-bold text-[#c47b12]">
          対応
        </span>
      </span>
    </Stage>
  )
}

function WholesaleMini() {
  return (
    <Stage>
      <span className="df-m df-in-1 rounded-md bg-[#f1f5f9] px-2 py-1.5 text-[11px] font-bold">
        AB-1200 を20個
      </span>
      <span className="rounded-md border border-[#e5e7eb] py-0.5">
        <span className="flex justify-between px-2 py-1 text-[11px] text-[#6b7280]">
          <span>AB-1100</span>
          <span>32個</span>
        </span>
        <span className="df-m df-hl-2 flex justify-between px-2 py-1 text-[11px] font-bold">
          <span>AB-1200</span>
          <span>12個</span>
        </span>
      </span>
      <span className="df-m df-in-4 mt-auto rounded-md border-l-2 border-[#2b6fe0] py-1 pl-2 text-[11px] font-bold">
        在庫は12個
      </span>
    </Stage>
  )
}

const MINIS: Record<TopFeaturedDemoId, () => ReactNode> = {
  'construction-record': ConstructionMini,
  'internal-knowledge': KnowledgeMini,
  'quality-incident': QualityMini,
  'logistics-dispatch': LogisticsMini,
  'approval-inspection': InspectionMini,
  'kaigo-handoff': HandoffMini,
  'gym-facility': GymMini,
  'wholesale-quote': WholesaleMini,
}

/** 傾いた端末の中身。1024px未満だけで、各デモの動きを短く見せる */
export function DemoCardMiniMotion({ id }: { id: TopFeaturedDemoId }) {
  const Mini = MINIS[id]
  return <Mini />
}
