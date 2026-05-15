'use client'

import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { useConcierge } from './concierge-context'

interface OpenConciergeButtonProps {
  serviceId?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fullWidth?: boolean
}

export function OpenConciergeButton({
  serviceId,
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  fullWidth = false,
}: OpenConciergeButtonProps) {
  const { openConcierge } = useConcierge()

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      fullWidth={fullWidth}
      onClick={() =>
        openConcierge(serviceId ? { serviceHint: serviceId } : undefined)
      }
    >
      {children}
    </Button>
  )
}
