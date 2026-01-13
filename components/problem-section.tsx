import { AlertTriangle, Clock, MapPin } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Challenge We're Solving</h2>
          <p className="text-lg text-muted-foreground">
            Millions of animals suffer due to delayed diagnosis. We're changing that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: "No Instant Vet Access",
              description:
                "Rural areas lack immediate veterinary care. Farmers and pet owners travel hours to reach the nearest clinic, often too late.",
            },
            {
              icon: AlertTriangle,
              title: "Panic During Emergencies",
              description:
                "When animals show symptoms, owners panic without knowing severity. Precious time is lost in uncertainty and worry.",
            },
            {
              icon: Clock,
              title: "Delayed Diagnosis",
              description:
                "Late detection leads to preventable animal deaths. Early symptoms go unrecognized, turning treatable conditions fatal.",
            },
          ].map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
