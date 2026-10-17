import { ButtonLink } from '@/components/button-link'
import { Container } from '@/components/container'
import { ArrowLeft } from '@/components/icons'

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center">
      <Container className="py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">/404/</p>
        <h1 className="mt-5 text-[clamp(2.5rem,5.6vw,4.25rem)] font-semibold leading-none tracking-[-0.045em]">
          Página no encontrada
        </h1>
        <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-fg-muted">
          La dirección que buscas no existe o fue movida.
        </p>
        <ButtonLink href="/" className="mt-9">
          <ArrowLeft className="-ml-1 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Volver al inicio
        </ButtonLink>
      </Container>
    </section>
  )
}
