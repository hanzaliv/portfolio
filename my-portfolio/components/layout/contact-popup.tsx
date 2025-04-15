"use client"

import { motion } from "framer-motion"
import { X, Mail, Github, Linkedin, Twitter, Phone } from "lucide-react"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#112240] border-t border-[#233554] shadow-2xl"
    >
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#ccd6f6]">
            <span className="text-[#3b82f6] font-mono text-xl mr-2">04.</span> Contact Me
          </h3>
          <button onClick={onClose} className="text-[#8892b0] hover:text-[#3b82f6] transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Options */}
          <div className="space-y-6">
            <p className="text-[#8892b0] mb-4">
              I'm currently available for freelance work or full-time positions. Feel free to reach out through any of
              these channels:
            </p>

            <div className="space-y-4">
              <a
                href="mailto:wahansaliviru@gmail.com"
                className="flex items-center gap-3 text-[#a8b2d1] hover:text-[#3b82f6] transition-colors group"
              >
                <div className="p-3 border border-[#233554] rounded-full group-hover:border-[#3b82f6] transition-colors">
                  <Mail size={20} />
                </div>
                <span>wahansaliviru@gmail.com</span>
              </a>

              <a
                href="https://github.com/hanzaliv"
                className="flex items-center gap-3 text-[#a8b2d1] hover:text-[#3b82f6] transition-colors group"
                target="_blank"
              >
                <div className="p-3 border border-[#233554] rounded-full group-hover:border-[#3b82f6] transition-colors">
                  <Github size={20} />
                </div>
                <span>Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hansa-gunasinghe"
                className="flex items-center gap-3 text-[#a8b2d1] hover:text-[#3b82f6] transition-colors group"
                target="_blank"
              >
                <div className="p-3 border border-[#233554] rounded-full group-hover:border-[#3b82f6] transition-colors">
                  <Linkedin size={20} />
                </div>
                <span>Linkedin</span>
              </a>

                <a 
                href="https://wa.me/94703767949"
                className="flex items-center gap-3 text-[#a8b2d1] hover:text-[#3b82f6] transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="p-3 border border-[#233554] rounded-full group-hover:border-[#3b82f6] transition-colors">
                  <Phone size={20} />
                </div>
                <span>WhatsApp</span>
                </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0a192f] p-6 rounded border border-[#233554]">
            <h4 className="text-xl font-bold text-[#ccd6f6] mb-4">Send me a message</h4>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-[#8892b0] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#ccd6f6] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-[#8892b0] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#ccd6f6] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-[#8892b0] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#ccd6f6] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-transparent text-[#3b82f6] border border-[#3b82f6] rounded font-mono text-sm hover:bg-[#3b82f6]/10 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
