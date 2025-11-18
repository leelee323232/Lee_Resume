export default function ResearchProjects() {
  const projects = [
    {
      title: '鐵達尼號資料分析',
      description: '含 K-means 重構',
    },
    {
      title: '生涯適應力 × 生成式 AI × 焦慮調節',
      description: '研究設計與資料科學模型建構',
    },
    {
      title: '課堂與專案研究執行',
      description: 'Placeholder for future projects',
    },
  ]

  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
        03. 研究專案執行經歷
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/10"
          >
            <h3 className="text-lg font-medium text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/70">{project.description}</p>
            <div className="mt-4 flex items-center gap-2 text-accent text-sm">
              <span>了解更多</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
