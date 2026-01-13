import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { InnovationSection } from "@/components/innovation-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { DemoSection } from "@/components/demo-section"
import { FounderSection } from "@/components/founder-section"
import { CTASection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <InnovationSection />
      <UseCasesSection />
      <DemoSection />
      <FounderSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
      <Chatbot />
    </main>
  )
}
