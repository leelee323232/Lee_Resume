import { FlaskConical } from 'lucide-react'

export default function ResearchProjects() {
  const projects = [
    {
      title: '東吳大學區塊鏈推廣教育與應用',
      type: '國科會大專學生研究計畫',
      period: '2023',
      details: [],
      tags: ['區塊鏈', 'NFT', '實際教學'],
    },
    {
      title: 'AI家和：運用AI工具促進家庭情感與社會數位轉型計畫 助教',
      type: '教育部USR大學社會責任實踐計畫',
      period: '2025 - 2026',
      details: [],
      tags: ['USR', '在地數位轉型', 'AI 應用'],
    },
    {
      title: '社工服務數位轉型與跨域教學實踐計畫',
      type: '教育部高等教育深耕計畫 — 教學跨領域合作計畫',
      period: '2026',
      details: [],
      tags: ['社工服務', '跨域教學'],
    },
    {
      title: '去中心化金融應用實作 — 區塊鏈技術與數位資產應用發展計畫',
      type: '國科會技專校院實務型研究專案計畫',
      period: '2026',
      details: [],
      tags: ['金融應用', '區塊鏈'],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-xl bg-primary/10">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">研究專案</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground leading-snug">{project.title}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{project.type}</p>
                </div>
                <span className="text-xs text-foreground/40 whitespace-nowrap ml-3 mt-0.5 font-medium">{project.period}</span>
              </div>
              {project.details.length > 0 && (
                <ul className="space-y-1.5 mt-3 pt-3 border-t border-border">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-foreground/60 flex items-baseline gap-2">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
