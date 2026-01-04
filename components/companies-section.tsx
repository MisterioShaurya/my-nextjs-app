"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const companies = [
  {
    name: "R3VEX:Origins",
    role: "Founder & CEO",
    description: "Elite cybersecurity consulting and innovative digital product development",
    status: "active",
    slogans: ["Building the future of cybersecurity", "Innovation meets security", "Elite digital solutions"],
    color: "#00ffff",
  },
  {
    name: "The Chaos Network",
    role: "Co-Founder",
    description: "Cutting-edge research and development in advanced security architectures",
    status: "coming-soon",
    slogans: ["Chaos engineering for resilience", "Security through innovation", "Advanced threat research"],
    color: "#00ff00",
  },
]

interface CompanyCardProps {
  name: string
  role: string
  description: string
  status: string
  slogans: string[]
  color: string
}

function CompanyCard({ name, role, description, status, slogans, color }: CompanyCardProps) {
  const [hovered, setHovered] = useState(false)
  const [currentSlogan, setCurrentSlogan] = useState(0)

  useEffect(() => {
    if (hovered) {
      const timer = setInterval(() => {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length)
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [hovered, slogans.length])

  return (
    <Card
      className="p-8 border-2 bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col"
      style={{
        borderColor: hovered ? color : "rgba(0,255,255,0.2)",
        boxShadow: hovered ? `0 0 30px ${color}50, inset 0 0 20px ${color}15` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-mono font-bold mb-1" style={{ color }}>
            {name}
          </h3>
          <p className="text-sm font-mono text-muted-foreground">{role}</p>
        </div>
        {status === "active" && (
          <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-mono border border-green-500/50">
            Active
          </div>
        )}
        {status === "coming-soon" && (
          <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-mono border border-yellow-500/50">
            Coming Soon
          </div>
        )}
      </div>

      <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

      {hovered && (
        <div className="mt-4 p-4 rounded border-l-2" style={{ borderColor: color, backgroundColor: `${color}10` }}>
          <p className="text-sm italic text-foreground transition-all duration-500">{slogans[currentSlogan]}</p>
        </div>
      )}
    </Card>
  )
}

export function CompaniesSection() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-background opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#00ff00] mb-4">
            {"< Companies />"}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              name={company.name}
              role={company.role}
              description={company.description}
              status={company.status}
              slogans={company.slogans}
              color={company.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
