"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "../ui/section-heading"

export default function AboutSection() {
  const technologies = ["Java, Spring Boot","ASP.Net", "TypeScript","Flutter", "React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "MySQL", "PostgreSQL", "AWS", "Docker"]

  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="01" title="About Me" />

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-[#8892b0] mb-4">
            Hello! My name is Hansa Gunasinghe and I’m a passionate Computer Science undergraduate at the University of Ruhuna. 
            I love building things that live on the internet — from web apps to backend systems that solve real-world problems.
            </p>
            <p className="text-[#8892b0] mb-4">
            My journey started with curiosity about how systems work, and over the years, I’ve developed strong skills in full-stack development, working with both frontend and backend technologies. 
            I enjoy creating clean, user-friendly interfaces as well as scalable and efficient systems.              
            {/* <span className="text-[#3b82f6]"> an advertising agency</span>,
              <span className="text-[#3b82f6]"> a start-up</span>,
              <span className="text-[#3b82f6]"> a huge corporation</span>, and
              <span className="text-[#3b82f6]"> a student-led design studio</span>. */}
            </p>
            <p className="text-[#8892b0] mb-4">
            These days, I’m focused on learning deeply about software architecture, microservices, and cloud technologies, while contributing to impactful projects.
            </p>
            <p className="text-[#8892b0]">Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 font-mono text-sm">
              {technologies.map((tech) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center text-[#8892b0]"
                >
                  <span className="text-[#3b82f6] mr-2">▹</span> {tech}
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
              <div className="absolute inset-0 border-2 border-[#3b82f6] rounded translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-[#3b82f6]/20 rounded group-hover:bg-transparent transition-colors duration-300"></div>
              <Image
                src="https://avatars.githubusercontent.com/u/141535071?v=4"
                alt="Profile"
                fill
                className="rounded object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
