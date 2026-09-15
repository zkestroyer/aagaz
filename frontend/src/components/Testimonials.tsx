import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    quote:
      "From the first fitting to the final piece, everything felt genuinely personal.",
    author: "Aagaz Customer",
  },
  {
    quote:
      "The way they reinterpret our culture into modern silhouettes is unmatched.",
    author: "Aagaz Customer",
  },
  {
    quote:
      "Craftsmanship that speaks for itself. It doesn't just fit my body, it fits my identity.",
    author: "Aagaz Customer",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
  }, []);

  // Start the timer on mount and restart when index changes
  // Using a ref-based approach avoids the stale-closure issue with setInterval
  useState(() => {
    resetTimer();
  });

  const goTo = (idx: number) => {
    setCurrentIndex(idx);
    resetTimer();
  };

  const next = () => goTo((currentIndex + 1) % TESTIMONIALS.length);
  const prev = () =>
    goTo((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      aria-label="Testimonials"
      className="py-32 md:py-48 bg-bone px-mobile md:px-tablet lg:px-desktop-lg"
    >
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Decorative quote mark */}
        <Reveal delay={0.2} type="fade-in">
          <div
            className="text-[100px] md:text-[160px] leading-none text-obsidian/[0.04] font-display italic absolute left-1/2 -translate-x-1/2 -top-16 md:-top-24 select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>
        </Reveal>

        {/* Quote carousel */}
        <div
          className="relative min-h-[180px] md:min-h-[220px] flex items-center justify-center"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
              className="absolute w-full px-4"
              aria-live="polite"
            >
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-obsidian mb-8">
                &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
              </p>
              <footer className="font-body text-[10px] uppercase tracking-[0.25em] text-obsidian/40">
                — {TESTIMONIALS[currentIndex].author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prev}
            className="font-body text-[10px] uppercase tracking-[0.2em] text-obsidian/30 hover:text-obsidian transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            Prev
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="relative w-8 h-[2px] bg-obsidian/10 overflow-hidden"
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={currentIndex === idx ? "true" : undefined}
              >
                <span
                  className="absolute inset-0 bg-obsidian transition-transform duration-500 origin-left"
                  style={{
                    transform:
                      currentIndex === idx ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="font-body text-[10px] uppercase tracking-[0.2em] text-obsidian/30 hover:text-obsidian transition-colors duration-300"
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
