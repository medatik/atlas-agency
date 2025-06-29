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
import { ErrorBoundary } from "@/components/ui/errorBoundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creative Agency - Visual Identity & Web Development",
  description: "Professional visual identity creation and web development services",
  generator: 'v0.dev',
  keywords: ['creative agency', 'visual identity', 'web development', 'branding', 'logo design'],
  authors: [{ name: 'ATLAS Agency' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: { lang?: string };
}) {
  const dir = params?.lang === "ar" ? "rtl" : "ltr";
  const lang = params?.lang || "en";
  
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <LanguageProvider>
            <ThemeProvider 
              attribute="class" 
              defaultTheme="light" 
              enableSystem={true} 
              disableTransitionOnChange={false}
            >
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navigation />
                <main role="main">{children}</main>
                <Footer />
                <ScrollToTop />
                <Toaster />
              </div>
            </ThemeProvider>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}