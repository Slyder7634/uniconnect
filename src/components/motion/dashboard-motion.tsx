'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function DashboardMotionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.main
      className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.main>
  )
}