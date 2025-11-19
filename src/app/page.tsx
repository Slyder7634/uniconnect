import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { SlideShowSection } from '@/components/home/slideshow-section';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <AnimatedBackground />
      <header className='fixed top-0 left-0 right-0 bg-background/40 backdrop-blur-xl border-b border-white/10 z-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <Icons.Logo className='h-8 w-8 text-primary' />
            <h1 className='text-2xl font-bold tracking-tight text-foreground'>
              UniBridge
            </h1>
          </Link>
          <nav>
            <Link href='/login'>
              <Button variant='outline' className='rounded-full'>Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className='flex-1 pt-20'>
        <HeroSection />
        <FeaturesSection />
        <SlideShowSection />
      </main>

      <footer className='border-t border-white/10 bg-background/80 backdrop-blur-lg'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center'>
          <p className='text-muted-foreground'>&copy; {new Date().getFullYear()} UniBridge. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}