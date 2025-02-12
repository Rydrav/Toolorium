"use client"

import CategoryPage from "../../components/CategoryPage"
import { Calendar, CheckSquare, Clock, TrendingUp } from "lucide-react"

const tools = [
  {
    icon: Calendar,
    title: "Calendar with Reminders",
    description: "Organize your schedule and never miss an important event.",
    link: "/productivity-management/calendar",
  },
  {
    icon: CheckSquare,
    title: "Task Manager / To-Do List",
    description: "Keep track of your tasks and boost your productivity.",
    link: "/productivity-management/task-manager",
  },
  {
    icon: Clock,
    title: "Pomodoro Timer",
    description: "Improve your focus and time management with the Pomodoro Technique.",
    link: "/productivity-management/pomodoro",
  },
  {
    icon: TrendingUp,
    title: "Habit Tracker",
    description: "Build and maintain positive habits for personal growth.",
    link: "/productivity-management/habit-tracker",
  },
]

export default function ProductivityManagement() {
  return (
    <CategoryPage
      title="Productivity and Management Tools"
      description="Boost your efficiency with our suite of productivity tools"
      tools={tools}
    />
  )
}
