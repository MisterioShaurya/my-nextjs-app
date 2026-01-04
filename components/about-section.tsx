"use client"

import { useEffect, useRef } from "react"

const timelineEvents = [
  {
    year: "2014",
    title: "Started My Journey",
    description: "Discovered passion for cybersecurity and coding",
  },
  {
    year: "2018",
    title: "Full Stack Mastery",
    description: "Deep dive into full stack development and architecture",
  },
  {
    year: "2021",
    title: "Founded R3VEX:Origins",
    description: "Launched elite cybersecurity consulting and development firm",
  },
  {
    year: "2024",
    title: "Leading Innovation",
    description: "Building next-generation security solutions and digital products",
  },
]

export function AboutSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#00ff00] mb-4">
                {"< About me />"}
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]" />
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Building the future, one line of code at a time. I'm a passionate cybersecurity expert and full stack
              developer dedicated to creating innovative solutions that protect and empower.
            </p>

            <blockquote className="text-xl italic border-l-4 border-[#00ffff] pl-6 py-4 text-[#00ff00]">
              "Excellence is not just a goal—it's a journey of constant innovation and relentless pursuit of
              perfection."
            </blockquote>

            <p className="text-base text-muted-foreground leading-relaxed">
              With a deep understanding of both security architecture and elegant code, I combine technical expertise
              with creative problem-solving. My mission is to build digital experiences that are both secure and
              beautiful.
            </p>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-mono font-bold text-[#00ffff] mb-8">{"// Timeline"}</h3>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[#00ffff]/30 pb-6 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#00ffff] rounded-full border-2 border-background" />
                  <div className="text-sm text-[#00ffff] font-mono font-bold">{event.year}</div>
                  <h4 className="text-lg font-bold text-foreground mt-1">{event.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
