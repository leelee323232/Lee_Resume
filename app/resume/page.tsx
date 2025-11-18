import Navigation from '@/components/navigation'
import ResumeHeader from '@/components/resume/resume-header'
import BlockchainCourses from '@/components/resume/blockchain-courses'
import EventPlanning from '@/components/resume/event-planning'
import ResearchProjects from '@/components/resume/research-projects'
import ESGSociety from '@/components/resume/esg-society'
import EntrepreneurshipExperience from '@/components/resume/entrepreneurship-experience'
import Footer from '@/components/footer'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navigation />
      <ResumeHeader />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-16">
        <BlockchainCourses />
        <EventPlanning />
        <ResearchProjects />
        <ESGSociety />
        <EntrepreneurshipExperience />
      </div>
      <Footer />
    </main>
  )
}
