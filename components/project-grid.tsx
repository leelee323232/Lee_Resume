'use client'

import { useState } from 'react'

const categoryStyles: Record<string, { border: string; badge: string; dot: string }> = {
  '創業項目': { border: 'border-t-rose-500',   badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',   dot: 'bg-rose-500' },
  '學術研究': { border: 'border-t-emerald-500', badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', dot: 'bg-emerald-500' },
  '教育科技': { border: 'border-t-blue-500',   badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',   dot: 'bg-blue-500' },
  '社團領導': { border: 'border-t-green-500',  badge: 'bg-green-500/10 text-green-600 dark:text-green-400',  dot: 'bg-green-500' },
  '實習經歷': { border: 'border-t-violet-500', badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400', dot: 'bg-violet-500' },
  '活動企劃': { border: 'border-t-orange-500', badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400', dot: 'bg-orange-500' },
}

export default function ProjectGrid() {
  const projects = [
    // ── 創業 ──────────────────────────────────────
    {
      id: 'carcons',
      title: 'Carcons 碳盤查 AI 平台',
      category: '創業項目',
      role: '共同創辦人 & 技術負責人',
      period: '2024 - 至今',
      highlight: { value: '5+', label: '競賽決賽入圍' },
      description: '主導開發以 AI 為核心的碳排放預測平台，協助企業依照 ISO 14064-1 標準完成碳盤查數據蒐集、分類與報告生成。曾赴思綴有限公司進行暑期永續實習，深化碳盤查實戰能力，並將實務知識融入平台開發。目標打造讓中小企業低門檻完成碳揭露的 SaaS 工具。',
      tags: ['AI 碳預測', 'ISO 14064-1', 'ESG', 'SaaS', 'Python', '新創'],
      achievements: [
        '長庚大學青年老闆築夢計畫 — 最佳潛力獎',
        '臺師大創業競技場 — 優選隊伍',
        '數發部 AIGO 淬煉實戰盃 — 決賽隊伍',
        '第 7 屆和泰公益夢想家 — 榮譽獎',
        '桃園社企競賽第十屆尤努斯獎 — 決選隊伍',
      ]
    },
    {
      id: 'moodnicate',
      title: 'Moodnicate',
      category: '創業項目',
      role: '共同創辦人',
      period: '2025 - 至今',
      highlight: { value: '零風險', label: 'AI 模擬訓練環境' },
      description: '心理師與社會工作者的養成教育長期面臨學術訓練與臨床實務之間的「經驗斷層」——受訓者在進入真實服務場域前，缺乏足夠的高難度情境練習機會。Moodnicate 旨在透過 AI 技術建立大規模、可自定義的個案資料庫，為受訓者創造「零風險」的模擬練習環境，針對非典型個案或高難度情境進行反覆預演，確保在真實服務中展現成熟且精準的專業判斷能力。',
      tags: ['AI', '心理健康', '社工教育', '模擬訓練', 'EdTech', '新創'],
      achievements: [
        '解決心理師與社工師養成的臨床實務斷層',
        'AI 個案模擬資料庫系統開發中',
      ]
    },
    // ── 學術研究 ──────────────────────────────────
    {
      id: 'research',
      title: '學術研究計畫',
      category: '學術研究',
      role: '計畫成員 & 研究助教',
      period: '2023 - 2026',
      highlight: { value: '4 項', label: '政府補助研究計畫' },
      description: '參與多項政府補助學術研究計畫，橫跨國科會、教育部 USR 及高等教育深耕計畫，主題涵蓋區塊鏈教育推廣、AI 在家庭與社會服務的數位轉型應用，以及去中心化金融實務。透過跨校、跨領域的學術合作，將理論研究與實際教學場域相互結合，協助課程設計、文獻整理與成果展示。',
      tags: ['國科會', '教育部 USR', '區塊鏈教育', 'AI 應用', 'DeFi', '跨域研究'],
      achievements: [
        '國科會大專生研究計畫 — 區塊鏈推廣教育（2023）',
        '教育部 USR — AI家和數位轉型計畫 助教（2025-2026）',
        '教育部高等教育深耕 — 社工服務跨域教學（2026）',
        '國科會技專校院 — 去中心化金融應用實作 助教（2026）',
      ]
    },
    // ── 教育科技 ──────────────────────────────────
    {
      id: 'move-workshop',
      title: 'Move 智能合約工作坊',
      category: '教育科技',
      role: '課程規劃者 & 主講師',
      period: '2025',
      highlight: { value: '全台首創', label: '大學 Move 智能合約課程' },
      description: '設計並主講全台首見由大學正式開設的 Move 智能合約系列微課程。課程內容涵蓋 Move 語言語法基礎、Aptos / Sui 生態介紹、智能合約邏輯設計，以及實際合約部署操作，讓學生在完課後具備獨立撰寫與發布合約的能力。課程成果受邀於 2025 第二屆創想盃全國大專院校創新提案競賽中對外分享推廣。',
      tags: ['Move 語言', 'Aptos', 'Sui', '智能合約', '微課程', '講師'],
      achievements: [
        '全台首創大學正式開設 Move 課程',
        '東吳大學教學資源中心正式課程',
        '舉辦 2025 第二屆創想盃全國競賽',
      ]
    },
    {
      id: 'web3-course',
      title: '人本AI研究中心 Web3 區塊鏈專業知識培養系列課程',
      category: '教育科技',
      role: '課程共同創設者 & 講師',
      period: '2025',
      highlight: { value: '3 級', label: '初中高階證書設計' },
      description: '與東吳大學人本AI研究中心合作，共同創設「Web3 區塊鏈專業知識培養系列課程」，將區塊鏈技術與人本 AI 理念結合，系統性培養學生在 Web3 領域的專業知識與實作能力。課程涵蓋區塊鏈基礎、金融、去中心化應用等核心主題，打造東吳區塊鏈影響力。課程含初級、中級、高級證書設計，為學生打造完整的區塊鏈學習路徑。',
      tags: ['Web3', '區塊鏈', '人本AI', '系列課程', '校方合作', '講師'],
      achievements: [
        '與東吳大學人本AI研究中心正式合作',
        '建立 Web3 區塊鏈專業知識培養系列課程',
        '課程資訊收錄於人本AI研究中心官方網站',
      ]
    },
    {
      id: 'micro-courses',
      title: '微課程系列授課',
      category: '教育科技',
      role: '微課程授課講師',
      period: '2023 - 2026',
      highlight: { value: '4 門', label: '跨域微課程授課' },
      description: '與東吳大學教學資源中心長期合作，擔任多門跨領域微課程主講師，將區塊鏈、永續發展與資料分析整合為適合大學生的課程內容。四門課程方向各異，涵蓋技術入門、ESG 理念、鏈上數據分析與實質資產代幣化（RWA）前沿應用，反映對科技與永續議題的跨域整合能力。',
      tags: ['ESG', 'RWA', '鏈上數據', '永續發展', '跨域教學'],
      achievements: [
        '「區塊鏈 × 永續發展」微課程',
        '「鏈上視界：用數據探索區塊鏈」微課程',
        '「實質資產代幣化系列課程」微課程',
        '「綠色生活實驗室」微課程',
      ]
    },
    // ── 社團領導 ──────────────────────────────────
    {
      id: 'blockchain-club',
      title: '東吳區塊鏈研究社',
      category: '社團領導',
      role: '社長',
      period: '2022 - 2025',
      highlight: { value: '100+', label: '學生累計受益' },
      description: '從零規劃東吳區塊鏈研究社完整教學體系，設計系統化八堂社課，帶領零基礎學生從基礎概念到鏈上實作，涵蓋錢包操作、DApp、Kaspa 生態與智能合約概念。後與東吳教學資源中心合作，將課程升級為正式微課程「從零開始學習區塊鏈」，為教學資源中心首次與學生社團合作開立課程，開創後續募課微課程新典範。同期獲國科會大專生研究計畫補助，針對區塊鏈在校園教育的推廣與應用進行深入研究。',
      tags: ['課程設計', '區塊鏈', '零基礎教學', 'DApp', 'Kaspa', '微課程'],
      achievements: [
        '100+ 學生累計受益',
        '8 堂結構化社課體系',
        '東吳教學資源中心首創社團合作微課程',
        '國科會大專生研究計畫獲補助（2023）',
      ]
    },
    {
      id: 'esg-society',
      title: '東吳ESG 永續發展研究社',
      category: '社團領導',
      role: '創社社長',
      period: '2023 - 至今',
      highlight: { value: '114年', label: '大專優秀青年代表' },
      description: '創立東吳大學首個以永續發展為主題的研究型學生社團。設定以聯合國 17 項 SDGs 為核心框架的社團願景，帶領成員從校園出發實踐永續行動。與教學資源中心合作開設「綠色生活實驗室」微課程，並協助推動 2025 PSBH 國際問題解決松全球挑戰賽，指導隊伍取得社會創新組佳作。社團影響力獲認可，本人榮獲 114 年全國大專優秀青年代表。',
      tags: ['SDGs', '社團創立', '永續推廣', '領導力', '校園社會責任'],
      achievements: [
        '東吳首個永續發展研究社團',
        '2025 PSBH 國際挑戰賽永續議題指導佳作',
        '114 年全國大專優秀青年代表',
      ]
    },
    // ── 實習經歷 ──────────────────────────────────
    {
      id: 'bosswang',
      title: '博士旺創新 區塊鏈研究',
      category: '實習經歷',
      role: '區塊鏈研究實習生',
      period: '2024 - 至今',
      highlight: { value: '5 國', label: '區塊鏈法規比較研究' },
      description: '以研究型實習身份加入博士旺創新股份有限公司，主要負責三大方向：一、深入研究 MPC（多方安全計算）錢包架構與門檻簽章機制的技術原理及安全性分析；二、獨立完成公司中文官方網站的設計與製作；三、系統性蒐集並比較美國、歐盟、日本、新加坡、台灣等多國現行區塊鏈及數位資產相關法規，產出法規比較分析報告。',
      tags: ['MPC 錢包', '門檻簽章', 'Web 開發', '區塊鏈法規', '研究報告'],
      achievements: [
        'MPC 錢包技術研究與安全性分析',
        '公司中文官網獨立完成',
        '五國區塊鏈法規比較分析報告',
      ]
    },
    {
      id: 'ucup',
      title: 'uCup 杯特',
      category: '實習經歷',
      role: '財務',
      period: '2024 - 至今',
      highlight: { value: '財務', label: '新創資金規劃管理' },
      description: '加入 uCup 杯特股份有限公司擔任財務職務，負責公司日常財務管理與資金運用規劃，協助團隊建立財務制度與現金流監控機制，確保公司營運資金的有效配置。',
      tags: ['財務管理', '資金規劃', '新創財務', '現金流'],
      achievements: [
        '公司財務管理制度建立',
        '資金運用規劃執行',
      ]
    },
    // ── 活動企劃 ──────────────────────────────────
    {
      id: 'chain-festival',
      title: '東吳鏈愛節',
      category: '活動企劃',
      role: '總負責人',
      period: '2024年3月、2025年3月',
      highlight: { value: '800+', label: '兩屆累計參與人數' },
      description: '連續兩屆策劃並執行東吳大學最大規模跨社團區塊鏈主題市集。整合區塊鏈研究社、ESG 永續研究社等多個社團，負責全程招商談判、講者邀請、動線設計、宣傳策略與現場場控。第一屆聚焦區塊鏈教育普及，第二屆以「區塊鏈 × 遊戲應用」為主題深化推廣深度，並獲東吳大學官方新聞及電子報報導。',
      tags: ['活動策劃', '跨社團整合', '招商談判', '場控', '社群推廣'],
      achievements: [
        '兩屆累計 800+ 參與者',
        '東吳大學校方官方新聞報導（2024）',
        '東吳大學電子報報導（2025）',
      ]
    },
  ]

  const categories = ['全部', ...new Set(projects.map(p => p.category))]
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredProjects = selectedCategory === '全部'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">作品集</h2>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-foreground text-background'
                    : 'text-foreground/50 hover:text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, index) => {
            const style = categoryStyles[project.category] ?? { border: 'border-t-primary', badge: 'bg-primary/10 text-primary', dot: 'bg-primary' }
            return (
              <div
                key={index}
                id={project.id}
                className={`group flex flex-col bg-card border border-border border-t-4 ${style.border} rounded-2xl p-7 hover:shadow-md transition-all duration-300`}
              >
                {/* Top row: badge + period */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${style.badge}`}>
                    {project.category}
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
