import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';

interface TextRevealProps {
  text: string | string[];
  delay?: number;
  className?: string;
}

export default function TextReveal({ text, delay = 0, className }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const lines = Array.isArray(text) ? text : [text];

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden pb-2 -mb-2">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: "110%" },
              visible: { 
                y: "0%", 
                transition: { 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: delay + (i * 0.15) 
                } 
              }
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
