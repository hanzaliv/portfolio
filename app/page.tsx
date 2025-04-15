"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SocialLinks from "@/components/layout/social-links"
import ContactPopup from "@/components/layout/contact-popup"
import BackgroundAnimation from "@/components/background-animation"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"

export default function Portfolio() {
  const [contactOpen, setContactOpen] = useState(false)

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-[#8892b0] overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Header/Navigation */}
      <Header />

      {/* Main content with padding for social links on larger screens */}
      <main className="container mx-auto px-6 md:px-16 lg:px-24 pt-24 pb-12 relative z-10">
        {/* Home Section */}
        <HeroSection onContactClick={scrollToProjects} />

        {/* Mobile Social Links */}
        <SocialLinks />

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection onContactClick={() => setContactOpen(true)} />
      </main>

      <Footer />

      {/* Contact Popup */}
      <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
