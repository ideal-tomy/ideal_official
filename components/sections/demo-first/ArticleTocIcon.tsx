function IconPaths({ slug }: { slug: string }) {
  switch (slug) {
    case 'manufacturing':
      return (
        <>
          <path d="M5 17V9h4v8" />
          <path d="M11 17V6h4v11" />
          <path d="M17 17v-5h3v5" />
          <path d="M4 17h16" />
        </>
      )
    case 'care':
      return <path d="M12 5v14M5 12h14" />
    case 'childcare':
      return (
        <>
          <circle cx="12" cy="7" r="3" />
          <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
        </>
      )
    case 'retail':
      return (
        <>
          <path d="M4 9h16l-1.2 10H5.2L4 9Z" />
          <path d="M8 9V7a4 4 0 0 1 8 0v2" />
        </>
      )
    case 'restaurant':
      return (
        <>
          <path d="M8 4v9a2 2 0 0 0 4 0V4" />
          <path d="M8 8h4" />
          <path d="M16 4v16" />
        </>
      )
    case 'building':
      return (
        <>
          <path d="M5 20V8l7-4 7 4v12" />
          <path d="M9 20v-6h6v6" />
        </>
      )
    case 'logistics':
      return (
        <>
          <path d="M3 16h11V8H3z" />
          <path d="M14 11h5l2 3v2h-7z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
        </>
      )
    case 'warehouse':
      return (
        <>
          <path d="M3 10l9-6 9 6v10H3z" />
          <path d="M8 20v-6h8v6" />
        </>
      )
    default:
      return (
        <>
          <path d="M4 16h16" />
          <path d="M6 16V9l6-4 6 4v7" />
          <path d="M10 16v-4h4v4" />
        </>
      )
  }
}

export function ArticleTocIcon({
  slug,
  size = 'md',
  tone = 'industry',
}: {
  slug: string
  size?: 'sm' | 'md'
  tone?: 'industry' | 'jam'
}) {
  const wrap = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9'
  const svg = size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]'
  const fill =
    tone === 'jam'
      ? 'bg-[#8a6d4f] text-white'
      : 'bg-[var(--df-primary)] text-white'

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full ${fill} ${wrap}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className={svg}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconPaths slug={slug} />
      </svg>
    </span>
  )
}
