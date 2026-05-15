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
    <section className="py-16 px-4 md:px-8 bg-secondary/5 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">競賽與提案</h2>
        <div className="space-y-10">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{comp.title}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{comp.organizer}</p>
                </div>
                <div className="flex flex-col items-end gap-1 ml-4 flex-shrink-0">
                  <span className="text-sm text-foreground/50 whitespace-nowrap">{comp.period}</span>
                  <span className="text-xs text-primary/70">{comp.award}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {comp.details.map((detail, idx) => (
                  <li key={idx} className="text-foreground/70 flex items-start">
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
