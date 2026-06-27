'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SITE } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Preços', href: '#precos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="CheckObra logo" width={32} height={32} />
          <span className="text-lg font-semibold text-[#1C3A6E]">CheckObra</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#1C3A6E]"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline" size="sm" className="border-[#1C3A6E] text-[#1C3A6E]">
            <a href={SITE.backofficeUrl} target="_blank" rel="noopener noreferrer">
              Acessar sistema →
            </a>
          </Button>
        </nav>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger
            render={
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-transparent bg-clip-padding p-2 text-sm font-medium transition-all hover:bg-muted md:hidden"
              />
            }
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="mt-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-[#1C3A6E]"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="outline" className="mt-2 border-[#1C3A6E] text-[#1C3A6E]">
                <a href={SITE.backofficeUrl} target="_blank" rel="noopener noreferrer">
                  Acessar sistema →
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
