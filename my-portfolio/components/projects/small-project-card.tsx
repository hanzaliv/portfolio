"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

interface SmallProjectProps {
  project: {
    id: number
    title: string
    description: string
    tech: string[]
    links: {
      github: string
      external: string
    }
  }
  index: number
}

export default function SmallProjectCard({ project, index }: SmallProjectProps) {
  return (
    <motion.div
      key={`small-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className="bg-[#112240] rounded-md p-6 flex flex-col h-full transition-all hover:shadow-xl"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="text-[#3b82f6]">
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
          <a href={project.links.github} className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors">
            <Github size={18} />
          </a>
          <a href={project.links.external} className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 hover:text-[#3b82f6] transition-colors">
        <a href={project.links.external}>{project.title}</a>
      </h3>
      <p className="text-[#a8b2d1] mb-6 flex-grow">{project.description}</p>
      <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-[#a8b2d1]">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </motion.div>
  )
}
