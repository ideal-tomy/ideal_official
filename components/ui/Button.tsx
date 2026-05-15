/**
 * Button コンポーネント
 * 
 * 再利用可能なボタンコンポーネント
 * variant（スタイル）、size（サイズ）、disabled（無効化）をサポート
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
  // バリアント（スタイル）別のクラス
  const variantClasses = {
    primary: `
      bg-blue-500 text-white
      hover:bg-blue-600 hover:scale-105
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black
    `,
    secondary: `
      bg-cyan-500 text-white
      hover:bg-cyan-600 hover:scale-105
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
    `,
    outline: `
      bg-transparent text-blue-400 border-2 border-blue-400
      hover:bg-blue-400 hover:text-white hover:scale-105
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black
    `,
  }

  // サイズ別のクラス
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

