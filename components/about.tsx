import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/professional-education-consultants-team.jpg"
              alt="Our team of education consultants"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About EduConsult</h2>
              <p className="text-lg text-muted-foreground">
                With over 15 years of experience, we've helped thousands of students achieve their European education
                dreams. Our team of certified consultants understands the complexities of international admissions and
                visa processes.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Expert guidance from certified consultants",
                "98% success rate in university admissions",
                "10,000+ students successfully placed",
                "Partnerships with 200+ European universities",
                "Personalized support throughout your journey",
                "Access to exclusive scholarship opportunities",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground text-lg">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground pt-4">
              We believe every student deserves access to world-class education. Our mission is to make European
              universities accessible to talented students worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
