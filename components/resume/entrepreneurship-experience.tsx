export default function EntrepreneurshipExperience() {
  const experience = [
    {
      title: '智能睡眠抱枕產品開發',
      features: ['呼吸節奏', '溫控', '晶片'],
    },
  ]

  const activities = [
    '創業企劃書撰寫',
    '參賽與簡報（Pitch）',
    '區塊鏈教育課程商品化',
  ]

  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
        05. 創業與比賽經歷
      </h2>
      <div className="space-y-6">
        {experience.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border"
          >
            <h3 className="text-xl font-medium text-foreground mb-4">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="p-8 rounded-3xl bg-card border border-border">
          <h4 className="text-lg font-medium text-foreground mb-4">相關活動</h4>
          <ul className="space-y-2">
            {activities.map((activity, idx) => (
              <li key={idx} className="text-foreground/80 flex gap-3">
                <span className="text-primary/60 flex-shrink-0">✓</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
