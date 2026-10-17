import type { ReactNode } from 'react'
import { delay } from '@/lib/motion'

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <header>
      <p
        className="animate-rise stagger font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle"
        style={delay(40)}
      >
        {eyebrow}
      </p>
      <h1
        className="animate-rise stagger mt-5 text-[clamp(2.5rem,5.6vw,4.25rem)] font-semibold leading-[1] tracking-[-0.045em]"
        style={delay(110)}
      >
        {title}
      </h1>
      {children ? (
        <div
          className="animate-rise stagger mt-6 max-w-[58ch] text-lg leading-relaxed text-fg-muted sm:text-xl sm:leading-relaxed"
          style={delay(180)}
        >
          {children}
        </div>
      ) : null}
    </header>
  )
}
