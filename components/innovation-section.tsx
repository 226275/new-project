import { Zap, Clock, Heart, TrendingUp } from "lucide-react"

export function InnovationSection() {
  const points = [
    {
      icon: Zap,
      title: "First AI-First Platform",
      description: "The first AI-powered veterinary diagnostic platform specifically designed for rural India.",
    },
    {
      icon: Clock,
      title: "Works Without Doctors",
      description: "Instant diagnosis available 24/7, regardless of doctor availability or location.",
    },
    {
      icon: Heart,
      title: "Saves Lives",
      description: "Early detection saves time, reduces treatment costs, and prevents animal deaths.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Nationwide",
      description: "Built to scale across all states and territories, reaching every rural community.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why This is Innovative</h2>
            <p className="text-lg text-muted-foreground mb-10">
              FndlyCare is pioneering AI-driven veterinary care in underserved regions, making quality animal healthcare
              accessible to everyone.
            </p>

            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-muted/50 border border-border overflow-hidden">
              <img
                src="/veterinarian-examining-dog-with-ai-holographic-int.jpg"
                alt="AI-powered veterinary diagnosis interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">User Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
