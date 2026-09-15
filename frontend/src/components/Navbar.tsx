import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { cn } from '@/utils/cn';
import MobileMenu from './MobileMenu';

const NAV_ITEMS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Bespoke', href: '#bespoke' },
  { label: 'Street Edit', href: '#street-edit' },
  { label: 'Our Story', href: '#our-story' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-mobile md:px-tablet lg:px-desktop-lg py-5 flex items-center justify-between",
          isScrolled
            ? "bg-bone/95 backdrop-blur-md border-b border-obsidian/5"
            : "bg-transparent border-b border-transparent"
        )}
      >
        {/* Logo */}
        <div className="flex-1 flex items-center justify-start">
          <a
            href="/"
            className="font-display text-xl md:text-2xl tracking-[0.3em] text-obsidian uppercase"
            aria-label="AAGAZ Home"
          >
            Aagaz
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-[10px] tracking-[0.2em] uppercase text-obsidian relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-obsidian transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions + Mobile Hamburger */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <button
            className="hidden lg:block hover:text-terracotta transition-colors duration-300"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            className="hidden lg:flex items-center gap-2 hover:text-terracotta transition-colors duration-300"
            aria-label="Shopping cart, 0 items"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-body text-[10px] tracking-[0.15em]">(0)</span>
          </button>
          <button
            className="lg:hidden p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
