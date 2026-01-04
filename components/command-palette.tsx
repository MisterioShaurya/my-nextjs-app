"use client"

import { useEffect, useState } from "react"
import { Command } from "cmdk"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface CommandItem {
  id: string
  label: string
  description: string
  action: () => void
  category: string
  shortcut?: string
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  const commands: CommandItem[] = [
    {
      id: "navigate-home",
      label: "Home",
      description: "Go to the hero section",
      category: "Navigation",
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setOpen(false)
      },
    },
    {
      id: "navigate-about",
      label: "About",
      description: "View my story and timeline",
      category: "Navigation",
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        setOpen(false)
      },
    },
    {
      id: "navigate-skills",
      label: "Skills",
      description: "Check my technical expertise",
      category: "Navigation",
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
        setOpen(false)
      },
    },
    {
      id: "navigate-companies",
      label: "Companies",
      description: "Learn about R3VEX:Origins",
      category: "Navigation",
      action: () => {
        document.getElementById("companies")?.scrollIntoView({ behavior: "smooth" })
        setOpen(false)
      },
    },
    {
      id: "navigate-projects",
      label: "Projects",
      description: "Explore my recent work",
      category: "Navigation",
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        setOpen(false)
      },
    },
    {
      id: "navigate-contact",
      label: "Contact",
      description: "Get in touch with me",
      category: "Navigation",
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        setOpen(false)
      },
    },
    {
      id: "email",
      label: "Send Email",
      description: "Open email client to revexorigins@gmail.com",
      category: "Contact",
      action: () => {
        window.location.href = "mailto:revexorigins@gmail.com"
        setOpen(false)
      },
    },
    {
      id: "github",
      label: "GitHub",
      description: "Open GitHub profile",
      category: "Social",
      action: () => {
        window.open("#", "_blank")
        setOpen(false)
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "Open LinkedIn profile",
      category: "Social",
      action: () => {
        window.open("#", "_blank")
        setOpen(false)
      },
    },
    {
      id: "theme-toggle",
      label: "Toggle Theme",
      description: "Switch between dark and light mode",
      category: "Settings",
      shortcut: "Alt + T",
      action: () => {
        document.documentElement.classList.toggle("dark")
        setOpen(false)
      },
    },
  ]

  // Open command palette with Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const categories = Array.from(new Set(commands.map((cmd) => cmd.category)))

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 border-[#00ffff]/50 bg-card/95 backdrop-blur-xl max-w-xl">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-[#00ffff] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:opacity-70 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:overflow-hidden [&_[cmdk-group]>div:first-child]:overflow-hidden">
          <div className="flex items-center border-b border-[#00ffff]/20 px-4 py-3">
            <span className="text-[#00ffff] font-bold text-lg">$</span>
            <Command.Input
              placeholder="Type a command or search..."
              className="ml-3 flex-1 outline-none bg-transparent text-foreground placeholder:text-muted-foreground font-mono text-sm"
            />
          </div>

          <Command.List className="max-h-[500px] overflow-y-auto">
            {categories.map((category) => (
              <Command.Group key={category} heading={`// ${category}`}>
                {commands
                  .filter((cmd) => cmd.category === category)
                  .map((command) => (
                    <Command.Item
                      key={command.id}
                      value={command.label}
                      onSelect={() => command.action()}
                      className="px-4 py-3 cursor-pointer hover:bg-[#00ffff]/10 data-[selected]:bg-[#00ffff]/20 border-l-2 border-transparent hover:border-[#00ffff] transition-all"
                    >
                      <div className="flex items-start justify-between flex-1">
                        <div>
                          <div className="font-mono font-bold text-sm text-[#00ffff]">{command.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{command.description}</div>
                        </div>
                        {command.shortcut && (
                          <div className="text-xs text-muted-foreground ml-4 font-mono">{command.shortcut}</div>
                        )}
                      </div>
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}

            <Command.Empty className="px-4 py-8 text-center text-sm text-muted-foreground">
              No commands found. Try something else?
            </Command.Empty>
          </Command.List>

          <div className="border-t border-[#00ffff]/20 px-4 py-3">
            <p className="text-xs text-muted-foreground font-mono">
              Press{" "}
              <kbd className="px-2 py-1 rounded bg-[#00ffff]/10 border border-[#00ffff]/30 font-bold text-[#00ffff]">
                Ctrl K
              </kbd>{" "}
              to toggle command palette
            </p>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
