'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card as BaseCard, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card"

const AnimatedCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg",
        className
      )}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      {...props}
    />
  )
})
AnimatedCard.displayName = "AnimatedCard"

export { AnimatedCard, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }