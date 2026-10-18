import Image from 'next/image'
import { CompanyLink } from '@/components/company-link'
import { Container } from '@/components/container'
import { PageIntro } from '@/components/page-intro'
import { delay } from '@/lib/motion'
import { pageMetadata, site } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Sobre mí',
  description:
    'Denis Jesus Palma Abanto: empresario y angel investor, actualmente en QuickNode. Antes Lead SRE en Solana Labs.',
  path: '/sobre-mi',
})

const experience = [
  { org: 'QuickNode', role: '', period: 'Actual' },
  { org: 'Solana Labs', role: 'Lead SRE', period: '2021 — 2024' },
  { org: 'Trilogy', role: 'Sr Software Engineer', period: '2017 — 2020' },
  { org: 'Telefónica', role: 'M&A y Proyectos Especiales', period: '2017 — 2020' },
]

export default function AboutPage() {
  return (
    <section className="flex flex-1 items-center">
      <Container className="grid gap-x-12 gap-y-10 pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:items-center lg:py-12">
        <figure className="animate-fade lg:col-span-5 lg:col-start-8 lg:row-start-1" style={delay(80)}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-[400px] lg:mr-0">
            <Image
              src={site.portrait}
              alt={`Retrato de ${site.name}`}
              fill
              preload
              sizes="(min-width: 640px) 400px, 300px"
              className="object-cover object-[50%_18%] mask-t-from-90% mask-b-from-58% mask-x-from-78%"
            />
          </div>
        </figure>

        <div className="lg:col-span-6 lg:row-start-1">
          <PageIntro title={site.name}>
            <p>
              {site.role}. Trabajo en <CompanyLink /> e invierto en bienes raíces y startups de
              tecnología.
            </p>
          </PageIntro>

          <ol className="animate-rise stagger mt-10 border-t border-line" style={delay(220)}>
            {experience.map(({ org, role, period }) => (
              <li
                key={org}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-b border-line py-4 sm:grid-cols-[9rem_1fr_7rem]"
              >
                <span className="text-fg">{org}</span>
                <span className="col-start-1 row-start-2 text-sm text-fg-muted empty:hidden sm:col-start-2 sm:row-start-1 sm:text-base">
                  {role}
                </span>
                <span className="row-span-2 text-right font-mono text-[13px] tabular-nums text-fg-subtle sm:col-start-3 sm:row-span-1">
                  {period}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
