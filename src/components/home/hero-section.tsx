'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-gradient-from via-primary-gradient-via to-primary-gradient-to animate-gradient">
                  Your All-in-One
                  <br />
                  University Hub
                </span>
                <motion.span
                  className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-primary-gradient-from/20 via-primary-gradient-via/20 to-primary-gradient-to/20 blur-2xl"
                  animate={{
                    opacity: [0.5, 0.3, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </h1>
            </motion.div>          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground sm:text-2xl max-w-2xl mx-auto"
          >
            UniConnect brings your entire campus experience into one seamless platform. Access grades, schedules, announcements, and resources with ease.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/login">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}