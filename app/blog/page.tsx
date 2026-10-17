import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/container'
import { PageIntro } from '@/components/page-intro'
import { formatDate } from '@/lib/date'
import { delay } from '@/lib/motion'
import { pageMetadata } from '@/lib/site'
import { getBlogPosts } from './data'

export const metadata = pageMetadata({
  title: 'Blog',
  description:
    'Perspectivas y reflexiones sobre inversión inmobiliaria, capital de riesgo, tecnología y actualidad de Denis Jesus Palma Abanto.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <section className="flex-1">
      <Container className="pb-24 pt-10 sm:pt-16">
        <PageIntro eyebrow="Blog" title="Escritos" />

        <ol className="animate-rise stagger mt-14 border-b border-line sm:mt-20" style={delay(220)}>
          {posts.map((post) => (
            <li key={post.id} className="border-t border-line">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-5 py-8 sm:grid-cols-[1fr_200px] sm:gap-10 md:grid-cols-[160px_1fr_220px]"
              >
                <div className="hidden font-mono text-xs leading-6 text-fg-subtle md:block">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                    {post.category}
                    <span className="md:hidden"> · {formatDate(post.date)}</span>
                  </p>
                  <h2 className="mt-2.5 text-xl font-medium leading-snug tracking-[-0.02em] text-fg transition-opacity group-hover:opacity-75 sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2.5 max-w-[60ch] leading-relaxed text-fg-muted">{post.excerpt}</p>
                  <p className="mt-4 font-mono text-xs text-fg-subtle">{post.readTime} de lectura</p>
                </div>
                <div className="relative order-first aspect-[16/10] overflow-hidden rounded-xl bg-surface sm:order-none">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(min-width: 768px) 220px, (min-width: 640px) 200px, calc(100vw - 40px)"
                    className="object-cover opacity-90 grayscale-[35%] transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
