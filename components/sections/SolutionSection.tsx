import { Smartphone, Bell, RotateCcw, PenLine, FileText, BarChart3, type LucideProps } from 'lucide-react'
import { FEATURES } from '@/lib/constants'
import type { ElementType } from 'react'

const ICON_MAP: Record<string, ElementType<LucideProps>> = {
  Smartphone, Bell, RotateCcw, PenLine, FileText, BarChart3,
}

export default function SolutionSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#1C3A6E] md:text-4xl">
            Uma plataforma, dois mundos: campo e escritório.
          </h2>
          <p className="text-gray-500">Tudo que inspetores e gestores precisam, em uma solução integrada.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <div key={item.title} className="rounded-xl border border-gray-100 bg-[#F8FAFC] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B9DC0]/10">
                  {Icon && <Icon className="h-5 w-5 text-[#1B9DC0]" />}
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
