import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/hooks/use-language"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creative Agency - Visual Identity & Web Development",
  description: "Professional visual identity creation and web development services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
            <div className="min-h-screen bg-background transition-colors duration-300">
              <Navigation />
              <main>{children}</main>
              <Footer />
              <ScrollToTop />
              <Toaster />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}