import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://checkobra.com.br'),
  title: 'CheckObra — Plataforma de Gestão de Vistorias Técnicas',
  description:
    'Digitalize o ciclo completo de vistoria de obras. App mobile para inspetores + backoffice web para gestores. SaaS B2B para construtoras.',
  openGraph: {
    title: 'CheckObra — Plataforma de Gestão de Vistorias Técnicas',
    description: 'Digitalize o ciclo completo de vistoria de obras.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'CheckObra' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
