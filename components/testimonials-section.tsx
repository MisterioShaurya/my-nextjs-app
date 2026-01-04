"use client"

import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at Tech Startup",
    content: "Shaurya is an exceptional developer with great attention to detail. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    content: "Working with Shaurya was a pleasure. Delivered quality work on time.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Design Lead",
    content: "Great collaboration and communication. Results exceeded expectations.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`space-y-12 ${isVisible ? "fade-in-on-scroll" : ""}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Testimonials</h2>
            <p className="text-lg text-muted-foreground">What others are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 bg-card rounded-lg border border-border hover:shadow-lg smooth-transition ${
                  isVisible ? "scale-up-on-scroll" : ""
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
