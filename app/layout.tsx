import { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Denis Jesus Palma Abanto | Entrepreneur & Investor',
    template: '%s | Denis Jesus Palma Abanto'
  },
  description: 'Former software engineer turned entrepreneur and investor. Specializing in real estate investment, venture capital, and technology innovation.',
  keywords: ['Denis Jesus Palma Abanto', 'Entrepreneur', 'Investor', 'Real Estate', 'Venture Capital', 'Software Engineer'],
  authors: [{ name: 'Denis Jesus Palma Abanto' }],
  creator: 'Denis Jesus Palma Abanto',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://denispalma.com',
    siteName: 'Denis Jesus Palma Abanto',
    title: 'Denis Jesus Palma Abanto | Entrepreneur & Investor',
    description: 'Former software engineer turned entrepreneur and investor.',
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
