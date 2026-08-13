'use client'

import { Dialog } from '@headlessui/react'
import { useState, type ReactNode } from 'react'
import type { HowWeWorkStep } from '@/data/how-we-work'
import { PremiumDialog } from '@/components/motion/PremiumDialog'
import { HowWeWorkStepContent } from './HowWeWorkDetail'

type HowWeWorkStepDialogProps = {
  step: HowWeWorkStep
  index: number
  children: ReactNode
  className?: string
}

export function HowWeWorkStepDialog({
  step,
  index,
  children,
  className = '',
}: HowWeWorkStepDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`${index + 1}. ${step.title}の詳細`}
      >
        {children}
      </button>

      {open ? (
        <PremiumDialog
          open={open}
          onClose={() => setOpen(false)}
          mobileBottomSheet
          panelClassName="max-w-2xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] p-5 sm:p-6"
          title={
            <Dialog.Title as="h3" className="sr-only">
              {index + 1}. {step.title}
            </Dialog.Title>
          }
          footer={
            <div className="mt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-[var(--site-border)] px-4 py-2 text-sm font-semibold text-[var(--site-fg)] transition-colors hover:border-brand/60 hover:text-brand"
              >
                閉じる
              </button>
            </div>
          }
        >
          <HowWeWorkStepContent step={step} />
        </PremiumDialog>
      ) : null}
    </>
  )
}
