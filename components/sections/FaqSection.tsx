import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FAQ } from '@/lib/constants'

export default function FaqSection() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#1C3A6E] md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <Accordion className="space-y-2">
          {FAQ.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`} className="rounded-lg border border-gray-200 px-4">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-[#1C3A6E] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
