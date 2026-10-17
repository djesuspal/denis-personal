import type { Metadata } from 'next'
import { ButtonLink } from '@/components/button-link'
import { Container } from '@/components/container'
import { ArrowRight } from '@/components/icons'
import { VoxelCube } from '@/components/voxel-cube'
import { delay } from '@/lib/motion'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: site.title },
  description:
    'Denis Jesus Palma Abanto es un Software Engineer retirado, dedicado al desarrollo inmobiliario y al venture capital.',
  alternates: { canonical: '/' },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  jobTitle: 'Empresario e inversionista',
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressCountry: 'PE' },
  knowsAbout: ['Real Estate', 'Venture Capital', 'Software Engineering', 'Blockchain'],
}

const facts = [
  { label: 'Trayectoria', value: 'Solana Labs · Trilogy · Telefónica' },
  { label: 'Enfoque', value: 'Real Estate · Venture Capital · Blockchain' },
  { label: 'Base', value: site.city },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="flex flex-1 items-center">
        <Container className="grid items-center gap-8 pb-14 pt-4 sm:pt-8 lg:grid-cols-12 lg:gap-6 lg:py-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <p
              className="animate-rise stagger font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle"
              style={delay(60)}
            >
              Empresario · Angel Investor
            </p>
            <h1
              className="animate-rise stagger mt-5 text-[clamp(2.75rem,6.4vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
              style={delay(140)}
            >
              Denis Jesus <br />
              Palma Abanto
            </h1>
            <p
              className="animate-rise stagger mt-6 max-w-[36ch] text-lg leading-relaxed text-fg-muted sm:text-xl sm:leading-relaxed"
              style={delay(220)}
            >
              <span className="text-fg">Software Engineer retirado.</span> Hoy me dedico al
              desarrollo inmobiliario y al venture capital, con especial interés en tecnología
              y blockchain.
            </p>
            <div
              className="animate-rise stagger mt-9 flex flex-wrap gap-3"
              style={delay(300)}
            >
              <ButtonLink href="/sobre-mi">
                Sobre mí
                <ArrowRight className="-mr-1 transition-transform duration-300 group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/contacto" variant="secondary">
                Contacto
              </ButtonLink>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[min(80vw,540px)] lg:mr-0">
              <div
                aria-hidden="true"
                className="absolute inset-[6%] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.075),transparent)]"
              />
              <VoxelCube className="animate-fade absolute inset-0 size-full" />
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Resumen" className="border-t border-line">
        <Container>
          <dl className="grid gap-x-8 gap-y-5 py-7 sm:grid-cols-3">
            {facts.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                  {label}
                </dt>
                <dd className="text-sm text-fg-muted">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  )
}
