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
              I&apos;m a recent Computer Science graduate (M.S. & B.S.) from California State 
              University, San Bernardino with a 3.8 GPA, driven by a passion for combining 
              machine learning, cybersecurity, and sustainable technology to solve real-world 
              challenges.
            </p>
            <p>
              My graduate research focused on developing Graph Convolutional Neural Networks 
              with attention mechanisms to optimize the operational performance of water 
              treatment and desalination systems—a project funded by the U.S. National Alliance 
              for Water Innovation (NAWI).
            </p>
            <p>
              Outside of research, I led the development of a comprehensive nanomaterial 
              information database, where I strengthened my expertise in full-stack development 
              (Python, PHP, JavaScript), AWS cloud infrastructure, GitHub administration, and 
              technical team leadership.
            </p>
            <p>
              In the cybersecurity field, I ranked among the top 100 competitors nationwide in 
              the National Cyber League individual games, and helped guide my team to an 
              11th-place finish out of 460 teams in the team competition by completing 99.2% 
              of all challenges.
            </p>
            <p>
              I&apos;m passionate about leveraging AI and data-driven technologies to enhance 
              environmental sustainability, secure infrastructure systems, and operational 
              efficiency. I&apos;m currently seeking opportunities to apply my skills in machine 
              learning, software engineering, and project management to drive innovation and 
              deliver meaningful impact.
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
