"use client"

import { useEffect } from "react"
import { motion, useScroll, useAnimation } from "framer-motion"
import Link from "next/link"
import { ChevronUp, ArrowLeft } from "lucide-react"

const NavigationArrows = ({ backLink }) => {
  const { scrollY } = useScroll()
  const backButtonControls = useAnimation()
  const scrollTopButtonControls = useAnimation()

  useEffect(() => {
    const updateButtons = () => {
      const currentScroll = scrollY.get()
      const scrollThreshold = window.innerHeight / 2

      if (currentScroll > scrollThreshold) {
        backButtonControls.start({
          bottom: "88px",
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        })
        scrollTopButtonControls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        })
      } else {
        backButtonControls.start({
          bottom: "32px",
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        })
        scrollTopButtonControls.start({
          opacity: 0,
          transition: { duration: 0.3 },
        })
      }
    }

    const unsubscribe = scrollY.onChange(updateButtons)
    return () => unsubscribe()
  }, [scrollY, backButtonControls, scrollTopButtonControls])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <motion.div className="fixed right-8 z-50" animate={backButtonControls} initial={{ bottom: "32px", opacity: 1 }}>
        <Link href={backLink} passHref>
          <motion.button
            className="bg-yellow-400 text-purple-900 rounded-full p-3 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </motion.button>
        </Link>
      </motion.div>

      <motion.button
        className="fixed bottom-8 right-8 bg-yellow-400 text-purple-900 rounded-full p-3 shadow-lg z-40"
        animate={scrollTopButtonControls}
        initial={{ opacity: 0 }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={24} />
      </motion.button>
    </>
  )
}

export default NavigationArrows
