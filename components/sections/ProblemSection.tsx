import { FileX, Table2, MessageCircleX, EyeOff, RefreshCw, Scale, type LucideProps } from 'lucide-react'
import { PAIN_POINTS } from '@/lib/constants'
import type { ElementType } from 'react'

const ICON_MAP: Record<string, ElementType<LucideProps>> = {
  FileX, Table2, MessageCircleX, EyeOff, RefreshCw, Scale,
}

export default function ProblemSection() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#1C3A6E] md:text-4xl">
            Como sua construtora conduz vistorias hoje?
          </h2>
          <p className="text-gray-500">A realidade da maioria das obras.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  {Icon && <Icon className="h-5 w-5 text-red-500" />}
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
