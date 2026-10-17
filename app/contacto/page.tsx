import { Container } from '@/components/container'
import { CopyButton } from '@/components/copy-button'
import { ArrowUpRight, LinkedIn, Mail } from '@/components/icons'
import { PageIntro } from '@/components/page-intro'
import { delay } from '@/lib/motion'
import { pageMetadata, site } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Contacto',
  description:
    'Ponte en contacto con Denis Jesus Palma Abanto. Conéctate a través de LinkedIn o escribe directamente por correo electrónico.',
  path: '/contacto',
})

const rowClass =
  'group grid gap-5 border-t border-line py-8 sm:grid-cols-[180px_1fr_auto] sm:items-center sm:gap-8'
const labelClass =
  'flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle'
const valueClass =
  'w-fit text-2xl font-medium tracking-[-0.03em] text-fg transition-opacity duration-200 hover:opacity-70 sm:text-3xl'

export default function ContactPage() {
  return (
    <section className="flex-1">
      <Container className="pb-24 pt-10 sm:pt-16">
        <PageIntro eyebrow="Contacto" title="Hablemos.">
          <p>Conéctate a través de LinkedIn o escríbeme directamente por correo.</p>
        </PageIntro>

        <div className="animate-rise stagger mt-14 border-b border-line sm:mt-20" style={delay(260)}>
          <div className={rowClass}>
            <p className={labelClass}>
              <Mail width={14} height={14} /> Correo
            </p>
            <a href={`mailto:${site.email}`} className={valueClass}>
              {site.email}
            </a>
            <div className="flex gap-2">
              <CopyButton value={site.email} label="Copiar" />
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-bg transition-colors hover:bg-white"
              >
                Escribir
                <ArrowUpRight className="-mr-0.5" />
              </a>
            </div>
          </div>

          <div className={rowClass}>
            <p className={labelClass}>
              <LinkedIn width={13} height={13} /> LinkedIn
            </p>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={valueClass}>
              {site.name}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-line-strong px-4 text-sm text-fg transition-colors hover:border-white/30 hover:bg-white/[0.04]"
            >
              Ver perfil
              <ArrowUpRight className="-mr-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
