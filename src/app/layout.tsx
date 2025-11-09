import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { FirebaseClientProvider } from '@/firebase';
import AIAssistantClient from '@/components/ai/AIAssistantClient';
import { AnimationWrapper } from '@/components/ui/animation-wrapper';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ThemeToggleButton } from '@/components/theme/ThemeToggleButton';

export const metadata: Metadata = {
  title: 'UniConnect',
  description: 'A comprehensive University Student Portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background transition-colors duration-300">
        <ThemeProvider>
          <FirebaseClientProvider>
            <AnimationWrapper>
              {children}
            </AnimationWrapper>
            <AIAssistantClient />
            <ThemeToggleButton />
          </FirebaseClientProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
