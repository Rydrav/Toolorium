"use client"

import CategoryPage from "../../components/CategoryPage"
import { Code, CheckCircle, FileText, FileJson, Database, GitCompare } from "lucide-react"

const tools = [
  {
    icon: Code,
    title: "Online Code Editor",
    description: "Write and test code in various programming languages.",
    link: "/developer-programming/code-editor",
  },
  {
    icon: CheckCircle,
    title: "Code Validator (HTML, CSS & JavaScript)",
    description: "Validate your code for errors and best practices.",
    link: "/developer-programming/code-validator",
  },
  {
    icon: FileText,
    title: "Markdown Editor",
    description: "Create and preview Markdown documents.",
    link: "/developer-programming/markdown-editor",
  },
  {
    icon: FileJson,
    title: "CSS Compiler",
    description: "Compile and minify your CSS code.",
    link: "/developer-programming/css-compiler",
  },
  {
    icon: Database,
    title: "SQL Compiler",
    description: "Write and test SQL queries online.",
    link: "/developer-programming/sql-compiler",
  },
  {
    icon: GitCompare,
    title: "File Comparator",
    description: "Compare and find differences between files.",
    link: "/developer-programming/file-comparator",
  },
]

export default function DeveloperProgramming() {
  return (
    <CategoryPage
      title="Developer and Programming Tools"
      description="Essential tools for developers and programmers"
      tools={tools}
    />
  )
}
