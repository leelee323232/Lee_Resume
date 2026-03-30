import { GraduationCap } from 'lucide-react'
import type { SiteContent } from '@/lib/i18n'

interface EducationProps {
  content: SiteContent['education']
}

export default function Education({ content }: EducationProps) {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-xl bg-primary/10">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">{content.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${(content.typeColors as Record<string, string>)[item.type] ?? 'bg-muted text-foreground/60'}`}>
                  {item.type}
                </span>
                <span className="text-xs text-foreground/40 font-medium">{item.period}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{item.degree}</h3>
              <p className="text-sm text-primary font-medium mb-3">{item.school}</p>
              <p className="text-sm text-foreground/60 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
