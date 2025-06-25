"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  t: any
}

export function HeroSection({ t }: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false)

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      const headerHeight = 80
      const elementPosition = servicesSection.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4 rtl:text-right">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-primary">{t.hero.title}</span>
                <br />
                <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  {t.hero.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {t.hero.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:justify-end">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex "
                onClick={scrollToServices}
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-background/80 backdrop-blur-sm text-foreground border-primary/20 hover:bg-primary/10 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/30 shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Creative Agency - Modern workspace with design tools and digital devices"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full bg-secondary/30 blur-xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 -left-4 sm:-left-6 md:-left-8 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-primary/10 blur-lg animate-pulse delay-500" />
          </div>
        </div>
      </div>

      {/* Modal for YouTube Video */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/WO2b03Zdu4Q?autoplay=1"
              title="YouTube Video"
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-0 right-0 text-white text-2xl bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
