export default function EventPlanning() {
  const events = [
    {
      title: '2024 區塊鏈聖誕派對主企劃',
      type: '跨校合辦',
      details: [
        '多社聯合社團卡活動企劃與設計',
        '與北科大區塊鏈社合作之跨校活動',
        '區塊鏈推廣相關活動策劃與場控',
      ],
    },
  ]

  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
        02. 活動企劃與主辦經歷
      </h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border hover:border-secondary/30 transition-all hover:shadow-lg hover:shadow-secondary/10"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-secondary font-medium">{event.type}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {event.details.map((detail, idx) => (
                <li key={idx} className="text-foreground/80 flex gap-3">
                  <span className="text-secondary/60 flex-shrink-0">→</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
