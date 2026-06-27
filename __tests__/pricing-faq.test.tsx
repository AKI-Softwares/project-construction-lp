import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PricingSection from '@/components/sections/PricingSection'
import FaqSection from '@/components/sections/FaqSection'

describe('PricingSection', () => {
  it('tem âncora id="precos"', () => {
    const { container } = render(<PricingSection />)
    expect(container.querySelector('#precos')).toBeInTheDocument()
  })
  it('renderiza os 3 nomes de plano', () => {
    render(<PricingSection />)
    expect(screen.getByText('Start')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })
  it('renderiza os preços corretos', () => {
    render(<PricingSection />)
    expect(screen.getByText('R$ 1.490')).toBeInTheDocument()
    expect(screen.getByText('R$ 3.490')).toBeInTheDocument()
    expect(screen.getByText('R$ 6.490')).toBeInTheDocument()
  })
  it('todos os CTAs apontam para WhatsApp', () => {
    render(<PricingSection />)
    const links = screen.getAllByRole('link', { name: /falar com vendas/i })
    expect(links).toHaveLength(3)
    links.forEach((link) => expect(link).toHaveAttribute('href', expect.stringContaining('wa.me')))
  })
  it('badge Mais popular presente no Growth', () => {
    render(<PricingSection />)
    expect(screen.getByText('Mais popular')).toBeInTheDocument()
  })
})

describe('FaqSection', () => {
  it('tem âncora id="contato"', () => {
    const { container } = render(<FaqSection />)
    expect(container.querySelector('#contato')).toBeInTheDocument()
  })
  it('renderiza heading', () => {
    render(<FaqSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Perguntas frequentes')
  })
  it('renderiza 8 perguntas como botões de accordion', () => {
    render(<FaqSection />)
    expect(screen.getByText('O sistema funciona offline?')).toBeInTheDocument()
    expect(screen.getByText('Posso cancelar a qualquer momento?')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(8)
  })
})
