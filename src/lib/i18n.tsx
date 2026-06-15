'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'zh'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // Restore saved preference after mount (avoids hydration mismatch)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'en' || saved === 'zh') setLangState(saved)
    } catch {}
  }, [])

  // Keep <html lang> in sync for a11y / typography
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en'
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {}
  }

  const toggle = () => setLang(lang === 'en' ? 'zh' : 'en')

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}

/** Pick a localized string; falls back to English when a translation is absent. */
export function pick(lang: Lang, en: string, zh?: string) {
  return lang === 'zh' && zh ? zh : en
}
