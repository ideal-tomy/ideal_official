/**
 * Button コンポーネント
 *
 * variant:
 * - primary … テーマ連動アクセント（ライト=青 / ダーク=オレンジ）
 * - secondary … 対比面の塗りボタン
 * - outline … 枠線のみ（副CTA）
 */

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { transitions } from '../../lib/design-tokens'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: `
      bg-brand text-[var(--df-on-primary)]
      hover:bg-brand-hover hover:scale-105
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
    `,
    secondary: `
      bg-[var(--site-bg-elevated)] text-[var(--site-fg)] border border-[var(--site-border)]
      hover:bg-[var(--site-border)]/40 hover:scale-105
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
    `,
    outline: `
      bg-transparent text-[var(--site-fg)] border border-[var(--site-border)]
      hover:border-brand/60 hover:text-brand-hover hover:scale-105
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]
    `,
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        rounded-lg
        font-bold
        ${transitions.all}
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
