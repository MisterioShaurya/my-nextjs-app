"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-foreground text-5xl md:text-7xl font-bold leading-tight">
            Hey, I'm <span className="text-primary">Shaurya</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            A full stack developer passionate about building beautiful and functional digital experiences
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="#projects">
            <Button className="bg-primary text-white hover:opacity-90 px-8 py-6 text-lg font-medium rounded-lg">
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-medium rounded-lg border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary mx-auto" />
        </div>
      </div>
    </section>
  )
}
