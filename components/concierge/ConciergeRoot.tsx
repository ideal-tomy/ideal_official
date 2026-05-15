'use client'

import { ConciergeFab } from './ConciergeFab'
import { ConciergePanel } from './ConciergePanel'
import { IdealConciergeFlow } from './IdealConciergeFlow'
import { useConcierge } from './concierge-context'

export function ConciergeRoot() {
  const { open, setOpen, serviceHint, flowSessionNonce, openConcierge } =
    useConcierge()

  return (
    <>
      {!open ? (
        <ConciergeFab onClick={() => openConcierge()} />
      ) : null}
      <ConciergePanel
        open={open}
        onClose={() => setOpen(false)}
        title="AIコンシェルジュ"
      >
        <IdealConciergeFlow
          key={flowSessionNonce}
          serviceHint={serviceHint}
          onRequestClose={() => setOpen(false)}
        />
      </ConciergePanel>
    </>
  )
}
