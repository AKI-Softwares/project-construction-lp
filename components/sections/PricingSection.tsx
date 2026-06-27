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
          <p className="text-gray-500">Cancele quando quiser. Implantação opcional.</p>
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
        <p className="mt-8 text-center text-xs text-gray-400">
          * Implantação one-time opcional: Start R$ 3.000 · Growth R$ 5.000 · Enterprise R$ 8.000
        </p>
      </div>
    </section>
  )
}
