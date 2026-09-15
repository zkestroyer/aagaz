import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Bespoke', href: '#bespoke' },
  { label: 'Street Edit', href: '#street-edit' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-bone flex flex-col justify-center items-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
            <span className="font-display text-2xl tracking-widest text-obsidian uppercase">Aagaz</span>
            <button 
              onClick={onClose}
              className="p-2 hover:text-terracotta transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Background decorative element */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.03 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span className="font-display text-[30vh] text-obsidian italic">A</span>
          </motion.div>

          <nav className="flex flex-col items-center gap-8 z-10">
            {MENU_ITEMS.map((item, i) => (
              <div key={item.label} className="overflow-hidden">
                <motion.a
                  href={item.href}
                  onClick={onClose}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-4xl sm:text-5xl uppercase tracking-widest text-obsidian hover:text-terracotta hover:italic transition-all"
                >
                  {item.label}
                </motion.a>
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
