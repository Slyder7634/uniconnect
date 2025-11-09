import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "./button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"