import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-4">Post no encontrado</h2>
        <p className="text-gray-400 mb-8">
          Lo sentimos, no pudimos encontrar el post que estás buscando.
        </p>
        <Link 
          href="/blog"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Volver al blog
        </Link>
      </div>
    </div>
  )
}
