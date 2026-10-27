export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function BrandMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 52 52">
      <circle cx="26" cy="26" r="24" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M17 28c2-8 8-12 18-11 1 6-1 12-7 16-5 3-9 1-11-5Z"
        fill="currentColor"
      />
      <path d="M15 15l3 4M37 12l-2 5M40 33l-5-1" stroke="currentColor" strokeLinecap="round" />
      <circle cx="29" cy="23" r="2" fill="var(--cream)" />
    </svg>
  )
}
