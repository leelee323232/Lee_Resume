import { Noto_Sans_TC } from 'next/font/google'
import Navigation from '@/components/navigation'
import PortfolioHero from '@/components/portfolio-hero'
import ProjectGrid from '@/components/project-grid'
import Footer from '@/components/footer'
import { zh } from '@/lib/i18n'

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Portfolio() {
  return (
    <main className={`min-h-screen bg-background ${notoSansTC.className}`}>
      <Navigation locale="zh" content={zh.nav} />
      <PortfolioHero content={zh.portfolioHero} />
      <ProjectGrid content={zh.portfolio} />
      <Footer content={zh.footer} />
    </main>
  )
}
