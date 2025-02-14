"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import NavigationArrows from "../../../../components/NavigationArrows"
import Footer from "../../../../components/Footer"
import Navbar from "../../../../components//Navbar"

export default function BasicCalculatorPage() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  // Creamos un ref para mantener el valor actualizado de "input"
  const inputRef = useRef(input)
  useEffect(() => {
    inputRef.current = input
  }, [input])

  // Hacemos scroll al top al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Función para manejar clics en los botones de la calculadora
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
        // Evitamos múltiples puntos o operadores consecutivos
        if (value === "." && prev.includes(".")) return prev
        if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(prev.slice(-1))) {
          return prev.slice(0, -1) + value
        }
        return prev + value
      })
    }
  }

  // Función para manejar los eventos del teclado
  const handleKeyDown = (event) => {
    const key = event.key
    if (/[0-9+\-*/.=]/.test(key)) {
      event.preventDefault()
      handleClick(key)
    } else if (key === "Enter") {
      event.preventDefault()
      try {
        // Usamos inputRef.current para obtener el valor actualizado
        setResult(eval(inputRef.current).toString())
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

  // Agregamos el event listener para el teclado una sola vez
  useEffect(() => {
    const handleKey = (event) => handleKeyDown(event)
    window.addEventListener("keydown", handleKey)
    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  }, [handleKeyDown]) // Added handleKeyDown to dependencies

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

        <NavigationArrows backLink="/conversion-calculation/calculator" />
      </main>
      <Footer />
    </div>
  )
}

