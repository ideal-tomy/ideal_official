'use client'

import { Suspense } from 'react'
import { ContactForm } from './ContactForm'

function ContactFormFallback() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-12 bg-gray-800 rounded" />
      <div className="h-12 bg-gray-800 rounded" />
      <div className="h-32 bg-gray-800 rounded" />
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
