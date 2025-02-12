"use client"

import CategoryPage from "../../components/CategoryPage"
import { Palette, QrCode, Quote, GitBranch } from "lucide-react"

const tools = [
  {
    icon: Palette,
    title: "Color Palette Generator",
    description: "Generate beautiful color palettes for your designs.",
    link: "/design-creativity/color-palette",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Create QR codes for various purposes.",
    link: "/design-creativity/qr-code",
  },
  {
    icon: Quote,
    title: "Inspirational Quote Generator",
    description: "Get inspired with randomly generated quotes.",
    link: "/design-creativity/quote-generator",
  },
  {
    icon: GitBranch,
    title: "Diagram Generator",
    description: "Create diagrams and flowcharts easily.",
    link: "/design-creativity/diagram-generator",
  },
]

export default function DesignCreativity() {
  return (
    <CategoryPage
      title="Design and Creativity Tools"
      description="Unleash your creativity with our design tools"
      tools={tools}
    />
  )
}
