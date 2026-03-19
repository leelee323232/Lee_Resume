import Image from 'next/image'
import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react'

export default function ResumeHero() {
  const tags = ['區塊鏈教育', 'ESG 永續', 'AI 研究', '在地關懷']

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
            <p className="text-base text-foreground/60 max-w-lg leading-loose">
              專注於區塊鏈教育、資料科學與永續發展領域。以跨領域視角整合技術、教育與社會責任，推動科技普及與應用。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:lik75932@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                <Mail className="w-4 h-4" />
                聯絡我
              </a>
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
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-muted">
                <Image
                  src="/profile.jpg"
                  alt="李科邑"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
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
