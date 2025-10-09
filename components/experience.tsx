import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Full-stack Developer",
    company: "The AI Horizon · Freelance",
    location: "Remote",
    period: "Aug 2025 – Present",
    description: [
      "Created and designed infrastructure layout for long-term deployment",
      "Worked on transitioning website to a NextJS React framework",
      "Built AWS EC2 to serve as server infrastructure for handling backend capabilities",
      "Assisting in the development of machine learning models to scrape, process and display crucial information from compiled resources",
    ],
    link: "https://theaihorizon.org",
  },
  {
    title: "Full-stack Developer",
    company: "TCG Lounge · Freelance",
    location: "Remote",
    period: "Jun 2025 – Present",
    description: [
      "Developed and deployed major rebrand of website along with backend infrastructure",
      "Built a custom ledger page to track users in-store credit values",
      "Worked directly with customers and employees to improve user experience",
    ],
    link: "https://tcglounge.com",
  },
  {
    title: "Graduate Research Assistant",
    company: "California State University, San Bernardino",
    location: "San Bernardino, CA",
    period: "Jan 2024 – May 2025",
    description: [
      "Developed a Graph Convolutional Neural Network model with attention mechanism (GATConv) for describing and forecasting operational performance of a wellhead reverse osmosis (RO) water treatment and desalination system",
      "Utilized GATConv model to discern causal relationships for prediction and fault detection in the treatment system",
      "Carried out comprehensive model development pipeline which includes data acquisition and cleaning (outlier removal via violin plots and t-SNE), model development and validation and causal relationship identification",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "California State University, San Bernardino",
    location: "San Bernardino, CA",
    period: "Jan 2023 – Dec 2023",
    description: [
      "Organized team of five undergraduate and graduate students in developing a large-scale nanomaterial information database, which includes nanomaterial details, prediction models, toxicity screening and environmental impact",
      "Administrated private GitHub repository and implemented branch protections and rulesets",
      "Led group and individual meetings weekly to share progress as well as foster a teamwork focused environment",
      "Used Linux CLI to write and modify Python, PHP, and JS files contained on an AWS EC2 instance",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary mt-1">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-primary shrink-0 select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.link && (
                    <div className="pt-2">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        Visit Website →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
