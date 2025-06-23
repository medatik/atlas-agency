"use client"

import { useLanguage } from "@/hooks/use-language"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <HeroSection t={t} />
      <ServicesSection t={t} />
      <AboutSection t={t} />
      <ContactSection t={t} />
    </div>
  )
}
