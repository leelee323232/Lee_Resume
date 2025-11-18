'use client'

import Navigation from '@/components/navigation'
import ResumeHero from '@/components/resume-hero'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import ContactMedia from '@/components/contact-media'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ResumeHero />
      <Education />
      <Experience />
      <Skills />
      <ContactMedia />
      <Footer />
    </main>
  )
}
