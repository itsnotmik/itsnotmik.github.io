import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Mikux",
    period: "Apr 2025 – Present",
    description:
      "Designed and maintained personal homelab infrastructure hosting portfolio website, secure password management system, and gaming server utilizing Cloudflare tunneling for secure remote access",
    technologies: ["Python", "Node.js", "Proton", "Cloudflare"],
  },
  {
    title: "Linux Package Manager",
    period: "Jan 2025 – Present",
    description:
      "Developed a Golang webserver for Linux package distribution to a LFS machine with HTTP API key authentication. Automatic static package building through Docker container with built-in version control",
    technologies: ["Golang", "Docker", "LFS", "Alpine", "GitLab"],
  },
  {
    title: "University IT Support Chatbot",
    period: "Jan 2024 – May 2024",
    description:
      "Developed a Docker containerized IT support RAG chatbot using the CSUSB ITS corpus. Implemented GitHub actions and workflows to automatically build, test and publish Docker images",
    technologies: ["Python", "Flask", "Docker", "Streamlit", "LLM API", "Ollama"],
  },
  {
    title: "Spotify Music Recommendation Engine",
    period: "Jan 2022 – May 2022",
    description:
      "Developed a Python music recommendation engine using over 1 million Spotify songs and metadata. Created high dimensional KNN graphs and used K Means clustering to compare song metadata. Integrated an automated song loader and metadata reader to recommend new songs",
    technologies: ["Python", "PyTorch", "GitHub", "HTML", "React"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
