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
      className="inline-flex h-10 items-center gap-2 rounded-full border border-line-strong px-4 text-sm text-fg transition-colors hover:border-white/30 hover:bg-white/[0.04]"
    >
      {copied ? <Check /> : <Copy />}
      <span aria-live="polite">{copied ? 'Copiado' : label}</span>
    </button>
  )
}
