"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

// Define props interface for ScrollFadeSection
interface ScrollFadeSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
}

function FadeContainer({
  children,
  className,
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FadeDiv({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
function FadeSpan({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span variants={item} className={className}>
      {children}
    </motion.span>
  )
}

// Reusable ScrollFadeSection component
function ScrollFadeSection({
  children,
  className,
  delay = 0,
}: ScrollFadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Animation variants for sections with custom delay parameter
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for smoother end
        delay: delay, // Include delay in the variants instead of inline style
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { FadeContainer, FadeDiv, FadeSpan, ScrollFadeSection }
