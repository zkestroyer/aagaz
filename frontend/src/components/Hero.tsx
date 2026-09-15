import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={containerRef}
      aria-label="Hero"
      className="relative min-h-[85vh] md:min-h-screen w-full bg-bone overflow-hidden"
    >
      {/* Desktop grid overlay — image placed absolutely behind text */}
      <div className="relative z-10 flex flex-col justify-end min-h-[85vh] md:min-h-screen px-mobile md:px-tablet lg:px-desktop-lg pt-28 pb-12 md:pb-16 lg:pb-20">

        {/* Label */}
        <Reveal delay={0.3} type="fade-in">
          <div className="font-body text-[10px] tracking-[0.25em] uppercase text-obsidian/50 mb-10 md:mb-16 flex items-center gap-4">
            <span className="w-6 h-[1px] bg-obsidian/20" aria-hidden="true" />
            AAGAZ / COLLECTION 01
          </div>
        </Reveal>

        {/* Headlines */}
        <div className="mb-10 md:mb-14 relative z-20">
          <TextReveal
            text="BEGIN"
            delay={0.15}
            className="font-display text-[17vw] sm:text-[14vw] lg:text-[10vw] leading-[0.82] text-obsidian tracking-[-0.04em] uppercase"
          />
          <TextReveal
            text="Your Individuality."
            delay={0.3}
            className="font-display italic text-[10vw] sm:text-[8vw] lg:text-[5.5vw] leading-[0.95] text-obsidian tracking-[-0.02em] ml-2 sm:ml-6 md:ml-12"
          />
        </div>

        {/* Subline + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 relative z-20">
          <div>
            <Reveal delay={0.55} type="fade-up">
              <p className="font-body text-[10px] md:text-xs text-obsidian/70 uppercase tracking-[0.2em] leading-[2] max-w-xs mb-8 md:mb-0">
                Pakistani heritage, reimagined<br className="hidden sm:block" /> for the individual.
              </p>
            </Reveal>
            <Reveal delay={0.65} type="fade-up">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button variant="primary" withArrow>
                  Explore Collection
                </Button>
                <Button variant="ghost">Discover Bespoke</Button>
              </div>
            </Reveal>
          </div>

          {/* Collection indicator — desktop only */}
          <Reveal delay={0.9} type="fade-up" className="hidden md:block">
            <div className="bg-sand px-8 py-10 lg:px-10 lg:py-12 border border-obsidian/5">
              <span className="font-display text-5xl lg:text-6xl text-obsidian tracking-[-0.04em] block mb-3">
                01
              </span>
              <div className="font-body text-[9px] lg:text-[10px] uppercase tracking-[0.25em] text-obsidian/60 leading-relaxed">
                <p>Contemporary Heritage</p>
                <p className="mt-1 text-obsidian/30">2026</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed hero image */}
      <div className="absolute inset-0 z-0">
        <Reveal type="clip-path" delay={0} className="w-full h-full">
          <motion.div style={{ y: imageY }} className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1592878940526-0214b0f374f6?q=80&w=1920&auto=format&fit=crop"
              alt="Model wearing an olive blazer from the AAGAZ contemporary heritage collection"
              className="w-full h-full object-cover object-top"
              fetchPriority="high"
            />
            {/* Gradient so text remains readable over image */}
            <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/80 to-transparent lg:via-bone/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-transparent" />
          </motion.div>
        </Reveal>
      </div>

      {/* Mobile collection indicator */}
      <div className="md:hidden px-mobile pb-8 relative z-10 flex items-center gap-4">
        <span className="font-display text-4xl text-obsidian tracking-[-0.04em]">01</span>
        <div className="font-body text-[9px] uppercase tracking-[0.2em] text-obsidian/50 leading-relaxed">
          <p>Contemporary Heritage</p>
          <p>2026</p>
        </div>
      </div>
    </section>
  );
}
