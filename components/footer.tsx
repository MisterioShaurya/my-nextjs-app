import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Shaurya</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full stack developer and cybersecurity expert building beautiful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 smooth-transition text-primary">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 smooth-transition text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 smooth-transition text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 smooth-transition text-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">© 2025 Shaurya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
