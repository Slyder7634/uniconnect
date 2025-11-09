'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function SlideShowSection() {
  const featureSlides = PlaceHolderImages.filter(img => img.id.startsWith('features-')).map((slide, index) => ({
    ...slide,
    title: index === 0 ? 'All-New Student Dashboard' :
           index === 1 ? 'Track Your Grades' :
           'View Your Schedule',
    featureDescription: index === 0 ? 'A personalized hub for your academic journey.' :
                       index === 1 ? 'Monitor your academic performance with ease.' :
                       'Organize your week at a glance.'
  }))

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
            What's New at UniConnect
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore our latest and greatest features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featureSlides.map((slide, index) => (
                <CarouselItem key={slide.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={slide.imageUrl}
                        alt={slide.description}
                        fill
                        className="object-cover"
                        data-ai-hint={slide.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-3xl font-bold text-white mb-2"
                        >
                          {slide.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-white/90 text-lg"
                        >
                          {slide.featureDescription}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 hover:scale-110 transition-transform" />
            <CarouselNext className="-right-12 hover:scale-110 transition-transform" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}