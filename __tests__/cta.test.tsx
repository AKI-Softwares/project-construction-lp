import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CtaSection from '@/components/sections/CtaSection'

describe('CtaSection', () => {
  it('renderiza heading', () => {
    render(<CtaSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Pronto para digitalizar suas vistorias?'
    )
  })
  it('CTA abre WhatsApp em nova aba', () => {
    render(<CtaSection />)
    const link = screen.getByRole('link', { name: /falar com vendas/i })
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me'))
    expect(link).toHaveAttribute('target', '_blank')
  })
})
