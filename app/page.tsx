"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSectionModern } from "@/components/about-section-modern"
import { SkillsSectionModern } from "@/components/skills-section-modern"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSectionModern } from "@/components/projects-section-modern"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSectionModern />
        <SkillsSectionModern />
        <ExperienceSection />
        <ProjectsSectionModern />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
