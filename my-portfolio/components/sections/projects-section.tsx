"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"
import ProjectCard, { type Project } from "../projects/project-card"
import SmallProjectCard from "../projects/small-project-card"

export default function ProjectsSection() {
  const featuredProjects: Project[] = [
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
  ]

  const smallProjects = [
    {
      id: 1,
      title: "Small Project 1",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      tech: ["React", "TypeScript", "Tailwind"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 2,
      title: "Small Project 2",
      description: "A weather application that shows current conditions and forecasts for any location.",
      tech: ["JavaScript", "Weather API", "CSS"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 3,
      title: "Small Project 3",
      description: "A task management tool with drag-and-drop functionality and priority settings.",
      tech: ["React", "Redux", "Firebase"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 4,
      title: "Small Project 4",
      description: "A recipe finder app that suggests meals based on available ingredients.",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 5,
      title: "Small Project 5",
      description: "A budget tracker with visualization tools and expense categorization.",
      tech: ["React", "D3.js", "Express"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 6,
      title: "Small Project 6",
      description: "A markdown editor with live preview and custom formatting options.",
      tech: ["JavaScript", "Marked.js", "CSS"],
      links: {
        github: "#",
        external: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="03" title="Some Things I've Built" />

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
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
          {smallProjects.map((project, index) => (
            <SmallProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
