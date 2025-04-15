"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  number: string
  title: string
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex items-center gap-4 mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
        <span className="text-[#3b82f6] font-mono text-xl mr-2">{number}.</span> {title}
      </h2>
      <div className="h-px bg-[#233554] flex-grow"></div>
    </motion.div>
  )
}
