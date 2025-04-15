"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-6 text-center text-[#8892b0] font-mono text-sm">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Designed & Built by Hansa Gunasinghe © 2025</p>
      </motion.div>
    </footer>
  )
}
