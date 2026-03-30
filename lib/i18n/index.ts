import { zh } from './content/zh'
import { en } from './content/en'
import { ja } from './content/ja'

export type Locale = 'zh' | 'en' | 'ja'
export type CategoryKey = 'startup' | 'research' | 'edtech' | 'club' | 'internship' | 'event'
export type SiteContent = typeof zh

export const locales: Locale[] = ['zh', 'en', 'ja']

export function getContent(locale: Locale): SiteContent {
  switch (locale) {
    case 'en': return en as unknown as SiteContent
    case 'ja': return ja as unknown as SiteContent
    default:   return zh
  }
}

/** Returns the base path for a given locale (zh lives at root). */
export function localePath(locale: Locale, path: '/' | '/portfolio'): string {
  if (locale === 'zh') return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

export { zh, en, ja }
