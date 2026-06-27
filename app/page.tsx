import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import DifferentialsSection from '@/components/sections/DifferentialsSection'
import PricingSection from '@/components/sections/PricingSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
