"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { SignInDialog } from "@/components/auth/sign-in-dialog"
import { SignUpDialog } from "@/components/auth/sign-up-dialog"
import { Menu, X, LogIn, UserPlus } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale } = useLanguage()

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
    { href: "/components", label: t.nav.components },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    // Handle home navigation
    if (href === "/") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        window.location.href = "/"
      }
      return
    }

    // Handle components page navigation
    if (href === "/components") {
      if (window.location.pathname !== "/components") {
        window.location.href = "/components"
      }
      return
    }

    // Handle smooth scrolling for anchor links on home page
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href
        return
      }
      
      // We're on the home page, scroll to the section
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 80 // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({ 
          top: elementPosition, 
          behavior: "smooth" 
        })
      }
    }
  }

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.location.href = "/"
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer rtl:space-x-reverse"
        >
          <img src="/icon_red.png" alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-xl hidden sm:inline">ATLAS Agency</span>
        </button>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center space-x-6 ${locale === 'ar' ? 'rtl:space-x-reverse' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          {/* Sign In/Up Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2 mr-2 rtl:space-x-reverse rtl:ml-2 rtl:mr-0">
            <SignInDialog>
              <Button variant="ghost" size="sm" className="text-sm">
                <LogIn className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                Sign In
              </Button>
            </SignInDialog>
            <SignUpDialog>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm">
                <UserPlus className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                Sign Up
              </Button>
            </SignUpDialog>
          </div>

          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 rounded-md px-2 ${
                  locale === 'ar' ? 'text-right' : 'text-left'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Sign In/Up Buttons - Mobile */}
            <div className="pt-4 border-t space-y-2">
              <SignInDialog>
                <Button variant="ghost" size="sm" className="w-full justify-start rtl:justify-end">
                  <LogIn className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                  Sign In
                </Button>
              </SignInDialog>
              <SignUpDialog>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  <UserPlus className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                  Sign Up
                </Button>
              </SignUpDialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}