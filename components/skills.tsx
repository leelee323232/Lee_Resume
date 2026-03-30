import { Code2, Link2, Brain, Languages } from 'lucide-react'
import type { SiteContent } from '@/lib/i18n'

const iconMap = { Code2, Link2, Brain, Languages }

interface SkillsProps {
  content: SiteContent['skills']
}

export default function Skills({ content }: SkillsProps) {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">{content.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.groups.map((group, index) => {
            const Icon = iconMap[group.iconName]
            return (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-xl ${group.bg}`}>
                    <Icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-muted text-foreground/70 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
