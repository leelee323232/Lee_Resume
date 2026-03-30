'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import type { Locale } from '@/lib/i18n'

interface NavContent {
  brand: string
  resume: string
  portfolio: string
}

interface NavigationProps {
  locale: Locale
  content: NavContent
}

const localeRoots = ['/', '/en', '/ja']

export default function Navigation({ locale, content }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const resumeHref = locale === 'zh' ? '/' : `/${locale}`
  const portfolioHref = locale === 'zh' ? '/portfolio' : `/${locale}/portfolio`

  const navItems = [
    { label: content.resume, href: resumeHref },
    { label: content.portfolio, href: portfolioHref },
  ]

  const isActive = (href: string) =>
    localeRoots.includes(href) ? pathname === href : pathname.startsWith(href)

  // Language switcher: compute equivalent path in each locale
  const getLocaleHref = (targetLocale: Locale) => {
    const isPortfolio = pathname.includes('/portfolio')
    if (targetLocale === 'zh') return isPortfolio ? '/portfolio' : '/'
    return isPortfolio ? `/${targetLocale}/portfolio` : `/${targetLocale}`
  }

  const localeLabels: Record<Locale, string> = { zh: '繁中', en: 'EN', ja: '日本語' }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={resumeHref}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
          >
            {content.brand}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-foreground'
                    : 'text-foreground/50 hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-border rounded-lg px-1 py-0.5">
              <Globe className="w-3.5 h-3.5 text-foreground/40 ml-1" />
              {(['zh', 'en', 'ja'] as Locale[]).map((loc) => (
                <Link
                  key={loc}
                  href={getLocaleHref(loc)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                    loc === locale
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/50 hover:text-foreground'
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/60 hover:text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-4 pt-2 border-t border-border mt-2">
              <Globe className="w-3.5 h-3.5 text-foreground/40" />
              {(['zh', 'en', 'ja'] as Locale[]).map((loc) => (
                <Link
                  key={loc}
                  href={getLocaleHref(loc)}
                  onClick={() => setIsOpen(false)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    loc === locale
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/50 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
