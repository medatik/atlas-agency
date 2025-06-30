"use client"

import { useState, useRef, useEffect } from "react"
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
  const menuRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
    { href: "/components", label: t.nav.components },
  ]

  // Focus management for mobile menu
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector('button, a') as HTMLElement
      firstFocusable?.focus()
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

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
      if (element instanceof HTMLElement) {
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
    <nav 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer rtl:space-x-reverse focus-visible:ring-1 focus-visible:ring-primary rounded-md px-2 py-1"
            aria-label="Go to homepage"
          >
            <img src="/icon_red.png" alt="ATLAS Agency Logo" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-xl hidden sm:inline">ATLAS Agency</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center space-x-6 ${locale === 'ar' ? 'rtl:space-x-reverse' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full nav-link focus-visible:ring-1 focus-visible:ring-primary rounded-md px-2 py-1"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Sign In/Up Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse">
            <SignInDialog>
              <Button variant="ghost" size="sm" className="text-sm focus-visible:ring-1 focus-visible:ring-primary">
                <LogIn className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" aria-hidden="true" />
                {t.auth?.signIn || 'Sign In'}
              </Button>
            </SignInDialog>
            <SignUpDialog>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm focus-visible:ring-1 focus-visible:ring-primary">
                <UserPlus className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" aria-hidden="true" />
                {t.auth?.signUp || 'Sign Up'}
              </Button>
            </SignUpDialog>
          </div>

          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden focus-visible:ring-1 focus-visible:ring-primary" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden border-t bg-background/95 backdrop-blur"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 rounded-md px-2 focus-visible:ring-1 focus-visible:ring-primary ${
                  locale === 'ar' ? 'text-right' : 'text-left'
                }`}
                role="menuitem"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}

            {/* Sign In/Up Buttons - Mobile */}
            <div className="pt-4 border-t flex flex-col items-center gap-2">
              <SignInDialog>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full max-w-[200px] justify-center focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <LogIn className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} aria-hidden="true" />
                  {t.auth?.signIn || 'Sign In'}
                </Button>
              </SignInDialog>
              <SignUpDialog>
                <Button 
                  size="sm" 
                  className="w-full max-w-[200px] bg-primary hover:bg-primary/90 justify-center focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <UserPlus className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} aria-hidden="true" />
                  {t.auth?.signUp || 'Sign Up'}
                </Button>
              </SignUpDialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}