import { Card } from "@/components/ui/card"
import { BookOpen, FileText, Dessert as Passport, Award } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Study Abroad Counseling",
    description:
      "Personalized guidance to find the perfect university and program that matches your goals and interests.",
  },
  {
    icon: FileText,
    title: "Admission Guidance",
    description:
      "Expert assistance with application essays, portfolios, and interview preparation for top universities.",
  },
  {
    icon: Passport,
    title: "Visa Assistance",
    description:
      "Complete support with visa applications, documentation, and interview preparation for European countries.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description:
      "Access to exclusive scholarship opportunities and guidance on securing financial aid for your studies.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support at every step of your European education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 bg-background border-border hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-secondary rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
