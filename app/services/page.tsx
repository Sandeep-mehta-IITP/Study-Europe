import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Our Services | European Study Consultancy",
  description:
    "Comprehensive services for studying in Europe including document preparation, university selection, visa guidance, and more.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Document Preparation",
      description:
        "Guidance on preparing academic transcripts, SOPs, recommendation letters, and language proficiency tests (IELTS, TOEFL).",
      features: ["SOP Writing", "Transcript Compilation", "Recommendation Letters", "Language Test Prep"],
    },
    {
      title: "University Selection",
      description:
        "Personalized counseling to match you with suitable universities based on your academic profile and preferences.",
      features: ["Profile Evaluation", "University Shortlisting", "Program Matching", "Ranking Analysis"],
    },
    {
      title: "Application Support",
      description: "Step-by-step assistance with university applications, deadlines, and requirements.",
      features: ["Application Guidance", "Deadline Management", "Document Submission", "Status Tracking"],
    },
    {
      title: "Visa Guidance",
      description:
        "Information on visa processes for each European country, including required documents and timelines.",
      features: ["Visa Requirements", "Document Checklist", "Timeline Planning", "Interview Prep"],
    },
    {
      title: "Pre-Departure Support",
      description: "Advice on accommodation, travel, and settling into your destination country.",
      features: ["Accommodation Help", "Travel Planning", "Packing Guide", "Cultural Orientation"],
    },
    {
      title: "Post-Arrival Assistance",
      description: "Help with local registration, bank accounts, and cultural adaptation.",
      features: ["Local Registration", "Bank Account Setup", "Cultural Integration", "Ongoing Support"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive end-to-end guidance for your European education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Download Our Study Abroad Checklist</h2>
          <p className="text-muted-foreground mb-6">
            Get a comprehensive checklist covering all steps from initial consultation to post-arrival assistance.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Download PDF Checklist
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
