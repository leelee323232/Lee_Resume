'use client'

import { Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import type { SiteContent } from '@/lib/i18n'

interface ContactMediaProps {
  content: SiteContent['contact']
}

const parts = ['lik75990', 'gmail', 'com']
const email = `${parts[0]}@${parts[1]}.${parts[2]}`

export default function ContactMedia({ content }: ContactMediaProps) {
  const [copied, setCopied] = useState(false)

  const contactInfo = [
    { label: 'Email', value: email, icon: Mail, href: `mailto:${email}`, type: 'email' as const },
    { label: 'LinkedIn', value: 'linkedin.com/in/科邑-李-96727b257', icon: Linkedin, href: 'https://www.linkedin.com/in/科邑-李-96727b257', type: 'link' as const },
    { label: 'Instagram', value: 'instagram.com/tonylee0320', icon: Instagram, href: 'https://www.instagram.com/tonylee0320', type: 'link' as const },
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Contact Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{content.contactHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const isLink = item.type === 'link'
              const Wrapper = isLink ? 'a' : 'div'
              const wrapperProps = isLink
                ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <Wrapper
                  key={item.label}
                  {...wrapperProps}
                  className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-200 hover:shadow-md block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    {isLink && <ExternalLink className="w-4 h-4 text-foreground/30" />}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                  <p className="text-sm text-foreground/60 mb-4 break-all">{item.value}</p>
                  {!isLink && (
                    <button
                      onClick={handleCopy}
                      className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200 text-sm font-medium"
                    >
                      {copied ? content.copiedText : content.copyText}
                    </button>
                  )}
                </Wrapper>
              )
            })}
          </div>
        </div>

        {/* Media and External Links */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{content.mediaHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.media.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-200 hover:shadow-md hover:bg-primary/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs text-primary font-medium mb-2">{item.date}</p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors duration-200 flex-shrink-0 ml-3" />
                </div>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
