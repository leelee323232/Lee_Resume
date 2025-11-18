'use client'

import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function ContactMedia() {
  const [copied, setCopied] = useState('')

  const contactInfo = [
    {
      label: 'Email',
      value: 'kylin.lee@example.com',
      icon: Mail,
      href: 'mailto:kylin.lee@example.com',
      type: 'email'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/kylin-lee',
      icon: Linkedin,
      href: 'https://linkedin.com/in/kylin-lee',
      type: 'link'
    },
    {
      label: 'GitHub',
      value: 'github.com/kylinlee',
      icon: Github,
      href: 'https://github.com/kylinlee',
      type: 'link'
    }
  ]

  const mediaAndLinks = [
    {
      title: 'BlockchainTW 專訪',
      description: '區塊鏈教育新創代表人物訪談',
      date: '2024年10月',
      url: 'https://example.com'
    },
    {
      title: '永續發展論壇 - 演講嘉賓',
      description: '分享區塊鏈在ESG應用的實踐經驗',
      date: '2024年9月',
      url: 'https://example.com'
    },
    {
      title: 'Tech Weekly 專題報導',
      description: '青年創業者如何推動區塊鏈教育普及',
      date: '2024年8月',
      url: 'https://example.com'
    },
    {
      title: 'CSR 永續倡議計畫',
      description: '參與國際永續發展研究與推廣',
      date: '2024年7月',
      url: 'https://example.com'
    }
  ]

  const handleCopy = (value, type) => {
    navigator.clipboard.writeText(value)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Contact Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">聯絡資訊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{item.value}</p>
                  <button
                    onClick={() => handleCopy(item.value, item.type)}
                    className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200 text-sm font-medium"
                  >
                    {copied === item.type ? '已複製' : '複製'}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Media and External Links */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">媒體採訪 & 外部連結</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaAndLinks.map((item, index) => (
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
