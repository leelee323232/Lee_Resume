'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-8xl font-black text-foreground/10">!</p>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">發生了一些問題</h1>
          <p className="text-foreground/50 text-sm leading-relaxed">
            頁面載入時發生錯誤，請嘗試重新整理。
          </p>
        </div>
        <button
          onClick={reset}
          className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
        >
          重新嘗試
        </button>
      </div>
    </main>
  )
}
