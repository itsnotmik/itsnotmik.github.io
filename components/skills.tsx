import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Wrench, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["Python", "C/C++", "Golang", "SQL (MySQL)", "HTML/CSS", "PHP", "React", "Node.js", "Flask"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "VS Code", "GitHub Actions", "Linux CLI"],
  },
  {
    title: "Libraries & Frameworks",
    icon: Database,
    skills: ["pandas", "NumPy", "Matplotlib", "SciKit Learn", "PyTorch", "Ollama"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
