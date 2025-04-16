"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"
import ProjectCard, { type Project } from "../projects/project-card"
import SmallProjectCard from "../projects/small-project-card"
import jeewa from "@/images/jeewa/jeewa.png"


export default function ProjectsSection() {
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Jeewa Education Student Management System",
      description:
        "Designed and developed a scalable student management platform handling registration, counseling, visa processing, and branch operations for Jeewa Education Institution.",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Next.js",
        "Spring Boot",
        "AWS Cognito",
        "AWS S3",
        "Spring Cloud",
        "Microservices",
        "Role-Based Access Control",
        "JWT Authentication",
      ],
      media: [
        {
          type: "image",
          src: "/jeewa/jeewa.png",
        },
        { type: "image", src: "/jeewa/application view.png" },
        { type: "image", src: "jeewa/assign counselor.png" },
        { type: "image", src: "jeewa/counselor dashboard.png" },
        { type: "image", src: "jeewa/counselor student view.png" },
        { type: "image", src: "jeewa/new-application.png"},
      ],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 2,
      title: "MrPark Online Parking Reservation System",
      description: 
        "Built MrPark, a web-based parking reservation system, allows users to search, book, and manage parking slots seamlessly. Integrated real-time availability tracking, secure authentication, and booking management to improve user convenience and system reliability",
      tech: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Figma"
      ],
      media: [
        { type: "image", src: "/mrpark/home.png" },
        { type: "image", src: "/mrpark/signin.png" },
        { type: "image", src: "/mrpark/contact.png" },
        { type: "image", src: "/mrpark/admin.png" },
        { type: "image", src: "/mrpark/select-vehicle.png" },
        { type: "image", src: "/mrpark/slots.png" },
        { type: "image", src: "/mrpark/cart.png" },
        { type: "image", src: "/mrpark/checkout.png" },
      ],
      links: {
        github: "https://github.com/DhananjayaYN/Vehicle-Parking",
        external: "#",
      },
    },
    {
      id: 3,
      title: "UniMark: A Smart Attendance System for University",
      description:
        "UniMark is a mobile application designed to streamline attendance tracking in universities. It features real-time attendance management for multiple users, QR code generation based on student registration numbers, and an integrated QR scanner for efficient check-ins. The app also enables exporting detailed attendance records to Excel, making it a practical and powerful tool for academic institutions.",
      tech: [
        "Flutter",
        "Dart",
        "Node.js",
        "TypeScript",
        "Sqlite",
        "Digital Ocean",
        "Figma"
      ],
      media: [
        { type: "image", src: "/unimark/profile.jpeg", isVertical: true },
        { type: "image", src: "/unimark/navigation.jpeg", isVertical: true },
        { type: "image", src: "/unimark/export.jpeg", isVertical: true },
        { type: "image", src: "/unimark/qr.jpeg", isVertical: true },
        { type: "image", src: "/unimark/scanner.jpeg", isVertical: true },
        { type: "image", src: "/unimark/record.jpeg", isVertical: true },
      ],
      links: {
        github: "https://github.com/hanzaliv/qrscanner",
        external: "#",
      },
    },
    {
      id: 4,
      title: "Service Suite Android Application",
      description:
        "Service Suite (Android) : Developed the Android version of an existing Service Suite iOS and Web application using Flutter, ensuring seamless cross-platform functionality. Integrated the Google Maps API to enable location-based services and enhance user navigation. Focused on UI consistency, performance optimization, and robust API integrations to deliver a user experience aligned with the iOS counterpart.",
      tech: [
        "Flutter",
        "Dart",
        "Figma",
        "Google Maps API",
      ],
      media: [
        { type: "image", src: "/servicesuite/loading.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/login.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/navigation.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/no-assignment.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/file-manager-grid.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/file-manager-list.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/file-manager.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/map.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/payment.jpg", isVertical: true },
        { type: "image", src: "/servicesuite/timeclock.jpg", isVertical: true },
      ],
      links: {
        github: "#",
        external: "https://play.google.com/store/apps/details?id=com.suite.service_suite&hl=en",
      },
    },
  ]

  const smallProjects = [
    {
      id: 1,
      title: "Small Project 1",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      tech: ["React", "TypeScript", "Tailwind"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 2,
      title: "Small Project 2",
      description: "A weather application that shows current conditions and forecasts for any location.",
      tech: ["JavaScript", "Weather API", "CSS"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 3,
      title: "Small Project 3",
      description: "A task management tool with drag-and-drop functionality and priority settings.",
      tech: ["React", "Redux", "Firebase"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 4,
      title: "Small Project 4",
      description: "A recipe finder app that suggests meals based on available ingredients.",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 5,
      title: "Small Project 5",
      description: "A budget tracker with visualization tools and expense categorization.",
      tech: ["React", "D3.js", "Express"],
      links: {
        github: "#",
        external: "#",
      },
    },
    {
      id: 6,
      title: "Small Project 6",
      description: "A markdown editor with live preview and custom formatting options.",
      tech: ["JavaScript", "Marked.js", "CSS"],
      links: {
        github: "#",
        external: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="03" title="Some Things I've Built" />

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl font-bold text-[#ccd6f6] mt-24 mb-8 text-center"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {smallProjects.map((project, index) => (
            <SmallProjectCard key={project.id} project={project} index={index} />
          ))}
        </div> */}
      </div>
    </section>
  )
}
