'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-glass');

  return (
    <section id="home" className="relative w-full h-screen">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-headline tracking-tight animate-sparkle">
          <span style={{ color: '#4aaece' }}>Glass</span> <span style={{ color: '#e77e29' }}>Arch</span>
        </h1>
          <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl mx-auto text-white/90 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000 delay-500">
            Arching Ideas into Reality
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 delay-700">
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto transition-transform duration-300 ease-out hover:-translate-y-1">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto transition-transform duration-300 ease-out hover:-translate-y-1">
              <Link href="#contact-form">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
