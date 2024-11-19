import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Briefcase, GraduationCap, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre mi | Denis Jesus Palma Abanto',
  description: 'Conoce a Denis Jesús Palma Abanto: ex ingeniero de software convertido en empresario e inversor.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors mb-8 inline-flex items-center"
        >
          <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
          Regresar
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Denis Jesus Palma Abanto</h1>
              <p className="text-xl text-gray-300">
                Empresasrio y Angel Investor (Software Engineer retirado)
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                Con una sólida experiencia en ingeniería de software y finanzas, aporto una perspectiva técnica única al mundo de las inversiones. Me enfoco en identificar y fomentar proyectos prometedores mientras construyo un portafolio inmobiliario sostenible.
              </p>
              <p className="text-gray-300">
                Me apasiona aprovechar la tecnología para revolucionar industrias tradicionales y apoyar startups innovadoras que tienen el potencial de crecimiento, sobre todo en Blockchain.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Experiencia</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Briefcase className="mr-3 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>Empresario &amp; Inversionista, 2024 - Presente</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-3 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>Lead SRE, Solana Labs, 2021 - 2024</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-3 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>Sr Software Engineer, Trilogy, 2017 - 2020</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-3 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>Ejecutivo Asociado - M&A, Trilogy, 2017 - 2020</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/images/denis-jesus-palma-abanto.png"
              alt="Denis Jesus Palma Abanto"
              width={500}
              height={600}
              className="rounded-lg relative z-10 object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-800 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Intereses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Real Estate', 'Venture Capital', 'Software Development', 'Blockchain'].map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 rounded-lg p-4 text-center hover:bg-gray-900 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
