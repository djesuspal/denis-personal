import { Metadata } from 'next'
import Link from 'next/link'
import { format } from 'date-fns'
import { getBlogPost } from '../data'
import { notFound } from 'next/navigation'
import type { BlogPost } from '../types'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Denis Jesus Palma Abanto`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="text-gray-400 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Volver al blog
        </Link>
        
        <article className="prose prose-invert max-w-none">
          <header className="mb-12">
            <div className="mb-6">
              <span className="text-sm text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
              <span>{post.author}</span>
              <span>•</span>
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="space-y-6" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </div>
  )
}
