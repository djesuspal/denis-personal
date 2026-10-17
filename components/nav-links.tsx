'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav } from '@/lib/site'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <ul className="flex items-center gap-1 text-sm">
      {nav.map(({ href, label }) => {
        const current = pathname === href || pathname.startsWith(`${href}/`)
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={current ? 'page' : undefined}
              className={`relative rounded-full px-3 py-2 transition-colors duration-200 ${
                current ? 'text-fg' : 'text-fg-muted hover:text-fg'
              }`}
            >
              {label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-3 -bottom-px h-px bg-fg transition-opacity duration-300 ${current ? 'opacity-100' : 'opacity-0'}`}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
