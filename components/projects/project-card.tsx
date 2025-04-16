"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Media {
  type: "image" | "video"
  src: string
  poster?: string
  isVertical?: boolean
}

interface ProjectLinks {
  github: string
  external: string
}

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  media: Media[]
  links: ProjectLinks
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const totalSlides = project.media.length
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null)
  const AUTO_SCROLL_DELAY = 3000 // 5 seconds between slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Set up auto-scrolling
  useEffect(() => {
    // Only set up auto-scrolling if there's more than one slide
    if (totalSlides > 1 && !isPaused) {
      autoScrollInterval.current = setInterval(() => {
        nextSlide()
      }, AUTO_SCROLL_DELAY)
    }

    // Clean up interval on unmount or when isPaused changes
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [totalSlides, isPaused])

  // Ensure video plays when it's the active slide
  useEffect(() => {
    if (project.media[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Video play failed:", err))
    }
  }, [currentSlide, project.media])

  // Handle mouse enter/leave to pause/resume auto-scrolling
  const handleMouseEnter = () => {
    setIsPaused(true)
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current)
      autoScrollInterval.current = null
    }
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

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
        <div
          className="relative aspect-video rounded overflow-hidden group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Media Carousel */}
          <div className="relative w-full h-full">
            {project.media.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    ref={i === currentSlide ? videoRef : null}
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover"
                    autoPlay={i === currentSlide}
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={`${project.title} - Image ${i + 1}`}
                    fill
                    // className="object-contain bg-black"
                    className={`${item.isVertical ? "object-contain bg-black" : ""}`}
                    />
                )}
              </div>
            ))}

            {/* Auto-scroll indicator */}
            {!isPaused && totalSlides > 1 && (
              <div className="absolute bottom-0 left-0 h-1 bg-[#3b82f6]/50 z-20">
                <motion.div
                  className="h-full bg-[#3b82f6]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: AUTO_SCROLL_DELAY / 1000,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              </div>
            )}

            {/* Carousel Controls */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between z-20 px-4">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevSlide()
                }}
                className="p-2 rounded-full bg-[#0a192f]/80 text-[#ccd6f6] hover:bg-[#3b82f6]/80 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextSlide()
                }}
                className="p-2 rounded-full bg-[#0a192f]/80 text-[#ccd6f6] hover:bg-[#3b82f6]/80 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {project.media.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentSlide(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentSlide ? "bg-[#3b82f6]" : "bg-[#ccd6f6]/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#3b82f6]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className={`md:col-span-5 order-2 ${index % 2 === 1 ? "md:order-1 md:text-right" : "md:order-2"}`}>
        <p className="font-mono text-[#3b82f6] text-sm mb-1">Featured Project</p>
        <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4 hover:text-[#3b82f6] transition-colors">
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
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className={`flex mt-4 gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
            {project.links.github !== "#" && (
            <a href={project.links.github} className="text-[#ccd6f6] hover:text-[#3b82f6] transition-colors">
              <Github size={20} />
            </a>
            )}
            {project.links.external !== "#" && (
            <a href={project.links.external} className="text-[#ccd6f6] hover:text-[#3b82f6] transition-colors">
              <ExternalLink size={20} />
            </a>
            )}
        </div>
      </div>
    </motion.div>
  )
}
