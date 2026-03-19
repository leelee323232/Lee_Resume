import { Code2, Link2, Brain, Languages } from 'lucide-react'

export default function Skills() {
  const skillGroups = [
    {
      category: '技術技能',
      icon: Code2,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      skills: ['Python', 'JavaScript / TypeScript', 'React', 'Next.js', 'SQL', '資料分析', '機器學習']
    },
    {
      category: '區塊鏈',
      icon: Link2,
      color: 'text-primary',
      bg: 'bg-primary/10',
      skills: ['Smart Contract', 'Web3.js', 'DApp 開發', 'Solidity 基礎', 'Kaspa 生態']
    },
    {
      category: '專業技能',
      icon: Brain,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      skills: ['項目管理', '活動企劃', '公眾演講', '教學設計', '跨團隊協作']
    },
    {
      category: '語言',
      icon: Languages,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      skills: ['繁體中文（母語）', '英文', '日文', '閩南語']
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">技能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-xl ${group.bg}`}>
                    <Icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-muted text-foreground/70 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
