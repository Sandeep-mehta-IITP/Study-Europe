import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Meet with our consultants to discuss your goals, academic background, and preferences.",
  },
  {
    number: "02",
    title: "University Selection",
    description: "We help you identify universities that match your profile and aspirations.",
  },
  {
    number: "03",
    title: "Application & Admission",
    description: "Complete support with applications, essays, and interview preparation.",
  },
  {
    number: "04",
    title: "Visa & Arrival",
    description: "Guidance through visa processes and preparation for your arrival in Europe.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process designed to make your journey smooth and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 bg-secondary border-border h-full">
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-primary" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
