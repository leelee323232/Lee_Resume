'use client'

import Navigation from '@/components/navigation'
import PortfolioHero from '@/components/portfolio-hero'
import ProjectGrid from '@/components/project-grid'
import Footer from '@/components/footer'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PortfolioHero />
      <ProjectGrid />
      <Footer />
    </main>
  )
}
