'use client'

import { useEffect, useState } from 'react'
import { Check, Copy } from './icons'

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(id)
  }, [copied])

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
        } catch {
          // Older browsers / insecure contexts
          const field = Object.assign(document.createElement('textarea'), { value })
          field.style.cssText = 'position:fixed;opacity:0'
          document.body.append(field)
          field.select()
          document.execCommand('copy')
          field.remove()
        }
        setCopied(true)
      }}
      className="-mr-3 inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm text-fg-subtle transition-colors hover:bg-white/[0.06] hover:text-fg"
    >
      {copied ? <Check /> : <Copy />}
      <span aria-live="polite">{copied ? 'Copiado' : label}</span>
    </button>
  )
}
