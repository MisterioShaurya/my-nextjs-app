"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  stagger?: boolean
}

export function AnimatedText({ text, className = "", stagger = false }: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          const chars = ref.current.querySelectorAll("span")
          chars.forEach((char, i) => {
            setTimeout(
              () => {
                char.classList.add("animate-in")
                char.style.animation = "fadeInUp 0.5s ease-out forwards"
              },
              stagger ? i * 30 : 0,
            )
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [stagger])

  return (
    <span ref={ref} className={className}>
      {stagger
        ? text.split("").map((char, i) => (
            <span key={i} style={{ opacity: 0 }}>
              {char}
            </span>
          ))
        : text}
    </span>
  )
}
