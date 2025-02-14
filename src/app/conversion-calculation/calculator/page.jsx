"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calculator } from "lucide-react"
import { useEffect } from "react"
import NavigationArrows from "../../../components/NavigationArrows"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"

const tools = [
  {
    icon: Calculator,
    title: "Basic Calculator",
    description: "Perform basic arithmetic operations with ease.",
    link: "/conversion-calculation/calculator/basic",
  },
  {
    icon: Calculator,
    title: "Scientific Calculator",
    description: "Advanced calculations for scientific and engineering needs.",
    link: "/conversion-calculation/calculator/scientific",
  },
]

export default function CalculatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          <h1 className="text-5xl font-bold mb-4">Online Calculator</h1>
          <p className="text-xl">Choose between Basic and Scientific calculator</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300 mt-4"
                >
                  Use Calculator
                </motion.button>
              </motion.div>
            </Link>
          ))}
        </div>

        <NavigationArrows backLink="/conversion-calculation" />
      </main>
      <Footer />
    </div>
  )
}

