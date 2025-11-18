import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '李科邑 - 區塊鏈教育者與永續推動者',
  description: '專注於區塊鏈教育、研究與永續推動的個人履歷與作品集。區塊鏈社課講者、活動企劃主持人、ESG 永續研究社創立者。',
  keywords: ['區塊鏈', '教育', '永續', '研究', '李科邑'],
  openGraph: {
    title: '李科邑 - 區塊鏈教育者與永續推動者',
    description: '專注於區塊鏈教育、研究與永續推動的個人履歷與作品集',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
