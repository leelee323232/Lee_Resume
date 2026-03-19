'use client'

import { useState } from 'react'

const categoryGradients: Record<string, string> = {
  '教育科技': 'from-blue-500/20 to-cyan-500/20',
  '資料科學': 'from-violet-500/20 to-purple-500/20',
  '跨領域研究': 'from-emerald-500/20 to-teal-500/20',
  '活動企劃': 'from-orange-500/20 to-amber-500/20',
  '硬體創業': 'from-rose-500/20 to-pink-500/20',
  '社團領導': 'from-green-500/20 to-lime-500/20',
}

export default function ProjectGrid() {
  const projects = [
    {
      title: '區塊鏈社課程系統',
      category: '教育科技',
      description: '為零基礎學生設計的完整區塊鏈教育課程，涵蓋基礎概念、實作操作與生態應用。',
      tags: ['教學設計', '區塊鏈', '課程規劃'],
      achievements: ['覆蓋100+學生', '8堂結構化課程', '95%滿意度']
    },
    {
      title: '鐵達尼號資料分析',
      category: '資料科學',
      description: '應用K-means聚類算法對歷史數據進行深度分析，建立數據可視化與預測模型。',
      tags: ['Python', '機器學習', '資料視覺化'],
      achievements: ['聚類準確率92%', '3種模型比較', '完整報告交付']
    },
    {
      title: '生涯適應力與AI研究',
      category: '跨領域研究',
      description: '整合生涯心理學、生成式AI與焦慮調節的跨學科研究項目，設計創新研究框架。',
      tags: ['研究設計', '生成式AI', '心理學'],
      achievements: ['論文發表', '跨校合作', '創新框架']
    },
    {
      title: '2024區塊鏈聖誕派對',
      category: '活動企劃',
      description: '主企劃跨校區塊鏈社團聯合舉辦的大型推廣活動，成功吸引300+參與者。',
      tags: ['活動管理', '場景設計', '社群推廣'],
      achievements: ['300+參與者', '完美執行', '媒體報導']
    },
    {
      title: '智能睡眠抱枕產品',
      category: '硬體創業',
      description: '整合呼吸感測、溫控與IoT晶片的創新穿戴產品，完成從概念到企劃書的全流程。',
      tags: ['產品設計', '創業', '硬體整合'],
      achievements: ['創業計畫書', '創業競賽參選', '原型設計完成']
    },
    {
      title: 'ESG永續研究社',
      category: '社團領導',
      description: '創立東吳首個永續發展研究社團，整合SDGs目標與校園實踐，建立完整的永續推廣體系。',
      tags: ['社團創立', '永續發展', '領導力'],
      achievements: ['社團成立', '30+成員', '多項推廣活動']
    }
  ]

  const categories = ['全部', ...new Set(projects.map(p => p.category))]
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredProjects = selectedCategory === '全部'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Category Filter */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">作品集</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Category Banner */}
              <div className={`aspect-video bg-gradient-to-br ${categoryGradients[project.category] ?? 'from-primary/10 to-primary/20'} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-foreground/30">{project.category}</span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="pt-4 border-t border-border space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <p key={i} className="text-xs text-foreground/60 flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      {achievement}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
