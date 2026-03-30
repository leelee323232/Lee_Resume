import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import ObfuscatedEmail from '@/components/obfuscated-email'
import ProtectedImage from '@/components/protected-image'

export default function ResumeHero() {
  const tags = ['區塊鏈教育', 'ESG 永續', 'AI 研究', '金融科技' ]

  return (
    <section className="min-h-[92vh] flex items-center pt-20 pb-16 px-4 md:px-8 bg-gradient-to-br from-primary/8 via-background to-secondary/8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Tag chips */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
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
                李科邑
              </h1>
              <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                東吳大學｜日本語言學系學士 × 資料科學碩士五年一貫
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <p className="text-base text-foreground/60 leading-loose">
                具備日語、財金與資料科學的跨領域背景，目前就讀東吳大學資料科學系碩士班五年一貫。專注於將 AI 與區塊鏈技術應用於金融科技與永續發展（ESG）領域。
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span><span className="text-foreground/80 font-medium">創業實務：</span>現任 Carcons 碳盤查團隊負責人，開發 AI 碳預測平台</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span><span className="text-foreground/80 font-medium">社群領導：</span>東吳 ESG 永續發展研究社創社社長、東吳區塊鏈研究社社長、東吳登山社副社長，榮獲 114 年大專優秀青年代表</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span><span className="text-foreground/80 font-medium">教育推廣：</span>與校方合作開設多門微課程，擔任全台首創「Move 智能合約工作坊」課程講師，並與校方合作推廣「東吳大學區塊鏈教育計畫」</span>
                </li>
              </ul>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <ObfuscatedEmail
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                <Mail className="w-4 h-4" />
                聯絡我
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
