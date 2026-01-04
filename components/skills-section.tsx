"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Cybersecurity",
    color: "#00ffff",
    skills: [
      "Penetration Testing",
      "Network Security",
      "Incident Response",
      "Threat Analysis",
      "Security Architecture",
      "Compliance & Auditing",
    ],
  },
  {
    category: "Full Stack",
    color: "#00ff00",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "System Design"],
  },
  {
    category: "Android",
    color: "#ff00ff",
    skills: ["Kotlin", "Java", "Android Studio", "Firebase", "Material Design", "Performance"],
  },
  {
    category: "Python",
    color: "#ffaa00",
    skills: ["Scripting", "Automation", "Data Analysis", "Web Scraping", "Django", "FastAPI"],
  },
  {
    category: "3D / Blender",
    color: "#00aaff",
    skills: ["3D Modeling", "Rendering", "Animation", "Texturing", "Motion Graphics"],
  },
  {
    category: "Tools & DevOps",
    color: "#ff4444",
    skills: ["Docker", "Kubernetes", "AWS", "Git", "Linux", "CI/CD Pipelines"],
  },
]

interface SkillCardProps {
  category: string
  skills: string[]
  color: string
}

function SkillCard({ category, skills, color }: SkillCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      className="p-6 border-2 bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-pointer relative overflow-hidden"
      style={{
        borderColor: hovered ? color : "rgba(0,255,255,0.2)",
        boxShadow: hovered ? `0 0 20px ${color}40, inset 0 0 20px ${color}10` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-mono font-bold mb-4" style={{ color }}>
          {category}
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
              <span style={{ color }} className="text-lg">
                ▸
              </span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function SkillsSection() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-card/30 opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#00ff00] mb-4">
            {"< skills />"}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((item, index) => (
            <SkillCard key={index} category={item.category} skills={item.skills} color={item.color} />
          ))}
        </div>

        <div className="mt-16 p-6 border border-[#00ffff]/30 rounded-lg bg-[#00ffff]/5 backdrop-blur-sm">
          <p className="text-center text-foreground leading-relaxed">
            Constantly learning and evolving. Always exploring cutting-edge technologies and pushing the boundaries of
            what's possible in security and development.
          </p>
        </div>
      </div>
    </section>
  )
}
