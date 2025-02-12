"use client"

import CategoryPage from "../../components/CategoryPage"
import { Key, Lock } from "lucide-react"

const tools = [
  {
    icon: Key,
    title: "Secure Password Generator",
    description: "Generate strong and secure passwords.",
    link: "/security-privacy/password-generator",
  },
  {
    icon: Lock,
    title: "Text Encryption/Decryption Tool",
    description: "Encrypt and decrypt text for secure communication.",
    link: "/security-privacy/encryption-tool",
  },
]

export default function SecurityPrivacy() {
  return (
    <CategoryPage
      title="Security and Privacy Tools"
      description="Protect your data with our security and privacy tools"
      tools={tools}
    />
  )
}
