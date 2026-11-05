import Link from 'next/link'
import { LabSectionHead } from '@/components/lab/LabChrome'
import {
  DeclarationSection,
  MechanismSection,
  PhilosophyNav,
  PhilosophySection,
  RoadmapSection,
  StructureSection,
  ValueClogSection,
  VisionSection,
} from '@/components/philosophy'
import { labContact, labInstrument, labPhilosophyHead } from '@/data/lab/hub'

const sectionClass = 'scroll-mt-16 py-16 md:py-24'
const innerClass = 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'

export function LabPhilosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-16 -mt-16 bg-[var(--site-bg)] pb-16 pt-10 md:mt-0 md:pb-24 md:pt-16"
    >
      <div className={innerClass}>
        <div className="grid w-full min-w-0 gap-8 lg:grid-cols-[11rem_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-14 xl:grid-cols-[13rem_1fr] xl:gap-x-16">
          <div className="order-1 min-w-0 lg:col-start-2 lg:row-start-1">
            <LabSectionHead
              as="h1"
              align="start"
              eyebrow={labPhilosophyHead.eyebrow}
              lines={labPhilosophyHead.lines}
              lead={labPhilosophyHead.lead}
            />
          </div>
          <div className="order-2 min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <PhilosophyNav />
          </div>
          <div className="order-3 min-w-0 lg:col-start-2 lg:row-start-2">
            <VisionSection />
            <ValueClogSection />
            <PhilosophySection />
            <MechanismSection />
            <StructureSection />
            <RoadmapSection />
            <DeclarationSection />
          </div>
        </div>
      </div>
    </section>
  )
}

export function LabInstrument() {
  return (
    <section id="instrument" className={`${sectionClass} bg-[var(--site-bg-elevated)]`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <LabSectionHead
          eyebrow={labInstrument.eyebrow}
          lines={labInstrument.lines}
          lead={labInstrument.lead}
        />
        <a
          href={labInstrument.href}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand px-7 py-3.5 text-sm font-bold text-[var(--df-on-primary)] transition-all hover:scale-[1.02] hover:bg-brand-hover active:scale-[0.98]"
        >
          {labInstrument.cta}
        </a>
      </div>
    </section>
  )
}

export function LabContact() {
  return (
    <section className={`${sectionClass} bg-[var(--site-bg)]`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-[clamp(22px,6vw,30px)] font-extrabold leading-[1.5] text-[var(--site-fg)] [word-break:keep-all] [overflow-wrap:anywhere]">
          {labContact.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-[1.9] text-[var(--site-fg-muted)] md:text-base">
          {labContact.body}
        </p>
        <Link
          href={labContact.href}
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-[var(--site-border)] bg-[var(--site-bg)] px-7 py-3.5 text-sm font-bold text-[var(--site-fg)] transition-colors hover:border-brand/40"
        >
          {labContact.cta}
        </Link>
      </div>
    </section>
  )
}
