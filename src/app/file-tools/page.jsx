"use client"

import CategoryPage from "../../components/CategoryPage"
import { FileText, Minimize2 } from "lucide-react"

const tools = [
  {
    icon: FileText,
    title: "File Format Converter",
    description: "Convert files between various formats easily.",
    link: "/file-tools/format-converter",
  },
  {
    icon: Minimize2,
    title: "File Compression Tool",
    description: "Compress your files to save space and reduce file size.",
    link: "/file-tools/compression",
  },
]

export default function FileTools() {
  return (
    <CategoryPage
      title="File Conversion and Compression Tools"
      description="Convert and compress files with ease"
      tools={tools}
    />
  )
}
