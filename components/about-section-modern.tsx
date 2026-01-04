"use client"

import { useEffect, useRef } from "react"

export function AboutSectionModern() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-foreground/5">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-4xl font-bold mb-12 text-foreground">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full stack developer with a passion for creating elegant solutions to complex problems. With over a
              decade of experience in web development, I've worked on projects ranging from startups to large
              enterprises.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or
              discussing the latest trends in tech. I believe in continuous learning and growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ 10+ years of development experience</li>
                <li>✓ Full stack expertise (frontend & backend)</li>
                <li>✓ Passionate about cybersecurity</li>
                <li>✓ Always learning new technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
