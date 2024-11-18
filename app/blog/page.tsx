import { Metadata } from 'next'
import Link from 'next/link'
import { formatDistance } from 'date-fns'
import { getBlogPosts } from './data'

export const metadata: Metadata = {
  title: 'Blog | Denis Jesus Palma Abanto',
  description: 'Perspectivas y reflexiones sobre inversión inmobiliaria, capital de riesgo y tecnología de Denis Jesús Palma Abanto.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Regresar
        </Link>
        
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        
        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.id} className="border-b border-gray-800 pb-12 last:border-b-0">
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold mt-2">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="hover:text-gray-300 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
                
                <p className="text-gray-300 text-lg">{post.excerpt}</p>
                
                <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{formatDistance(new Date(post.date), new Date(), { addSuffix: true })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
