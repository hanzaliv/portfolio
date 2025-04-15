"use client"

import { motion } from "framer-motion"

interface ContactSectionProps {
  onContactClick: () => void
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="font-mono text-[#3b82f6] mb-4">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
        <p className="text-[#8892b0] mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible.
        </p>
        <button
          onClick={onContactClick}
          className="inline-block px-8 py-4 border border-[#3b82f6] text-[#3b82f6] rounded font-mono hover:bg-[#3b82f6]/10 transition-colors"
        >
          Say Hello
        </button>
      </motion.div>
    </section>
  )
}
