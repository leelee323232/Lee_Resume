import { notFound } from 'next/navigation'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getContent, type Locale } from '@/lib/i18n'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }]
}

export default async function LocaleResume({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'en' && locale !== 'ja') notFound()

  const content = getContent(locale as Locale)
  const fontClass = locale === 'en' ? plusJakartaSans.className : ''

  return (
    <main className={`min-h-screen bg-background ${fontClass}`}>
      <Navigation locale={locale as Locale} content={content.nav} />

      {/* Resume Content */}
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">{content.hero.name}</h1>
              <p className="text-xl text-foreground/60 font-medium">{content.hero.title}</p>
              <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
                {content.hero.description}
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{content.experience.workHeading}</h2>
              <div className="space-y-6">
                {content.experience.work.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.company}</p>
                    <p className="text-xs text-foreground/50 mt-1">{item.period}</p>
                    <ul className="mt-3 space-y-1 text-sm text-foreground/60">
                      {item.details?.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Campus Experience */}
              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">{content.experience.campusHeading}</h3>
              <div className="space-y-6">
                {content.experience.campus.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.company}</p>
                    <p className="text-xs text-foreground/50 mt-1">{item.period}</p>
                    <ul className="mt-3 space-y-1 text-sm text-foreground/60">
                      {item.details?.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  ))}
                </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{content.education.heading}</h2>
              <div className="space-y-6">
                {content.education.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.school}</h3>
                    <p className="text-sm text-primary font-medium">{item.degree}</p>
                    <p className="text-xs text-foreground/50 mt-1">{item.period}</p>
                    {item.details && <p className="mt-2 text-sm text-foreground/60">{item.details}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{content.skills.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.skills.groups.map((group, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                    <p className="text-sm font-semibold text-primary mb-3">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer content={content.footer} />
    </main>
  )
}
