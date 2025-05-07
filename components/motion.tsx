"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ✅ Export them directly (no aliasing or re-wrapping)
export { motion, AnimatePresence }

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = null, 
  duration = 0.5,
  ...props 
}: { 
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | null
  duration?: number
  [key: string]: any
}) => {
  let initial: { opacity: number; x?: number; y?: number } = { opacity: 0 }

  if (direction === 'up') {
    initial.y = 40
  } else if (direction === 'down') {
    initial.y = -40
  } else if (direction === 'left') {
    initial.x = 40
  } else if (direction === 'right') {
    initial.x = -40
  }

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
