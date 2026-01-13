import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResearchStats } from "@/components/research-stats"
import { ResearchMediaGallery } from "@/components/research-media-gallery"
import { MapPin, Users, Home } from "lucide-react"

export const metadata = {
  title: "Research | FndlyCare - On-Ground Animal Health Research",
  description:
    "Explore FndlyCare's field research across rural India. Visited 3 states, 50+ villages, and engaged with 100+ farmers for real-world animal health insights.",
}

export default function ResearchPage() {
  const stats = [
    {
      icon: MapPin,
      value: "3",
      label: "States Visited",
      description: "Across rural India",
    },
    {
      icon: Home,
      value: "50+",
      label: "Villages Covered",
      description: "Direct community engagement",
    },
    {
      icon: Users,
      value: "100+",
      label: "Farmers Engaged",
      description: "Real conversations, real insights",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">On-Ground Research</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Building FndlyCare from the fields, not just the labs. Our research is rooted in real-world experiences with
            farmers and their animals across rural India.
          </p>
        </section>

        {/* Statistics Section */}
        <ResearchStats stats={stats} />

        {/* Media Gallery Section */}
        <section className="mt-20 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-2">From the Field</h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto">
              Real moments from our village visits, farmer interactions, and livestock observations.
            </p>
          </div>
          <ResearchMediaGallery />
        </section>

        {/* Closing Statement */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 sm:p-12">
            <blockquote className="text-xl sm:text-2xl font-medium text-foreground italic text-balance">
              "Our research is driven by real farmers, real animals, and real field experiences."
            </blockquote>
            <div className="mt-6 w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
