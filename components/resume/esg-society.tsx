export default function ESGSociety() {
  const highlights = [
    '創立東吳 ESG 永續研究社',
    '設立理念與願景（結合 SDGs）',
    '永續推廣活動企劃',
    '成立大會連署活動',
  ]

  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
        04. ESG 永續研究社創立
      </h2>
      <div className="p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-foreground/80 mb-6">
              從零開始創立東吳大學第一個以 ESG 與永續發展為主題的研究社團，致力於推動永續理念和實踐。
            </p>
          </div>
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-foreground/80">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
