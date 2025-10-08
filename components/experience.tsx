import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "California State University, San Bernardino",
    location: "San Bernardino, CA",
    period: "Jan 2024 – Present",
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
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
