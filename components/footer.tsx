"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language.tsx"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <Image
                src="/icon_red.png"
                alt="ATLAS Agency Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-lg sm:text-xl">ATLAS Agency</span>
            </Link>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">{t.footer.services}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t.services.visual.title}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t.services.web.title}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t.services.combo.title}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">{t.footer.company}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t.footer.ourTeam}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t.footer.careers}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t.footer.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">{t.footer.support}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t.footer.faq}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t.footer.termsOfService}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground text-sm sm:text-base">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}