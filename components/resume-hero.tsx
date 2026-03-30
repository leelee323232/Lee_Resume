import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import ObfuscatedEmail from '@/components/obfuscated-email'
import ProtectedImage from '@/components/protected-image'
import type { SiteContent } from '@/lib/i18n'

interface ResumeHeroProps {
  content: SiteContent['hero']
}

export default function ResumeHero({ content }: ResumeHeroProps) {
  return (
    <section className="min-h-[92vh] flex items-center pt-20 pb-16 px-4 md:px-8 bg-gradient-to-br from-primary/8 via-background to-secondary/8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Tag chips */}
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Name & title */}
            <div className="space-y-3">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tight">
                {content.name}
              </h1>
              <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                {content.title}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <p className="text-base text-foreground/60 leading-loose">
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
            <div className="flex flex-wrap gap-4 pt-2">
              <ObfuscatedEmail
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                <Mail className="w-4 h-4" />
                {content.contactButton}
              </ObfuscatedEmail>
              <a
                href="https://www.linkedin.com/in/科邑-李-96727b257"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-xl border border-border hover:border-primary/50 transition-all duration-200 font-medium hover:shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/tonylee0320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-xl border border-border hover:border-primary/50 transition-all duration-200 font-medium hover:shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Right: Photo only */}
          <div className="flex justify-center items-center order-1 lg:order-2">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 animate-bounce hidden md:flex">
        <ArrowRight className="w-4 h-4 rotate-90" />
      </div>
    </section>
  )
}
