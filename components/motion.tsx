"use client"

import React from 'react'
import { motion as framerMotion } from 'framer-motion'

export const motion = framerMotion
export const AnimatePresence = framerMotion.AnimatePresence

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
      transition={{ duration: duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}