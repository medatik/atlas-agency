import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Heart } from "lucide-react"

interface AboutSectionProps {
  t: any
}

export function AboutSection({ t }: AboutSectionProps) {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Award, label: "Projects Completed", value: "300+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Heart, label: "Team Members", value: "12" },
  ]

  const skills = [
    "Brand Design",
    "Logo Creation",
    "Web Development",
    "UI/UX Design",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {t.about.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-xs sm:text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-md transition-shadow">
                <CardContent className="space-y-2 p-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}