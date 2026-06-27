import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <Badge className="mb-6 border-[#1B9DC0]/20 bg-[#1B9DC0]/10 text-[#1B9DC0] hover:bg-[#1B9DC0]/10">
          Plataforma SaaS para Vistorias Técnicas
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold tracking-tight text-[#1C3A6E] md:text-5xl lg:text-6xl">
          Digitalize o ciclo completo de vistoria de obras — do campo ao laudo final.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          Substitua papel, planilha e WhatsApp por uma plataforma integrada entre inspetores no campo
          e gestores no escritório.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </div>
        <div className="mt-16 rounded-xl border border-gray-200 bg-gray-50 p-12 text-sm text-gray-400">
          [Screenshot do backoffice — substituir por imagem real]
        </div>
      </div>
    </section>
  )
}
