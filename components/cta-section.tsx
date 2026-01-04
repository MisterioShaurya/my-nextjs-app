"use client"

import Link from "next/link"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <div className={`space-y-6 ${isVisible ? "slide-up-on-scroll" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to work together?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create something amazing. Get in touch and let's discuss your project.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 smooth-transition font-medium group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
