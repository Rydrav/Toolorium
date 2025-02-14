"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useAnimation } from "framer-motion"
import Link from "next/link"
import { ChevronUp, ArrowLeft } from "lucide-react"
import Navbar from "../../../../components/Navbar"
import Footer from "../../../../components/Footer"

export default function BasicCalculatorPage() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const { scrollY } = useScroll()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const backButtonControls = useAnimation()

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

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const updateButtons = () => {
      if (scrollY.get() > window.innerHeight / 2) {
        setShowScrollTop(true)
        backButtonControls.start({ bottom: "88px", transition: { duration: 0.3 } })
      } else {
        setShowScrollTop(false)
        backButtonControls.start({ bottom: "32px", transition: { duration: 0.3 } })
      }
    }

    const unsubscribe = scrollY.onChange(updateButtons)
    return () => unsubscribe()
  }, [scrollY, backButtonControls])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("")
      setResult("")
    } else if (value === "Backspace") {
      setInput((prev) => prev.slice(0, -1))
    } else if (value === "=") {
      try {
        setResult(eval(input).toString())
      } catch (error) {
        setResult("Error")
      }
    } else {
      setInput((prev) => {
        if (value === "." && prev.includes(".")) return prev
        if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(prev.slice(-1))) {
          return prev.slice(0, -1) + value
        }
        return prev + value
      })
    }
  }

  const handleKeyDown = (event) => {
    const key = event.key
    if (/[0-9+\-*/.=]/.test(key)) {
      event.preventDefault()
      handleClick(key)
    } else if (key === "Enter") {
      event.preventDefault()
      try {
        setResult(eval(input).toString())
      } catch (error) {
        setResult("Error")
      }
    } else if (key === "Backspace") {
      event.preventDefault()
      handleClick("Backspace")
    } else if (key.toLowerCase() === "c") {
      event.preventDefault()
      handleClick("AC")
    }
  }

  const buttonClass =
    "w-16 h-16 text-2xl font-bold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"

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
          <h1 className="text-5xl font-bold mb-4">Basic Calculator</h1>
          <p className="text-xl">Perform simple arithmetic operations</p>
        </motion.div>

        <div className="flex justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg">
            <div className="bg-gray-800 text-white text-right p-4 rounded-lg mb-4">
              <div className="text-lg mb-2">{input}</div>
              <div className="text-4xl">{result}</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {["7", "8", "9", "/"].map((btn) => (
                <button key={btn} onClick={() => handleClick(btn)} className={buttonClass}>
                  {btn}
                </button>
              ))}
              {["4", "5", "6", "*"].map((btn) => (
                <button key={btn} onClick={() => handleClick(btn)} className={buttonClass}>
                  {btn}
                </button>
              ))}
              {["1", "2", "3", "-"].map((btn) => (
                <button key={btn} onClick={() => handleClick(btn)} className={buttonClass}>
                  {btn}
                </button>
              ))}
              {["0", ".", "=", "+"].map((btn) => (
                <button key={btn} onClick={() => handleClick(btn)} className={buttonClass}>
                  {btn}
                </button>
              ))}
              <button onClick={() => handleClick("AC")} className={`${buttonClass} col-span-2`}>
                AC
              </button>
              <button onClick={() => handleClick("Backspace")} className={`${buttonClass} col-span-2`}>
                ←
              </button>
            </div>
          </div>
        </div>

        <Link href="/conversion-calculation/calculator" passHref>
          <motion.button
            animate={backButtonControls}
            initial={{ bottom: "32px" }}
            className="fixed right-8 bg-yellow-400 text-purple-900 rounded-full p-3 shadow-lg z-50"
            aria-label="Go back to Calculator selection"
          >
            <ArrowLeft size={24} />
          </motion.button>
        </Link>

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
