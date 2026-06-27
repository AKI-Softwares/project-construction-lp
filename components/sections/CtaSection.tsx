'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/constants'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <Image
        src="/images/cta-signature.png"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#1C3A6E]/78" />

      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Veja o CheckObra em ação — 30 minutos que mudam como você opera.
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Demonstração gratuita, sem compromisso. Você vai sair da chamada sabendo exatamente o que muda na sua operação.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-block"
          >
            <Button asChild size="lg" className="bg-[#1B9DC0] px-10 text-white hover:bg-[#1B9DC0]/90">
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Agendar demonstração gratuita →
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
