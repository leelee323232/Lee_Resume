export default function Competitions() {
  const competitions = [
    {
      title: '第七屆全國大專校院「Healthy × Happy」創新創業競賽',
      award: '佳作',
      organizer: '',
      period: '2023',
      details: [],
    },
    {
      title: '東吳大學第四屆創新融合永續實踐競賽',
      award: '創新構想獎',
      organizer: '東吳大學',
      period: '2024',
      details: [],
    },
    {
      title: '長庚大學 2025 青年老闆築夢計畫創新創業競賽',
      award: '最佳潛力獎',
      organizer: '長庚大學',
      period: '2025',
      details: [],
    },
    {
      title: '2025 臺師大創業競技場',
      award: '優選隊伍',
      organizer: '國立臺灣師範大學',
      period: '2025',
      details: [],
    },
    {
      title: '2025 年數發部 AIGO 淬煉實戰盃競賽',
      award: '決賽隊伍',
      organizer: '數位部',
      period: '2025',
      details: [],
    },
    {
      title: '桃園社會企業創業競賽暨第十屆尤努斯獎【社會企業組】',
      award: '決選隊伍',
      organizer: '',
      period: '2025',
      details: [],
    },
    {
      title: '2025 第四屆新竹 AIoT 加速器',
      award: '決選隊伍',
      organizer: '新竹 AIoT 加速器',
      period: '2025',
      details: [],
    },
    {
      title: '第 7 屆和泰公益夢想家',
      award: '榮譽獎',
      organizer: '和泰汽車',
      period: '2025',
      details: [],
    },
    {
      title: '2025 AI 時代：校園智慧創新黑客松競賽',
      award: '參獎',
      organizer: '',
      period: '2025',
      details: [],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">競賽與提案</h2>
        <div className="relative">
          {/* 時間軸線 */}
          <div className="absolute left-16 md:left-20 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {competitions.map((comp, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8">
                {/* 年份 */}
                <div className="w-16 md:w-20 flex-shrink-0 pt-4 text-right">
                  <span className="text-xs font-medium text-foreground/40">{comp.period}</span>
                </div>

                {/* 時間軸節點 */}
                <div className="relative flex-shrink-0 flex items-start pt-5">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/30" />
                </div>

                {/* 內容卡片 */}
                <div className="flex-1 pb-2">
                  <div className="bg-card rounded-2xl p-5 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {comp.title}
                      </h3>
                      {/* 獎項 — 主視覺 */}
                      <span className="flex-shrink-0 self-start px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold whitespace-nowrap">
                        {comp.award}
                      </span>
                    </div>
                    {comp.organizer && (
                      <p className="text-sm text-foreground/50 mb-2">{comp.organizer}</p>
                    )}
                    {comp.details.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {comp.details.map((detail, idx) => (
                          <li key={idx} className="text-foreground/70 flex items-start text-sm">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
