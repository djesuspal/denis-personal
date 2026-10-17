import { Container } from './container'
import { LimaClock } from './lima-clock'
import { LinkedIn, Mail } from './icons'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-5 py-7 text-[13px] text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.12em]">
            Lima <span className="mx-1.5 text-line-strong">/</span> <LimaClock />
          </p>
          <div className="flex items-center gap-1">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-9 place-items-center rounded-full transition-colors hover:bg-white/[0.06] hover:text-fg"
            >
              <LinkedIn width={15} height={15} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Correo: ${site.email}`}
              className="grid size-9 place-items-center rounded-full transition-colors hover:bg-white/[0.06] hover:text-fg"
            >
              <Mail width={16} height={16} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
