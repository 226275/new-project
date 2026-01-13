import type { LucideIcon } from "lucide-react"

interface Stat {
  icon: LucideIcon
  value: string
  label: string
  description: string
}

interface ResearchStatsProps {
  stats: Stat[]
}

export function ResearchStats({ stats }: ResearchStatsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
            <p className="text-sm text-muted-foreground">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
