'use client'

import { ConciergeFab } from './ConciergeFab'
import { ConciergePanel } from './ConciergePanel'
import { GuideConciergeFlow } from './GuideConciergeFlow'
import { useConcierge } from './concierge-context'

export function ConciergeRoot() {
  const {
    open,
    setOpen,
    pageContext,
    flowSessionNonce,
    openConcierge,
    footerGreetingVisible,
    welcomeVisible,
  } = useConcierge()

  const showFab = !open && !footerGreetingVisible && !welcomeVisible

  return (
    <>
      <ConciergeFab
        enabled={showFab}
        onClick={() => openConcierge()}
      />
      <ConciergePanel
        open={open}
        onClose={() => setOpen(false)}
        title="サイト案内"
        contextLabel={pageContext?.label}
      >
        <GuideConciergeFlow
          key={flowSessionNonce}
          pageContext={pageContext}
          onRequestClose={() => setOpen(false)}
        />
      </ConciergePanel>
    </>
  )
}
