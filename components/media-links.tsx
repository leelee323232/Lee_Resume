export default function MediaLinks() {
  const mediaItems = [
    { 
      title: '媒體採訪 1', 
      description: 'Placeholder - 更換為實際連結',
      href: '#',
      icon: '📰'
    },
    { 
      title: '媒體採訪 2', 
      description: 'Placeholder - 更換為實際連結',
      href: '#',
      icon: '📻'
    },
    { 
      title: '媒體採訪 3', 
      description: 'Placeholder - 更換為實際連結',
      href: '#',
      icon: '📺'
    },
  ]

  return (
    <section id="media" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-balance">
          媒體採訪與外部連結
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="text-accent text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
              <h3 className="text-base font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/60">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
