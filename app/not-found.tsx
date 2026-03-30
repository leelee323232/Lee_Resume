import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-8xl font-black text-foreground/10">404</p>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">找不到此頁面</h1>
          <p className="text-foreground/50 text-sm leading-relaxed">
            你要找的頁面不存在，可能已被移除或網址輸入有誤。
          </p>
        </div>
        <div className="flex gap-3 justify-center pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            回到履歷
          </Link>
          <Link
            href="/portfolio"
            className="px-5 py-2.5 bg-muted text-foreground rounded-xl text-sm font-medium hover:bg-muted/80 transition-colors duration-200"
          >
            查看作品集
          </Link>
        </div>
      </div>
    </main>
  )
}
