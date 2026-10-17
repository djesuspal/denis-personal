'use client'

import { useEffect, useState } from 'react'
import { site } from '@/lib/site'

const format = new Intl.DateTimeFormat('es-PE', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: site.timeZone,
})

/** Local time in Lima; renders a same-width placeholder until hydrated. */
export function LimaClock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time ?? '--:--'}
    </time>
  )
}
