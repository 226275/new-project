import { Quote } from "lucide-react"
import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 relative">
          <div className="absolute top-8 left-8 text-primary/20">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10 text-center">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 text-pretty">
              "Our mission is to ensure no animal dies due to lack of timely diagnosis. AI makes this possible. With
              FndlyCare, we're bringing world-class veterinary insights to every village, every farm, and every home."
            </p>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <Image
                  src="/images/rahul-badavath.jpg"
                  alt="Rahul Badavath - Founder of FndlyCare"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-semibold text-foreground text-lg">Rahul Badavath</div>
              <div className="text-sm text-muted-foreground">Founder, FndlyCare</div>
              <div className="text-xs text-muted-foreground mt-1">Certified Digital Marketer, IIM Mumbai</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
