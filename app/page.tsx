import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { VoxelCube } from '@/components/voxel-cube'
import { delay } from '@/lib/motion'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: site.title },
  alternates: { canonical: '/' },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  jobTitle: site.role,
  worksFor: { '@type': 'Organization', name: site.company.name, url: site.company.url },
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressCountry: 'PE' },
  knowsAbout: ['Real Estate', 'Venture Capital', 'Software Engineering', 'Blockchain'],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="flex flex-1 items-center">
        <Container className="flex flex-col items-center pb-12 pt-2 text-center">
          <div className="relative aspect-square w-full max-w-[min(76vw,420px)]">
            <div
              aria-hidden="true"
              className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.07),transparent)]"
            />
            <VoxelCube className="animate-fade absolute inset-0 size-full" />
          </div>

          <h1
            className="animate-rise stagger mt-8 text-[clamp(1.625rem,3vw,2.125rem)] font-semibold tracking-[-0.035em]"
            style={delay(160)}
          >
            {site.name}
          </h1>
          <p className="animate-rise stagger mt-2.5 text-balance text-fg-muted" style={delay(240)}>
            {site.role}
          </p>
        </Container>
      </section>
    </>
  )
}
