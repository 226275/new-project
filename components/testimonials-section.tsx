import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Warangal, Telangana",
    quote:
      "So easy to use! I just took a photo of my cow and got the diagnosis in Telugu within seconds. No need to travel 30km to find a vet anymore.",
    animal: "Dairy Cattle",
    rating: 5,
    highlight: "Language accessibility",
  },
  {
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    quote:
      "The diagnosis was incredibly fast—less than a minute! My dog had a skin issue and I got clear recommendations instantly. Very impressed.",
    animal: "Pet Dog",
    rating: 5,
    highlight: "Fast diagnosis",
  },
  {
    name: "Venkat Reddy",
    location: "Anantapur, Andhra Pradesh",
    quote:
      "Even my elderly father could use it without help. Just upload a photo and get results. The Telugu support made it so accessible for our village.",
    animal: "Goat Herd",
    rating: 5,
    highlight: "Ease of use",
  },
  {
    name: "Lakshmi Devi",
    location: "Vizag, Andhra Pradesh",
    quote:
      "I was worried about my buffalo but couldn't afford to miss work. Got a quick diagnosis on my phone in my own language. Life-changing!",
    animal: "Buffalo",
    rating: 5,
    highlight: "Language accessibility",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Real stories from pet owners and farmers who trust FndlyCare for their animals' health.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <span className="font-semibold">50+ commuters benefited</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl border border-border p-6 shadow-sm relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-3">
                {testimonial.highlight}
              </span>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-medium text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                <div className="text-xs text-primary mt-1">{testimonial.animal}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
