"use client"

import CategoryPage from "../../components/CategoryPage"
import { Hash, Shuffle } from "lucide-react"

const tools = [
  {
    icon: Hash,
    title: "Random Number Generator",
    description: "Generate random numbers for various purposes.",
    link: "/random-generation/number-generator",
  },
  {
    icon: Shuffle,
    title: "Random Picker",
    description: "Randomly select items from a list.",
    link: "/random-generation/picker",
  },
]

export default function RandomGeneration() {
  return (
    <CategoryPage
      title="Random Generation Tools"
      description="Generate random data for various purposes"
      tools={tools}
    />
  )
}
