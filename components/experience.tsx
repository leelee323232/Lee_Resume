import Link from 'next/link'
import { Briefcase, Star, ArrowUpRight } from 'lucide-react'
import type { SiteContent, Locale } from '@/lib/i18n'

interface ExperienceProps {
  content: SiteContent['experience']
  locale: Locale
}

export default function Experience({ content, locale }: ExperienceProps) {
  const portfolioBase = locale === 'zh' ? '/portfolio' : `/${locale}/portfolio`

  const renderCards = (list: typeof content.work) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {list.map((exp, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground leading-snug">{exp.title}</h3>
              {exp.company && (
                <p className="text-sm text-primary font-medium mt-1">{exp.company}</p>
              )}
            </div>
            <span className="text-xs text-foreground/40 whitespace-nowrap ml-3 mt-0.5 font-medium">{exp.period}</span>
          </div>
          {exp.details.length > 0 && (
            <ul className="space-y-1.5 mt-3 pt-3 border-t border-border">
              {exp.details.map((detail, i) => {
                const isSub = detail.startsWith('↳')
                const text = isSub ? detail.slice(1) : detail
                return (
                  <li key={i} className="text-sm text-foreground/60 flex items-baseline gap-2">
                    {isSub
                      ? <span className="w-3 flex-shrink-0" />
                      : <span className="text-primary flex-shrink-0">•</span>
                    }
                    <span>{text}</span>
                  </li>
                )
              })}
            </ul>
          )}
          {'portfolioId' in exp && exp.portfolioId && (
            <div className="mt-3 pt-3 border-t border-border">
              <Link
                href={`${portfolioBase}#${exp.portfolioId}`}
                className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary font-medium transition-colors duration-200"
              >
                {content.viewPortfolio}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-primary/10">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{content.workHeading}</h2>
          </div>
          {renderCards(content.work)}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-primary/10">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{content.campusHeading}</h2>
          </div>
          {renderCards(content.campus)}
        </div>
      </section>
    </>
  )
}
