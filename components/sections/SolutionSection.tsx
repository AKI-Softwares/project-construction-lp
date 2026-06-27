'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Smartphone, Bell, RotateCcw, PenLine, FileText, BarChart3, type LucideProps } from 'lucide-react'
import { FEATURES } from '@/lib/constants'
import type { ElementType } from 'react'

const ICON_MAP: Record<string, ElementType<LucideProps>> = {
  Smartphone, Bell, RotateCcw, PenLine, FileText, BarChart3,
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function SolutionSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-[#1C3A6E] md:text-4xl">
            O que muda quando você tem controle real das vistorias.
          </h2>
          <p className="text-gray-500">
            Do app do inspetor no campo ao dashboard do gestor no escritório — tudo conectado, em tempo real.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — feature cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {FEATURES.map((item) => {
              const Icon = ICON_MAP[item.icon]
              return (
                <motion.div
                  key={item.title}
                  variants={cardVariant}
                  whileHover={{ y: -4, borderColor: '#1B9DC0', boxShadow: '0 0 0 1px #1B9DC0, 0 8px 24px -4px rgba(27,157,192,0.2)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="cursor-default rounded-xl border border-gray-100 bg-[#F8FAFC] p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B9DC0]/10">
                    {Icon && <Icon className="h-5 w-5 text-[#1B9DC0]" />}
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/solution-manager.png"
                alt="Gestora analisando dashboard do CheckObra"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -left-8 -top-8 -z-10 h-52 w-52 rounded-full bg-[#1B9DC0]/15 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
