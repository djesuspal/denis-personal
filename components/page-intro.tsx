import type { ReactNode } from 'react'
import { delay } from '@/lib/motion'

export function PageIntro({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return (
    <header>
      <h1
        className="animate-rise stagger text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
        style={delay(60)}
      >
        {title}
      </h1>
      {children ? (
        <div
          className="animate-rise stagger mt-4 max-w-[44ch] text-lg leading-relaxed text-fg-muted"
          style={delay(140)}
        >
          {children}
        </div>
      ) : null}
    </header>
  )
}
