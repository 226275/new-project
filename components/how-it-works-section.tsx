import { Upload, Brain, Activity, FileText, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "Upload Symptoms",
      description: "Share your animal's symptoms via text, photo, or video through our simple interface.",
    },
    {
      icon: Brain,
      step: "02",
      title: "AI Analysis",
      description: "Our AI engine analyzes disease patterns using advanced veterinary datasets.",
    },
    {
      icon: Activity,
      step: "03",
      title: "Instant Diagnosis",
      description: "Receive a preliminary diagnosis with risk severity score in seconds.",
    },
    {
      icon: FileText,
      step: "04",
      title: "Care Recommendations",
      description: "Get actionable treatment guidance and emergency flags when needed.",
    },
    {
      icon: CheckCircle,
      step: "05",
      title: "Follow-up Tracking",
      description: "Monitor recovery progress and receive ongoing care suggestions.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How FndlyCare AI Works</h2>
          <p className="text-lg text-muted-foreground">
            From symptom upload to actionable care plan in under 30 seconds.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary font-medium">{step.step}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Trained on Veterinary Datasets</div>
              <p className="text-sm text-muted-foreground">Comprehensive medical knowledge base</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Pattern Recognition</div>
              <p className="text-sm text-muted-foreground">Advanced symptom matching algorithms</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Early Disease Detection</div>
              <p className="text-sm text-muted-foreground">Catch conditions before they escalate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
