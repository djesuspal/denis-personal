import { Container } from '@/components/container'
import { CopyButton } from '@/components/copy-button'
import { ArrowUpRight } from '@/components/icons'
import { PageIntro } from '@/components/page-intro'
import { delay } from '@/lib/motion'
import { pageMetadata, site } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Contacto',
  description: 'Contacta a Denis Jesus Palma Abanto por correo o LinkedIn.',
  path: '/contacto',
})

const linkClass =
  'text-xl font-medium tracking-[-0.02em] text-fg transition-opacity duration-200 hover:opacity-70 sm:text-2xl'

export default function ContactPage() {
  return (
    <section className="flex flex-1 items-center">
      <Container className="pb-16 pt-6 sm:pt-10">
        <PageIntro title="Contacto" />

        <ul className="animate-rise stagger mt-10 max-w-xl border-t border-line" style={delay(160)}>
          <li className="flex items-center justify-between gap-4 border-b border-line py-5">
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
            <CopyButton value={site.email} label="Copiar" />
          </li>
          <li className="border-b border-line py-5">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 ${linkClass}`}
            >
              LinkedIn
              <ArrowUpRight
                width={18}
                height={18}
                className="text-fg-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  )
}
