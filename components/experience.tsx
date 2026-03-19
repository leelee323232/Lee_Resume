import { Briefcase, Star } from 'lucide-react'

export default function Experience() {
  const workExperiences = [
    {
      title: '區塊鏈研究實習生',
      company: '博士旺創新股份有限公司',
      period: '2024 - 至今',
      details: []
    },
    {
      title: '財務',
      company: 'uCup 杯特股份有限公司',
      period: '2024 - 至今',
      details: []
    },
    {
      title: 'Bybit 校園大使',
      company: 'Bybit',
      period: '2024 - 至今',
      details: []
    },
    {
      title: '暑期實習 永續實習生',
      company: '思綴有限公司',
      period: '2025',
      details: []
    },
  ]

  const campusExperiences = [
    {
      title: '東吳ESG永續發展研究社 - 創社社長',
      company: '東吳大學',
      period: '2023 - 至今',
      details: [
        '創立東吳首個永續發展相關研究社團',
        '設定社團願景，結合聯合國SDGs目標',
        '企劃並執行永續推廣活動與課程推廣',
      ]
    },
    {
      title: '東吳區塊鏈研究社 - 社長',
      company: '東吳大學',
      period: '2022 - 至今',
      details: [
        '規劃設計基礎八堂區塊鏈課程，教授零基礎學生',
        '教學內容涵蓋鏈上操作、DApp、Kaspa、錢包與智能合約概念',
        '重新設計課程教材為三小時形式，提升教學效率',
      ]
    },
    {
      title: '東吳登山社 - 副社長',
      company: '東吳大學',
      period: '2023',
      details: [
        '登山社過夜嚮導',
        '開設登山過夜隊伍',
      ]
    },
    {
      title: '東吳鏈愛節市集 - 負責人',
      company: '跨社團聯合',
      period: '2024年3月、2025年3月',
      details: [
        '與校內多社團聯合企劃跨校活動',
        '負責招商、活動流程規劃與現場場控等',
        '成功舉辦吸引800+參與者的大型推廣活動',
      ]
    },
    {
      title: '東吳大學教學資源中心 - 開設微課程',
      company: '東吳大學',
      period: '2023、2025',
      details: [
        '「從零開始學習區塊鏈」微課程',
        '↳為東吳教學資源中心首次與社團合作開立課程，為後續募課微課程打造新典範',
        '「Move 智能合約工作坊」微課程',
        '↳為台灣首見由大學開設之一系列專業 Move 智能合約課程，內容涵蓋 Move 語言基礎、智能合約開發與實際部署',
      ]
    },
    {
      title: '東吳大學教學資源中心 - 微課程授課老師',
      company: '東吳大學',
      period: '2023 - 2026',
      details: [
        '「區塊鏈X永續發展」微課程授課講師',
        '「鏈上視界：用數據探索區塊鏈」微課程授課講師',
        '「實質資產代幣化系列課程」微課程授課講師',
        '「綠色生活實驗室」微課程授課講師',
      ]
    },
    {
      title: '2025 PSBH 國際問題解決松全球挑戰賽 助教',
      company: '東吳大學生涯發展中心',
      period: '2025',
      details: [
        '指導隊伍取得社會創新組 佳作',
      ]
    },
    {
      title: '114年大專優秀青年代表',
      company: '青年救國團',
      period: '2025',
      details: []
    },
  ]

  const renderCards = (list: typeof workExperiences) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {list.map((exp, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground leading-snug">{exp.title}</h3>
              {exp.company && (
                <p className="text-sm text-primary font-medium mt-1">{exp.company}</p>
              )}
            </div>
            <span className="text-xs text-foreground/40 whitespace-nowrap ml-3 mt-0.5 font-medium">{exp.period}</span>
          </div>
          {exp.details.length > 0 && (
            <ul className="space-y-1.5 mt-3 pt-3 border-t border-border">
              {exp.details.map((detail, i) => {
                const isSub = detail.startsWith('↳')
                const text = isSub ? detail.slice(1) : detail
                return (
                  <li key={i} className="text-sm text-foreground/60 flex items-baseline gap-2">
                    {isSub
                      ? <span className="w-3 flex-shrink-0" />
                      : <span className="text-primary flex-shrink-0">•</span>
                    }
                    <span>{text}</span>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-primary/10">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">工作經驗</h2>
          </div>
          {renderCards(workExperiences)}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-primary/10">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">經驗與成就</h2>
          </div>
          {renderCards(campusExperiences)}
        </div>
      </section>
    </>
  )
}
