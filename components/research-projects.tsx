import Link from 'next/link'
import { FlaskConical, ArrowUpRight } from 'lucide-react'
import type { SiteContent, Locale } from '@/lib/i18n'

interface ResearchProjectsProps {
  content: SiteContent['research']
  locale: Locale
}

export default function ResearchProjects({ content, locale }: ResearchProjectsProps) {
  const portfolioBase = locale === 'zh' ? '/portfolio' : `/${locale}/portfolio`

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-xl bg-primary/10">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">{content.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.items.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground leading-snug">{project.title}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{project.type}</p>
                </div>
                <span className="text-xs text-foreground/40 whitespace-nowrap ml-3 mt-0.5 font-medium">{project.period}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <Link
                  href={`${portfolioBase}#research`}
                  className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary font-medium transition-colors duration-200"
                >
                  {content.viewPortfolio}
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
