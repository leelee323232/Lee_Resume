import type { SiteContent } from '@/lib/i18n'

interface PortfolioHeroProps {
  content: SiteContent['portfolioHero']
}

export default function PortfolioHero({ content }: PortfolioHeroProps) {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">{content.heading}</h1>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  )
}
