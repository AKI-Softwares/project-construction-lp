import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#1C3A6E] text-white">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="CheckObra logo" width={28} height={28} />
            <span className="text-lg font-semibold">CheckObra</span>
          </Link>
          <nav className="flex gap-6 text-sm text-blue-200">
            <Link href="/" className="transition-colors hover:text-white">Início</Link>
            <Link href="#precos" className="transition-colors hover:text-white">Preços</Link>
            <Link href="#contato" className="transition-colors hover:text-white">Contato</Link>
          </nav>
          <a
            href={SITE.backofficeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-200 transition-colors hover:text-white"
          >
            Acessar sistema →
          </a>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-6 text-center text-xs text-blue-300">
          © 2026 CheckObra. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
