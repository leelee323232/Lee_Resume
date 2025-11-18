export default function Education() {
  const education = [
    {
      school: '東吳大學',
      degree: '資訊管理學系',
      period: '2021 - 至今',
      details: '主修資訊管理、資料科學方向，GPA 3.8/4.0'
    },
    {
      school: '台北科技大學交換學生',
      degree: '計算機科學系',
      period: '2023 - 2024',
      details: '交換期間修習進階演算法、機器學習等課程'
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">教育背景</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="pb-8 border-b border-border last:border-0"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.school}</h3>
                  <p className="text-primary font-medium">{item.degree}</p>
                </div>
                <span className="text-sm text-foreground/50 whitespace-nowrap ml-4">{item.period}</span>
              </div>
              <p className="text-foreground/70">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
