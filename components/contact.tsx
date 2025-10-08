import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "michael@mikux.org",
    href: "mailto:michael@mikux.org",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mikux",
    href: "https://linkedin.com/in/mikux",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/itsnotmik",
    href: "https://github.com/itsnotmik",
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    value: "portfolio.mikux.org",
    href: "https://portfolio.mikux.org",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 pb-32">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm currently seeking opportunities in machine learning, software development, and IT. Feel free to reach
            out if you'd like to discuss potential collaborations or opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{link.value}</p>
                  </div>
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
