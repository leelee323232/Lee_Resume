import type { SiteContent } from '@/lib/i18n'

interface CompetitionsProps {
  content: SiteContent['competitions']
}

export default function Competitions({ content }: CompetitionsProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">{content.heading}</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-16 md:left-20 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {content.items.map((comp, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8">
                {/* Year */}
                <div className="w-16 md:w-20 flex-shrink-0 pt-4 text-right">
                  <span className="text-xs font-medium text-foreground/40">{comp.period}</span>
                </div>

                {/* Timeline dot */}
                <div className="relative flex-shrink-0 flex items-start pt-5">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/30" />
                </div>

                {/* Content card */}
                <div className="flex-1 pb-2">
                  <div className="bg-card rounded-2xl p-5 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {comp.title}
                      </h3>
                      <span className="flex-shrink-0 self-start px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold whitespace-nowrap">
                        {comp.award}
                      </span>
                    </div>
                    {comp.organizer && (
                      <p className="text-sm text-foreground/50 mb-2">{comp.organizer}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
