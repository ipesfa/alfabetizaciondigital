"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface GlowEffectProps {
  children: React.ReactNode
  className?: string
}

export default function GlowEffect({ children, className = "" }: GlowEffectProps) {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return

      const { clientX, clientY } = e
      const rect = glowRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      glowRef.current.style.setProperty("--mouse-x", `${x}px`)
      glowRef.current.style.setProperty("--mouse-y", `${y}px`)
    }

    const element = glowRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <motion.div
      ref={glowRef}
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(139,92,246,0.15),transparent_40%)]"></div>
      {children}
    </motion.div>
  )
}
