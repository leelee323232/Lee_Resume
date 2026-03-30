import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import PortfolioHero from '@/components/portfolio-hero'
import ProjectGrid from '@/components/project-grid'
import Footer from '@/components/footer'
import { getContent, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }]
}

export default async function LocalePortfolio({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'en' && locale !== 'ja') notFound()

  const content = getContent(locale as Locale)

  return (
    <main className="min-h-screen bg-background">
      <Navigation locale={locale as Locale} content={content.nav} />
      <PortfolioHero content={content.portfolioHero} />
      <ProjectGrid content={content.portfolio} />
      <Footer content={content.footer} />
    </main>
  )
}
