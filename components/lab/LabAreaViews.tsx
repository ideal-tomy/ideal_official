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
    <section id="philosophy" className={`${sectionClass} bg-[var(--site-bg)]`}>
      <div className={innerClass}>
        <LabSectionHead
          eyebrow={labPhilosophyHead.eyebrow}
          lines={labPhilosophyHead.lines}
          lead={labPhilosophyHead.lead}
        />
        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[11rem_1fr] lg:gap-10 xl:grid-cols-[13rem_1fr] xl:gap-16">
          <PhilosophyNav />
          <div className="min-w-0">
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
