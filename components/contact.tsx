'use client'

import { Copy, Mail, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@example.com',
      copyValue: 'contact@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@keyi-li',
      href: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@keyi-codes',
      href: 'https://github.com',
    },
  ]

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-balance">
          聯絡資訊
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const isClickable = 'copyValue' in item
            
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 group cursor-pointer"
                onClick={() => isClickable && copyToClipboard(item.copyValue, `email-${index}`)}
              >
                <Icon className="w-5 h-5 text-primary mb-3 group-hover:text-accent transition-colors duration-300" />
                <p className="text-xs text-foreground/60 mb-2 uppercase tracking-wide">{item.label}</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent mt-3 inline-block hover:underline"
                  >
                    查看資料 →
                  </a>
                )}
                {isClickable && (
                  <p className="text-xs text-accent mt-3 flex items-center gap-1">
                    <Copy className="w-3 h-3" />
                    {copied === `email-${index}` ? '已複製！' : '點擊複製'}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
