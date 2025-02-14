"use client"

import { motion, useScroll } from "framer-motion"
import {
  Calculator,
  FileText,
  Lock,
  Palette,
  Code,
  BarChart,
  Dice1,
  DollarSign,
  Cog,
  FileIcon,
  Edit,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const tools = [
  {
    icon: Calculator,
    title: "Conversion and Calculation",
    description: "Powerful tools for quick conversions and complex calculations.",
    link: "/conversion-calculation",
  },
  {
    icon: Cog,
    title: "Productivity and Management",
    description: "Boost your efficiency with our suite of productivity tools.",
    link: "/productivity-management",
  },
  {
    icon: FileText,
    title: "Language and Writing",
    description: "Enhance your writing with advanced language tools.",
    link: "/language-writing",
  },
  {
    icon: FileIcon,
    title: "File Conversion and Compression",
    description: "Convert and compress files with ease.",
    link: "/file-tools",
  },
  {
    icon: Edit,
    title: "Editing and Multimedia",
    description: "Create and edit multimedia content effortlessly.",
    link: "/editing-multimedia",
  },
  {
    icon: Lock,
    title: "Security and Privacy",
    description: "Protect your data with our security and privacy tools.",
    link: "/security-privacy",
  },
  {
    icon: Palette,
    title: "Design and Creativity",
    description: "Unleash your creativity with our design tools.",
    link: "/design-creativity",
  },
  {
    icon: Code,
    title: "Developer and Programming",
    description: "Essential tools for developers and programmers.",
    link: "/developer-programming",
  },
  {
    icon: BarChart,
    title: "Web Analysis and Optimization",
    description: "Analyze and optimize your web presence.",
    link: "/web-analysis",
  },
  {
    icon: Dice1,
    title: "Random Generation",
    description: "Generate random data for various purposes.",
    link: "/random-generation",
  },
  {
    icon: DollarSign,
    title: "Financial and Monitoring",
    description: "Track finances and monitor important metrics.",
    link: "/financial-monitoring",
  },
]

export default function Home() {
  const { scrollY } = useScroll()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const updateScrollTopButton = () => {
      if (scrollY.get() > window.innerHeight / 2) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    const unsubscribe = scrollY.onChange(updateScrollTopButton)
    return () => unsubscribe()
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <Navbar />
      <main className="flex-grow text-white p-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative z-10"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Toolorium</h1>
          <p className="text-xl">Your one-stop shop for all the tools you need</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.link} passHref>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <tool.icon className="w-12 h-12 mb-4 text-yellow-300" />
                  <h2 className="text-2xl font-semibold mb-2">{tool.title}</h2>
                  <p className="mb-4 text-sm">{tool.description}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300 text-center"
                >
                  Explore Tools
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.button
          className="fixed bottom-8 right-8 bg-yellow-400 text-purple-900 rounded-full p-3 shadow-lg z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
        >
          <ChevronUp size={24} />
        </motion.button>
      </main>
      <Footer />
    </div>
  )
}

