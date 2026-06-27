import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'

describe('HeroSection', () => {
  it('renderiza headline principal', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Digitalize o ciclo completo de vistoria de obras'
    )
  })
  it('CTA WhatsApp aponta para wa.me', () => {
    render(<HeroSection />)
    const links = screen.getAllByRole('link', { name: /falar com vendas/i })
    expect(links[0]).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })
  it('Acessar sistema aponta para backoffice', () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: /acessar sistema/i })
    expect(link).toHaveAttribute('href', 'https://project-construction-front.vercel.app')
  })
  it('renderiza badge', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Plataforma SaaS para Vistorias/i)).toBeInTheDocument()
  })
})

describe('ProblemSection', () => {
  it('renderiza heading', () => {
    render(<ProblemSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Como sua construtora conduz vistorias hoje?'
    )
  })
  it('renderiza os 6 pain points', () => {
    render(<ProblemSection />)
    expect(screen.getByText('Formulários em papel')).toBeInTheDocument()
    expect(screen.getByText('Planilhas Excel')).toBeInTheDocument()
    expect(screen.getByText('WhatsApp como sistema')).toBeInTheDocument()
    expect(screen.getByText('Gestores sem visibilidade')).toBeInTheDocument()
    expect(screen.getByText('Retrabalho caro')).toBeInTheDocument()
    expect(screen.getByText('Risco jurídico')).toBeInTheDocument()
  })
})
