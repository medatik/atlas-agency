"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  t: any
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32">
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-primary">{t.hero.title}</span>
                <br />
                <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {t.hero.subtitle}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{t.hero.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const servicesSection = document.getElementById("services")
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-background/80 backdrop-blur-sm text-foreground border-primary/20 hover:bg-background/90 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/30 shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Creative Agency Hero"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Enhanced floating elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/30 blur-xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 -left-8 h-16 w-16 rounded-full bg-primary/10 blur-lg animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
