export default function Experience() {
  const experiences = [
    {
      title: '東吳區塊鏈研究社 - 社課講者',
      company: '東吳大學',
      period: '2022 - 至今',
      details: [
        '規劃設計基礎八堂區塊鏈課程，教授零基礎學生',
        '教學內容涵蓋鏈上操作、DApp、Kaspa、錢包與智能合約概念',
        '重新設計課程教材為三小時形式，提升教學效率'
      ]
    },
    {
      title: '2024 區塊鏈聖誕派對 - 主企劃',
      company: '跨校區塊鏈社團聯合',
      period: '2024年12月',
      details: [
        '與北科大區塊鏈社聯合企劃跨校活動',
        '負責場地選址、活動流程規劃與現場場控',
        '成功舉辦吸引300+參與者的大型推廣活動'
      ]
    },
    {
      title: 'ESG 永續研究社 - 創立者',
      company: '東吳大學',
      period: '2023 - 至今',
      details: [
        '創立東吳首個永續發展相關研究社團',
        '設定社團願景，結合聯合國SDGs目標',
        '企劃並執行永續推廣活動與成立大會連署'
      ]
    },
    {
      title: '資料科學項目 - 研究執行者',
      company: '東吳大學資管系',
      period: '2023 - 2024',
      details: [
        '執行「鐵達尼號資料分析」項目，應用 K-means 聚類重構',
        '主持「生涯適應力 × 生成式AI × 焦慮調節」跨領域研究設計',
        '建構機器學習模型進行數據分析與視覺化'
      ]
    },
    {
      title: '智能睡眠抱枕 - 產品開發',
      company: '創業項目',
      period: '2024',
      details: [
        '主導產品設計與功能規劃（呼吸節奏感測、溫控、晶片整合）',
        '撰寫完整創業企劃書，參加創業競賽',
        '進行產品Pitch簡報，獲得業界導師指導'
      ]
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary/5 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">經驗與成就</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{exp.company}</p>
                </div>
                <span className="text-sm text-foreground/50 whitespace-nowrap ml-4">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-foreground/70 flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
