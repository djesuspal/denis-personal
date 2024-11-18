'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "Belviera Desarrolladora",
      description: "Belviera es una desarrolladora de proyectos inmobiliarios en Peru.",
      logo: "/logos/belviera.png",
      website: "https://belviera.pe"
    },
    {
      id: 2,
      name: "Alurea Estudio",
      description: "Alurea es un estudio de diseño de interiores y arquitectura en Peru.",
      logo: "/logos/alurea.png",
      website: "https://alurea.pe"
    },
    {
      id: 3,
      name: "Pixel Labs",
      description: "Pixel Labs es una empresa de consultoria en IT y Blockchain, especializada en Solana.",
      logo: "/logos/pixel.png",
      website: "https://pixelabs.lat"
    },
    {
      id: 4,
      name: "Hashpath Consulting",
      description: "Hashpath es una empresa que brinda servicios seguridad en blockchain, auditoría de contratos inteligentes y soluciones de infraestructura.",
      logo: "/logos/hashpath.png",
      website: "https://hashpath.xyz"
    },
    {
      id: 5,
      name: "LM Cobranzas",
      description: "LM Cobranzas es una empresa de gestion de cobranzas extrajudicial.",
      logo: "/logos/lm.png",
      website: "https://lmcobranzas.com"
    },
    {
      id: 6,
      name: "Shieldify",
      description: "Shieldify es una empresa que brinda servicios de auditoría de smart contracts.",
      logo: "/logos/shieldify.png",
      website: "https://shieldify.lat"
    },
    {
      id: 7,
      name: "Cyrenix",
      description: "Cyrenix es una empresa dedicada al desarrollo de infraestructura e inversiones en Blockchain.",
      logo: "/logos/cyrenix.png",
      website: "https://cyrenix.xyz"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCompany = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length)
  }

  const prevCompany = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Regresar
        </Link>
        
        <h1 className="text-4xl font-bold mb-12">Empresas</h1>
        
        <div className="relative flex items-center justify-between gap-4">
          <button
            onClick={prevCompany}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Previous company"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="text-center px-4 md:px-12 w-full max-w-4xl mx-auto">
            <a 
              href={companies[currentIndex].website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 mx-auto mb-8 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={companies[currentIndex].logo}
                  alt={`${companies[currentIndex].name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 384px"
                  priority
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-gray-300 transition-colors">
                {companies[currentIndex].name}
              </h2>
            </a>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              {companies[currentIndex].description}
            </p>
          </div>
          
          <button
            onClick={nextCompany}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Next company"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  )
}
