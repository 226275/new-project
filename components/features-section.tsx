import { Upload, Scan, Bell, Stethoscope, RefreshCw, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Upload,
      title: "Symptom Upload Engine",
      description: "Upload text descriptions, photos, or videos of symptoms for comprehensive analysis.",
    },
    {
      icon: Scan,
      title: "AI Disease Detection",
      description: "Advanced pattern recognition identifies potential conditions from our veterinary database.",
    },
    {
      icon: Bell,
      title: "Emergency Risk Alerts",
      description: "Instant notifications for critical conditions requiring immediate veterinary attention.",
    },
    {
      icon: Stethoscope,
      title: "Treatment Recommendations",
      description: "Evidence-based care suggestions tailored to your animal's specific condition.",
    },
    {
      icon: RefreshCw,
      title: "Follow-up Tracking",
      description: "Monitor recovery progress and receive updated recommendations over time.",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Available in Hindi, English, and regional languages for rural accessibility.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">MVP Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for instant, reliable veterinary diagnosis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
