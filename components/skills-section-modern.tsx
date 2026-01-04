"use client"

export function SkillsSectionModern() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      name: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    },
    {
      name: "Security",
      skills: ["Penetration Testing", "OWASP", "Cryptography", "Web Security"],
    },
    {
      name: "Tools",
      skills: ["Git", "VS Code", "Figma", "Postman", "Webpack"],
    },
    {
      name: "3D & Creative",
      skills: ["Blender", "Three.js", "WebGL", "Motion Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary/20 smooth-transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
