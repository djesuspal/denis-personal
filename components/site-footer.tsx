import { Container } from './container'
import { LinkedIn, Mail } from './icons'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer>
      <Container className="flex items-center justify-between py-6 text-[13px] text-fg-subtle">
        <p>© {new Date().getFullYear()}</p>
        <div className="-mr-2 flex items-center gap-1">
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
      </Container>
    </footer>
  )
}
