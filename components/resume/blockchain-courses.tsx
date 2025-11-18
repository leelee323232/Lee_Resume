export default function BlockchainCourses() {
  const courses = [
    {
      title: '東吳區塊鏈研究社社課講者',
      duration: '兩年',
      details: [
        '基礎八堂課課程規劃（給零基礎學生）',
        '教學內容：鏈上操作、Dapp、Kaspa、錢包、智能合約概念',
        '重新設計課程教材（三小時形式）',
      ],
    },
  ]

  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
        01. 區塊鏈社課程經歷
      </h2>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-primary font-medium">{course.duration}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {course.details.map((detail, idx) => (
                <li key={idx} className="text-foreground/80 flex gap-3">
                  <span className="text-primary/60 flex-shrink-0">→</span>
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
