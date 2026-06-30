'use client'

import { motion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PLANS, SITE } from '@/lib/constants'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function PricingSection() {
  return (
    <section id="precos" className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-[#1C3A6E] md:text-4xl">
            Planos simples, sem surpresas.
          </h2>
          <p className="text-gray-500">Comece em dias. Sem contrato de fidelidade. ROI visível no primeiro mês.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariant}
              whileHover={{
                y: -8,
                boxShadow: plan.featured
                  ? '0 20px 48px -8px rgba(27,157,192,0.35)'
                  : '0 16px 40px -8px rgba(0,0,0,0.12)',
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className={`relative cursor-default rounded-2xl border p-8 ${
                plan.featured
                  ? 'border-[#1B9DC0] bg-white shadow-xl ring-2 ring-[#1B9DC0]'
                  : 'border-gray-200 bg-white shadow-sm'
              }`}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B9DC0] text-white hover:bg-[#1B9DC0]/90">
                  Mais popular
                </Badge>
              )}
              <h3 className="mb-2 text-xl font-bold text-[#1C3A6E]">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#1C3A6E]">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#1B9DC0]" />{plan.buildings}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#1B9DC0]" />{plan.users}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#1B9DC0]" />Todas as funcionalidades incluídas
                </li>
              </ul>
              <Button
                asChild
                className={`w-full text-white ${
                  plan.featured ? 'bg-[#1B9DC0] hover:bg-[#1B9DC0]/90' : 'bg-[#1C3A6E] hover:bg-[#1C3A6E]/90'
                }`}
              >
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar com vendas
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-[#1B9DC0]/20 bg-white px-6 py-6 shadow-sm"
        >
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#1B9DC0]">
            Implantação one-time (opcional)
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            {[
              { plan: 'Start', value: 'R$ 3.000' },
              { plan: 'Growth', value: 'R$ 5.000' },
              { plan: 'Enterprise', value: 'R$ 8.000' },
            ].map(({ plan, value }) => (
              <div key={plan} className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{plan}</span>
                <span className="text-2xl font-bold text-[#1C3A6E]">{value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Inclui configuração completa, integração e treinamento da equipe. Pagamento único.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
