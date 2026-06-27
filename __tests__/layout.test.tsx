import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

describe('Navbar', () => {
  it('renderiza o nome da marca', () => {
    render(<Navbar />)
    expect(screen.getAllByText('CheckObra')[0]).toBeInTheDocument()
  })
  it('link Preços aponta para âncora #precos', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /preços/i })
    expect(links[0]).toHaveAttribute('href', '#precos')
  })
  it('link Contato aponta para âncora #contato', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /contato/i })
    expect(links[0]).toHaveAttribute('href', '#contato')
  })
  it('Acessar sistema aponta para o backoffice', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /acessar sistema/i })
    expect(links[0]).toHaveAttribute('href', 'https://project-construction-front.vercel.app')
  })
})

describe('Footer', () => {
  it('renderiza copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 CheckObra/)).toBeInTheDocument()
  })
  it('Acessar sistema aponta para o backoffice', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /acessar sistema/i })
    expect(link).toHaveAttribute('href', 'https://project-construction-front.vercel.app')
  })
  it('link Preços aponta para #precos', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /preços/i })
    expect(link).toHaveAttribute('href', '#precos')
  })
})
