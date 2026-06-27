'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { FileX, Table2, MessageCircleX, EyeOff, RefreshCw, Scale, type LucideProps } from 'lucide-react'
import { PAIN_POINTS } from '@/lib/constants'
import type { ElementType } from 'react'

const ICON_MAP: Record<string, ElementType<LucideProps>> = {
  FileX, Table2, MessageCircleX, EyeOff, RefreshCw, Scale,
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function ProblemSection() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-[#1C3A6E] md:text-4xl">
            Você ainda faz vistoria assim?
          </h2>
          <p className="text-gray-500">Se sim, você está perdendo dinheiro e correndo risco toda semana.</p>
        </motion.div>

        {/* Image banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src="/images/problem-paperwork.png"
            alt="Inspetor sobrecarregado com papéis e planilhas"
            width={1200}
            height={500}
            className="h-[280px] w-full object-cover object-center md:h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3A6E]/70 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-14">
            <p className="max-w-md text-xl font-semibold leading-snug text-white md:text-2xl">
              Cada entrega com atraso ou contestação começa com processos manuais descontrolados.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PAIN_POINTS.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <motion.div
                key={item.title}
                variants={cardVariant}
                whileHover={{ y: -6, boxShadow: '0 12px 32px -4px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="cursor-default rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  {Icon && <Icon className="h-5 w-5 text-red-500" />}
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
