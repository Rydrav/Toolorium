"use client"

import CategoryPage from "../../components/CategoryPage"
import NavigationArrows from "../../components/NavigationArrows"
import { Calculator, Repeat, DollarSign, Activity, Calendar } from "lucide-react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const tools = [
  {
    icon: Calculator,
    title: "Online Calculator (Basic & Scientific)",
    description: "Perform basic and advanced calculations with ease.",
    link: "/conversion-calculation/calculator",
  },
  {
    icon: Repeat,
    title: "Unit Converter",
    description: "Convert between various units of measurement.",
    link: "/conversion-calculation/unit-converter",
  },
  {
    icon: DollarSign,
    title: "Currency Converter",
    description: "Convert between different currencies with up-to-date exchange rates.",
    link: "/conversion-calculation/currency-converter",
  },
  {
    icon: Activity,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index (BMI) and assess your weight status.",
    link: "/conversion-calculation/bmi-calculator",
  },
  {
    icon: Calculator,
    title: "Loan Simulator",
    description: "Estimate loan payments and interest rates.",
    link: "/conversion-calculation/loan-simulator",
  },
  {
    icon: Calendar,
    title: "Date Converter",
    description: "Convert dates between different formats and calculate date differences.",
    link: "/conversion-calculation/date-converter",
  },
]

export default function ConversionCalculation() {
  return (
    <div className="relative">
      <Navbar />
      <CategoryPage
        title="Conversion and Calculation Tools"
        description="Powerful tools for quick conversions and complex calculations"
        tools={tools}
      />
      <NavigationArrows backLink="/" />
      <Footer />
    </div>
  )
}
