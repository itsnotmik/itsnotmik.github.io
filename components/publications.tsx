import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"

const publications = [
  {
    authors: "Clement, M., Kelly, N., Marki, N., Soto, M., Cohen, Y. & Khan, B.",
    title:
      "Domain Aware Modeling of Multi-Mode Operation of RO water treatment and desalination system via Graph Convolutional Networks",
    venue:
      "Paper 133 - Transport Phenomena and Fundamentals, American Council of North American Membrane Society (NAMS)",
    location: "Annual Meeting, Nashville, Tennessee",
    date: "May 17 - 21, 2025",
  },
  {
    authors: "Michael Clement, Bilal Khan, Yang Zhou, Nora Marki and Yoram Cohen",
    title:
      "Domain Aware Modeling of Multi-Mode Operation of RO Water Treatment and Desalination Systems Via Graph Attention Networks",
    venue: "Session 10E - Information Management and Intelligent Systems, AIChE Annual Meeting",
    location: "Boston, MA",
    date: "November 2 – 6, 2023",
  },
  {
    authors: "Khan, B. M., M. Clement, Y. Zhou, N. Marki and Y. Cohen",
    title:
      "Machine Learning for Distributed Intelligent Water Treatment and Desalination Systems: Current Advancements and Future Prospects",
    venue: "Water Technology",
    location: "Ready for submission",
    date: "2025",
  },
]

export function Publications() {
  return (
    <section id="publications" className="py-20">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  <h3 className="font-semibold text-lg leading-relaxed text-balance">{pub.title}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="italic">{pub.venue}</p>
                    <p>
                      {pub.location}, {pub.date}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
