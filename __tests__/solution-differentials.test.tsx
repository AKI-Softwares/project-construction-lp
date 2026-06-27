import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SolutionSection from '@/components/sections/SolutionSection'
import DifferentialsSection from '@/components/sections/DifferentialsSection'

describe('SolutionSection', () => {
  it('renderiza heading', () => {
    render(<SolutionSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Uma plataforma, dois mundos: campo e escritório.'
    )
  })
  it('renderiza os 6 features', () => {
    render(<SolutionSection />)
    expect(screen.getByText('Mobile-first para inspetores')).toBeInTheDocument()
    expect(screen.getByText('Notificações push instantâneas')).toBeInTheDocument()
    expect(screen.getByText('Re-inspeção automatizada')).toBeInTheDocument()
    expect(screen.getByText('Assinatura digital')).toBeInTheDocument()
    expect(screen.getByText('Relatório PDF automático')).toBeInTheDocument()
    expect(screen.getByText('Analytics completo')).toBeInTheDocument()
  })
})

describe('DifferentialsSection', () => {
  it('renderiza heading', () => {
    render(<DifferentialsSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'CheckObra vs. alternativas'
    )
  })
  it('renderiza cabeçalhos da tabela', () => {
    render(<DifferentialsSection />)
    expect(screen.getByText('CheckObra')).toBeInTheDocument()
    expect(screen.getByText('Planilhas')).toBeInTheDocument()
    expect(screen.getByText('Sistemas tradicionais')).toBeInTheDocument()
  })
  it('renderiza primeira e última linha', () => {
    render(<DifferentialsSection />)
    expect(screen.getByText('App mobile nativo para inspetor')).toBeInTheDocument()
    expect(screen.getByText('Custo de implantação')).toBeInTheDocument()
  })
})
