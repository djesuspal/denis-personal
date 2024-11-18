import { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Denis Jesus Palma Abanto | Empresario e Inversionista',
    template: '%s | Denis Jesus Palma Abanto'
  },
  description: 'Ex ingeniero de software convertido en emprendedor e inversionista. Especializado en inversión inmobiliaria, capital de riesgo e innovación tecnológica.',
  keywords: ['Denis Jesus Palma Abanto', 'Emprendedor', 'Inversionista', 'Bienes Raíces', 'Capital de Riesgo', 'Ingeniero de Software'],
  authors: [{ name: 'Denis Jesus Palma Abanto' }],
  creator: 'Denis Jesus Palma Abanto',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://denis.pe',
    siteName: 'Denis Jesus Palma Abanto',
    title: 'Denis Jesus Palma Abanto | Emprendedor e Inversionista',
    description: 'Ex ingeniero de software convertido en emprendedor e inversionista.',
    images: [
      {
        url: '/images/profile-photo.png',
        width: 1200,
        height: 630,
        alt: 'Denis Jesus Palma Abanto'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Jesus Palma Abanto | Entrepreneur & Investor',
    description: 'Former software engineer turned entrepreneur and investor.',
    images: ['/images/profile-photo.png'],
    creator: '@denispalma'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        {children}
      </body>
    </html>
  )
}
