import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Destinations from "@/components/destinations"
import Services from "@/components/services"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Destinations />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
