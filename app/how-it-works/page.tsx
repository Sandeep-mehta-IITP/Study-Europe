import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "How It Works | European Study Consultancy",
  description: "Learn our step-by-step process for guiding students through their European education journey.",
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description:
        "Free consultation to understand your goals, academic background, and preferences for studying in Europe.",
      duration: "1-2 weeks",
    },
    {
      number: 2,
      title: "Profile Evaluation",
      description: "Our experts evaluate your academic profile and shortlist suitable universities and programs.",
      duration: "2-3 weeks",
    },
    {
      number: 3,
      title: "Document Preparation",
      description: "Comprehensive guidance on preparing SOPs, recommendation letters, and other required documents.",
      duration: "4-6 weeks",
    },
    {
      number: 4,
      title: "Application Submission",
      description: "We assist with submitting applications to your shortlisted universities and track all deadlines.",
      duration: "2-3 months",
    },
    {
      number: 5,
      title: "Visa Application",
      description: "Expert guidance on visa requirements, document preparation, and interview coaching.",
      duration: "4-8 weeks",
    },
    {
      number: 6,
      title: "Pre-Departure",
      description: "Assistance with accommodation, travel arrangements, and cultural orientation.",
      duration: "2-4 weeks",
    },
    {
      number: 7,
      title: "Post-Arrival Support",
      description: "Ongoing support with local registration, bank accounts, and cultural adaptation.",
      duration: "Ongoing",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">How It Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our proven step-by-step process to guide you through your European education journey
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && <div className="w-1 h-20 bg-border mt-2"></div>}
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-primary">{step.title}</CardTitle>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Total Timeline: 6-12 Months</h2>
          <p className="text-muted-foreground mb-6">
            The entire process from initial consultation to arrival in Europe typically takes 6-12 months, depending on
            your specific circumstances and university deadlines.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
