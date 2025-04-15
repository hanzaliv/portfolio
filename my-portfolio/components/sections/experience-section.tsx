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
  ]

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Where I've Worked" />

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
