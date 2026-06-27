import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/constants'

export default function CtaSection() {
  return (
    <section className="bg-[#1B9DC0] py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Pronto para digitalizar suas vistorias?
        </h2>
        <p className="mb-8 text-lg text-blue-100">
          Fale com nosso time e veja o CheckObra funcionando na prática.
        </p>
        <Button asChild size="lg" className="bg-[#1C3A6E] px-10 text-white hover:bg-[#1C3A6E]/90">
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Falar com vendas →
          </a>
        </Button>
      </div>
    </section>
  )
}
