import { Dog, Milk, Bird, Heart } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: Dog,
      title: "Pet Owners",
      description:
        "Get instant health insights for your dogs, cats, and other companion animals without waiting for appointments.",
      image: "/happy-family-with-pet-dog-at-home.jpeg",
    },
    {
      icon: Milk,
      title: "Dairy Farmers",
      description:
        "Monitor cattle health proactively, detect mastitis early, and maintain herd productivity with AI assistance.",
      image: "/dairy-farm-with-healthy-cows-rural-india.jpg",
    },
    {
      icon: Bird,
      title: "Poultry Farms",
      description: "Identify flock diseases before they spread, reduce mortality, and optimize farm economics.",
      image: "/modern-poultry-farm-chickens-healthy.jpg",
    },
    {
      icon: Heart,
      title: "Animal NGOs",
      description: "Triage rescue animals efficiently, prioritize critical cases, and allocate resources effectively.",
      image: "/animal-shelter-volunteers-caring-for-rescued-anima.jpeg",
    },
  ]

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for Everyone Who Cares</h2>
          <p className="text-lg text-muted-foreground">
            From individual pet parents to large-scale farms—FndlyCare serves all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
