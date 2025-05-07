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
  let initial = { opacity: 0 }
  
  if (direction === 'up') {
    initial = { ...initial, y: 40 }
  } else if (direction === 'down') {
    initial = { ...initial, y: -40 }
  } else if (direction === 'left') {
    initial = { ...initial, x: 40 }
  } else if (direction === 'right') {
    initial = { ...initial, x: -40 }
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
