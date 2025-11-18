export default function Skills() {
  const skillGroups = [
    {
      category: '技術技能',
      skills: ['Python', 'JavaScript/TypeScript', 'React', 'Next.js', 'SQL', '資料分析', '機器學習']
    },
    {
      category: '區塊鏈',
      skills: ['Smart Contract', 'Web3.js', 'DApp開發', 'Solidity基礎', 'Kaspa生態']
    },
    {
      category: '專業技能',
      skills: ['項目管理', '活動企劃', '公眾演講', '教學設計', '跨團隊協作']
    },
    {
      category: '語言',
      skills: ['繁體中文', '英文 (TOEIC 850+)', '日文基礎']
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">技能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
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
