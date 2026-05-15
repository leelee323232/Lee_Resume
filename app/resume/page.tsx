import { Noto_Sans_TC } from "next/font/google"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { zh } from "@/lib/i18n"

const notoSansTC = Noto_Sans_TC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function ResumePage() {
  return (
    <main className={`min-h-screen bg-background ${notoSansTC.className}`}>
      <Navigation locale="zh" content={zh.nav} />

      {/* Resume Content */}
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">{zh.hero.name}</h1>
              <p className="text-xl text-foreground/60 font-medium">{zh.hero.title}</p>
              <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
                {zh.hero.description}
              </p>
            </div>

            {/* Experience & Education */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{zh.experience.workHeading}</h2>
              <div className="space-y-6">
                {zh.experience.work.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.company}</p>
                    <p className="text-xs text-foreground/50 mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{zh.education.heading}</h2>
              <div className="space-y-6">
                {zh.education.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-6 py-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.school}</h3>
                    <p className="text-sm text-primary font-medium">{item.degree}</p>
                    <p className="text-xs text-foreground/50 mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{zh.skills.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {zh.skills.groups.map((group, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                    <p className="text-sm font-semibold text-primary mb-3">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer content={zh.footer} />
    </main>
  )
}
