"use client"

import CategoryPage from "../../components/CategoryPage"
import { TrendingUp, FileText } from "lucide-react"

const tools = [
  {
    icon: TrendingUp,
    title: "Price Monitoring Tool",
    description: "Track and monitor prices of products online.",
    link: "/financial-monitoring/price-monitor",
  },
  {
    icon: FileText,
    title: "Invoice Generator",
    description: "Create professional invoices easily.",
    link: "/financial-monitoring/invoice-generator",
  },
]

export default function FinancialMonitoring() {
  return (
    <CategoryPage
      title="Financial and Monitoring Tools"
      description="Track finances and monitor important metrics"
      tools={tools}
    />
  )
}
