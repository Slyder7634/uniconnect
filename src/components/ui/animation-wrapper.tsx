'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimationWrapperProps {
  children: React.ReactNode
  className?: string
}

export function AnimationWrapper({ children, className }: AnimationWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}