import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">Michael Clement</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Computer Science Graduate | Machine Learning Researcher
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Specializing in Graph Convolutional Neural Networks, water treatment systems optimization, and full-stack
            development. Passionate about leveraging machine learning and software engineering to solve real-world
            challenges.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/itsnotmik" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/mikux" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
