'use client'

import { Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function ContactMedia() {
  const [copied, setCopied] = useState('')

  const parts = ['lik75990', 'gmail', 'com']
  const email = `${parts[0]}@${parts[1]}.${parts[2]}`

  const contactInfo = [
    {
      label: 'Email',
      value: email,
      icon: Mail,
      href: `mailto:${email}`,
      type: 'email'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/科邑-李-96727b257',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/科邑-李-96727b257',
      type: 'link'
    },
    {
      label: 'Instagram',
      value: 'https://www.instagram.com/tonylee0320',
      icon: Instagram,
      href: 'https://www.instagram.com/tonylee0320',
      type: 'link'
    }
  ]

  const mediaAndLinks = [
    {
      title: '文學院生也能「職涯換軌」加密貨幣圈',
      description: '天下學習-區塊鏈教育訪談',
      date: '2024年10月',
      url: 'https://www.cheers.com.tw/article/article.action?id=5105065&page=1'
    },
    {
      title: '2025第二屆創想盃 全國大專院校創新提案競賽',
      description: '分享區塊鏈在金融應用的實踐經驗',
      date: '2025年06月',
      url: 'https://sdgs.scu.edu.tw/2025/06/%e6%9d%b1%e5%90%b3%e9%a6%96%e5%89%b5%e3%80%8cmove-%e6%99%ba%e8%83%bd%e5%90%88%e7%b4%84%e5%b7%a5%e4%bd%9c%e5%9d%8a%e3%80%8d%e6%9a%a8%e7%ac%ac%e4%ba%8c%e5%b1%86%e5%89%b5%e6%83%b3%e7%9b%83%e6%b1%ba/'
    },
    {
      title: '第一屆 東吳鏈愛節',
      description: '社團如何推動區塊鏈教育普及',
      date: '2024年03月',
      url: 'https://news.scu.edu.tw/news/29533'
    },
    {
      title: '第二屆 東吳鏈愛節',
      description: '分享區塊鏈在遊戲應用的實踐經驗',
      date: '2025年02月',
      url: 'https://web-ch.scu.edu.tw/epaper/news/6916/27976'
    }
  ]

  const handleCopy = (value: string, type: string) => {
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
                      onClick={() => handleCopy(item.value, item.type)}
                      className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200 text-sm font-medium"
                    >
                      {copied === item.type ? '已複製' : '複製'}
                    </button>
                  )}
                </Wrapper>
              )
            })}
          </div>
        </div>

        {/* Media and External Links */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">報導連結</h2>
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
