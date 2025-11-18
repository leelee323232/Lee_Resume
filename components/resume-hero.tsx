export default function ResumeHero() {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">李科邑</h1>
            <p className="text-xl text-foreground/70 font-medium">
              區塊鏈教育者｜永續推動者｜活動企劃者｜資料分析師
            </p>
          </div>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            專注於區塊鏈教育、資料科學與永續發展領域。以跨領域的視角，整合技術、教育與社會責任，推動區塊鏈技術的普及與應用。
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="mailto:contact@example.com"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              聯絡我
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 font-medium"
            >
              下載履歷
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
