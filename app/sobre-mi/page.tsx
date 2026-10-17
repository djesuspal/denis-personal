import Image from 'next/image'
import { ButtonLink } from '@/components/button-link'
import { Container } from '@/components/container'
import { ArrowRight } from '@/components/icons'
import { PageIntro } from '@/components/page-intro'
import { SectionHeading } from '@/components/section-heading'
import { delay } from '@/lib/motion'
import { pageMetadata, site } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Sobre mí',
  description:
    'Conoce a Denis Jesus Palma Abanto: ex ingeniero de software convertido en empresario e inversionista.',
  path: '/sobre-mi',
})

const experience = [
  { role: 'Empresario & Inversionista', org: 'Real Estate · Venture Capital', period: '2024 — Hoy' },
  { role: 'Lead SRE', org: 'Solana Labs', period: '2021 — 2024' },
  { role: 'Sr Software Engineer', org: 'Trilogy', period: '2017 — 2020' },
  { role: 'M&A y Proyectos Especiales', org: 'Telefónica', period: '2017 — 2020' },
]

const interests = [
  { name: 'Real Estate', note: 'Desarrollo y un portafolio inmobiliario sostenible.' },
  { name: 'Venture Capital', note: 'Startups innovadoras con potencial de crecimiento.' },
  { name: 'Software Development', note: 'Tecnología para transformar industrias tradicionales.' },
  { name: 'Blockchain', note: 'Infraestructura y ecosistemas descentralizados.' },
]

export default function AboutPage() {
  return (
    <>
      <section>
        {/* Phone: intro, portrait, bio. Desktop: intro + bio left, portrait right. */}
        <Container className="grid gap-x-8 gap-y-12 pb-20 pt-10 sm:pt-16 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-10 lg:pb-28">
          <div className="lg:col-span-7 lg:pt-6">
            <PageIntro eyebrow="Sobre mí" title={site.name}>
              <p className="text-fg">{site.role}.</p>
            </PageIntro>
          </div>

          <figure className="animate-fade lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1" style={delay(120)}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] lg:mr-0">
              <Image
                src={site.portrait}
                alt={`Retrato de ${site.name}`}
                fill
                preload
                sizes="(min-width: 640px) 440px, calc(100vw - 40px)"
                className="object-cover object-[50%_18%] mask-t-from-90% mask-b-from-58% mask-x-from-78%"
              />
            </div>
            <figcaption className="mx-auto mt-4 flex max-w-[440px] justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle lg:mr-0">
              <span>{site.mark}</span>
              <span>{site.city}</span>
            </figcaption>
          </figure>

          <div
            className="animate-rise stagger max-w-[60ch] space-y-5 text-[17px] leading-[1.75] text-fg-muted lg:col-span-7"
            style={delay(260)}
          >
            <p>
              Con una sólida experiencia en ingeniería de software y finanzas, aporto una
              perspectiva técnica única al mundo de las inversiones. Me enfoco en identificar y
              fomentar proyectos prometedores mientras construyo un portafolio inmobiliario
              sostenible.
            </p>
            <p>
              Me apasiona aprovechar la tecnología para revolucionar industrias tradicionales y
              apoyar startups innovadoras con potencial de crecimiento, sobre todo en blockchain.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="experiencia" className="border-t border-line">
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading index="01" id="experiencia">
              Experiencia
            </SectionHeading>
          </div>
          <ol className="lg:col-span-8">
            {experience.map(({ role, org, period }) => (
              <li
                key={`${role}-${org}`}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-t border-line py-5 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_1fr_7.5rem]"
              >
                <span className="font-medium text-fg">{role}</span>
                <span className="col-start-1 row-start-2 text-fg-muted sm:col-start-2 sm:row-start-1">
                  {org}
                </span>
                <span className="row-span-2 text-right font-mono text-[13px] tabular-nums text-fg-subtle sm:row-span-1">
                  {period}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="intereses" className="border-t border-line">
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading index="02" id="intereses">
              Intereses
            </SectionHeading>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {interests.map(({ name, note }, i) => (
              <li
                key={name}
                className="flex flex-col gap-10 bg-bg p-6 transition-colors duration-300 hover:bg-surface sm:gap-14"
              >
                <span className="font-mono text-[11px] tracking-[0.16em] text-fg-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.01em] text-fg">{name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center sm:py-20">
          <p className="max-w-[22ch] text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
            ¿Un proyecto o una inversión en mente?
          </p>
          <ButtonLink href="/contacto">
            Conversemos
            <ArrowRight className="-mr-1 transition-transform duration-300 group-hover:translate-x-0.5" />
          </ButtonLink>
        </Container>
      </section>
    </>
  )
}
