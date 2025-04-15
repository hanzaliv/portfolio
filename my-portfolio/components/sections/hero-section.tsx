"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  onContactClick: () => void
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-12">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#3b82f6] font-mono mb-5"
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
          I'm a fullstack developer specializing in building exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClick}
            className="px-7 py-4 bg-transparent text-[#3b82f6] border border-[#3b82f6] rounded font-mono text-sm hover:bg-[#3b82f6]/10 transition-colors"
          >
            Check out my work!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
