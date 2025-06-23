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
  const { t } = useLanguage()

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
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // Handle smooth scrolling for anchor links
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="h-8 w-8 rounded-full bg-primary shadow-md"></div>
          <span className="font-bold text-xl">Creative Agency</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          {/* Sign In/Up Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2 mr-2">
            <SignInDialog>
              <Button variant="ghost" size="sm" className="text-sm">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </SignInDialog>
            <SignUpDialog>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm">
                <UserPlus className="mr-2 h-4 w-4" />
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
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 rounded-md px-2"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            ))}

            {/* Sign In/Up Buttons - Mobile */}
            <div className="pt-4 border-t space-y-2">
              <SignInDialog>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </SignInDialog>
              <SignUpDialog>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  <UserPlus className="mr-2 h-4 w-4" />
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
