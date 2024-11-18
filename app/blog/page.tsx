import { Metadata } from 'next'
import Link from 'next/link'
import { formatDistance } from 'date-fns'

export const metadata: Metadata = {
  title: 'Blog | Denis Jesus Palma Abanto',
  description: 'Perspectivas y reflexiones sobre inversión inmobiliaria, capital de riesgo y tecnología de Denis Jesús Palma Abanto.',
}

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "El futuro del desarrollo inmobiliario en Cusco",
      excerpt: "Un análisis de las tendencias emergentes en el mercado inmobiliario y cómo la tecnología está transformando las estrategias de inversión...",
      date: "2024-06-15",
      author: "Denis Jesus Palma Abanto",
      readTime: "8 min read",
      category: "Real Estate",
      slug: "future-of-real-estate-investment"
    },
    {
      id: 2,
      title: "Deficit de vivienda en Peru: Un Vistazo al 2023",
      excerpt: "Una refleccion sobre el deficit de vivienda en la zona sur del pais en el año 2023...",
      date: "2024-01-10",
      author: "Denis Jesus Palma Abanto",
      readTime: "12 min read",
      category: "Real State",
      slug: "deficit-vivienda-2023"
    },
    {
      id: 3,
      title: "De la Ingeniería de Software a la Inversión",
      excerpt: "Mi viaje personal de la transición de la ingeniería de software a las inversiones en bienes raíces y capital de riesgo...",
      date: "2024-01-05",
      author: "Denis Jesus Palma Abanto",
      readTime: "10 min read",
      category: "Personal",
      slug: "software-engineering-to-investment"
    }
  ]

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
