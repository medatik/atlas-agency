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
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.about.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="space-y-2 p-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
