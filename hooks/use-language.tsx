// This file was renamed from use-language.ts to use-language.tsx to support JSX syntax.
"use client"

import React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Locale, getTranslation } from "@/lib/i18n"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && ["en", "fr", "ar"].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("locale", locale)
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

  const t = getTranslation(locale)

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
