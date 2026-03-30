'use client'

import { useState } from 'react'
import type { SiteContent, CategoryKey } from '@/lib/i18n'

const categoryStyles: Record<CategoryKey, { border: string; badge: string; dot: string }> = {
  startup:    { border: 'border-t-rose-500',    badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',       dot: 'bg-rose-500' },
  research:   { border: 'border-t-emerald-500', badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', dot: 'bg-emerald-500' },
  edtech:     { border: 'border-t-blue-500',    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',       dot: 'bg-blue-500' },
  club:       { border: 'border-t-green-500',   badge: 'bg-green-500/10 text-green-600 dark:text-green-400',    dot: 'bg-green-500' },
  internship: { border: 'border-t-violet-500',  badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400', dot: 'bg-violet-500' },
  event:      { border: 'border-t-orange-500',  badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400', dot: 'bg-orange-500' },
}

interface ProjectGridProps {
  content: SiteContent['portfolio']
}

export default function ProjectGrid({ content }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | 'all'>('all')

  const filterButtons = [
    { key: 'all' as const, label: content.allLabel },
    ...Object.entries(content.categories).map(([key, label]) => ({
      key: key as CategoryKey,
      label,
    })),
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? content.projects
      : content.projects.filter((p) => p.categoryKey === selectedCategory)

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{content.heading}</h2>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === key
                    ? 'bg-foreground text-background'
                    : 'text-foreground/50 hover:text-foreground hover:bg-muted'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, index) => {
            const style = categoryStyles[project.categoryKey] ?? { border: 'border-t-primary', badge: 'bg-primary/10 text-primary', dot: 'bg-primary' }
            const categoryLabel = content.categories[project.categoryKey] ?? project.categoryKey
            return (
              <div
                key={index}
                id={project.id}
                className={`group flex flex-col bg-card border border-border border-t-4 ${style.border} rounded-2xl p-7 hover:shadow-md transition-all duration-300`}
              >
                {/* Top row: badge + period */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${style.badge}`}>
                    {categoryLabel}
                  </span>
                  <span className="text-xs text-foreground/35 font-medium">{project.period}</span>
                </div>

                {/* Title + Role */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/45 font-medium mb-5">{project.role}</p>

                {/* Description */}
                <p className="text-sm text-foreground/65 leading-relaxed mb-6 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs bg-muted text-foreground/60 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="border-t border-border pt-5 space-y-2.5">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`} />
                      <span className="text-xs text-foreground/55 leading-relaxed">{achievement}</span>
                    </div>
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
