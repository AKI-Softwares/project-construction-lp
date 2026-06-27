'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE } from '@/lib/constants'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — text */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <Badge className="mb-6 border-[#1B9DC0]/20 bg-[#1B9DC0]/10 text-[#1B9DC0] hover:bg-[#1B9DC0]/10">
                Plataforma SaaS para Vistorias Técnicas
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mb-6 text-4xl font-bold tracking-tight text-[#1C3A6E] md:text-5xl"
            >
              Digitalize o ciclo completo de vistoria de obras — do campo ao laudo final.
            </motion.h1>

            <motion.p variants={item} className="mb-10 text-lg text-gray-600">
              Substitua papel, planilha e WhatsApp por uma plataforma integrada entre
              inspetores no campo e gestores no escritório.
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#1C3A6E] px-8 text-white hover:bg-[#1C3A6E]/90">
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar com vendas →
                </a>
              </Button>
              <Button
                asChild size="lg" variant="outline"
                className="border-[#1C3A6E] px-8 text-[#1C3A6E] hover:bg-[#1C3A6E]/5"
              >
                <a href={SITE.backofficeUrl} target="_blank" rel="noopener noreferrer">
                  Acessar sistema
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — floating image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/images/hero-inspector.png"
                alt="Inspetor registrando não conformidade com o CheckObra"
                width={1200}
                height={675}
                className="h-auto w-full"
                priority
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[#1B9DC0]/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
