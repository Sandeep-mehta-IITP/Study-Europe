import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    university: "University of Amsterdam",
    text: "EduConsult made the entire process so smooth. From choosing the right university to visa approval, they guided me every step of the way. Highly recommended!",
    image: "/diverse-student-portraits.png",
  },
  {
    name: "Raj Patel",
    university: "ETH Zurich",
    text: "The consultants understood my goals perfectly and helped me get into my dream university. Their expertise in scholarship applications was invaluable.",
    image: "/diverse-student-portraits.png",
  },
  {
    name: "Emma Chen",
    university: "University of Oxford",
    text: "Professional, knowledgeable, and genuinely caring. They treated my application like it was their own. I got accepted to my top choice!",
    image: "/diverse-student-portraits.png",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students who achieved their European education dreams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-background border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
