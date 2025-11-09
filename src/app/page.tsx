

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ArrowRight, Calendar, GraduationCap, LayoutDashboard } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
    {
      icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
      title: "Centralized Dashboard",
      description: "A single view of your academic life. See upcoming classes, recent announcements, and your GPA at a glance.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Grade Tracking",
      description: "Stay on top of your performance. View detailed grade reports for all your courses and semesters.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Course Schedules",
      description: "Never miss a class. Your weekly schedule is clearly laid out, with times, locations, and instructor details.",
    },
];

export default function Home() {

  const featureSlides = PlaceHolderImages.filter(img => img.id.startsWith('features-'));

  featureSlides[0] = { ...featureSlides[0], title: 'All-New Student Dashboard', featureDescription: 'A personalized hub for your academic journey.' };
  featureSlides[1] = { ...featureSlides[1], title: 'Track Your Grades', featureDescription: 'Monitor your academic performance with ease.' };
  featureSlides[2] = { ...featureSlides[2], title: 'View Your Schedule', featureDescription: 'Organize your week at a glance.' };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.Logo className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            UniConnect
          </h1>
        </Link>
        <nav>
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Your All-in-One University Hub
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground sm:text-xl">
                UniConnect brings your entire campus experience into one seamless platform. Access grades, schedules, announcements, and resources with ease.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/login">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold tracking-tight">Everything You Need to Succeed</h3>
                    <p className="mt-2 text-lg text-muted-foreground">One platform to manage your entire academic life.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                    <div key={feature.title} className="text-center p-6 bg-background rounded-lg shadow-sm">
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="slideshow" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold tracking-tight">What's New at UniConnect</h3>
                    <p className="mt-2 text-lg text-muted-foreground">Explore our latest and greatest features.</p>
                </div>
                <Carousel className="w-full max-w-3xl mx-auto">
                    <CarouselContent>
                        {featureSlides.map((slide) => (
                            <CarouselItem key={slide.id}>
                                <Card className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="relative aspect-video">
                                            <Image 
                                                src={slide.imageUrl} 
                                                alt={slide.description} 
                                                fill 
                                                className="object-cover"
                                                data-ai-hint={slide.imageHint}
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                                                <h4 className="text-2xl font-bold text-white">{slide.title}</h4>
                                                <p className="text-white/80">{slide.featureDescription}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-50px]" />
                    <CarouselNext className="right-[-50px]" />
                </Carousel>
            </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} UniConnect. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
