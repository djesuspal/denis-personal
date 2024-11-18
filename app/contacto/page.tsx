import { Metadata } from 'next'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto | Denis Jesus Palma Abanto',
  description: 'Ponte en contacto con Denis Jesús Palma Abanto. Conéctate a través de las redes sociales o por correo electrónico.',
}

export default function ContactPage() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/denis-jesus-palma-abanto-512417336/',
      icon: Linkedin,
      username: 'Denis Jesus Palma Abanto',
      description: 'Conectar en LinkedIn'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/denis.jesus.palma.abanto',
      icon: Facebook,
      username: 'Denis Jesus Palma Abanto',
      description: 'Seguirme en Facebook'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/denisj.palma/',
      icon: Instagram,
      username: '@denisj.palma',
      description: 'Detras de escena'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/dpalab123',
      icon: Twitter,
      username: '@dpalab123',
      description: 'Insights diarios'
    },
    {
      name: 'Email',
      url: 'mailto:denis@belviera.pe',
      icon: Mail,
      username: 'denis@belviera.pe',
      description: 'Contacto directo'
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
        
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                className="flex flex-col space-y-2 bg-gray-900/50 hover:bg-gray-900 transition-colors p-6 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6" />
                  <div className="font-medium">{link.name}</div>
                </div>
                <div className="text-sm text-gray-400">{link.username}</div>
                <div className="text-sm text-gray-500">{link.description}</div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
