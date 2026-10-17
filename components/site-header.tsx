import Link from 'next/link'
import { Container } from './container'
import { NavLinks } from './nav-links'
import { site } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-bg/75 backdrop-blur-md backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.name}, inicio`}
          className="-mx-2 rounded-md px-2 py-1 font-mono text-[13px] tracking-[0.08em] text-fg transition-opacity hover:opacity-70"
        >
          {site.mark}
        </Link>
        <nav aria-label="Principal" className="-mr-3">
          <NavLinks />
        </nav>
      </Container>
    </header>
  )
}
