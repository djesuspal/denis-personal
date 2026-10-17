import Link from 'next/link'
import type { ComponentProps } from 'react'

const variants = {
  primary: 'bg-fg text-bg hover:bg-white',
  secondary: 'border border-line-strong text-fg hover:border-white/30 hover:bg-white/[0.04]',
}

type Props = ComponentProps<typeof Link> & { variant?: keyof typeof variants }

export function ButtonLink({ variant = 'primary', className = '', ...props }: Props) {
  return (
    <Link
      className={`group inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
