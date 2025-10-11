import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://i.postimg.cc/Vv4PzMBH/fd1a9d67-ca9b-44aa-9a2d-32d16f6f05c9.png";

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Column 1: Logo and About */}
          <div className="flex flex-col items-center md:items-start">
             <Link href="#home" className="flex items-center gap-3 text-2xl font-bold font-headline mb-4">
                <Image src={logoUrl} alt="Glass Arch Logo" width={40} height={40} className="rounded-full" />
                <span className="text-white">Glass Arch</span>
            </Link>
            <p className="text-sm text-background/70 max-w-xs">
              Arching Ideas into Reality. Premium solutions in toughened glass, aluminium, and uPVC for modern spaces.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-background/70">
                <a href="tel:+919971800278" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                    <span>+91 9971800278</span>
                </a>
                <a href="mailto:binodsingh9971@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                    <span>binodsingh9971@gmail.com</span>
                </a>
                <a href="mailto:glassarch.helpdesk@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                    <span>glassarch.helpdesk@gmail.com</span>
                </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {currentYear} Glass Arch. All rights reserved. Serving clients across India.</p>
        </div>
      </div>
    </footer>
  );
}
