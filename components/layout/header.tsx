"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

type NavItem = {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#112240]">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-[#ccd6f6]"
        >
          <span className="text-[#3b82f6]">H</span>ansa<span className="text-[#3b82f6]"> G</span>unasinghe
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-mono transition-colors ${
                activeSection === item.id ? "text-[#3b82f6]" : "text-[#ccd6f6] hover:text-[#3b82f6]"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <span className="text-[#3b82f6]">0{i + 1}.</span> {item.label}
            </motion.button>
          ))}

          <motion.a
            href="https://drive.google.com/file/d/1dn1D43CsXIzU6kGIlfX4sc49u1KDiOZa/view?usp=sharing"
            className="px-4 py-2 border border-[#3b82f6] text-[#3b82f6] rounded text-sm font-mono hover:bg-[#3b82f6]/10 transition-colors"
            target="_blank"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-[#ccd6f6]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#112240] border-b border-[#233554]"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-mono transition-colors ${
                  activeSection === item.id ? "text-[#3b82f6]" : "text-[#ccd6f6] hover:text-[#3b82f6]"
                }`}
              >
                <span className="text-[#3b82f6]">0{i + 1}.</span> {item.label}
              </button>
            ))}

            <a
              href="#"
              className="px-4 py-2 border border-[#3b82f6] text-[#3b82f6] rounded text-sm font-mono hover:bg-[#3b82f6]/10 transition-colors self-start"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
