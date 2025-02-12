"use client"

import CategoryPage from "../../components/CategoryPage"
import { Image, FileVideo, Headphones, Type } from "lucide-react"

const tools = [
  {
    icon: Image,
    title: "Basic Image Editor",
    description: "Edit your images with basic tools and filters.",
    link: "/editing-multimedia/image-editor",
  },
  {
    icon: Image,
    title: "Image Compressor",
    description: "Reduce image file size without losing quality.",
    link: "/editing-multimedia/image-compressor",
  },
  {
    icon: FileVideo,
    title: "Video Converter",
    description: "Convert videos between different formats.",
    link: "/editing-multimedia/video-converter",
  },
  {
    icon: Headphones,
    title: "Online Audio Editor",
    description: "Edit and manipulate audio files online.",
    link: "/editing-multimedia/audio-editor",
  },
  {
    icon: Type,
    title: "Text-to-Speech Converter",
    description: "Convert written text into spoken words.",
    link: "/editing-multimedia/text-to-speech",
  },
]

export default function EditingMultimedia() {
  return (
    <CategoryPage
      title="Editing and Multimedia Tools"
      description="Create and edit multimedia content effortlessly"
      tools={tools}
    />
  )
}
