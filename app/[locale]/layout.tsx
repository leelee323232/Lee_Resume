import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }]
}

const langMap: Record<string, string> = { en: 'en', ja: 'ja' }

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const lang = langMap[locale] ?? 'en'

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='${lang}'` }} />
      <div className={locale === 'ja' ? notoSansJP.className : undefined}>
        {children}
      </div>
    </>
  )
}
