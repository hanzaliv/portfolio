"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Menu, X, ExternalLink, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

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

  function ProjectCard({ project, index }: { project: any; index: number }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const totalSlides = project.media.length

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }

    // Ensure video plays when it's the active slide
    useEffect(() => {
      if (project.media[currentSlide].type === "video" && videoRef.current) {
        videoRef.current.play().catch((err) => console.error("Video play failed:", err))
      }
    }, [currentSlide, project.media])

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-12 gap-8 items-start"
      >
        {/* Project Media Carousel - Always on top for mobile, alternating sides for desktop */}
        <div className={`md:col-span-7 order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
          <div className="relative aspect-video rounded overflow-hidden group">
            {/* Media Carousel */}
            <div className="relative w-full h-full">
              {project.media.map((item: any, i: number) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {item.type === "video" ? (
                    <video
                      ref={i === 0 ? videoRef : null}
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      autoPlay={i === 0}
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={`${project.title} - Image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              ))}

              {/* Carousel Controls */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between z-20 px-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-[#0a192f]/80 text-[#ccd6f6] hover:bg-primary/80 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-[#0a192f]/80 text-[#ccd6f6] hover:bg-primary/80 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {project.media.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentSlide ? "bg-primary" : "bg-[#ccd6f6]/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className={`md:col-span-5 order-2 ${index % 2 === 1 ? "md:order-1 md:text-right" : "md:order-2"}`}>
          <p className="font-mono text-primary text-sm mb-1">Featured Project</p>
          <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4 hover:text-primary transition-colors">
            <a href={project.links.external} className="focus:outline-none">
              {project.title}
            </a>
          </h3>
          <div className="p-6 rounded bg-[#112240] shadow-xl mb-4">
            <p className="text-[#a8b2d1]">{project.description}</p>
          </div>
          <ul
            className={`flex flex-wrap gap-x-4 gap-y-2 mt-4 font-mono text-sm text-[#a8b2d1] ${
              index % 2 === 1 ? "md:justify-end" : ""
            }`}
          >
            {project.tech.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className={`flex mt-4 gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
            <a href={project.links.github} className="text-[#ccd6f6] hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={project.links.external} className="text-[#ccd6f6] hover:text-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-[#8892b0] overflow-hidden">
      {/* Simple background animation */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              opacity: 0.07,
            }}
          />
        ))}
      </div>

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#112240]">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-[#ccd6f6]"
          >
            <span className="text-primary">Y</span>our<span className="text-primary">N</span>ame
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-mono transition-colors ${
                  activeSection === item.id ? "text-primary" : "text-[#ccd6f6] hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <span className="text-primary">0{i + 1}.</span> {item.label}
              </motion.button>
            ))}

            <motion.a
              href="#"
              className="px-4 py-2 border border-primary text-primary rounded text-sm font-mono hover:bg-primary/10 transition-colors"
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
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-mono transition-colors ${
                    activeSection === item.id ? "text-primary" : "text-[#ccd6f6] hover:text-primary"
                  }`}
                >
                  <span className="text-primary">0{i + 1}.</span> {item.label}
                </button>
              ))}

              <a
                href="#"
                className="px-4 py-2 border border-primary text-primary rounded text-sm font-mono hover:bg-primary/10 transition-colors self-start"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main content with padding for social links on larger screens */}
      <main className="container mx-auto px-6 md:px-16 lg:px-24 pt-24 pb-12 relative z-10">
        {/* Home Section */}
        <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-12">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary font-mono mb-5"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4"
            >
              Your Name.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6"
            >
              I build things for the web.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-lg text-[#8892b0] mb-12 max-w-xl"
            >
              I'm a fullstack developer specializing in building exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("projects")}
                className="px-7 py-4 bg-transparent text-primary border border-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
              >
                Check out my work!
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Mobile Social Links - Only visible on small screens */}
        <div className="md:hidden py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-6"
          >
            <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors p-2">
              <Github size={20} />
            </a>
            <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors p-2">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors p-2">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-[#a8b2d1] hover:text-primary transition-colors p-2">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
                <span className="text-primary font-mono text-xl mr-2">01.</span> About Me
              </h2>
              <div className="h-px bg-[#233554] flex-grow"></div>
            </motion.div>

            <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="text-[#8892b0] mb-4">
                  Hello! My name is Your Name and I enjoy creating things that live on the internet. My interest in web
                  development started back in 2015 when I decided to try editing custom Tumblr themes — turns out
                  hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className="text-[#8892b0] mb-4">
                  Fast-forward to today, and I've had the privilege of working at
                  <span className="text-primary"> an advertising agency</span>,
                  <span className="text-primary"> a start-up</span>,
                  <span className="text-primary"> a huge corporation</span>, and
                  <span className="text-primary"> a student-led design studio</span>.
                </p>
                <p className="text-[#8892b0] mb-4">
                  My main focus these days is building accessible, inclusive products and digital experiences for a
                  variety of clients.
                </p>
                <p className="text-[#8892b0]">Here are a few technologies I've been working with recently:</p>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 font-mono text-sm">
                  {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map((tech) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center text-[#8892b0]"
                    >
                      <span className="text-primary mr-2">▹</span> {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <div className="relative w-full max-w-[300px] aspect-square mx-auto">
                  <div className="absolute inset-0 border-2 border-primary rounded translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-primary/20 rounded group-hover:bg-transparent transition-colors duration-300"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Profile"
                    fill
                    className="rounded object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
                <span className="text-primary font-mono text-xl mr-2">02.</span> Where I've Worked
              </h2>
              <div className="h-px bg-[#233554] flex-grow"></div>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  date: "2021 — Present",
                  title: "Senior Fullstack Developer",
                  company: "Tech Innovations Inc.",
                  description: [
                    "Led the development of a customer-facing portal that increased user engagement by 40%",
                    "Architected and implemented microservices using Node.js and Docker",
                    "Mentored junior developers and conducted code reviews",
                    "Optimized database queries resulting in 60% faster load times",
                  ],
                  tech: ["React", "Node.js", "TypeScript", "Docker"],
                },
                {
                  date: "2018 — 2020",
                  title: "Fullstack Developer",
                  company: "Digital Solutions Ltd.",
                  description: [
                    "Developed and maintained multiple client websites using React and Express",
                    "Implemented authentication systems and payment integrations",
                    "Collaborated with designers to implement responsive UI components",
                    "Participated in agile development processes and sprint planning",
                  ],
                  tech: ["React", "Express", "MongoDB", "AWS"],
                },
                {
                  date: "2016 — 2018",
                  title: "Frontend Developer",
                  company: "WebCraft Agency",
                  description: [
                    "Built interactive web applications using JavaScript and jQuery",
                    "Converted design mockups into responsive HTML/CSS layouts",
                    "Optimized website performance and accessibility",
                    "Worked closely with backend developers to integrate APIs",
                  ],
                  tech: ["JavaScript", "jQuery", "HTML", "CSS"],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-32 flex-shrink-0 font-mono text-sm text-[#8892b0]">{job.date}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-[#ccd6f6] group-hover:text-primary transition-colors">
                        {job.title}
                        <span className="text-primary"> @ {job.company}</span>
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {job.description.map((item, i) => (
                          <li key={i} className="flex text-[#8892b0]">
                            <span className="text-primary mr-2 mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.tech.map((tech) => (
                          <span key={tech} className="text-xs font-mono text-[#8892b0]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
                <span className="text-primary font-mono text-xl mr-2">03.</span> Some Things I've Built
              </h2>
              <div className="h-px bg-[#233554] flex-grow"></div>
            </motion.div>

            <div className="space-y-32">
              {[
                {
                  id: 1,
                  title: "Featured Project One",
                  description:
                    "A web application that allows users to search for and visualize data from various sources. Built with a focus on performance and accessibility. The dashboard provides real-time analytics and customizable widgets.",
                  tech: ["React", "TypeScript", "Node.js", "MongoDB"],
                  media: [
                    {
                      type: "video",
                      src: "/placeholder.svg?height=400&width=700&text=Project+Video",
                      poster: "/placeholder.svg?height=400&width=700&text=Video+Poster",
                    },
                    { type: "image", src: "/placeholder.svg?height=400&width=700&text=Project+1+Image+2" },
                    { type: "image", src: "/placeholder.svg?height=400&width=700&text=Project+1+Image+3" },
                  ],
                  links: {
                    github: "#",
                    external: "#",
                  },
                },
                {
                  id: 2,
                  title: "Featured Project Two",
                  description:
                    "An e-commerce platform with advanced filtering capabilities and a seamless checkout process. Integrated with multiple payment gateways and featuring a responsive design that works across all devices.",
                  tech: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
                  media: [
                    { type: "image", src: "/placeholder.svg?height=400&width=700&text=Project+2+Image+1" },
                    { type: "image", src: "/placeholder.svg?height=400&width=700&text=Project+2+Image+2" },
                    { type: "image", src: "/placeholder.svg?height=400&width=700&text=Project+2+Image+3" },
                  ],
                  links: {
                    github: "#",
                    external: "#",
                  },
                },
                {
                  id: 3,
                  title: "Featured Project Three",
                  description:
                    "A content management system built for bloggers and content creators. Features a markdown editor, image optimization, and SEO tools. The platform also includes analytics to track visitor engagement.",
                  tech: ["Vue.js", "Express", "PostgreSQL", "AWS"],
                  media: [
                    { type: "image", src: "/placeholder.svg?height=400&width=700&text=Project+3+Image+1" },
                    { type: "image", src: "/placeholder.svg?height=400&width=700&text=Project+3+Image+2" },
                    {
                      type: "video",
                      src: "/placeholder.svg?height=400&width=700&text=Project+3+Video",
                      poster: "/placeholder.svg?height=400&width=700&text=Video+Poster",
                    },
                  ],
                  links: {
                    github: "#",
                    external: "#",
                  },
                },
              ].map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl font-bold text-[#ccd6f6] mt-24 mb-8 text-center"
            >
              Other Noteworthy Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((project, i) => (
                <motion.div
                  key={`small-${project}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10 }}
                  className="bg-[#112240] rounded-md p-6 flex flex-col h-full transition-all hover:shadow-xl"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                      <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 hover:text-primary transition-colors">
                    <a href="#">Small Project {project}</a>
                  </h3>
                  <p className="text-[#a8b2d1] mb-6 flex-grow">
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                  </p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-[#a8b2d1]">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind</li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl mx-auto text-center"
          >
            <p className="font-mono text-primary mb-4">04. What's Next?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
            <p className="text-[#8892b0] mb-12">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-block px-8 py-4 border border-primary text-primary rounded font-mono hover:bg-primary/10 transition-colors"
            >
              Say Hello
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="py-6 text-center text-[#8892b0] font-mono text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>Designed & Built by Your Name</p>
        </motion.div>
      </footer>

      {/* Fixed Social Links - Only visible on medium screens and up */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-6 md:left-10 lg:left-12 hidden md:block z-30"
      >
        <div className="flex flex-col items-center gap-6">
          <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-[#a8b2d1] hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <div className="h-24 w-px bg-[#a8b2d1]"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 right-6 md:right-10 lg:right-12 hidden md:block z-30"
      >
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="text-[#a8b2d1] hover:text-primary transition-colors font-mono text-xs vertical-text"
          >
            your.email@example.com
          </a>
          <div className="h-24 w-px bg-[#a8b2d1]"></div>
        </div>
      </motion.div>

      {/* Contact Popup */}
      {contactOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#112240] border-t border-[#233554] shadow-2xl"
        >
          <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#ccd6f6]">
                <span className="text-primary font-mono text-xl mr-2">04.</span> Contact Me
              </h3>
              <button
                onClick={() => setContactOpen(false)}
                className="text-[#8892b0] hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Options */}
              <div className="space-y-6">
                <p className="text-[#8892b0] mb-4">
                  I'm currently available for freelance work or full-time positions. Feel free to reach out through any
                  of these channels:
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 text-[#a8b2d1] hover:text-primary transition-colors group"
                  >
                    <div className="p-3 border border-[#233554] rounded-full group-hover:border-primary transition-colors">
                      <Mail size={20} />
                    </div>
                    <span>your.email@example.com</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 text-[#a8b2d1] hover:text-primary transition-colors group"
                  >
                    <div className="p-3 border border-[#233554] rounded-full group-hover:border-primary transition-colors">
                      <Github size={20} />
                    </div>
                    <span>github.com/yourusername</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 text-[#a8b2d1] hover:text-primary transition-colors group"
                  >
                    <div className="p-3 border border-[#233554] rounded-full group-hover:border-primary transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <span>linkedin.com/in/yourname</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 text-[#a8b2d1] hover:text-primary transition-colors group"
                  >
                    <div className="p-3 border border-[#233554] rounded-full group-hover:border-primary transition-colors">
                      <Twitter size={20} />
                    </div>
                    <span>twitter.com/yourhandle</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#0a192f] p-6 rounded border border-[#233554]">
                <h4 className="text-xl font-bold text-[#ccd6f6] mb-4">Send me a message</h4>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-[#8892b0] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#ccd6f6] focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-[#8892b0] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#ccd6f6] focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-[#8892b0] mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#ccd6f6] focus:border-primary focus:outline-none transition-colors"
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-transparent text-primary border border-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

