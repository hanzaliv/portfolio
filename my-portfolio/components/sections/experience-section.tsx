"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"

interface Job {
  date: string
  title: string
  company: string
  description: string[]
  tech: string[]
}

export default function ExperienceSection() {
  const jobs: Job[] = [
    {
      date: "2024 — Present",
      title: "Full Stack Developer | Freelancer",
      company: "Tringledo",
      description: [
        "Designed and developed dynamic mobile and web applications for real-world clients, ensuring performance,scalability, and user-centric design.",
        "Worked as a developer for Tringledo.com, contributing to various software solutions and technical implementations",
        "Managed end-to-end development, including UI/UX design, backend logic, database integration, and deployment.",
        "Collaborated with clients to define project requirements and deliver high-quality, maintainable code on time.",
      ],
      tech: ["React", "Node.js","Next.js", "TypeScript", "Flutter"],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Experience" />

        <div className="space-y-12">
          {jobs.map((job, index) => (
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
                  <h3 className="text-xl font-semibold text-[#ccd6f6] group-hover:text-[#3b82f6] transition-colors">
                    {job.title}
                    <span className="text-[#3b82f6]"> @ {job.company}</span>
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex text-[#8892b0]">
                        <span className="text-[#3b82f6] mr-2 mt-1">▹</span>
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
  )
}
