import { LoginForm } from '@/components/login-form';
import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const loginImage = PlaceHolderImages.find((img) => img.id === 'login-background');
  return (
    <main className="min-h-screen w-full lg:grid lg:grid-cols-2">
        <div className="relative hidden lg:block">
           {loginImage && (
             <Image 
                src={loginImage.imageUrl}
                alt={loginImage.description}
                fill
                className="object-cover blur-sm"
                data-ai-hint={loginImage.imageHint}
             />
           )}
            <div className="relative z-10 flex h-full flex-col justify-end bg-black/40 p-10 text-white">
                <h2 className="text-3xl font-bold">Welcome to UniBridge</h2>
                <p className="mt-2 text-lg leading-relaxed">Your central hub for academic success. Connect, learn, and grow with us.</p>
            </div>
        </div>
        <div className="flex items-center justify-center p-8 bg-background relative">
            <Link href="/" className="absolute top-8 left-8">
                <Button variant="ghost">
                    <ArrowLeft className="h-4 w-4" />
                </Button>
            </Link>
            <div className="flex w-full max-w-sm flex-col items-center space-y-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Icons.Logo className="h-10 w-10 text-primary" />
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        UniBridge
                    </h1>
                </Link>
                <Card className="w-full border-0 shadow-none sm:border sm:shadow-sm">
                    <CardContent className="p-6">
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
      </div>
    </main>
  );
}
