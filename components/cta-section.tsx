import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Be Part of the Revolution</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join us in transforming animal healthcare across India. Try our AI diagnosis platform today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Request Beta Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <a href="mailto:support@fndlycare.com" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </a>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-6">
              Questions? Reach us at{" "}
              <a href="mailto:support@fndlycare.com" className="underline hover:text-primary-foreground">
                support@fndlycare.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
