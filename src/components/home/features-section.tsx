'use client'

import { motion } from 'framer-motion'
import { Calendar, GraduationCap, LayoutDashboard } from 'lucide-react'

const features = [
  {
    icon: <LayoutDashboard className="h-8 w-8" />,
    title: "Centralized Dashboard",
    description: "A single view of your academic life. See upcoming classes, recent announcements, and your GPA at a glance.",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Grade Tracking",
    description: "Stay on top of your performance. View detailed grade reports for all your courses and semesters.",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Course Schedules",
    description: "Never miss a class. Your weekly schedule is clearly laid out, with times, locations, and instructor details.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            One platform to manage your entire academic life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex justify-center mb-6"
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}