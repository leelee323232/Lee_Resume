import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import ObfuscatedEmail from '@/components/obfuscated-email'
import ProtectedImage from '@/components/protected-image'
import type { SiteContent } from '@/lib/i18n'

interface ResumeHeroProps {
  content: SiteContent['hero']
}

export default function ResumeHero({ content }: ResumeHeroProps) {
  return (
    <section className="lg:min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-20 px-4 md:px-8 bg-gradient-to-br from-primary/8 via-background to-secondary/8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text content — staggered entrance */}
          <div className="space-y-6 lg:space-y-8">

            {/* Mobile identity row: compact avatar beside name, so the first
                screen leads with who this is rather than a 384px portrait. */}
            <div
              className="flex items-center gap-4 lg:hidden animate-fade-up"
              style={{ animationDelay: '60ms' }}
            >
              <ProtectedImage variant="avatar" />
              <div className="space-y-1 min-w-0">
                <h1 className="text-4xl font-bold text-foreground tracking-tight">
                  {content.name}
                </h1>
                <p className="text-sm text-foreground/60 font-medium leading-snug">
                  {content.title}
                </p>
              </div>
            </div>

            {/* Tag chips — jump links into the page sections */}
            <nav
              aria-label={content.tagsLabel}
              className="flex flex-wrap gap-2 animate-fade-up"
              style={{ animationDelay: '140ms' }}
            >
              {content.tags.map((tag) => (
                <a
                  key={tag.href}
                  href={tag.href}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  {tag.label}
                </a>
              ))}
            </nav>

            {/* Name & title — desktop only; mobile shows them in the identity row */}
            <div
              className="hidden lg:block space-y-3 animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tight">
                {content.name}
              </h1>
              <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                {content.title}
              </p>
            </div>

            {/* Description */}
            <div
              className="space-y-4 max-w-lg animate-fade-up"
              style={{ animationDelay: '260ms' }}
            >
              <p className="text-sm lg:text-base text-foreground/60 leading-loose">
                {content.description}
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {content.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>
                      <span className="text-foreground/80 font-medium">{bullet.label}</span>
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-3 lg:gap-4 pt-2 animate-fade-up"
              style={{ animationDelay: '360ms' }}
            >
              <ObfuscatedEmail
                className="inline-flex items-center gap-2 px-5 lg:px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all duration-200 font-medium shadow-sm text-sm lg:text-base"
              >
                <Mail className="w-4 h-4" />
                {content.contactButton}
              </ObfuscatedEmail>
              <a
                href="https://www.linkedin.com/in/科邑-李-96727b257"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 lg:px-6 py-3 bg-card text-foreground rounded-xl border border-border hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 transition-all duration-200 font-medium text-sm lg:text-base"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/tonylee0320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 lg:px-6 py-3 bg-card text-foreground rounded-xl border border-border hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 transition-all duration-200 font-medium text-sm lg:text-base"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Right: Photo — desktop only */}
          <div
            className="hidden lg:flex justify-center items-center animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative">
              <ProtectedImage />
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-primary/20 -z-10" />
              <div className="absolute -inset-6 rounded-3xl border border-primary/10 -z-10" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-foreground/30 animate-bounce hidden lg:flex">
        <ArrowRight className="w-4 h-4 rotate-90" />
      </div>
    </section>
  )
}
