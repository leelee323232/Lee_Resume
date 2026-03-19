import { GraduationCap } from 'lucide-react'

export default function Education() {
  const education = [
    {
      school: '東吳大學',
      degree: '日本語言學系',
      period: '2021 - 至今',
      details: '日本文化、日本人文歷史、日本在地習慣探索',
      type: '學士'
    },
    {
      school: '東吳大學',
      degree: '資料科學系碩士五年一貫',
      period: '2025 - 至今',
      details: 'AI、進階演算法、機器學習等課程',
      type: '碩士'
    },
    {
      school: '東吳大學',
      degree: '跨科際智慧應用學分學程',
      period: '2024 - 至今',
      details: 'AI新興法治、機器人實作、AI與社會學',
      type: '學程'
    },
    {
      school: '東吳大學',
      degree: '金融科技學分學程',
      period: '2024 - 至今',
      details: '金融程式、數位金融、金融數據',
      type: '學程'
    },
  ]

  const typeColors: Record<string, string> = {
    '學士': 'bg-secondary/20 text-secondary-foreground',
    '碩士': 'bg-primary/15 text-primary',
    '學程': 'bg-accent/20 text-accent-foreground',
  }

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-xl bg-primary/10">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">教育背景</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[item.type]}`}>
                  {item.type}
                </span>
                <span className="text-xs text-foreground/40 font-medium">{item.period}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{item.degree}</h3>
              <p className="text-sm text-primary font-medium mb-3">{item.school}</p>
              <p className="text-sm text-foreground/60 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
