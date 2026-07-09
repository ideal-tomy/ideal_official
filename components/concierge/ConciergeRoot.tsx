'use client'

import { ConciergeFab } from './ConciergeFab'
import { ConciergePanel } from './ConciergePanel'
import { IdealConciergeFlow } from './IdealConciergeFlow'
import { useConcierge } from './concierge-context'

export function ConciergeRoot() {
  const {
    open,
    setOpen,
    serviceHint,
    pageContext,
    flowSessionNonce,
    openConcierge,
  } = useConcierge()

  return (
    <>
      {!open ? (
        <ConciergeFab onClick={() => openConcierge()} />
      ) : null}
      <ConciergePanel
        open={open}
        onClose={() => setOpen(false)}
        title="AIコンシェルジュ"
        contextLabel={pageContext?.label}
      >
        <IdealConciergeFlow
          key={flowSessionNonce}
          serviceHint={serviceHint}
          pageContext={pageContext}
          onRequestClose={() => setOpen(false)}
        />
      </ConciergePanel>
    </>
  )
}
