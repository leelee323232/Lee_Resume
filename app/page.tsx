import { Noto_Sans_TC } from 'next/font/google'
import Navigation from '@/components/navigation'
import ResumeHero from '@/components/resume-hero'
import Education from '@/components/education'
import Experience from '@/components/experience'
import ResearchProjects from '@/components/research-projects'
import Competitions from '@/components/competitions'
import Skills from '@/components/skills'
import ContactMedia from '@/components/contact-media'
import Footer from '@/components/footer'
import { zh } from '@/lib/i18n'

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`min-h-screen bg-background ${notoSansTC.className}`}>
      <Navigation locale="zh" content={zh.nav} />
      <ResumeHero content={zh.hero} />
      <Education content={zh.education} />
      <Experience content={zh.experience} locale="zh" />
      <ResearchProjects content={zh.research} locale="zh" />
      <Competitions content={zh.competitions} />
      <Skills content={zh.skills} />
      <ContactMedia content={zh.contact} />
      <Footer content={zh.footer} />
    </main>
  )
}
