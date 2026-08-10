import type { ReactNode } from 'react'

/**
 * デモLP専用: light only（サイト全体テーマから切り離す表示枠）
 */
export default function DemoLpLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="demo-lp-root"
      style={
        {
          colorScheme: 'light only',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
