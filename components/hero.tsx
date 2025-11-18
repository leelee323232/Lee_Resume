export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Main Name - Large and clean */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-light text-foreground text-balance tracking-tight">
              李科邑
            </h1>

            <div className="space-y-3">
              <p className="text-lg md:text-xl text-primary font-light">
                區塊鏈教育者
              </p>
              <p className="text-lg md:text-xl text-secondary font-light">
                活動企劃與社團領導者
              </p>
              <p className="text-lg md:text-xl text-accent font-light">
                ESG 永續推動者
              </p>
              <p className="text-lg md:text-xl text-foreground/60 font-light">
                資料研究與專案執行者
              </p>
            </div>
          </div>

          {/* Professional summary */}
          <div className="pt-8 border-t border-border">
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
              專注於區塊鏈教育、研究與永續推動，探索科技與社會價值的交會點。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
