import { Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-foreground">© 2025 李科邑</p>
            <p className="text-xs text-foreground/50 mt-2 space-x-2">
              <span>區塊鏈教育者</span>
              <span className="text-foreground/30">•</span>
              <span>永續推動者</span>
              <span className="text-foreground/30">•</span>
              <span>活動企劃者</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@example.com"
              className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              contact@example.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
