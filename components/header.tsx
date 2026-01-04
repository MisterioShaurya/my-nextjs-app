"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 smooth-transition ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 smooth-transition">
          Shaurya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-foreground hover:text-primary smooth-transition font-medium">
            About
          </Link>
          <Link href="#skills" className="text-foreground hover:text-primary smooth-transition font-medium">
            Skills
          </Link>
          <Link href="#projects" className="text-foreground hover:text-primary smooth-transition font-medium">
            Projects
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary smooth-transition font-medium">
            Contact
          </Link>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 smooth-transition font-medium">
            Resume
          </button>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted smooth-transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted smooth-transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>
          )}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="#about" className="block text-foreground hover:text-primary font-medium">
              About
            </Link>
            <Link href="#skills" className="block text-foreground hover:text-primary font-medium">
              Skills
            </Link>
            <Link href="#projects" className="block text-foreground hover:text-primary font-medium">
              Projects
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-primary font-medium">
              Contact
            </Link>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 font-medium">
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
