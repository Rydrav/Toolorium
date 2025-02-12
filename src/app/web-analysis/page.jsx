"use client"

import CategoryPage from "../../components/CategoryPage"
import { Search, Link2, Wifi, MapPin } from "lucide-react"

const tools = [
  {
    icon: Search,
    title: "SEO Analyzer",
    description: "Analyze and optimize your website for search engines.",
    link: "/web-analysis/seo-analyzer",
  },
  {
    icon: Link2,
    title: "Broken Links Checker",
    description: "Find and fix broken links on your website.",
    link: "/web-analysis/broken-links",
  },
  {
    icon: Wifi,
    title: "Internet Speed Test",
    description: "Test your internet connection speed.",
    link: "/web-analysis/speed-test",
  },
  {
    icon: MapPin,
    title: "IP Address Lookup",
    description: "Get detailed information about an IP address.",
    link: "/web-analysis/ip-lookup",
  },
]

export default function WebAnalysis() {
  return (
    <CategoryPage
      title="Web Analysis and Optimization Tools"
      description="Analyze and optimize your web presence"
      tools={tools}
    />
  )
}
