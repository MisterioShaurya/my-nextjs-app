"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SecurityVault Pro",
    description: "Enterprise-grade encrypted password management and security audit platform",
    category: "Security",
    technologies: ["React", "TypeScript", "PostgreSQL", "Encryption"],
    featured: true,
    color: "#00ffff",
  },
  {
    id: 2,
    title: "ThreatAnalyzer AI",
    description: "ML-powered threat detection and analysis system for real-time security monitoring",
    category: "AI",
    technologies: ["Python", "TensorFlow", "FastAPI", "Real-time Analytics"],
    featured: true,
    color: "#00ff00",
  },
  {
    id: 3,
    title: "MobileSecure",
    description: "Comprehensive mobile security framework and vulnerability scanner for Android",
    category: "Mobile",
    technologies: ["Kotlin", "Android", "Security Auditing"],
    featured: true,
    color: "#ff00ff",
  },
  {
    id: 4,
    title: "NetGuard Dashboard",
    description: "Real-time network monitoring and threat visualization dashboard",
    category: "Security",
    technologies: ["Next.js", "WebSockets", "Node.js"],
    featured: false,
    color: "#ffaa00",
  },
  {
    id: 5,
    title: "Forensics Toolkit",
    description: "Digital forensics and incident response automation tools",
    category: "Security",
    technologies: ["Python", "Linux", "Docker"],
    featured: false,
    color: "#00aaff",
  },
  {
    id: 6,
    title: "RenderHub 3D",
    description: "Distributed 3D rendering platform with Blender integration",
    category: "3D",
    technologies: ["Blender", "Node.js", "WebGL"],
    featured: false,
    color: "#ff4444",
  },
]

interface ProjectCardProps {
  title: string
  description: string
  category: string
  technologies: string[]
  color: string
  featured: boolean
}

function ProjectCard({ title, description, category, technologies, color, featured }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      className={`relative p-6 border-2 bg-card/50 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
        featured ? "md:col-span-2" : ""
      }`}
      style={{
        borderColor: hovered ? color : "rgba(0,255,255,0.2)",
        boxShadow: hovered ? `0 0 30px ${color}50, inset 0 0 20px ${color}15` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-mono font-bold" style={{ color }}>
              {title}
            </h3>
            {featured && (
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">Featured</Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground font-mono">{category}</p>
        </div>
      </div>

      <p className="text-foreground/80 text-sm leading-relaxed mb-6">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, idx) => (
          <Badge key={idx} variant="outline" className="text-xs" style={{ borderColor: `${color}50` }}>
            {tech}
          </Badge>
        ))}
      </div>

      {hovered && (
        <div className="flex gap-3 mt-4 pt-4 border-t border-border">
          <button
            className="text-sm font-mono px-3 py-2 rounded border-2 transition-all"
            style={{
              borderColor: color,
              color: color,
              backgroundColor: `${color}10`,
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.backgroundColor = `${color}20`
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.backgroundColor = `${color}10`
            }}
          >
            <Github className="w-4 h-4 inline mr-2" />
            View Code
          </button>
          <button
            className="text-sm font-mono px-3 py-2 rounded border-2 transition-all"
            style={{
              borderColor: color,
              color: color,
              backgroundColor: `${color}10`,
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.backgroundColor = `${color}20`
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.backgroundColor = `${color}10`
            }}
          >
            <ExternalLink className="w-4 h-4 inline mr-2" />
            Live Demo
          </button>
        </div>
      )}
    </Card>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState("All")

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

  const categories = ["All", ...new Set(projects.map((p) => p.category))]
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-card/30 opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#00ff00] mb-4">
            {"< Projects />"}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded border-2 font-mono text-sm transition-all ${
                activeFilter === cat
                  ? "border-[#00ffff] bg-[#00ffff] text-background"
                  : "border-[#00ffff]/30 text-[#00ffff] hover:border-[#00ffff]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              technologies={project.technologies}
              color={project.color}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
