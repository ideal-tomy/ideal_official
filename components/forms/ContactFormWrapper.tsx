'use client'

import { Suspense } from 'react'
import { ContactForm } from './ContactForm'

function ContactFormFallback() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-12 bg-[var(--site-bg-elevated)] rounded" />
      <div className="h-12 bg-[var(--site-bg-elevated)] rounded" />
      <div className="h-32 bg-[var(--site-bg-elevated)] rounded" />
    </div>
  )
}

export function ContactFormWrapper() {
  return (
    <Suspense fallback={<ContactFormFallback />}>
      <ContactForm />
    </Suspense>
  )
}
