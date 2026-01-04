"use client"

import { useEffect, useRef } from "react"
import { ContactForm } from "./contact-form"
import { Mail, Github, Linkedin, Twitter, ArrowRight, MessageCircle } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-4 bg-background opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? I'm always excited to hear from you. Reach out and let's create
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:revexorigins@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link"
                  >
                    revexorigins@gmail.com
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Usually reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-foreground hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-foreground hover:text-primary"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
