'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { DIFFERENTIALS } from '@/lib/constants'

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-[#1B9DC0]" />
  if (value === false) return <X className="mx-auto h-5 w-5 text-red-400" />
  return <span className="text-sm text-blue-200">{value}</span>
}

export default function DifferentialsSection() {
  return (
    <section className="bg-[#1C3A6E] py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            CheckObra vs. alternativas
          </h2>
          <p className="text-blue-200">Veja por que a mudança vale a pena.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-xl border border-blue-800"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-blue-800 bg-blue-900/50">
                <th scope="col" className="p-4 text-left font-medium text-blue-200">Funcionalidade</th>
                <th scope="col" className="p-4 text-center font-semibold text-[#1B9DC0]">CheckObra</th>
                <th scope="col" className="p-4 text-center font-medium text-blue-200">Planilhas</th>
                <th scope="col" className="p-4 text-center font-medium text-blue-200">Sistemas trad.</th>
              </tr>
            </thead>
            <tbody>
              {DIFFERENTIALS.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={i % 2 === 0 ? 'border-b border-blue-800/50' : 'border-b border-blue-800/50 bg-blue-900/20'}
                >
                  <td className="p-4 text-white">{row.feature}</td>
                  <td className="p-4 text-center"><Cell value={row.checkobra} /></td>
                  <td className="p-4 text-center"><Cell value={row.planilhas} /></td>
                  <td className="p-4 text-center"><Cell value={row.tradicional} /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
