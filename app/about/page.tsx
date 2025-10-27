import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Globe, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About Us | European Study Consultancy",
  description:
    "Learn about our mission, expertise, and commitment to helping students achieve their European education dreams.",
}

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Students Placed", value: "10,000+" },
    { icon: Globe, label: "University Partners", value: "200+" },
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ]

  const team = [
    {
      name: "Expert Counselors",
      description: "Certified education consultants with extensive European university knowledge",
    },
    {
      name: "Visa Specialists",
      description: "Experienced professionals handling visa processes for all European countries",
    },
    { name: "Document Experts", description: "Specialists in crafting compelling SOPs and application materials" },
    { name: "Cultural Advisors", description: "Guides helping students adapt to European lifestyle and culture" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your trusted partner in achieving your European education dreams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              We are dedicated to making European education accessible to talented students from around the world. Our
              mission is to provide comprehensive, personalized guidance that transforms educational aspirations into
              reality.
            </p>
            <p className="text-muted-foreground">
              With over 15 years of experience and partnerships with 200+ European universities, we have successfully
              placed 10,000+ students in their dream institutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-primary">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your European Journey?</h2>
          <p className="mb-6">Contact us today for a free consultation with our education experts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-primary-foreground text-primary px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/1234567890"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
