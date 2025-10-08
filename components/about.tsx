import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              As a recent Computer Science graduate with both Master's and Bachelor's degrees from California State
              University, San Bernardino (3.8 GPA), I blend technical innovation with practical problem-solving. My
              graduate research focused on developing Graph Convolutional Neural Networks with attention mechanisms to
              improve operational performance of water treatment and desalination systems—a project funded by the US
              National Alliance for Water Innovation.
            </p>
            <p>
              Beyond academia, I led a team developing a comprehensive nanomaterial information database, where I've
              honed my skills in team leadership, GitHub administration, and full-stack development using Python, PHP,
              and JavaScript on AWS infrastructure.
            </p>
            <p>
              In the cybersecurity arena, I've demonstrated exceptional skills by placing in the top 100 competitors in
              the National Cyber League individual games in my first cybersecurity competition. I also helped lead my
              team to an impressive 11th place finish out of 460 teams in the team competition, by completing 99.2% of
              the challenges.
            </p>
            <p>
              I'm passionate about the intersection of machine learning, cybersecurity, environmental sustainability,
              and efficient infrastructure systems. Currently seeking opportunities where I can leverage my expertise in
              machine learning, software development, and project management to drive innovation and create meaningful
              impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Master of Science in Computer Science</h3>
                <p className="text-sm text-muted-foreground">California State University, San Bernardino</p>
                <p className="text-sm text-muted-foreground">Jan 2024 – May 2025 | GPA: 3.8</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-muted-foreground">California State University, San Bernardino</p>
                <p className="text-sm text-muted-foreground">Aug 2020 – Dec 2023 | GPA: 3.8</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
