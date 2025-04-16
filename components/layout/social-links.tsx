"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function SocialLinks() {
  return (
    <>
      {/* Mobile Social Links - Only visible on small screens */}
      <div className="md:hidden py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com/hanzaliv" className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors p-2">
            <Github size={20} />
          </a>
          {/* <a href="#" className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors p-2">
            <Twitter size={20} />
          </a> */}
          <a href="https://www.linkedin.com/in/hansa-gunasinghe/" className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors p-2">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your.email@example.com" className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors p-2">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Fixed Social Links - Only visible on medium screens and up */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-6 md:left-10 lg:left-12 hidden md:block z-30"
      >
        <div className="flex flex-col items-center gap-6">
          <a href="https://github.com/hanzaliv" className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          {/* <a href="#" className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors">
            <Twitter size={20} />
          </a> */}
          <a href="https://www.linkedin.com/in/hansa-gunasinghe/" className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors" target="_blank" rel="noopener noreferrer">
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
            className="text-[#a8b2d1] hover:text-[#3b82f6] transition-colors font-mono text-xs vertical-text"
          >
            wahansaliviru@gmail.com
          </a>
          <div className="h-24 w-px bg-[#a8b2d1]"></div>
        </div>
      </motion.div>
    </>
  )
}
