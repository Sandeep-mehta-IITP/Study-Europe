import Header from "@/components/header"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ | European Study Consultancy",
  description: "Frequently asked questions about studying in Europe and our services.",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          q: "What is European Study Consultancy?",
          a: "We are a leading education consultancy specializing in helping international students pursue higher education in Europe. With 15+ years of experience and 10,000+ successful placements, we provide comprehensive guidance from application to post-arrival support.",
        },
        {
          q: "Who can use your services?",
          a: "Our services are designed for students aged 16-30 from non-European countries who are interested in pursuing undergraduate, postgraduate, or doctoral programs in Europe.",
        },
        {
          q: "Do you work with all European countries?",
          a: "Yes, we work with all European countries. We have partnerships with universities across Europe and expertise in visa processes for each country.",
        },
      ],
    },
    {
      title: "Application & Admission",
      questions: [
        {
          q: "What documents do I need for university applications?",
          a: "Typically, you'll need academic transcripts, passport, language proficiency test scores (IELTS/TOEFL), Statement of Purpose, recommendation letters, and proof of financial support. Specific requirements vary by university.",
        },
        {
          q: "How long does the application process take?",
          a: "The application process typically takes 2-3 months from submission to admission decision. We recommend starting 6-8 months before your intended start date.",
        },
        {
          q: "What if my application gets rejected?",
          a: "We provide comprehensive support to minimize rejection chances. If needed, we help with appeals or identify alternative universities that match your profile.",
        },
        {
          q: "Can you help with scholarship applications?",
          a: "Yes! We provide guidance on various scholarships including Erasmus+, DAAD, and university-specific scholarships. We help identify scholarships you're eligible for and assist with applications.",
        },
      ],
    },
    {
      title: "Visa & Immigration",
      questions: [
        {
          q: "How long does visa processing take?",
          a: "Visa processing times vary by country, typically 4-12 weeks. We recommend applying at least 3-4 months before your intended start date.",
        },
        {
          q: "What are the visa requirements?",
          a: "Requirements vary by country but generally include proof of admission, financial proof, health insurance, and a valid passport. We provide country-specific guidance.",
        },
        {
          q: "Can I work while studying?",
          a: "Most European countries allow international students to work part-time (typically 15-20 hours per week during studies). We provide detailed information based on your chosen country.",
        },
        {
          q: "What if my visa gets rejected?",
          a: "We help identify reasons for rejection and assist with appeals or reapplication. Our visa specialists have high success rates in visa approvals.",
        },
      ],
    },
    {
      title: "Costs & Financing",
      questions: [
        {
          q: "How much does studying in Europe cost?",
          a: "Costs vary significantly by country. Tuition ranges from free (Germany) to €15,000/year (Switzerland). Living costs range from €600-2,000/month depending on the country.",
        },
        {
          q: "What are your consultation fees?",
          a: "We offer a free initial consultation. Detailed pricing for our services will be discussed during this consultation based on your specific needs.",
        },
        {
          q: "Are there scholarships available?",
          a: "Yes, numerous scholarships are available including Erasmus+, DAAD, and university-specific scholarships. We help identify and apply for scholarships you're eligible for.",
        },
        {
          q: "Can I get a student loan?",
          a: "Many countries offer student loans or financing options. We can provide information about available options in your chosen country.",
        },
      ],
    },
    {
      title: "Student Life",
      questions: [
        {
          q: "How do I find accommodation?",
          a: "We provide guidance on finding accommodation including university dormitories, shared apartments, and private rentals. We help with the entire process.",
        },
        {
          q: "What is student life like in Europe?",
          a: "Student life in Europe is vibrant with excellent universities, diverse cultures, affordable living (in many countries), and excellent public transport. Each country offers unique experiences.",
        },
        {
          q: "Do you provide post-arrival support?",
          a: "Yes! We provide comprehensive post-arrival support including local registration, bank account setup, accommodation assistance, and cultural orientation.",
        },
        {
          q: "Can I travel during my studies?",
          a: "Yes! Europe's excellent transport system makes it easy to travel. Many students travel during breaks and weekends to explore different countries.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about studying in Europe and our services
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`}>
                    <AccordionTrigger className="text-left hover:text-primary">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Didn't find your answer?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us directly and our education experts will be happy to help you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
