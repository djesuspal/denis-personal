import Image from 'next/image'
import { Container } from '@/components/container'
import { ArrowUpRight } from '@/components/icons'
import { PageIntro } from '@/components/page-intro'
import { delay } from '@/lib/motion'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Empresas',
  description: 'Empresas en las que participa Denis Jesus Palma Abanto: inmobiliaria, diseño, blockchain y servicios.',
  path: '/empresas',
})

// Optical sizing so square marks and long wordmarks carry similar visual weight
const logoBox = {
  square: 'h-16 w-24',
  mid: 'h-12 w-28',
  wide: 'h-9 w-44',
} as const

const companies: {
  name: string
  description: string
  logo: string
  logoSize: keyof typeof logoBox
  website: string
}[] = [
  {
    name: 'Belviera Desarrolladora',
    description: 'Desarrolladora de proyectos inmobiliarios en Perú.',
    logo: '/logos/belviera.png',
    logoSize: 'square',
    website: 'https://belviera.pe',
  },
  {
    name: 'Alurea Estudio',
    description: 'Estudio de diseño de interiores y arquitectura en Perú.',
    logo: '/logos/alurea.png',
    logoSize: 'square',
    website: 'https://alurea.pe',
  },
  {
    name: 'Pixel Labs',
    description: 'Consultoría en IT y blockchain, especializada en Solana.',
    logo: '/logos/pixel.png',
    logoSize: 'mid',
    website: 'https://pixelabs.lat',
  },
  {
    name: 'Hashpath Consulting',
    description: 'Seguridad en blockchain, auditoría de contratos inteligentes y soluciones de infraestructura.',
    logo: '/logos/hashpath.png',
    logoSize: 'wide',
    website: 'https://hashpath.xyz',
  },
  {
    name: 'LM Cobranzas',
    description: 'Gestión de cobranzas extrajudicial.',
    logo: '/logos/lm.png',
    logoSize: 'wide',
    website: 'https://lmcobranzas.com',
  },
  {
    name: 'Shieldify',
    description: 'Servicios de auditoría de smart contracts.',
    logo: '/logos/shieldify.png',
    logoSize: 'wide',
    website: 'https://shieldify.lat',
  },
  {
    name: 'Cyrenix',
    description: 'Desarrollo de infraestructura e inversiones en blockchain.',
    logo: '/logos/cyrenix.png',
    logoSize: 'wide',
    website: 'https://cyrenix.xyz',
  },
]

export default function CompaniesPage() {
  return (
    <section className="flex-1">
      <Container className="pb-24 pt-10 sm:pt-16">
        <PageIntro eyebrow="Empresas" title="Portafolio" />

        <ul
          className="animate-rise stagger mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
          style={delay(220)}
        >
          {companies.map((company) => (
            <li key={company.name} className="bg-bg">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-6 p-6 transition-colors duration-300 hover:bg-surface"
              >
                <div className="grid h-28 place-items-center rounded-xl bg-surface-2/60">
                  <div className={`relative ${logoBox[company.logoSize]}`}>
                    <Image
                      src={company.logo}
                      alt={`Logo de ${company.name}`}
                      fill
                      sizes="176px"
                      className="object-contain opacity-75 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg font-medium tracking-[-0.01em] text-fg">{company.name}</h2>
                    <ArrowUpRight className="mt-1 shrink-0 text-fg-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{company.description}</p>
                  <p className="mt-auto pt-5 font-mono text-xs text-fg-subtle">
                    {new URL(company.website).hostname}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
