import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/container'
import { ArrowLeft } from '@/components/icons'
import { formatDate } from '@/lib/date'
import { delay } from '@/lib/motion'
import { site } from '@/lib/site'
import { getBlogPost, getBlogPosts } from '../data'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getBlogPosts().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug)
  if (!post) return { title: 'Artículo no encontrado' }

  const path = `/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      locale: 'es_PE',
      siteName: site.name,
      url: path,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image.src],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug)
  if (!post) notFound()

  return (
    <article className="flex-1">
      <Container className="max-w-[820px] pb-24 pt-10 sm:pt-14">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          Blog
        </Link>

        <header className="mt-10">
          <p
            className="animate-rise stagger font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle"
            style={delay(40)}
          >
            {post.category}
          </p>
          <h1
            className="animate-rise stagger mt-4 text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.04em]"
            style={delay(100)}
          >
            {post.title}
          </h1>
          <p
            className="animate-rise stagger mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-fg-subtle"
            style={delay(160)}
          >
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} de lectura</span>
          </p>
        </header>

        <div
          className="animate-fade relative mt-10 aspect-video overflow-hidden rounded-2xl bg-surface"
          style={delay(200)}
        >
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            preload
            sizes="(min-width: 820px) 760px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>

        <div
          className="prose-post mx-auto mt-12 max-w-[68ch]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </article>
  )
}
