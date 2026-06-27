import { describe, it, expect } from 'vitest'
import { SITE, PAIN_POINTS, FEATURES, DIFFERENTIALS, PLANS, FAQ } from '@/lib/constants'

describe('SITE', () => {
  it('backoffice URL correto', () => {
    expect(SITE.backofficeUrl).toBe('https://project-construction-front.vercel.app')
  })
  it('whatsapp URL aponta para wa.me', () => {
    expect(SITE.whatsappUrl).toContain('wa.me')
  })
  it('whatsapp URL contém texto de interesse', () => {
    expect(SITE.whatsappUrl).toContain('CheckObra')
  })
})

describe('PAIN_POINTS', () => {
  it('tem exatamente 6 itens', () => {
    expect(PAIN_POINTS).toHaveLength(6)
  })
  it('cada item tem icon, title e description', () => {
    for (const item of PAIN_POINTS) {
      expect(item.icon).toBeTruthy()
      expect(item.title).toBeTruthy()
      expect(item.description).toBeTruthy()
    }
  })
})

describe('FEATURES', () => {
  it('tem exatamente 6 itens', () => {
    expect(FEATURES).toHaveLength(6)
  })
  it('cada item tem icon, title e description', () => {
    for (const item of FEATURES) {
      expect(item.icon).toBeTruthy()
      expect(item.title).toBeTruthy()
      expect(item.description).toBeTruthy()
    }
  })
})

describe('DIFFERENTIALS', () => {
  it('tem 8 linhas', () => {
    expect(DIFFERENTIALS).toHaveLength(8)
  })
  it('coluna CheckObra nunca é false', () => {
    for (const row of DIFFERENTIALS) {
      expect(row.checkobra).not.toBe(false)
    }
  })
})

describe('PLANS', () => {
  it('tem exatamente 3 planos', () => {
    expect(PLANS).toHaveLength(3)
  })
  it('Start custa R$ 1.490', () => {
    expect(PLANS[0].price).toBe('R$ 1.490')
  })
  it('Growth custa R$ 3.490', () => {
    expect(PLANS[1].price).toBe('R$ 3.490')
  })
  it('Enterprise custa R$ 6.490', () => {
    expect(PLANS[2].price).toBe('R$ 6.490')
  })
  it('apenas Growth é featured', () => {
    const featured = PLANS.filter((p) => p.featured)
    expect(featured).toHaveLength(1)
    expect(featured[0].name).toBe('Growth')
  })
})

describe('FAQ', () => {
  it('tem exatamente 8 itens', () => {
    expect(FAQ).toHaveLength(8)
  })
  it('cada item tem question e answer', () => {
    for (const item of FAQ) {
      expect(item.question).toBeTruthy()
      expect(item.answer).toBeTruthy()
    }
  })
})
