"use client"

import { useEffect, useState } from "react"

interface TypingEffectProps {
  words: string[]
  baseText?: string
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export function TypingEffect({
  words,
  baseText = "> Hello, I am ",
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = "",
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentText, setCurrentText] = useState("")

  const currentWord = words[currentWordIndex]
  const fullText = baseText + currentWord

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          if (currentText.length > baseText.length) {
            setCurrentText(currentText.substring(0, currentText.length - 1))
          } else {
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
            setIsDeleting(false)
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWord, fullText, baseText, deleteSpeed, speed, pauseTime, words, currentWordIndex])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">_</span>
    </span>
  )
}
