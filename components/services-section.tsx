import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Palette, Code, Package, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ServicesSectionProps } from '@/lib/types';

export function ServicesSection({ t }: ServicesSectionProps) {
  const services = [
    {
      icon: Palette,
      title: t.services.visual.title,
      description: t.services.visual.description,
      color: "text-primary",
      bgColor: "bg-primary/10",
      href: "/visual-identity",
    },
    {
      icon: Code,
      title: t.services.web.title,
      description: t.services.web.description,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      href: "/web-development",
    },
    {
      icon: Package,
      title: t.services.combo.title,
      description: t.services.combo.description,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      href: "/complete-package",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1 
                  bg-card/50 backdrop-blur-sm shadow-md rounded-lg overflow-hidden transform hover:scale-105 flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2`}
            >
              <div className="flex-1 p-6">
                <div className="grid gap-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${service.bgColor} shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rtl:justify-self-end`}
                    aria-hidden="true"
                  >
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <div className="grid gap-3 rtl:text-right">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Link href={service.href} aria-label={`Learn more about ${service.title}`}>
                      <Button
                        variant="outline"
                        className="w-full max-w-[80%] mx-auto flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors duration-300 text-sm sm:text-base rtl:flex-row-reverse focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        <span>{t.services.buttonText}</span>
                        <MoveRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}