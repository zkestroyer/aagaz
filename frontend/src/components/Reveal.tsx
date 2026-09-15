import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cn } from '@/utils/cn';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
  type?: 'fade-up' | 'fade-in' | 'stagger' | 'clip-path';
}

export default function Reveal({
  children,
  width = '100%',
  delay = 0,
  className,
  type = 'fade-up'
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any }
      }
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any }
      }
    },
    'clip-path': {
      hidden: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      visible: { 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] as any }
      }
    },
    'stagger': {
       // Handled by parent variants normally, but placeholder here
       hidden: { opacity: 0 },
       visible: { opacity: 1 }
    }
  };

  return (
    <div ref={ref} style={{ width }} className={cn("relative", className)}>
      <motion.div
        variants={variants[type]}
        initial="hidden"
        animate={mainControls}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
