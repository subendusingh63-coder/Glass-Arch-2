"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoUrl = "https://i.postimg.cc/Vv4PzMBH/fd1a9d67-ca9b-44aa-9a2d-32d16f6f05c9.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/40 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="#home" className="flex items-center gap-3 text-2xl font-bold font-headline">
             <Image src={logoUrl} alt="Glass Arch Logo" width={40} height={40} className="rounded-full" />
            <span className="transition-colors text-base sm:text-2xl text-white">Glass Arch</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-wider transition-colors nav-link-underline pb-1 text-white/90 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
             <Button asChild size="sm" variant="default">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-white hover:bg-transparent hover:text-white/80">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-background p-0">
                <SheetHeader className="p-6 pb-0">
                  <div className="flex justify-between items-center mb-10">
                    <SheetClose asChild>
                     <Link href="#home" className="flex items-center gap-3 text-2xl font-bold font-headline text-foreground">
                        <Image src={logoUrl} alt="Glass Arch Logo" width={40} height={40} className="rounded-full" />
                        <span>Glass Arch</span>
                    </Link>
                    </SheetClose>
                  </div>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="p-6 pt-0 flex flex-col h-full">
                  <nav className="flex flex-col gap-6 text-center">
                    {[...navLinks, { href: '#contact', label: 'Contact Us' }].map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href} className="text-xl font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto border-t pt-6">
                    <SheetClose asChild>
                      <Button asChild size="lg" className="w-full">
                        <Link href="#contact">Contact Us</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
