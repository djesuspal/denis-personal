import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Denis Jesus Palma Abanto | Empresario e Inversionista',
  description: 'Denis Jesus Palma Abanto es un Software Engineer retirado, dedicado al desarrollo inmobiliario y venture capital',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-4xl flex flex-col items-center">
        <video 
          className="w-full max-w-2xl mb-8 rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">/DJPA/</h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          Empresario y Angel Investor<br>
          (Software Engineer retirado)
        </p>
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          <Link 
            href="/sobre-mi" 
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            Sobre mi
          </Link>
          <Link 
            href="/empresas" 
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            Empresas
          </Link>
          <Link 
            href="/contacto" 
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            Contacto
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            Blog
          </Link>
        </nav>
      </main>

      <footer className="text-sm text-gray-400 mt-auto py-4">
        © {new Date().getFullYear()} - Denis Jesus Palma Abanto
      </footer>
    </div>
  )
}
