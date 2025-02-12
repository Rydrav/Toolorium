"use client"

import CategoryPage from "../../components/CategoryPage"
import { Globe, Book, BarChart2 } from "lucide-react"

const tools = [
  {
    icon: Globe,
    title: "Online Translator",
    description: "Translate text between multiple languages instantly.",
    link: "/language-writing/translator",
  },
  {
    icon: Book,
    title: "Dictionary & Thesaurus",
    description: "Look up definitions and find synonyms for any word.",
    link: "/language-writing/dictionary",
  },
  {
    icon: BarChart2,
    title: "Text Analyzer",
    description: "Analyze your text for readability, word count, and more.",
    link: "/language-writing/text-analyzer",
  },
]

export default function LanguageWriting() {
  return (
    <CategoryPage
      title="Language and Writing Tools"
      description="Enhance your writing with advanced language tools"
      tools={tools}
    />
  )
}
