"use client"

import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

const experiences = [
  {
    company: "R3VEX:Origins",
    position: "Founder & Lead Developer",
    period: "2023 - Present",
    description: "Building innovative security solutions and leading a team of developers.",
    highlight: true,
  },
  {
    company: "Tech Startup XYZ",
    position: "Full Stack Developer",
    period: "2022 - 2023",
    description: "Developed and maintained multiple full-stack applications using React and Node.js.",
    highlight: false,
  },
  {
    company: "Digital Agency ABC",
    position: "Junior Developer",
    period: "2021 - 2022",
    description: "Built responsive web applications and collaborated with design team.",
    highlight: false,
  },
]

export function ExperienceSection() {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className={`space-y-12 ${isVisible ? "fade-in-on-scroll" : ""}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 bg-card rounded-lg border border-border hover:border-primary smooth-transition ${
                  isVisible ? `slide-up-on-scroll` : ""
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                      {exp.highlight && (
                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">Current</span>
                      )}
                    </div>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
