import { notFound } from 'next/navigation'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navigation from '@/components/navigation'
import ResumeHero from '@/components/resume-hero'
import Education from '@/components/education'
import Experience from '@/components/experience'
import ResearchProjects from '@/components/research-projects'
import Competitions from '@/components/competitions'
import Skills from '@/components/skills'
import ContactMedia from '@/components/contact-media'
import Footer from '@/components/footer'
import { getContent, type Locale } from '@/lib/i18n'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }]
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'en' && locale !== 'ja') notFound()

  const content = getContent(locale as Locale)
  const fontClass = locale === 'en' ? plusJakartaSans.className : ''

  return (
    <main className={`min-h-screen bg-background ${fontClass}`}>
      <Navigation locale={locale as Locale} content={content.nav} />
      <ResumeHero content={content.hero} />
      <Education content={content.education} />
      <Experience content={content.experience} locale={locale as Locale} />
      <ResearchProjects content={content.research} locale={locale as Locale} />
      <Competitions content={content.competitions} />
      <Skills content={content.skills} />
      <ContactMedia content={content.contact} />
      <Footer content={content.footer} />
    </main>
  )
}
