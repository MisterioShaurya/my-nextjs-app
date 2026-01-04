"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProjectsSectionModern() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring real-time inventory and payment integration.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A scalable chat application with real-time messaging, user authentication, and secure communication.",
      tags: ["React", "WebSocket", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Security Audit Tool",
      description:
        "An automated security auditing tool for web applications with vulnerability detection and reporting.",
      tags: ["Python", "Security", "API", "Docker"],
      link: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive analytics dashboard with real-time data visualization and custom reporting capabilities.",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Mobile App - Task Manager",
      description: "Cross-platform mobile application for task management with offline support and cloud sync.",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform with NLP and machine learning capabilities.",
      tags: ["Python", "AI", "FastAPI", "React"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.title} href={project.link}>
              <div className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg smooth-transition cursor-pointer h-full">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary smooth-transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 smooth-transition">
                  View Project
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
